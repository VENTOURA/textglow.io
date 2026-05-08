export interface JargonEntry {
    jargon: string;
    replacement: string;
    meaning?: string;
    regex: RegExp;
}

export const JARGON_DICTIONARY: Omit<JargonEntry, 'regex'>[] = [
    // Action & Execution
    { jargon: "circle back", replacement: "discuss again later", meaning: "I don't have an answer now and I'm hoping you forget" },
    { jargon: "circling back", replacement: "discussing again", meaning: "I don't have an answer now and I'm hoping you forget" },
    { jargon: "take this offline", replacement: "discuss privately", meaning: "This conversation is derailing the meeting" },
    { jargon: "taking this offline", replacement: "discussing privately", meaning: "This conversation is derailing the meeting" },
    { jargon: "move the needle", replacement: "make progress", meaning: "Do something that actually matters" },
    { jargon: "moving the needle", replacement: "making progress", meaning: "Do something that actually matters" },
    { jargon: "hit the ground running", replacement: "start working immediately" },
    { jargon: "hitting the ground running", replacement: "starting working immediately" },
    { jargon: "run it up the flagpole", replacement: "get approval from management" },
    { jargon: "running it up the flagpole", replacement: "getting approval from management" },
    { jargon: "put a pin in it", replacement: "save for later", meaning: "We're not doing this" },
    { jargon: "drill down", replacement: "look at the details" },
    { jargon: "drilling down", replacement: "looking at the details" },
    { jargon: "deep dive", replacement: "detailed analysis" },
    { jargon: "unpack that", replacement: "explain in more detail" },
    { jargon: "unpacking that", replacement: "explaining in more detail" },
    { jargon: "flesh it out", replacement: "add more detail" },
    { jargon: "fleshing it out", replacement: "adding more detail" },
    { jargon: "iron out the details", replacement: "finalize the specifics" },
    { jargon: "action this", replacement: "do this", meaning: "It's a noun, not a verb, but here we are" },
    { jargon: "close the loop", replacement: "finish and report back" },
    { jargon: "closing the loop", replacement: "finishing and reporting back" },
    { jargon: "get our ducks in a row", replacement: "get organized" },
    { jargon: "push the envelope", replacement: "try something new" },
    { jargon: "pushing the envelope", replacement: "trying something new" },
    { jargon: "shift gears", replacement: "change direction" },
    { jargon: "shifting gears", replacement: "changing direction" },
    { jargon: "double down", replacement: "commit more resources" },
    { jargon: "doubling down", replacement: "committing more resources" },
    { jargon: "fast-track", replacement: "speed up" },
    { jargon: "greenlight", replacement: "approve" },
    { jargon: "table this", replacement: "postpone" },
    { jargon: "circle the wagons", replacement: "protect ourselves" },
    { jargon: "pull the trigger", replacement: "make the decision" },
    { jargon: "boil the ocean", replacement: "try to do too much at once" },
    
    // Strategy & Business
    { jargon: "leverage", replacement: "use" },
    { jargon: "leveraging", replacement: "using" },
    { jargon: "synergy", replacement: "working well together", meaning: "We're merging and someone's getting fired" },
    { jargon: "synergies", replacement: "shared benefits", meaning: "We're merging and someone's getting fired" },
    { jargon: "value proposition", replacement: "what we offer" },
    { jargon: "value-add", replacement: "additional benefit" },
    { jargon: "low-hanging fruit", replacement: "easy wins" },
    { jargon: "core competency", replacement: "what we're good at" },
    { jargon: "core competencies", replacement: "what we're good at" },
    { jargon: "best practice", replacement: "recommended approach" },
    { jargon: "best practices", replacement: "recommended approaches" },
    { jargon: "paradigm shift", replacement: "big change" },
    { jargon: "disrupt", replacement: "change", meaning: "We made an app" },
    { jargon: "disruption", replacement: "change", meaning: "We made an app" },
    { jargon: "disruptive", replacement: "innovative", meaning: "We made an app" },
    { jargon: "pivot", replacement: "change direction", meaning: "The original plan failed" },
    { jargon: "pivoting", replacement: "changing direction", meaning: "The original plan failed" },
    { jargon: "scalable", replacement: "can grow" },
    { jargon: "ROI", replacement: "return on investment" },
    { jargon: "bandwidth", replacement: "time/capacity", meaning: "'I don't have the bandwidth' = 'I'm too busy'" },
    { jargon: "ecosystem", replacement: "industry" },
    { jargon: "thought leadership", replacement: "expert opinions", meaning: "Blog posts" },
    { jargon: "north star", replacement: "main goal" },
    { jargon: "blue-sky thinking", replacement: "creative brainstorming without constraints" },
    { jargon: "sunset", replacement: "phase out" },
    { jargon: "sunsetting", replacement: "phasing out" },
    { jargon: "ideate", replacement: "brainstorm", meaning: "We verbed a noun" },
    { jargon: "ideation", replacement: "brainstorming", meaning: "We verbed a noun" },
    { jargon: "optics", replacement: "how it looks" },
    { jargon: "stakeholders", replacement: "people involved" },
    { jargon: "stakeholder", replacement: "person involved" },
    { jargon: "alignment", replacement: "agreement" },
    { jargon: "optimize", replacement: "improve" },
    { jargon: "optimizing", replacement: "improving" },
    { jargon: "holistic approach", replacement: "looking at the whole picture" },
    { jargon: "holistic", replacement: "comprehensive" },
    { jargon: "win-win", replacement: "good for both sides" },
    { jargon: "wheelhouse", replacement: "expertise" },
    { jargon: "game-changer", replacement: "significant improvement" },
    { jargon: "game changer", replacement: "significant improvement" },
    { jargon: "bleeding edge", replacement: "very new and risky" },
    { jargon: "mission-critical", replacement: "essential" },
    { jargon: "end-to-end", replacement: "complete" },
    { jargon: "turnkey", replacement: "ready to use" },
    { jargon: "net-net", replacement: "the bottom line" },
    { jargon: "at the end of the day", replacement: "ultimately" },

    // Communication & People
    { jargon: "reach out", replacement: "contact" },
    { jargon: "reaching out", replacement: "contacting" },
    { jargon: "touch base", replacement: "check in" },
    { jargon: "touching base", replacement: "checking in" },
    { jargon: "loop in", replacement: "include" },
    { jargon: "loop me in", replacement: "include me" },
    { jargon: "keep me in the loop", replacement: "keep me updated" },
    { jargon: "ping me", replacement: "message me" },
    { jargon: "pinging", replacement: "messaging" },
    { jargon: "face time", replacement: "in-person meeting" },
    { jargon: "human capital", replacement: "employees", meaning: "We see people as numbers" },
    { jargon: "headcount", replacement: "number of employees" },
    { jargon: "onboard", replacement: "welcome/train" },
    { jargon: "onboarding", replacement: "welcoming/training" },
    { jargon: "offboard", replacement: "process departure", meaning: "The gentlest way to say 'you're gone'" },
    { jargon: "offboarding", replacement: "processing departure", meaning: "The gentlest way to say 'you're gone'" },
    { jargon: "right-size", replacement: "lay off people", meaning: "Making the company smaller and calling it strategy" },
    { jargon: "right-sizing", replacement: "laying off people", meaning: "Making the company smaller and calling it strategy" },
    { jargon: "empower", replacement: "allow" },
    { jargon: "empowering", replacement: "allowing" },
    { jargon: "socialize", replacement: "share for feedback", meaning: "Not what you do at parties" },
    { jargon: "socializing", replacement: "sharing for feedback", meaning: "Not what you do at parties" },
    { jargon: "cascade", replacement: "pass information down" },
    { jargon: "cascading", replacement: "passing information down" },
    { jargon: "cross-functional", replacement: "involving multiple departments" },
    { jargon: "take ownership", replacement: "be responsible for" },
    { jargon: "taking ownership", replacement: "being responsible for" },
    { jargon: "thought partner", replacement: "someone to brainstorm with" },
    { jargon: "capacity", replacement: "ability to take on work" },

    // Email/Meeting Jargon
    { jargon: "per my last email", replacement: "as I mentioned before", meaning: "READ MY EMAILS" },
    { jargon: "as discussed", replacement: "we agreed" },
    { jargon: "please advise", replacement: "what should I do?" },
    { jargon: "for your reference", replacement: "here's some info" },
    { jargon: "for your records", replacement: "save this" },
    { jargon: "at your earliest convenience", replacement: "when you can" },
    { jargon: "i wanted to follow up", replacement: "I'm checking in" },
    { jargon: "just following up", replacement: "checking in" },
    { jargon: "kindly", replacement: "please" },
    { jargon: "henceforth", replacement: "from now on" },
    { jargon: "aforementioned", replacement: "the mentioned" },
    { jargon: "pursuant to", replacement: "following" },
    { jargon: "as per our conversation", replacement: "as we discussed" }
];

// Sort dictionary by length descending so longer phrases match first
export const COMPILED_DICTIONARY: JargonEntry[] = JARGON_DICTIONARY.sort((a, b) => b.jargon.length - a.jargon.length).map(entry => ({
    ...entry,
    regex: new RegExp(`\\b(${entry.jargon})\\b`, 'gi')
}));

export interface JargonMatch {
    id: string;
    original: string;
    entry: JargonEntry;
    startIndex: number;
    endIndex: number;
}

export interface JargonResult {
    originalText: string;
    translatedText: string;
    matches: JargonMatch[];
    jargonScore: number;
    scoreLabel: string;
    jargonDensity: number; // percentage
    topOffenders: { entry: JargonEntry; count: number }[];
    totalWords: number;
}

function generateId() {
    return Math.random().toString(36).substring(2, 9);
}

export function analyzeJargon(text: string): JargonResult {
    if (!text.trim()) {
        return {
            originalText: "",
            translatedText: "",
            matches: [],
            jargonScore: 0,
            scoreLabel: "Refreshingly human. Your colleagues thank you.",
            jargonDensity: 0,
            topOffenders: [],
            totalWords: 0
        };
    }

    const matches: JargonMatch[] = [];
    
    // We want to avoid overlapping matches. Since we process longest first, we can track replaced regions.
    const replacedRanges: { start: number; end: number }[] = [];
    
    COMPILED_DICTIONARY.forEach(entry => {
        let match;
        // Reset lastIndex since we reuse regexes
        entry.regex.lastIndex = 0;
        
        while ((match = entry.regex.exec(text)) !== null) {
            const startIndex = match.index;
            const endIndex = startIndex + match[0].length;
            
            // Check if this overlaps with an already found match
            const overlaps = replacedRanges.some(range => 
                (startIndex >= range.start && startIndex < range.end) || 
                (endIndex > range.start && endIndex <= range.end) ||
                (startIndex <= range.start && endIndex >= range.end)
            );
            
            if (!overlaps) {
                matches.push({
                    id: generateId(),
                    original: match[0],
                    entry,
                    startIndex,
                    endIndex
                });
                replacedRanges.push({ start: startIndex, end: endIndex });
            }
        }
    });

    // Sort matches by start index to perform replacements from end to start (or build incrementally)
    matches.sort((a, b) => a.startIndex - b.startIndex);

    let translatedText = text;
    // Replace from end to start so indices don't shift
    for (let i = matches.length - 1; i >= 0; i--) {
        const match = matches[i];
        // Ensure case preservation if possible (capitalize first letter if original is capitalized)
        let replacement = match.entry.replacement;
        if (match.original[0] === match.original[0].toUpperCase()) {
            replacement = replacement.charAt(0).toUpperCase() + replacement.slice(1);
        }
        translatedText = translatedText.slice(0, match.startIndex) + replacement + translatedText.slice(match.endIndex);
    }

    // Calculate score
    const totalWords = text.trim().split(/\s+/).filter(w => w.length > 0).length || 1;
    let jargonWords = 0;
    matches.forEach(m => {
        jargonWords += m.original.split(/\s+/).length;
    });

    const jargonDensity = Math.min((jargonWords / totalWords) * 100, 100);
    
    let scoreLabel = "";
    if (jargonDensity <= 10) scoreLabel = "Refreshingly human. Your colleagues thank you.";
    else if (jargonDensity <= 25) scoreLabel = "Moderate jargon. You survive in corporate America but haven't lost yourself.";
    else if (jargonDensity <= 50) scoreLabel = "Heavy jargon. You've been in too many meetings. Fresh air recommended.";
    else if (jargonDensity <= 75) scoreLabel = "Peak corporate. A consulting firm would hire you on the spot.";
    else scoreLabel = "This is no longer English. This is a LinkedIn post achieving sentience.";

    // Worst offenders (those with meanings)
    const counts = new Map<string, { entry: JargonEntry; count: number }>();
    matches.forEach(m => {
        const key = m.entry.jargon;
        if (counts.has(key)) {
            counts.get(key)!.count += 1;
        } else {
            counts.set(key, { entry: m.entry, count: 1 });
        }
    });

    // Sort by count descending, prioritize those with 'meaning'
    const topOffenders = Array.from(counts.values()).sort((a, b) => {
        if (a.count !== b.count) return b.count - a.count;
        if (a.entry.meaning && !b.entry.meaning) return -1;
        if (!a.entry.meaning && b.entry.meaning) return 1;
        return 0;
    }).slice(0, 3);

    return {
        originalText: text,
        translatedText,
        matches,
        jargonScore: matches.length,
        scoreLabel,
        jargonDensity,
        topOffenders,
        totalWords
    };
}
