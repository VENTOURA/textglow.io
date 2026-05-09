import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Download, PenTool, Check, Zap, Settings, Shield, User, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { PlaygroundSection } from '../components/home/PlaygroundSection';

export const HowToUse = () => {
    return (
        <div className="bg-white min-h-screen">
            <Helmet>
                <title>How to Use Textglow – Step-by-Step Guide</title>
                <meta name="description" content="Learn how to use Textglow to polish your writing instantly. Step-by-step guide on rewriting text, changing tones, and using the Chrome extension." />
                <meta name="keywords" content="how to use textglow, AI writing guide, text polisher tutorial, tone changer, chrome extension guide" />
                <link rel="canonical" href="https://textglow.io/how-to-use/" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://textglow.io/how-to-use/" />
                <meta property="og:title" content="How to Use Textglow – Step-by-Step Guide" />
                <meta property="og:description" content="Learn how to use Textglow to polish your writing instantly. Step-by-step guide." />
                <meta property="og:image" content="https://textglow.io/og-image.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="How to Use Textglow – Step-by-Step Guide" />
                <meta property="twitter:description" content="Learn how to use Textglow to polish your writing instantly. Step-by-step guide." />

                {/* Structured Data (JSON-LD) for HowTo */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "HowTo",
                            "name": "How to Use Textglow to Polish Text",
                            "description": "A simple guide to using the Textglow Chrome extension to instantly improve your writing.",
                            "step": [
                                {
                                    "@type": "HowToStep",
                                    "name": "Install & Pin",
                                    "text": "Add Textglow to Chrome from the Web Store and pin it to your toolbar.",
                                    "image": "https://textglow.io/images/step-install.png",
                                    "url": "https://textglow.io/how-to-use/#step1"
                                },
                                {
                                    "@type": "HowToStep",
                                    "name": "Type Your Text",
                                    "text": "Open any website like Gmail or LinkedIn and type your draft.",
                                    "image": "https://textglow.io/images/step-type.png",
                                    "url": "https://textglow.io/how-to-use/#step2"
                                },
                                {
                                    "@type": "HowToStep",
                                    "name": "Click to Polish",
                                    "text": "Click the Textglow icon, choose a tone, and click Polish to instantly replace your text.",
                                    "image": "https://textglow.io/images/step-polish.png",
                                    "url": "https://textglow.io/how-to-use/#step3"
                                }
                            ]
                        }
                    `}
                </script>
            </Helmet>

            {/* Section 1: Hero / Overview */}
            <section className="pt-32 pb-16 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6"
                    >
                        How to Use Textglow
                    </motion.h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Textglow is your instant AI writing assistant. It works directly inside Gmail, Slack, LinkedIn, and almost anywhere else you type on the web. It fixes grammar, improves clarity, and changes the tone of your text without any copy-pasting.
                    </p>
                </div>
                {/* Decorative blob */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl z-0 pointer-events-none opacity-20">
                    <div className="absolute top-20 right-0 w-96 h-96 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
                </div>
            </section>

            {/* Section 2: Step by Step Guide */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Getting Started in 3 Steps</h2>

                    <div className="space-y-12">
                        {/* Step 1 */}
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex-shrink-0">
                                <Download className="w-8 h-8 text-brand-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">1. Install & Pin</h3>
                                <p className="text-slate-600 mb-4">
                                    Add Textglow to Chrome from the Web Store. Once installed, we recommend pinning it to your browser toolbar for easy access.
                                </p>
                                <Button size="sm" href="https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf" variant="secondary">Install Extension</Button>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex-shrink-0">
                                <PenTool className="w-8 h-8 text-brand-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">2. Type Your Text</h3>
                                <p className="text-slate-600">
                                    Open any website (like Gmail or LinkedIn) and type your draft. You don't need to be perfect—just get your ideas down.
                                </p>
                            </div>
                        </div>

                        {/* Step 3: Standard Polish */}
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex-shrink-0">
                                <Zap className="w-8 h-8 text-brand-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">3. Polish & Refine</h3>
                                <div className="prose text-slate-600">
                                    <p className="mb-2">Click the Textglow icon to open the polishing menu.</p>
                                    <ul className="list-disc list-inside space-y-2 mt-2">
                                        <li>Choose a <strong>Tone</strong> (your default tone is pre-selected).</li>
                                        <li>Click <strong>Polish</strong>.</li>
                                        <li>The menu closes and your text is <strong>instantly replaced</strong> by the AI-improved version. It's like magic!</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Step 4: Pro One-Click Polish */}
                        <div id="one-click" className="flex flex-col md:flex-row gap-8 items-start p-8 rounded-2xl bg-brand-50 border border-brand-100">
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-brand-200 flex-shrink-0">
                                <Sparkles className="w-8 h-8 text-brand-600" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-slate-900">One-Click Polish</h3>
                                    <span className="bg-brand-600 text-white text-[10px] px-2 py-0.5 rounded-full uppercase font-bold">Pro</span>
                                </div>
                                <div className="prose text-slate-600">
                                    <p className="mb-2 font-medium text-slate-900 text-lg">The ultimate productivity hack.</p>
                                    <p className="mb-4 text-slate-600">Enable <strong>One-Click Polish</strong> in settings to bypass all menus.</p>
                                    <ul className="list-disc list-inside space-y-2 mt-2">
                                        <li><strong>No menus.</strong> No need to open any windows.</li>
                                        <li><strong>No selecting.</strong> Just click the ✨ Sparkle Icon in the corner of your text field.</li>
                                        <li><strong>Instant magic.</strong> Your draft is replaced with the polished version in a single click.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <PlaygroundSection />

            {/* Section 3: Writing Tones */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Available Tones</h2>
                    <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
                        Tones change the style and feeling of your message without changing the meaning.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { name: "Professional", desc: "Clear, formal, and polite. Perfect for work emails." },
                            { name: "Friendly", desc: "Warm and approachable. Great for team chats." },
                            { name: "Confident", desc: "Strong and assertive. Good for negotiations." },
                            { name: "Concise", desc: "Short and direct. Removes fluff." },
                            { name: "Empathetic", desc: "Understanding and compassionate. Ideal for support." },
                            { name: "Persuasive", desc: "Convincing and compelling. Good for sales." },
                            { name: "Direct", desc: "Straightforward and to the point. No ambiguity." },
                            { name: "Polite", desc: "Courteous and respectful. Safe for any context." },
                            { name: "Funny", desc: "Humorous and lighthearted. Good for friends." },
                            { name: "Flirty", desc: "Playful, charming, and fun. Use responsibly! 😉" }
                        ].map((tone, i) => (
                            <div key={i} className="p-6 rounded-xl border border-slate-200 hover:border-brand-200 hover:bg-brand-50 transition-colors">
                                <h3 className="font-bold text-lg text-slate-900 mb-2">{tone.name}</h3>
                                <p className="text-sm text-slate-500">{tone.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4: Free vs Pro */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Free vs Pro Plans</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Free */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Free Plan</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                                    <span className="text-slate-600">Up to <strong>800 characters</strong> per rewrite</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                                    <span className="text-slate-600"><strong>10 polishes</strong> per day</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                                    <span className="text-slate-600">Access to all 10 tones</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                                    <span className="text-slate-600"><strong>No API Key needed</strong> (Ready to use)</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pro */}
                        <div className="bg-white p-8 rounded-2xl shadow-md border border-brand-100 ring-1 ring-brand-500/10">
                            <h3 className="text-2xl font-bold text-brand-600 mb-4">Pro Plan</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-brand-500 mr-3 mt-0.5" />
                                    <span className="text-slate-700"><strong>One-Click Polish</strong> (Instant replacement)</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-brand-500 mr-3 mt-0.5" />
                                    <span className="text-slate-700">Up to <strong>3,000 characters</strong> per rewrite</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-brand-500 mr-3 mt-0.5" />
                                    <span className="text-slate-700"><strong>150 polishes</strong> per day</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-brand-500 mr-3 mt-0.5" />
                                    <span className="text-slate-700">Faster, priority processing</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-brand-500 mr-3 mt-0.5" />
                                    <span className="text-slate-700">Early access to new features</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5 & 6: Settings & Stats */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <div className="mb-4 text-brand-600"><Settings className="w-8 h-8" /></div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Settings Menu</h3>
                            <p className="text-slate-600 mb-4">
                                Click the gear icon in the extension to access settings. Here you can:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2">
                                <li>Set your default preferred tone</li>
                                <li>Change output language</li>
                                <li>Manage your subscription</li>
                            </ul>
                        </div>
                        <div>
                            <div className="mb-4 text-brand-600"><User className="w-8 h-8" /></div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Tracking Usage</h3>
                            <p className="text-slate-600 mb-4">
                                Viewing your dashboard shows:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2">
                                <li>Daily polishes remaining</li>
                                <li>Current plan status</li>
                                <li>Character limits</li>
                            </ul>
                            <p className="text-sm text-slate-500 mt-4 italic">Note: We only count usage stats. We never store what you write.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7: Reassurance */}
            <section className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Shield className="w-12 h-12 text-slate-400 mx-auto mb-6" />
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Data is Safe</h2>
                    <p className="text-slate-600">
                        Textglow is designed with privacy first. Your text is sent securely to the AI solely for the purpose of rewriting it and is not stored, tracked, or used for training. 
                    </p>
                </div>
            </section>

        </div>
    );
};
