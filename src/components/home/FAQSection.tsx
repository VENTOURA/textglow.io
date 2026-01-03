import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "What is Textglow?",
        answer: "Textglow is a browser-based AI writing assistant that instantly rewrites your selected text in different tones to match your needs perfectly."
    },
    {
        question: "Where does Textglow work?",
        answer: "It works anywhere you type online! Whether you're drafting emails in Gmail, chatting on Slack or Discord, filling out forms, or writing documents in Google Docs, Textglow is there to help."
    },
    {
        question: "Is my text private and secure?",
        answer: "Absolutely. Your privacy is our priority. Your text is only processed to generate the rewrites you request and is never stored, tracked, or sold to third parties."
    },
    {
        question: "What’s the difference between Free and Pro?",
        answer: "The **Free** plan gives you 30 polishes per day with 1,000 characters per rewrite, requiring your own OpenAI API key. The **Pro** plan offers 300 polishes per day with a generous 3,000 characters per rewrite, using our optimized API key for a seamless experience with no setup required."
    },
    {
        question: "How do I upgrade or cancel Pro?",
        answer: "You can upgrade to Pro anytime via our secure Stripe checkout. If you ever need to cancel, you can do so instantly directly from the extension settings menu with just one click."
    }
];

export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-white border-t border-slate-100">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-slate-600">Got questions? We've got answers.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-slate-300 transition-colors duration-200"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500 rounded-xl"
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <span className="text-lg font-medium text-slate-900 pr-8">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-brand-500 flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                                )}
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        id={`faq-answer-${index}`}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* JSON-LD Schema for SEO */}
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            ${faqs.map(faq => `
                            {
                                "@type": "Question",
                                "name": "${faq.question}",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "${faq.answer}"
                                }
                            }`).join(',')}
                        ]
                    }
                    `}
                </script>
            </div>
        </section>
    );
};
