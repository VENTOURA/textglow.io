import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export const Privacy = () => {
    return (
        <div className="relative overflow-hidden min-h-screen bg-slate-50 pt-24 pb-20">
            <Helmet>
                <title>Privacy Policy - Textglow</title>
                <meta name="description" content="Privacy Policy for Textglow. We respect your privacy and process text securely." />
            </Helmet>

            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">Privacy Policy</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-6">Transparency is our core value. Here's how we handle your data.</p>
                    <div className="w-20 h-1 bg-gradient-to-r from-brand-400 to-indigo-400 mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 text-justify"
                >
                    <div className="prose prose-slate prose-lg max-w-none hover:prose-a:text-brand-600 prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600">
                        <p className="lead">
                            At Textglow, we take your privacy seriously. This Privacy Policy explains how we collect, use, and disclose information, and your rights in relation to that information. This policy applies to the Textglow Chrome Extension.
                        </p>

                        <h3 className="flex items-center group">
                            <span className="bg-brand-100 text-brand-600 w-10 h-10 rounded-xl flex items-center justify-center text-lg mr-4 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">1</span>
                            Information We Collect
                        </h3>
                        <p>
                            <strong>Website Content (Selected Text):</strong> The core functionality of Textglow requires accessing text that you explicitly select on web pages. We <strong>only</strong> access and process the specific text you highlight and choose to submit for polishing. We do not passively monitor, record, or store your browsing history, passwords, or other page content.
                        </p>
                        <p>
                            <strong>Account Information (Pro Users):</strong> If you upgrade to our Pro plan, we collect your email address to manage your subscription and verify your "Pro" status across devices.
                        </p>
                        <p>
                            <strong>Payment Information:</strong> All payments are processed securely by our third-party payment processor, Stripe. We <strong>do not</strong> store or have access to your credit card numbers or banking information.
                        </p>
                        <p>
                            <strong>Usage Data:</strong> We may collect anonymous, aggregated usage statistics (e.g., number of polishes performed) to improve service stability and performance.
                        </p>

                        <h3 className="flex items-center group">
                            <span className="bg-brand-100 text-brand-600 w-10 h-10 rounded-xl flex items-center justify-center text-lg mr-4 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">2</span>
                            How We Use Your Information
                        </h3>
                        <p>
                            The text you submit is sent to our AI processing providers solely for the purpose of generating the polished or rewritten version.
                        </p>
                        <ul className="list-none pl-0 space-y-2">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-brand-400 rounded-full mt-2.5 mr-3"></span>
                                <span><strong>AI Processing:</strong> Your text is processed transiently by our AI models to provide the service.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-brand-400 rounded-full mt-2.5 mr-3"></span>
                                <span><strong>Subscription Management:</strong> We use your email to verify your subscription status and deliver Pro features.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-brand-400 rounded-full mt-2.5 mr-3"></span>
                                <span><strong>Service Improvement:</strong> We use aggregated usage data to identify bugs and improve features.</span>
                            </li>
                        </ul>

                        <h3 className="flex items-center group">
                            <span className="bg-brand-100 text-brand-600 w-10 h-10 rounded-xl flex items-center justify-center text-lg mr-4 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">3</span>
                            Data Retention
                        </h3>
                        <p>
                            We do <strong>not</strong> permanently store the text content you submit for polishing. Once the rewritten text is returned to your browser, the original and processed text data is discarded from our processing servers. Account information (email) is retained only as long as your subscription is active or as required by law.
                        </p>

                        <h3 className="flex items-center group">
                            <span className="bg-brand-100 text-brand-600 w-10 h-10 rounded-xl flex items-center justify-center text-lg mr-4 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">4</span>
                            Data Sharing and Disclosure
                        </h3>
                        <p>
                            We do not sell, trade, or rent your personal identification information to others.
                        </p>
                        <p>
                            <strong>Third-Party Service Providers:</strong>
                        </p>
                        <ul className="list-none pl-0 space-y-2">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-brand-400 rounded-full mt-2.5 mr-3"></span>
                                <span><strong>AI Providers (e.g., OpenAI):</strong> To perform text generation.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-brand-400 rounded-full mt-2.5 mr-3"></span>
                                <span><strong>Payment Processors (Stripe):</strong> To securely handle billing and subscription management.</span>
                            </li>
                        </ul>
                        <br />

                        <h3 className="flex items-center group">
                            <span className="bg-brand-100 text-brand-600 w-10 h-10 rounded-xl flex items-center justify-center text-lg mr-4 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">5</span>
                            Data Security
                        </h3>
                        <p>
                            We implement appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access or disclosure of your information. All data transmission occurs over secure SSL/TLS encrypted connections.
                        </p>

                        <h3 className="flex items-center group">
                            <span className="bg-brand-100 text-brand-600 w-10 h-10 rounded-xl flex items-center justify-center text-lg mr-4 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">6</span>
                            Your Rights
                        </h3>
                        <p>
                            You have the right to access, correct, or delete your personal information. You can manage or cancel your subscription at any time via the "Manage Subscription" portal provided by Stripe. Since we do not store your text content, we inherently minimize the personal data we hold.
                        </p>

                        <h3 className="flex items-center group">
                            <span className="bg-brand-100 text-brand-600 w-10 h-10 rounded-xl flex items-center justify-center text-lg mr-4 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">7</span>
                            Changes to This Policy
                        </h3>
                        <p>
                            We have the discretion to update this privacy policy at any time. We encourage you to frequently check this page for any changes.
                        </p>

                        <h3 className="flex items-center group">
                            <span className="bg-brand-100 text-brand-600 w-10 h-10 rounded-xl flex items-center justify-center text-lg mr-4 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">8</span>
                            Contact Us
                        </h3>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <p className="mb-0">
                                If you have any questions about this Privacy Policy, the practices of this extension, or your dealings with this extension, please contact us at: <a href="mailto:support@textglow.io" className="font-bold text-brand-600 no-underline hover:underline">support@textglow.io</a>.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
