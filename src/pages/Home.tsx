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
                <title>Textglow - AI Text Polisher & Rewriter for Chrome</title>
                <meta name="description" content="Instantly polish and rewrite text inside any website (Gmail, Slack, LinkedIn) with Textglow. No copy-pasting required. Install the free Chrome extension." />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://textglow.io/" />
                <meta property="og:title" content="Textglow - Polish Your Text Instantly" />
                <meta property="og:description" content="Instantly polish and rewrite text inside any website with Textglow. No copy-pasting required." />
                <meta property="og:image" content="https://textglow.io/og-image.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://textglow.io/" />
                <meta property="twitter:title" content="Textglow - Polish Your Text Instantly" />
                <meta property="twitter:description" content="Instantly polish and rewrite text inside any website with Textglow. No copy-pasting required." />
                <meta property="twitter:image" content="https://textglow.io/og-image.png" />
            </Helmet>

            <Hero />
            <ProblemSolution />
            <HowItWorks />
            <Features />
            <PricingSection />
        </div>
    );
};
