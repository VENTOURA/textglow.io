import { Button } from '../components/ui/Button';
import { Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const Pricing = () => {
    return (
        <div className="py-20 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl z-0 pointer-events-none opacity-20">
                <div className="absolute top-40 left-0 w-96 h-96 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute top-40 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Simple, Transparent Pricing</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Choose the plan that fits your writing needs. No hidden fees.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Free Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 flex flex-col"
                    >
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-slate-900">Free</h3>
                            <p className="text-slate-500 mt-2">Perfect for getting started</p>
                        </div>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-slate-900">$0</span>
                            <span className="text-slate-500">/month</span>
                        </div>

                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex items-start">
                                <Check className="w-5 h-5 text-brand-500 mr-2 flex-shrink-0" />
                                <span className="text-slate-600">Requires your own OpenAI API Key</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="w-5 h-5 text-brand-500 mr-2 flex-shrink-0" />
                                <span className="text-slate-600">Up to 1,000 characters per polish</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="w-5 h-5 text-brand-500 mr-2 flex-shrink-0" />
                                <span className="text-slate-600">Basic tones included</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="w-5 h-5 text-brand-500 mr-2 flex-shrink-0" />
                                <span className="text-slate-600">Works on all supported sites</span>
                            </li>
                        </ul>

                        <Button variant="secondary" className="w-full" href="https://chrome.google.com/webstore">
                            Install Free
                        </Button>
                    </motion.div>

                    {/* Pro Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-slate-900 rounded-2xl shadow-xl border border-slate-800 p-8 flex flex-col relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 bg-brand-500/10 w-32 h-32 rounded-bl-full"></div>

                        <div className="mb-6 relative">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Pro</h3>
                                    <p className="text-slate-400 mt-2">For power users</p>
                                </div>
                                <div className="bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                                    <Sparkles className="w-3 h-3 mr-1" />
                                    POPULAR
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <span className="text-4xl font-bold text-white">$5</span>
                            <span className="text-slate-400">/month</span>
                            <div className="text-sm text-slate-400 mt-1">or $49/year (save ~2 months)</div>
                        </div>

                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex items-start">
                                <Check className="w-5 h-5 text-brand-400 mr-2 flex-shrink-0" />
                                <span className="text-slate-200">No API Key needed</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="w-5 h-5 text-brand-400 mr-2 flex-shrink-0" />
                                <span className="text-slate-200">Up to 3,000 characters per polish</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="w-5 h-5 text-brand-400 mr-2 flex-shrink-0" />
                                <span className="text-slate-200">Priority faster responses</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="w-5 h-5 text-brand-400 mr-2 flex-shrink-0" />
                                <span className="text-slate-200">Early access to new features</span>
                            </li>
                        </ul>

                        <Button variant="primary" className="w-full bg-brand-600 hover:bg-brand-700 text-white border-none shadow-[0_0_20px_rgba(14,165,233,0.3)]" href="#">
                            Upgrade to Pro
                        </Button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
