import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Sparkles, Chrome, Quote, ChevronDown, ChevronUp, Check, X } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useState } from 'react';
import { toneTable, useCases, testimonials, faqs, comparisonTable } from './translate-data';

const CHROME_URL = "https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf";

const FAQItem = ({ q, a }: { q: string; a: string }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-slate-200 rounded-2xl overflow-hidden transition-all">
            <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors">
                <span className="text-lg font-semibold text-slate-900 pr-4">{q}</span>
                {open ? <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />}
            </button>
            {open && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="px-6 pb-6"><p className="text-slate-600 leading-relaxed">{a}</p></motion.div>)}
        </div>
    );
};

export const Translate = () => {
    return (
        <div className="bg-white">
            <Helmet>
                <title>AI Writing Tool for Non-Native English Speakers — Sound Like a Native | TextGlow</title>
                <meta name="description" content="You think in your language but write in English. Grammarly fixes grammar — TextGlow fixes how you sound. Polish your English writing to native fluency in 2 clicks. Free Chrome extension." />
                <link rel="canonical" href="https://textglow.io/translate" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="AI Writing Tool for Non-Native English Speakers | TextGlow" />
                <meta property="og:description" content="You think in your language but write in English. TextGlow fixes how you sound — not just your grammar." />
                <meta property="og:url" content="https://textglow.io/translate" />
                <meta property="og:image" content="https://textglow.io/og-image.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="AI Writing Tool for Non-Native Speakers | TextGlow" />
                <meta property="twitter:description" content="You think in your language but write in English. TextGlow fixes how you sound." />
            </Helmet>

            <section className="relative pt-24 pb-32 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-32 left-1/4 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-600/15 rounded-full blur-[100px]"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10"><div className="max-w-4xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8">
                        <Sparkles className="w-4 h-4" /><span>AI Fluency Assistant</span>
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                        You Think in Your Language. You Write in English.{' '}<span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">The Gap Is Costing You.</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Your English is good. Your grammar is mostly fine. But your emails sound stiff, your Slack messages feel robotic, and your LinkedIn posts don't carry the warmth you'd have in your native language. TextGlow closes the gap between "grammatically correct" and "sounds like a native speaker" — in 2 clicks.
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                        <Button href={CHROME_URL} className="px-10 py-4 text-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_0_40px_rgba(16,185,129,0.35)]">
                            <Chrome className="w-5 h-5 mr-2" />Add to Chrome — Free
                        </Button>
                    </motion.div>
                </div></div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4"><div className="max-w-3xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Grammarly Fixes Your Grammar. Nobody Fixes <span className="text-emerald-600">How You Sound.</span></h2>
                        <p className="text-lg text-slate-600 mb-8">You already speak English well enough to work at an international company. Your grammar is fine. So why do your written messages still feel... <em>off?</em> Because there's a gap between <strong>correct English</strong> and <strong>natural English</strong>.</p>
                        <div className="space-y-4 mb-10">
                            {['You write "I would like to kindly request..." when a native speaker would write "Hey, quick ask —"', 'You write "Please find attached the document" when they\'d write "Here\'s the doc!"', 'You structure sentences the way your native language works — and it reads as awkward', 'You spend 3x longer writing emails — not because you\'re slow, but because you\'re mentally translating'].map((item, i) => (
                                <div key={i} className="flex items-start space-x-3 p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                                    <span className="text-emerald-500 mt-0.5 text-lg">🌍</span><span className="text-slate-700">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mb-10">
                            <p className="text-emerald-900 font-medium text-lg mb-0">This isn't a grammar problem. It's a fluency problem. TextGlow takes what you wrote and makes it sound like a native speaker wrote it — in 2 clicks.</p>
                        </div>
                        <div className="grid sm:grid-cols-3 gap-6">
                            {[{ stat: "1.5B", desc: "people speak English as a second language — outnumbering native speakers 3 to 1", source: "British Council" }, { stat: "30-50%", desc: "more time spent on written communication by non-native professionals", source: "Harvard Business Review" }, { stat: "76%", desc: "of non-native speakers misunderstood due to tone, not grammar", source: "EF English, 2025" }].map((s, i) => (
                                <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center">
                                    <div className="text-2xl font-bold text-emerald-600 mb-2">{s.stat}</div>
                                    <p className="text-sm text-slate-600 mb-1">{s.desc}</p><p className="text-xs text-slate-400 italic">{s.source}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div></div>
            </section>

            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4"><div className="max-w-5xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">From "Correct but Awkward" to <span className="text-emerald-600">"Sounds Completely Native"</span></h2>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {[{ step: "1", title: "Write naturally", desc: "Write in English the way it comes to you. Don't overthink it.", icon: "✍️" }, { step: "2", title: "Click the ✨ icon", desc: "TextGlow appears in any text field — Gmail, Slack, LinkedIn, anywhere.", icon: "✨" }, { step: "3", title: "Choose your tone", desc: "Your text is replaced with native-sounding English instantly.", icon: "🎯" }].map((s, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                                <div className="text-4xl mb-4">{s.icon}</div>
                                <div className="inline-flex items-center justify-center w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold mb-4">{s.step}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3><p className="text-slate-600">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                            <table className="min-w-full bg-white">
                                <thead><tr className="bg-slate-50 border-b border-slate-200">
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Tone</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">When You Need It</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">What It Fixes</th>
                                </tr></thead>
                                <tbody className="divide-y divide-slate-100">{toneTable.map((row, i) => (
                                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="px-6 py-4"><span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${row.color}`}>{row.tone}</span></td>
                                        <td className="px-6 py-4 text-sm text-slate-600">{row.when}</td>
                                        <td className="px-6 py-4 text-sm text-slate-700">{row.fixes}</td>
                                    </tr>
                                ))}</tbody>
                            </table>
                        </div>
                    </motion.div>
                </div></div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4"><div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Real Transformations: <span className="text-emerald-600">Non-Native → Native-Sounding</span></h2>
                    </motion.div>
                    <div className="space-y-8">{useCases.map((uc, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
                            <div className="p-6 md:p-8">
                                <div className="flex items-center space-x-3 mb-2"><span className="text-2xl">{uc.emoji}</span><h3 className="text-xl font-bold text-slate-900">{uc.title}</h3></div>
                                <p className="text-sm text-slate-500 italic mb-6 ml-11">{uc.context}</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-white rounded-xl p-5 border border-slate-200">
                                        <div className="flex items-center space-x-2 mb-3"><div className="w-2 h-2 bg-slate-400 rounded-full"></div><span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">You type</span></div>
                                        <p className="text-slate-600 italic text-sm">"{uc.before}"</p>
                                    </div>
                                    <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
                                        <div className="flex items-center space-x-2 mb-3"><div className="w-2 h-2 bg-emerald-400 rounded-full"></div><span className="text-xs font-semibold text-emerald-500 uppercase tracking-wider">TextGlow ({uc.tone})</span></div>
                                        <p className="text-slate-800 text-sm">"{uc.after}"</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}</div>
                </div></div>
            </section>

            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-4"><div className="max-w-3xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">The Fluency Gap: Why Grammar Checkers <span className="text-emerald-400">Aren't Enough</span></h2>
                        <p className="text-lg text-slate-300 mb-6">Written English has a different standard. There's no body language or accent to fill in the gaps. On screen, people only see your words.</p>
                        <div className="space-y-4 mb-12">
                            {["In job applications: hiring managers unconsciously favor resumes that \"flow better\"", "In client emails: awkward phrasing can make you seem less experienced", "In team chat: colleagues may misread your tone as cold or blunt", "In performance reviews: \"communication skills\" is a top-3 competency"].map((item, i) => (
                                <div key={i} className="flex items-start space-x-3 text-slate-300"><span className="text-emerald-400 mt-1">→</span><span>{item}</span></div>
                            ))}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">Grammarly vs TextGlow</h3>
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="min-w-full">
                                <thead><tr className="bg-white/5 border-b border-white/10">
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Feature</th>
                                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-400">Grammarly</th>
                                    <th className="px-6 py-4 text-center text-sm font-semibold text-emerald-400">TextGlow</th>
                                </tr></thead>
                                <tbody className="divide-y divide-white/5">{comparisonTable.map((row, i) => (
                                    <tr key={i}>
                                        <td className="px-6 py-3 text-sm text-slate-300">{row.feature}</td>
                                        <td className="px-6 py-3 text-center">{row.grammarly ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-slate-600 mx-auto" />}</td>
                                        <td className="px-6 py-3 text-center"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                                    </tr>
                                ))}</tbody>
                            </table>
                        </div>
                    </motion.div>
                </div></div>
            </section>

            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4"><div className="max-w-5xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Non-Native Speakers Are Saying</h2>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-8">{testimonials.map((t, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                            <Quote className="w-8 h-8 text-emerald-200 mb-4" />
                            <p className="text-slate-700 mb-6 leading-relaxed italic">"{t.quote}"</p>
                            <div className="border-t border-slate-100 pt-4"><p className="font-semibold text-slate-900 text-sm">{t.author}</p><p className="text-slate-500 text-xs">{t.context}</p></div>
                        </motion.div>
                    ))}</div>
                </div></div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4"><div className="max-w-3xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                    </motion.div>
                    <div className="space-y-4">{faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}</div>
                </div></div>
            </section>

            <section className="py-24 bg-slate-900">
                <div className="container mx-auto px-4"><div className="max-w-3xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Your Ideas Deserve to Be Heard —{' '}<span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Not Lost in Translation</span></h2>
                        <p className="text-slate-400 mb-4">You're not learning English. You already speak it. You just need the last 10%.</p>
                        <p className="text-lg text-slate-400 mb-10">Free to use. 10 polishes per day. No signup required.</p>
                        <Button href={CHROME_URL} variant="secondary" className="px-10 py-4 text-lg !bg-white !text-emerald-700 font-bold hover:!bg-emerald-50 shadow-[0_0_50px_rgba(255,255,255,0.2)] border-none">
                            <Chrome className="w-5 h-5 mr-2" />Add to Chrome — It's Free
                        </Button>
                    </motion.div>
                </div></div>
            </section>
        </div>
    );
};
