import { genzDictionary } from '../data/genzDictionary';
import type { DictionaryEntry, TranslationCategory } from '../data/genzDictionary';

export type TranslationMode = 'genz-to-corporate' | 'corporate-to-genz';

export interface TranslatedSegment {
  original: string;
  translated: string;
  isTranslated: boolean;
  category?: TranslationCategory;
  humorRating?: number;
}

export interface TranslationResult {
  segments: TranslatedSegment[];
  fullText: string;
  genZScore: number;
  corporateScore: number;
  matchCount: number;
}

// Pre-compute maps and sorted keys for fast lookup
const genzToCorpMap = new Map<string, DictionaryEntry>();
const corpToGenzMap = new Map<string, DictionaryEntry>();

genzDictionary.forEach(entry => {
    // Some entries might have same Gen Z key, last one wins, but our dictionary is mostly unique
    genzToCorpMap.set(entry.genZ.toLowerCase(), entry);
    corpToGenzMap.set(entry.corporate.toLowerCase(), entry);
});

const sortedGenzKeys = Array.from(genzToCorpMap.keys()).sort((a, b) => b.length - a.length);
const sortedCorpKeys = Array.from(corpToGenzMap.keys()).sort((a, b) => b.length - a.length);

const isAlphanumeric = (char: string) => /^[a-z0-9]$/i.test(char);

// List of corporate jargon for scoring
const corporateJargon = [
    "leverage", "synergy", "deliverable", "stakeholder", "alignment", 
    "bandwidth", "circle back", "touch base", "deep dive", "actionable", 
    "paradigm", "robust", "scalable", "ecosystem", "value-add", 
    "move the needle", "low-hanging fruit", "boil the ocean", "at the end of the day",
    "optimize", "agile", "onboard", "best practice", "core competency"
];

export function translateText(input: string, mode: TranslationMode): TranslationResult {
    if (!input.trim()) {
        return {
            segments: [{ original: input, translated: input, isTranslated: false }],
            fullText: input,
            genZScore: 0,
            corporateScore: 0,
            matchCount: 0
        };
    }

    const isGenzToCorp = mode === 'genz-to-corporate';
    const sortedKeys = isGenzToCorp ? sortedGenzKeys : sortedCorpKeys;
    const lookupMap = isGenzToCorp ? genzToCorpMap : corpToGenzMap;

    const segments: TranslatedSegment[] = [];
    let currentIndex = 0;
    const lowerInput = input.toLowerCase();

    while (currentIndex < input.length) {
        let matchFound = false;

        for (const key of sortedKeys) {
            if (lowerInput.startsWith(key, currentIndex)) {
                const entry = lookupMap.get(key)!;
                
                // Word boundary check
                const beforeChar = currentIndex > 0 ? lowerInput[currentIndex - 1] : '';
                const afterChar = currentIndex + key.length < input.length ? lowerInput[currentIndex + key.length] : '';
                
                // If it's not an emoji, enforce word boundaries
                if (!entry.isEmoji) {
                    const startsWithAlpha = isAlphanumeric(key[0]);
                    const endsWithAlpha = isAlphanumeric(key[key.length - 1]);
                    
                    if (startsWithAlpha && isAlphanumeric(beforeChar)) continue;
                    if (endsWithAlpha && isAlphanumeric(afterChar)) continue;
                }

                // Match found!
                const originalText = input.substring(currentIndex, currentIndex + key.length);
                const translatedText = isGenzToCorp ? entry.corporate : entry.genZ;
                
                // Maintain basic casing if original was fully capitalized or title cased
                let finalTranslatedText = translatedText;
                if (!entry.isEmoji) {
                    if (originalText === originalText.toUpperCase() && originalText.match(/[A-Z]/)) {
                        finalTranslatedText = translatedText.toUpperCase();
                    } else if (originalText[0] === originalText[0].toUpperCase()) {
                        finalTranslatedText = translatedText.charAt(0).toUpperCase() + translatedText.slice(1);
                    }
                }

                segments.push({
                    original: originalText,
                    translated: finalTranslatedText,
                    isTranslated: true,
                    category: entry.category,
                    humorRating: entry.humorRating
                });

                currentIndex += key.length;
                matchFound = true;
                break;
            }
        }

        if (!matchFound) {
            // Find the next word boundary or non-alphanumeric character
            let nextIndex = currentIndex + 1;
            const isCurrentAlpha = isAlphanumeric(lowerInput[currentIndex]);
            
            while (nextIndex < input.length) {
                const isNextAlpha = isAlphanumeric(lowerInput[nextIndex]);
                if (isCurrentAlpha !== isNextAlpha) {
                    break;
                }
                nextIndex++;
            }

            const unmatchText = input.substring(currentIndex, nextIndex);
            
            // Try to append to the last segment if it wasn't translated
            const lastSegment = segments[segments.length - 1];
            if (lastSegment && !lastSegment.isTranslated) {
                lastSegment.original += unmatchText;
                lastSegment.translated += unmatchText;
            } else {
                segments.push({
                    original: unmatchText,
                    translated: unmatchText,
                    isTranslated: false
                });
            }

            currentIndex = nextIndex;
        }
    }

    const fullText = segments.map(s => s.translated).join('');

    // Calculate scores
    // Total word count approximation
    const words = input.match(/\b\w+\b/g) || [];
    const totalTokens = words.length || 1;

    let matchCount = 0;
    segments.forEach(s => {
        if (s.isTranslated) matchCount++;
    });

    let genZScore = 0;
    let corporateScore = 0;

    if (isGenzToCorp) {
        // Gen Z Score based on dictionary match rate in input
        const translatedWords = segments.filter(s => s.isTranslated).map(s => s.original.match(/\b\w+\b/g)?.length || 1).reduce((a, b) => a + b, 0);
        genZScore = Math.min(100, Math.round((translatedWords / totalTokens) * 100));
        
        // Corporate score based on jargon in output
        const outLower = fullText.toLowerCase();
        let jargonMatches = 0;
        corporateJargon.forEach(j => {
            if (outLower.includes(j)) jargonMatches++;
        });
        corporateScore = Math.min(100, Math.round((jargonMatches * 15) + (genZScore * 0.8))); // Correlated but slightly distinct
    } else {
        // Corporate score based on dictionary match rate in input
        const translatedWords = segments.filter(s => s.isTranslated).map(s => s.original.match(/\b\w+\b/g)?.length || 1).reduce((a, b) => a + b, 0);
        
        let inLower = input.toLowerCase();
        let jargonMatches = 0;
        corporateJargon.forEach(j => {
            if (inLower.includes(j)) jargonMatches++;
        });

        corporateScore = Math.min(100, Math.round(((translatedWords + jargonMatches) / totalTokens) * 100));
        
        // Gen Z score based on output
        genZScore = Math.min(100, Math.round((matchCount * 20))); 
    }

    // Ensure they always show up well for demo purposes
    if (matchCount > 0) {
        if (isGenzToCorp) {
            genZScore = Math.max(genZScore, 40);
            corporateScore = Math.max(corporateScore, 60);
        } else {
            corporateScore = Math.max(corporateScore, 40);
            genZScore = Math.max(genZScore, 60);
        }
    }

    return {
        segments,
        fullText,
        genZScore,
        corporateScore,
        matchCount
    };
}
