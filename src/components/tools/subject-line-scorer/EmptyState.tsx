interface EmptyStateProps {
  onSelect: (subject: string) => void;
}

export const EmptyState = ({ onSelect }: EmptyStateProps) => {
  const examples = [
    { text: "[First Name], here's the 1 mistake killing your open rates", score: 85, label: 'Excellent', color: 'bg-emerald-100 text-emerald-800' },
    { text: "Quick question about your email strategy", score: 72, label: 'Good', color: 'bg-blue-100 text-blue-800' },
    { text: "Newsletter — March Edition", score: 45, label: 'Average', color: 'bg-amber-100 text-amber-800' },
    { text: "This email", score: 20, label: 'Poor', color: 'bg-orange-100 text-orange-800' },
    { text: "FREE OFFER EXPIRES TODAY ACT NOW!!!", score: 12, label: 'Very Poor', color: 'bg-red-100 text-red-800' },
  ];

  return (
    <div className="mt-12 text-center max-w-2xl mx-auto">
      <h3 className="text-lg font-bold text-slate-700 mb-6">Or try an example subject line:</h3>
      <div className="flex flex-col gap-3">
        {examples.map((ex, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(ex.text)}
            className="w-full bg-white border border-slate-200 hover:border-brand-400 hover:shadow-md transition-all rounded-xl p-4 flex items-center justify-between group text-left"
          >
            <span className="text-slate-700 font-medium group-hover:text-brand-700 transition-colors line-clamp-1 pr-4">
              "{ex.text}"
            </span>
            <div className="flex items-center gap-3 shrink-0">
              <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded ${ex.color} hidden sm:block`}>
                {ex.label}
              </span>
              <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center">
                <span className="font-bold text-slate-700 text-sm">{ex.score}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
