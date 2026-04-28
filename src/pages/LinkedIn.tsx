import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Sparkles, MessageSquare, Shield, Zap } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const LinkedIn = () => {
    return (
        <div className="bg-white">
            <Helmet>
                <title>The #1 LinkedIn AI Writing Assistant - Textglow</title>
                <meta name="description" content="Stop the ChatGPT copy-paste shuffle. Instantly polish your LinkedIn posts, comments, and DMs directly inside the LinkedIn interface with Textglow." />
                <meta name="keywords" content="LinkedIn AI writer, LinkedIn post generator, AI for LinkedIn comments, improve LinkedIn posts, Textglow" />
                <link rel="canonical" href="https://textglow.io/linkedin" />
                
                <meta property="og:title" content="The #1 LinkedIn AI Writing Assistant - Textglow" />
                <meta property="og:description" content="Stop the ChatGPT copy-paste shuffle. Instantly polish your LinkedIn posts, comments, and DMs directly inside the LinkedIn interface." />
                <meta property="og:url" content="https://textglow.io/linkedin" />
            </Helmet>
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden bg-slate-900">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl z-0 pointer-events-none opacity-20">
                    <div className="absolute top-40 left-0 w-96 h-96 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-6"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>The #1 AI Assistant for LinkedIn</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                        >
                            Stop the ChatGPT <span className="text-brand-400">Copy-Paste</span> Shuffle on LinkedIn
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
                        >
                            Instantly polish your LinkedIn posts, comments, and DMs without leaving the site. The tailored AI writing assistant for professionals.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                        >
                            <Button href="https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf" className="px-8 py-4 text-lg bg-brand-600 hover:bg-brand-700 text-white shadow-[0_0_30px_rgba(14,165,233,0.4)]">
                                Install Textglow Free
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* LinkedIn-Specific Features */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Built for the Modern Professional</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Textglow integrates perfectly with LinkedIn's interface, making your workflow 10x faster.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">One-Click Magic</h3>
                            <p className="text-slate-600">No more manual copying. The sparkle icon appears exactly where you type your post.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                                <MessageSquare className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Tone Perfection</h3>
                            <p className="text-slate-600">Switch between 'Thought Leader', 'Professional', and 'Supportive' in a heartbeat.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                                <Shield className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Privacy First</h3>
                            <p className="text-slate-600">We don't store your LinkedIn data. Your professional secrets stay yours.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The CTA */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto bg-brand-600 rounded-3xl p-12 text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6">Ready to dominate LinkedIn?</h2>
                            <p className="text-brand-100 mb-8 text-lg">Join 1,000+ professionals who have ditched the copy-paste madness.</p>
                            <Button variant="secondary" href="https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf" className="!text-brand-600 px-10 py-4 text-lg">
                                Get Textglow for Free
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
