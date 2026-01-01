import { Button } from '../ui/Button';
import { Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const PricingSection = () => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

    const monthlyLink = "https://buy.stripe.com/00wfZj5Sp46q8fW5kEc3m02";
    const yearlyLink = "https://buy.stripe.com/00weVfeoV46q0Nu8wQc3m03";

    return (
        <section id="pricing" className="py-20 relative overflow-hidden bg-slate-50">
            {/* Background blobs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl z-0 pointer-events-none opacity-20">
                <div className="absolute top-40 left-0 w-96 h-96 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute top-40 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Simple, Transparent Pricing</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                        Choose the plan that fits your writing needs. No hidden fees.
                    </p>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center space-x-4">
                        <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
                        <button
                            className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 bg-brand-600"
                            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                            role="switch"
                            aria-checked={billingCycle === 'yearly'}
                        >
                            <span
                                aria-hidden="true"
                                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${billingCycle === 'yearly' ? 'translate-x-5' : 'translate-x-0'}`}
                            />
                        </button>
                        <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-500'}`}>
                            Yearly <span className="text-brand-500 font-bold">(Save 20%)</span>
                        </span>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Free Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
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
                                <span className="text-slate-600 font-medium">30 polishes per day</span>
                            </li>
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

                        <Button variant="secondary" className="w-full" href="https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf">
                            Install Free
                        </Button>
                    </motion.div>

                    {/* Pro Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
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
                            <span className="text-4xl font-bold text-white">
                                {billingCycle === 'monthly' ? '$5' : '$49'}
                            </span>
                            <span className="text-slate-400">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                            {billingCycle === 'yearly' && (
                                <div className="text-sm text-brand-300 mt-1 font-medium">Save $11 a year</div>
                            )}
                        </div>

                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex items-start">
                                <Check className="w-5 h-5 text-brand-400 mr-2 flex-shrink-0" />
                                <span className="text-slate-200 font-medium">300 polishes per day</span>
                            </li>
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

                        <Button
                            variant="primary"
                            className="w-full bg-brand-600 hover:bg-brand-700 text-white border-none shadow-[0_0_20px_rgba(14,165,233,0.3)]"
                            href={billingCycle === 'monthly' ? monthlyLink : yearlyLink}
                        >
                            Upgrade to Pro
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
