import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "What exactly does Textglow do?",
        answer: "Textglow is your secret weapon for writing. It lives in your browser and helps you instantly rewrite emails, LinkedIn posts, or chat messages. Whether you want to sound more professional, friendlier, or more concise, Textglow does the heavy lifting for you."
    },
    {
        question: "Does it work on my favorite sites?",
        answer: "Yes! Textglow works seamlessly on Gmail, LinkedIn, Facebook, Slack (Web), Discord, and almost any other text area on the web. Just click the sparkle icon that appears when you focus on a text field."
    },
    {
        question: "Do I need an OpenAI API key to use it?",
        answer: "Nope! We’ve made it incredibly easy. Free users get 10 rewrites per day using our own high-speed AI infrastructure. No keys, no technical setup. Just install and write."
    },
    {
        question: "What is the 'One-Click Magic' feature?",
        answer: "Exclusive to Pro users, One-Click Magic allows you to rewrite your text instantly without ever opening a selection modal. Your draft is replaced with a rewritten version in a single click, saving you even more time."
    },
    {
        question: "What are the benefits of Textglow Pro?",
        answer: "Pro unlocks the full potential of Textglow: **150 rewrites per day**, the **One-Click Magic** mode, a massive **3,000 character limit** per message, and priority access to our fastest AI models."
    },
    {
        question: "Is my writing private and secure?",
        answer: "Absolutely. We believe your words are yours alone. Your text is processed securely to generate the rewrite and is **never stored, sold, or used to train AI models.** Once the rewrite is done, the data is gone."
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
                            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                                openIndex === index 
                                ? 'border-blue-200 bg-gradient-to-br from-blue-50/50 to-white shadow-md' 
                                : 'border-slate-200 bg-white hover:border-slate-300'
                            }`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <span className={`text-lg font-bold transition-colors duration-300 ${openIndex === index ? 'text-blue-700' : 'text-slate-900'} pr-8`}>
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <div className="bg-blue-100 p-1.5 rounded-full">
                                        <ChevronUp className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                    </div>
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
