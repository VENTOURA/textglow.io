import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Sparkles, Hash, Shield, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Slack = () => {
    return (
        <div className="bg-white">
            <Helmet>
                <title>The #1 AI Message Assistant for Slack - Textglow</title>
                <meta name="description" content="Never second-guess a Slack message again. Instantly polish your workplace chats directly inside Slack with Textglow's AI assistant." />
                <meta name="keywords" content="Slack AI writer, AI chat assistant, write professional Slack messages, improve tone, Textglow" />
                <link rel="canonical" href="https://textglow.io/slack" />
                
                <meta property="og:title" content="The #1 AI Message Assistant for Slack - Textglow" />
                <meta property="og:description" content="Never second-guess a Slack message again. Instantly polish your workplace chats directly inside Slack with Textglow." />
                <meta property="og:url" content="https://textglow.io/slack" />
            </Helmet>
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden bg-slate-900">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl z-0 pointer-events-none opacity-20">
                    <div className="absolute top-40 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>The Ultimate AI for Slack</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                        >
                            Nail Every Workplace Conversation in <span className="text-purple-400">Slack</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
                        >
                            Ensure you always sound professional, supportive, or confident. Textglow polishes your Slack messages instantly before you hit send.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                        >
                            <Button href="https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf" className="px-8 py-4 text-lg bg-purple-600 hover:bg-purple-700 text-white shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                                Install Textglow Free
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Slack-Specific Features */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Built for Remote Teams</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Textglow integrates directly into your Slack Web workflow, ensuring you never miscommunicate again.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                                <MessageCircle className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Instant Polish</h3>
                            <p className="text-slate-600">Type your raw thoughts into the Slack chat box and let Textglow refine them in seconds.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <Hash className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Channel Awareness</h3>
                            <p className="text-slate-600">Use 'Direct' for leadership updates and 'Supportive' for team channels to match the vibe perfectly.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                                <Shield className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Enterprise Privacy</h3>
                            <p className="text-slate-600">We don't store your messages. Your sensitive company IP stays strictly confidential.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The CTA */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto bg-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6">Ready to upgrade your communication?</h2>
                            <p className="text-purple-100 mb-8 text-lg">Join leaders who communicate with clarity using Textglow.</p>
                            <Button variant="secondary" href="https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf" className="!text-purple-600 px-10 py-4 text-lg">
                                Get Textglow for Free
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
