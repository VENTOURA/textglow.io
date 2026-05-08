export interface AiMatch {
    text: string;
    points: number;
    reason: string;
    alternative?: string;
    isAiSignal: boolean;
}

export interface SentenceScore {
    text: string;
    aiScore: number;
    humanScore: number;
    matches: AiMatch[];
}

export interface AiDetectorResult {
    overallScore: number;
    scoreLabel: string;
    scoreDescription: string;
    sentences: SentenceScore[];
    flaggedPhrases: AiMatch[];
    wordCount: number;
    hasEnoughText: boolean;
}

const phraseSignals = [
    { phrase: "in today's fast-paced world", points: 5, reason: "Classic ChatGPT opening cliché", alternative: "Start directly with your main point" },
    { phrase: "it's important to note that", points: 4, reason: "Overused AI transition", alternative: "State the point directly" },
    { phrase: "it is important to note that", points: 4, reason: "Overused AI transition", alternative: "State the point directly" },
    { phrase: "it's worth noting that", points: 4, reason: "Overused AI transition", alternative: "State the point directly" },
    { phrase: "it is worth noting that", points: 4, reason: "Overused AI transition", alternative: "State the point directly" },
    { phrase: "in conclusion", points: 3, reason: "Academic and formulaic closing", alternative: "Just make your final point" },
    { phrase: "this serves as a testament to", points: 5, reason: "Highly formal AI phrasing", alternative: "This shows that..." },
    { phrase: "in this article, we will explore", points: 5, reason: "Formulaic AI introduction", alternative: "Remove entirely" },
    { phrase: "let's dive in", points: 3, reason: "Common AI transition into body paragraphs", alternative: "Remove entirely" },
    { phrase: "without further ado", points: 3, reason: "Cliche AI transition", alternative: "Remove entirely" },
    { phrase: "in the realm of", points: 4, reason: "Over-dramatic AI phrasing", alternative: "In [industry/topic]..." },
    { phrase: "it goes without saying", points: 3, reason: "Filler phrase common in AI", alternative: "Remove entirely" },
    { phrase: "at the end of the day", points: 2, reason: "Cliche filler", alternative: "Ultimately, or remove" },
    { phrase: "is constantly evolving", points: 5, reason: "Standard AI filler about industries", alternative: "State a specific change" },
    { phrase: "in an era where", points: 4, reason: "Dramatic AI opening", alternative: "Today," },
    { phrase: "this comprehensive guide", points: 4, reason: "AI self-promotion pattern", alternative: "This guide" },
    { phrase: "are you looking to", points: 3, reason: "Formulaic hook", alternative: "Start with a direct statement" },
    { phrase: "look no further", points: 4, reason: "Cliche marketing AI", alternative: "Here is..." },
    { phrase: "embark on a journey", points: 5, reason: "Over-dramatic AI phrasing", alternative: "Start" },
    { phrase: "navigate the complexities", points: 4, reason: "Classic AI business jargon", alternative: "Handle" },
    { phrase: "unlock the potential", points: 4, reason: "Overused AI marketing speak", alternative: "Use" },
    { phrase: "harness the power of", points: 4, reason: "Overused AI marketing speak", alternative: "Use" },
    { phrase: "a game-changer", points: 3, reason: "AI buzzword", alternative: "A major improvement" },
    { phrase: "dive deep into", points: 3, reason: "Common AI transition", alternative: "Look at" },
    { phrase: "revolutionize your", points: 4, reason: "Hyperbolic AI marketing", alternative: "Improve your" },
    { phrase: "seamlessly integrate", points: 3, reason: "Corporate AI jargon", alternative: "Easily add" },
    { phrase: "elevate your", points: 4, reason: "Common AI marketing verb", alternative: "Improve your" },
    { phrase: "stay ahead of the curve", points: 3, reason: "Cliche AI business phrase", alternative: "Stay competitive" },
];

const vocabSignals = [
    { word: "delve", points: 2, reason: "Used 50x more by AI than humans", alternative: "look into, explore" },
    { word: "tapestry", points: 2, reason: "Overused AI metaphor", alternative: "mix, collection" },
    { word: "landscape", points: 1, reason: "Common AI metaphor for industries", alternative: "industry, space" },
    { word: "leverage", points: 1, reason: "Corporate AI jargon", alternative: "use" },
    { word: "utilize", points: 1, reason: "Unnecessarily formal", alternative: "use" },
    { word: "facilitate", points: 1, reason: "Formal AI vocabulary", alternative: "help, make easier" },
    { word: "paramount", points: 2, reason: "Overly formal for casual writing", alternative: "important, crucial" },
    { word: "multifaceted", points: 2, reason: "Common AI adjective", alternative: "complex, varied" },
    { word: "pivotal", points: 1, reason: "Overused AI adjective", alternative: "key, important" },
    { word: "robust", points: 1, reason: "AI buzzword for software/systems", alternative: "strong, solid" },
    { word: "streamline", points: 1, reason: "Common AI business jargon", alternative: "simplify" },
    { word: "foster", points: 1, reason: "Overused AI verb", alternative: "build, encourage" },
    { word: "endeavor", points: 2, reason: "Overly formal AI vocabulary", alternative: "effort, project" },
    { word: "plethora", points: 2, reason: "Classic AI vocabulary", alternative: "lot of, many" },
    { word: "myriad", points: 1, reason: "Overly formal", alternative: "many" },
    { word: "testament", points: 1, reason: "Formal AI phrasing", alternative: "proof" },
    { word: "resonate", points: 1, reason: "Overused AI marketing speak", alternative: "connect with" },
    { word: "underscores", points: 1, reason: "Formal AI transition verb", alternative: "highlights, shows" },
];

const transitionSignals = ["moreover,", "furthermore,", "additionally,", "consequently,", "nevertheless,", "in addition,"];

function findPhraseMatches(text: string): AiMatch[] {
    const matches: AiMatch[] = [];
    const lowerText = text.toLowerCase();

    phraseSignals.forEach(signal => {
        if (lowerText.includes(signal.phrase)) {
            matches.push({
                text: signal.phrase,
                points: signal.points,
                reason: signal.reason,
                alternative: signal.alternative,
                isAiSignal: true
            });
        }
    });

    const words = lowerText.match(/\b\w+\b/g) || [];
    vocabSignals.forEach(signal => {
        const count = words.filter(w => w === signal.word).length;
        if (count > 0) {
            matches.push({
                text: signal.word,
                points: signal.points * Math.min(count, 3), // Cap at 3 occurrences
                reason: signal.reason,
                alternative: signal.alternative,
                isAiSignal: true
            });
        }
    });

    let transitionCount = 0;
    transitionSignals.forEach(t => {
        if (lowerText.includes(t)) {
            transitionCount++;
            matches.push({
                text: t.replace(',', ''),
                points: 1,
                reason: "Formal transition word commonly overused by AI",
                alternative: "Use a simpler transition or remove",
                isAiSignal: true
            });
        }
    });

    return matches;
}

function findNaturalMatches(text: string): AiMatch[] {
    const matches: AiMatch[] = [];
    
    // Contractions
    const contractions = text.match(/\b(I'm|don't|can't|won't|isn't|aren't|didn't|couldn't|wouldn't|shouldn't|it's|that's|we're|they're|you're)\b/gi);
    if (contractions) {
        const count = Math.min(contractions.length, 3);
        matches.push({
            text: "Contractions",
            points: -count,
            reason: "AI typically avoids contractions, favoring highly formal text.",
            isAiSignal: false
        });
    }

    // Informal interjections
    const interjections = text.match(/\b(honestly|look,|okay,|well,|hey)\b/gi);
    if (interjections) {
        matches.push({
            text: "Informal interjections",
            points: -1,
            reason: "Conversational filler rarely generated by AI.",
            isAiSignal: false
        });
    }

    // First person opinions
    const opinions = text.match(/\b(I think|I believe|in my experience|to me,)\b/gi);
    if (opinions) {
        matches.push({
            text: "First-person opinions",
            points: -1,
            reason: "AI tends to state things as objective facts rather than personal opinions.",
            isAiSignal: false
        });
    }

    // Sentences starting with conjunctions
    const conjunctionStarts = text.match(/(^|[.!?]\s+)(And|But|So)\s/g);
    if (conjunctionStarts) {
        matches.push({
            text: "Sentences starting with conjunctions",
            points: -1,
            reason: "A natural, conversational writing habit that AI usually avoids.",
            isAiSignal: false
        });
    }

    return matches;
}

function splitSentences(text: string): string[] {
    // Basic sentence splitting keeping the punctuation
    return text.match(/[^.!?]+[.!?]+(?:\s|$)|[^.!?]+$/g) || [];
}

export function analyzeAiWriting(text: string): AiDetectorResult {
    const trimmed = text.trim();
    const wordCount = trimmed.split(/\s+/).filter(w => w.length > 0).length;
    const hasEnoughText = wordCount >= 50;

    if (!trimmed) {
        return {
            overallScore: 0,
            scoreLabel: "Sounds Human",
            scoreDescription: "Start typing to analyze your text.",
            sentences: [],
            flaggedPhrases: [],
            wordCount: 0,
            hasEnoughText: false
        };
    }

    let totalAiPoints = 0;
    let totalHumanPoints = 0;
    const sentences = splitSentences(trimmed);
    const sentenceScores: SentenceScore[] = [];
    const allMatches: AiMatch[] = [];

    // Pattern-level structural checks on full text
    const paragraphs = trimmed.split(/\n+/).filter(p => p.trim().length > 0);
    const paraLengths = paragraphs.map(p => splitSentences(p).length);
    
    // Check if every paragraph is exactly 3-4 sentences (formulaic)
    if (paraLengths.length >= 3 && paraLengths.every(l => l >= 3 && l <= 4)) {
        totalAiPoints += 2;
        allMatches.push({
            text: "Uniform paragraph length",
            points: 2,
            reason: "Every paragraph is exactly 3-4 sentences. AI writes with very uniform rhythm.",
            isAiSignal: true
        });
    }

    // Check for "In summary" or similar closing paragraph
    const lastPara = paragraphs[paragraphs.length - 1]?.toLowerCase() || "";
    if (paragraphs.length > 1 && (lastPara.startsWith("in summary") || lastPara.startsWith("to summarize") || lastPara.startsWith("in conclusion") || lastPara.startsWith("ultimately,"))) {
        totalAiPoints += 3;
        allMatches.push({
            text: "Formulaic closing paragraph",
            points: 3,
            reason: "AI almost always ends with a neat summary paragraph.",
            isAiSignal: true
        });
    }

    // Sentence length variation check
    const sentenceWordCounts = sentences.map(s => s.split(/\s+/).filter(w => w.length > 0).length);
    if (sentenceWordCounts.length > 3) {
        const min = Math.min(...sentenceWordCounts);
        const max = Math.max(...sentenceWordCounts);
        if (min <= 4 && max >= 20) {
            totalHumanPoints += 2;
            allMatches.push({
                text: "Varied sentence length",
                points: -2,
                reason: "Humans naturally mix very short sentences with long ones. AI writes uniformly medium sentences.",
                isAiSignal: false
            });
        }
    }

    // Process each sentence
    sentences.forEach(sentence => {
        const aiMatches = findPhraseMatches(sentence);
        const humanMatches = findNaturalMatches(sentence);
        
        let sAiScore = 0;
        let sHumanScore = 0;

        aiMatches.forEach(m => {
            sAiScore += m.points;
            if (!allMatches.some(am => am.text === m.text)) {
                allMatches.push(m);
            }
        });

        humanMatches.forEach(m => {
            sHumanScore += Math.abs(m.points); // Use absolute for the human score indicator
            if (!allMatches.some(am => am.text === m.text)) {
                allMatches.push(m);
            }
        });

        totalAiPoints += sAiScore;
        totalHumanPoints += sHumanScore;

        sentenceScores.push({
            text: sentence,
            aiScore: sAiScore,
            humanScore: sHumanScore,
            matches: [...aiMatches, ...humanMatches]
        });
    });

    // Calculate final score 0-100
    // AI signals add points. Human signals subtract points.
    // Base score is dependent on AI points scaled somewhat by word count.
    // A single AI phrase in a 50 word text is highly suspicious.
    
    // Roughly: 1 point = 5% AI probability
    let rawScore = (totalAiPoints * 5) - (totalHumanPoints * 5);
    
    // Add baseline naturalness for very long texts without AI signals
    if (wordCount > 100 && totalAiPoints === 0) {
        rawScore -= 20;
    }

    let overallScore = Math.max(0, Math.min(100, rawScore));

    // Determine labels
    let scoreLabel = "";
    let scoreDescription = "";

    if (overallScore <= 20) {
        scoreLabel = "Sounds Human";
        scoreDescription = "This reads like a real person wrote it.";
    } else if (overallScore <= 40) {
        scoreLabel = "Mostly Human";
        scoreDescription = "Mostly natural with a few formulaic phrases.";
    } else if (overallScore <= 60) {
        scoreLabel = "Suspicious";
        scoreDescription = "This has noticeable AI patterns. A careful reader would wonder.";
    } else if (overallScore <= 80) {
        scoreLabel = "Likely AI";
        scoreDescription = "This reads like AI-generated content. Most people would notice.";
    } else {
        scoreLabel = "Almost Certainly AI";
        scoreDescription = "This has ChatGPT's fingerprints all over it.";
    }

    return {
        overallScore,
        scoreLabel,
        scoreDescription,
        sentences: sentenceScores,
        flaggedPhrases: allMatches.filter(m => m.isAiSignal),
        wordCount,
        hasEnoughText
    };
}
