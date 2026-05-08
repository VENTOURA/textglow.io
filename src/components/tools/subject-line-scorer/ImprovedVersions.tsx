import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface ImprovedVersionsProps {
  suggestions: string[];
}

export const ImprovedVersions = ({ suggestions }: ImprovedVersionsProps) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  if (!suggestions || suggestions.length === 0) return null;

  return (
    <div className="space-y-4">
      {suggestions.map((suggestion, idx) => {
        const parts = suggestion.split(': ');
        const label = parts.length > 1 ? parts[0] : `Option ${idx + 1}`;
        const text = parts.length > 1 ? parts.slice(1).join(': ') : suggestion;

        return (
          <div key={idx} className="bg-white rounded-2xl border border-brand-200 p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-sm hover:border-brand-400 hover:shadow-md transition-all">
            <div className="flex-1">
              <span className="inline-block px-2.5 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-full uppercase tracking-wider mb-2">
                {label}
              </span>
              <p className="text-lg font-medium text-slate-900">{text}</p>
            </div>
            <button
              onClick={() => handleCopy(text, idx)}
              className={`shrink-0 flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-medium transition-colors ${
                copiedIndex === idx 
                  ? 'bg-emerald-500 text-white' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {copiedIndex === idx ? (
                <><Check className="w-4 h-4" /> Copied!</>
              ) : (
                <><Copy className="w-4 h-4" /> Copy</>
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
};
