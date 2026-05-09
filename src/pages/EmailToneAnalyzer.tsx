import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Chrome, ChevronDown, ChevronUp, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useState } from 'react';
import { analyzeTone } from '../utils/toneAnalyzer';
import type { ToneAnalysisResult, ToneName } from '../utils/toneAnalyzer';

const CHROME_URL = "https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf";

const TONE_LABELS: Record<ToneName, string> = {
  'professional': 'Professional', 'friendly': 'Friendly', 'confident': 'Confident',
  'passive-aggressive': 'Passive-Aggressive', 'apologetic': 'Apologetic', 'urgent': 'Urgent',
  'formal': 'Formal', 'casual': 'Casual', 'blunt': 'Blunt', 'neutral': 'Neutral',
};

const TONE_BG: Record<ToneName, string> = {
  'professional': 'bg-blue-100 text-blue-800 border-blue-200', 'friendly': 'bg-green-100 text-green-800 border-green-200',
  'confident': 'bg-purple-100 text-purple-800 border-purple-200', 'passive-aggressive': 'bg-red-100 text-red-800 border-red-200',
  'apologetic': 'bg-yellow-100 text-yellow-800 border-yellow-200', 'urgent': 'bg-red-200 text-red-900 border-red-300',
  'formal': 'bg-gray-100 text-gray-800 border-gray-200', 'casual': 'bg-teal-100 text-teal-800 border-teal-200',
  'blunt': 'bg-orange-100 text-orange-800 border-orange-200', 'neutral': 'bg-slate-100 text-slate-700 border-slate-200',
};

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors">
        <span className="font-semibold text-slate-900 pr-4">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />}
      </button>
      {open && <div className="px-5 pb-5"><p className="text-slate-600 leading-relaxed">{a}</p></div>}
    </div>
  );
};

const ScoreGauge = ({ score, label }: { score: number; label: string }) => {
  const color = score >= 7 ? 'text-green-600' : score >= 5 ? 'text-yellow-600' : 'text-red-600';
  const bg = score >= 7 ? 'from-green-400 to-emerald-500' : score >= 5 ? 'from-yellow-400 to-amber-500' : 'from-red-400 to-orange-500';
  const Icon = score >= 7 ? CheckCircle : score >= 5 ? Info : AlertTriangle;
  return (
    <div className="text-center">
      <div className="relative inline-flex items-center justify-center w-28 h-28 rounded-full mb-4">
        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${bg} opacity-15`}></div>
        <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center">
          <span className={`text-3xl font-bold ${color}`}>{score}</span><span className="text-slate-400 text-sm">/10</span>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <Icon className={`w-4 h-4 ${color}`} />
        <p className={`text-sm font-medium ${color}`}>{label}</p>
      </div>
    </div>
  );
};

export const EmailToneAnalyzer = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState<ToneAnalysisResult | null>(null);
  const [analyzing, setAnalyzing] = useState(false);

  const handleAnalyze = () => {
    if (!text.trim()) return;
    setAnalyzing(true);
    setTimeout(() => { setResult(analyzeTone(text)); setAnalyzing(false); }, 400);
  };

  const jsonLd = {
    "@context": "https://schema.org", "@type": "WebApplication", "name": "Email Tone Analyzer",
    "description": "Free tool to analyze the tone of your emails — detect passive-aggressive, overly formal, or apologetic phrasing.",
    "url": "https://textglow.io/tools/email-tone-analyzer/", "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>Free Email Tone Analyzer — Check How Your Email Sounds | TextGlow</title>
        <meta name="description" content="Paste your email and instantly see its tone breakdown — professional, friendly, passive-aggressive, or too formal. Free, private, no signup. Powered by TextGlow." />
        <link rel="canonical" href="https://textglow.io/tools/email-tone-analyzer/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Free Email Tone Analyzer — Check How Your Email Sounds | TextGlow" />
        <meta property="og:description" content="Paste your email and instantly see its tone breakdown. Free, private, no signup." />
        <meta property="og:url" content="https://textglow.io/tools/email-tone-analyzer/" />
        <meta property="og:image" content="https://textglow.io/og-image.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Free Email Tone Analyzer | TextGlow" />
        <meta property="twitter:description" content="Paste your email and instantly see its tone breakdown. Free, private, no signup." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero / Tool Input */}
      <section className="pt-20 pb-12 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4"><div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" /><span>Free Tool</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Email Tone Analyzer
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-lg text-slate-300 mb-8">
            Paste your email and find out how it <em>really</em> sounds — before you hit send.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-left">
            <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Paste your email here..." rows={7}
              className="w-full rounded-2xl border border-slate-600 bg-slate-800/50 text-white placeholder-slate-500 p-5 text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-y mb-4" />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <button onClick={handleAnalyze} disabled={!text.trim() || analyzing}
                className="w-full sm:w-auto px-8 py-3.5 bg-orange-600 hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all shadow-[0_0_30px_rgba(234,88,12,0.3)] text-lg">
                {analyzing ? 'Analyzing...' : '🔍 Analyze Tone'}
              </button>
              <p className="text-xs text-slate-500 flex items-center space-x-1">
                <span>🔒</span><span>100% private — your text is analyzed in your browser. Nothing is sent to any server.</span>
              </p>
            </div>
          </motion.div>
        </div></div>
      </section>

      {/* Results */}
      <AnimatePresence>
        {result && (
          <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="py-16 bg-slate-50">
            <div className="container mx-auto px-4"><div className="max-w-4xl mx-auto">

              {/* Score + Breakdown */}
              <div className="grid md:grid-cols-[200px_1fr] gap-8 mb-12">
                <ScoreGauge score={result.score} label={result.scoreLabel} />
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">Tone Breakdown</h2>
                  <div className="h-8 flex rounded-full overflow-hidden mb-4 shadow-inner">
                    {result.overallTones.map((t, i) => (
                      <div key={i} style={{ width: `${Math.max(t.percentage, 2)}%`, backgroundColor: t.color }} className="relative group transition-all" title={`${TONE_LABELS[t.tone]}: ${t.percentage}%`}>
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          {TONE_LABELS[t.tone]}: {t.percentage}%
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {result.overallTones.map((t, i) => (
                      <span key={i} className="inline-flex items-center space-x-1.5 text-xs">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: t.color }}></span>
                        <span className="text-slate-600">{TONE_LABELS[t.tone]} {t.percentage}%</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Suggestions */}
              {result.suggestions.length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-10">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">💡 Suggestions to Improve Your Tone</h3>
                  <ul className="space-y-3">{result.suggestions.map((s, i) => (
                    <li key={i} className="flex items-start space-x-3"><span className="text-orange-500 mt-0.5 font-bold">{i + 1}.</span><span className="text-slate-700">{s}</span></li>
                  ))}</ul>
                </div>
              )}

              {/* Flagged Phrases */}
              {result.flaggedPhrases.length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-10">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">🚩 Flagged Phrases</h3>
                  <div className="space-y-3">{result.flaggedPhrases.map((fp, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 p-3 bg-slate-50 rounded-xl">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border ${TONE_BG[fp.tone]}`}>{TONE_LABELS[fp.tone]}</span>
                      <span className="font-medium text-slate-900">"{fp.phrase}"</span>
                      <span className="text-slate-500 text-sm">→ {fp.suggestion}</span>
                    </div>
                  ))}</div>
                </div>
              )}

              {/* Sentence-by-Sentence */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-10">
                <h3 className="text-lg font-bold text-slate-900 mb-4">📝 Sentence-by-Sentence Analysis</h3>
                <div className="space-y-3">{result.sentences.map((s, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-2 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border whitespace-nowrap self-start ${TONE_BG[s.primaryTone]}`}>
                      {TONE_LABELS[s.primaryTone]}
                    </span>
                    <span className="text-slate-700 text-sm">{s.text}</span>
                  </div>
                ))}</div>
              </div>

              {/* CTA */}
              <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Want to <em>fix</em> your tone instantly?</h3>
                <p className="text-slate-400 mb-6 max-w-xl mx-auto">TextGlow polishes your writing in 2 clicks — right inside Gmail, Slack, and LinkedIn. Choose a tone, click, done.</p>
                <Button href={CHROME_URL} variant="secondary" className="px-8 py-3.5 text-lg !bg-white !text-slate-900 font-bold hover:!bg-orange-50 shadow-[0_0_40px_rgba(255,255,255,0.15)] border-none">
                  <Chrome className="w-5 h-5 mr-2" />Add to Chrome — Free
                </Button>
                <p className="text-xs text-slate-500 mt-4">Free: 10 polishes/day. Pro: 150/day for $39/year.</p>
              </div>

            </div></div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* SEO Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4"><div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Email Tone Matters</h2>
          <div className="prose prose-slate max-w-none">
            <p>In the workplace, <strong>tone is everything</strong>. The same sentence can sound professional, passive-aggressive, or apologetic depending on word choice, phrasing, and formality level. And unlike face-to-face conversation, email gives the reader zero vocal cues, facial expressions, or body language to interpret your intent.</p>
            <p>Research shows that <strong>64% of professionals</strong> have received an email they perceived as rude or hostile — even when the sender had no negative intent (Grammarly Business, 2024). The gap between what you <em>meant</em> and what they <em>read</em> is the #1 source of workplace miscommunication.</p>
            <p>This free email tone analyzer uses <strong>heuristic pattern matching</strong> — analyzing over 150 phrases and sentence patterns — to identify tones like passive-aggression ("per my last email"), over-formality ("I would like to kindly inform you"), and hedging ("I was just wondering if maybe"). It's not AI — it's a carefully curated set of rules built from real-world email communication patterns.</p>
            <p>For instant tone <em>correction</em> (not just detection), try <a href={CHROME_URL} className="text-orange-600 hover:text-orange-700 font-medium">TextGlow</a> — our Chrome extension that rewrites your text in 10 different tones, right inside any text field on the web.</p>
          </div>
        </div></div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4"><div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            <FAQItem q="Is my text stored or sent anywhere?" a="No. The analysis runs 100% in your browser using JavaScript. Your text never leaves your device — nothing is sent to any server." />
            <FAQItem q="How accurate is the tone analysis?" a="The analyzer uses heuristic pattern matching with over 150 curated phrases and sentence patterns. It catches the most common tone signals in professional email. For nuanced or context-dependent tone, we recommend pairing it with TextGlow's AI-powered polishing." />
            <FAQItem q="What tones can it detect?" a="Professional, Friendly, Confident, Passive-Aggressive, Apologetic, Urgent, Formal, Casual, Blunt, and Neutral. Each is detected through specific phrase patterns and sentence-level signals." />
            <FAQItem q="How is this different from Grammarly?" a="Grammarly checks grammar and spelling. This tool checks tone — whether your email sounds passive-aggressive, overly formal, or apologetic. They solve different problems." />
            <FAQItem q="Can I use this for Slack messages too?" a="Absolutely. While it's optimized for email, it works for any text — Slack messages, LinkedIn posts, cover letters, or any professional writing." />
          </div>
        </div></div>
      </section>
    </div>
  );
};
