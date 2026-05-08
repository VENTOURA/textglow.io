export interface FormalityFlag {
    type: 'formal' | 'casual';
    text: string;
    tag: string;
    replacement?: string;
    scoreImpact: number;
    sentenceIndex?: number;
}

export interface FormalityAnalysis {
    score: number;
    zone: string;
    flags: FormalityFlag[];
    sentences: Array<{ text: string; score: number; zone: string }>;
}

const formalPhrases = [
    // +3 phrases (very formal / bureaucratic)
    { pattern: "I would like to kindly inform you", score: 3, replacement: "I wanted to let you know" },
    { pattern: "please find attached herewith", score: 3, replacement: "here's the document" },
    { pattern: "please find attached", score: 2, replacement: "I've attached" },
    { pattern: "I am writing to you in order to", score: 3, replacement: "I'm writing to" },
    { pattern: "pursuant to our discussion", score: 3, replacement: "following our conversation" },
    { pattern: "I wish to bring to your attention", score: 3, replacement: "I wanted to flag" },
    { pattern: "for your kind review and consideration", score: 3, replacement: "for your review" },
    { pattern: "I would like to take this opportunity to", score: 3, replacement: "I wanted to" },
    { pattern: "with reference to the above-mentioned", score: 3, replacement: "regarding the above" },
    { pattern: "kindly be advised that", score: 3, replacement: "just so you know" },
    { pattern: "your prompt attention to this matter", score: 3, replacement: "appreciate you looking into this" },
    { pattern: "I would be most grateful if", score: 3, replacement: "it would be great if" },
    { pattern: "it would be greatly appreciated if", score: 3, replacement: "it would help if" },
    { pattern: "I hereby", score: 3, replacement: "I" },
    { pattern: "as per your request", score: 2, replacement: "as you asked" },
    { pattern: "the aforementioned", score: 3, replacement: "the" },
    { pattern: "in lieu of", score: 2, replacement: "instead of" },
    { pattern: "in accordance with", score: 2, replacement: "following" },
    { pattern: "in the event that", score: 2, replacement: "if" },
    { pattern: "at this juncture", score: 3, replacement: "right now" },
    { pattern: "notwithstanding the foregoing", score: 3, replacement: "that said" },
  
    // +2 phrases (moderately formal)
    { pattern: "at your earliest convenience", score: 2, replacement: "when you get a chance" },
    { pattern: "please do not hesitate to contact me", score: 2, replacement: "feel free to reach out" },
    { pattern: "it has come to my attention", score: 2, replacement: "I noticed" },
    { pattern: "I am reaching out in regard to", score: 2, replacement: "I'm reaching out about" },
    { pattern: "we regret to inform you", score: 2, replacement: "unfortunately" },
    { pattern: "I would like to express", score: 2, replacement: "I want to say" },
    { pattern: "I would appreciate it if", score: 2, replacement: "could you" },
    { pattern: "upon further review", score: 2, replacement: "after looking at this again" },
    { pattern: "should you have any questions", score: 2, replacement: "let me know if you have questions" },
    { pattern: "please be informed that", score: 2, replacement: "just a heads up" },
    { pattern: "I trust this finds you well", score: 2, replacement: "hope you're doing well" },
    { pattern: "as discussed previously", score: 1, replacement: "as we talked about" },
];

const casualPhrases = [
    // -3 phrases (very casual / text-speak)
    { pattern: "lol", score: -3, replacement: "(remove or replace with 'haha' if appropriate)" },
    { pattern: "lmao", score: -3, replacement: "(remove)" },
    { pattern: "omg", score: -3, replacement: "(remove or spell out 'oh my')" },
    { pattern: "tbh", score: -2, replacement: "to be honest" },
    { pattern: "imo", score: -2, replacement: "in my opinion" },
    { pattern: "ngl", score: -2, replacement: "honestly" },
    { pattern: "idk", score: -2, replacement: "I'm not sure" },
    { pattern: "brb", score: -3, replacement: "I'll be right back" },
    { pattern: "btw", score: -1.5, replacement: "by the way" },
    { pattern: "fyi", score: -1, replacement: "for your information" },
    { pattern: "asap", score: -0.5, replacement: "as soon as possible" },
    { pattern: "thx", score: -2, replacement: "thanks" },
    { pattern: "pls", score: -2, replacement: "please" },
    { pattern: "u", score: -3, replacement: "you" }, // Handled with \b boundaries in processing
    { pattern: "ur", score: -3, replacement: "your / you're" },
    { pattern: "r u", score: -3, replacement: "are you" },
  
    // -2 phrases (casual contractions / slang)
    { pattern: "gonna", score: -2, replacement: "going to" },
    { pattern: "wanna", score: -2, replacement: "want to" },
    { pattern: "gotta", score: -2, replacement: "have to / need to" },
    { pattern: "kinda", score: -2, replacement: "kind of" },
    { pattern: "sorta", score: -2, replacement: "sort of" },
    { pattern: "lemme", score: -2, replacement: "let me" },
    { pattern: "dunno", score: -2, replacement: "don't know" },
    { pattern: "coulda", score: -2, replacement: "could have" },
    { pattern: "shoulda", score: -2, replacement: "should have" },
    { pattern: "woulda", score: -2, replacement: "would have" },
    { pattern: "ain't", score: -2, replacement: "isn't / aren't" },
  
    // -1 phrases (mildly casual)
    { pattern: "no worries", score: -1, replacement: "no problem / happy to help" },
    { pattern: "my bad", score: -1.5, replacement: "my mistake / sorry about that" },
    { pattern: "all good", score: -1, replacement: "that works / sounds good" },
    { pattern: "just a heads up", score: -0.5, replacement: "I wanted to let you know" },
    { pattern: "super", score: -0.5, replacement: "very / really" },
    { pattern: "awesome", score: -0.5, replacement: "great / excellent" },
    { pattern: "cool", score: -0.5, replacement: "sounds good / great" },
    { pattern: "stuff", score: -0.5, replacement: "materials / items / details" },
    { pattern: "things", score: -0.3, replacement: "(be more specific)" },
    { pattern: "a bunch of", score: -1, replacement: "several / many" },
    { pattern: "tons of", score: -1, replacement: "many / a significant number of" },
    { pattern: "pretty much", score: -0.5, replacement: "essentially / largely" },
];

const formalPatterns = [
    { test: /\bdo not\b/gi, scorePerMatch: 1, cap: 3, tag: "No contraction", replacement: "don't" },
    { test: /\bcannot\b/gi, scorePerMatch: 1, cap: 3, tag: "No contraction", replacement: "can't" },
    { test: /\bwill not\b/gi, scorePerMatch: 1, cap: 3, tag: "No contraction", replacement: "won't" },
    { test: /\bshall not\b/gi, scorePerMatch: 1, cap: 3, tag: "No contraction", replacement: "shan't / won't" },
    { test: /\bI am\b/g, scorePerMatch: 1, cap: 3, tag: "No contraction", replacement: "I'm" },
    { test: /\bit is\b/gi, scorePerMatch: 0.5, cap: 2, tag: "No contraction", replacement: "it's" },
    { test: /\bwe are\b/gi, scorePerMatch: 0.5, cap: 2, tag: "No contraction", replacement: "we're" },
  
    { test: /\b(?:was|were|been|be|being)\s+\w+ed\b/gi, scorePerMatch: 1, cap: 3, tag: "Passive voice" },
  
    { test: /\bshall\b/gi, scorePerMatch: 2, cap: 2, tag: "Formal word: 'shall'" , replacement: "will" },
    { test: /\bwhom\b/gi, scorePerMatch: 1, cap: 2, tag: "Formal word: 'whom'" },
  
    { test: /\bfurthermore\b/gi, scorePerMatch: 1, cap: 2, tag: "Formal connector", replacement: "also" },
    { test: /\bmoreover\b/gi, scorePerMatch: 1, cap: 2, tag: "Formal connector", replacement: "also / on top of that" },
    { test: /\bnevertheless\b/gi, scorePerMatch: 1, cap: 2, tag: "Formal connector", replacement: "still / even so" },
    { test: /\bhenceforth\b/gi, scorePerMatch: 1.5, cap: 2, tag: "Formal connector", replacement: "from now on" },
    { test: /\bwherein\b/gi, scorePerMatch: 1.5, cap: 2, tag: "Formal connector", replacement: "where" },
    { test: /\bthereby\b/gi, scorePerMatch: 1, cap: 2, tag: "Formal connector" },
    { test: /\bhereby\b/gi, scorePerMatch: 1.5, cap: 2, tag: "Formal connector" },
    { test: /\bthus\b/gi, scorePerMatch: 0.5, cap: 2, tag: "Formal connector", replacement: "so" },
    { test: /\bhitherto\b/gi, scorePerMatch: 2, cap: 2, tag: "Formal connector", replacement: "until now" },
  
    { test: /\bDear\s+(Mr|Ms|Mrs|Dr|Prof)\./gi, scorePerMatch: 2, cap: 2, tag: "Formal salutation" },
  
    { test: /\bYours sincerely\b/gi, scorePerMatch: 2, cap: 1, tag: "Formal sign-off", replacement: "Best," },
    { test: /\bYours faithfully\b/gi, scorePerMatch: 2, cap: 1, tag: "Formal sign-off", replacement: "Best," },
    { test: /\bRespectfully\b/gi, scorePerMatch: 1.5, cap: 1, tag: "Formal sign-off", replacement: "Thanks," },
    { test: /\bKind regards\b/gi, scorePerMatch: 1, cap: 1, tag: "Formal sign-off" },
    { test: /\bWarm regards\b/gi, scorePerMatch: 0.5, cap: 1, tag: "Slightly formal sign-off" },
];

const casualPatterns = [
    { test: /\b(I'm|don't|can't|won't|isn't|aren't|doesn't|wouldn't|shouldn't|couldn't|it's|that's|there's|we're|they're|you're|he's|she's|we've|I've|you've|they've|I'd|you'd|we'd|they'd|I'll|you'll|we'll|they'll)\b/gi, scorePerMatch: -0.3, cap: -2, tag: "Contraction" },
    { test: /!/g, scorePerMatch: -0.5, cap: -2, tag: "Exclamation mark" },
    { test: /!{2,}/g, scorePerMatch: -1.5, cap: -3, tag: "Multiple exclamation marks", replacement: "Use a single period or exclamation" },
    { test: /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}]/gu, scorePerMatch: -1, cap: -3, tag: "Emoji" },
    { test: /(?:^|\.\s+)(So,|And,|But,)/gm, scorePerMatch: -0.5, cap: -1.5, tag: "Informal sentence opener" },
    { test: /\.{3,}/g, scorePerMatch: -1, cap: -2, tag: "Informal ellipsis" },
    { test: /[?!]{2,}/g, scorePerMatch: -1, cap: -2, tag: "Informal punctuation" },
];

export function getZoneFromScore(score: number): string {
    if (score < 3.0) return "Very Casual";
    if (score < 5.0) return "Casual";
    if (score < 7.0) return "Balanced";
    if (score < 9.0) return "Formal";
    return "Very Formal";
}

function splitSentences(text: string): string[] {
    // Basic sentence split that handles some common abbreviations
    const abbreviations = ['Mr', 'Mrs', 'Ms', 'Dr', 'Prof', 'Sr', 'Jr', 'vs', 'etc', 'ie', 'eg', 'U.S'];
    let preprocessed = text;
    abbreviations.forEach(abbr => {
        preprocessed = preprocessed.replace(new RegExp(`\\b${abbr}\\.`, 'g'), `${abbr}@@@`);
    });

    const sentences = preprocessed.split(/(?<=[.!?])\s+(?=[A-Z0-9"'([{])/);
    
    return sentences.map(s => s.replace(/@@@/g, '.')).filter(s => s.trim().length > 0);
}

export function analyzeFormality(text: string): FormalityAnalysis {
    if (!text || text.trim().length === 0) {
        return { score: 5.0, zone: "Balanced", flags: [], sentences: [] };
    }

    let totalScore = 5.0;
    const flags: FormalityFlag[] = [];

    // All lowercase check
    if (text.length > 50 && text === text.toLowerCase() && /[a-z]/.test(text)) {
        totalScore -= 2;
        flags.push({ type: 'casual', text: 'Entire text', tag: 'All lowercase text', scoreImpact: -2 });
    }

    // Helper to evaluate patterns
    const evaluatePatterns = (patterns: any[], type: 'formal' | 'casual') => {
        patterns.forEach(p => {
            const matches = [...text.matchAll(p.test)];
            if (matches.length > 0) {
                let impact = matches.length * p.scorePerMatch;
                if (impact > 0 && impact > p.cap) impact = p.cap;
                if (impact < 0 && impact < p.cap) impact = p.cap;
                
                totalScore += impact;
                matches.forEach(match => {
                    flags.push({
                        type,
                        text: match[0],
                        tag: p.tag,
                        replacement: p.replacement,
                        scoreImpact: p.scorePerMatch
                    });
                });
            }
        });
    };

    evaluatePatterns(formalPatterns, 'formal');
    evaluatePatterns(casualPatterns, 'casual');

    // Helper to evaluate dictionary phrases
    const evaluatePhrases = (phrases: any[], type: 'formal' | 'casual') => {
        phrases.forEach(p => {
            const regex = new RegExp(`\\b${p.pattern.replace(/[.*+?^$\\{}()|[\\]\\\\]/g, '\\\\$&')}\\b`, 'gi');
            const matches = [...text.matchAll(regex)];
            if (matches.length > 0) {
                totalScore += (matches.length * p.score);
                matches.forEach(match => {
                    flags.push({
                        type,
                        text: match[0],
                        tag: type === 'formal' ? 'Too Formal' : 'Too Casual',
                        replacement: p.replacement,
                        scoreImpact: p.score
                    });
                });
            }
        });
    };

    evaluatePhrases(formalPhrases, 'formal');
    evaluatePhrases(casualPhrases, 'casual');

    totalScore = Math.max(1, Math.min(10, totalScore));

    const sentencesText = splitSentences(text);
    const sentences = sentencesText.map((s) => {
        // Run a mini-analysis for each sentence
        let sScore = 5.0;
        
        // Dictionary phrases
        formalPhrases.forEach(p => {
            const regex = new RegExp(`\\b${p.pattern}\\b`, 'gi');
            const matches = [...s.matchAll(regex)];
            sScore += matches.length * p.score;
        });
        casualPhrases.forEach(p => {
            const regex = new RegExp(`\\b${p.pattern}\\b`, 'gi');
            const matches = [...s.matchAll(regex)];
            sScore += matches.length * p.score;
        });

        // Patterns
        formalPatterns.forEach(p => {
            const matches = [...s.matchAll(p.test)];
            if (matches.length > 0) {
                let impact = matches.length * p.scorePerMatch;
                if (impact > 0 && impact > p.cap) impact = p.cap;
                sScore += impact;
            }
        });
        casualPatterns.forEach(p => {
            const matches = [...s.matchAll(p.test)];
            if (matches.length > 0) {
                let impact = matches.length * p.scorePerMatch;
                if (impact < 0 && impact < p.cap) impact = p.cap;
                sScore += impact;
            }
        });

        if (s.length > 50 && s === s.toLowerCase() && /[a-z]/.test(s)) {
            sScore -= 2;
        }

        sScore = Math.max(1, Math.min(10, sScore));
        
        return {
            text: s,
            score: sScore,
            zone: getZoneFromScore(sScore)
        };
    });

    // Sort flags by absolute score impact, descending
    flags.sort((a, b) => Math.abs(b.scoreImpact) - Math.abs(a.scoreImpact));

    // Deduplicate flags to avoid overwhelming the UI with identical matches
    const uniqueFlagsMap = new Map();
    flags.forEach(f => {
        const key = `${f.type}-${f.text.toLowerCase()}`;
        if (!uniqueFlagsMap.has(key)) {
            uniqueFlagsMap.set(key, f);
        }
    });

    return {
        score: totalScore,
        zone: getZoneFromScore(totalScore),
        flags: Array.from(uniqueFlagsMap.values()),
        sentences
    };
}
