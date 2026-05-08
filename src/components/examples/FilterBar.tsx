import { memo, useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface FilterBarProps {
    q: string;
    contexts: string[];
    tones: string[];
    problems: string[];
    sort: string;
    setSearch: (q: string) => void;
    setFilter: (group: 'context' | 'tone' | 'problem', value: string) => void;
    setSort: (s: string) => void;
    clearFilters: () => void;
}

const CONTEXT_OPTIONS = ['Gmail', 'Slack', 'LinkedIn', 'Cover Letter', 'Customer Support', 'Management', 'Sales', 'Academic', 'Dating App', 'Personal'];
const TONE_OPTIONS = ['Professional', 'Friendly', 'Confident', 'Concise', 'Empathetic', 'Persuasive', 'Formal', 'Casual', 'Direct', 'Enthusiastic'];
const PROBLEM_OPTIONS = ['Too Formal', 'Too Casual', 'Passive-Aggressive', 'Too Long', 'Unclear', 'Grammar Issues', 'Weak Opening', 'Missing CTA', 'Defensive Tone', 'Overly Apologetic'];

export const FilterBar = memo(({ q, contexts, tones, problems, sort, setSearch, setFilter, setSort, clearFilters }: FilterBarProps) => {
    const [inputValue, setInputValue] = useState(q);

    // Debounce search input
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (q !== inputValue) setSearch(inputValue);
        }, 200);
        return () => clearTimeout(timeoutId);
    }, [inputValue, q, setSearch]);

    // Keep input in sync with URL changes
    useEffect(() => {
        setInputValue(q);
    }, [q]);

    const hasFilters = q || contexts.length > 0 || tones.length > 0 || problems.length > 0;

    return (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 mb-8">
            {/* Top row: Search and Sort */}
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
                <div className="relative w-full md:w-1/2 mx-auto md:mx-0">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search examples (e.g. passive aggressive slack)..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-xl leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 sm:text-sm transition-shadow"
                    />
                </div>
                <div className="flex items-center justify-end w-full md:w-auto">
                    <span className="text-sm text-slate-500 mr-3 font-medium">Sort by:</span>
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="block pl-3 pr-10 py-2.5 text-sm border-slate-300 focus:outline-none focus:ring-brand-500 focus:border-brand-500 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors border cursor-pointer font-medium text-slate-700"
                    >
                        <option value="newest">Newest</option>
                        <option value="popular">Most Popular</option>
                        <option value="category">Category</option>
                    </select>
                </div>
            </div>

            {/* Filter Groups */}
            <div className="space-y-6">
                <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Context</h3>
                    <div className="flex flex-wrap gap-2">
                        {CONTEXT_OPTIONS.map(opt => (
                            <button
                                key={opt}
                                onClick={() => setFilter('context', opt)}
                                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors border ${contexts.includes(opt) ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'}`}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Tone</h3>
                    <div className="flex flex-wrap gap-2">
                        {TONE_OPTIONS.map(opt => (
                            <button
                                key={opt}
                                onClick={() => setFilter('tone', opt)}
                                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors border ${tones.includes(opt) ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'}`}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Problem to fix</h3>
                    <div className="flex flex-wrap gap-2">
                        {PROBLEM_OPTIONS.map(opt => (
                            <button
                                key={opt}
                                onClick={() => setFilter('problem', opt)}
                                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors border ${problems.includes(opt) ? 'bg-red-500 text-white border-red-500' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'}`}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Active Filters Strip */}
            {hasFilters && (
                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
                    <span className="text-sm text-slate-500 font-medium mr-2">Active filters:</span>
                    
                    {q && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-800">
                            Search: "{q}"
                            <button onClick={() => setSearch('')} className="ml-1.5 text-slate-400 hover:text-slate-600 focus:outline-none">
                                <X className="h-3.5 w-3.5" />
                            </button>
                        </span>
                    )}

                    {contexts.map(c => (
                        <span key={`c-${c}`} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-900 text-white">
                            {c}
                            <button onClick={() => setFilter('context', c)} className="ml-1.5 text-slate-300 hover:text-white focus:outline-none">
                                <X className="h-3.5 w-3.5" />
                            </button>
                        </span>
                    ))}

                    {tones.map(t => (
                        <span key={`t-${t}`} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-100 text-brand-800">
                            {t}
                            <button onClick={() => setFilter('tone', t)} className="ml-1.5 text-brand-500 hover:text-brand-900 focus:outline-none">
                                <X className="h-3.5 w-3.5" />
                            </button>
                        </span>
                    ))}

                    {problems.map(p => (
                        <span key={`p-${p}`} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                            {p}
                            <button onClick={() => setFilter('problem', p)} className="ml-1.5 text-red-500 hover:text-red-900 focus:outline-none">
                                <X className="h-3.5 w-3.5" />
                            </button>
                        </span>
                    ))}

                    <button 
                        onClick={clearFilters}
                        className="ml-2 text-sm text-brand-600 hover:text-brand-700 font-medium hover:underline"
                    >
                        Clear all
                    </button>
                </div>
            )}
        </div>
    );
});

FilterBar.displayName = 'FilterBar';
