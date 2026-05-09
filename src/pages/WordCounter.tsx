import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Sparkles, Chrome, ChevronDown, ChevronUp, Copy, Trash2, Check } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { getTextStats, analyzeReadability, checkPlatformLimits, getWordFrequency } from '../utils/readabilityAnalyzer';
import type { TextStats, ReadabilityResult, PlatformLimit, WordFrequency } from '../utils/readabilityAnalyzer';

const CHROME_URL = "https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf";

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

const StatBox = ({ label, value, sub }: { label: string; value: string | number; sub?: string }) => (
  <div className="text-center px-3 py-2">
    <div className="text-2xl font-bold text-slate-900 transition-all">{value}</div>
    <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">{label}</div>
    {sub && <div className="text-xs text-slate-400">{sub}</div>}
  </div>
);

const ReadabilityGauge = ({ score, level }: { score: number; level: string }) => {
  const pct = Math.min(100, Math.max(0, score));
  const color = pct >= 70 ? 'text-green-600' : pct >= 50 ? 'text-yellow-600' : 'text-red-600';
  const bg = pct >= 70 ? 'bg-green-500' : pct >= 50 ? 'bg-yellow-500' : 'bg-red-500';
  return (
    <div className="mb-4">
      <div className="flex justify-between items-end mb-2">
        <div><span className={`text-3xl font-bold ${color}`}>{score}</span><span className="text-slate-400 text-sm">/100</span></div>
        <span className={`text-sm font-semibold ${color}`}>{level}</span>
      </div>
      <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${bg} transition-all duration-500`} style={{ width: `${pct}%` }}></div>
      </div>
      <div className="flex justify-between text-xs text-slate-400 mt-1"><span>Hard</span><span>Standard</span><span>Easy</span></div>
    </div>
  );
};

export const WordCounter = () => {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);
  const [showAllPlatforms, setShowAllPlatforms] = useState(false);
  const [showFrequency, setShowFrequency] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Instant stats
  const stats: TextStats = useMemo(() => getTextStats(text), [text]);

  // Debounced readability
  const [readability, setReadability] = useState<ReadabilityResult | null>(null);
  const [platforms, setPlatforms] = useState<PlatformLimit[]>([]);
  const [frequency, setFrequency] = useState<WordFrequency[]>([]);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      if (text.trim()) {
        setReadability(analyzeReadability(text));
        setPlatforms(checkPlatformLimits(text));
        setFrequency(getWordFrequency(text));
      } else {
        setReadability(null); setPlatforms([]); setFrequency([]);
      }
    }, 300);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [text]);

  // Auto-expand textarea
  useEffect(() => {
    const el = textareaRef.current;
    if (el) { el.style.height = 'auto'; el.style.height = Math.min(el.scrollHeight, 500) + 'px'; }
  }, [text]);

  const handleCopy = useCallback(() => {
    const r = readability;
    const summary = `Words: ${stats.words} | Characters: ${stats.characters} | Reading time: ${stats.readingTimeMinutes} min${r ? ` | Grade level: ${r.fleschKincaidGrade} | Readability: ${r.fleschReadingEase}/100 (${r.readingLevel})` : ''}`;
    navigator.clipboard.writeText(summary); setCopied(true); setTimeout(() => setCopied(false), 2000);
  }, [stats, readability]);

  const relevantPlatforms = platforms.filter(p => p.relevant);
  const otherPlatforms = platforms.filter(p => !p.relevant);
  const maxFreq = frequency[0]?.count || 1;

  const jsonLd = { "@context": "https://schema.org", "@type": "WebApplication", "name": "Word Counter & Readability Checker", "description": "Count words, characters, sentences, and check readability — free and private.", "url": "https://textglow.io/tools/word-counter/", "applicationCategory": "UtilityApplication", "operatingSystem": "Web", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" } };

  return (
    <div className="bg-white">
      <Helmet>
        <title>Free Word Counter & Readability Checker — Character Count, Reading Time | TextGlow</title>
        <meta name="description" content="Count words, characters, sentences, and paragraphs. Check readability score, grade level, and platform character limits. Free, instant, private. No signup required." />
        <link rel="canonical" href="https://textglow.io/tools/word-counter/" />
        <meta property="og:type" content="website" /><meta property="og:title" content="Free Word Counter & Readability Checker | TextGlow" />
        <meta property="og:description" content="Count words, characters, sentences. Check readability and platform limits. Free, instant, private." />
        <meta property="og:url" content="https://textglow.io/tools/word-counter/" /><meta property="og:image" content="https://textglow.io/og-image.png" />
        <meta property="twitter:card" content="summary_large_image" /><meta property="twitter:title" content="Free Word Counter & Readability Checker | TextGlow" />
        <meta property="twitter:description" content="Count words, characters, sentences. Check readability and platform limits. Free, instant, private." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero + Input */}
      <section className="pt-20 pb-8 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4"><div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" /><span>Free Tool</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">Word Counter & Readability Checker</h1>
            <p className="text-lg text-slate-300">Count words, check character limits, and analyze readability — instantly, as you type.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="relative">
            <textarea ref={textareaRef} value={text} onChange={e => setText(e.target.value)} placeholder="Start typing or paste your text here..."
              rows={8} style={{ minHeight: '200px', maxHeight: '500px' }}
              className="w-full rounded-2xl border border-slate-600 bg-slate-800/50 text-white placeholder-slate-500 p-5 text-base focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none" />
            <div className="absolute top-3 right-3 flex space-x-2">
              {text && (<><button onClick={handleCopy} className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors" title="Copy stats">
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </button>
              <button onClick={() => setText('')} className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors" title="Clear">
                <Trash2 className="w-4 h-4" />
              </button></>)}
            </div>
            <p className="text-xs text-slate-500 mt-2 text-center">🔒 100% private — your text never leaves your browser.</p>
          </motion.div>
        </div></div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center divide-x divide-slate-200 py-2">
            <StatBox label="Words" value={stats.words.toLocaleString()} />
            <StatBox label="Characters" value={stats.characters.toLocaleString()} sub={`${stats.charactersNoSpaces.toLocaleString()} no spaces`} />
            <StatBox label="Sentences" value={stats.sentences} />
            <StatBox label="Paragraphs" value={stats.paragraphs} />
            <StatBox label="Reading" value={stats.words ? `${stats.readingTimeMinutes} min` : '—'} />
            <StatBox label="Speaking" value={stats.words ? `${stats.speakingTimeMinutes} min` : '—'} />
          </div>
        </div>
      </section>

      {/* Results */}
      {text.trim() ? (
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4"><div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-8">

              {/* Platform Limits */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-4">📐 Platform Limits</h2>
                {relevantPlatforms.length > 0 ? (
                  <div className="space-y-2 mb-3">{relevantPlatforms.map((p, i) => (
                    <div key={i} className={`flex items-center justify-between p-3 rounded-xl text-sm ${p.isOver ? 'bg-red-50 border border-red-100' : 'bg-green-50 border border-green-100'}`}>
                      <span className="flex items-center space-x-2"><span>{p.icon}</span><span className="font-medium text-slate-800">{p.platform}</span></span>
                      <span className={`font-semibold ${p.isOver ? 'text-red-600' : 'text-green-600'}`}>
                        {p.isOver ? `${Math.abs(p.difference)} over` : `${p.difference} left`}
                        <span className="text-slate-400 font-normal ml-1">/ {p.limit}</span>
                      </span>
                    </div>
                  ))}</div>
                ) : <p className="text-sm text-slate-500 mb-3">Your text is well within all platform limits.</p>}
                {otherPlatforms.length > 0 && (
                  <button onClick={() => setShowAllPlatforms(!showAllPlatforms)} className="text-sm text-cyan-600 hover:text-cyan-700 font-medium flex items-center space-x-1">
                    <span>{showAllPlatforms ? 'Hide' : 'Show'} all platforms</span>
                    {showAllPlatforms ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                )}
                {showAllPlatforms && otherPlatforms.length > 0 && (
                  <div className="space-y-2 mt-3">{otherPlatforms.map((p, i) => (
                    <div key={i} className="flex items-center justify-between p-2 rounded-lg text-xs text-slate-500">
                      <span className="flex items-center space-x-2"><span>{p.icon}</span><span>{p.platform}</span></span>
                      <span className="text-green-500">✓ {p.difference.toLocaleString()} left / {p.limit.toLocaleString()}</span>
                    </div>
                  ))}</div>
                )}
              </div>

              {/* Readability */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-4">📊 Readability</h2>
                {readability && readability.readingLevel !== 'N/A' ? (<>
                  <ReadabilityGauge score={readability.fleschReadingEase} level={readability.readingLevel} />
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-slate-50 rounded-xl p-3 text-center">
                      <div className="text-lg font-bold text-slate-900">Grade {readability.fleschKincaidGrade}</div>
                      <div className="text-xs text-slate-500">Reading Level</div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-3 text-center">
                      <div className="text-lg font-bold text-slate-900">{readability.avgSentenceLength}</div>
                      <div className="text-xs text-slate-500">Words/Sentence</div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-3 text-center">
                      <div className="text-lg font-bold text-slate-900">{readability.avgSyllablesPerWord}</div>
                      <div className="text-xs text-slate-500">Syllables/Word</div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-3 text-center">
                      <div className="text-lg font-bold text-slate-900">{readability.complexWordPercentage}%</div>
                      <div className="text-xs text-slate-500">Complex Words</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 bg-cyan-50 border border-cyan-100 rounded-xl p-3">💡 {readability.recommendation}</p>
                </>) : <p className="text-sm text-slate-500">Add more text (5+ words) for readability analysis.</p>}
              </div>
            </div>

            {/* Long Sentences */}
            {readability && readability.longSentences.length > 0 && (
              <div className="bg-white rounded-2xl border border-yellow-200 p-6 mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-3">⚠️ Long Sentences ({readability.longSentences.length})</h3>
                <p className="text-sm text-slate-500 mb-4">Sentences over 25 words can be hard to follow. Consider breaking these up.</p>
                <div className="space-y-3">{readability.longSentences.map((ls, i) => (
                  <div key={i} className="p-3 bg-yellow-50 rounded-xl border border-yellow-100">
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-yellow-200 text-yellow-800 mr-2 mb-1">{ls.wordCount} words</span>
                    <span className="text-sm text-slate-700">{ls.text}</span>
                  </div>
                ))}</div>
              </div>
            )}

            {/* Word Frequency */}
            {frequency.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <button onClick={() => setShowFrequency(!showFrequency)} className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors">
                  <h3 className="text-lg font-bold text-slate-900">🔤 Top Words</h3>
                  {showFrequency ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>
                {showFrequency && (
                  <div className="px-6 pb-6 space-y-2">{frequency.map((w, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <span className="w-24 text-sm text-slate-700 font-medium truncate">{w.word}</span>
                      <div className="flex-1 h-5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-500 rounded-full transition-all" style={{ width: `${(w.count / maxFreq) * 100}%` }}></div>
                      </div>
                      <span className="text-sm text-slate-500 w-8 text-right">{w.count}</span>
                    </div>
                  ))}</div>
                )}
              </div>
            )}

            {/* CTA */}
            <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center mt-8">
              <h3 className="text-2xl font-bold text-white mb-3">Your text has the right length — but does it have the right <em>tone</em>?</h3>
              <p className="text-slate-400 mb-6 max-w-xl mx-auto">TextGlow polishes your writing in 2 clicks — right inside Gmail, Slack, and LinkedIn. Choose a tone, click, done.</p>
              <Button href={CHROME_URL} variant="secondary" className="px-8 py-3.5 text-lg !bg-white !text-slate-900 font-bold hover:!bg-cyan-50 shadow-[0_0_40px_rgba(255,255,255,0.15)] border-none">
                <Chrome className="w-5 h-5 mr-2" />Add to Chrome — Free
              </Button>
              <p className="text-xs text-slate-500 mt-4">Free: 10 polishes/day. Pro: 150/day for $39/year.</p>
            </div>
          </div></div>
        </section>
      ) : (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 text-center">
            <p className="text-slate-400 text-lg">✍️ Start typing or paste text above to see your stats</p>
          </div>
        </section>
      )}

      {/* SEO Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4"><div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Word Count and Readability Matter</h2>
          <div className="prose prose-slate max-w-none">
            <p>Every platform has its limits. A tweet caps at <strong>280 characters</strong>, a LinkedIn post at <strong>3,000</strong>, and even email subject lines perform best under <strong>60 characters</strong>. Knowing your word count isn't just about fitting — it's about optimizing for engagement.</p>
            <p><strong>Readability</strong> is equally critical. The Flesch-Kincaid reading ease score measures how easy your text is to understand. Business writing should target <strong>Grade 8 readability</strong> — the same level used by major newspapers and successful marketing copy. Every grade level above that costs you readers.</p>
            <p>Research from Boomerang found that emails written at a <strong>3rd-grade reading level</strong> receive 36% more responses than those at a college level. Simpler doesn't mean dumbed-down — it means <em>clearer</em>. Short sentences, common words, and direct phrasing make your message land faster.</p>
            <p>This tool gives you the numbers. For the fix, try <a href={CHROME_URL} className="text-cyan-600 hover:text-cyan-700 font-medium">TextGlow</a> — our Chrome extension that rewrites your text in 10 different tones, right inside any text field. Check your readability here, then polish it with TextGlow.</p>
          </div>
        </div></div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4"><div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            <FAQItem q="Is my text stored or sent anywhere?" a="No. Everything runs in your browser using JavaScript. No data is sent to any server — your text never leaves your device." />
            <FAQItem q="What is Flesch-Kincaid readability?" a="It's a formula that estimates how difficult a text is to read based on sentence length and syllable count. A score of 60-70 (Standard) is ideal for most business writing. Higher = easier, lower = harder." />
            <FAQItem q="What's the ideal word count for an email?" a="Research shows 50-125 words is the sweet spot for emails that get responses (Boomerang data). Shorter emails respect the reader's time and get faster replies." />
            <FAQItem q="What's the ideal readability level?" a="Grade 8-9 (Flesch-Kincaid), which is what most newspapers, business publications, and marketing copy targets. Write for clarity, not complexity." />
            <FAQItem q="Does this work for languages other than English?" a="Word and character counting works for any language. Readability scores (Flesch-Kincaid) are calibrated for English text — the syllable counting and formulas assume English patterns." />
            <FAQItem q="How are syllables counted?" a="We use English linguistic rules: counting vowel groups, handling silent E, special endings (-ed, -le, -tion), plus a dictionary of common exceptions. It's not perfect for every word, but highly accurate for standard English." />
          </div>
        </div></div>
      </section>
    </div>
  );
};
