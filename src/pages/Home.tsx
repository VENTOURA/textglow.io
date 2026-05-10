import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/home/Hero';
import { ProblemSolution } from '../components/home/ProblemSolution';
import { LiveDemoSection } from '../components/home/LiveDemoSection';
import { SocialProof } from '../components/home/SocialProof';
import { WhoIsThisFor } from '../components/home/WhoIsThisFor';
import { Features } from '../components/home/Features';
import { PricingSection } from '../components/home/PricingSection';
import { PlaygroundSection } from '../components/home/PlaygroundSection';
import { FAQSection } from '../components/home/FAQSection';

export const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Helmet>
                <title>TextGlow — AI Writing Assistant That Rewrites Your Tone in 2 Clicks</title>
                <meta name="description" content="Rewrite emails, Slack messages, and LinkedIn posts in 2 clicks with TextGlow. Choose 10 tones and write naturally across the web without copy-pasting." />
                <link rel="canonical" href="https://textglow.io/" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://textglow.io/" />
                <meta property="og:title" content="TextGlow — AI Writing Assistant That Rewrites Your Tone in 2 Clicks" />
                <meta property="og:description" content="Rewrite emails, Slack messages, and LinkedIn posts in 2 clicks with TextGlow. Choose 10 tones and write naturally across the web without copy-pasting." />
                <meta property="og:image" content="https://textglow.io/og-image.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="TextGlow — AI Writing Assistant That Rewrites Your Tone in 2 Clicks" />
                <meta property="twitter:description" content="Rewrite emails, Slack messages, and LinkedIn posts in 2 clicks with TextGlow. Choose 10 tones and write naturally across the web without copy-pasting." />
            </Helmet>

            <script type="application/ld+json">
                {`
                    [
                        {
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            "name": "TextGlow",
                            "operatingSystem": "Chrome, Chromium",
                            "applicationCategory": "ProductivityApplication",
                            "offers": {
                                "@type": "Offer",
                                "price": "0",
                                "priceCurrency": "USD"
                            },
                            "description": "TextGlow is an AI-powered Chrome extension that helps you refine, improve, and rewrite your emails, messages, and documents instantly inside any website."
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "TextGlow",
                            "url": "https://textglow.io/",
                            "logo": "https://textglow.io/logo.png",
                            "sameAs": [
                                "https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf"
                            ]
                        }
                    ]
                `}
            </script>

            <Hero />
            <LiveDemoSection />
            <PlaygroundSection />
            <SocialProof />
            <WhoIsThisFor />
            <ProblemSolution />
            <Features />
            <PricingSection />
            <FAQSection />
        </div>
    );
};
