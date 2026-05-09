import { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Chrome, ChevronDown, ChevronUp, Share2, Copy, Sparkles, Shuffle, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { genzDictionary } from '../data/genzDictionary';
import type { TranslationCategory } from '../data/genzDictionary';
import { translateText } from '../utils/genzTranslator';
import type { TranslationMode, TranslationResult } from '../utils/genzTranslator';

const CHROME_URL = "https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf";

const genZExamples = [
    "ngl this project is bussin fr fr",
    "no cap the new hire understood the assignment, she's goated",
    "lowkey the client is being sus rn, big ick energy",
    "bet, say less, i'll circle back periodt",
    "bruh this deliverable is mid, not it chief",
    "respectfully this meeting could've been an email, i'm dead 💀",
    "she's in her villain era and honestly? valid. based even.",
    "the audacity of this L, i'm screaming 😭",
    "bro ghosted the whole team, caught in 4k, big L",
    "highkey this strategy slaps, we ate and left no crumbs fr",
    "unhinged but do it for the plot, delulu is the solulu",
    "this presentation is giving main character energy, slay 💅"
];

const corpExamples = [
    "Let's circle back and leverage our core competencies to move the needle.",
    "We need to deep dive into the actionable insights and boil the ocean.",
    "Please ensure all stakeholders are aligned before we proceed with the deliverable.",
    "I'd like to take this offline and touch base regarding bandwidth.",
    "This is a paradigm shift that requires robust cross-functional synergy.",
    "Going forward, we need to be more proactive about value-add initiatives.",
    "The low-hanging fruit here is to optimize our go-to-market strategy.",
    "We should double-click on this and ensure we have full visibility.",
    "Let's socialize this idea with the team and get buy-in.",
    "I want to make sure we're all rowing in the same direction on this one.",
    "We need to operationalize these learnings across all verticals.",
    "At the end of the day, we need to deliver a best-in-class customer experience."
];

const categoryColors: Record<TranslationCategory, string> = {
    approval: 'bg-green-100 text-green-900 border-green-200',
    disapproval: 'bg-red-100 text-red-900 border-red-200',
    actions: 'bg-blue-100 text-blue-900 border-blue-200',
    reactions: 'bg-yellow-100 text-yellow-900 border-yellow-200',
    emotions: 'bg-fuchsia-100 text-fuchsia-900 border-fuchsia-200',
    people: 'bg-orange-100 text-orange-900 border-orange-200',
    situations: 'bg-teal-100 text-teal-900 border-teal-200',
    time: 'bg-slate-200 text-slate-900 border-slate-300',
    emphasis: 'bg-indigo-100 text-indigo-900 border-indigo-200',
    emoji: 'bg-amber-100 text-amber-900 border-amber-200'
};

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

const ScoreGauge = ({ score, label, isGenZ }: { score: number, label: string, isGenZ: boolean }) => {
    return (
        <div className="w-full mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200 relative overflow-hidden">
            <div className="flex justify-between items-end mb-2 relative z-10">
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">{label}</span>
                <span className={`text-2xl font-black ${isGenZ ? 'text-brand-600' : 'text-blue-600'}`}>{score}/100</span>
            </div>
            <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden relative z-10">
                <div 
                    className={`h-full transition-all duration-1000 ease-out ${isGenZ ? 'bg-gradient-to-r from-emerald-400 via-brand-500 to-purple-500' : 'bg-gradient-to-r from-blue-300 via-blue-500 to-slate-800'}`}
                    style={{ width: `${score}%` }}
                />
            </div>
        </div>
    );
};

export const GenzTranslator = () => {
    const [mode, setMode] = useState<TranslationMode>('genz-to-corporate');
    const [input, setInput] = useState('');
    const [result, setResult] = useState<TranslationResult>({
        segments: [], fullText: '', genZScore: 0, corporateScore: 0, matchCount: 0
    });
    const [isTranslating, setIsTranslating] = useState(false);
    const [copied, setCopied] = useState(false);
    const [showEmojiTable, setShowEmojiTable] = useState(false);

    // Translation of the Day
    const totd = useMemo(() => {
        const topRated = genzDictionary.filter(e => e.humorRating === 5).sort((a, b) => a.genZ.localeCompare(b.genZ));
        const index = Math.floor(Date.now() / 86400000) % topRated.length;
        return topRated[index] || genzDictionary[0];
    }, []);

    const emojiEntries = useMemo(() => genzDictionary.filter(e => e.isEmoji), []);

    useEffect(() => {
        if (input.length > 50) setIsTranslating(true);
        const timer = setTimeout(() => {
            setResult(translateText(input, mode));
            setIsTranslating(false);
        }, 150);
        return () => clearTimeout(timer);
    }, [input, mode]);

    const handleModeToggle = () => {
        // Swap text when toggling mode
        setInput(result.fullText);
        setMode(prev => prev === 'genz-to-corporate' ? 'corporate-to-genz' : 'genz-to-corporate');
    };

    const loadRandomExample = () => {
        const examples = mode === 'genz-to-corporate' ? genZExamples : corpExamples;
        const random = examples[Math.floor(Math.random() * examples.length)];
        setInput(random);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(result.fullText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleShare = () => {
        const shareText = `Gen Z: "${mode === 'genz-to-corporate' ? input : result.fullText}"\nCorporate: "${mode === 'genz-to-corporate' ? result.fullText : input}"\n\nvia textglow.io/tools/genz-translator`;
        if (navigator.share) {
            navigator.share({
                title: 'Gen Z ↔ Corporate Translator',
                text: shareText,
                url: 'https://textglow.io/tools/genz-translator',
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(shareText);
            alert("Copied shareable format to clipboard!");
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <Helmet>
                <title>Gen Z ↔ Corporate Translator — Decode Workplace Slang | TextGlow</title>
                <meta name="description" content="Translate Gen Z slang to corporate speak and back. 'No cap' → 'I assure you this is accurate.' Free, fun, and instant. 150+ phrase dictionary." />
                <link rel="canonical" href="https://textglow.io/tools/genz-translator/" />
            </Helmet>

            {/* Hero */}
            <section className="pt-20 pb-10 bg-white border-b border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-medium mb-6">
                            <span>The Unofficial Workplace Translator</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Gen Z ↔ Corporate Translator</h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                            Bridging the generational communication gap, one "no cap" at a time.
                        </p>

                        {/* Mode Toggle */}
                        <div className="flex items-center justify-center space-x-2 mb-8">
                            <button 
                                onClick={() => mode !== 'genz-to-corporate' && handleModeToggle()}
                                className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${mode === 'genz-to-corporate' ? 'bg-slate-900 text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
                            >
                                Gen Z → Corporate
                            </button>
                            <button 
                                onClick={handleModeToggle}
                                className="p-3 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors group"
                                aria-label="Swap direction"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-slate-400 group-hover:text-slate-900 transition-transform duration-300 ${mode === 'corporate-to-genz' ? 'rotate-180' : ''}`}>
                                    <path d="M7 10v12" /><path d="M15 10v8h-3l4 4 4-4h-3v-8" /><path d="M3 14l4-4 4 4" />
                                </svg>
                            </button>
                            <button 
                                onClick={() => mode !== 'corporate-to-genz' && handleModeToggle()}
                                className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${mode === 'corporate-to-genz' ? 'bg-slate-900 text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
                            >
                                Corporate → Gen Z
                            </button>
                        </div>
                        
                        {/* Examples Scroll */}
                        <div className="flex overflow-x-auto pb-4 hide-scrollbar -mx-4 px-4 snap-x">
                            {(mode === 'genz-to-corporate' ? genZExamples : corpExamples).map((ex, i) => (
                                <button
                                    key={i}
                                    onClick={() => setInput(ex)}
                                    className="whitespace-nowrap flex-shrink-0 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 mr-2 snap-start transition-colors"
                                >
                                    "{ex.length > 40 ? ex.substring(0, 40) + '...' : ex}"
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto px-4 max-w-6xl">
                    
                    {/* TOTD Banner */}
                    <div className="mb-8 bg-gradient-to-r from-brand-50 to-purple-50 border border-brand-100 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-4 shadow-sm">
                        <div className="flex items-center font-bold text-brand-800 uppercase tracking-widest text-xs">
                            <Sparkles className="w-4 h-4 mr-2 text-brand-500" /> Translation of the Day
                        </div>
                        <div className="text-slate-800 font-medium">
                            <span className="font-bold text-brand-600">"{totd.genZ}"</span> means <span className="italic">"{totd.corporate}"</span>
                        </div>
                        <Button variant="secondary" size="sm" onClick={() => setInput(totd.genZ)} className="ml-0 sm:ml-auto whitespace-nowrap bg-white">
                            Try it
                        </Button>
                    </div>

                    {/* Editor Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {/* Input Panel */}
                        <div className="flex flex-col">
                            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex-grow flex flex-col">
                                <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                                    <span className="text-sm font-bold text-slate-700">{mode === 'genz-to-corporate' ? 'Gen Z Input' : 'Corporate Input'}</span>
                                    <span className="text-xs font-medium text-slate-400">{input.length} chars</span>
                                </div>
                                <textarea
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder={mode === 'genz-to-corporate' ? "Paste Gen Z slang here..." : "Paste corporate jargon here..."}
                                    className="w-full p-6 text-lg text-slate-700 focus:outline-none resize-none h-64 border-none flex-grow"
                                    spellCheck="false"
                                />
                            </div>
                            <ScoreGauge 
                                score={result.genZScore} 
                                label="Gen Z Score" 
                                isGenZ={true} 
                            />
                        </div>

                        {/* Output Panel */}
                        <div className="flex flex-col">
                            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex-grow flex flex-col relative">
                                <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                                    <span className="text-sm font-bold text-slate-700">Translation</span>
                                    {isTranslating && <span className="text-xs font-bold text-brand-500 animate-pulse">Translating...</span>}
                                </div>
                                <div className="p-6 overflow-y-auto text-lg text-slate-800 leading-relaxed font-serif whitespace-pre-wrap flex-grow h-64 relative">
                                    {result.segments.map((s, i) => {
                                        if (!s.isTranslated) return <span key={i}>{s.translated}</span>;
                                        
                                        const colorClass = s.category ? categoryColors[s.category] : 'bg-slate-100 text-slate-900 border-slate-200';
                                        return (
                                            <span 
                                                key={i} 
                                                className={`inline-block px-1.5 py-0.5 mx-0.5 rounded border-b-2 font-medium ${colorClass} group relative cursor-help`}
                                            >
                                                {s.translated}
                                                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 shadow-xl">
                                                    Original: <strong>{s.original}</strong>
                                                    <span className="block text-slate-400 text-[10px] mt-0.5 uppercase tracking-wider">{s.category}</span>
                                                </span>
                                            </span>
                                        );
                                    })}
                                    {!input && <span className="text-slate-400 italic">Translation will appear here...</span>}
                                </div>
                            </div>
                            <ScoreGauge 
                                score={result.corporateScore} 
                                label="Corporate Score" 
                                isGenZ={false} 
                            />
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        <Button onClick={loadRandomExample} variant="secondary" className="bg-white">
                            <Shuffle className="w-4 h-4 mr-2" /> Random Example
                        </Button>
                        <Button onClick={handleShare} variant="secondary" className="bg-white">
                            <Share2 className="w-4 h-4 mr-2" /> Share Result
                        </Button>
                        <Button onClick={handleCopy} variant="primary" disabled={!input}>
                            {copied ? <CheckCircle2 className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                            {copied ? 'Copied!' : 'Copy Translation'}
                        </Button>
                    </div>

                    {/* Emoji Dictionary Toggle */}
                    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden mb-16 shadow-sm">
                        <button 
                            onClick={() => setShowEmojiTable(!showEmojiTable)}
                            className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
                        >
                            <div className="flex items-center">
                                <span className="text-2xl mr-4">🤓</span>
                                <h3 className="text-lg font-bold text-slate-900">Emoji → Corporate Dictionary</h3>
                            </div>
                            {showEmojiTable ? <ChevronUp className="w-6 h-6 text-slate-400" /> : <ChevronDown className="w-6 h-6 text-slate-400" />}
                        </button>
                        
                        <div className={`transition-all duration-300 ease-in-out ${showEmojiTable ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                            <div className="p-6 pt-0 border-t border-slate-100">
                                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                                    {emojiEntries.map((entry, i) => (
                                        <div key={i} className="flex items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                                            <span className="text-3xl mr-4 drop-shadow-sm">{entry.genZ}</span>
                                            <span className="text-sm font-medium text-slate-700 italic leading-snug">"{entry.corporate}"</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Banner */}
                    <section className="rounded-3xl py-12 bg-slate-900 text-center mb-16 overflow-hidden relative shadow-xl">
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-400 via-slate-900 to-slate-900"></div>
                        <div className="container mx-auto px-4 max-w-4xl relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-4">Translate in Any Tone, Right Inside Your Apps</h2>
                            <p className="text-lg text-slate-300 mb-6 leading-relaxed max-w-2xl mx-auto">
                                Whether you speak fluent Gen Z or corporate, TextGlow rewrites your messages in any tone — right inside Gmail, Slack, and LinkedIn.
                            </p>
                            <p className="text-sm text-brand-300 mb-8 font-medium">Free: 10 rewrites/day &nbsp;·&nbsp; Pro: Unlimited for $39/year</p>
                            <Button href={CHROME_URL} variant="pro" size="lg" className="px-8 py-4 text-lg">
                                <Chrome className="w-6 h-6 mr-3" /> Add to Chrome — Free
                            </Button>
                        </div>
                    </section>

                </div>
            </section>

            {/* SEO Content / FAQ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="prose prose-slate max-w-none mb-16">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Bridging the Generational Communication Gap</h2>
                        
                        <p>
                            Gen Z slang is an internet-native dialect that evolves at the speed of social media — phrases born on TikTok or Twitter become workplace vocabulary within months. A Gen Z slang translator helps older colleagues decode phrases they encounter in Slack messages, emails, and meetings without having to ask what "no cap" means in front of the whole team.
                        </p>
                        
                        <p>
                            But the bridge goes both ways. Gen Z professionals often code-switch between casual digital speech and formal professional English. Being able to translate Gen Z speak to professional corporate language helps younger employees adapt their natural communication style for more formal contexts: a performance review, a client email, or a board presentation.
                        </p>
                        
                        <p>
                            Corporate jargon is its own dialect, and it's just as impenetrable. "Let's circle back and leverage our learnings to move the needle" means approximately nothing to someone outside a corporate environment. Translating corporate speak to Gen Z helps deconstruct the often-hollow vocabulary of business communication — and occasionally reveals that "synergy" and "vibe" are saying the exact same thing.
                        </p>
                        
                        <p>
                            Language is always evolving, and slang is not lesser than formal English — it's expressive, efficient, and often emotionally precise. The goal of this tool is cross-generational understanding, not correction.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
                    
                    <FAQItem 
                        q="What is Gen Z slang?" 
                        a="Gen Z slang is internet-native language that developed primarily through platforms like TikTok, Twitter/X, Discord, and Twitch. It's characterized by repurposed words ('bussin,' 'slay'), abbreviations ('ngl,' 'fr'), and ironic recontextualization of older slang. It evolves extremely quickly and often enters mainstream usage within weeks." 
                    />
                    <FAQItem 
                        q="Why would I actually use this?" 
                        a="Cross-generational teams communicate better when they understand each other. If you're a manager trying to understand a Slack message from a Gen Z team member, or a young professional drafting an email to a senior stakeholder, this tool helps bridge the gap instantly — and usually with a laugh." 
                    />
                    <FAQItem 
                        q="Is this making fun of Gen Z?" 
                        a="Not at all. Language evolution is natural and Gen Z slang is often more expressive and emotionally precise than formal English. 'I'm in my villain era' communicates something that no corporate phrase quite captures. This tool celebrates how language evolves, not corrects it." 
                    />
                    <FAQItem 
                        q="Is my text stored or sent anywhere?" 
                        a="No. This tool is 100% client-side. Your text never leaves your browser. There are no API calls, no servers, no logging." 
                    />
                    <FAQItem 
                        q="How often is the dictionary updated?" 
                        a="We update the dictionary regularly as new slang enters common use. The current dictionary contains over 150 translation pairs." 
                    />
                </div>
            </section>
        </div>
    );
};
