import { Button } from '../ui/Button';
import { Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingCardProps {
    title: string;
    subtitle: string;
    price: string;
    period: string;
    features: string[];
    isPro?: boolean;
    isYearly?: boolean;
    buttonText: string;
    buttonLink: string;
    delay?: number;
}

export const PricingCard = ({
    title,
    subtitle,
    price,
    period,
    features,
    isPro = false,
    isYearly = false,
    buttonText,
    buttonLink,
    delay = 0
}: PricingCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className={`
                rounded-2xl shadow-xl p-8 flex flex-col relative overflow-hidden
                ${isPro ? 'bg-slate-900 border border-slate-800' : 'bg-white border border-slate-200'}
            `}
        >
            {isPro && (
                <div className="absolute top-0 right-0 bg-brand-500/10 w-32 h-32 rounded-bl-full"></div>
            )}

            <div className="mb-6 relative">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className={`text-2xl font-bold ${isPro ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
                        <p className={`mt-2 ${isPro ? 'text-slate-400' : 'text-slate-500'}`}>{subtitle}</p>
                    </div>
                    {isPro && (
                        <div className="bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Sparkles className="w-3 h-3 mr-1" />
                            POPULAR
                        </div>
                    )}
                </div>
            </div>

            <div className="mb-6">
                <span className={`text-4xl font-bold ${isPro ? 'text-white' : 'text-slate-900'}`}>
                    {price}
                </span>
                <span className={isPro ? 'text-slate-400' : 'text-slate-500'}>/{period}</span>
                {isYearly && isPro && (
                    <div className="text-sm text-brand-300 mt-1 font-medium">Save $21 a year</div>
                )}
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <Check className={`w-5 h-5 mr-2 flex-shrink-0 ${isPro ? 'text-brand-400' : 'text-brand-500'}`} />
                        <span className={isPro ? 'text-slate-200' : 'text-slate-600 font-medium'}>
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>

            <Button
                variant={isPro ? 'primary' : 'secondary'}
                className={`w-full ${isPro ? 'bg-brand-600 hover:bg-brand-700 text-white border-none shadow-[0_0_20px_rgba(14,165,233,0.3)]' : ''}`}
                href={buttonLink}
            >
                {buttonText}
            </Button>
        </motion.div>
    );
};
