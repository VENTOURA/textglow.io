import { Star, Shield, Languages, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "I manage 40+ client emails a day. I used to draft important ones in ChatGPT, paste them back into Gmail, then spend 5 minutes editing out the AI-speak. TextGlow does it in 2 seconds without leaving my inbox. I'm never going back.",
        author: "Account Executive",
        company: "B2B SaaS company"
    },
    {
        quote: "English is my second language. Grammarly catches my grammar mistakes, but my emails still sounded stiff and over-formal. TextGlow is the first tool that makes me sound like a native speaker, not just a correct one.",
        author: "Engineering Lead",
        company: "Remote startup, originally from São Paulo"
    },
    {
        quote: "I was skeptical! Just another AI writing tool? But the in-place rewriting is genuinely different. I type my rough thought in Slack, click the sparkle, pick Friendly, and it's perfect. My team thinks my communication skills improved. I didn't tell them why.",
        author: "Product Manager",
        company: "Fortune 500 company"
    }
];

const stats = [
    { icon: <Star className="w-5 h-5 text-yellow-400 fill-current" />, value: "5.0", label: "Chrome Web Store rating" },
    { icon: <Languages className="w-5 h-5 text-brand-500" />, value: "50+", label: "Languages supported" },
    { icon: <Zap className="w-5 h-5 text-brand-500" />, value: "10", label: "Tones for every context" },
    { icon: <Shield className="w-5 h-5 text-brand-500" />, value: "Zero", label: "Text stored — ever" }
];

export const SocialProof = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-slate-50/50 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Trusted by Professionals Who Write for a Living</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative"
                        >
                            <div className="flex text-yellow-400 mb-6">
                                {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                            </div>
                            <p className="text-slate-700 text-lg leading-relaxed mb-8">"{t.quote}"</p>
                            <div>
                                <p className="font-bold text-slate-900">{t.author}</p>
                                <p className="text-slate-500 text-sm mt-1">{t.company}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-800">
                        {stats.map((s, i) => (
                            <div key={i} className={`flex flex-col items-center text-center ${i === 0 ? '' : 'pl-8'}`}>
                                <div className="bg-slate-800/50 p-3 rounded-2xl mb-4">
                                    {s.icon}
                                </div>
                                <p className="text-3xl font-bold text-white mb-2">{s.value}</p>
                                <p className="text-slate-400 text-sm font-medium">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
