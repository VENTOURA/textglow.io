import { Helmet } from 'react-helmet-async';

export const Terms = () => {
    return (
        <div className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Helmet>
                <title>Terms of Service - Textglow</title>
                <meta name="description" content="Terms of Service for using Textglow Chrome Extension." />
            </Helmet>

            <div className="mb-12">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms of Service</h1>
                <p className="text-slate-500">Last updated: December 25, 2024</p>
            </div>

            <div className="prose prose-slate prose-lg">
                <h3>1. Acceptance of Terms</h3>
                <p>
                    By installing and using the Textglow Chrome Extension, you agree to these Terms of Service. If you do not agree, please do not use the extension.
                </p>

                <h3>2. Description of Service</h3>
                <p>
                    Textglow provides AI-powered text polishing and rewriting services directly within your browser. We offer both a Free version (requiring user's own API key) and a Pro version (inclusive of AI processing).
                </p>

                <h3>3. User Conduct</h3>
                <p>
                    You are responsible for the content you process using Textglow. You agree not to use the service to generate harmful, illegal, or abusive content.
                </p>

                <h3>4. Intellectual Property</h3>
                <p>
                    The Textglow extension, including its code, design, and branding, is owned by Textglow. The content you generate using the service belongs to you.
                </p>

                <h3>5. Payments and Refunds</h3>
                <p>
                    Pro subscriptions are billed monthly or annually. You may cancel at any time. Refunds are handled on a case-by-case basis.
                </p>

                <h3>6. Disclaimer of Warranties</h3>
                <p>
                    The service is provided "as is" without warranties of any kind. We do not guarantee that the service will be uninterrupted or error-free.
                </p>

                <h3>7. Limitation of Liability</h3>
                <p>
                    Textglow shall not be liable for any indirect, incidental, or consequential damages arising from your use of the service.
                </p>
            </div>
        </div>
    );
};
