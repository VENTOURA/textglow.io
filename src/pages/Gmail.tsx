import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Sparkles, Chrome, Quote, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useState } from 'react';

const CHROME_URL = "https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf";

const toneTable = [
    { tone: "Professional", best: "Client emails, leadership updates, formal replies", example: "\"Thank you for bringing this to my attention. I'll review the proposal and share my feedback by end of day Friday.\"", color: "bg-blue-50 text-blue-700 border-blue-200" },
    { tone: "Friendly", best: "Teammate emails, warm follow-ups, thank-you notes", example: "\"Hey Sarah! Really appreciate you jumping on this so quickly — you're a lifesaver.\"", color: "bg-green-50 text-green-700 border-green-200" },
    { tone: "Concise", best: "Busy executives, quick confirmations, thread replies", example: "\"Confirmed. Will have the updated deck ready by 3pm Thursday.\"", color: "bg-slate-50 text-slate-700 border-slate-200" },
    { tone: "Empathetic", best: "Difficult replies, apologies, sensitive topics", example: "\"I completely understand your frustration, and I appreciate your patience while we work through this.\"", color: "bg-purple-50 text-purple-700 border-purple-200" },
    { tone: "Persuasive", best: "Sales outreach, proposal follow-ups, negotiation", example: "\"Based on the results from our pilot, I believe expanding the partnership would drive significant value for both teams.\"", color: "bg-amber-50 text-amber-700 border-amber-200" },
    { tone: "Direct", best: "Clear deadlines, blockers, escalations", example: "\"We need the signed contract by Friday to meet the Q2 launch date. Please confirm whether that timeline works.\"", color: "bg-red-50 text-red-700 border-red-200" },
];

const useCases = [
    { title: "The Client Follow-Up", emoji: "📧", before: "hey just checking in on the proposal I sent last week", tone: "Professional", after: "Hi [Name], I hope you're doing well. I wanted to follow up on the proposal I shared last week. I'd love to hear your thoughts and answer any questions. Would it be helpful to schedule a quick call this week?" },
    { title: "The Difficult Reply to Your Boss", emoji: "😰", before: "I disagree with the decision and think it's a mistake", tone: "Empathetic", after: "I appreciate the thinking behind this direction. I do have some concerns about how it might impact our timeline — would you be open to discussing a couple of alternative approaches?" },
    { title: "The Salary Negotiation Email", emoji: "💰", before: "I think I should be paid more given my contributions this year", tone: "Confident", after: "I'm proud of the impact I've made this year, including [specific achievement]. Given my expanded responsibilities and the value I've delivered, I'd like to discuss adjusting my compensation. Could we find time this week to talk?" },
    { title: "The Cold Email to a Stranger", emoji: "🤝", before: "hi I saw your company and want to talk about a partnership", tone: "Persuasive", after: "Hi [Name], I've been following [Company]'s work in [space] — really impressive growth. I lead [your role] at [your company], and I see a natural synergy. Would you be open to a 15-minute call to explore potential collaboration?" },
    { title: "The Apology Email", emoji: "🙏", before: "sorry we messed up the order and it was late", tone: "Empathetic", after: "I sincerely apologize for the delay with your order. This fell below the standard we hold ourselves to. We've identified what went wrong and taken steps to prevent it from happening again." },
];

const testimonials = [
    { quote: "I'm a non-native English speaker managing a US-based team. TextGlow is the reason my emails finally sound like me — confident and clear — instead of awkward and over-formal.", author: "Engineering Lead", context: "Remote startup" },
    { quote: "I used to draft important emails in ChatGPT, paste them into Gmail, then spend 10 minutes editing them to sound less robotic. Now I just type my thoughts and let TextGlow handle the tone.", author: "Account Executive", context: "SaaS company" },
    { quote: "My 2025 performance review mentioned that my written communication improved significantly. I didn't tell them it was TextGlow.", author: "Product Manager", context: "Fortune 500" },
];

const faqs = [
    { q: "Does TextGlow work inside Gmail?", a: "Yes. TextGlow works inside Gmail's compose window in any Chromium browser (Chrome, Edge, Brave). The ✨ icon appears whenever you're typing a new email, reply, or forward." },
    { q: "Does it work with Google Workspace / business Gmail?", a: "Yes. TextGlow works with personal Gmail accounts and Google Workspace (business) accounts identically." },
    { q: "Will my company's IT department see that I'm using TextGlow?", a: "TextGlow is a Chrome extension installed on your browser. It does not integrate with your company's Google Workspace admin panel. Your IT team can see the extension is installed but cannot see what you type or polish." },
    { q: "Does TextGlow read all my emails?", a: "No. TextGlow only processes the text you actively choose to polish by clicking the ✨ icon. It does not read, scan, or store your inbox, drafts, or sent emails." },
    { q: "Does it work with other email providers (Outlook, Yahoo)?", a: "Yes. TextGlow works in any web-based email client — Gmail, Outlook.com, Yahoo Mail, ProtonMail, and any other email you access through a browser." },
    { q: "Can it help me write emails from scratch?", a: "TextGlow works best with the \"vomit draft\" method: type your rough thoughts first, then let TextGlow polish them. This is faster than writing from a blank page because your original intent is preserved." },
];

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

export const Gmail = () => {
    return (
        <div className="bg-white">
            <Helmet>
                <title>Free AI Writing Assistant for Gmail — Write Better Emails | TextGlow</title>
                <meta name="description" content="Rewrite your Gmail drafts for better tone and clarity in 2 clicks. TextGlow works natively inside Gmail to help you sound professional, confident, or friendly. Free." />
                <link rel="canonical" href="https://textglow.io/gmail/" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://textglow.io/gmail/" />
                <meta property="og:title" content="Free AI Writing Assistant for Gmail — Write Better Emails | TextGlow" />
                <meta property="og:description" content="Rewrite your Gmail drafts for better tone and clarity in 2 clicks. TextGlow works natively inside Gmail to help you sound professional, confident, or friendly. Free." />
                <meta property="og:image" content="https://textglow.io/og-image.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="Free AI Writing Assistant for Gmail — Write Better Emails | TextGlow" />
                <meta property="twitter:description" content="Rewrite your Gmail drafts for better tone and clarity in 2 clicks. TextGlow works natively inside Gmail to help you sound professional, confident, or friendly. Free." />
            </Helmet>

            <section className="relative pt-24 pb-32 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-32 left-1/4 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-600/15 rounded-full blur-[100px]"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10"><div className="max-w-4xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-8">
                        <Sparkles className="w-4 h-4" /><span>AI-Powered Gmail Assistant</span>
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                        Stop Agonizing Over Every{' '}<span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Email You Send</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        You've stared at a 3-sentence email for 10 minutes. You've Googled "how to politely say no in an email." You've drafted, deleted, and re-drafted the same reply four times. TextGlow fixes your email tone in 2 clicks — right inside Gmail's compose window.
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                        <Button href={CHROME_URL} className="px-10 py-4 text-lg bg-red-600 hover:bg-red-700 text-white shadow-[0_0_40px_rgba(220,38,38,0.35)]">
                            <Chrome className="w-5 h-5 mr-2" />Add to Chrome — Free
                        </Button>
                    </motion.div>
                </div></div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4"><div className="max-w-3xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Email Is the Most Stressful Part of Most People's <span className="text-red-600">Day</span></h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">The average professional sends <strong>40 emails per day</strong> and spends <strong>2.5 hours</strong> writing and reading them (McKinsey). But most of that time isn't spent writing. It's spent <em>rewriting</em>.</p>
                        <div className="space-y-4 mb-10">
                            {['Does "Let me know" sound passive-aggressive?', 'Is "Hope you\'re well" too generic?', 'Should I say "Sorry for the delay" or "Thanks for your patience"?', 'Does this reply to my boss sound defensive?', 'Am I being too formal? Too casual? Too cold?'].map((item, i) => (
                                <div key={i} className="flex items-start space-x-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <span className="text-red-500 mt-0.5 text-lg">🤔</span><span className="text-slate-700 italic">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">You open ChatGPT, copy your draft, write a prompt, copy the response, paste it back into Gmail, and edit it again. That workflow takes <strong>5-6 steps</strong> and kills your focus every time.</p>
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                            <p className="text-red-900 font-medium text-lg mb-0">TextGlow does it in 2 clicks without leaving Gmail.</p>
                        </div>
                    </motion.div>
                </div></div>
            </section>

            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4"><div className="max-w-5xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Polish Any Email in <span className="text-red-600">2 Clicks</span> — Without Leaving Gmail</h2>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {[{ step: "1", title: "Type your email draft", desc: "Don't overthink it — just get your thoughts down in Gmail's compose window.", icon: "✍️" }, { step: "2", title: "Click the ✨ icon", desc: "The TextGlow button appears right inside the compose box.", icon: "✨" }, { step: "3", title: "Choose a tone", desc: "Pick the tone that matches your intent. Your draft is replaced instantly. Hit send.", icon: "🎯" }].map((s, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                                <div className="text-4xl mb-4">{s.icon}</div>
                                <div className="inline-flex items-center justify-center w-8 h-8 bg-red-100 text-red-700 rounded-full text-sm font-bold mb-4">{s.step}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3><p className="text-slate-600">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                            <table className="min-w-full bg-white">
                                <thead><tr className="bg-slate-50 border-b border-slate-200">
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Tone</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Best For</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Example</th>
                                </tr></thead>
                                <tbody className="divide-y divide-slate-100">{toneTable.map((row, i) => (
                                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="px-6 py-4"><span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${row.color}`}>{row.tone}</span></td>
                                        <td className="px-6 py-4 text-sm text-slate-600">{row.best}</td>
                                        <td className="px-6 py-4 text-sm text-slate-700 italic max-w-sm">{row.example}</td>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Every Email Scenario, <span className="text-red-600">Handled</span></h2>
                    </motion.div>
                    <div className="space-y-8">{useCases.map((uc, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
                            <div className="p-6 md:p-8">
                                <div className="flex items-center space-x-3 mb-6"><span className="text-2xl">{uc.emoji}</span><h3 className="text-xl font-bold text-slate-900">{uc.title}</h3></div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-white rounded-xl p-5 border border-slate-200">
                                        <div className="flex items-center space-x-2 mb-3"><div className="w-2 h-2 bg-red-400 rounded-full"></div><span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">You type</span></div>
                                        <p className="text-slate-600 italic">"{uc.before}"</p>
                                    </div>
                                    <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                                        <div className="flex items-center space-x-2 mb-3"><div className="w-2 h-2 bg-red-400 rounded-full"></div><span className="text-xs font-semibold text-red-500 uppercase tracking-wider">TextGlow ({uc.tone})</span></div>
                                        <p className="text-slate-800">"{uc.after}"</p>
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Email Tone Is <span className="text-red-400">Higher Stakes</span> Than Any Other Channel</h2>
                        <p className="text-lg text-slate-300 mb-6 leading-relaxed">Slack messages disappear into the scroll. But emails are <strong className="text-white">permanent records</strong>. They get forwarded, screenshotted, and shared. They sit in inboxes for months.</p>
                        <p className="text-lg text-slate-300 mb-12 leading-relaxed">One poorly worded email to a client can lose a deal. One defensive reply to your VP can stall your career. In email, your words are everything.</p>
                        <div className="grid sm:grid-cols-3 gap-6">
                            {[{ stat: "28%", desc: "of the workweek spent on email by professionals", source: "McKinsey" }, { stat: "64%", desc: "of professionals received an unintentionally offensive email", source: "Grammarly Business" }, { stat: "40%", desc: "faster responses for emails with confident, positive tone", source: "Boomerang" }].map((s, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                                    <div className="text-3xl font-bold text-red-400 mb-2">{s.stat}</div>
                                    <p className="text-sm text-slate-400 mb-2">{s.desc}</p><p className="text-xs text-slate-500 italic">{s.source}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div></div>
            </section>

            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4"><div className="max-w-5xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Gmail Users Are Saying</h2>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-8">{testimonials.map((t, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                            <Quote className="w-8 h-8 text-red-200 mb-4" />
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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Write Emails That Get the{' '}<span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Response You Want</span></h2>
                        <p className="text-lg text-slate-400 mb-10">Free to use. 10 polishes per day. No signup required. Works inside Gmail's compose window instantly.</p>
                        <Button href={CHROME_URL} variant="secondary" className="px-10 py-4 text-lg !bg-white !text-red-700 font-bold hover:!bg-red-50 shadow-[0_0_50px_rgba(255,255,255,0.2)] border-none">
                            <Chrome className="w-5 h-5 mr-2" />Add to Chrome — It's Free
                        </Button>
                    </motion.div>
                </div></div>
            </section>
        </div>
    );
};
