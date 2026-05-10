import { Playground } from './Playground';

export const PlaygroundSection = () => {
    return (
        <section id="playground" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl z-0 pointer-events-none opacity-20">
                <div className="absolute top-40 left-0 w-96 h-96 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute top-40 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Try it yourself</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Type a messy draft below and see how TextGlow rewrites it in seconds.
                    </p>
                </div>

                <Playground />
            </div>
        </section>
    );
};
