import { DemoCard } from './DemoCard';

const demos = [
    {
        originalText: "hey john, im sick today, can we reschedule the meeting? sorry about this",
        rewrittenText: "Hi John, I'm feeling under the weather today and won't be able to make our meeting. Could we reschedule for tomorrow or later this week? Apologies for the short notice — happy to work around your availability.",
        tone: "Professional",
        delay: 0
    },
    {
        originalText: "hey john, im sick today, can we reschedule the meeting? sorry about this",
        rewrittenText: "Hey John! I'm not feeling great today — think I need to sit this one out. Any chance we can push the meeting to tomorrow? Sorry to shuffle things around! 😊",
        tone: "Friendly",
        delay: 2000
    },
    {
        originalText: "TextGlow works in French, Spanish, German, and 50+ languages",
        rewrittenText: "John, je suis malade aujourd'hui, peut-on faire la réunion demain ? Je ne peux pas aujourd'hui. Merci beaucoup ! (Et si tu as un remède miracle, je suis preneur !)",
        tone: "Funny (French)",
        delay: 4000
    }
];

export const LiveDemoSection = () => {
    return (
        <section className="py-24 bg-slate-100 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">See it in Action</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Watch how TextGlow instantly transforms your writing in any context.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {demos.map((demo, index) => (
                        <div key={index} className="h-80">
                            <DemoCard
                                originalText={demo.originalText}
                                rewrittenText={demo.rewrittenText}
                                tone={demo.tone}
                                delay={demo.delay}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
