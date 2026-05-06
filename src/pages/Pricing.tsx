import { Helmet } from 'react-helmet-async';
import { PricingSection } from '../components/home/PricingSection';

export const Pricing = () => {
    return (
        <>
            <Helmet>
                <title>Textglow Pricing – Free AI Writing Assistant</title>
                <meta name="description" content="Simple pricing for Textglow. Free plan with 10 polishes/day. Upgrade to Pro for unlimited AI rewriting and one-click polish." />
                <link rel="canonical" href="https://textglow.io/pricing" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://textglow.io/pricing" />
                <meta property="og:title" content="Textglow Pricing – Free AI Writing Assistant" />
                <meta property="og:description" content="Simple pricing for Textglow. Free plan with 10 polishes/day. Upgrade to Pro for unlimited AI rewriting." />
                <meta property="og:image" content="https://textglow.io/og-image.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="Textglow Pricing – Free AI Writing Assistant" />
                <meta property="twitter:description" content="Simple pricing for Textglow. Free plan with 10 polishes/day. Upgrade to Pro for unlimited AI rewriting." />
            </Helmet>
            <PricingSection />
        </>
    );
};
