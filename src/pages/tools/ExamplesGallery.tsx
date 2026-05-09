import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Chrome } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useExampleFilters } from '../../hooks/useExampleFilters';
import { FilterBar } from '../../components/examples/FilterBar';
import { ExampleCard } from '../../components/examples/ExampleCard';

const CHROME_URL = "https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf";
const PAGE_SIZE = 20;

export const ExamplesGallery = () => {
    const { 
        q, contexts, tones, problems, sort, 
        setSearch, setFilter, setSort, clearFilters, 
        results 
    } = useExampleFilters();

    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

    // Reset pagination when filters change
    useEffect(() => {
        setVisibleCount(PAGE_SIZE);
    }, [q, contexts.join(','), tones.join(','), problems.join(','), sort]);

    const handleLoadMore = () => {
        setVisibleCount(prev => Math.min(prev + PAGE_SIZE, results.length));
    };

    const visibleResults = results.slice(0, visibleCount);

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <Helmet>
                <title>Before & After Writing Examples — Email, Slack & LinkedIn Rewrites | TextGlow</title>
                <meta name="description" content="Browse 100+ real before/after writing examples. See how TextGlow transforms emails, Slack messages, LinkedIn posts, cover letters, and more with AI-powered tone selection." />
                <link rel="canonical" href="https://textglow.io/tools/examples/" />
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "CollectionPage",
                            "name": "Before & After Writing Examples",
                            "description": "100+ real before/after writing examples showing email, Slack, LinkedIn, and professional writing transformed by tone.",
                            "url": "https://textglow.io/tools/examples/"
                        }
                    `}
                </script>
            </Helmet>

            {/* Hero */}
            <section className="pt-20 pb-12 bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Before & After: See How Better Writing Changes Everything</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        100+ real examples of writing transformed. Browse by context, tone, or problem.
                    </p>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto px-4 max-w-6xl">
                    
                    <FilterBar 
                        q={q} 
                        contexts={contexts} 
                        tones={tones} 
                        problems={problems} 
                        sort={sort}
                        setSearch={setSearch} 
                        setFilter={setFilter} 
                        setSort={setSort} 
                        clearFilters={clearFilters} 
                    />

                    {/* Results count */}
                    <div className="mb-6 flex justify-between items-end">
                        <h2 className="text-xl font-bold text-slate-900">
                            {results.length} {results.length === 1 ? 'Example' : 'Examples'} Found
                        </h2>
                    </div>

                    {/* Gallery Grid */}
                    {results.length === 0 ? (
                        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
                            <div className="text-4xl mb-4">🔍</div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">No examples match your filters</h3>
                            <p className="text-slate-600 mb-6">Try removing some filters or adjusting your search term.</p>
                            <Button onClick={clearFilters} variant="primary">Clear All Filters</Button>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                {visibleResults.map(example => (
                                    <ExampleCard key={example.slug} example={example} />
                                ))}
                            </div>

                            {/* Load More */}
                            {visibleCount < results.length && (
                                <div className="text-center">
                                    <Button onClick={handleLoadMore} variant="secondary" size="lg" className="px-10 bg-white">
                                        Load More Examples ({results.length - visibleCount} remaining)
                                    </Button>
                                </div>
                            )}
                        </>
                    )}

                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 mt-8">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <div className="bg-slate-900 rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-400 via-slate-900 to-slate-900"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-6">Every example above was a 2-click rewrite.</h2>
                            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                                TextGlow works inside Gmail, Slack, LinkedIn, and anywhere you write. Stop struggling with tone and start writing with confidence.
                            </p>
                            <Button href={CHROME_URL} variant="pro" size="lg" className="px-8 py-4 text-lg mb-6 shadow-xl shadow-brand-500/20">
                                <Chrome className="w-6 h-6 mr-3" /> Add to Chrome — Free
                            </Button>
                            <p className="text-sm font-medium text-brand-300">Free: 10 rewrites/day &nbsp;·&nbsp; Pro: 150/day for $39/year</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};
