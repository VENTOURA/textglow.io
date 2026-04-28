import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Sparkles, Globe, Languages, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Translate = () => {
    return (
        <div className="bg-white">
            <Helmet>
                <title>Multilingual AI Grammar Checker & Translator - Textglow</title>
                <meta name="description" content="Write flawlessly in English, Spanish, French, and 50+ languages. Textglow translates, polishes, and perfects your grammar across the globe." />
                <meta name="keywords" content="multilingual grammar checker, AI language translator, non-native english writer, polish translated text, write in spanish, Textglow language tool" />
                <link rel="canonical" href="https://textglow.io/translate" />
                
                <meta property="og:title" content="Multilingual AI Grammar Checker & Translator" />
                <meta property="og:description" content="Write flawlessly in any language. Textglow translates, polishes, and perfects your grammar across the globe." />
                <meta property="og:url" content="https://textglow.io/translate" />
            </Helmet>
            
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden bg-slate-900">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl z-0 pointer-events-none opacity-20">
                    <div className="absolute top-40 left-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6"
                        >
                            <Globe className="w-4 h-4" />
                            <span>The Global Writing Assistant</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                        >
                            Write Flawlessly in <span className="text-emerald-400">Any Language</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
                        >
                            Whether you're an international professional writing in English, or communicating with clients in Spanish, French, or German, Textglow perfects your grammar and tone instantly.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                        >
                            <Button href="https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf" className="px-8 py-4 text-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                                Install Textglow Free
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Translation Features */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Beyond Simple Translation</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Most tools just translate. Textglow translates *and* ensures you sound like a native speaker with the perfect cultural tone.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                                <Languages className="w-6 h-6 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Auto-Language Detection</h3>
                            <p className="text-slate-600">Just start typing. Textglow automatically recognizes the language you are writing in and applies native-level grammar checking instantly.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <CheckCircle className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Sound Like a Native</h3>
                            <p className="text-slate-600">Don't just be grammatically correct—be natural. Our AI understands colloquialisms, idioms, and cultural phrasing to make you sound perfectly fluent.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                                <Sparkles className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Multilingual Tone Control</h3>
                            <p className="text-slate-600">Being 'Polite' in Japanese is different from being 'Polite' in English. Textglow adjusts your tone perfectly according to the rules of your target language.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The CTA */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto bg-emerald-600 rounded-3xl p-12 text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6">Communicate across borders confidently.</h2>
                            <p className="text-emerald-100 mb-8 text-lg">Join global professionals who trust Textglow for flawless multilingual writing.</p>
                            <Button variant="secondary" href="https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf" className="!text-emerald-600 px-10 py-4 text-lg">
                                Get Textglow for Free
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
