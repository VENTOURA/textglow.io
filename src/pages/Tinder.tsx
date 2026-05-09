import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Sparkles, Chrome, Quote, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useState } from 'react';

const CHROME_URL = "https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf";

const toneTable = [
    { tone: "Flirty", vibe: "Playful, charming, confident", example: "\"I was going to play it cool and wait to message, but your smile made that impossible.\"", color: "bg-pink-50 text-pink-700 border-pink-200" },
    { tone: "Funny", vibe: "Witty, self-aware, disarming", example: "\"On a scale of 1 to 'I Googled how to be funny on dating apps,' how's your experience going so far?\"", color: "bg-amber-50 text-amber-700 border-amber-200" },
    { tone: "Confident", vibe: "Bold, direct, self-assured", example: "\"I'll be honest — your profile stood out. The hiking photo, the book taste, and yes, the dog. Coffee this week?\"", color: "bg-blue-50 text-blue-700 border-blue-200" },
    { tone: "Friendly", vibe: "Warm, approachable, no pressure", example: "\"Your travel photos are amazing! What's the one trip that completely surprised you?\"", color: "bg-green-50 text-green-700 border-green-200" },
    { tone: "Polite", vibe: "Respectful, genuine, sincere", example: "\"I really enjoyed reading your profile — you seem like someone with great stories. I'd love to get to know you better.\"", color: "bg-purple-50 text-purple-700 border-purple-200" },
];

const useCases = [
    { title: "The Generic Opener", emoji: "👋", before: "hey you're cute", tone: "Flirty", after: "I'm not going to lie — your smile caught me off guard. But it's your taste in books that made me actually message. What are you reading right now?" },
    { title: "The Profile-Based Hook", emoji: "🐕", before: "cool dog", tone: "Funny", after: "I need to be upfront about something — I'm 60% here for you and 40% here for your dog. What's their name? I want to make a good first impression with both of you." },
    { title: "The Conversation Revival", emoji: "🔄", before: "hey sorry I didn't reply for a while", tone: "Confident", after: "I disappeared for a bit — life got hectic. But I kept thinking about your answer to that hiking question, so here I am. Still up for continuing this?" },
    { title: "The Ask-Out Message", emoji: "☕", before: "do you want to go get coffee sometime", tone: "Confident", after: "Okay, I've enjoyed this conversation way too much to keep it in an app. Coffee this Saturday? I know a place that makes the best oat milk latte in the city — or I'm open to suggestions." },
    { title: "The Bumble Response", emoji: "💬", before: "thanks for the message! yeah I love traveling", tone: "Friendly", after: "Thanks for making the first move — love that. And yes, traveling is basically my personality at this point. My last trip to [place] completely changed how I think about food. Have you been anywhere recently that blew your mind?" },
];

const testimonials = [
    { quote: "My buddy watched me type 'hey nice pics' and hit the TextGlow button. It came back with something so smooth I actually got a same-day date. I'm a convert.", author: "Jake, 28", context: "Tinder" },
    { quote: "English is my third language. Dating apps in English used to terrify me because I couldn't express my personality. TextGlow's Flirty tone makes me sound like myself — just in better English.", author: "Ana, 26", context: "Bumble" },
    { quote: "I went from matching and never messaging (because I couldn't think of what to say) to actually having conversations. My response rate went from basically 0% to about 40%.", author: "Mark, 32", context: "Hinge" },
];

const faqs = [
    { q: "Does TextGlow work on Tinder, Bumble, and Hinge?", a: "Yes — on their web versions accessed through your browser (Chrome, Edge, or Brave). Open tinder.com, bumble.com, or hinge.co in your browser, and TextGlow works in every message box." },
    { q: "Will the other person know I'm using AI?", a: "No. TextGlow rewrites your message before you send it. There's no watermark, no signature, no trace." },
    { q: "Isn't this... cheating?", a: "Is it cheating to dress well on a first date? To practice your stories? To ask a friend what to text back? TextGlow helps you express who you already are, without the anxiety getting in the way." },
    { q: "What if my messages sound too polished?", a: "TextGlow doesn't make you sound like Shakespeare. It makes you sound like the best, most confident version of yourself. The Flirty and Funny tones are designed to be natural and conversational." },
    { q: "Does it work for keeping conversations going, or just openers?", a: "Both. TextGlow works in any message input — first messages, mid-conversation replies, the ask-out message, everything." },
    { q: "What's the \"Flirty\" tone actually like?", a: "Playful, charming, confident — but not creepy. Think: clever banter at a bar, not a cheesy pickup line from 2005." },
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

export const Tinder = () => {
    return (
        <div className="bg-white">
            <Helmet>
                <title>AI Wingman for Tinder & Dating Apps — Better Openers | TextGlow</title>
                <meta name="description" content="Never run out of things to say. Use TextGlow to rewrite your dating app messages for better engagement and more dates. Sound confident, funny, or charming. Free." />
                <link rel="canonical" href="https://textglow.io/tinder/" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://textglow.io/tinder/" />
                <meta property="og:title" content="AI Wingman for Tinder & Dating Apps — Better Openers | TextGlow" />
                <meta property="og:description" content="Never run out of things to say. Use TextGlow to rewrite your dating app messages for better engagement and more dates. Sound confident, funny, or charming. Free." />
                <meta property="og:image" content="https://textglow.io/og-image.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="AI Wingman for Tinder & Dating Apps — Better Openers | TextGlow" />
                <meta property="twitter:description" content="Never run out of things to say. Use TextGlow to rewrite your dating app messages for better engagement and more dates. Sound confident, funny, or charming. Free." />
            </Helmet>

            <section className="relative pt-24 pb-32 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-32 left-1/4 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-rose-600/15 rounded-full blur-[100px]"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10"><div className="max-w-4xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium mb-8">
                        <Sparkles className="w-4 h-4" /><span>AI-Powered Dating Assistant</span>
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                        Stop Getting Ghosted.{' '}<span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">Start Getting Dates.</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        You matched. You stared at the screen for 5 minutes. You typed "hey." You got ignored. TextGlow turns your awkward first messages into witty, confident openers — in 2 clicks, right inside the chat. Your personality, amplified.
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                        <Button href={CHROME_URL} className="px-10 py-4 text-lg bg-pink-600 hover:bg-pink-700 text-white shadow-[0_0_40px_rgba(219,39,119,0.35)]">
                            <Chrome className="w-5 h-5 mr-2" />Add to Chrome — Free
                        </Button>
                    </motion.div>
                </div></div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4"><div className="max-w-3xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Your Matches Are Expiring While You <span className="text-pink-600">Overthink Your Opener</span></h2>
                        <p className="text-lg text-slate-600 mb-8">Here's the brutal math of modern dating apps:</p>
                        <div className="space-y-4 mb-10">
                            {["The average woman on Tinder receives 50+ matches per week", "She replies to fewer than 10% of first messages", "The #1 most sent message on every dating app? \"Hey\"", "The reply rate for \"hey\"? Under 2% (Hinge internal data)"].map((item, i) => (
                                <div key={i} className="flex items-start space-x-3 p-4 bg-pink-50/50 rounded-xl border border-pink-100">
                                    <span className="text-pink-500 mt-0.5 text-lg">📊</span><span className="text-slate-700">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-lg text-slate-600 mb-6">You're probably funny, thoughtful, and interesting <em>in person</em>. The problem isn't you — it's that typing is hard when you're nervous.</p>
                        <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-xl">
                            <p className="text-pink-900 font-medium text-lg mb-0">TextGlow is your AI wingman. Type your raw thought — and let it turn your words into the version of you that's confident, clever, and worth replying to.</p>
                        </div>
                    </motion.div>
                </div></div>
            </section>

            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4"><div className="max-w-5xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">From "Hey" to "That's Actually Clever" — In <span className="text-pink-600">2 Clicks</span></h2>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {[{ step: "1", title: "Match & type", desc: "Open the chat. Type whatever comes to mind — don't filter yourself.", icon: "💭" }, { step: "2", title: "Click the ✨ icon", desc: "TextGlow appears right in the message box.", icon: "✨" }, { step: "3", title: "Pick a vibe", desc: "Flirty, Funny, Confident, Friendly — choose the energy you want.", icon: "🔥" }].map((s, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                                <div className="text-4xl mb-4">{s.icon}</div>
                                <div className="inline-flex items-center justify-center w-8 h-8 bg-pink-100 text-pink-700 rounded-full text-sm font-bold mb-4">{s.step}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3><p className="text-slate-600">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                            <table className="min-w-full bg-white">
                                <thead><tr className="bg-slate-50 border-b border-slate-200">
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Tone</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Vibe</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Example</th>
                                </tr></thead>
                                <tbody className="divide-y divide-slate-100">{toneTable.map((row, i) => (
                                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="px-6 py-4"><span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${row.color}`}>{row.tone}</span></td>
                                        <td className="px-6 py-4 text-sm text-slate-600">{row.vibe}</td>
                                        <td className="px-6 py-4 text-sm text-slate-700 italic max-w-sm">{row.example}</td>
                                    </tr>
                                ))}</tbody>
                            </table>
                        </div>
                        <p className="text-center text-slate-500 mt-6 text-sm">Works on: Tinder (web), Bumble (web), Hinge (web), OkCupid, Facebook Dating, and any dating platform in your browser.</p>
                    </motion.div>
                </div></div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4"><div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Real Transformations: <span className="text-pink-600">Before & After</span></h2>
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
                                    <div className="bg-pink-50 rounded-xl p-5 border border-pink-100">
                                        <div className="flex items-center space-x-2 mb-3"><div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-xs font-semibold text-pink-500 uppercase tracking-wider">TextGlow ({uc.tone})</span></div>
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Your Thumbs <span className="text-pink-400">Betray You</span> on Dating Apps</h2>
                        <p className="text-lg text-slate-300 mb-6">In person, you're funny. You're charming. Your voice, your timing, your expressions — they do the heavy lifting.</p>
                        <p className="text-lg text-slate-300 mb-12">On a dating app, all of that is gone. You're reduced to <strong className="text-white">text on a screen</strong>. This isn't a writing problem. It's a <strong className="text-white">translation problem</strong>.</p>
                        <div className="grid sm:grid-cols-3 gap-6">
                            {[{ stat: "3x", desc: "more replies for messages referencing something from a profile", source: "Hinge, 2025" }, { stat: "90%", desc: "of matches never speak — match-to-conversation rate is under 10%", source: "Tinder data" }, { stat: "70%", desc: "more likely to get a reply when messaging within 5 minutes", source: "Bumble" }].map((s, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                                    <div className="text-3xl font-bold text-pink-400 mb-2">{s.stat}</div>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Dating App Users Are Saying</h2>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-8">{testimonials.map((t, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                            <Quote className="w-8 h-8 text-pink-200 mb-4" />
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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Your Next Date Starts With a{' '}<span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">Better First Message</span></h2>
                        <p className="text-lg text-slate-400 mb-10">Free to use. 10 polishes per day. No signup required. Works on Tinder, Bumble, Hinge, and every dating platform in your browser.</p>
                        <Button href={CHROME_URL} variant="secondary" className="px-10 py-4 text-lg !bg-white !text-pink-700 font-bold hover:!bg-pink-50 shadow-[0_0_50px_rgba(255,255,255,0.2)] border-none">
                            <Chrome className="w-5 h-5 mr-2" />Add to Chrome — It's Free
                        </Button>
                    </motion.div>
                </div></div>
            </section>
        </div>
    );
};
