import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Chrome, ChevronDown, ChevronUp, AlertTriangle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { analyzeJargon } from '../utils/jargonDictionary';
import type { JargonMatch, JargonResult } from '../utils/jargonDictionary';

const CHROME_URL = "https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf";

const FAQItem = ({ q, a }: { q: string; a: string }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white mb-3">
            <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors">
                <span className="font-semibold text-slate-900 pr-4">{q}</span>
                {open ? <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />}
            </button>
            {open && <div className="px-5 pb-5"><p className="text-slate-600 leading-relaxed">{a}</p></div>}
        </div>
    );
};

export const JargonTranslator = () => {
    const [text, setText] = useState('');
    const [result, setResult] = useState<JargonResult | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (text.trim()) {
                setResult(analyzeJargon(text));
            } else {
                setResult(null);
            }
        }, 300);
        return () => clearTimeout(timer);
    }, [text]);

    const renderOriginal = (t: string, matches: JargonMatch[]) => {
        let lastIndex = 0;
        const elements = [];
        matches.forEach(m => {
            if (m.startIndex > lastIndex) {
                elements.push(<span key={`text-${lastIndex}`}>{t.slice(lastIndex, m.startIndex)}</span>);
            }
            elements.push(<span key={`match-${m.id}`} className="bg-red-100/80 text-red-800 font-medium rounded px-1 underline decoration-red-300 decoration-wavy underline-offset-2">{m.original}</span>);
            lastIndex = m.endIndex;
        });
        if (lastIndex < t.length) {
            elements.push(<span key={`text-${lastIndex}`}>{t.slice(lastIndex)}</span>);
        }
        return elements;
    };

    const renderTranslated = (t: string, matches: JargonMatch[]) => {
        let lastIndex = 0;
        const elements = [];
        matches.forEach(m => {
            if (m.startIndex > lastIndex) {
                elements.push(<span key={`text-${lastIndex}`}>{t.slice(lastIndex, m.startIndex)}</span>);
            }
            let replacement = m.entry.replacement;
            if (m.original[0] === m.original[0].toUpperCase()) {
                replacement = replacement.charAt(0).toUpperCase() + replacement.slice(1);
            }
            elements.push(<span key={`match-${m.id}`} className="bg-green-100 text-green-800 font-bold rounded px-1 shadow-sm">{replacement}</span>);
            lastIndex = m.endIndex;
        });
        if (lastIndex < t.length) {
            elements.push(<span key={`text-${lastIndex}`}>{t.slice(lastIndex)}</span>);
        }
        return elements;
    };

    const getScoreColor = (density: number) => {
        if (density <= 10) return 'text-green-600';
        if (density <= 25) return 'text-blue-600';
        if (density <= 50) return 'text-amber-500';
        if (density <= 75) return 'text-orange-500';
        return 'text-red-600';
    };

    const getScoreBg = (density: number) => {
        if (density <= 10) return 'bg-green-600';
        if (density <= 25) return 'bg-blue-600';
        if (density <= 50) return 'bg-amber-500';
        if (density <= 75) return 'bg-orange-500';
        return 'bg-red-600';
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <Helmet>
                <title>Corporate Jargon Translator — Convert Buzzwords to Plain English | TextGlow</title>
                <meta name="description" content="Paste corporate-speak and get plain English. See every buzzword replaced, get a jargon score, and laugh at what your emails really mean. Free, instant, private." />
                <link rel="canonical" href="https://textglow.io/tools/jargon-translator/" />
            </Helmet>

            <section className="pt-20 pb-12 bg-white border-b border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-medium mb-6">
                            <span>Jargon Translator</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Corporate Jargon Translator</h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Paste corporate-speak. Get plain English. See your jargon score and uncover what those emails <em>really</em> mean.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        
                        {/* Editor Section */}
                        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden mb-8">
                            <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Paste your corporate text here</span>
                                {result && result.matches.length > 0 && (
                                    <span className="text-xs font-bold px-2 py-1 bg-red-100 text-red-700 rounded-md">
                                        {result.matches.length} buzzwords found
                                    </span>
                                )}
                            </div>
                            <textarea
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder="e.g., We need to circle back and touch base to ensure we're aligned on shifting our paradigm to leverage these synergies."
                                className="w-full p-6 text-lg text-slate-700 focus:outline-none resize-none h-40 border-none"
                            />
                        </div>

                        {result ? (
                            <>
                                {/* Score Banner */}
                                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-8 mb-8 flex flex-col md:flex-row items-center justify-between">
                                    <div className="text-center md:text-left mb-6 md:mb-0">
                                        <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Jargon Density</div>
                                        <div className="flex items-baseline justify-center md:justify-start">
                                            <span className={`text-5xl font-black ${getScoreColor(result.jargonDensity)}`}>
                                                {Math.round(result.jargonDensity)}%
                                            </span>
                                            <span className="text-lg text-slate-400 font-medium ml-2">BS</span>
                                        </div>
                                    </div>
                                    <div className="flex-grow max-w-lg mx-6 w-full mb-6 md:mb-0">
                                        <div className="h-4 bg-slate-100 rounded-full overflow-hidden w-full relative">
                                            <div 
                                                className={`absolute top-0 left-0 h-full ${getScoreBg(result.jargonDensity)} transition-all duration-700 ease-out`}
                                                style={{ width: `${result.jargonDensity}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="text-center md:text-right max-w-xs">
                                        <div className={`text-lg font-bold ${getScoreColor(result.jargonDensity)} leading-tight`}>{result.scoreLabel}</div>
                                    </div>
                                </div>

                                {/* Side-by-Side View */}
                                <div className="grid lg:grid-cols-2 gap-6 mb-8">
                                    {/* Original Card */}
                                    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
                                        <div className="p-4 border-b border-slate-100 bg-red-50/30 flex items-center">
                                            <div className="w-3 h-3 rounded-full bg-red-400 mr-3"></div>
                                            <span className="text-sm font-bold text-slate-700">Corporate Speak</span>
                                        </div>
                                        <div className="p-6 text-slate-700 whitespace-pre-wrap leading-relaxed text-lg flex-grow font-serif">
                                            {renderOriginal(result.originalText, result.matches)}
                                        </div>
                                    </div>
                                    
                                    {/* Translated Card */}
                                    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
                                        <div className="p-4 border-b border-slate-100 bg-green-50/30 flex items-center">
                                            <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
                                            <span className="text-sm font-bold text-slate-700">Plain English</span>
                                        </div>
                                        <div className="p-6 text-slate-700 whitespace-pre-wrap leading-relaxed text-lg flex-grow font-serif">
                                            {renderTranslated(result.originalText, result.matches)}
                                        </div>
                                    </div>
                                </div>

                                {/* Worst Offenders & Inventory */}
                                {result.matches.length > 0 && (
                                    <div className="grid lg:grid-cols-3 gap-6 mb-12">
                                        
                                        {/* Worst Offenders */}
                                        <div className="lg:col-span-2 space-y-4">
                                            <h3 className="text-lg font-bold text-slate-900 flex items-center">
                                                <AlertTriangle className="w-5 h-5 text-amber-500 mr-2" /> Worst Offenders
                                            </h3>
                                            {result.topOffenders.map((offender, i) => (
                                                <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                                                    <div className="flex items-center flex-wrap gap-2 mb-2">
                                                        <span className="px-3 py-1 bg-red-100 text-red-800 rounded-md font-medium text-sm line-through decoration-red-400">"{offender.entry.jargon}"</span>
                                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-md font-bold text-sm">"{offender.entry.replacement}"</span>
                                                        <span className="ml-auto text-xs font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded-full">{offender.count}x</span>
                                                    </div>
                                                    {offender.entry.meaning && (
                                                        <div className="mt-3 text-slate-600 text-sm pl-3 border-l-2 border-brand-200 italic">
                                                            <strong>Really means:</strong> {offender.entry.meaning}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Jargon Inventory */}
                                        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
                                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Jargon Inventory</h3>
                                            <div className="space-y-3">
                                                {Array.from(new Set(result.matches.map(m => m.entry.jargon))).map((jargon, i) => {
                                                    const entry = result.matches.find(m => m.entry.jargon === jargon)!.entry;
                                                    return (
                                                        <div key={i} className="flex flex-col text-sm border-b border-slate-100 pb-2 last:border-0">
                                                            <span className="text-red-600 font-medium mb-1">{entry.jargon}</span>
                                                            <span className="text-slate-500 flex items-center">
                                                                <ArrowRight className="w-3 h-3 mr-1" /> {entry.replacement}
                                                            </span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="text-center py-16 px-4 bg-white rounded-3xl shadow-sm border border-slate-200 mb-12">
                                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">👔</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to synergy?</h3>
                                <p className="text-slate-500 font-medium">Paste some corporate jargon to see its true meaning.</p>
                            </div>
                        )}

                        {/* CTA Banner */}
                        <section className="rounded-3xl py-12 bg-slate-900 text-center mb-16 overflow-hidden relative">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-400 via-slate-900 to-slate-900"></div>
                            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                                <h2 className="text-3xl font-bold text-white mb-4">Want to sound clear AND professional?</h2>
                                <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
                                    TextGlow's Concise tone strips the jargon automatically — right inside your email or chat. 2 clicks.
                                </p>
                                <Button href={CHROME_URL} variant="pro" size="lg" className="px-8 py-4 text-lg">
                                    <Chrome className="w-6 h-6 mr-3" /> Install TextGlow — Free
                                </Button>
                            </div>
                        </section>

                    </div>
                </div>
            </section>

            {/* SEO Content / FAQ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="prose prose-slate max-w-none mb-16">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Why Corporate Jargon Is Killing Your Communication</h2>
                        <p>
                            We've all been there: sitting in a meeting or reading an email, nodding along as someone talks about "leveraging synergies to move the needle on our core competencies." It sounds smart. It sounds important. But what does it actually mean? Usually, very little.
                        </p>
                        <p>
                            Corporate jargon is a defense mechanism. We use buzzwords when we're unsure of what to say, when we want to sound authoritative without committing to specifics, or when we're trying to soften a harsh reality (like "right-sizing" instead of "firing").
                        </p>
                        <p>
                            The problem is that jargon creates exclusion. It forces the reader to work harder to understand your point. The most effective professionals communicate with clarity and precision. They respect their reader's time by saying "use" instead of "leverage," and "change" instead of "paradigm shift." Clarity is the ultimate form of professional confidence.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
                    
                    <FAQItem 
                        q="Is all jargon bad?" 
                        a="No. Some shorthand is useful between experts (ROI, KPI, SaaS). The problem is jargon that obscures meaning — when 'leverage our synergies' could just be 'work together.' If the plain English version is equally clear, use the plain English version." 
                    />
                    <FAQItem 
                        q="Isn't some formality appropriate in business?" 
                        a="Absolutely. Being clear doesn't mean being casual. You can be formal and jargon-free. 'I'd like to schedule a meeting to discuss the proposal' is formal AND clear. 'I'd like to circle back to leverage a synergistic discussion re: the value proposition' is jargon and everyone suffers." 
                    />
                    <FAQItem 
                        q="Can I use this for my team's emails?" 
                        a="Yes! Some teams paste emails into this during meetings for fun. It's also genuinely useful for improving communication clarity." 
                    />
                    <FAQItem 
                        q="How many phrases does it detect?" 
                        a="120+ corporate jargon phrases across action/execution, strategy, communication, and email/meeting categories." 
                    />
                    <FAQItem 
                        q="Is my text stored?" 
                        a="No. Everything runs entirely in your browser. Your text is never sent to any server or stored anywhere." 
                    />
                </div>
            </section>
        </div>
    );
};
