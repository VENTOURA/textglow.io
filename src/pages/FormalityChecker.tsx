import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Chrome, ChevronDown, ChevronUp, CheckCircle, AlertTriangle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { analyzeFormality } from '../utils/formalityAnalyzer';
import type { FormalityAnalysis } from '../utils/formalityAnalyzer';

const CHROME_URL = "https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf";

const CONTEXTS = [
    { label: "Work email to colleague", targetName: "Casual to Balanced", min: 3, max: 6.9 },
    { label: "Email to client/boss", targetName: "Balanced to Formal", min: 5, max: 8.9 },
    { label: "Slack / Teams message", targetName: "Very Casual to Casual", min: 1, max: 4.9 },
    { label: "LinkedIn post", targetName: "Casual to Balanced", min: 3, max: 6.9 },
    { label: "Job application", targetName: "Balanced to Formal", min: 5, max: 8.9 },
    { label: "Cover letter", targetName: "Formal", min: 7, max: 8.9 },
    { label: "Academic / legal", targetName: "Formal to Very Formal", min: 7, max: 10 },
];

const ZONES = [
    { name: "Very Casual", min: 1, max: 2.9, color: "bg-orange-500", text: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200" },
    { name: "Casual", min: 3, max: 4.9, color: "bg-amber-400", text: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200" },
    { name: "Balanced", min: 5, max: 6.9, color: "bg-green-500", text: "text-green-600", bg: "bg-green-50", border: "border-green-200" },
    { name: "Formal", min: 7, max: 8.9, color: "bg-blue-500", text: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" },
    { name: "Very Formal", min: 9, max: 10, color: "bg-purple-500", text: "text-purple-600", bg: "bg-purple-50", border: "border-purple-200" },
];

const getZoneConfig = (name: string) => ZONES.find(z => z.name === name) || ZONES[2];

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

export const FormalityChecker = () => {
    const [text, setText] = useState('');
    const [selectedContext, setSelectedContext] = useState(CONTEXTS[0]);
    const [analysis, setAnalysis] = useState<FormalityAnalysis | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (text.trim()) {
                setAnalysis(analyzeFormality(text));
            } else {
                setAnalysis(null);
            }
        }, 300);
        return () => clearTimeout(timer);
    }, [text]);



    const isScoreInTarget = analysis && analysis.score >= selectedContext.min && analysis.score <= selectedContext.max;
    const currentZoneConfig = analysis ? getZoneConfig(analysis.zone) : getZoneConfig("Balanced");

    // Tips Logic
    const generateTips = () => {
        if (!analysis) return [];
        const tips = [];
        
        const score = analysis.score;
        const ctx = selectedContext;

        if (score > ctx.max) {
            tips.push(`Your text is more formal than typical for a ${ctx.label.toLowerCase()}. Try using contractions (I'm, don't, can't) and shorter sentences to warm it up.`);
            const worstFormal = analysis.flags.find(f => f.type === 'formal' && f.replacement);
            if (worstFormal) {
                tips.push(`Consider replacing phrases like "${worstFormal.text}" with "${worstFormal.replacement}" — it says the same thing in a more natural way.`);
            }
            tips.push(`Formal language can create distance. For a ${ctx.label.toLowerCase()}, a conversational tone builds stronger rapport.`);
        } else if (score < ctx.min) {
            tips.push(`Your text is more casual than expected for a ${ctx.label.toLowerCase()}. Consider removing slang and abbreviations.`);
            const worstCasual = analysis.flags.find(f => f.type === 'casual' && f.replacement);
            if (worstCasual) {
                tips.push(`The phrase "${worstCasual.text}" is too informal for this context. Try "${worstCasual.replacement}" instead.`);
            }
            tips.push(`For a ${ctx.label.toLowerCase()}, avoid text-speak abbreviations and use complete sentences.`);
        } else {
            tips.push(`Your formality level is well-matched for a ${ctx.label.toLowerCase()}. Nice work.`);
            if (analysis.flags.length > 0) {
                const firstFlag = analysis.flags.find(f => f.replacement);
                if (firstFlag) {
                    tips.push(`The only phrase that stands out is "${firstFlag.text}" — consider replacing with "${firstFlag.replacement}" for a smoother read.`);
                }
            }
        }

        // Check for inconsistency
        if (analysis.sentences.length > 1) {
            const scores = analysis.sentences.map(s => s.score);
            const minScore = Math.min(...scores);
            const maxScore = Math.max(...scores);
            if (maxScore - minScore >= 4) {
                tips.push(`Your text mixes very casual and very formal language — this can feel inconsistent. Pick one register and stick with it.`);
            }
        }

        return tips;
    };

    const tips = generateTips();

    const getGaugePosition = (score: number) => {
        // Map 1-10 to 0%-100%
        return `${((score - 1) / 9) * 100}%`;
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <Helmet>
                <title>Free Formality Checker — Is Your Email Too Formal or Too Casual? | TextGlow</title>
                <meta name="description" content="Paste your text and instantly check if it's too formal, too casual, or just right for your context. Get specific phrase-level suggestions. Free, private, no signup." />
                <link rel="canonical" href="https://textglow.io/tools/formality-checker" />
            </Helmet>

            {/* Hero Section */}
            <section className="pt-20 pb-12 bg-white border-b border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-medium mb-6">
                            <span>Formality Checker</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Formality Checker</h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Paste your text. See if it's too formal, too casual, or just right — with specific phrases flagged and suggestions to adjust.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Tool Area */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">

                        {/* Context Selector */}
                        <div className="mb-8">
                            <p className="text-sm font-medium text-slate-500 mb-3 uppercase tracking-wider">Select your context</p>
                            <div className="flex flex-wrap gap-2">
                                {CONTEXTS.map(ctx => (
                                    <button
                                        key={ctx.label}
                                        onClick={() => setSelectedContext(ctx)}
                                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                                            selectedContext.label === ctx.label
                                                ? 'bg-slate-900 text-white shadow-md'
                                                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                                        }`}
                                    >
                                        {ctx.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Left Column: Input */}
                            <div className="flex flex-col">
                                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex-grow flex flex-col">
                                    <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                                        <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Your Text</span>
                                        <span className={`text-xs font-medium ${text.length > 5000 ? 'text-red-500' : 'text-slate-400'}`}>
                                            {text.length} chars
                                        </span>
                                    </div>
                                    <textarea
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        placeholder="Paste your email, message, or document here to check its formality level..."
                                        className="w-full flex-grow min-h-[300px] p-6 text-lg text-slate-700 focus:outline-none resize-none"
                                    />
                                </div>
                            </div>

                            {/* Right Column: Analysis */}
                            <div className="flex flex-col space-y-6">
                                {/* Formality Gauge Card */}
                                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-8">
                                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Formality Score</h3>
                                    
                                    <div className="relative pt-6 pb-8">
                                        {/* Target Zone Highlight */}
                                        <div 
                                            className="absolute top-2 bottom-4 bg-green-100/50 border-2 border-green-400 rounded-lg -z-10 transition-all duration-500"
                                            style={{ 
                                                left: `${((selectedContext.min - 1) / 9) * 100}%`, 
                                                width: `${((selectedContext.max - selectedContext.min) / 9) * 100}%` 
                                            }}
                                        ></div>

                                        {/* The Gauge Bar */}
                                        <div className="flex h-4 rounded-full overflow-hidden w-full relative z-0">
                                            {ZONES.map(zone => (
                                                <div 
                                                    key={zone.name} 
                                                    className={`h-full ${zone.color}`}
                                                    style={{ width: '20%' }}
                                                    title={zone.name}
                                                ></div>
                                            ))}
                                        </div>

                                        {/* Zone Labels */}
                                        <div className="flex justify-between mt-2 text-[10px] sm:text-xs font-medium text-slate-400 uppercase">
                                            <span className="w-1/5 text-center">Very Casual</span>
                                            <span className="w-1/5 text-center">Casual</span>
                                            <span className="w-1/5 text-center">Balanced</span>
                                            <span className="w-1/5 text-center">Formal</span>
                                            <span className="w-1/5 text-center">Very Formal</span>
                                        </div>

                                        {/* Needle */}
                                        <motion.div 
                                            className="absolute top-4 w-4 h-4 -ml-2 rounded-full border-2 border-white shadow-md z-10"
                                            animate={{ left: analysis ? getGaugePosition(analysis.score) : '50%', backgroundColor: analysis ? '#1e293b' : '#cbd5e1' }}
                                            transition={{ type: 'spring', stiffness: 50, damping: 15 }}
                                        >
                                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs font-bold py-0.5 px-2 rounded opacity-0 sm:opacity-100">
                                                {analysis ? analysis.score.toFixed(1) : '5.0'}
                                            </div>
                                        </motion.div>
                                    </div>

                                    <div className="mt-2 text-center p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                        {!analysis ? (
                                            <p className="text-slate-500">Type something to see its formality level.</p>
                                        ) : (
                                            <>
                                                <p className="text-lg mb-2 text-slate-700">
                                                    Your text is: <strong className={currentZoneConfig.text}>{analysis.zone}</strong>
                                                </p>
                                                {isScoreInTarget ? (
                                                    <p className="text-sm font-medium flex items-center justify-center text-green-600">
                                                        <CheckCircle className="w-4 h-4 mr-1.5" />
                                                        Right on target for a {selectedContext.label.toLowerCase()}.
                                                    </p>
                                                ) : (
                                                    <p className="text-sm font-medium flex items-center justify-center text-amber-600">
                                                        <AlertTriangle className="w-4 h-4 mr-1.5" />
                                                        For a {selectedContext.label.toLowerCase()}, aim for {selectedContext.targetName} (score {selectedContext.min}-{selectedContext.max}).
                                                    </p>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>

                                {/* Tips Panel */}
                                {analysis && tips.length > 0 && (
                                    <div className="bg-brand-50 border border-brand-100 rounded-3xl p-6 md:p-8">
                                        <h3 className="text-sm font-bold text-brand-600 uppercase tracking-wider mb-4">Contextual Tips</h3>
                                        <ul className="space-y-3">
                                            {tips.map((tip, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-brand-500 mr-2 mt-0.5">•</span>
                                                    <span className="text-brand-900 leading-relaxed">{tip}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Details Section */}
                        {analysis && (
                            <div className="mt-8 grid lg:grid-cols-2 gap-8">
                                {/* Flagged Phrases */}
                                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-[500px]">
                                    <div className="p-6 border-b border-slate-200">
                                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Flagged Phrases ({analysis.flags.length})</h3>
                                    </div>
                                    <div className="p-6 overflow-y-auto flex-grow bg-slate-50/50">
                                        {analysis.flags.length === 0 ? (
                                            <div className="h-full flex flex-col items-center justify-center text-slate-400">
                                                <CheckCircle className="w-12 h-12 mb-3 text-green-400" />
                                                <p className="font-medium text-slate-600">No formality red flags detected.</p>
                                                <p className="text-sm text-slate-500">Your language choices look consistent.</p>
                                            </div>
                                        ) : (
                                            <div className="space-y-4">
                                                {analysis.flags.map((flag, i) => (
                                                    <div key={i} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                                                        <p className="text-slate-800 font-medium mb-3">"{flag.text}"</p>
                                                        <div className="flex flex-wrap items-center gap-2">
                                                            <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
                                                                flag.type === 'formal' ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-orange-50 text-orange-700 border-orange-200'
                                                            }`}>
                                                                {flag.tag}
                                                            </span>
                                                            {flag.replacement && (
                                                                <span className="text-sm text-slate-500 flex items-center">
                                                                    <span className="mx-1">→</span>
                                                                    try: <strong className="ml-1 text-slate-700">"{flag.replacement}"</strong>
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Sentence Breakdown */}
                                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-[500px]">
                                    <div className="p-6 border-b border-slate-200">
                                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Sentence Breakdown</h3>
                                    </div>
                                    <div className="p-6 overflow-y-auto flex-grow bg-slate-50/50 space-y-3">
                                        {analysis.sentences.length === 0 ? (
                                            <div className="h-full flex items-center justify-center text-slate-400">
                                                <p>Breakdown will appear here.</p>
                                            </div>
                                        ) : (
                                            analysis.sentences.map((s, i) => {
                                                const zoneConfig = getZoneConfig(s.zone);
                                                return (
                                                    <div key={i} className="flex gap-3">
                                                        <div className={`flex-shrink-0 w-24 px-2 py-1.5 rounded-lg border ${zoneConfig.bg} ${zoneConfig.text} ${zoneConfig.border} text-[10px] font-bold uppercase tracking-wider flex items-center justify-center text-center`}>
                                                            {s.zone}
                                                        </div>
                                                        <div className="text-slate-700 text-sm py-1.5">
                                                            {s.text}
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-16 bg-slate-900 text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-white mb-4">TextGlow Adjusts Your Formality Automatically</h2>
                    <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
                        Professional for client emails, Friendly for Slack, Confident for LinkedIn. Right inside the text field, in 2 clicks.
                    </p>
                    <Button href={CHROME_URL} variant="pro" size="lg" className="px-8 py-4 text-lg">
                        <Chrome className="w-6 h-6 mr-3" /> Install TextGlow — Free
                    </Button>
                    <p className="mt-4 text-sm text-slate-500">
                        Free: 10 rewrites/day inside any text field · Pro: 150/day for $39/year
                    </p>
                </div>
            </section>

            {/* SEO / FAQ Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
                    
                    <FAQItem 
                        q="How does the formality checker work?" 
                        a="It analyzes your word choice, sentence structure, and phrasing patterns against a database of formal and casual language markers. Each detected pattern shifts a score on a 1-10 scale. No AI — just pattern matching against hundreds of known formal and casual phrases." 
                    />
                    <FAQItem 
                        q="What's the right formality level for a work email?" 
                        a="For most workplace emails to colleagues, aim for Balanced to Casual (3-6). Client-facing emails and messages to leadership should lean Balanced to Formal (5-8). Slack messages can be Very Casual to Casual (1-4). There's no universal right answer — it depends on your relationship with the reader." 
                    />
                    <FAQItem 
                        q="Is being too formal a problem?" 
                        a="Yes. Overly formal writing can feel cold, distant, or bureaucratic. Phrases like 'kindly be advised' or 'pursuant to our discussion' create unnecessary friction in modern business communication. A warm-but-professional tone builds better relationships and gets faster replies." 
                    />
                    <FAQItem 
                        q="Does this check grammar too?" 
                        a="No — this tool focuses specifically on formality and tone. It won't flag grammar mistakes, spelling errors, or punctuation issues. For grammar, use a dedicated tool like Grammarly. For tone adjustment and rewriting, install TextGlow." 
                    />
                    <FAQItem 
                        q="Is my text stored?" 
                        a="No. Everything runs entirely in your browser. Your text is never sent to any server, stored in any database, or shared with anyone." 
                    />
                    <FAQItem 
                        q="Can I use this for languages other than English?" 
                        a="Currently the phrase dictionaries and pattern detection are English-only. The tool may partially work for text that mixes English with other languages, but the scoring won't be reliable for non-English content." 
                    />
                </div>
            </section>
        </div>
    );
};
