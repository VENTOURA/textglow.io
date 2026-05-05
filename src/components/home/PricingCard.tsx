import { Button } from '../ui/Button';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
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
                rounded-2xl shadow-xl p-8 flex flex-col relative overflow-hidden transition-all duration-300
                ${isPro 
                    ? 'bg-slate-900 border border-slate-800 scale-105 z-10 shadow-brand-500/10' 
                    : 'bg-white border border-slate-200 hover:shadow-2xl'}
            `}
        >
            {isPro && (
                <div className="absolute top-0 right-0 bg-brand-500/10 w-32 h-32 rounded-bl-full blur-2xl"></div>
            )}

            <div className="mb-6 relative">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className={`text-2xl font-bold ${isPro ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
                        <p className={`mt-2 ${isPro ? 'text-slate-400' : 'text-slate-500'}`}>{subtitle}</p>
                    </div>
                    {isPro && (
                        <div className="bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full text-xs font-semibold flex items-center border border-brand-500/30">
                            <Sparkles className="w-3 h-3 mr-1" />
                            POPULAR
                        </div>
                    )}
                </div>
            </div>

            <div className="mb-6">
                <div className="flex items-baseline">
                    <span className={`text-4xl font-bold ${isPro ? 'text-white' : 'text-slate-900'}`}>
                        {price}
                    </span>
                    <span className={`ml-1 ${isPro ? 'text-slate-400' : 'text-slate-500'}`}>/{period}</span>
                </div>
                {isYearly && isPro && (
                    <div className="text-sm text-brand-400 mt-1 font-medium flex items-center">
                        <span className="w-1 h-1 bg-brand-400 rounded-full mr-2"></span>
                        Save $21 a year
                    </div>
                )}
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${isPro ? 'text-brand-400' : 'text-brand-500'}`} />
                        <span className={isPro ? 'text-slate-300' : 'text-slate-600 font-medium'}>
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>

            <Button
                variant={isPro ? 'pro' : 'secondary'}
                size="lg"
                className="w-full group"
                href={buttonLink}
            >
                <span className="mr-2">{buttonText}</span>
                <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${isPro ? 'text-white' : 'text-slate-400'}`} />
            </Button>
        </motion.div>
    );
};
