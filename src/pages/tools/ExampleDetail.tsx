import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Chrome, ChevronRight } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { examples, TONE_DESCRIPTIONS } from '../../data/beforeAfterExamples';
import { DiffViewer } from '../../components/examples/DiffViewer';
import { ExampleCard } from '../../components/examples/ExampleCard';

const CHROME_URL = "https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf";

export const ExampleDetail = () => {
    const { slug } = useParams<{ slug: string }>();

    const example = useMemo(() => {
        return examples.find(ex => ex.slug === slug);
    }, [slug]);

    const relatedExamples = useMemo(() => {
        if (!example) return [];
        return example.relatedSlugs
            .map(s => examples.find(ex => ex.slug === s))
            .filter((ex): ex is typeof examples[0] => ex !== undefined)
            .slice(0, 3); // Max 3 related
    }, [example]);

    if (!example) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-slate-900 mb-4">Example Not Found</h1>
                    <p className="text-slate-600 mb-8">We couldn't find the writing example you're looking for.</p>
                    <Link to="/tools/examples/">
                        <Button variant="primary">Browse All Examples</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const badgeColor = example.difficulty === 'Quick Fix' ? 'bg-blue-100 text-blue-800' : 
                       example.difficulty === 'Major Rewrite' ? 'bg-orange-100 text-orange-800' : 
                       'bg-purple-100 text-purple-800';

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <Helmet>
                <title>{example.seoTitle}</title>
                <meta name="description" content={example.seoDescription} />
                <link rel="canonical" href={`https://textglow.io/tools/examples/${example.slug}/`} />
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "HowTo",
                            "name": "${example.seoTitle}",
                            "description": "${example.seoDescription}",
                            "step": [
                                {
                                    "@type": "HowToStep",
                                    "name": "Original writing",
                                    "text": ${JSON.stringify(example.before)}
                                },
                                {
                                    "@type": "HowToStep",
                                    "name": "Rewritten with ${example.tone} tone",
                                    "text": ${JSON.stringify(example.after)}
                                }
                            ]
                        }
                    `}
                </script>
            </Helmet>

            <div className="container mx-auto px-4 max-w-5xl pt-8">
                {/* Breadcrumb */}
                <nav className="flex items-center text-sm text-slate-500 mb-10 font-medium">
                    <Link to="/tools/" className="hover:text-brand-600 transition-colors">Tools</Link>
                    <ChevronRight className="w-4 h-4 mx-2 text-slate-400" />
                    <Link to="/tools/examples/" className="hover:text-brand-600 transition-colors">Writing Examples</Link>
                    <ChevronRight className="w-4 h-4 mx-2 text-slate-400" />
                    <span className="text-slate-900 truncate">{example.title}</span>
                </nav>

                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">{example.title}</h1>
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-lg text-sm font-bold shadow-sm">{example.context}</span>
                        <span className="px-3 py-1 bg-brand-100 text-brand-800 rounded-lg text-sm font-bold shadow-sm">{example.tone} Tone</span>
                        <span className={`px-3 py-1 rounded-lg text-sm font-bold shadow-sm ${badgeColor}`}>{example.difficulty}</span>
                    </div>
                </div>

                {/* Before / After Panels */}
                <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 mb-16 items-stretch">
                    {/* Before */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
                        <div className="bg-slate-50 border-b border-slate-200 p-4 font-bold text-slate-500 uppercase tracking-wider text-xs">
                            Before (Original)
                        </div>
                        <div className="p-6 md:p-8 bg-[#FFF5F5] border-l-4 border-[#E57373] flex-grow text-lg">
                            <DiffViewer beforeText={example.before} afterText={example.after} mode="before" />
                        </div>
                    </div>

                    {/* Arrow (Desktop) */}
                    <div className="hidden md:flex flex-col justify-center items-center">
                        <div className="bg-white rounded-full p-3 shadow-md border border-slate-100 text-brand-500">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                    {/* Arrow (Mobile) */}
                    <div className="md:hidden flex justify-center -my-4 relative z-10">
                        <div className="bg-white rounded-full p-2 shadow-sm border border-slate-200 text-brand-500">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 5v14M19 12l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    {/* After */}
                    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden flex flex-col relative transform md:scale-105 z-10 transition-transform">
                        <div className="bg-slate-900 border-b border-slate-800 p-4 font-bold text-brand-400 uppercase tracking-wider text-xs flex justify-between items-center">
                            <span>After (TextGlow Rewrite)</span>
                            <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white/70">{example.tone}</span>
                        </div>
                        <div className="p-6 md:p-8 bg-[#F0FFF4] border-l-4 border-[#4CAF50] flex-grow text-lg shadow-inner">
                            <DiffViewer beforeText={example.before} afterText={example.after} mode="after" />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-12 mb-20">
                    {/* Breakdown */}
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">What Changed</h2>
                        <ul className="space-y-4">
                            {example.whatChanged.map((change, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-sm mr-4 mt-0.5">
                                        {i + 1}
                                    </span>
                                    <span className="text-lg text-slate-700 leading-relaxed">{change}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tone Box */}
                    <div className="md:col-span-1">
                        <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 md:p-8 h-full">
                            <h2 className="text-xl font-bold text-brand-900 mb-4">Why {example.tone} tone works here</h2>
                            <p className="text-brand-800 leading-relaxed mb-6 font-medium">
                                {example.toneExplanation}
                            </p>
                            
                            <div className="pt-6 border-t border-brand-200/50">
                                <h3 className="text-xs font-bold text-brand-700 uppercase tracking-wider mb-2">About {example.tone} Tone</h3>
                                <p className="text-sm text-brand-700/80 leading-relaxed">
                                    {TONE_DESCRIPTIONS[example.tone]}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Examples */}
                {relatedExamples.length > 0 && (
                    <div className="mb-20">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Examples</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedExamples.map(rel => (
                                <ExampleCard key={rel.slug} example={rel} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Bottom CTA */}
                <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-400 via-slate-900 to-slate-900"></div>
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-6">Want to rewrite like this in 2 clicks?</h2>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            Install TextGlow — free. Works inside Gmail, Slack, LinkedIn, and everywhere else you write.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                            <Button href={CHROME_URL} variant="pro" size="lg" className="px-8 py-4 text-lg shadow-xl shadow-brand-500/20 w-full sm:w-auto">
                                <Chrome className="w-6 h-6 mr-3" /> Add to Chrome — Free
                            </Button>
                            <Link to="/tools/examples/" className="w-full sm:w-auto">
                                <Button variant="secondary" size="lg" className="px-8 py-4 text-lg w-full bg-white/10 text-white border-white/20 hover:bg-white/20">
                                    See all examples →
                                </Button>
                            </Link>
                        </div>
                        <p className="text-sm font-medium text-brand-300">Free: 10 rewrites/day &nbsp;·&nbsp; Pro: 150/day for $39/year</p>
                    </div>
                </div>

            </div>
        </div>
    );
};
