export interface ScoreCategory {
    score: number;
    label: string;
    suggestions: string[];
}

export interface LinkedinScore {
    overall: number;
    verdictLabel: string;
    hook: ScoreCategory;
    length: ScoreCategory;
    readability: ScoreCategory;
    formatting: ScoreCategory;
    allSuggestions: string[];
}

export function analyzeLinkedinPost(text: string): LinkedinScore {
    const trimmed = text.trim();
    if (!trimmed) {
        return {
            overall: 0,
            verdictLabel: "Start typing...",
            hook: { score: 0, label: "", suggestions: [] },
            length: { score: 0, label: "", suggestions: [] },
            readability: { score: 0, label: "", suggestions: [] },
            formatting: { score: 0, label: "", suggestions: [] },
            allSuggestions: []
        };
    }

    // Helpers
    const paragraphs = trimmed.split(/\n+/).map(p => p.trim()).filter(Boolean);
    const sentences = trimmed.split(/[.!?]+(?: |\n|$)/).map(s => s.trim()).filter(Boolean);
    const words = trimmed.split(/\s+/).filter(Boolean);
    const charCount = trimmed.length;
    const wordCount = words.length;

    const firstLineMatch = trimmed.match(/^([^\n]+)/);
    let firstLine = firstLineMatch ? firstLineMatch[1].trim() : trimmed;
    if (!firstLine.includes('.') && sentences.length > 0 && sentences[0].length < firstLine.length) {
        firstLine = sentences[0]; // If no newline, take first sentence
    }
    const firstLineLower = firstLine.toLowerCase();

    // --- Category 1: Hook Strength ---
    let hookScore = 5;
    const hookSuggestions: string[] = [];

    // Signals
    if (/^\d+|^\s*\d+%|^\s*\d+\s+things/i.test(firstLineLower)) hookScore += 3;
    if (firstLine.includes('?')) hookScore += 3;
    const contrarianWords = ['stop', 'wrong', 'myth', 'truth', 'secret', 'mistake', 'never', 'always', 'unpopular opinion'];
    if (contrarianWords.some(w => firstLineLower.includes(w))) hookScore += 3;
    const strongI = ['i quit', 'i failed', 'i fired', 'i lost', 'i built'];
    if (strongI.some(w => firstLineLower.includes(w))) hookScore += 2;
    if (firstLine.length < 100) hookScore += 1;
    if (firstLine.length < 60) hookScore += 1;

    // Capitalized words in first line
    const capsWords = firstLine.split(/\s+/).filter(w => w.length > 1 && w === w.toUpperCase() && !/^[^A-Z]+$/.test(w));
    if (capsWords.length >= 1 && capsWords.length <= 3) hookScore += 1;

    // Penalties
    if (firstLineLower.startsWith("i'm excited to announce")) hookScore -= 4;
    else if (firstLineLower.startsWith("i'm happy to share")) hookScore -= 4;
    else if (firstLineLower.startsWith("i'm thrilled")) hookScore -= 3;
    else if (firstLineLower.startsWith("i'm pleased")) hookScore -= 3;
    else if (firstLineLower.startsWith("excited to")) hookScore -= 3;
    else if (firstLineLower.startsWith("happy to share")) hookScore -= 3;
    else if (firstLineLower.startsWith("i wanted to share")) hookScore -= 2;
    else if (firstLineLower.startsWith("just wanted to")) hookScore -= 2;
    else if (firstLineLower.startsWith("hope everyone")) hookScore -= 2;

    if (firstLine.length > 200) hookScore -= 2;

    hookScore = Math.max(0, Math.min(10, hookScore));

    if (hookScore < 7) {
        if (firstLineLower.startsWith("i'm excited to announce") || firstLineLower.startsWith("i'm happy to share")) {
            hookSuggestions.push("Starting with corporate speak signals an update — LinkedIn's algorithm deprioritizes these.");
        } else if (firstLine.length > 100) {
            hookSuggestions.push(`The first line is ${firstLine.length} characters. Hooks under 100 characters get more 'see more' clicks.`);
        } else {
            const first5 = firstLine.split(/\s+/).slice(0, 5).join(' ');
            hookSuggestions.push(`Your hook starts with '${first5}...' — try opening with a question or a surprising stat instead.`);
        }
    }

    // --- Category 2: Length ---
    let lengthScore = 0;
    let lengthLabel = "";
    if (charCount <= 50) { lengthScore = 1; lengthLabel = "Too short — this isn't a post yet."; }
    else if (charCount <= 200) { lengthScore = 3; lengthLabel = "Too short — add more substance."; }
    else if (charCount <= 500) { lengthScore = 5; lengthLabel = "Decent for a quick take, but longer posts tend to get more reach."; }
    else if (charCount <= 900) { lengthScore = 7; lengthLabel = "Good length. Solid engagement territory."; }
    else if (charCount <= 1300) { lengthScore = 10; lengthLabel = "Sweet spot — optimal for reach and engagement (Hootsuite 2025 data)."; }
    else if (charCount <= 2000) { lengthScore = 8; lengthLabel = "Still strong — make sure every line earns its place."; }
    else if (charCount <= 2500) { lengthScore = 6; lengthLabel = "Getting long. Most readers drop off past 2,000 characters."; }
    else if (charCount <= 3000) { lengthScore = 4; lengthLabel = "Very long — consider trimming. Only power users read this far."; }
    else { lengthScore = 2; lengthLabel = "LinkedIn caps posts at 3,000 characters. You're pushing the limit."; }

    const lengthSuggestions: string[] = [];
    if (lengthScore < 7) {
        if (charCount < 900) {
            lengthSuggestions.push(`Your post is ${charCount} characters. The engagement sweet spot is 900-1,300 characters — you have room to expand.`);
        } else if (charCount > 2000) {
            lengthSuggestions.push(`At ${charCount} characters, consider trimming. Posts over 2,000 characters see a drop-off in read-through rate.`);
        }
    }

    // --- Category 3: Readability ---
    let readScore = 3;
    const avgSentenceWords = sentences.length > 0 ? wordCount / sentences.length : 0;
    
    if (avgSentenceWords >= 12 && avgSentenceWords <= 18) readScore += 3;
    else if ((avgSentenceWords >= 8 && avgSentenceWords < 12) || (avgSentenceWords > 18 && avgSentenceWords <= 22)) readScore += 1;
    
    const paragraphSentences = paragraphs.map(p => p.split(/[.!?]+(?: |\n|$)/).filter(Boolean).length);
    const avgParaSentences = paragraphSentences.length > 0 ? paragraphSentences.reduce((a, b) => a + b, 0) / paragraphSentences.length : 0;
    
    if (avgParaSentences <= 2) readScore += 2;
    
    const blankLines = text.match(/\n\s*\n/g);
    if (blankLines && blankLines.length >= paragraphs.length / 2) readScore += 2;

    const hasList = /[•\-\*]\s|^\d+\.\s/m.test(text);
    if (hasList) readScore += 1;

    const maxParaSentences = paragraphSentences.length > 0 ? Math.max(...paragraphSentences) : 0;
    if (maxParaSentences <= 4) readScore += 1;
    if (paragraphSentences.includes(1)) readScore += 1;

    // Penalties
    if (charCount >= 500 && !text.includes('\n')) readScore -= 3;
    if (maxParaSentences > 6) readScore -= 2;
    if (avgSentenceWords > 30) readScore -= 2;

    readScore = Math.max(0, Math.min(10, readScore));

    const readSuggestions: string[] = [];
    if (readScore < 7) {
        if (charCount >= 500 && !text.includes('\n\n')) {
            readSuggestions.push("Add line breaks between your paragraphs — LinkedIn readers scan vertically, not horizontally.");
        } else if (avgSentenceWords > 22 || avgSentenceWords < 8) {
            readSuggestions.push(`Your average sentence is ${Math.round(avgSentenceWords)} words. Aim for 12-18 words per sentence for easy scanning.`);
        } else if (maxParaSentences > 4) {
            readSuggestions.push(`You have a ${maxParaSentences}-sentence paragraph. Break it into 1-2 sentence chunks for better readability.`);
        }
    }

    // --- Category 4: Formatting ---
    let formScore = 3;
    const hashtags = text.match(/#\w+/g) || [];
    const hashCount = hashtags.length;
    
    const formattingSuggestions: string[] = [];

    if (hashCount >= 3 && hashCount <= 5) formScore += 3;
    else if (hashCount >= 1 && hashCount <= 2) formScore += 1;
    else if (hashCount === 0) formattingSuggestions.push("No hashtags detected. Add 3-5 relevant ones at the end of your post.");
    else if (hashCount >= 6 && hashCount <= 9) { formScore -= 1; formattingSuggestions.push("You're using " + hashCount + " hashtags — trim to 3-5 for best reach."); }
    else if (hashCount >= 10) { formScore -= 3; formattingSuggestions.push("Way too many hashtags — looks spammy."); }

    const emojis = text.match(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu) || [];
    const emojiCount = emojis.length;
    if (emojiCount >= 0 && emojiCount <= 3) formScore += 2;
    else if (emojiCount === 4 || emojiCount === 5) formScore += 1;
    else if (emojiCount >= 6) { formScore -= 1; formattingSuggestions.push("Dial back the emojis to keep it professional."); }

    if (hasList) formScore += 2;

    const allCapsWords = words.filter(w => w.length > 2 && w === w.toUpperCase() && !/[^A-Z]/.test(w));
    if (allCapsWords.length <= 2) formScore += 1;
    else { formScore -= 2; formattingSuggestions.push("Tone down the ALL CAPS words."); }

    if (trimmed.endsWith('?')) formScore += 1;
    const ctas = ['comment below', 'share this', 'follow me', 'what do you think', 'let me know'];
    if (ctas.some(cta => trimmed.toLowerCase().includes(cta))) formScore += 1;

    formScore = Math.max(0, Math.min(10, formScore));

    if (formScore < 7 && formattingSuggestions.length === 0) {
        if (!trimmed.endsWith('?')) {
            formattingSuggestions.push("Try ending with a question to drive comments — LinkedIn's algorithm rewards engagement.");
        }
    }

    // --- Overall ---
    const overall = Math.round((hookScore * 0.30 + lengthScore * 0.20 + readScore * 0.25 + formScore * 0.25) * 10);
    
    let verdictLabel = "";
    if (overall <= 40) verdictLabel = "Needs work — check the feedback below.";
    else if (overall <= 55) verdictLabel = "Decent start — a few changes will make this much stronger.";
    else if (overall <= 70) verdictLabel = "Good post — see suggestions to push it further.";
    else if (overall <= 85) verdictLabel = "Strong post — minor tweaks and you're ready.";
    else verdictLabel = "Excellent — ready to publish!";

    const allSuggestions = [...hookSuggestions, ...lengthSuggestions, ...readSuggestions, ...formattingSuggestions].slice(0, 5);

    return {
        overall,
        verdictLabel,
        hook: { score: hookScore, label: "", suggestions: hookSuggestions },
        length: { score: lengthScore, label: lengthLabel, suggestions: lengthSuggestions },
        readability: { score: readScore, label: "", suggestions: readSuggestions },
        formatting: { score: formScore, label: "", suggestions: formattingSuggestions },
        allSuggestions
    };
}
