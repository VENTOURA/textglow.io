import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const tools = [
  { title: 'Email Tone Analyzer', description: 'Paste your email and instantly see its tone breakdown — passive-aggressive, apologetic, too formal, or just right.', icon: '🎭', href: '/tools/email-tone-analyzer', color: 'from-orange-500 to-red-500' },
  { title: 'Word Counter & Readability Checker', description: 'Count words, characters, sentences. Check readability score, grade level, and platform character limits — all in real time.', icon: '📊', href: '/tools/word-counter', color: 'from-cyan-500 to-blue-500' },
];

export const Tools = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Free Writing Tools — Word Counter, Tone Analyzer & More | TextGlow</title>
        <meta name="description" content="Improve your writing with free, instant, browser-based tools. Analyze email tone, count words, check readability — no signup required. 100% private." />
        <link rel="canonical" href="https://textglow.io/tools" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Free Writing Tools | TextGlow" />
        <meta property="og:description" content="Free, instant, browser-based writing tools. No signup required." />
        <meta property="og:url" content="https://textglow.io/tools" />
        <meta property="og:image" content="https://textglow.io/og-image.png" />
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
