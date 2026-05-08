export interface PAMatch {
    id: string;
    original: string;
    phrase: string;
    severity: number;
    explanation: string;
    rewrite: string;
    startIndex: number;
    endIndex: number;
}

export interface PAResult {
    originalText: string;
    overallScore: number;
    scoreLabel: string;
    scoreDescription: string;
    matches: PAMatch[];
    vibeSummary: string;
    rewriteSuggestions: string[];
}

interface DictionaryEntry {
    phrase: string;
    severity: number;
    explanation: string;
    rewrite: string;
    regex: RegExp;
}

const rawDictionary = [
    // 80-100 severity
    { phrase: "per my last email", severity: 95, explanation: "The professional equivalent of 'Can you read?' You're telling them you already said this and they ignored you.", rewrite: "As I mentioned, [restate the point]" },
    { phrase: "noted.", severity: 90, explanation: "A single word that carries the weight of a thousand unspoken complaints. The recipient WILL feel this.", rewrite: "Got it, thanks! or Thanks — I'll keep that in mind." },
    { phrase: "as i already mentioned", severity: 85, explanation: "Translation: 'I told you this. Were you not listening?'", rewrite: "To clarify, [restate]" },
    { phrase: "as previously discussed", severity: 80, explanation: "You're pulling receipts. The other person knows it.", rewrite: "Following up on our earlier conversation" },
    { phrase: "as per our conversation", severity: 80, explanation: "Same energy as 'as previously discussed' — you're building a paper trail, and they know it.", rewrite: "After our chat earlier" },
    { phrase: "i'm not sure what part of my message was unclear", severity: 95, explanation: "This is open hostility disguised as a question. Step away from the keyboard.", rewrite: "Let me rephrase that" },
    { phrase: "please advise", severity: 82, explanation: "Often translates to 'Fix this. I'm waiting.' Especially deadly at the end of a complaint email.", rewrite: "What do you think? or How should we handle this?" },
    { phrase: "going to need you to", severity: 85, explanation: "Bossy and dismissive. You're giving a command, not making a request.", rewrite: "Could you please" },
    { phrase: "re-attaching", severity: 88, explanation: "You're highlighting their failure to find the original attachment.", rewrite: "I've attached it here for your convenience" },
    { phrase: "did you get my email", severity: 85, explanation: "They did. They just haven't replied.", rewrite: "Checking in on my previous email" },

    // 60-79 severity
    { phrase: "friendly reminder", severity: 72, explanation: "Nothing friendly about it. This is 'I'm annoyed you forgot' with a smile emoji.", rewrite: "Just following up on" },
    { phrase: "gentle reminder", severity: 75, explanation: "Even worse than 'friendly reminder.' The word 'gentle' makes it more aggressive, not less.", rewrite: "Wanted to check in on" },
    { phrase: "going forward", severity: 65, explanation: "You're drawing a line in the sand. The subtext: 'You messed up before, don't do it again.'", rewrite: "From now on or Next time" },
    { phrase: "just to clarify", severity: 62, explanation: "Often means 'You clearly misunderstood, so let me spell it out for you like a child.'", rewrite: "To make sure we're aligned" },
    { phrase: "thanks in advance", severity: 60, explanation: "Assumes they'll do it. Removes the option to say no. Power move disguised as politeness.", rewrite: "I'd really appreciate it if you could" },
    { phrase: "i was under the impression that", severity: 70, explanation: "Translation: 'You led me to believe something and now you're changing the story.'", rewrite: "I thought we agreed that" },
    { phrase: "correct me if i'm wrong", severity: 68, explanation: "You're not asking to be corrected. You're daring them to disagree.", rewrite: "I believe [X] — does that match your understanding?" },
    { phrase: "with all due respect", severity: 72, explanation: "What follows 'with all due respect' is never respectful. This is a warning shot.", rewrite: "Just say the thing directly" },
    { phrase: "actually,", severity: 55, explanation: "The 'well, actually' of email. You're correcting someone and making sure they know it.", rewrite: "Drop it entirely, or use 'I think'" },
    { phrase: "hope that helps", severity: 55, explanation: "Depends on context, but often deployed after explaining something that 'should have been obvious.'", rewrite: "Let me know if you have other questions" },
    { phrase: "as you're aware", severity: 70, explanation: "You're publicly noting that they should already know this. Pointed.", rewrite: "Just state the information without the preamble" },
    { phrase: "as you know", severity: 68, explanation: "Similar to 'as you're aware'. It forces them to either agree or admit ignorance.", rewrite: "State the point directly" },
    { phrase: "to be fair", severity: 60, explanation: "Usually precedes a criticism masquerading as an objective observation.", rewrite: "Remove entirely" },
    { phrase: "for future reference", severity: 75, explanation: "A clear reprimand. Translation: 'Don't make this mistake again.'", rewrite: "In the future, we can" },
    { phrase: "let's take a step back", severity: 65, explanation: "Translation: 'You're missing the point and overcomplicating this.'", rewrite: "To look at the bigger picture" },

    // 30-59 severity
    { phrase: "sure.", severity: 50, explanation: "The period makes it icy. 'Sure.' is never just fine.", rewrite: "Sounds good!" },
    { phrase: "fine.", severity: 55, explanation: "Like 'sure.' but colder. 'Fine.' is never fine.", rewrite: "That works for me." },
    { phrase: "okay.", severity: 45, explanation: "The period is doing a lot of heavy lifting here to express disapproval.", rewrite: "Okay!" },
    { phrase: "no worries", severity: 35, explanation: "Usually genuinely fine. But in some contexts (after someone messed up), it reads as 'I'll let this go THIS time.'", rewrite: "Low severity, usually fine" },
    { phrase: "i'll handle it myself", severity: 55, explanation: "Translation: 'You were supposed to do this but I can't count on you.'", rewrite: "I'll take care of this one" },
    { phrase: "thanks for your input", severity: 50, explanation: "If this comes after they ignored your input, it's devastating.", rewrite: "Thanks for sharing your perspective" },
    { phrase: "moving on", severity: 45, explanation: "You're closing a topic they were still discussing. Power move.", rewrite: "Let's shift to the next topic" },
    { phrase: "just following up", severity: 40, explanation: "Mild, but implies you've been waiting.", rewrite: "Keep as-is for first follow-up, escalate gently" },
    { phrase: "i'm confused by", severity: 45, explanation: "Sometimes genuine. But often means 'This doesn't make sense and I want you to explain yourself.'", rewrite: "Could you help me understand" },
    { phrase: "when you get a chance", severity: 38, explanation: "Usually polite, but context matters. After a missed deadline, this is loaded.", rewrite: "Context-dependent" },
    { phrase: "out of curiosity", severity: 40, explanation: "Often used to question someone's judgment while pretending it's an innocent question.", rewrite: "Can you share the reasoning behind" },
    { phrase: "to be honest", severity: 45, explanation: "Implies you usually aren't, or that what you're about to say is going to sting.", rewrite: "Remove entirely" },
    { phrase: "makes sense", severity: 35, explanation: "Can be dismissive if used as a standalone response to a long explanation.", rewrite: "I understand your point" }
];

const compiledDictionary: DictionaryEntry[] = rawDictionary
    .sort((a, b) => b.phrase.length - a.phrase.length)
    .map(entry => ({
        ...entry,
        // Match phrase boundaries, handle punctuation for specific phrases like "noted."
        regex: new RegExp(`\\b(${entry.phrase.replace(/\./g, '\\.')})\\b`, 'gi')
    }));

function generateId() {
    return Math.random().toString(36).substring(2, 9);
}

export function analyzePassiveAggressive(text: string): PAResult {
    const trimmed = text.trim();
    
    if (!trimmed) {
        return {
            originalText: "",
            overallScore: 0,
            scoreLabel: "You're Clean",
            scoreDescription: "Start typing to analyze your text.",
            matches: [],
            vibeSummary: "",
            rewriteSuggestions: []
        };
    }

    const matches: PAMatch[] = [];
    const replacedRanges: { start: number; end: number }[] = [];

    // Phrase matching
    compiledDictionary.forEach(entry => {
        let match;
        entry.regex.lastIndex = 0;
        
        while ((match = entry.regex.exec(text)) !== null) {
            const startIndex = match.index;
            const endIndex = startIndex + match[0].length;
            
            const overlaps = replacedRanges.some(range => 
                (startIndex >= range.start && startIndex < range.end) || 
                (endIndex > range.start && endIndex <= range.end) ||
                (startIndex <= range.start && endIndex >= range.end)
            );
            
            if (!overlaps) {
                // For one-word "Sure." or "Fine." or "Okay." we must ensure they are followed by a period 
                // in the original text (if the regex doesn't explicitly enforce it for edge cases).
                // But our dictionary includes the period for "noted.", "sure.", "fine.", "okay."
                matches.push({
                    id: generateId(),
                    original: match[0],
                    phrase: entry.phrase,
                    severity: entry.severity,
                    explanation: entry.explanation,
                    rewrite: entry.rewrite,
                    startIndex,
                    endIndex
                });
                replacedRanges.push({ start: startIndex, end: endIndex });
            }
        }
    });

    // Pattern-level detection
    
    // Excessive exclamation points
    const exclamations = [...text.matchAll(/!{3,}/g)];
    exclamations.forEach(match => {
        if (!replacedRanges.some(r => match.index! >= r.start && match.index! < r.end)) {
            matches.push({
                id: generateId(),
                original: match[0],
                phrase: "Excessive exclamation points",
                severity: 10,
                explanation: "Using multiple exclamation marks often masks frustration. It looks like you're trying too hard to seem happy.",
                rewrite: "Use a single period or exclamation mark.",
                startIndex: match.index!,
                endIndex: match.index! + match[0].length
            });
            replacedRanges.push({ start: match.index!, end: match.index! + match[0].length });
        }
    });

    // Ellipsis at end of sentence
    const ellipsis = [...text.matchAll(/\b\w+\.\.\./g)];
    ellipsis.forEach(match => {
        if (!replacedRanges.some(r => match.index! >= r.start && match.index! < r.end)) {
            matches.push({
                id: generateId(),
                original: match[0],
                phrase: "Trailing ellipsis",
                severity: 15,
                explanation: "Trailing off with an ellipsis usually reads as judgmental or exasperated.",
                rewrite: "End the sentence with a period.",
                startIndex: match.index!,
                endIndex: match.index! + match[0].length
            });
            replacedRanges.push({ start: match.index!, end: match.index! + match[0].length });
        }
    });

    // All caps words (more than 2 chars)
    const allCaps = [...text.matchAll(/\b[A-Z]{3,}\b/g)];
    allCaps.forEach(match => {
        const word = match[0];
        // Ignore common acronyms
        if (!['ASAP', 'FYI', 'ETA', 'EOD', 'COB', 'ROI', 'KPI', 'CEO'].includes(word)) {
            if (!replacedRanges.some(r => match.index! >= r.start && match.index! < r.end)) {
                matches.push({
                    id: generateId(),
                    original: word,
                    phrase: "ALL CAPS",
                    severity: 20,
                    explanation: `Putting "${word}" in all caps reads like you're yelling or heavily emphasizing something they missed.`,
                    rewrite: `Use normal capitalization. If it's important, bold it instead.`,
                    startIndex: match.index!,
                    endIndex: match.index! + word.length
                });
                replacedRanges.push({ start: match.index!, end: match.index! + word.length });
            }
        }
    });

    matches.sort((a, b) => a.startIndex - b.startIndex);

    // Calculate score
    let baseScore = 0;
    if (matches.length > 0) {
        // Average of top 2 severities + 10 points for each additional match
        const severities = matches.map(m => m.severity).sort((a, b) => b - a);
        if (severities.length === 1) {
            baseScore = severities[0];
        } else {
            baseScore = (severities[0] + severities[1]) / 2 + (severities.length - 2) * 15;
        }
    }

    const overallScore = Math.min(100, Math.max(0, Math.round(baseScore)));

    let scoreLabel = "";
    let scoreDescription = "";
    if (overallScore <= 20) {
        scoreLabel = "You're Clean";
        scoreDescription = "Send it with confidence. This is genuinely professional.";
    } else if (overallScore <= 40) {
        scoreLabel = "Slightly Spicy";
        scoreDescription = "Mostly fine, but a sensitive reader might raise an eyebrow.";
    } else if (overallScore <= 60) {
        scoreLabel = "Proceed With Caution";
        scoreDescription = "You're in the danger zone. Re-read this imagining your most sensitive colleague receiving it.";
    } else if (overallScore <= 80) {
        scoreLabel = "HR Is Watching";
        scoreDescription = "This email has receipts, subtext, and barely concealed frustration. Rewrite before sending.";
    } else {
        scoreLabel = "Emotional Damage";
        scoreDescription = "This email could end a professional relationship. Step away. Get coffee. Come back. Rewrite everything.";
    }

    // Generate Vibe Summary
    let vibeSummary = "";
    if (matches.length === 0) {
        vibeSummary = "Your text reads clearly and professionally without any common passive-aggressive triggers. The tone is straightforward and safe to send.";
    } else {
        const topMatches = matches.map(m => `"${m.original}"`).slice(0, 3).join(", ");
        
        if (overallScore > 80) {
            vibeSummary = `This message is carrying a heavy load of frustration. Phrases like ${topMatches} are universally recognized as professional combat. The recipient will likely feel called out and become defensive.`;
        } else if (overallScore > 60) {
            vibeSummary = `Your message starts venturing into pointed territory. By including ${topMatches}, you're subtly placing blame or expressing impatience. It might be interpreted as hostility rather than helpfulness.`;
        } else if (overallScore > 40) {
            vibeSummary = `There's a slight edge to this message. Phrases like ${topMatches} can sometimes rub people the wrong way depending on their mood. If they already know they messed up, this will sting.`;
        } else {
            vibeSummary = `Mostly fine, but the use of ${topMatches} adds a tiny bit of spice. If you have a good relationship with the recipient, it's probably harmless. If not, you might want to soften it.`;
        }
    }

    // Generate Rewrite Suggestions
    const rewriteSuggestions: string[] = [];
    const usedPhrases = new Set<string>();
    matches.sort((a, b) => b.severity - a.severity).forEach(m => {
        if (!usedPhrases.has(m.phrase) && rewriteSuggestions.length < 3) {
            rewriteSuggestions.push(`Replace "${m.original}" with "${m.rewrite}"`);
            usedPhrases.add(m.phrase);
        }
    });

    return {
        originalText: text,
        overallScore,
        scoreLabel,
        scoreDescription,
        matches,
        vibeSummary,
        rewriteSuggestions
    };
}
