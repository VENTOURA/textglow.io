import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const tools = [
  { title: 'Email Rewriter (Live Demo)', description: 'Paste your email, pick from 10 tones, and see it rewritten instantly using the TextGlow AI engine.', icon: '✨', href: '/tools/email-rewriter/', color: 'from-brand-500 to-indigo-500' },
  { title: 'Email Tone Analyzer', description: 'Paste your email and instantly see its tone breakdown — passive-aggressive, apologetic, too formal, or just right.', icon: '🎭', href: '/tools/email-tone-analyzer/', color: 'from-orange-500 to-red-500' },
  { title: 'Word Counter & Readability Checker', description: 'Count words, characters, sentences. Check readability score, grade level, and platform character limits — all in real time.', icon: '📊', href: '/tools/word-counter/', color: 'from-cyan-500 to-blue-500' },
  { title: 'Formality Level Checker', description: 'Paste your text. See if it is too formal, too casual, or just right — with specific phrases flagged and suggestions to adjust.', icon: '⚖️', href: '/tools/formality-checker/', color: 'from-purple-500 to-fuchsia-500' },
  { title: 'LinkedIn Post Preview & Scorer', description: 'Preview your LinkedIn post exactly as it will appear on desktop and mobile. Get scored on hook strength, length, readability, and formatting.', icon: '💼', href: '/tools/linkedin-post-preview/', color: 'from-blue-600 to-cyan-500' },
  { title: 'Cold Email Generator', description: 'Fill in your details. Get 3 ready-to-send cold emails in Professional, Persuasive, and Friendly tones — instantly.', icon: '✉️', href: '/tools/cold-email-generator/', color: 'from-emerald-500 to-teal-500' },
  { title: 'Corporate Jargon Translator', description: 'Paste corporate-speak and get plain English. See every buzzword replaced, get a jargon score, and laugh at what your emails really mean.', icon: '👔', href: '/tools/jargon-translator/', color: 'from-pink-500 to-rose-500' },
  { title: 'AI Writing Detector', description: 'Paste your text and find out if it sounds AI-generated. Get a 0-100 score, specific phrases flagged, and human alternatives suggested.', icon: '🤖', href: '/tools/ai-writing-detector/', color: 'from-indigo-500 to-purple-600' },
  { title: 'Passive-Aggressive Checker', description: 'Paste your email and find out if it sounds passive-aggressive. Get a score, subtext explanations, and polite rewrite suggestions.', icon: '🔥', href: '/tools/passive-aggressive-checker/', color: 'from-red-500 to-orange-500' },
  { title: 'Gen Z ↔ Corporate Translator', description: 'Translate Gen Z slang to corporate speak and back. "No cap" → "I assure you this is accurate." Free, fun, and instant.', icon: '💅', href: '/tools/genz-translator/', color: 'from-fuchsia-500 to-pink-500' },
  { title: 'Email Subject Line Scorer', description: 'Score your email subject line instantly. Check length, spam triggers, personalization, and engagement. Get 3 improved alternatives.', icon: '✉️', href: '/tools/subject-line-scorer/', color: 'from-blue-500 to-cyan-500' },
  { title: 'Out-of-Office Generator', description: 'Create the perfect out-of-office message in seconds. 10 scenarios, 6 tones, instantly copyable.', icon: '🌴', href: '/tools/out-of-office/', color: 'from-teal-500 to-emerald-600' },
  { title: 'Writing Personality Quiz', description: 'Discover your writing personality type in 10 questions. Are you The Diplomat, The Commander, or The Ghost? Find out and get a shareable profile.', icon: '🧠', href: '/tools/writing-quiz/', color: 'from-emerald-500 to-teal-500' },
  { title: 'Writing Examples Gallery', description: 'Browse 100+ real before/after writing examples showing how TextGlow transforms emails, Slack messages, and LinkedIn posts.', icon: '📚', href: '/tools/examples/', color: 'from-amber-500 to-yellow-500' },
];

export const Tools = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Free AI Writing Tools & Converters | TextGlow</title>
        <meta name="description" content="A collection of free tools to analyze tone, count words, generate cold emails, and more. All powered by TextGlow AI." />
        <link rel="canonical" href="https://textglow.io/tools/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://textglow.io/tools/" />
        <meta property="og:title" content="Free AI Writing Tools & Converters | TextGlow" />
        <meta property="og:description" content="A collection of free tools to analyze tone, count words, generate cold emails, and more. All powered by TextGlow AI." />
        <meta property="og:image" content="https://textglow.io/og-image.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Free AI Writing Tools & Converters | TextGlow" />
        <meta property="twitter:description" content="A collection of free tools to analyze tone, count words, generate cold emails, and more. All powered by TextGlow AI." />
      </Helmet>

      <section className="pt-24 pb-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" /><span>100% Free & Private</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Free Writing Tools</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-lg text-slate-300 max-w-2xl mx-auto">Improve your writing with instant, browser-based tools. No signup required — your text never leaves your device.</motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4"><div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {tools.map((tool, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={tool.href} className="block bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg hover:border-slate-300 transition-all group">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-2xl mb-5`}>{tool.icon}</div>
                  <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">{tool.title}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed">{tool.description}</p>
                  <span className="inline-block mt-4 text-sm font-semibold text-cyan-600 group-hover:translate-x-1 transition-transform">Try it free →</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div></div>
      </section>
    </div>
  );
};
