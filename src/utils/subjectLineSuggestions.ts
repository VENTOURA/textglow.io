import type { SubjectLineAnalysis } from './subjectLineScorer';

export function generateSuggestions(subject: string, analysis: SubjectLineAnalysis): string[] {
  if (!subject.trim()) return [];

  const suggestions: string[] = [];
  const weaknesses = [];

  if (analysis.categories.length.charCount > 60 || analysis.categories.length.wordCount > 10) {
    weaknesses.push('length');
  }
  if (analysis.categories.curiosity.score < 6) {
    weaknesses.push('curiosity');
  }
  if (analysis.categories.spam.triggerCount > 0) {
    weaknesses.push('spam');
  }
  if (analysis.categories.personalization.score < 5) {
    weaknesses.push('personalization');
  }
  if (analysis.categories.tone.primaryTone === 'neutral' || analysis.overall.value < 60) {
    weaknesses.push('tone');
  }

  // Generate fixes
  let currentSubject = subject;

  for (const w of weaknesses) {
    if (suggestions.length >= 3) break;

    if (w === 'length') {
      let trimmed = currentSubject;
      const fillerWords = ["that", "which", "really", "very", "just", "actually", "basically", "honestly", "essentially", "in order to", "the fact that", "at this point in time", "due to the fact"];
      for (const fw of fillerWords) {
        trimmed = trimmed.replace(new RegExp(`\\b${fw}\\b`, 'gi'), '').replace(/\s{2,}/g, ' ');
      }
      
      let words = trimmed.trim().split(/\s+/);
      if (words.length > 8) {
        trimmed = words.slice(0, 8).join(' ');
        // If it ends with preposition, add ...
        if (/\b(to|of|in|for|on|with|at|by|from)\b$/i.test(trimmed)) {
          trimmed += '...';
        }
      }

      if (trimmed !== currentSubject && trimmed.length > 0) {
        suggestions.push(`Shorter version: ${trimmed}`);
      }
    }

    if (w === 'curiosity' && suggestions.length < 3) {
      if (!analysis.categories.curiosity.isQuestion) {
        suggestions.push(`More engaging: Are you ${currentSubject.replace(/^[A-Z]/, c => c.toLowerCase())}?`);
      } else if (!analysis.categories.curiosity.hasNumber) {
        suggestions.push(`More engaging: 3 reasons why ${currentSubject.replace(/^[A-Z]/, c => c.toLowerCase())}`);
      }
    }

    if (w === 'spam' && suggestions.length < 3) {
      let fixed = currentSubject;
      const replacements: Record<string, string> = {
        'free': 'complimentary',
        'guaranteed': 'backed by research',
        'act now': "here's what to do",
        'limited time': 'before the week ends',
        'click here': '',
        "you've been selected": "we'd love to invite you"
      };

      for (const match of analysis.categories.spam.matches) {
        const replacement = replacements[match.term.toLowerCase()] ?? '';
        fixed = fixed.substring(0, match.startIndex) + replacement + fixed.substring(match.endIndex);
      }
      
      fixed = fixed.replace(/\s{2,}/g, ' ').trim();
      if (fixed !== currentSubject && fixed.length > 0) {
        suggestions.push(`Spam-free version: ${fixed}`);
      }
    }

    if (w === 'personalization' && suggestions.length < 3) {
      if (!subject.toLowerCase().includes('[first name]')) {
         suggestions.push(`Personalized: [First Name], ${currentSubject.replace(/^[A-Z]/, c => c.toLowerCase())}`);
      }
    }

    if (w === 'tone' && suggestions.length < 3) {
      suggestions.push(`Stronger tone: ${currentSubject} — quick update`);
    }
  }

  // Fallback variants if we don't have 3 suggestions yet
  if (suggestions.length < 3) {
    if (!suggestions.some(s => s.includes('Question format:'))) {
        suggestions.push(`Question format: Have you seen this: ${currentSubject}?`);
    }
    if (suggestions.length < 3 && !suggestions.some(s => s.includes('Direct version:'))) {
        suggestions.push(`Direct version: Update regarding ${currentSubject.split(' ').slice(0, 4).join(' ')}`);
    }
    if (suggestions.length < 3) {
        suggestions.push(`Action-oriented: Quick action needed: ${currentSubject}`);
    }
  }

  // Clean suggestions, remove duplicates (by actual suggestion text)
  const unique = new Set<string>();
  const finalSuggestions: string[] = [];
  
  for (const s of suggestions.slice(0, 3)) {
     const text = s.split(': ')[1] || s;
     const clean = text.trim().substring(0, 70); // cap at 70 chars
     const label = s.split(': ')[0];
     
     if (!unique.has(clean.toLowerCase())) {
        unique.add(clean.toLowerCase());
        finalSuggestions.push(`${label}: ${clean}`);
     }
  }

  return finalSuggestions;
}
