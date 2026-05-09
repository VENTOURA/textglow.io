import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Sparkles, Chrome, Quote, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useState } from 'react';

const CHROME_URL = "https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf";

const toneTable = [
    { tone: "Confident", best: "Thought leadership posts, hot takes, career wins", color: "bg-blue-50 text-blue-700 border-blue-200" },
    { tone: "Professional", best: "Job applications, recruiter replies, formal introductions", color: "bg-slate-100 text-slate-700 border-slate-200" },
    { tone: "Friendly", best: "Congratulations, peer connections, community building", color: "bg-green-50 text-green-700 border-green-200" },
    { tone: "Persuasive", best: "Cold DMs, partnership proposals, pitch messages", color: "bg-amber-50 text-amber-700 border-amber-200" },
    { tone: "Concise", best: "Comments, quick replies, endorsements", color: "bg-purple-50 text-purple-700 border-purple-200" },
    { tone: "Funny", best: "Relatable posts, ice-breakers, humanizing your brand", color: "bg-pink-50 text-pink-700 border-pink-200" },
];

const useCases = [
    { title: "The Thought Leadership Post", emoji: "💡", before: "I think most companies are doing remote work wrong by tracking hours instead of output", tone: "Confident", after: "Hot take: tracking hours in a remote-first company is like measuring a chef's skill by how long they spend in the kitchen. The companies winning at remote work in 2026 have one thing in common — they measure output, not attendance." },
    { title: "The Cold DM to a Prospect", emoji: "📩", before: "hey I run a marketing agency and want to help your company", tone: "Persuasive", after: "Hi [Name], I've been following [Company]'s growth this year — the rebrand was particularly impressive. I run a growth agency specializing in [niche], and I noticed an opportunity in your content strategy. Would you be open to a 10-minute call?" },
    { title: "The Comment on a Viral Post", emoji: "💬", before: "good point I agree with this", tone: "Confident", after: "This resonates. I've seen this exact pattern play out in three companies I've worked with. The ones who figured it out early had a 2x advantage by year two. Great insight — thanks for sharing." },
    { title: "The Connection Request", emoji: "🤝", before: "hi I want to connect with you because of your work", tone: "Friendly", after: "Hi [Name]! I've been really enjoying your posts on [topic] — particularly your take on [specific thing]. I'd love to connect and follow your work more closely." },
    { title: "The Job Application InMail", emoji: "💼", before: "I saw the job posting and I think I'd be a great fit", tone: "Professional", after: "Hi [Name], I came across the [Role] position at [Company] and was genuinely excited — it aligns closely with my experience in [skill/domain]. I'd love the opportunity to bring that expertise to your team." },
];

const testimonials = [
    { quote: "I went from posting once a month to 3x a week. I just dump my thoughts and let TextGlow make them sound polished. My engagement is up 400%.", author: "Startup Founder", context: "12K followers" },
    { quote: "My LinkedIn DM response rate went from 8% to 31% after I started using the Persuasive tone for cold outreach.", author: "Sales Development Rep", context: "B2B SaaS" },
    { quote: "I'm an engineer, not a writer. But LinkedIn matters for my career. TextGlow lets me share my expertise without spending an hour agonizing over phrasing.", author: "Senior Software Engineer", context: "FAANG" },
];

const faqs = [
    { q: "Does TextGlow work inside LinkedIn?", a: "Yes. TextGlow works inside every text field on LinkedIn — post composer, comments, DMs, InMails, and connection request messages." },
    { q: "Will LinkedIn flag or penalize my content?", a: "No. TextGlow polishes YOUR words — it doesn't generate content from scratch. LinkedIn's AI detection targets fully AI-generated content, not human-written content that's been edited for tone." },
    { q: "Does TextGlow write LinkedIn posts for me?", a: "No — and that's the point. Tools that generate posts from scratch produce generic content that hurts your reach. TextGlow takes what you've already written and improves the tone, clarity, and impact." },
    { q: "Can it help with LinkedIn comments?", a: "Yes. Comments are the #1 underused growth strategy on LinkedIn. Type a quick thought, click ✨, and turn it into something worth noticing." },
    { q: "Does it work on LinkedIn Sales Navigator?", a: "Yes. TextGlow works in any text field rendered in your browser, including Sales Navigator InMails and messages." },
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

export const LinkedIn = () => {
    return (
        <div className="bg-white">
            <Helmet>
                <title>AI LinkedIn Post Writer & Message Assistant | TextGlow</title>
                <meta name="description" content="Write LinkedIn posts, DMs, and comments that get engagement — without the cringe. TextGlow polishes your tone in 2 clicks, right inside LinkedIn. No copy-pasting. Free Chrome extension." />
                <link rel="canonical" href="https://textglow.io/linkedin/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="AI LinkedIn Post Writer & Message Assistant | TextGlow" />
                <meta property="og:description" content="Write LinkedIn posts, DMs, and comments that get engagement — without the cringe." />
                <meta property="og:url" content="https://textglow.io/linkedin/" />
                <meta property="og:image" content="https://textglow.io/og-image.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="AI LinkedIn Post Writer & Message Assistant | TextGlow" />
                <meta property="twitter:description" content="Write LinkedIn posts, DMs, and comments that get engagement — without the cringe." />
            </Helmet>

            <section className="relative pt-24 pb-32 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-32 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-600/15 rounded-full blur-[100px]"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10"><div className="max-w-4xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
                        <Sparkles className="w-4 h-4" /><span>AI-Powered LinkedIn Assistant</span>
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                        Stop Copy-Pasting Into ChatGPT to Write{' '}<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">LinkedIn Posts</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        You know the drill. Open ChatGPT. "Write me a LinkedIn post about [topic]." Copy. Paste. Edit for 15 minutes because it sounds like a robot wrote it. TextGlow polishes your own words in 2 clicks — right inside LinkedIn. Your voice. Your ideas. Just better.
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                        <Button href={CHROME_URL} className="px-10 py-4 text-lg bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_40px_rgba(37,99,235,0.35)]">
                            <Chrome className="w-5 h-5 mr-2" />Add to Chrome — Free
                        </Button>
                    </motion.div>
                </div></div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4"><div className="max-w-3xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">LinkedIn Rewards Authenticity. Most AI Tools <span className="text-blue-600">Kill It.</span></h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">LinkedIn's algorithm in 2026 is ruthlessly good at detecting generic AI-generated content — and burying it. Posts that sound like ChatGPT get <strong>40-60% less reach</strong> than posts that sound like a real human.</p>
                        <p className="text-lg text-slate-600 mb-6">But writing a compelling LinkedIn post from scratch takes <strong>20-45 minutes</strong>. So you reach for ChatGPT — and get punished for it.</p>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
                            <p className="text-blue-900 font-semibold text-lg mb-2">The real problem isn't writing. It's editing.</p>
                            <p className="text-blue-800">You have the ideas. You just struggle to make them sound polished and engaging. That's a <strong>tone problem</strong>, not a content problem.</p>
                        </div>
                        <p className="text-lg text-slate-600">TextGlow doesn't write FOR you. It polishes what you've already written — preserving your voice, your stories, your perspective.</p>
                    </motion.div>
                </div></div>
            </section>

            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4"><div className="max-w-5xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Polish Posts, DMs, and Comments in <span className="text-blue-600">2 Clicks</span></h2>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {[{ title: "Posts", desc: "Type your rough draft in \"Start a post.\" Click ✨. Pick a tone. Your draft becomes a polished post that sounds like you on your best day.", icon: "📝" }, { title: "Comments", desc: "Turn a forgettable \"Great post!\" into an insightful response that gets noticed by the poster and their entire network.", icon: "💬" }, { title: "DMs & InMails", desc: "Pick Persuasive for outreach, Professional for follow-ups, or Friendly for warm connections. All polished in-place.", icon: "📩" }].map((s, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                                <div className="text-4xl mb-4">{s.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3><p className="text-slate-600">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                            <table className="min-w-full bg-white">
                                <thead><tr className="bg-slate-50 border-b border-slate-200">
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Tone</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Best For on LinkedIn</th>
                                </tr></thead>
                                <tbody className="divide-y divide-slate-100">{toneTable.map((row, i) => (
                                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="px-6 py-4"><span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${row.color}`}>{row.tone}</span></td>
                                        <td className="px-6 py-4 text-sm text-slate-600">{row.best}</td>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Every LinkedIn Scenario, <span className="text-blue-600">Handled</span></h2>
                    </motion.div>
                    <div className="space-y-8">{useCases.map((uc, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
                            <div className="p-6 md:p-8">
                                <div className="flex items-center space-x-3 mb-6"><span className="text-2xl">{uc.emoji}</span><h3 className="text-xl font-bold text-slate-900">{uc.title}</h3></div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-white rounded-xl p-5 border border-slate-200">
                                        <div className="flex items-center space-x-2 mb-3"><div className="w-2 h-2 bg-slate-400 rounded-full"></div><span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">You type</span></div>
                                        <p className="text-slate-600 italic">"{uc.before}"</p>
                                    </div>
                                    <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                                        <div className="flex items-center space-x-2 mb-3"><div className="w-2 h-2 bg-blue-400 rounded-full"></div><span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">TextGlow ({uc.tone})</span></div>
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">On LinkedIn, Your Words Are Your <span className="text-blue-400">Personal Brand</span></h2>
                        <p className="text-lg text-slate-300 mb-4">Every post, comment, and DM is building — or eroding — your professional reputation.</p>
                        <ul className="space-y-3 mb-8">{["Recruiters decide whether to reach out or scroll past", "Clients decide whether you're credible before they ever talk to you", "Peers form opinions about your expertise based on your engagement", "Your next opportunity is shaped by content you post today"].map((item, i) => (
                            <li key={i} className="flex items-start space-x-3 text-slate-300"><span className="text-blue-400 mt-1">→</span><span>{item}</span></li>
                        ))}</ul>
                        <p className="text-lg text-slate-300 mb-12">A brilliant insight poorly worded gets <strong className="text-white">12 impressions</strong>. The same insight, confidently worded, gets <strong className="text-white">12,000</strong>.</p>
                        <div className="grid sm:grid-cols-3 gap-6">
                            {[{ stat: "3x", desc: "more engagement for posts with strong, opinionated hooks", source: "Shield Analytics, 2025" }, { stat: "300%", desc: "more likely to accept personalized connection requests", source: "LinkedIn data" }, { stat: "5x", desc: "more profile views for active LinkedIn posters", source: "LinkedIn data" }].map((s, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                                    <div className="text-3xl font-bold text-blue-400 mb-2">{s.stat}</div>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What LinkedIn Users Are Saying</h2>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-8">{testimonials.map((t, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                            <Quote className="w-8 h-8 text-blue-200 mb-4" />
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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Your Ideas Deserve{' '}<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Better Words</span></h2>
                        <p className="text-lg text-slate-400 mb-10">Free to use. 10 polishes per day. No signup required. Works inside every text field on LinkedIn.</p>
                        <Button href={CHROME_URL} variant="secondary" className="px-10 py-4 text-lg !bg-white !text-blue-700 font-bold hover:!bg-blue-50 shadow-[0_0_50px_rgba(255,255,255,0.2)] border-none">
                            <Chrome className="w-5 h-5 mr-2" />Add to Chrome — It's Free
                        </Button>
                    </motion.div>
                </div></div>
            </section>
        </div>
    );
};
