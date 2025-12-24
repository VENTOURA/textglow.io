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
            </Helmet>

            <Hero />
            <ProblemSolution />
            <HowItWorks />
            <Features />
            <PricingSection />
        </div>
    );
};
