export type ToneName = 'professional' | 'friendly' | 'confident' | 'passive-aggressive' | 'apologetic' | 'urgent' | 'formal' | 'casual' | 'blunt' | 'neutral';

export interface TonePercentage { tone: ToneName; percentage: number; color: string; }
export interface SentenceAnalysis { text: string; primaryTone: ToneName; toneScores: Partial<Record<ToneName, number>>; flaggedPhrases: string[]; }
export interface FlaggedPhrase { phrase: string; tone: ToneName; suggestion: string; sentenceIndex: number; }
export interface ToneAnalysisResult { overallTones: TonePercentage[]; score: number; scoreLabel: string; sentences: SentenceAnalysis[]; flaggedPhrases: FlaggedPhrase[]; suggestions: string[]; }

const TONE_COLORS: Record<ToneName, string> = {
  'professional': '#3b82f6', 'friendly': '#22c55e', 'confident': '#8b5cf6', 'passive-aggressive': '#ef4444',
  'apologetic': '#eab308', 'urgent': '#991b1b', 'formal': '#6b7280', 'casual': '#14b8a6',
  'blunt': '#f97316', 'neutral': '#cbd5e1',
};

interface PhraseEntry { phrase: string; suggestion: string; }

const PHRASE_DICT: Record<ToneName, PhraseEntry[]> = {
  'passive-aggressive': [
    { phrase: 'per my last email', suggestion: 'Replace with "To follow up on my earlier message"' },
    { phrase: 'as i already mentioned', suggestion: 'Replace with "To reiterate" or "As a reminder"' },
    { phrase: 'as previously stated', suggestion: 'Replace with "As noted earlier"' },
    { phrase: 'going forward', suggestion: 'Replace with "From now on" or just state the action' },
    { phrase: "i'm not sure if you saw my last message", suggestion: 'Replace with "Following up on my previous message"' },
    { phrase: 'correct me if i\'m wrong', suggestion: 'Replace with "My understanding is..." or ask directly' },
    { phrase: 'with all due respect', suggestion: 'Remove this phrase entirely — just state your point respectfully' },
    { phrase: 'friendly reminder', suggestion: 'Replace with "Quick reminder" or "Just a heads-up"' },
    { phrase: 'gentle reminder', suggestion: 'Replace with "Quick reminder" or "Following up"' },
    { phrase: 'as per our conversation', suggestion: 'Replace with "As we discussed"' },
    { phrase: 'i hope this helps', suggestion: 'Keep only when genuinely offering help, not sarcastically' },
    { phrase: 'noted', suggestion: 'Add context: "Noted — I\'ll take care of it" or "Got it, thanks"' },
    { phrase: 'okay noted', suggestion: 'Replace with "Got it, thanks!" or "Understood — I\'ll handle it"' },
    { phrase: 'thanks in advance', suggestion: 'Replace with "I\'d appreciate your help with this" or "Thank you!"' },
    { phrase: 'as i mentioned before', suggestion: 'Replace with "To clarify" or just restate the point' },
    { phrase: 'not sure if you\'re aware', suggestion: 'Replace with "Just wanted to flag that..."' },
    { phrase: 'just to be clear', suggestion: 'Replace with "To clarify" — less confrontational' },
    { phrase: 'i would have expected', suggestion: 'Replace with "I was hoping for..." or state the need directly' },
    { phrase: 'any update on this', suggestion: 'Replace with "Do you have an update?" or add context' },
    { phrase: 'did you not receive', suggestion: 'Replace with "I wanted to check if you received..."' },
  ],
  'formal': [
    { phrase: 'i would like to kindly inform you', suggestion: 'Replace with "I wanted to let you know"' },
    { phrase: 'please find attached herewith', suggestion: 'Replace with "I\'ve attached" or "Here\'s the..."' },
    { phrase: 'i hope this email finds you well', suggestion: 'Replace with "Hope you\'re doing well!" or skip entirely' },
    { phrase: 'i am writing to you in order to', suggestion: 'Remove — just state your purpose directly' },
    { phrase: 'please do not hesitate to contact me', suggestion: 'Replace with "Feel free to reach out"' },
    { phrase: 'at your earliest convenience', suggestion: 'Replace with "when you get a chance" or give a specific date' },
    { phrase: 'i would like to take this opportunity to', suggestion: 'Remove — just say what you want to say' },
    { phrase: 'pursuant to our discussion', suggestion: 'Replace with "Following our chat" or "As we discussed"' },
    { phrase: 'i wish to bring to your attention', suggestion: 'Replace with "I wanted to flag" or "Heads up:"' },
    { phrase: 'for your kind review and consideration', suggestion: 'Replace with "for your review" or "let me know what you think"' },
    { phrase: 'please be advised', suggestion: 'Replace with "Just so you know" or "Heads up"' },
    { phrase: 'the undersigned', suggestion: 'Use your name or "I"' },
    { phrase: 'kindly be informed', suggestion: 'Replace with "Just wanted to let you know"' },
    { phrase: 'it has come to my attention', suggestion: 'Replace with "I noticed" or "I saw that"' },
    { phrase: 'i hereby', suggestion: 'Remove — just state the action' },
    { phrase: 'enclosed herewith', suggestion: 'Replace with "attached" or "here\'s"' },
    { phrase: 'we regret to inform you', suggestion: 'Replace with "Unfortunately" and state the news directly' },
    { phrase: 'with reference to', suggestion: 'Replace with "Regarding" or "About"' },
    { phrase: 'in accordance with', suggestion: 'Replace with "Following" or "Per"' },
    { phrase: 'the aforementioned', suggestion: 'Replace with "the" + the specific noun, or "this"' },
  ],
  'apologetic': [
    { phrase: 'sorry to bother you', suggestion: 'Remove — just state your request confidently' },
    { phrase: 'i\'m sorry but', suggestion: 'Remove "I\'m sorry but" — just state your point' },
    { phrase: 'sorry for the inconvenience', suggestion: 'Replace with "Thanks for your patience" or "I appreciate your flexibility"' },
    { phrase: 'if it\'s not too much trouble', suggestion: 'Remove — just make the request directly' },
    { phrase: 'i hate to ask but', suggestion: 'Remove — just ask' },
    { phrase: 'i might be wrong but', suggestion: 'Replace with "My take is..." or just state your view' },
    { phrase: 'this is probably a dumb question', suggestion: 'Remove entirely — no question is dumb' },
    { phrase: 'i just wanted to', suggestion: 'Remove "just" — say "I wanted to"' },
    { phrase: 'i was just wondering if maybe', suggestion: 'Replace with "I\'d like to know" or ask directly' },
    { phrase: 'does that make sense', suggestion: 'Replace with "Let me know if you have questions"' },
    { phrase: 'i could be wrong', suggestion: 'Replace with "From what I\'ve seen..." and state your view' },
    { phrase: 'sorry if this is unclear', suggestion: 'Replace with "Let me know if anything needs clarification"' },
    { phrase: 'i don\'t mean to overstep', suggestion: 'Remove — just share your perspective respectfully' },
    { phrase: 'forgive me for', suggestion: 'Remove — just proceed with your point' },
    { phrase: 'i\'m no expert but', suggestion: 'Remove — share your perspective without disclaimers' },
    { phrase: 'apologies for the delay', suggestion: 'Replace with "Thanks for your patience"' },
    { phrase: 'sorry for the late reply', suggestion: 'Replace with "Thanks for waiting" or just reply' },
    { phrase: 'hope i\'m not overstepping', suggestion: 'Remove — just share your input' },
  ],
  'confident': [
    { phrase: 'i recommend', suggestion: '' }, { phrase: 'here\'s what i suggest', suggestion: '' },
    { phrase: 'i\'m confident that', suggestion: '' }, { phrase: 'i\'ll take care of it', suggestion: '' },
    { phrase: 'consider it done', suggestion: '' }, { phrase: 'absolutely', suggestion: '' },
    { phrase: 'i\'m excited to', suggestion: '' }, { phrase: 'let\'s make this happen', suggestion: '' },
    { phrase: 'i believe', suggestion: '' }, { phrase: 'here\'s my recommendation', suggestion: '' },
    { phrase: 'i\'m happy to lead', suggestion: '' }, { phrase: 'let me handle this', suggestion: '' },
    { phrase: 'i\'ve got this', suggestion: '' }, { phrase: 'here\'s the plan', suggestion: '' },
    { phrase: 'count on me', suggestion: '' }, { phrase: 'without a doubt', suggestion: '' },
  ],
  'urgent': [
    { phrase: 'asap', suggestion: '' }, { phrase: 'urgent', suggestion: '' },
    { phrase: 'time-sensitive', suggestion: '' }, { phrase: 'deadline', suggestion: '' },
    { phrase: 'we need this by', suggestion: '' }, { phrase: 'this can\'t wait', suggestion: '' },
    { phrase: 'immediately', suggestion: '' }, { phrase: 'please prioritize', suggestion: '' },
    { phrase: 'critical', suggestion: '' }, { phrase: 'action required', suggestion: '' },
    { phrase: 'end of day', suggestion: '' }, { phrase: 'by eod', suggestion: '' },
    { phrase: 'as soon as possible', suggestion: '' }, { phrase: 'time is running out', suggestion: '' },
    { phrase: 'drop everything', suggestion: '' }, { phrase: 'blocker', suggestion: '' },
  ],
  'friendly': [
    { phrase: 'hope you\'re doing well', suggestion: '' }, { phrase: 'thanks so much', suggestion: '' },
    { phrase: 'really appreciate', suggestion: '' }, { phrase: 'no rush', suggestion: '' },
    { phrase: 'whenever you get a chance', suggestion: '' }, { phrase: 'happy to help', suggestion: '' },
    { phrase: 'that\'s awesome', suggestion: '' }, { phrase: 'great job on', suggestion: '' },
    { phrase: 'love this', suggestion: '' }, { phrase: 'sounds great', suggestion: '' },
    { phrase: 'looking forward to', suggestion: '' }, { phrase: 'you\'re the best', suggestion: '' },
    { phrase: 'cheers', suggestion: '' }, { phrase: 'have a great', suggestion: '' },
    { phrase: 'thanks a bunch', suggestion: '' }, { phrase: 'keep up the great work', suggestion: '' },
  ],
  'professional': [
    { phrase: 'i\'d like to discuss', suggestion: '' }, { phrase: 'please let me know', suggestion: '' },
    { phrase: 'i wanted to follow up', suggestion: '' }, { phrase: 'thank you for your time', suggestion: '' },
    { phrase: 'best regards', suggestion: '' }, { phrase: 'looking forward to your response', suggestion: '' },
    { phrase: 'i appreciate your', suggestion: '' }, { phrase: 'as discussed', suggestion: '' },
    { phrase: 'for your reference', suggestion: '' }, { phrase: 'please see below', suggestion: '' },
    { phrase: 'i\'d appreciate your input', suggestion: '' }, { phrase: 'regarding', suggestion: '' },
    { phrase: 'in regards to', suggestion: '' }, { phrase: 'please advise', suggestion: '' },
    { phrase: 'to summarize', suggestion: '' }, { phrase: 'moving forward', suggestion: '' },
  ],
  'casual': [
    { phrase: 'hey', suggestion: '' }, { phrase: 'what\'s up', suggestion: '' },
    { phrase: 'no worries', suggestion: '' }, { phrase: 'cool', suggestion: '' },
    { phrase: 'gotcha', suggestion: '' }, { phrase: 'lol', suggestion: '' },
    { phrase: 'haha', suggestion: '' }, { phrase: 'btw', suggestion: '' },
    { phrase: 'fyi', suggestion: '' }, { phrase: 'gonna', suggestion: '' },
    { phrase: 'wanna', suggestion: '' }, { phrase: 'nah', suggestion: '' },
    { phrase: 'yep', suggestion: '' }, { phrase: 'nope', suggestion: '' },
    { phrase: 'tbh', suggestion: '' }, { phrase: 'imo', suggestion: '' },
  ],
  'blunt': [
    { phrase: 'you need to', suggestion: 'Replace with "Could you..." or "It would help if..."' },
    { phrase: 'this is wrong', suggestion: 'Replace with "I see an issue here" or "This needs adjustment"' },
    { phrase: 'you should have', suggestion: 'Replace with "Next time, let\'s..." or focus on the future' },
    { phrase: 'i don\'t agree', suggestion: 'Replace with "I see it differently" and explain why' },
    { phrase: 'that doesn\'t work', suggestion: 'Replace with "I have some concerns about this approach"' },
    { phrase: 'you forgot to', suggestion: 'Replace with "Just a heads-up — [thing] still needs to be done"' },
    { phrase: 'obviously', suggestion: 'Remove — what\'s obvious to you may not be to others' },
    { phrase: 'clearly', suggestion: 'Remove or replace with supporting evidence' },
    { phrase: 'this is unacceptable', suggestion: 'Replace with "This falls below the standard we need"' },
    { phrase: 'i already told you', suggestion: 'Replace with "As a reminder" or restate the information' },
    { phrase: 'you failed to', suggestion: 'Replace with "It looks like [thing] was missed"' },
    { phrase: 'that\'s not my problem', suggestion: 'Replace with "That\'s outside my scope, but [name] might help"' },
    { phrase: 'figure it out', suggestion: 'Replace with "Let me know if you need help working through this"' },
    { phrase: 'no', suggestion: '' },
    { phrase: 'stop', suggestion: '' },
    { phrase: 'wrong', suggestion: '' },
  ],
  'neutral': [],
};

function splitSentences(text: string): string[] {
  return text.split(/(?<=[.!?])\s+|(?:\n)+/).map(s => s.trim()).filter(s => s.length > 0);
}

function analyzeSentence(sentence: string): { toneScores: Partial<Record<ToneName, number>>; flaggedPhrases: string[] } {
  const lower = sentence.toLowerCase();
  const scores: Partial<Record<ToneName, number>> = {};
  const flagged: string[] = [];

  const addScore = (tone: ToneName, amount: number) => { scores[tone] = (scores[tone] || 0) + amount; };

  // 1. Phrase matching (highest weight)
  for (const [tone, entries] of Object.entries(PHRASE_DICT) as [ToneName, PhraseEntry[]][]) {
    for (const entry of entries) {
      if (lower.includes(entry.phrase)) {
        addScore(tone, 3);
        if (entry.suggestion) flagged.push(entry.phrase);
      }
    }
  }

  // 2. Pattern analysis
  const exclamationCount = (sentence.match(/!/g) || []).length;
  if (exclamationCount === 1) addScore('friendly', 1);
  if (exclamationCount >= 2) addScore('casual', 1.5);

  const capsWords = sentence.split(/\s+/).filter(w => w.length > 2 && w === w.toUpperCase() && /[A-Z]/.test(w));
  if (capsWords.length > 0) addScore('urgent', capsWords.length * 1.5);

  const hedgeWords = lower.match(/\b(maybe|perhaps|possibly|i think|sort of|kind of|a bit|a little|might|could be)\b/g);
  if (hedgeWords) addScore('apologetic', hedgeWords.length * 1.2);

  const justMinimizer = lower.match(/\bjust\b/g);
  if (justMinimizer && (lower.includes('just wanted') || lower.includes('just wondering') || lower.includes('just checking') || lower.includes('just a'))) {
    addScore('apologetic', 1.5);
  }

  const words = sentence.split(/\s+/).length;
  if (words > 30) addScore('formal', 1);
  if (words <= 5 && !lower.includes('!')) addScore('blunt', 1.5);

  if (sentence.includes('...')) addScore('passive-aggressive', 1);

  const startsWithI = sentence.trim().startsWith('I ') || sentence.trim().startsWith('I\'');
  if (startsWithI) addScore('neutral', 0.3);

  const questionAccusation = /\b(did you not|didn't you|haven't you|why didn't you|why haven't you)\b/i.test(sentence);
  if (questionAccusation) addScore('passive-aggressive', 2);

  const emojiMatch = sentence.match(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu);
  if (emojiMatch) addScore('friendly', emojiMatch.length * 0.5);

  // Default to neutral if nothing detected
  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  if (total === 0) addScore('neutral', 1);

  return { toneScores: scores, flaggedPhrases: flagged };
}

function getPrimaryTone(scores: Partial<Record<ToneName, number>>): ToneName {
  let max = 0; let primary: ToneName = 'neutral';
  for (const [tone, score] of Object.entries(scores) as [ToneName, number][]) {
    if (score > max) { max = score; primary = tone; }
  }
  return primary;
}

function calculateScore(overallTones: TonePercentage[]): { score: number; label: string } {
  const toneMap: Partial<Record<ToneName, number>> = {};
  for (const t of overallTones) toneMap[t.tone] = t.percentage;

  let score = 7; // start neutral-good
  const pa = toneMap['passive-aggressive'] || 0;
  const ap = toneMap['apologetic'] || 0;
  const fo = toneMap['formal'] || 0;
  const bl = toneMap['blunt'] || 0;
  const pr = toneMap['professional'] || 0;
  const fr = toneMap['friendly'] || 0;
  const co = toneMap['confident'] || 0;

  score -= pa * 0.08;
  score -= ap * 0.04;
  score -= fo * 0.03;
  score -= bl * 0.05;
  score += pr * 0.02;
  score += fr * 0.015;
  score += co * 0.02;

  score = Math.max(1, Math.min(10, Math.round(score * 10) / 10));

  const topTones = overallTones.filter(t => t.percentage >= 15).slice(0, 2);
  const labels: Record<ToneName, string> = {
    'professional': 'Professional', 'friendly': 'Friendly', 'confident': 'Confident',
    'passive-aggressive': 'Passive-Aggressive', 'apologetic': 'Apologetic', 'urgent': 'Urgent',
    'formal': 'Overly Formal', 'casual': 'Casual', 'blunt': 'Blunt', 'neutral': 'Neutral',
  };

  let label: string;
  if (pa >= 20) label = '⚠️ Passive-aggressive undertones detected';
  else if (ap >= 25) label = '⚠️ Over-apologetic — sounds unconfident';
  else if (fo >= 30) label = '⚠️ Overly formal — may feel stiff or distant';
  else if (bl >= 25) label = '⚠️ Too blunt — may come across as harsh';
  else label = topTones.map(t => labels[t.tone]).join(' & ') || 'Neutral';

  return { score, label };
}

function generateSuggestions(result: { overallTones: TonePercentage[]; flaggedPhrases: FlaggedPhrase[] }): string[] {
  const tips: string[] = [];
  const toneMap: Partial<Record<ToneName, number>> = {};
  for (const t of result.overallTones) toneMap[t.tone] = t.percentage;

  if ((toneMap['passive-aggressive'] || 0) >= 10) {
    const pa = result.flaggedPhrases.find(f => f.tone === 'passive-aggressive');
    tips.push(pa ? `${pa.suggestion} to reduce passive-aggressive tone.` : 'Rephrase indirect complaints as direct, constructive requests.');
  }
  if ((toneMap['formal'] || 0) >= 15) {
    tips.push('Simplify formal language — replace phrases like "I would like to kindly inform you" with "I wanted to let you know." Modern business communication is more conversational.');
  }
  if ((toneMap['apologetic'] || 0) >= 15) {
    tips.push('Reduce hedging and apologies. Remove words like "just," "maybe," and "sorry to bother you." State your requests with confidence.');
  }
  if ((toneMap['blunt'] || 0) >= 15) {
    tips.push('Soften direct statements by adding context or empathy. Instead of "This is wrong," try "I noticed an issue here — let me explain."');
  }
  if ((toneMap['urgent'] || 0) >= 20) {
    tips.push('If urgency is intentional, great. If not, reduce ALL CAPS and words like "ASAP" or "immediately" to avoid unnecessary pressure.');
  }
  if ((toneMap['casual'] || 0) >= 20) {
    tips.push('The tone is quite casual. For professional emails, consider reducing slang and adding more structured phrasing.');
  }
  if (tips.length === 0) {
    tips.push('Your email tone is well-balanced! It reads as professional and appropriate for business communication.');
    if ((toneMap['friendly'] || 0) < 10) tips.push('Consider adding a warm touch — a brief "Hope you\'re well" or "Thanks for your help" can make emails feel more human.');
  }
  return tips.slice(0, 3);
}

export function analyzeTone(text: string): ToneAnalysisResult {
  if (!text.trim()) {
    return { overallTones: [{ tone: 'neutral', percentage: 100, color: TONE_COLORS.neutral }], score: 5, scoreLabel: 'No text to analyze', sentences: [], flaggedPhrases: [], suggestions: ['Paste an email or message to get a tone analysis.'] };
  }

  const sentences = splitSentences(text);
  const analyzed: SentenceAnalysis[] = sentences.map(s => {
    const { toneScores, flaggedPhrases } = analyzeSentence(s);
    return { text: s, primaryTone: getPrimaryTone(toneScores), toneScores, flaggedPhrases };
  });

  // Aggregate
  const aggregated: Record<ToneName, number> = { 'professional': 0, 'friendly': 0, 'confident': 0, 'passive-aggressive': 0, 'apologetic': 0, 'urgent': 0, 'formal': 0, 'casual': 0, 'blunt': 0, 'neutral': 0 };
  for (const s of analyzed) {
    for (const [tone, score] of Object.entries(s.toneScores) as [ToneName, number][]) {
      aggregated[tone] += score;
    }
  }
  const total = Object.values(aggregated).reduce((a, b) => a + b, 0) || 1;
  const overallTones: TonePercentage[] = Object.entries(aggregated)
    .map(([tone, score]) => ({ tone: tone as ToneName, percentage: Math.round((score / total) * 100), color: TONE_COLORS[tone as ToneName] }))
    .filter(t => t.percentage > 0)
    .sort((a, b) => b.percentage - a.percentage);

  // Collect flagged phrases
  const flaggedPhrases: FlaggedPhrase[] = [];
  analyzed.forEach((s, idx) => {
    for (const fp of s.flaggedPhrases) {
      for (const [tone, entries] of Object.entries(PHRASE_DICT) as [ToneName, PhraseEntry[]][]) {
        const entry = entries.find(e => e.phrase === fp && e.suggestion);
        if (entry) {
          flaggedPhrases.push({ phrase: entry.phrase, tone: tone, suggestion: entry.suggestion, sentenceIndex: idx });
          break;
        }
      }
    }
  });

  const { score, label } = calculateScore(overallTones);
  const suggestions = generateSuggestions({ overallTones, flaggedPhrases });

  return { overallTones, score, scoreLabel: label, sentences: analyzed, flaggedPhrases, suggestions };
}
