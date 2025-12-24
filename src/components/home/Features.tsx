import { motion } from 'framer-motion';
import { Zap, Globe, Sliders, Shield, Layout, UserX } from 'lucide-react';

const features = [
    {
        icon: Zap,
        title: "One-Click Polish",
        description: "Instantly rewrite and improve your text without leaving your current tab."
    },
    {
        icon: Globe,
        title: "Works Everywhere",
        description: "Compatible with Gmail, LinkedIn, Slack, Twitter, and almost any other site."
    },
    {
        icon: Sliders,
        title: "Multiple Tones",
        description: "Choose from professional, friendly, concise, or confident tones."
    },
    {
        icon: Layout,
        title: "No Context Switching",
        description: "Stay in your flow. No more switching tabs to access AI tools."
    },
    {
        icon: Shield,
        title: "Privacy First",
        description: "We don't store your keystrokes. Text is processed securely and ephemeral."
    },
    {
        icon: UserX,
        title: "No Account Needed",
        description: "Start using it immediately. No complex sign-up process required."
    }
];

export const Features = () => {
    return (
        <section className="py-20 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Everything You Need</h2>
                    <p className="text-lg text-slate-400">Power-packed features for modern professionals.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-colors"
                        >
                            <feature.icon className="w-8 h-8 text-brand-400 mb-4" />
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-slate-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
