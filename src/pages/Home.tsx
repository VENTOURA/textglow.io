import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/home/Hero';
import { ProblemSolution } from '../components/home/ProblemSolution';
import { HowItWorks } from '../components/home/HowItWorks';
import { Features } from '../components/home/Features';
import { PricingSection } from '../components/home/PricingSection';

export const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Helmet>
                <title>Textglow - AI Text Polisher & Rewriter Extension for Chrome</title>
                <meta name="description" content="The tailored AI writing assistant for Chrome. Instantly polish, rewrite, and fix grammar in emails, chats, and docs without copy-pasting." />
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
                        {
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            "name": "Textglow",
                            "operatingSystem": "Chrome",
                            "applicationCategory": "ProductivityApplication",
                            "offers": {
                                "@type": "Offer",
                                "price": "0",
                                "priceCurrency": "USD"
                            },
                            "description": "Textglow is an AI-powered Chrome extension that helps you polish, rewrite, and improve your emails, messages, and documents instantly inside any website.",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "5",
                                "ratingCount": "12"
                            }
                        }
                    `}
                </script>
            </Helmet>

            <Hero />
            <ProblemSolution />
            <HowItWorks />
            <Features />
            <PricingSection />
        </div>
    );
};
