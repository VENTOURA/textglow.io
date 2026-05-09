import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Sparkles, Chrome, Quote, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useState } from 'react';

const CHROME_URL = "https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf";

const toneTable = [
    { tone: "Professional", best: "Messages to leadership, cross-team updates", example: "\"I'd like to flag a potential timeline risk on Project Atlas and suggest we discuss priorities in tomorrow's sync.\"", color: "bg-blue-50 text-blue-700 border-blue-200" },
    { tone: "Friendly", best: "Teammate check-ins, casual channels", example: "\"Hey team! Just wanted to loop everyone in on where we're at — making great progress!\"", color: "bg-green-50 text-green-700 border-green-200" },
    { tone: "Direct", best: "Deadline reminders, blockers, urgent requests", example: "\"We need the API keys by EOD Thursday or the release slips. Can you confirm?\"", color: "bg-red-50 text-red-700 border-red-200" },
    { tone: "Concise", best: "Quick replies, busy threads", example: "\"Confirmed. Will have it ready by 3pm.\"", color: "bg-slate-50 text-slate-700 border-slate-200" },
    { tone: "Empathetic", best: "Difficult conversations, feedback", example: "\"I totally understand the frustration — let's figure out a path forward that works for everyone.\"", color: "bg-purple-50 text-purple-700 border-purple-200" },
    { tone: "Polite", best: "Cross-cultural teams, client-facing channels", example: "\"Thank you for sharing this. I'd love to explore this further when you have a moment.\"", color: "bg-amber-50 text-amber-700 border-amber-200" },
];

const useCases = [
    { title: "The Monday Morning Standup", emoji: "📋", before: "did stuff on the project, fixing bugs now", tone: "Professional", after: "Last week I resolved 3 critical bugs in the payment module and began QA testing. This week I'm focused on completing the integration tests and preparing for the staging deploy." },
    { title: "The Difficult Feedback DM", emoji: "💬", before: "your PR has a lot of problems and needs a rewrite", tone: "Empathetic", after: "I went through your PR — there's some solid work in there. I've left a few comments on areas where I think we can strengthen the approach. Happy to pair on it if that's helpful." },
    { title: "The Cross-Team Request", emoji: "🤝", before: "hey can you send me the design files I need them asap", tone: "Polite", after: "Hi! Would you be able to share the latest design files when you get a chance? We're aiming to start implementation this week, so having them by Wednesday would be ideal." },
    { title: "The #General Channel Announcement", emoji: "📢", before: "we shipped the new feature go check it out", tone: "Friendly", after: "Excited to share that the new dashboard feature just went live! 🎉 Go check it out and let us know what you think. Huge thanks to everyone who contributed." },
];

const testimonials = [
    { quote: "I used to spend more time editing my Slack messages than writing code. TextGlow literally gives me 30 minutes back every day.", author: "Software Engineer", context: "Remote team" },
    { quote: "English is my second language and I always worried my Slack messages sounded too blunt. TextGlow's Polite tone is a lifesaver.", author: "Product Designer", context: "Berlin" },
    { quote: "Installed it for myself, now my whole team uses it. Our Slack communication got noticeably better within a week.", author: "Engineering Manager", context: "Series B startup" },
];

const faqs = [
    { q: "Does TextGlow work in Slack's desktop app?", a: "TextGlow works in Slack's web version (app.slack.com) in any browser where the Chrome extension is installed. The native Slack desktop app is not currently supported — but most teams can access Slack via the browser with the same experience." },
    { q: "Can my teammates or manager see that I'm using TextGlow?", a: "No. TextGlow rewrites your text before you hit send. The rewritten message appears as if you typed it yourself. No watermarks, no signatures, no traces." },
    { q: "Does TextGlow read my Slack messages or DMs?", a: "No. TextGlow only processes the text you actively choose to rewrite. It does not monitor, read, or store your Slack conversations. Your text is processed ephemerally and never saved." },
    { q: "Does it work in Slack threads and DMs?", a: "Yes. TextGlow works in any text input field in Slack's web version — channels, threads, DMs, and even Slack Connect conversations with external partners." },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-slate-200 rounded-2xl overflow-hidden transition-all">
            <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors">
                <span className="text-lg font-semibold text-slate-900 pr-4">{q}</span>
                {open ? <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />}
            </button>
            {open && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="px-6 pb-6">
                    <p className="text-slate-600 leading-relaxed">{a}</p>
                </motion.div>
            )}
        </div>
    );
};

export const Slack = () => {
    return (
        <div className="bg-white">
            <Helmet>
                <title>AI Writing Assistant for Slack — Sound Professional in Every Message | TextGlow</title>
                <meta name="description" content="Rewrite your Slack messages before sending. TextGlow adjusts your tone in 2 clicks — right inside Slack. Free Chrome extension." />
                <link rel="canonical" href="https://textglow.io/slack/" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://textglow.io/slack/" />
                <meta property="og:title" content="AI Writing Assistant for Slack — Sound Professional in Every Message | TextGlow" />
                <meta property="og:description" content="Rewrite your Slack messages before sending. TextGlow adjusts your tone in 2 clicks — right inside Slack. Free Chrome extension." />
                <meta property="og:image" content="https://textglow.io/og-image.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="AI Writing Assistant for Slack — Sound Professional in Every Message | TextGlow" />
                <meta property="twitter:description" content="Rewrite your Slack messages before sending. TextGlow adjusts your tone in 2 clicks — right inside Slack. Free Chrome extension." />
            </Helmet>

            {/* ───── HERO ───── */}
            <section className="relative pt-24 pb-32 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-32 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[100px]"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-8">
                            <Sparkles className="w-4 h-4" /><span>AI-Powered Slack Assistant</span>
                        </motion.div>
                        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                            Stop Overthinking Every{' '}<span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Slack Message</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                            You've typed it. Deleted it. Retyped it. Changed "Thanks" to "Thank you" to "Appreciate it" and back again. TextGlow ends the Slack anxiety loop — rewrite your tone in 2 clicks, right inside the message box.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                            <Button href={CHROME_URL} className="px-10 py-4 text-lg bg-purple-600 hover:bg-purple-700 text-white shadow-[0_0_40px_rgba(168,85,247,0.35)]">
                                <Chrome className="w-5 h-5 mr-2" />Add to Chrome — Free
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ───── THE PROBLEM ───── */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4"><div className="max-w-3xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">Slack Made Work Faster. It Also Made Work <span className="text-purple-600">Stressful.</span></h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">The average remote worker sends over <strong>200 Slack messages per day</strong>. Each one is a micro-decision about tone:</p>
                        <div className="space-y-4 mb-10">
                            {['Does "Sounds good" sound dismissive?', 'Is "Just following up" passive-aggressive?', 'Will "Per my last message" start a war?', 'Does this emoji make me look unprofessional... or does NO emoji make me look cold?'].map((item, i) => (
                                <div key={i} className="flex items-start space-x-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <span className="text-purple-500 mt-0.5 text-lg">🤔</span><span className="text-slate-700 italic">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">In a physical office, your voice, face, and body language carry <strong>93% of communication</strong>. In Slack, your words carry <strong>100%</strong>.</p>
                        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
                            <p className="text-purple-900 font-medium text-lg mb-0">TextGlow exists because nobody should spend 5 minutes wordsmithing a 2-sentence Slack message.</p>
                        </div>
                    </motion.div>
                </div></div>
            </section>

            {/* ───── HOW IT WORKS ───── */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4"><div className="max-w-5xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Rewrite Any Slack Message in <span className="text-purple-600">2 Clicks</span></h2>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {[{ step: "1", title: "Type your rough message", desc: "Don't overthink it. Just get the words out.", icon: "✍️" }, { step: "2", title: "Click the ✨ icon", desc: "The TextGlow button appears right inside the Slack message box.", icon: "✨" }, { step: "3", title: "Pick your tone", desc: "Choose the tone that matches your intent. Replaced instantly.", icon: "🎯" }].map((s, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                                <div className="text-4xl mb-4">{s.icon}</div>
                                <div className="inline-flex items-center justify-center w-8 h-8 bg-purple-100 text-purple-700 rounded-full text-sm font-bold mb-4">{s.step}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
                                <p className="text-slate-600">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Pick a tone that matches your intent</h3>
                        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                            <table className="min-w-full bg-white">
                                <thead><tr className="bg-slate-50 border-b border-slate-200">
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Tone</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Best For</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Example</th>
                                </tr></thead>
                                <tbody className="divide-y divide-slate-100">
                                    {toneTable.map((row, i) => (
                                        <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                            <td className="px-6 py-4"><span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${row.color}`}>{row.tone}</span></td>
                                            <td className="px-6 py-4 text-sm text-slate-600">{row.best}</td>
                                            <td className="px-6 py-4 text-sm text-slate-700 italic max-w-sm">{row.example}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div></div>
            </section>

            {/* ───── USE CASES ───── */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4"><div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Every Slack Scenario, <span className="text-purple-600">Handled</span></h2>
                    </motion.div>
                    <div className="space-y-8">
                        {useCases.map((uc, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
                                <div className="p-6 md:p-8">
                                    <div className="flex items-center space-x-3 mb-6"><span className="text-2xl">{uc.emoji}</span><h3 className="text-xl font-bold text-slate-900">{uc.title}</h3></div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-white rounded-xl p-5 border border-slate-200">
                                            <div className="flex items-center space-x-2 mb-3"><div className="w-2 h-2 bg-red-400 rounded-full"></div><span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">You type</span></div>
                                            <p className="text-slate-600 italic">"{uc.before}"</p>
                                        </div>
                                        <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
                                            <div className="flex items-center space-x-2 mb-3"><div className="w-2 h-2 bg-purple-400 rounded-full"></div><span className="text-xs font-semibold text-purple-500 uppercase tracking-wider">TextGlow ({uc.tone})</span></div>
                                            <p className="text-slate-800">"{uc.after}"</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div></div>
            </section>

            {/* ───── WHY SLACK ───── */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-4"><div className="max-w-3xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">Why Slack Communication Is <span className="text-purple-400">Harder Than Email</span></h2>
                        <p className="text-lg text-slate-300 mb-6 leading-relaxed">In email, you have time. You can draft, review, sit on it overnight.</p>
                        <p className="text-lg text-slate-300 mb-12 leading-relaxed">In Slack, the expectation is <strong className="text-white">instant</strong>. The typing indicator is showing. Your teammate sees you're online. You don't have the luxury of overthinking — but the consequences of a bad tone are the same.</p>
                        <div className="grid sm:grid-cols-3 gap-6">
                            {[{ stat: "5.3 hrs/day", desc: "spent on messaging platforms by remote workers", source: "RescueTime, 2025" }, { stat: "67%", desc: "of remote employees have misinterpreted a colleague's tone in text", source: "Buffer" }, { stat: "23 min", desc: "to recover focus after a tab-switch to ChatGPT", source: "UC Irvine" }].map((s, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                                    <div className="text-3xl font-bold text-purple-400 mb-2">{s.stat}</div>
                                    <p className="text-sm text-slate-400 mb-2">{s.desc}</p><p className="text-xs text-slate-500 italic">{s.source}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div></div>
            </section>

            {/* ───── SOCIAL PROOF ───── */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4"><div className="max-w-5xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Slack Users Are Saying</h2>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                                <Quote className="w-8 h-8 text-purple-200 mb-4" />
                                <p className="text-slate-700 mb-6 leading-relaxed italic">"{t.quote}"</p>
                                <div className="border-t border-slate-100 pt-4"><p className="font-semibold text-slate-900 text-sm">{t.author}</p><p className="text-slate-500 text-xs">{t.context}</p></div>
                            </motion.div>
                        ))}
                    </div>
                </div></div>
            </section>

            {/* ───── FAQ ───── */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4"><div className="max-w-3xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                    </motion.div>
                    <div className="space-y-4">{faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}</div>
                </div></div>
            </section>

            {/* ───── FINAL CTA ───── */}
            <section className="py-24 bg-slate-900">
                <div className="container mx-auto px-4"><div className="max-w-3xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">Write Slack Messages That Sound Like You —{' '}<span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">But Better</span></h2>
                        <p className="text-lg text-slate-400 mb-10">Free to use. 10 rewrites per day. No signup required. Just install and start writing with confidence.</p>
                        <Button href={CHROME_URL} variant="secondary" className="px-10 py-4 text-lg !bg-white !text-purple-700 font-bold hover:!bg-purple-50 shadow-[0_0_50px_rgba(255,255,255,0.2)] border-none">
                            <Chrome className="w-5 h-5 mr-2" />Add to Chrome — It's Free
                        </Button>
                    </motion.div>
                </div></div>
            </section>
        </div>
    );
};
