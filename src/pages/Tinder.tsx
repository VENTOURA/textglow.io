import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Flame, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Tinder = () => {
    return (
        <div className="bg-white">
            <Helmet>
                <title>AI Dating Message Helper – Tinder, Bumble, Hinge</title>
                <meta name="description" content="Never send a boring 'hey' again. Generate flirty, funny, and confident openers for Tinder, Bumble, and Hinge with Textglow." />
                <meta name="keywords" content="AI rizz, Tinder opener generator, Bumble opening lines, Hinge prompt answers, flirty text generator, dating app AI, Textglow" />
                <link rel="canonical" href="https://textglow.io/tinder" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="AI Dating Message Helper – Tinder, Bumble, Hinge" />
                <meta property="og:description" content="Turn boring matches into dates. Generate flirty, funny, and confident openers instantly." />
                <meta property="og:url" content="https://textglow.io/tinder" />
                <meta property="og:image" content="https://textglow.io/og-image.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="AI Dating Message Helper – Tinder, Bumble, Hinge" />
                <meta property="twitter:description" content="Turn boring matches into dates. Generate flirty, funny, and confident openers instantly." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden bg-slate-900">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl z-0 pointer-events-none opacity-20">
                    <div className="absolute top-40 left-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium mb-6"
                        >
                            <Flame className="w-4 h-4" />
                            <span>Your Ultimate AI Wingman</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                        >
                            Never Send a Boring <span className="text-pink-400">"Hey"</span> Again
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
                        >
                            Whether you're on <b>Tinder, Bumble, Hinge, or OkCupid</b>, Textglow turns your basic thoughts into witty, flirty, and confident messages that actually get replies.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                        >
                            <Button href="https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf" className="px-8 py-4 text-lg bg-pink-600 hover:bg-pink-700 text-white shadow-[0_0_30px_rgba(236,72,153,0.4)]">
                                Install Textglow Free
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Dating App Features */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Master Every Dating App</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Stop overthinking. Textglow sits right inside your browser so you can swipe and type with absolute confidence.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                                <Heart className="w-6 h-6 text-pink-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Tinder & Bumble Openers</h3>
                            <p className="text-slate-600">Type something simple like "you have a cute dog", hit the 'Flirty' or 'Funny' tone, and watch it turn into a guaranteed conversation starter.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                                <MessageCircle className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Hinge Prompt Answers</h3>
                            <p className="text-slate-600">Want to stand out? Let the AI generate clever, witty, and deeply engaging answers to those notoriously difficult Hinge profile prompts.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                                <Sparkles className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Instant "AI Rizz"</h3>
                            <p className="text-slate-600">When the conversation gets dry, select your text and let Textglow add that extra spark. Keep the banter flowing effortlessly.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The CTA */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto bg-pink-600 rounded-3xl p-12 text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6">Ready to secure the date?</h2>
                            <p className="text-pink-100 mb-8 text-lg">Join thousands of singles who level up their matching game with Textglow.</p>
                            <Button variant="secondary" href="https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf" className="!text-pink-600 px-10 py-4 text-lg">
                                Get Textglow for Free
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
