import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export const Terms = () => {
    return (
        <div className="relative overflow-hidden min-h-screen bg-slate-50 pt-24 pb-20">
            <Helmet>
                <title>Terms of Service — TextGlow</title>
                <meta name="description" content="Read the TextGlow Terms of Service. Understand your rights and responsibilities when using our AI writing assistant and Chrome extension." />
                <link rel="canonical" href="https://textglow.io/terms/" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://textglow.io/terms/" />
                <meta property="og:title" content="Terms of Service — TextGlow" />
                <meta property="og:description" content="Read the TextGlow Terms of Service. Understand your rights and responsibilities when using our AI writing assistant and Chrome extension." />
                <meta property="og:image" content="https://textglow.io/og-image.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="Terms of Service — TextGlow" />
                <meta property="twitter:description" content="Read the TextGlow Terms of Service. Understand your rights and responsibilities when using our AI writing assistant and Chrome extension." />
            </Helmet>

            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">Terms of Service</h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-brand-400 to-purple-400 mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 text-justify"
                >
                    <div className="prose prose-slate prose-lg max-w-none hover:prose-a:text-brand-600 prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600">
                        <p className="lead mb-10 text-xl text-slate-600 leading-relaxed">
                            Welcome to TextGlow. By accessing, installing, or using the TextGlow Chrome Extension ("Service"), you agree to be bound by these Terms of Service ("Terms"). Please read them carefully.
                        </p>

                        <div className="space-y-12">
                            <section>
                                <h3 className="flex items-center group text-2xl mb-6">
                                    <span className="bg-brand-100 text-brand-600 w-12 h-12 rounded-2xl flex items-center justify-center text-xl mr-5 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 shadow-sm">1</span>
                                    Acceptance of Terms
                                </h3>
                                <div className="pl-0 md:pl-16 space-y-4">
                                    <p className="leading-relaxed">
                                        By installing and using the TextGlow Chrome Extension, you agree to these Terms of Service. If you do not agree, please do not use the extension. You must be at least 13 years old to use this Service.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h3 className="flex items-center group text-2xl mb-6">
                                    <span className="bg-brand-100 text-brand-600 w-12 h-12 rounded-2xl flex items-center justify-center text-xl mr-5 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 shadow-sm">2</span>
                                    Description of Service
                                </h3>
                                <div className="pl-0 md:pl-16 space-y-4">
                                    <p className="leading-relaxed">
                                        TextGlow provides AI-powered text rewriting services directly within your browser.
                                    </p>
                                    <ul className="list-none pl-0 space-y-3">
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-brand-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                            <span className="leading-relaxed"><strong>Free Plan:</strong> Includes 10 rewrites per day using our high-speed AI infrastructure. No technical setup required. You may optionally provide your own OpenAI API key to use your own quota.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-brand-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                            <span className="leading-relaxed"><strong>Pro Plan:</strong> Includes premium AI access, 150 rewrites per day, the exclusive One-Click Magic mode, and priority processing.</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h3 className="flex items-center group text-2xl mb-6">
                                    <span className="bg-brand-100 text-brand-600 w-12 h-12 rounded-2xl flex items-center justify-center text-xl mr-5 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 shadow-sm">3</span>
                                    Subscription & Payments
                                </h3>
                                <div className="pl-0 md:pl-16 space-y-4">
                                    <p className="leading-relaxed">
                                        <strong>Billing:</strong> Pro subscriptions are billed on a recurring basis (monthly or annually) via Stripe, our secure payment processor.
                                    </p>
                                    <p className="leading-relaxed">
                                        <strong>Cancellation:</strong> You may cancel your subscription at any time through the "Manage Subscription" portal in the extension or via your Stripe email receipt. Your Pro access will continue until the end of the current billing period.
                                    </p>
                                    <p className="leading-relaxed">
                                        <strong>Refunds:</strong> Refunds are generally not provided for partial billing periods, but exceptions may be made on a case-by-case basis for technical failures.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h3 className="flex items-center group text-2xl mb-6">
                                    <span className="bg-brand-100 text-brand-600 w-12 h-12 rounded-2xl flex items-center justify-center text-xl mr-5 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 shadow-sm">4</span>
                                    User Conduct
                                </h3>
                                <div className="pl-0 md:pl-16 space-y-4">
                                    <p className="leading-relaxed">
                                        You are responsible for the content you process using TextGlow. You agree not to use the service to generate harmful, illegal, abusive, or fraudulent content. We reserve the right to terminate access for users who violate these guidelines or abuse the API limits.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h3 className="flex items-center group text-2xl mb-6">
                                    <span className="bg-brand-100 text-brand-600 w-12 h-12 rounded-2xl flex items-center justify-center text-xl mr-5 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 shadow-sm">5</span>
                                    Intellectual Property
                                </h3>
                                <div className="pl-0 md:pl-16 space-y-4">
                                    <p className="leading-relaxed">
                                        The TextGlow extension, including its code, design, features, and branding, is owned by TextGlow. The text content you generate using the service belongs to you, subject to the terms of the underlying AI provider (e.g., OpenAI).
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h3 className="flex items-center group text-2xl mb-6">
                                    <span className="bg-brand-100 text-brand-600 w-12 h-12 rounded-2xl flex items-center justify-center text-xl mr-5 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 shadow-sm">6</span>
                                    Disclaimer of Warranties
                                </h3>
                                <div className="pl-0 md:pl-16 space-y-4">
                                    <p className="leading-relaxed">
                                        The service is provided "as is" and "as available" without warranties of any kind, express or implied. We do not guarantee that the service will be uninterrupted, secure, or error-free.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h3 className="flex items-center group text-2xl mb-6">
                                    <span className="bg-brand-100 text-brand-600 w-12 h-12 rounded-2xl flex items-center justify-center text-xl mr-5 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 shadow-sm">7</span>
                                    Limitation of Liability
                                </h3>
                                <div className="pl-0 md:pl-16 space-y-4">
                                    <p className="leading-relaxed">
                                        To the fullest extent permitted by law, TextGlow shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits or data, arising from your use of the service.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h3 className="flex items-center group text-2xl mb-6">
                                    <span className="bg-brand-100 text-brand-600 w-12 h-12 rounded-2xl flex items-center justify-center text-xl mr-5 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 shadow-sm">8</span>
                                    Contact
                                </h3>
                                <div className="pl-0 md:pl-16">
                                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
                                        <p className="mb-0 text-lg leading-relaxed text-slate-700">
                                            Questions about the Terms of Service should be sent to us at <a href="mailto:support@textglow.io" className="font-bold text-brand-600 no-underline hover:text-brand-700 hover:underline transition-all">support@textglow.io</a>.
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
