import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

export const ProblemSolution = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Stop the Copy-Paste Madness</h2>
                    <p className="text-lg text-slate-600">Writing professional emails shouldn't feel like a chore.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* The Old Way */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-red-400"></div>
                        <div className="flex items-center mb-6 text-red-500 font-semibold">
                            <X className="w-5 h-5 mr-2" />
                            The Old Way
                        </div>
                        <div className="space-y-4 text-slate-500">
                            <div className="flex items-start">
                                <span className="mr-3 mt-1 text-slate-300">1.</span>
                                <p>Write a draft in Gmail</p>
                            </div>
                            <div className="flex items-start">
                                <span className="mr-3 mt-1 text-slate-300">2.</span>
                                <p>Copy text to ChatGPT</p>
                            </div>
                            <div className="flex items-start">
                                <span className="mr-3 mt-1 text-slate-300">3.</span>
                                <p>Wait for rewrite</p>
                            </div>
                            <div className="flex items-start">
                                <span className="mr-3 mt-1 text-slate-300">4.</span>
                                <p>Paste back to Gmail</p>
                            </div>
                            <div className="flex items-start">
                                <span className="mr-3 mt-1 text-slate-300">5.</span>
                                <p>Fix formatting mess</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* The Textglow Way */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-2xl shadow-xl border border-brand-100 relative overflow-hidden ring-1 ring-brand-500/10"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-brand-500"></div>
                        <div className="flex items-center mb-6 text-brand-600 font-semibold">
                            <Check className="w-5 h-5 mr-2" />
                            With Textglow
                        </div>
                        <div className="space-y-4 text-slate-600">
                            <div className="flex items-start p-3 bg-brand-50/50 rounded-xl border border-brand-100">
                                <div className="bg-brand-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">1</div>
                                <div>
                                    <p className="font-bold text-slate-900">Type Your Draft</p>
                                    <p className="text-sm text-slate-600">Write naturally inside any website text field.</p>
                                </div>
                            </div>
                            <div className="flex items-start p-3 bg-brand-50/50 rounded-xl border border-brand-100">
                                <div className="bg-brand-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">2</div>
                                <div>
                                    <p className="font-bold text-slate-900">Click the Sparkle</p>
                                    <p className="text-sm text-slate-600">The icon appears instantly right where you're typing.</p>
                                </div>
                            </div>
                            <div className="flex items-start p-3 bg-brand-50/50 rounded-xl border border-brand-100">
                                <div className="bg-brand-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">3</div>
                                <div>
                                    <p className="font-bold text-slate-900">Magical Rewrite</p>
                                    <p className="text-sm text-slate-600">Your text is replaced with a rewritten version in place.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
