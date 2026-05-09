import { PricingCard } from './PricingCard';
import { useState } from 'react';

interface PricingSectionProps {
    headingLevel?: 'h1' | 'h2';
}

export const PricingSection = ({ headingLevel = 'h2' }: PricingSectionProps) => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
    const Heading = headingLevel;

    const monthlyLink = "https://buy.stripe.com/9B6fZjeoVfP8dAg6oIc3m08";
    const yearlyLink = "https://buy.stripe.com/9B69AV5SpbyS8fW3cwc3m07";

    return (
        <section id="pricing" className="py-20 relative overflow-hidden bg-slate-50">
            {/* Background blobs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl z-0 pointer-events-none opacity-20">
                <div className="absolute top-40 left-0 w-96 h-96 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute top-40 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <Heading className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Better Writing Shouldn't Cost a Fortune</Heading>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                        Start free. Upgrade when you can't live without it. Cancel anytime.
                    </p>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center space-x-4">
                        <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
                        <button
                            className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 bg-brand-600"
                            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                            role="switch"
                            aria-checked={billingCycle === 'yearly'}
                        >
                            <span
                                aria-hidden="true"
                                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${billingCycle === 'yearly' ? 'translate-x-5' : 'translate-x-0'}`}
                            />
                        </button>
                        <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-500'}`}>
                            Yearly <span className="text-brand-500 font-bold">(Save 35%)</span>
                        </span>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <PricingCard
                        title="Free"
                        subtitle="Try it — no strings attached"
                        price="$0"
                        period="month"
                        features={[
                            "10 rewrites per day",
                            "All 10 tones included",
                            "Works inside Gmail, Slack, LinkedIn",
                            "Up to 800 characters per rewrite",
                            "No account required — install and go",
                            "Privacy-first — text is never stored"
                        ]}
                        buttonText="Install Free"
                        buttonLink="https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf"
                    />

                    <PricingCard
                        isPro={true}
                        title="Pro"
                        subtitle="For professionals who write for a living"
                        price={billingCycle === 'monthly' ? '$4.99' : '$3.25'}
                        originalPrice={billingCycle === 'yearly' ? '$4.99' : undefined}
                        period="month"
                        yearlyNote={billingCycle === 'yearly' ? "Billed $39/year · Save $20.88" : undefined}
                        features={[
                            "⚡ One-Click Rewrite (Exclusive)",
                            "150 rewrites per day",
                            "Up to 3,000 characters per rewrite",
                            "Priority AI — responses in under 1s",
                            "Early access to new features",
                            "Support the indie developer ❤️"
                        ]}
                        buttonText="Upgrade to Pro"
                        buttonLink={billingCycle === 'monthly' ? monthlyLink : yearlyLink}
                        isYearly={billingCycle === 'yearly'}
                        delay={0.1}
                    />
                </div>
            </div>
        </section>
    );
};
