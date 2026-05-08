import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const audiences = [
    {
        icon: "✉️",
        title: "Email Power Users",
        description: "Stop agonizing over every reply. Polish client emails, follow-ups, and difficult conversations in Gmail and Outlook — in 2 clicks.",
        linkText: "See how it works in Gmail",
        linkTo: "/gmail"
    },
    {
        icon: "💼",
        title: "LinkedIn Creators",
        description: "Write posts that sound like you — not ChatGPT. Polish your voice for thought leadership, DMs, and comments without losing authenticity.",
        linkText: "See how it works on LinkedIn",
        linkTo: "/linkedin"
    },
    {
        icon: "💬",
        title: "Remote Teams",
        description: "Nail the tone in every Slack message. Sound supportive to your team, direct to leadership, and professional to clients — all in the same afternoon.",
        linkText: "See how it works on Slack",
        linkTo: "/slack"
    },
    {
        icon: "🌍",
        title: "Non-Native Speakers",
        description: "Your English is correct. TextGlow makes it natural. Close the gap between grammatically right and native-sounding — in any language.",
        linkText: "See how it works for translation",
        linkTo: "/translate"
    }
];

export const WhoIsThisFor = () => {
    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">Built for How You Actually Write</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        TextGlow works inside every text field on the web. Here's how people are using it.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {audiences.map((a, i) => (
                        <Link key={i} to={a.linkTo} className="group block">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="h-full bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-300 transition-all duration-300 flex flex-col"
                            >
                                <div className="text-4xl mb-6 bg-slate-50 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-brand-50 group-hover:scale-110 transition-transform">
                                    {a.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">{a.title}</h3>
                                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                                    {a.description}
                                </p>
                                <div className="flex items-center text-brand-600 font-semibold text-sm mt-auto group-hover:underline">
                                    {a.linkText}
                                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
