import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/Button';

export const Offer = () => {
    return (
        <div className="bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <Helmet>
                <title>Special Offer - Textglow</title>
                <meta name="robots" content="noindex" />
            </Helmet>
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                <div className="bg-gradient-to-r from-brand-600 to-purple-600 px-8 py-12 text-center text-white">
                    <h1 className="text-4xl font-extrabold mb-4">Get $1,030 in AI API Credits 🎁</h1>
                    <p className="text-xl opacity-90">Exclusive Hyperagent Launch Early Bird Bonus for our First 20 Yearly Subscribers.</p>
                </div>
                <div className="p-8 sm:p-12 text-slate-700 space-y-6 text-lg">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6 text-blue-900 space-y-3">
                        <h3 className="font-bold text-xl mb-2 text-blue-950">What is Hyperagent.com?</h3>
                        <p>The elite, cloud-native evolution of <strong>OpenClaw</strong>, now backed by <strong>Airtable</strong>.</p>
                        <p>It moves beyond "chat" into pure execution. Hyperagent deploys a managed workforce of autonomous agents that browse, code, and master your business logic to deliver weeks of work overnight. No complex setup, no limitations—just scalable, self-improving intelligence.</p>
                        <p className="font-bold italic">Stop prompting. Start deploying.</p>
                    </div>

                    <p>
                        We have partnered with <strong>Hyperagent.com</strong> to offer an exclusive <strong>launch early bird bonus</strong>. The first 20 users to upgrade to our <strong>Textglow yearly plan</strong> will receive an exclusive referral link.
                    </p>
                    <p>
                        When you use this link to subscribe to any <strong>Hyperagent paid plan (starting at just $20/m)</strong>, you will instantly unlock a massive <span className="font-bold text-brand-600">$1,030 API credit bonus</span> ($1,000 baseline + $30 minimum bonus) to use on the latest LLMs, including the flagship <strong>Anthropic Claude Opus 4.7</strong>!
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">How it works</h2>
                    <ol className="list-decimal pl-6 space-y-4">
                        <li><strong>Upgrade to the Textglow Yearly Plan:</strong> Subscribe to our yearly plan today.</li>
                        <li><strong>Be among the first 20:</strong> Spots are strictly limited. If you are reading this page, there are likely still spots available!</li>
                        <li><strong>Leave a Review:</strong> Leave a 5-star review for the Textglow extension in the <a href="https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Google Chrome Extension Marketplace</a>.</li>
                        <li><strong>Receive your Link:</strong> We will automatically send your exclusive Hyperagent link to your Stripe email (or contact us at support@textglow.io).</li>
                        <li><strong>Subscribe to Hyperagent & Get Credits:</strong> Use the link to sign up for any Hyperagent paid plan (starting at $20/m) to instantly receive your $1,030 in API credits!</li>
                    </ol>

                    <hr className="border-slate-200 my-12" />

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-slate-900">Why Hyperagent is a Game-Changer</h2>
                        <p>
                            The era of isolated AI chat tools is ending. To truly scale your operations, you need digital employees that integrate directly into your existing workflows.
                        </p>
                        <p>
                            Hyperagent provides a fully equipped, virtual workspace where AI operates exactly like your top human performers—navigating complex software, analyzing live data, and executing multi-step projects from start to finish without needing constant supervision.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mt-8">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
                                <h4 className="font-bold text-lg text-slate-900 mb-2">True Autonomy</h4>
                                <p className="text-slate-600 text-base">Powered by the latest <strong>Anthropic Claude models</strong>, these agents don’t just talk—they browse the web, pull data from tools like Shopify and HubSpot, write code, and even build their own interactive apps to solve complex problems.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
                                <h4 className="font-bold text-lg text-slate-900 mb-2">Self-Improving Intelligence</h4>
                                <p className="text-slate-600 text-base">The more you use them, the smarter they get. They learn your brand’s voice, your specific data schemas, and your business logic to produce results that actually look like your team made them.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
                                <h4 className="font-bold text-lg text-slate-900 mb-2">Infrastructure for Scaling</h4>
                                <p className="text-slate-600 text-base">Backed by <strong>Airtable</strong>’s ecosystem, Hyperagent is built for the enterprise. It features an "Agent Command Center" where you can oversee an entire fleet, track costs, and evaluate output quality across your whole organization.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
                                <h4 className="font-bold text-lg text-slate-900 mb-2">The Founding 500</h4>
                                <p className="text-slate-600 text-base">To kickstart this new era, they are offering $10M in inference grants to companies going agent-first.</p>
                            </div>
                        </div>

                        <div className="bg-brand-50 border-l-4 border-brand-500 p-6 rounded-r-lg mt-8">
                            <h4 className="font-bold text-xl text-brand-900 mb-2">The Bottom Line</h4>
                            <p className="text-brand-800">
                                Hyperagent turns AI into a deep-work engine. Whether it’s sourcing elite technical talent or planning a city-wide marketing campaign, Hyperagent delivers "weeks of work, overnight" through a managed, scalable cloud platform.
                            </p>
                            <div className="mt-4">
                                <a href="https://hyperagent.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-bold text-brand-600 hover:text-brand-700 underline">
                                    Visit Hyperagent.com
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-12">
                        <h3 className="font-bold text-yellow-800 text-xl mb-2">⚠️ Warning: Limited Availability</h3>
                        <p className="text-yellow-700">This offer is strictly limited to the first 20 yearly subscribers. Once the cap is reached, this page will be taken down.</p>
                    </div>

                    <div className="flex justify-center mt-10">
                        <Button href="/pricing" className="w-full sm:w-auto text-lg px-8 py-3">
                            View Pricing & Upgrade Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
