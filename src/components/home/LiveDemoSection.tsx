import { DemoCard } from './DemoCard';

const demos = [
    {
        originalText: "john, iam sick today, can we do the meeting tomorrrow, cant today. thankyou",
        polishedText: "Dear John,\n\nI am unwell today and would like to reschedule our meeting for tomorrow. I appreciate your understanding.\n\nThank you.",
        tone: "Professional",
        delay: 0
    },
    {
        originalText: "john, iam sick today, can we do the meeting tomorrrow, cant today. thankyou in french languge",
        polishedText: "John, je suis malade aujourd'hui, peut-on faire la réunion demain ? Je ne peux pas aujourd'hui. Merci beaucoup ! (Et si tu as un remède miracle, je suis preneur !)",
        tone: "Funny",
        delay: 2000
    },
    {
        originalText: "john, iam sick today, can we do the meeting tomorrrow, cant today. thankyou",
        polishedText: "Hey John, I'm feeling a bit under the weather today. How about we reschedule our meeting for tomorrow? I promise I'll be in much better shape to help out then! Thanks a bunch! 😊",
        tone: "Flirty",
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
                        Watch how Textglow instantly transforms your writing in any context.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {demos.map((demo, index) => (
                        <div key={index} className="h-80">
                            <DemoCard
                                originalText={demo.originalText}
                                polishedText={demo.polishedText}
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
