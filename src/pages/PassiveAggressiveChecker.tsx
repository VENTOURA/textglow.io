import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Chrome, ChevronDown, ChevronUp, AlertTriangle, ArrowRight, Info, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { analyzePassiveAggressive } from '../utils/passiveAggressiveDictionary';
import type { PAResult, PAMatch } from '../utils/passiveAggressiveDictionary';

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

export const PassiveAggressiveChecker = () => {
    const [text, setText] = useState('');
    const [result, setResult] = useState<PAResult | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (text.trim()) {
                setResult(analyzePassiveAggressive(text));
            } else {
                setResult(null);
            }
        }, 300);
        return () => clearTimeout(timer);
    }, [text]);

    const getScoreColor = (score: number) => {
        if (score <= 20) return 'text-green-500';
        if (score <= 40) return 'text-lime-500';
        if (score <= 60) return 'text-amber-500';
        if (score <= 80) return 'text-orange-600';
        return 'text-red-600';
    };

    const getScoreBg = (score: number) => {
        if (score <= 20) return 'bg-green-500';
        if (score <= 40) return 'bg-lime-500';
        if (score <= 60) return 'bg-amber-500';
        if (score <= 80) return 'bg-orange-600';
        return 'bg-red-600';
    };

    const getSeverityColor = (severity: number) => {
        if (severity >= 80) return 'bg-red-100 text-red-800 border-red-200';
        if (severity >= 60) return 'bg-orange-100 text-orange-800 border-orange-200';
        if (severity >= 40) return 'bg-amber-100 text-amber-800 border-amber-200';
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    };

    const renderHighlightedText = (t: string, matches: PAMatch[]) => {
        let lastIndex = 0;
        const elements = [];
        matches.forEach(m => {
            if (m.startIndex > lastIndex) {
                elements.push(<span key={`text-${lastIndex}`}>{t.slice(lastIndex, m.startIndex)}</span>);
            }
            
            let colorClass = 'bg-yellow-200/60';
            if (m.severity >= 80) colorClass = 'bg-red-200/80';
            else if (m.severity >= 60) colorClass = 'bg-orange-200/70';

            elements.push(
                <span key={`match-${m.id}`} className={`${colorClass} rounded-md px-1 py-0.5 border-b-2 border-slate-900/10 font-medium`}>
                    {m.original}
                </span>
            );
            lastIndex = m.endIndex;
        });
        if (lastIndex < t.length) {
            elements.push(<span key={`text-${lastIndex}`}>{t.slice(lastIndex)}</span>);
        }
        return elements;
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <Helmet>
                <title>Free Passive-Aggressive Email Checker — AI Tone Tool | TextGlow</title>
                <meta name="description" content="Stop sending passive-aggressive emails. Use TextGlow's checker to detect hidden tones and rewrite your messages for professional clarity and impact. Free online tool." />
                <link rel="canonical" href="https://textglow.io/tools/passive-aggressive-checker/" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://textglow.io/tools/passive-aggressive-checker/" />
                <meta property="og:title" content="Free Passive-Aggressive Email Checker — AI Tone Tool | TextGlow" />
                <meta property="og:description" content="Stop sending passive-aggressive emails. Use TextGlow's checker to detect hidden tones and rewrite your messages for professional clarity and impact. Free online tool." />
                <meta property="og:image" content="https://textglow.io/og-image.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="Free Passive-Aggressive Email Checker — AI Tone Tool | TextGlow" />
                <meta property="twitter:description" content="Stop sending passive-aggressive emails. Use TextGlow's checker to detect hidden tones and rewrite your messages for professional clarity and impact. Free online tool." />
            </Helmet>

            <section className="pt-20 pb-12 bg-white border-b border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-medium mb-6">
                            <span>Passive-Aggressive Meter</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">How passive-aggressive is this?</h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Paste your email to see your hostility score. We'll highlight the receipts, explain the subtext, and help you rewrite it.
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
                                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Paste your draft here</span>
                                {result && result.matches.length > 0 && (
                                    <span className="text-xs font-bold px-2 py-1 bg-red-100 text-red-700 rounded-md flex items-center">
                                        <AlertTriangle className="w-3 h-3 mr-1" /> {result.matches.length} triggers found
                                    </span>
                                )}
                            </div>
                            <div className="relative">
                                {/* Invisible textarea for input */}
                                <textarea
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    placeholder="e.g., Per my last email, I was under the impression that we had already aligned on this. Going forward, please advise on how you intend to correct this."
                                    className="w-full p-6 text-lg text-slate-700 focus:outline-none resize-none h-48 border-none absolute inset-0 z-10 bg-transparent text-transparent caret-slate-900"
                                    spellCheck="false"
                                />
                                {/* Visible div for highlighting */}
                                <div 
                                    className="w-full p-6 text-lg text-slate-700 h-48 overflow-hidden font-sans whitespace-pre-wrap pointer-events-none"
                                    aria-hidden="true"
                                >
                                    {text ? (
                                        result ? renderHighlightedText(result.originalText, result.matches) : text
                                    ) : (
                                        <span className="text-slate-400">e.g., Per my last email, I was under the impression that we had already aligned on this. Going forward, please advise on how you intend to correct this.</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {result ? (
                            <>
                                {/* Thermometer Score Panel */}
                                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 mb-8">
                                    <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                                        <div className="text-center md:text-left mb-6 md:mb-0">
                                            <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Hostility Level</div>
                                            <div className="flex items-baseline justify-center md:justify-start">
                                                <span className={`text-6xl font-black ${getScoreColor(result.overallScore)}`}>
                                                    {result.overallScore}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex-grow max-w-2xl mx-0 md:mx-8 w-full text-center">
                                            <h3 className={`text-2xl font-bold mb-2 ${getScoreColor(result.overallScore)}`}>{result.scoreLabel}</h3>
                                            <p className="text-slate-600 font-medium text-lg">{result.scoreDescription}</p>
                                        </div>
                                    </div>
                                    
                                    {/* Thermometer Bar */}
                                    <div className="relative pt-6 pb-2 px-2">
                                        <div className="h-6 w-full rounded-full bg-slate-100 flex overflow-hidden border border-slate-200 shadow-inner">
                                            <div className="h-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 w-full opacity-30"></div>
                                        </div>
                                        {/* The indicator */}
                                        <div 
                                            className="absolute top-2 w-8 h-14 -ml-4 flex flex-col items-center justify-center transition-all duration-700 ease-out"
                                            style={{ left: `${result.overallScore}%` }}
                                        >
                                            <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-slate-800 mb-1"></div>
                                            <div className={`w-6 h-6 rounded-full border-4 border-white shadow-md ${getScoreBg(result.overallScore)}`}></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-4 text-xs font-bold text-slate-400 uppercase tracking-wider px-2">
                                        <span>Clean</span>
                                        <span>Spicy</span>
                                        <span>Toxic</span>
                                    </div>
                                </div>

                                {/* Results Grid */}
                                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                                    
                                    {/* Flagged Phrases */}
                                    <div className="lg:col-span-2 space-y-6">
                                        <h3 className="text-xl font-bold text-slate-900">Flagged Phrases</h3>
                                        
                                        {result.matches.length > 0 ? (
                                            <div className="space-y-4">
                                                {result.matches.sort((a, b) => b.severity - a.severity).map((match, i) => (
                                                    <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                                                        <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                                            <div className="font-bold text-lg text-slate-900 flex items-center">
                                                                <span className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded mr-2 line-through decoration-slate-400">
                                                                    "{match.original}"
                                                                </span>
                                                            </div>
                                                            <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getSeverityColor(match.severity)}`}>
                                                                Severity: {match.severity}
                                                            </div>
                                                        </div>
                                                        <div className="p-5 bg-slate-50 flex flex-col sm:flex-row gap-5">
                                                            <div className="flex-1">
                                                                <div className="flex items-center text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">
                                                                    <Info className="w-4 h-4 mr-1.5" /> What it really means
                                                                </div>
                                                                <p className="text-slate-700 italic leading-relaxed">
                                                                    {match.explanation}
                                                                </p>
                                                            </div>
                                                            <div className="flex-1">
                                                                <div className="flex items-center text-sm font-bold text-green-600 uppercase tracking-wider mb-2">
                                                                    <CheckCircle2 className="w-4 h-4 mr-1.5" /> Better Alternative
                                                                </div>
                                                                <p className="text-slate-900 font-medium bg-green-50 p-3 rounded-lg border border-green-100">
                                                                    {match.rewrite}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center text-slate-500">
                                                No passive-aggressive phrases detected. You're a beacon of healthy communication!
                                            </div>
                                        )}
                                    </div>

                                    {/* Sidebar: Summary & Suggestions */}
                                    <div className="space-y-6">
                                        {/* Vibe Summary */}
                                        <div className="bg-brand-50 rounded-3xl border border-brand-100 p-6">
                                            <h3 className="text-lg font-bold text-brand-900 mb-3">Overall Vibe</h3>
                                            <p className="text-brand-800 leading-relaxed text-sm">
                                                {result.vibeSummary}
                                            </p>
                                        </div>

                                        {/* Quick Fixes */}
                                        {result.rewriteSuggestions.length > 0 && (
                                            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
                                                <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Fixes</h3>
                                                <ul className="space-y-3">
                                                    {result.rewriteSuggestions.map((suggestion, i) => (
                                                        <li key={i} className="flex items-start text-sm">
                                                            <ArrowRight className="w-4 h-4 text-brand-500 mr-2 flex-shrink-0 mt-0.5" />
                                                            <span className="text-slate-600">{suggestion}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                </div>
                            </>
                        ) : (
                            <div className="text-center py-16 px-4 bg-white rounded-3xl shadow-sm border border-slate-200 mb-12">
                                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🔥</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Ready for a reality check?</h3>
                                <p className="text-slate-500 font-medium">Paste your email above to see how it really sounds.</p>
                            </div>
                        )}

                        {/* CTA Banner */}
                        <section className="rounded-3xl py-12 bg-slate-900 text-center mb-16 overflow-hidden relative">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-400 via-slate-900 to-slate-900"></div>
                            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                                <h2 className="text-3xl font-bold text-white mb-4">Accidentally passive-aggressive?</h2>
                                <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
                                    TextGlow's Empathetic and Friendly tones fix the vibe in 2 clicks — right inside your email or chat.
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
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
                    
                    <FAQItem 
                        q="Am I actually being passive-aggressive?" 
                        a="Maybe! Most passive-aggressive language is unintentional. This tool helps you spot phrases that commonly read as passive-aggressive to recipients, even if you didn't mean them that way." 
                    />
                    <FAQItem 
                        q="Is 'per my last email' really that bad?" 
                        a="It's the #1 most-recognized passive-aggressive phrase in professional communication. If you're using it, your recipient is already bracing for impact." 
                    />
                    <FAQItem 
                        q="Can I use this to check emails I've received?" 
                        a="Absolutely. Paste your boss's email and finally get confirmation for what you've been feeling." 
                    />
                    <FAQItem 
                        q="How accurate is this?" 
                        a="It's based on widely-recognized passive-aggressive patterns in professional communication. It won't catch every case (some passive-aggression is pure context), but it catches the big ones." 
                    />
                    <FAQItem 
                        q="Is my text stored?" 
                        a="No. Everything runs in your browser. Your drafts are never sent to a server." 
                    />
                </div>
            </section>
        </div>
    );
};
