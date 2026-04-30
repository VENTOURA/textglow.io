import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl z-0 pointer-events-none opacity-30">
                <div className="absolute top-20 left-1/4 w-72 h-72 bg-brand-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute top-20 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mb-6"
                >
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-50 text-brand-700 border border-brand-100">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Now available for Chrome
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight"
                >
                    Upgrade Your Words Instantly.<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">Anywhere You Write.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl mx-auto text-xl text-slate-600 mb-10"
                >
                    Write faster, sound smarter, and save time. Instantly polish grammar, perfect your tone, and elevate your emails and chats with one click!
                    All without ever leaving your active tab.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                >
                    <Button size="lg" href="https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf" className="w-full sm:w-auto">
                        Install Free Extension
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button size="lg" variant="secondary" to="/pricing" className="w-full sm:w-auto">
                        Upgrade to Pro
                    </Button>
                </motion.div>
            </div>
        </section >
    );
};
