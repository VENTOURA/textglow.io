// ── Types ──
export interface TextStats { words: number; characters: number; charactersNoSpaces: number; sentences: number; paragraphs: number; readingTimeMinutes: number; speakingTimeMinutes: number; }
export interface ReadabilityResult { fleschReadingEase: number; fleschKincaidGrade: number; avgSentenceLength: number; avgSyllablesPerWord: number; complexWordPercentage: number; longSentences: LongSentence[]; recommendation: string; readingLevel: string; }
export interface LongSentence { text: string; wordCount: number; index: number; }
export interface PlatformLimit { platform: string; limit: number; icon: string; currentCount: number; isOver: boolean; difference: number; relevant: boolean; }
export interface WordFrequency { word: string; count: number; percentage: number; }

// ── Syllable exceptions ──
const SYLLABLE_OVERRIDES: Record<string, number> = {
  people: 2, business: 2, different: 3, every: 3, evening: 3, everything: 4, beautiful: 3,
  interesting: 4, comfortable: 3, chocolate: 3, favorite: 3, family: 3, usually: 4,
  vegetable: 3, separate: 3, temperature: 4, average: 3, camera: 3, several: 3,
  area: 3, idea: 3, real: 1, create: 2, fire: 1, hire: 1, desire: 3, entire: 3,
  sure: 1, pure: 1, were: 1, where: 1, there: 1, here: 1, the: 1, are: 1,
  come: 1, some: 1, done: 1, gone: 1, one: 1, none: 1, give: 1, have: 1, live: 1,
  love: 1, move: 1, above: 2, twelve: 1, their: 1, eye: 1, aisle: 1,
};

// ── Syllable counter ──
const syllableCache = new Map<string, number>();

export function countSyllables(word: string): number {
  const w = word.toLowerCase().replace(/[^a-z]/g, '');
  if (!w) return 0;
  if (syllableCache.has(w)) return syllableCache.get(w)!;

  if (SYLLABLE_OVERRIDES[w] !== undefined) { syllableCache.set(w, SYLLABLE_OVERRIDES[w]); return SYLLABLE_OVERRIDES[w]; }

  let count = 0;
  const vowels = 'aeiouy';
  let prevVowel = false;

  for (let i = 0; i < w.length; i++) {
    const isVowel = vowels.includes(w[i]) && !(w[i] === 'y' && i === 0);
    if (isVowel && !prevVowel) count++;
    prevVowel = isVowel;
  }

  // Silent E
  if (w.endsWith('e') && count > 1 && !w.endsWith('le')) count--;

  // -le preceded by consonant
  if (w.endsWith('le') && w.length > 2 && !vowels.includes(w[w.length - 3])) {
    // Already counted in vowel loop usually, but ensure at least
  }

  // -ed ending: don't count unless preceded by t or d
  if (w.endsWith('ed') && w.length > 3) {
    const beforeEd = w[w.length - 3];
    if (beforeEd !== 't' && beforeEd !== 'd') {
      // The 'e' in '-ed' was likely counted; subtract if so
      if (count > 1) count--;
    }
  }

  // -es ending: only add for sibilant sounds
  if (w.endsWith('es') && w.length > 3) {
    const before = w[w.length - 3];
    if (!['s', 'x', 'z', 'h', 'c'].includes(before)) {
      if (count > 1) count--;
    }
  }

  count = Math.max(1, count);
  syllableCache.set(w, count);
  return count;
}

// ── Sentence splitting ──
const ABBREVIATIONS = new Set(['mr', 'mrs', 'ms', 'dr', 'prof', 'sr', 'jr', 'st', 'vs', 'etc', 'inc', 'ltd', 'corp', 'dept', 'govt', 'approx', 'jan', 'feb', 'mar', 'apr', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec', 'u.s', 'u.k', 'e.g', 'i.e']);

export function splitSentences(text: string): string[] {
  if (!text.trim()) return [];
  const sentences: string[] = [];
  let current = '';

  const chars = [...text];
  for (let i = 0; i < chars.length; i++) {
    current += chars[i];
    if (['.', '!', '?'].includes(chars[i])) {
      // Check if followed by space/end or more punctuation
      const next = chars[i + 1];
      if (!next || next === ' ' || next === '\n' || next === '\r') {
        // Check abbreviation
        const lastWord = current.trim().split(/\s+/).pop()?.replace(/[.!?]+$/, '').toLowerCase() || '';
        if (chars[i] === '.' && ABBREVIATIONS.has(lastWord)) continue;
        // Check decimal number
        if (chars[i] === '.' && next && /\d/.test(next)) continue;
        // Check ellipsis
        if (chars[i] === '.' && chars[i + 1] === '.') continue;

        const trimmed = current.trim();
        if (trimmed) sentences.push(trimmed);
        current = '';
      }
    }
  }
  const remaining = current.trim();
  if (remaining) sentences.push(remaining);
  return sentences;
}

// ── Word extraction ──
function getWords(text: string): string[] {
  return text.match(/[a-zA-Z'-]+/g) || [];
}

// ── Text Stats ──
export function getTextStats(text: string): TextStats {
  if (!text.trim()) return { words: 0, characters: 0, charactersNoSpaces: 0, sentences: 0, paragraphs: 0, readingTimeMinutes: 0, speakingTimeMinutes: 0 };
  const words = getWords(text).length;
  return {
    words,
    characters: text.length,
    charactersNoSpaces: text.replace(/\s/g, '').length,
    sentences: splitSentences(text).length,
    paragraphs: text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length || (text.trim() ? 1 : 0),
    readingTimeMinutes: Math.max(0.1, Math.round((words / 238) * 10) / 10),
    speakingTimeMinutes: Math.max(0.1, Math.round((words / 150) * 10) / 10),
  };
}

// ── Readability ──
export function analyzeReadability(text: string): ReadabilityResult {
  const sentences = splitSentences(text);
  const words = getWords(text);
  const empty: ReadabilityResult = { fleschReadingEase: 0, fleschKincaidGrade: 0, avgSentenceLength: 0, avgSyllablesPerWord: 0, complexWordPercentage: 0, longSentences: [], recommendation: 'Add more text for readability analysis.', readingLevel: 'N/A' };
  if (words.length < 5 || sentences.length === 0) return empty;

  const totalSyllables = words.reduce((sum, w) => sum + countSyllables(w), 0);
  const avgSentenceLength = words.length / sentences.length;
  const avgSyllablesPerWord = totalSyllables / words.length;

  // Flesch Reading Ease
  let fre = 206.835 - 1.015 * avgSentenceLength - 84.6 * avgSyllablesPerWord;
  fre = Math.max(0, Math.min(100, Math.round(fre * 10) / 10));

  // Flesch-Kincaid Grade Level
  let fkgl = 0.39 * avgSentenceLength + 11.8 * avgSyllablesPerWord - 15.59;
  fkgl = Math.max(0, Math.round(fkgl * 10) / 10);

  // Complex words (3+ syllables, excluding common ones)
  const commonComplex = new Set(['important', 'everyone', 'another', 'together', 'however', 'anything', 'everything', 'understand', 'remember', 'continue', 'example', 'different', 'wonderful', 'beautiful', 'beginning', 'following', 'including', 'already', 'probably']);
  const complexWords = words.filter(w => countSyllables(w) >= 3 && !commonComplex.has(w.toLowerCase()));
  const complexWordPercentage = Math.round((complexWords.length / words.length) * 100);

  // Long sentences
  const longSentences: LongSentence[] = [];
  sentences.forEach((s, idx) => {
    const wc = getWords(s).length;
    if (wc > 25) longSentences.push({ text: s, wordCount: wc, index: idx });
  });

  // Reading level label
  let readingLevel: string;
  if (fre >= 90) readingLevel = 'Very Easy';
  else if (fre >= 80) readingLevel = 'Easy';
  else if (fre >= 70) readingLevel = 'Fairly Easy';
  else if (fre >= 60) readingLevel = 'Standard';
  else if (fre >= 50) readingLevel = 'Fairly Difficult';
  else if (fre >= 30) readingLevel = 'Difficult';
  else readingLevel = 'Very Confusing';

  // Recommendation
  let recommendation: string;
  if (fre >= 70 && avgSentenceLength <= 20) recommendation = 'Perfect for business emails and professional communication.';
  else if (fre >= 60 && fre < 70) recommendation = 'Good readability for professional writing. Most business audiences will find this clear.';
  else if (fre < 50) recommendation = 'This reads at an academic level — consider simplifying for a general audience.';
  else if (fre >= 80) recommendation = 'Very easy to read — great for social media and casual communication.';
  else if (avgSentenceLength > 22) recommendation = 'Your sentences are quite long — try breaking some up for better clarity.';
  else if (complexWordPercentage > 20) recommendation = 'High percentage of complex words. Consider using simpler alternatives where possible.';
  else recommendation = 'Readable and clear. Good balance of sentence length and vocabulary.';

  return { fleschReadingEase: fre, fleschKincaidGrade: fkgl, avgSentenceLength: Math.round(avgSentenceLength * 10) / 10, avgSyllablesPerWord: Math.round(avgSyllablesPerWord * 100) / 100, complexWordPercentage, longSentences, recommendation, readingLevel };
}

// ── Platform limits ──
export function checkPlatformLimits(text: string): PlatformLimit[] {
  const len = text.length;
  const platforms: Omit<PlatformLimit, 'currentCount' | 'isOver' | 'difference' | 'relevant'>[] = [
    { platform: 'Twitter/X Post', limit: 280, icon: '𝕏' },
    { platform: 'LinkedIn Post', limit: 3000, icon: '💼' },
    { platform: 'Instagram Caption', limit: 2200, icon: '📸' },
    { platform: 'Facebook Post', limit: 63206, icon: '📘' },
    { platform: 'Email Subject Line', limit: 60, icon: '📧' },
    { platform: 'Meta Description', limit: 155, icon: '🔍' },
    { platform: 'SMS', limit: 160, icon: '💬' },
    { platform: 'Google Ad Headline', limit: 30, icon: '📢' },
    { platform: 'Google Ad Description', limit: 90, icon: '📋' },
  ];
  return platforms.map(p => {
    const diff = p.limit - len;
    const isOver = len > p.limit;
    const threshold = p.limit * 0.2;
    return { ...p, currentCount: len, isOver, difference: diff, relevant: isOver || Math.abs(diff) <= threshold || len >= p.limit * 0.8 };
  });
}

// ── Word frequency ──
const STOP_WORDS = new Set('the be to of and a in that have i it for not on with he as you do at this but his by from they we her she or an will my one all would there their what so up out if about who get which go me when make can like time no just him know take people into year your good some could them see other than then now look only come its over think also back after use two how our work first well way even new want because any these give day most us is are was were been being am has had does did shall should may might must need very really much many more too also here there where why how each every both few own same still such'.split(' '));

export function getWordFrequency(text: string): WordFrequency[] {
  const words = getWords(text).map(w => w.toLowerCase()).filter(w => w.length > 1 && !STOP_WORDS.has(w));
  const freq: Record<string, number> = {};
  for (const w of words) freq[w] = (freq[w] || 0) + 1;
  const total = words.length || 1;
  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([word, count]) => ({ word, count, percentage: Math.round((count / total) * 100) }));
}
