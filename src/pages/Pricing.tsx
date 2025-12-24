import { Helmet } from 'react-helmet-async';
import { PricingSection } from '../components/home/PricingSection';

export const Pricing = () => {
    return (
        <>
            <Helmet>
                <title>Pricing - Textglow</title>
                <meta name="description" content="Simple pricing for Textglow. Free plan available. Upgrade to Pro for unlimited AI polishing." />
            </Helmet>
            <PricingSection />
        </>
    );
};
