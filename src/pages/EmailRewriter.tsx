import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Copy, Check, Chrome, RefreshCw, XCircle, AlertCircle, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { canUse, incrementUsage, remainingUses } from '../utils/usageTracker';
import { callRewriteApi } from '../utils/rewriteApi';
import type { ToneName } from '../utils/rewriteApi';

const CHROME_URL = "https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf";

interface ToneOption {
  name: ToneName;
  label: string;
  description: string;
  color: string;
  bg: string;
}

const TONES: ToneOption[] = [
  { name: 'professional', label: 'Professional', description: 'Business emails, client communication', color: 'text-blue-600', bg: 'bg-blue-50' },
  { name: 'friendly', label: 'Friendly', description: 'Warm, approachable, casual', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { name: 'confident', label: 'Confident', description: 'Bold, assertive, decisive', color: 'text-purple-600', bg: 'bg-purple-50' },
  { name: 'concise', label: 'Concise', description: 'Short, clear, no fluff', color: 'text-slate-600', bg: 'bg-slate-50' },
  { name: 'empathetic', label: 'Empathetic', description: 'Understanding, supportive, kind', color: 'text-amber-600', bg: 'bg-amber-50' },
  { name: 'persuasive', label: 'Persuasive', description: 'Compelling, convincing', color: 'text-red-600', bg: 'bg-red-50' },
  { name: 'direct', label: 'Direct', description: 'Straight to the point', color: 'text-orange-600', bg: 'bg-orange-50' },
  { name: 'polite', label: 'Polite', description: 'Respectful, gracious', color: 'text-teal-600', bg: 'bg-teal-50' },
  { name: 'funny', label: 'Funny', description: 'Witty, lighthearted', color: 'text-pink-600', bg: 'bg-pink-50' },
  { name: 'flirty', label: 'Flirty', description: 'Playful, charming', color: 'text-rose-600', bg: 'bg-rose-50' },
];

const EXAMPLES = [
  { text: "hey john, im sick today, can we reschedule the meeting? sorry about this", tone: 'professional' as ToneName },
  { text: "I saw your company and want to talk about working together somehow", tone: 'persuasive' as ToneName },
  { text: "the project is late because the other team didn't deliver their part on time", tone: 'professional' as ToneName },
  { text: "hi I wanted to follow up on my application from last week, any updates?", tone: 'polite' as ToneName },
];

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

export const EmailRewriter = () => {
  const [text, setText] = useState('');
  const [selectedTone, setSelectedTone] = useState<ToneName>('professional');
  const [isRewriting, setIsRewriting] = useState(false);
  const [rewrittenText, setRewrittenText] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [usesLeft, setUsesLeft] = useState(3);
  
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setUsesLeft(remainingUses());
  }, []);

  const handleRewrite = async () => {
    if (!text.trim()) {
      setError("Please enter some text to rewrite.");
      return;
    }
    if (text.length < 10) {
      setError("Please enter at least 10 characters.");
      return;
    }
    if (text.length > 800) {
      setError(`Text must be under 800 characters (currently ${text.length}). Shorten it or install TextGlow for 3,000 character limits.`);
      return;
    }
    if (!canUse()) {
      setError("You've used all 3 free rewrites today.");
      return;
    }

    setError(null);
    setIsRewriting(true);

    const response = await callRewriteApi({ text, tone: selectedTone });

    if (response.error) {
      setError(response.error);
      setIsRewriting(false);
    } else if (response.rewritten) {
      setRewrittenText(response.rewritten);
      setIsRewriting(false);
      incrementUsage();
      setUsesLeft(remainingUses());
    }
  };

  const handleCopy = () => {
    if (rewrittenText) {
      navigator.clipboard.writeText(rewrittenText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleExampleClick = (exampleText: string, recommendedTone: ToneName) => {
    setText(exampleText);
    setSelectedTone(recommendedTone);
    setRewrittenText(null);
    setError(null);
  };

  const jsonLd = { 
    "@context": "https://schema.org", 
    "@type": "WebApplication", 
    "name": "Free Email Rewriter", 
    "description": "Rewrite any email or message in 10 different tones with AI.", 
    "url": "https://textglow.io/tools/email-rewriter", 
    "applicationCategory": "UtilityApplication", 
    "operatingSystem": "Web", 
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" } 
  };

  const activeToneConfig = TONES.find(t => t.name === selectedTone) || TONES[0];

  return (
    <div className="bg-slate-50 min-h-screen">
      <Helmet>
        <title>Free Email Rewriter — Rewrite Any Message in 10 Different Tones | TextGlow</title>
        <meta name="description" content="Paste your email, pick a tone, and see it rewritten instantly. Professional, Friendly, Confident, and 7 more tones. 3 free rewrites per day. No signup. Powered by TextGlow." />
        <link rel="canonical" href="https://textglow.io/tools/email-rewriter" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Free Email Rewriter | TextGlow" />
        <meta property="og:description" content="Paste your email, pick a tone, and see it rewritten instantly. Professional, Friendly, Confident, and 7 more tones. 3 free rewrites per day." />
        <meta property="og:url" content="https://textglow.io/tools/email-rewriter" />
        <meta property="og:image" content="https://textglow.io/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" /><span>Live AI Demo</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Rewrite My Email</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See how your message sounds in a different tone — powered by the same AI behind TextGlow.
            </p>
          </div>
        </div>
      </section>

      {/* Main Tool Area */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            {!rewrittenText ? (
              <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-8">
                
                {/* Examples */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-slate-500 mb-3 uppercase tracking-wider">Try an example</p>
                  <div className="flex flex-wrap gap-2">
                    {EXAMPLES.map((ex, i) => (
                      <button 
                        key={i}
                        onClick={() => handleExampleClick(ex.text, ex.tone)}
                        className="text-left text-sm bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-xl px-4 py-2 transition-colors max-w-xs truncate"
                        title={ex.text}
                      >
                        "{ex.text}"
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Area */}
                <div className="relative mb-8">
                  <textarea 
                    ref={textareaRef}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Paste your email, Slack message, or any text here..."
                    className="w-full h-48 rounded-2xl border border-slate-300 bg-white text-slate-900 p-5 text-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none shadow-inner"
                  />
                  <div className="absolute bottom-4 right-4 flex items-center space-x-3">
                    <span className={`text-xs font-medium ${text.length > 800 ? 'text-red-500' : 'text-slate-400'}`}>
                      {text.length} / 800
                    </span>
                    {text && (
                      <button onClick={() => setText('')} className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-lg transition-colors" title="Clear">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Tone Selector */}
                <div className="mb-8">
                  <p className="text-sm font-medium text-slate-500 mb-3 uppercase tracking-wider">Select a Tone</p>
                  <div className="flex flex-wrap gap-2">
                    {TONES.map(t => (
                      <button
                        key={t.name}
                        onClick={() => setSelectedTone(t.name)}
                        className={`group relative px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                          selectedTone === t.name 
                            ? `bg-slate-900 text-white shadow-md` 
                            : `bg-slate-50 text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-100`
                        }`}
                      >
                        {t.label}
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-slate-800 text-white text-xs p-2 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pointer-events-none z-10 text-center shadow-lg">
                          {t.description}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Error Banner */}
                <AnimatePresence>
                  {error && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mb-6 overflow-hidden">
                      <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl flex items-start">
                        <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                        <p>{error}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Rewrite CTA & Gate */}
                <div className="flex flex-col items-center pt-4 border-t border-slate-100">
                  {usesLeft > 0 ? (
                    <>
                      <Button 
                        size="lg" 
                        onClick={handleRewrite} 
                        disabled={isRewriting || !text.trim()}
                        className="w-full md:w-auto px-12 py-4 text-lg"
                      >
                        {isRewriting ? (
                          <><RefreshCw className="w-5 h-5 mr-2 animate-spin" /> Rewriting...</>
                        ) : (
                          <><Sparkles className="w-5 h-5 mr-2" /> Rewrite in {activeToneConfig.label}</>
                        )}
                      </Button>
                      <p className="mt-4 text-sm text-slate-500 font-medium">
                        {usesLeft} of 3 free rewrites remaining today · No signup required
                      </p>
                    </>
                  ) : (
                    <div className="text-center p-6 bg-brand-50 border border-brand-100 rounded-2xl w-full">
                      <h3 className="text-xl font-bold text-brand-900 mb-2">You've used all 3 free rewrites today! 🎉</h3>
                      <p className="text-brand-700 mb-6">
                        Want unlimited rewrites right where you type — inside Gmail, Slack, LinkedIn, and more?
                      </p>
                      <Button href={CHROME_URL} variant="pro" size="lg" className="w-full md:w-auto">
                        <Chrome className="w-5 h-5 mr-2" /> Install TextGlow — It's Free
                      </Button>
                      <p className="mt-4 text-xs text-brand-600/80">
                        Your free rewrites reset tomorrow. Or get unlimited rewrites now with the extension.
                      </p>
                    </div>
                  )}
                </div>

              </div>
            ) : (
              /* Results View */
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Original */}
                  <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex flex-col h-full">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center">
                      Your Original
                    </h3>
                    <div className="text-slate-600 whitespace-pre-wrap flex-grow leading-relaxed">
                      {text}
                    </div>
                  </div>

                  {/* Rewritten */}
                  <div className="bg-white rounded-3xl p-6 shadow-lg border border-brand-100 flex flex-col h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-bl-full -z-10 blur-2xl"></div>
                    
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-sm font-bold text-brand-600 uppercase tracking-wider">
                        Rewritten
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${activeToneConfig.bg} ${activeToneConfig.color} border border-current opacity-50`}>
                        {activeToneConfig.label}
                      </span>
                    </div>

                    <motion.div 
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
                      className="text-slate-900 text-lg whitespace-pre-wrap flex-grow leading-relaxed font-medium"
                    >
                      {rewrittenText}
                    </motion.div>

                    <div className="mt-6 flex justify-end">
                      <button 
                        onClick={handleCopy}
                        className="flex items-center space-x-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition-colors"
                      >
                        {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                        <span>{copied ? 'Copied!' : 'Copy Text'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 pt-6">
                  <Button 
                    variant="secondary" 
                    onClick={() => {
                      setRewrittenText(null);
                    }}
                  >
                    <RefreshCw className="w-4 h-4 mr-2" /> Try Another Tone
                  </Button>
                  <Button 
                    variant="ghost" 
                    onClick={() => {
                      setText('');
                      setRewrittenText(null);
                      setSelectedTone('professional');
                    }}
                  >
                    <XCircle className="w-4 h-4 mr-2" /> Rewrite New Text
                  </Button>
                </div>
                <div className="text-center text-sm text-slate-500 font-medium">
                  {usesLeft} of 3 free rewrites remaining today
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-slate-900 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-4">Love the Result? Get Unlimited Rewrites Inside Every Text Field</h2>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
            TextGlow does exactly this — but inside Gmail, Slack, LinkedIn, and every website. No copy-pasting. Click ✨, pick a tone, done.
          </p>
          <Button href={CHROME_URL} variant="pro" size="lg" className="px-8 py-4 text-lg">
            <Chrome className="w-6 h-6 mr-3" /> Install TextGlow — Free
          </Button>
          <p className="mt-4 text-sm text-slate-500">
            Free: 10 rewrites/day inside any text field · Pro: 150/day for $39/year
          </p>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Rewriting Matters More Than Writing</h2>
            <div className="prose prose-slate text-lg text-slate-600 leading-relaxed max-w-none">
              <p>The real bottleneck isn't writing — it's rewriting. You know what you want to say, you just can't find the right words. That's why people copy their drafts into ChatGPT 15 times a day.</p>
              <p>The problem with ChatGPT: it's a 6-step workflow (open tab → paste → write prompt → wait → copy → paste back → edit). TextGlow collapses that into 2 clicks, right where you're already typing.</p>
              <p>This free tool gives you a taste of what TextGlow does. But the real magic is when it works inside your email, your Slack, your LinkedIn — without ever leaving the page you're on.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <FAQItem 
              q="Is this free?" 
              a="Yes. 3 rewrites per day, no signup, no credit card. Your rewrites reset every 24 hours." 
            />
            <FAQItem 
              q="Is my text stored?" 
              a="No. Your text is sent to our AI for rewriting and immediately discarded. We don't store, log, or use your text for anything." 
            />
            <FAQItem 
              q="How is this different from ChatGPT?" 
              a="ChatGPT requires you to open a new tab, paste your text, write a prompt explaining what you want, wait for a response, copy it, and paste it back. This tool (and the TextGlow extension) does it in one click with a pre-selected tone. Same AI quality, 10x less friction." 
            />
            <FAQItem 
              q="What tones are available?" 
              a="10 tones: Professional, Friendly, Confident, Concise, Empathetic, Persuasive, Direct, Polite, Funny, and Flirty. Each one is tuned for different contexts." 
            />
            <FAQItem 
              q="Can I use this for languages other than English?" 
              a="Yes. The AI handles 50+ languages. Type in any language and it will rewrite in that same language with the selected tone." 
            />
            <FAQItem 
              q="Why only 3 free rewrites?" 
              a="Running AI costs money for every rewrite. We offer 3 free daily rewrites so everyone can experience the quality. For unlimited rewrites right inside Gmail, Slack, and LinkedIn, install the free TextGlow extension (10 rewrites/day free, or upgrade to Pro for 150/day)." 
            />
          </div>

        </div>
      </section>

    </div>
  );
};
