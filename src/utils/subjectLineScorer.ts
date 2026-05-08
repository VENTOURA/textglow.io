export type SpamSeverity = 'mild' | 'moderate' | 'high';

export interface SpamTriggerMatch {
  term: string;
  category: string;
  severity: SpamSeverity;
  startIndex: number;
  endIndex: number;
}

export interface LengthResult {
  score: number;           
  wordCount: number;
  charCount: number;
  feedback: string;
  isTruncatedOnIphone: boolean;   
  isTruncatedOnGmail: boolean;    
  isTruncatedOnOutlook: boolean;  
}

export interface SpamResult {
  score: number;           
  matches: SpamTriggerMatch[];
  hasAllCaps: boolean;
  hasExcessivePunctuation: boolean;
  triggerCount: number;
  overallSeverity: SpamSeverity | null;
  feedback: string;
}

export interface PersonalizationResult {
  score: number;
  hasTemplateTag: boolean;       
  hasYouYour: boolean;
  isSpecific: boolean;           
  feedback: string;
}

export interface CuriosityResult {
  score: number;
  isQuestion: boolean;
  hasNumber: boolean;
  numberValue: string | null;
  powerWords: string[];
  emojiCount: number;
  emojiBoost: boolean;           
  emojiPenalty: boolean;         
  feedback: string;
}

export type EmotionalTone = 'neutral' | 'urgent' | 'curious' | 'professional' | 'friendly' | 'fearful' | 'exciting';

export interface ToneResult {
  score: number;
  primaryTone: EmotionalTone;
  detectedTones: EmotionalTone[];
  feedback: string;
}

export interface ReadabilityResult {
  score: number;
  feedback: string;
}

export interface CategoryScores {
  length: LengthResult;
  spam: SpamResult;
  personalization: PersonalizationResult;
  curiosity: CuriosityResult;
  tone: ToneResult;
  readability: ReadabilityResult;
}

export interface OverallScore {
  value: number;          
  grade: 'poor' | 'fair' | 'good' | 'excellent';
  label: string;          
  color: string;          
}

export interface SubjectLineAnalysis {
  input: string;
  overall: OverallScore;
  categories: CategoryScores;
}

interface SpamTerm {
  term: string;
  category: string;
  severity: SpamSeverity;
}

const SPAM_TRIGGERS: SpamTerm[] = [
  // Money / Financial (moderate to high)
  { term: 'free', category: 'financial', severity: 'moderate' },
  { term: 'free!', category: 'financial', severity: 'high' },
  { term: 'earn', category: 'financial', severity: 'moderate' },
  { term: 'cash', category: 'financial', severity: 'moderate' },
  { term: 'money', category: 'financial', severity: 'moderate' },
  { term: 'income', category: 'financial', severity: 'moderate' },
  { term: 'profit', category: 'financial', severity: 'moderate' },
  { term: 'profits', category: 'financial', severity: 'moderate' },
  { term: 'million', category: 'financial', severity: 'high' },
  { term: 'billion', category: 'financial', severity: 'high' },
  { term: 'dollar', category: 'financial', severity: 'moderate' },
  { term: 'dollars', category: 'financial', severity: 'moderate' },
  { term: '$$$', category: 'financial', severity: 'high' },
  { term: '$$', category: 'financial', severity: 'moderate' },
  { term: 'make money', category: 'financial', severity: 'high' },
  { term: 'extra cash', category: 'financial', severity: 'high' },
  { term: 'extra income', category: 'financial', severity: 'high' },
  { term: 'credit', category: 'financial', severity: 'moderate' },
  { term: 'bad credit', category: 'financial', severity: 'high' },
  { term: 'no credit check', category: 'financial', severity: 'high' },
  { term: 'loans', category: 'financial', severity: 'moderate' },
  { term: 'loan', category: 'financial', severity: 'moderate' },
  { term: 'debt', category: 'financial', severity: 'moderate' },
  { term: 'bankruptcy', category: 'financial', severity: 'high' },
  { term: 'save big', category: 'financial', severity: 'moderate' },
  { term: 'lowest price', category: 'financial', severity: 'moderate' },
  { term: 'best price', category: 'financial', severity: 'moderate' },
  { term: 'lowest rate', category: 'financial', severity: 'moderate' },
  { term: 'rates', category: 'financial', severity: 'mild' },
  { term: 'refinance', category: 'financial', severity: 'moderate' },
  { term: 'mortgage', category: 'financial', severity: 'moderate' },
  { term: 'insurance quote', category: 'financial', severity: 'high' },
  { term: 'compare rates', category: 'financial', severity: 'moderate' },
  { term: 'afford', category: 'financial', severity: 'mild' },
  { term: 'pay nothing', category: 'financial', severity: 'high' },
  { term: 'no payment required', category: 'financial', severity: 'high' },
  { term: 'price guarantee', category: 'financial', severity: 'moderate' },
  { term: 'money back', category: 'financial', severity: 'moderate' },
  { term: 'back guarantee', category: 'financial', severity: 'moderate' },
  { term: 'double your money', category: 'financial', severity: 'high' },
  { term: 'triple your', category: 'financial', severity: 'high' },
  { term: 'financial freedom', category: 'financial', severity: 'high' },
  { term: 'wealth', category: 'financial', severity: 'moderate' },
  { term: 'rich', category: 'financial', severity: 'moderate' },
  { term: 'get rich', category: 'financial', severity: 'high' },
  { term: 'investment opportunity', category: 'financial', severity: 'high' },
  { term: 'returns', category: 'financial', severity: 'mild' },
  { term: 'yield', category: 'financial', severity: 'mild' },
  { term: 'passive income', category: 'financial', severity: 'high' },
  { term: 'revenue', category: 'financial', severity: 'mild' },
  { term: 'profits guaranteed', category: 'financial', severity: 'high' },
  { term: 'increase sales', category: 'financial', severity: 'moderate' },
  { term: 'more sales', category: 'financial', severity: 'moderate' },
  { term: 'more leads', category: 'financial', severity: 'moderate' },
  { term: 'earn $$$', category: 'financial', severity: 'high' },
  { term: 'make $500', category: 'financial', severity: 'high' },

  // Urgency Abuse (moderate)
  { term: 'act now', category: 'urgency', severity: 'moderate' },
  { term: 'act fast', category: 'urgency', severity: 'moderate' },
  { term: 'act immediately', category: 'urgency', severity: 'moderate' },
  { term: 'limited time', category: 'urgency', severity: 'moderate' },
  { term: 'limited offer', category: 'urgency', severity: 'moderate' },
  { term: 'expires', category: 'urgency', severity: 'moderate' },
  { term: 'expiring', category: 'urgency', severity: 'moderate' },
  { term: 'expiry', category: 'urgency', severity: 'moderate' },
  { term: 'last chance', category: 'urgency', severity: 'moderate' },
  { term: 'final chance', category: 'urgency', severity: 'moderate' },
  { term: 'final notice', category: 'urgency', severity: 'high' },
  { term: "don't miss out", category: 'urgency', severity: 'moderate' },
  { term: "don't miss", category: 'urgency', severity: 'moderate' },
  { term: 'only X left', category: 'urgency', severity: 'moderate' },
  { term: 'only a few left', category: 'urgency', severity: 'moderate' },
  { term: 'running out', category: 'urgency', severity: 'moderate' },
  { term: 'running low', category: 'urgency', severity: 'moderate' },
  { term: 'today only', category: 'urgency', severity: 'moderate' },
  { term: 'this week only', category: 'urgency', severity: 'moderate' },
  { term: 'ends soon', category: 'urgency', severity: 'moderate' },
  { term: 'ending soon', category: 'urgency', severity: 'moderate' },
  { term: 'offer ends', category: 'urgency', severity: 'moderate' },
  { term: 'deal expires', category: 'urgency', severity: 'moderate' },
  { term: 'hurry', category: 'urgency', severity: 'moderate' },
  { term: 'hurry up', category: 'urgency', severity: 'moderate' },
  { term: 'while supplies last', category: 'urgency', severity: 'moderate' },
  { term: 'while they last', category: 'urgency', severity: 'moderate' },
  { term: 'now or never', category: 'urgency', severity: 'moderate' },
  { term: "before it's too late", category: 'urgency', severity: 'moderate' },
  { term: 'time sensitive', category: 'urgency', severity: 'moderate' },
  { term: 'time-sensitive', category: 'urgency', severity: 'moderate' },
  { term: 'urgent', category: 'urgency', severity: 'moderate' },
  { term: 'respond now', category: 'urgency', severity: 'moderate' },
  { term: 'reply now', category: 'urgency', severity: 'moderate' },
  { term: 'immediate response', category: 'urgency', severity: 'moderate' },
  { term: 'immediate action', category: 'urgency', severity: 'high' },
  { term: "don't delay", category: 'urgency', severity: 'moderate' },
  { term: "don't wait", category: 'urgency', severity: 'moderate' },
  { term: 'limited availability', category: 'urgency', severity: 'moderate' },
  { term: 'selling fast', category: 'urgency', severity: 'moderate' },
  { term: 'going fast', category: 'urgency', severity: 'moderate' },
  { term: 'almost gone', category: 'urgency', severity: 'moderate' },

  // Pressure / False Authority (moderate to high)
  { term: 'you have been selected', category: 'authority', severity: 'high' },
  { term: "you've been chosen", category: 'authority', severity: 'high' },
  { term: 'you are a winner', category: 'authority', severity: 'high' },
  { term: 'congratulations', category: 'authority', severity: 'moderate' },
  { term: 'you won', category: 'authority', severity: 'high' },
  { term: 'winner', category: 'authority', severity: 'moderate' },
  { term: 'winning', category: 'authority', severity: 'moderate' },
  { term: 'you qualify', category: 'authority', severity: 'moderate' },
  { term: 'pre-approved', category: 'authority', severity: 'high' },
  { term: 'pre-qualified', category: 'authority', severity: 'high' },
  { term: 'special selection', category: 'authority', severity: 'moderate' },
  { term: 'exclusively for you', category: 'authority', severity: 'moderate' },
  { term: "you've been approved", category: 'authority', severity: 'high' },
  { term: 'claim your', category: 'authority', severity: 'moderate' },
  { term: 'claim now', category: 'authority', severity: 'moderate' },
  { term: 'collect your', category: 'authority', severity: 'moderate' },
  { term: 'you are entitled', category: 'authority', severity: 'moderate' },
  { term: 'entitled to', category: 'authority', severity: 'moderate' },
  { term: 'confirmed', category: 'authority', severity: 'mild' },
  { term: 'your confirmation', category: 'authority', severity: 'mild' },
  { term: 'as seen on', category: 'authority', severity: 'moderate' },
  { term: 'as featured on', category: 'authority', severity: 'moderate' },
  { term: 'endorsed by', category: 'authority', severity: 'moderate' },
  { term: 'official', category: 'authority', severity: 'mild' },
  { term: 'certified', category: 'authority', severity: 'mild' },
  { term: 'guaranteed', category: 'authority', severity: 'moderate' },
  { term: '100% guaranteed', category: 'authority', severity: 'high' },
  { term: 'results guaranteed', category: 'authority', severity: 'high' },
  { term: 'satisfaction guaranteed', category: 'authority', severity: 'moderate' },
  { term: 'no risk', category: 'authority', severity: 'moderate' },
  { term: 'zero risk', category: 'authority', severity: 'moderate' },
  { term: 'risk-free', category: 'authority', severity: 'moderate' },

  // Sketchy / Manipulative (moderate to high)
  { term: 'no obligation', category: 'sketchy', severity: 'moderate' },
  { term: 'no commitment', category: 'sketchy', severity: 'moderate' },
  { term: 'no contract', category: 'sketchy', severity: 'moderate' },
  { term: 'no strings attached', category: 'sketchy', severity: 'moderate' },
  { term: 'no cost', category: 'sketchy', severity: 'moderate' },
  { term: 'at no cost', category: 'sketchy', severity: 'moderate' },
  { term: 'completely free', category: 'sketchy', severity: 'high' },
  { term: 'absolutely free', category: 'sketchy', severity: 'high' },
  { term: 'totally free', category: 'sketchy', severity: 'high' },
  { term: 'free access', category: 'sketchy', severity: 'moderate' },
  { term: 'free trial', category: 'sketchy', severity: 'moderate' },
  { term: 'free gift', category: 'sketchy', severity: 'moderate' },
  { term: 'free bonus', category: 'sketchy', severity: 'moderate' },
  { term: 'free offer', category: 'sketchy', severity: 'moderate' },
  { term: 'click here', category: 'sketchy', severity: 'high' },
  { term: 'click below', category: 'sketchy', severity: 'high' },
  { term: 'click now', category: 'sketchy', severity: 'high' },
  { term: 'click to', category: 'sketchy', severity: 'moderate' },
  { term: 'follow this link', category: 'sketchy', severity: 'moderate' },
  { term: 'visit our website', category: 'sketchy', severity: 'moderate' },
  { term: 'see for yourself', category: 'sketchy', severity: 'moderate' },
  { term: 'check it out', category: 'sketchy', severity: 'mild' },
  { term: 'this is not spam', category: 'sketchy', severity: 'high' },
  { term: 'not spam', category: 'sketchy', severity: 'high' },
  { term: 'not junk', category: 'sketchy', severity: 'high' },
  { term: 'this is legitimate', category: 'sketchy', severity: 'high' },
  { term: 'this is legal', category: 'sketchy', severity: 'high' },
  { term: 'no gimmick', category: 'sketchy', severity: 'high' },
  { term: 'bonus', category: 'sketchy', severity: 'moderate' },
  { term: 'bonuses', category: 'sketchy', severity: 'moderate' },
  { term: 'prize', category: 'sketchy', severity: 'moderate' },
  { term: 'prizes', category: 'sketchy', severity: 'moderate' },
  { term: 'jackpot', category: 'sketchy', severity: 'high' },
  { term: 'sweepstake', category: 'sketchy', severity: 'high' },
  { term: 'sweepstakes', category: 'sketchy', severity: 'high' },
  { term: 'lottery', category: 'sketchy', severity: 'high' },
  { term: 'raffle', category: 'sketchy', severity: 'moderate' },
  { term: 'giveaway', category: 'sketchy', severity: 'moderate' },
  { term: 'you have been gifted', category: 'sketchy', severity: 'high' },
  { term: 'receive', category: 'sketchy', severity: 'mild' },
  { term: 'increase your', category: 'sketchy', severity: 'mild' },
  { term: 'improve your chances', category: 'sketchy', severity: 'moderate' },
  { term: 'eliminate debt', category: 'sketchy', severity: 'high' },
  { term: 'erase debt', category: 'sketchy', severity: 'high' },
  { term: 'unsubscribe now', category: 'sketchy', severity: 'high' },
  { term: 'opt out', category: 'sketchy', severity: 'moderate' },
  { term: 'work from home', category: 'sketchy', severity: 'high' },
  { term: 'home based', category: 'sketchy', severity: 'moderate' },
  { term: 'be your own boss', category: 'sketchy', severity: 'high' },
  { term: 'full time income', category: 'sketchy', severity: 'high' },
  { term: 'part time income', category: 'sketchy', severity: 'high' },

  // Power Negative (mild)
  { term: 'amazing', category: 'power', severity: 'mild' },
  { term: 'incredible', category: 'power', severity: 'mild' },
  { term: 'unbelievable', category: 'power', severity: 'mild' },
  { term: 'once in a lifetime', category: 'power', severity: 'mild' },
  { term: 'best ever', category: 'power', severity: 'mild' },
  { term: 'never before', category: 'power', severity: 'mild' },
  { term: 'most powerful', category: 'power', severity: 'mild' },
  { term: '#1', category: 'power', severity: 'mild' },
  { term: 'number one', category: 'power', severity: 'mild' },
  { term: 'top rated', category: 'power', severity: 'mild' },
  { term: 'award winning', category: 'power', severity: 'mild' },
  { term: 'breakthrough', category: 'power', severity: 'mild' },
  { term: 'revolutionary', category: 'power', severity: 'mild' },
  { term: 'state of the art', category: 'power', severity: 'mild' },
  { term: 'cutting edge', category: 'power', severity: 'mild' },
  { term: 'unprecedented', category: 'power', severity: 'mild' },
  { term: 'extraordinary', category: 'power', severity: 'mild' },
  { term: 'phenomenal', category: 'power', severity: 'mild' }
];

const toneKeywords: Record<EmotionalTone, string[]> = {
  urgent: ['urgent', 'now', 'today', 'expires', 'deadline', 'last chance', 'hurry', 'immediately', 'limited', 'running out', 'ending soon', 'act fast', 'before it\'s too late'],
  curious: ['secret', 'discover', 'reveal', 'surprising', 'you won\'t believe', 'never knew', 'what happens', 'reason why', 'truth about', 'myth', 'actually'],
  professional: ['quarterly', 'annual', 'report', 'update', 'agenda', 'meeting', 'schedule', 'proposal', 'contract', 'invoice', 'review', 'feedback', 'project'],
  friendly: ['hey', 'hi', 'hello', 'quick note', 'just wanted', 'thought you', 'checking in', 'hope you', 'wanted to share', 'good news', 'great news'],
  fearful: ['warning', 'alert', 'danger', 'risk', 'threat', 'problem', 'issue', 'failure', 'mistake', 'error', 'breach', 'violation', 'penalty', 'lawsuit'],
  exciting: ['exciting', 'amazing', 'incredible', 'awesome', 'fantastic', 'huge', 'big news', 'launch', 'announcing', 'introducing', 'new', 'just launched'],
  neutral: [],
};

const ALLOWED_ALL_CAPS = [
  'FYI', 'RSVP', 'FAQ', 'CEO', 'CFO', 'CTO', 'USA', 'UK', 'Q1', 'Q2', 'Q3', 'Q4', 
  'AI', 'PR', 'HR', 'ROI', 'API', 'URL', 'PDF', 'CTA', 'KPI', 'SLA', 'B2B', 'B2C', 
  'SEO', 'PPC', 'CRM', 'ETA', 'EOD', 'OOO', 'TBD', 'TL;DR', 'PS', 'RE', 'FW'
];

export function scoreLengthResult(subject: string): LengthResult {
  const s = subject.trim();
  const wordCount = s.length === 0 ? 0 : s.split(/\s+/).filter(Boolean).length;
  const charCount = s.length;

  let score = 1;
  let feedback = '';

  if (charCount === 0) {
    score = 1;
    feedback = 'Enter a subject line to analyze';
  } else if (wordCount >= 1 && wordCount <= 2) {
    score = 3;
    feedback = 'Too short — subject is vague';
  } else if (wordCount >= 3 && wordCount <= 5) {
    score = 7;
    feedback = 'A bit short but workable';
  } else if (wordCount >= 6 && wordCount <= 10) {
    if (charCount >= 30 && charCount <= 60) {
      score = 10;
      feedback = 'Optimal length';
    } else {
      score = 7;
      feedback = 'Good word count but may be wordy';
    }
  } else if (wordCount >= 11 && wordCount <= 13) {
    score = 6;
    feedback = 'Slightly long — consider trimming';
  } else if (wordCount >= 14 && wordCount <= 16) {
    score = 4;
    feedback = 'Too long for most inboxes';
  } else if (wordCount >= 17) {
    score = 1;
    feedback = 'Far too long — will be heavily truncated';
  }

  if (charCount > 70 && score > 5) {
    score = 5;
    feedback += ' — Gets cut off on mobile';
  } else if (charCount > 70) {
    if (!feedback.includes('Gets cut off on mobile')) {
       feedback += ' — Gets cut off on mobile';
    }
  }

  if (charCount === 0) {
    feedback = 'Enter a subject line to analyze';
  }

  return {
    score: Math.max(1, score),
    wordCount,
    charCount,
    feedback,
    isTruncatedOnIphone: charCount > 41,
    isTruncatedOnGmail: charCount > 40,
    isTruncatedOnOutlook: charCount > 45,
  };
}

export function scoreSpamResult(subject: string): SpamResult {
  const matches: SpamTriggerMatch[] = [];
  let triggerCount = 0;
  let severityCount = { mild: 0, moderate: 0, high: 0 };
  
  if (!subject.trim()) {
    return {
      score: 1,
      matches: [],
      hasAllCaps: false,
      hasExcessivePunctuation: false,
      triggerCount: 0,
      overallSeverity: null,
      feedback: 'Enter a subject line to analyze'
    };
  }

  const lowerSubject = subject.toLowerCase();

  // Keyword matching
  for (const trigger of SPAM_TRIGGERS) {
    // Determine if it's a phrase (has space) or word
    const isPhrase = trigger.term.includes(' ');
    
    if (isPhrase) {
      let index = lowerSubject.indexOf(trigger.term);
      while (index !== -1) {
        matches.push({
          term: trigger.term,
          category: trigger.category,
          severity: trigger.severity,
          startIndex: index,
          endIndex: index + trigger.term.length
        });
        triggerCount++;
        severityCount[trigger.severity]++;
        index = lowerSubject.indexOf(trigger.term, index + 1);
      }
    } else {
      // Word match using regex for boundaries
      const regex = new RegExp(`\\b${trigger.term}\\b`, 'gi');
      let match;
      while ((match = regex.exec(subject)) !== null) {
        matches.push({
          term: trigger.term,
          category: trigger.category,
          severity: trigger.severity,
          startIndex: match.index,
          endIndex: match.index + trigger.term.length
        });
        triggerCount++;
        severityCount[trigger.severity]++;
      }
    }
  }

  // ALL CAPS detection
  const words = subject.split(/\s+/);
  let hasAllCaps = false;
  
  for (let i = 0; i < words.length; i++) {
    const word = words[i].replace(/[.,!?]/g, '');
    if (word.length >= 2 && word === word.toUpperCase() && !ALLOWED_ALL_CAPS.includes(word.toUpperCase())) {
      hasAllCaps = true;
      triggerCount++;
      severityCount.moderate++;
      
      const startIndex = subject.indexOf(words[i]);
      matches.push({
        term: words[i],
        category: 'caps',
        severity: 'moderate',
        startIndex: startIndex,
        endIndex: startIndex + words[i].length
      });
    }
  }

  // Excessive punctuation
  const exclamationCount = (subject.match(/!/g) || []).length;
  const questionCount = (subject.match(/\?/g) || []).length;
  const hasExcessivePunctuation = exclamationCount >= 2 || questionCount >= 2 || (exclamationCount + questionCount >= 3);
  
  if (hasExcessivePunctuation) {
    triggerCount++;
    severityCount.moderate++;
    // Add a phantom match just for stats, won't be highlighted easily without a specific index, or highlight the first one.
  }

  // Calculate score
  let score = 10;
  if (triggerCount === 0) {
    score = 10;
  } else if (severityCount.high >= 2 || severityCount.moderate >= 4) {
    score = 1;
  } else if (severityCount.high === 1 || severityCount.moderate === 3) {
    score = 3;
  } else if (severityCount.mild === 3 || severityCount.moderate === 2) {
    score = 5;
  } else if (severityCount.mild === 2 || severityCount.moderate === 1) {
    score = 7;
  } else if (severityCount.mild === 1) {
    score = 9;
  }
  
  // Extra penalties
  const extraTriggers = triggerCount > 2 ? triggerCount - 2 : 0;
  score = Math.max(1, score - (extraTriggers * 0.5));

  let overallSeverity: SpamSeverity | null = null;
  if (severityCount.high > 0) overallSeverity = 'high';
  else if (severityCount.moderate > 0) overallSeverity = 'moderate';
  else if (severityCount.mild > 0) overallSeverity = 'mild';

  let feedback = 'No spam triggers detected — excellent!';
  if (overallSeverity === 'high') {
    feedback = 'High-risk spam language — this will likely be filtered';
  } else if (triggerCount >= 3) {
    feedback = `${triggerCount} spam triggers detected — may land in spam folder`;
  } else if (triggerCount > 0) {
    feedback = `${triggerCount} ${overallSeverity} trigger(s) found: consider rephrasing`;
  }

  return {
    score: Math.round(score),
    matches: matches.sort((a, b) => a.startIndex - b.startIndex),
    hasAllCaps,
    hasExcessivePunctuation,
    triggerCount,
    overallSeverity,
    feedback
  };
}

export function scorePersonalizationResult(subject: string): PersonalizationResult {
  if (!subject.trim()) {
    return { score: 1, hasTemplateTag: false, hasYouYour: false, isSpecific: false, feedback: 'Enter a subject line to analyze' };
  }

  const hasTemplateTag = /\[[\w\s]+\]|\{[\w\s]+\}/i.test(subject);
  const hasYouYour = /\b(you|your|you're|you've|you'll)\b/i.test(subject);
  
  // Specific: contains number, year, month, $ or %
  const isSpecific = /\d/.test(subject) || 
    /\b(january|february|march|april|may|june|july|august|september|october|november|december)\b/i.test(subject) ||
    /[$%]/.test(subject);

  let score = 3;
  if (hasTemplateTag) score += 4;
  if (hasYouYour) score += 3;
  if (isSpecific) score += 2;
  
  score = Math.min(10, score);

  let feedback = 'No personalization — consider making it feel more personal';
  if (score >= 9) feedback = 'Strong personalization signals';
  else if (score >= 6) feedback = 'Some personalization — you/your language helps';
  else if (score >= 3) feedback = "Generic — adding [First Name] or 'you' boosts open rates";

  return {
    score,
    hasTemplateTag,
    hasYouYour,
    isSpecific,
    feedback
  };
}

export function scoreCuriosityResult(subject: string): CuriosityResult {
  if (!subject.trim()) {
    return { score: 1, isQuestion: false, hasNumber: false, numberValue: null, powerWords: [], emojiCount: 0, emojiBoost: false, emojiPenalty: false, feedback: 'Enter a subject line to analyze' };
  }

  const isQuestion = subject.trim().endsWith('?');
  const numberMatch = subject.match(/\d+/);
  const hasNumber = !!numberMatch;
  const numberValue = numberMatch ? numberMatch[0] : null;

  const powerWordList = [
    'secret', 'secrets', 'proven', 'mistake', 'mistakes', 'surprising', 'essential', 
    'ultimate', 'exclusive', 'insider', 'revealing', 'truth', 'myth', 'warning', 
    'critical', 'powerful', 'free', 'new', 'now', 'instantly', 'immediately', 
    'results', 'boost', 'grow', 'save', 'discover', 'unlock', 'master', 'fail', 
    'shocking', 'weird', 'crazy', 'simple', 'easy', 'quick', 'fast', 'exactly', 
    'finally', 'never', 'always', 'hack', 'hacks', 'tip', 'tips', 'trick', 'tricks',
    'strategy', 'strategies', 'guide', 'blueprint', 'formula', 'system', 'method'
  ];

  const powerWords: string[] = [];
  const lowerSubject = subject.toLowerCase();
  for (const pw of powerWordList) {
    if (new RegExp(`\\b${pw}\\b`, 'i').test(lowerSubject)) {
      powerWords.push(pw);
    }
  }

  const emojiMatches = subject.match(/[\u{1F300}-\u{1FAFF}]|[\u{2600}-\u{27BF}]/gu);
  const emojiCount = emojiMatches ? emojiMatches.length : 0;
  const emojiBoost = emojiCount === 1;
  const emojiPenalty = emojiCount >= 2;

  let score = 4;
  if (isQuestion) score += 2;
  if (hasNumber) score += 2;
  score += Math.min(3, powerWords.length);
  if (emojiBoost) score += 1;
  if (emojiPenalty) score -= 1;

  score = Math.max(1, Math.min(10, score));

  let feedback = 'Generic statement — try adding a number or question';
  if (isQuestion && hasNumber) feedback = 'Strong curiosity hook — question format and number detected';
  else if (powerWords.length > 0) feedback = 'Good engagement signals — power words present';
  else if (emojiPenalty) feedback = 'Multiple emojis may look spammy';
  else if (emojiBoost) feedback = 'Emoji looks natural — slight open rate boost expected';

  return {
    score,
    isQuestion,
    hasNumber,
    numberValue,
    powerWords,
    emojiCount,
    emojiBoost,
    emojiPenalty,
    feedback
  };
}

export function scoreToneResult(subject: string): ToneResult {
  if (!subject.trim()) {
    return { score: 1, primaryTone: 'neutral', detectedTones: [], feedback: 'Enter a subject line to analyze' };
  }

  const lowerSubject = subject.toLowerCase();
  const detectedTones: EmotionalTone[] = [];
  const toneCounts: Record<EmotionalTone, number> = {
    urgent: 0, curious: 0, professional: 0, friendly: 0, fearful: 0, exciting: 0, neutral: 0
  };

  for (const [tone, keywords] of Object.entries(toneKeywords)) {
    const t = tone as EmotionalTone;
    for (const kw of keywords) {
      if (lowerSubject.includes(kw)) {
        toneCounts[t]++;
      }
    }
    if (toneCounts[t] > 0) {
      detectedTones.push(t);
    }
  }

  let primaryTone: EmotionalTone = 'neutral';
  let maxCount = 0;
  
  const hierarchy: EmotionalTone[] = ['curious', 'professional', 'friendly', 'exciting', 'urgent', 'fearful', 'neutral'];
  
  for (const t of hierarchy) {
    if (toneCounts[t] > maxCount) {
      maxCount = toneCounts[t];
      primaryTone = t;
    } else if (toneCounts[t] === maxCount && maxCount > 0) {
      // Tie breaker based on hierarchy already handled by order of evaluation
      if (hierarchy.indexOf(t) < hierarchy.indexOf(primaryTone)) {
         primaryTone = t;
      }
    }
  }

  if (detectedTones.length === 0) {
    detectedTones.push('neutral');
  }

  let score = 5;
  let feedback = 'Neutral tone — functional but may lack engagement';

  if (detectedTones.length > 1) {
    score = 5;
    feedback = 'Mixed emotional signals detected — ensure clarity';
  } else {
    if (primaryTone === 'curious' || primaryTone === 'friendly' || primaryTone === 'professional') {
      score = 9;
      feedback = 'Strong, appropriate tone detected';
    } else if (primaryTone === 'exciting') {
      score = 8;
      feedback = 'Exciting tone — good for announcements';
    } else if (primaryTone === 'urgent') {
      score = 6;
      feedback = 'Urgent tone — use sparingly to avoid fatigue';
    } else if (primaryTone === 'fearful') {
      score = 4;
      feedback = 'Fear-based tone may trigger anxiety or spam filters';
    }
  }

  return {
    score,
    primaryTone,
    detectedTones,
    feedback
  };
}

export function scoreReadabilityResult(subject: string): ReadabilityResult {
  if (!subject.trim()) {
    return { score: 1, feedback: 'Enter a subject line to analyze' };
  }

  let score = 7;
  let feedback = 'Good readability';

  const hasAllCaps = subject.replace(/[^A-Za-z]/g, '').length > 0 && subject === subject.toUpperCase();
  if (hasAllCaps) {
    score -= 2;
    feedback = 'ALL CAPS reduces readability and looks like spam';
  }

  const firstLetter = subject.trim().charAt(0);
  if (firstLetter && firstLetter === firstLetter.toLowerCase() && firstLetter !== firstLetter.toUpperCase()) {
    score -= 1;
    feedback = 'Starts with lowercase — looks unprofessional';
  }

  const specialChars = (subject.match(/[&*#@%]/g) || []).length;
  if (specialChars > 1) {
    score -= (specialChars - 1);
    feedback = 'Excessive special characters affect readability';
  }

  const commas = (subject.match(/,/g) || []).length;
  if (commas > 2) {
    score -= 1;
    feedback = 'Too many commas — consider splitting or simplifying';
  }

  if (score === 7) {
    const isTitleCase = subject.split(' ').every(w => w.length === 0 || w[0] === w[0].toUpperCase());
    if (isTitleCase) {
      score = 7;
      feedback = 'Title Case used — acceptable but slightly formal';
    } else {
      score = 9;
      feedback = 'Sentence case used — highly readable and natural';
    }
  }

  return {
    score: Math.max(1, Math.min(10, score)),
    feedback
  };
}

export function calculateOverallScore(categories: CategoryScores): OverallScore {
  const value = Math.round(
    (categories.length.score / 10) * 20 +
    (categories.spam.score / 10) * 25 +
    (categories.personalization.score / 10) * 10 +
    (categories.curiosity.score / 10) * 25 +
    (categories.tone.score / 10) * 10 +
    (categories.readability.score / 10) * 10
  );

  let grade: 'poor' | 'fair' | 'good' | 'excellent';
  let label: string;
  let color: string;

  if (value < 40) {
    grade = 'poor';
    label = 'Poor';
    color = '#EF4444';
  } else if (value < 60) {
    grade = 'fair';
    label = 'Fair';
    color = '#F59E0B';
  } else if (value < 80) {
    grade = 'good';
    label = 'Good';
    color = '#3B82F6';
  } else {
    grade = 'excellent';
    label = 'Excellent';
    color = '#10B981';
  }

  return { value, grade, label, color };
}

export function analyzeSubjectLine(input: string): SubjectLineAnalysis {
  const length = scoreLengthResult(input);
  const spam = scoreSpamResult(input);
  const personalization = scorePersonalizationResult(input);
  const curiosity = scoreCuriosityResult(input);
  const tone = scoreToneResult(input);
  const readability = scoreReadabilityResult(input);

  const categories = { length, spam, personalization, curiosity, tone, readability };
  const overall = calculateOverallScore(categories);

  return {
    input,
    overall,
    categories,
  };
}
