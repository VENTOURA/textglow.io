export const Privacy = () => {
    return (
        <div className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
                <p className="text-slate-500">Last updated: December 24, 2024</p>
            </div>

            <div className="prose prose-slate prose-lg">
                <p>
                    At Textglow, your privacy is our top priority. We believe that your writing belongs to you, and we've designed our extension to respect that.
                </p>

                <h3>1. Data Processing</h3>
                <p>
                    Textglow only processes the specific text you explicitly select and submit for polishing. We do not keylog, track your browsing history, or read your emails/messages outside of the specific text you choose to rewrite.
                </p>

                <h3>2. Data Storage</h3>
                <p>
                    We do not permanently store the text you submit for polishing. Once the text has been processed by our AI and returned to you, it is discarded from our processing servers.
                </p>

                <h3>3. Third-Party Services</h3>
                <p>
                    For the Free plan, you use your own OpenAI API key, meaning your data communicates directly between your browser and OpenAI's servers, subject to their privacy policy.
                    For the Pro plan, we use trusted third-party AI providers to process your text securely.
                </p>

                <h3>4. No Data Selling</h3>
                <p>
                    We do not sell, rent, or share your personal data with advertisers or third parties.
                </p>

                <h3>5. Contact Us</h3>
                <p>
                    If you have any questions about this privacy policy, please contact us at support@textglow.app.
                </p>
            </div>
        </div>
    );
};
