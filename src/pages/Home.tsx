import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/home/Hero';
import { ProblemSolution } from '../components/home/ProblemSolution';
import { LiveDemoSection } from '../components/home/LiveDemoSection';
import { HowItWorks } from '../components/home/HowItWorks';
import { Features } from '../components/home/Features';
import { PricingSection } from '../components/home/PricingSection';
import { FAQSection } from '../components/home/FAQSection';

export const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Helmet>
                <title>Textglow - AI Text Polisher & Rewriter Extension for Chrome</title>
                <meta name="description" content="The tailored AI writing assistant for Chrome. Instantly polish, rewrite, and fix grammar in emails, chats, and docs without copy-pasting." />
                <meta name="keywords" content="AI text polisher, email rewriter, grammar checker chrome extension, formalize text, AI writing assistant, text improver, professional writing tool" />
                <link rel="canonical" href="https://textglow.io/" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://textglow.io/" />
                <meta property="og:title" content="Textglow - AI Text Polisher & Rewriter Chrome Extension" />
                <meta property="og:description" content="Instantly polish and rewrite text inside any website with Textglow. No copy-pasting required." />
                <meta property="og:image" content="https://textglow.io/og-image.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://textglow.io/" />
                <meta property="twitter:title" content="Textglow - AI Text Polisher & Rewriter" />
                <meta property="twitter:description" content="Instantly polish and rewrite text inside any website with Textglow. No copy-pasting required." />
                <meta property="twitter:image" content="https://textglow.io/og-image.png" />

                {/* Structured Data (JSON-LD) */}
                <script type="application/ld+json">
                    {`
                        [
                            {
                                "@context": "https://schema.org",
                                "@type": "SoftwareApplication",
                                "name": "Textglow",
                                "operatingSystem": "Chrome, Chromium",
                                "applicationCategory": "ProductivityApplication",
                                "offers": {
                                    "@type": "Offer",
                                    "price": "0",
                                    "priceCurrency": "USD"
                                },
                                "description": "Textglow is an AI-powered Chrome extension that helps you polish, rewrite, and improve your emails, messages, and documents instantly inside any website.",
                                "aggregateRating": {
                                    "@type": "AggregateRating",
                                    "ratingValue": "4.9",
                                    "ratingCount": "120"
                                }
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "Organization",
                                "name": "Textglow",
                                "url": "https://textglow.io",
                                "logo": "https://textglow.io/logo.png",
                                "sameAs": [
                                    "https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf"
                                ]
                            }
                        ]
                    `}
                </script>
            </Helmet>

            <Hero />
            <LiveDemoSection />
            <ProblemSolution />
            <HowItWorks />
            <Features />
            <PricingSection />
            <FAQSection />
        </div>
    );
};
