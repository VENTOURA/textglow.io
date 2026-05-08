import { memo } from 'react';
import { Link } from 'react-router-dom';
import type { BeforeAfterExample, DifficultyBadge } from '../../data/beforeAfterExamples';

const getBadgeColor = (difficulty: DifficultyBadge) => {
    switch (difficulty) {
        case 'Quick Fix': return 'bg-blue-100 text-blue-800';
        case 'Major Rewrite': return 'bg-orange-100 text-orange-800';
        case 'Tone Shift': return 'bg-purple-100 text-purple-800';
    }
};

export const ExampleCard = memo(({ example }: { example: BeforeAfterExample }) => {
    return (
        <Link 
            to={`/tools/examples/${example.slug}`}
            className="block group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:border-brand-300 flex flex-col h-full"
        >
            <div className="p-5 flex-grow flex flex-col">
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getBadgeColor(example.difficulty)}`}>
                        {example.difficulty}
                    </span>
                    <div className="flex gap-2 flex-wrap justify-end">
                        <span className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded-md">{example.context}</span>
                        <span className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded-md">{example.tone}</span>
                    </div>
                </div>

                {/* Before text */}
                <div className="mb-3">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Before</div>
                    <div className="bg-[#FFF5F5] border-l-4 border-[#E57373] p-3 rounded-r-lg text-sm text-slate-700 h-[72px] overflow-hidden relative leading-relaxed">
                        {example.before.length > 95 ? example.before.substring(0, 95) + '...' : example.before}
                        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#FFF5F5] to-transparent"></div>
                    </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center -my-2 relative z-10">
                    <div className="bg-white rounded-full p-1 border border-slate-200 text-slate-400">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 5v14M19 12l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                {/* After text */}
                <div className="mt-3">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">After</div>
                    <div className="bg-[#F0FFF4] border-l-4 border-[#4CAF50] p-3 rounded-r-lg text-sm text-slate-700 h-[72px] overflow-hidden relative leading-relaxed">
                        {example.after.length > 95 ? example.after.substring(0, 95) + '...' : example.after}
                        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#F0FFF4] to-transparent"></div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="px-5 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors text-sm pr-4 line-clamp-1 flex-grow">{example.title}</h3>
                <span className="text-brand-600 text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">View →</span>
            </div>
        </Link>
    );
});

ExampleCard.displayName = 'ExampleCard';
