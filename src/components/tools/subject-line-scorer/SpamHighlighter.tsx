import type { SpamTriggerMatch } from '../../../utils/subjectLineScorer';

interface SpamHighlighterProps {
  text: string;
  matches: SpamTriggerMatch[];
}

export const SpamHighlighter = ({ text, matches }: SpamHighlighterProps) => {
  if (!text) return null;
  if (!matches || matches.length === 0) {
    return <span className="text-slate-900">{text}</span>;
  }

  // Merge overlapping or adjacent matches
  const merged: { start: number; end: number }[] = [];
  
  // They are already sorted by start index
  for (const match of matches) {
    if (merged.length === 0) {
      merged.push({ start: match.startIndex, end: match.endIndex });
    } else {
      const last = merged[merged.length - 1];
      if (match.startIndex <= last.end) {
        last.end = Math.max(last.end, match.endIndex);
      } else {
        merged.push({ start: match.startIndex, end: match.endIndex });
      }
    }
  }

  const segments = [];
  let currentIndex = 0;

  merged.forEach((m, i) => {
    // Add text before match
    if (m.start > currentIndex) {
      segments.push(
        <span key={`text-${i}`} className="text-slate-900">
          {text.substring(currentIndex, m.start)}
        </span>
      );
    }
    // Add match
    segments.push(
      <mark key={`mark-${i}`} className="bg-red-100 text-red-900 rounded px-0.5 mx-px relative group cursor-help">
        {text.substring(m.start, m.end)}
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-slate-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
          Spam trigger
        </span>
      </mark>
    );
    currentIndex = m.end;
  });

  // Add remaining text
  if (currentIndex < text.length) {
    segments.push(
      <span key="text-end" className="text-slate-900">
        {text.substring(currentIndex)}
      </span>
    );
  }

  return <>{segments}</>;
};
