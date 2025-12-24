import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export const Terms = () => {
    return (
        <div className="relative overflow-hidden min-h-screen bg-slate-50 pt-24 pb-20">
            <Helmet>
                <title>Terms of Service - Textglow</title>
                <meta name="description" content="Terms of Service for using Textglow Chrome Extension." />
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
                    className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12"
                >
                    <div className="prose prose-slate prose-lg max-w-none hover:prose-a:text-brand-600 prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600">
                        <h3 className="flex items-center">
                            <span className="bg-brand-100 text-brand-600 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">1</span>
                            Acceptance of Terms
                        </h3>
                        <p>
                            By installing and using the Textglow Chrome Extension, you agree to these Terms of Service. If you do not agree, please do not use the extension.
                        </p>

                        <h3 className="flex items-center">
                            <span className="bg-brand-100 text-brand-600 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">2</span>
                            Description of Service
                        </h3>
                        <p>
                            Textglow provides AI-powered text polishing and rewriting services directly within your browser. We offer both a Free version (requiring user's own API key) and a Pro version (inclusive of AI processing).
                        </p>

                        <h3 className="flex items-center">
                            <span className="bg-brand-100 text-brand-600 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">3</span>
                            User Conduct
                        </h3>
                        <p>
                            You are responsible for the content you process using Textglow. You agree not to use the service to generate harmful, illegal, or abusive content.
                        </p>

                        <h3 className="flex items-center">
                            <span className="bg-brand-100 text-brand-600 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">4</span>
                            Intellectual Property
                        </h3>
                        <p>
                            The Textglow extension, including its code, design, and branding, is owned by Textglow. The content you generate using the service belongs to you.
                        </p>

                        <h3 className="flex items-center">
                            <span className="bg-brand-100 text-brand-600 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">5</span>
                            Payments and Refunds
                        </h3>
                        <p>
                            Pro subscriptions are billed monthly or annually. You may cancel at any time. Refunds are handled on a case-by-case basis.
                        </p>

                        <h3 className="flex items-center">
                            <span className="bg-brand-100 text-brand-600 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">6</span>
                            Disclaimer of Warranties
                        </h3>
                        <p>
                            The service is provided "as is" without warranties of any kind. We do not guarantee that the service will be uninterrupted or error-free.
                        </p>

                        <h3 className="flex items-center">
                            <span className="bg-brand-100 text-brand-600 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">7</span>
                            Limitation of Liability
                        </h3>
                        <p>
                            Textglow shall not be liable for any indirect, incidental, or consequential damages arising from your use of the service.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
