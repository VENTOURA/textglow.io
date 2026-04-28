import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Sparkles, Mail, Shield, Send } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Gmail = () => {
    return (
        <div className="bg-white">
            <Helmet>
                <title>The #1 AI Email Assistant for Gmail - Textglow</title>
                <meta name="description" content="Write professional emails 10x faster. Instantly polish your drafts directly inside Gmail with Textglow's AI writing assistant." />
                <meta name="keywords" content="Gmail AI writer, AI email assistant, write professional emails, improve email tone, Textglow" />
                <link rel="canonical" href="https://textglow.io/gmail" />
                
                <meta property="og:title" content="The #1 AI Email Assistant for Gmail - Textglow" />
                <meta property="og:description" content="Write professional emails 10x faster. Instantly polish your drafts directly inside Gmail with Textglow." />
                <meta property="og:url" content="https://textglow.io/gmail" />
            </Helmet>
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden bg-slate-900">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl z-0 pointer-events-none opacity-20">
                    <div className="absolute top-40 left-0 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>The Ultimate AI for Gmail</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                        >
                            Write Professional Emails <span className="text-red-400">10x Faster</span> in Gmail
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
                        >
                            Never stare at a blank draft again. Instantly polish your emails to sound confident, professional, and clear without leaving your inbox.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                        >
                            <Button href="https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf" className="px-8 py-4 text-lg bg-red-600 hover:bg-red-700 text-white shadow-[0_0_30px_rgba(220,38,38,0.4)]">
                                Install Textglow Free
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Gmail-Specific Features */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Built for the Modern Inbox</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Textglow integrates seamlessly into Gmail's compose window, making email writing effortless.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                                <Send className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">One-Click Polish</h3>
                            <p className="text-slate-600">Draft a quick thought, click the sparkle icon next to the send button, and watch it turn into a perfect email.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                                <Mail className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Tone Perfection</h3>
                            <p className="text-slate-600">Easily switch between 'Professional', 'Friendly', and 'Confident' to match the context of the thread.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                                <Shield className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Enterprise Privacy</h3>
                            <p className="text-slate-600">We don't store your emails. Your sensitive workplace communication stays strictly confidential.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The CTA */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto bg-red-600 rounded-3xl p-12 text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6">Ready to conquer your inbox?</h2>
                            <p className="text-red-100 mb-8 text-lg">Join professionals who have reclaimed hours of their week with Textglow.</p>
                            <Button variant="secondary" href="https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf" className="!text-red-600 px-10 py-4 text-lg">
                                Get Textglow for Free
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
