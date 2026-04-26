import { motion } from 'framer-motion';
import { MousePointerClick, Wand2, MessageSquare } from 'lucide-react';

const steps = [
    {
        icon: MousePointerClick,
        title: "Write Your Draft",
        description: "Just type naturally in any email, chat, or document. Textglow is already watching."
    },
    {
        icon: Wand2,
        title: "Click the Sparkle",
        description: "Click the ✨ icon that appears in the corner of your text field to summon the magic."
    },
    {
        icon: MessageSquare,
        title: "Magic Transformation",
        description: "Your draft is instantly replaced with a polished version. Ready to impress!"
    }
];

export const HowItWorks = () => {
    return (
        <section className="py-20 bg-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">How It Works</h2>
                    <p className="text-lg text-slate-600">Three simple steps to better writing.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="text-center p-6"
                        >
                            <div className="w-16 h-16 mx-auto bg-brand-50 rounded-2xl flex items-center justify-center mb-6 text-brand-600">
                                <step.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-slate-600">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
