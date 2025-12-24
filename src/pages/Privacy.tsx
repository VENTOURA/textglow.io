import { Helmet } from 'react-helmet-async';

export const Privacy = () => {
    return (
        <div className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Helmet>
                <title>Privacy Policy - Textglow</title>
                <meta name="description" content="Privacy Policy for Textglow. We respect your privacy and process text securely." />
            </Helmet>

            <div className="mb-12">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
                <p className="text-slate-500">Last updated: December 25, 2024</p>
            </div>

            <div className="prose prose-slate prose-lg">
                <p>
                    At Textglow, we take your privacy seriously. This Privacy Policy explains how we collect, use, and disclose information, and your rights in relation to that information. This policy applies to the Textglow Chrome Extension.
                </p>

                <h3>1. Information We Collect</h3>
                <p>
                    <strong>Website Content (Selected Text):</strong> The core functionality of Textglow requires accessing text that you explicitly select on web pages. We <strong>only</strong> access and process the specific text you highlight and choose to submit for polishing. We do not passively monitor, record, or store your browsing history, passwords, or other page content.
                </p>
                <p>
                    <strong>Usage Data:</strong> We may collect anonymous, aggregated usage statistics (e.g., number of polishes performed) to improve service stability and performance.
                </p>

                <h3>2. How We Use Your Information</h3>
                <p>
                    The text you submit is sent to our AI processing providers solely for the purpose of generating the polished or rewritten version.
                </p>
                <ul>
                    <li><strong>AI Processing:</strong> Your text is processed transiently by our AI models to provide the service.</li>
                    <li><strong>Service Improvement:</strong> We use aggregated usage data to identify bugs and improve features.</li>
                </ul>

                <h3>3. Data Retention</h3>
                <p>
                    We do <strong>not</strong> permanently store the text content you submit for polishing. Once the rewritten text is returned to your browser, the original and processed text data is discarded from our processing servers.
                </p>

                <h3>4. Data Sharing and Disclosure</h3>
                <p>
                    We do not sell, trade, or rent your personal identification information to others.
                </p>
                <p>
                    <strong>Third-Party Service Providers:</strong> We use trusted third-party providers (such as OpenAI) to perform the AI text generation. These providers adhere to strict data security standards.
                </p>

                <h3>5. Data Security</h3>
                <p>
                    We implement appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access or disclosure of your information. All data transmission occurs over secure SSL/TLS encrypted connections.
                </p>

                <h3>6. Your Rights</h3>
                <p>
                    You have the right to access, correct, or delete your personal information. Since we do not store your text content or require user accounts for the basic service, we inherently minimize the personal data we hold.
                </p>

                <h3>7. Changes to This Policy</h3>
                <p>
                    We have the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage you to frequently check this page for any changes.
                </p>

                <h3>8. Contact Us</h3>
                <p>
                    If you have any questions about this Privacy Policy, the practices of this extension, or your dealings with this extension, please contact us at: <a href="mailto:support@textglow.app">support@textglow.app</a>.
                </p>
            </div>
        </div>
    );
};
