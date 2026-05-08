import { Helmet } from 'react-helmet-async';
import { PricingSection } from '../components/home/PricingSection';
import { Check, X, ChevronDown, ChevronUp, Lock, Shield, CreditCard, Chrome, Star } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/ui/Button';

const FAQItem = ({ q, a }: { q: string; a: React.ReactNode }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-slate-200 rounded-2xl overflow-hidden mb-3">
            <button 
                onClick={() => setOpen(!open)} 
                className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
            >
                <span className="font-semibold text-slate-900 pr-4">{q}</span>
                {open ? <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />}
            </button>
            {open && <div className="px-5 pb-5"><p className="text-slate-600 leading-relaxed">{a}</p></div>}
        </div>
    );
};

export const Pricing = () => {
    const CHROME_URL = "https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf";

    return (
        <div className="bg-white pt-10">
            <Helmet>
                <title>TextGlow Pricing — AI Writing Assistant from $0/month | 3x Cheaper Than Grammarly</title>
                <meta name="description" content="Polish your writing in 2 clicks for free — or upgrade to Pro for $39/year. 10 tones, works inside Gmail, Slack, LinkedIn. 3x cheaper than Grammarly, no copy-pasting like ChatGPT." />
                <link rel="canonical" href="https://textglow.io/pricing" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://textglow.io/pricing" />
                <meta property="og:title" content="TextGlow Pricing — AI Writing Assistant from $0/month" />
                <meta property="og:description" content="Polish your writing in 2 clicks for free — or upgrade to Pro for $39/year. 3x cheaper than Grammarly." />
                <meta property="og:image" content="https://textglow.io/og-image.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="TextGlow Pricing — AI Writing Assistant from $0/month" />
                <meta property="twitter:description" content="Polish your writing in 2 clicks for free — or upgrade to Pro for $39/year. 3x cheaper than Grammarly." />
            </Helmet>

            <PricingSection />

            {/* Trust Badges */}
            <div className="border-b border-slate-200 bg-slate-50 pb-8">
                <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center gap-6 text-sm text-slate-500 font-medium">
                    <div className="flex items-center space-x-2"><Lock className="w-4 h-4 text-slate-400" /><span>Secure payments via Stripe</span></div>
                    <div className="flex items-center space-x-2"><Shield className="w-4 h-4 text-slate-400" /><span>No data stored — ever</span></div>
                    <div className="flex items-center space-x-2"><CreditCard className="w-4 h-4 text-slate-400" /><span>Cancel anytime</span></div>
                    <div className="flex items-center space-x-2"><Star className="w-4 h-4 text-yellow-400 fill-current" /><span>5.0 Chrome rating</span></div>
                </div>
            </div>

            {/* What is One-Click Polish? */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What's One-Click Polish?</h2>
                            <div className="prose prose-slate text-lg text-slate-600">
                                <p>With the free plan, you click the ✨ icon and choose from 10 tones — Professional, Friendly, Confident, and more. It takes 2 clicks and about 3 seconds.</p>
                                <p>With One-Click Polish, TextGlow <strong>learns which tone works best in each context</strong>. Writing an email in Gmail? It defaults to Professional. Replying on Slack? Friendly. Posting on LinkedIn? Confident.</p>
                                <p>One click. Perfect tone. No menu. No thinking.</p>
                                <p>It's the difference between choosing a gear and having automatic transmission. Both get you there — but one lets you just drive.</p>
                            </div>
                        </div>
                        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-slate-200">
                                        <th className="pb-4 font-semibold text-slate-500 w-1/4"></th>
                                        <th className="pb-4 font-bold text-slate-900 w-1/3">Free</th>
                                        <th className="pb-4 font-bold text-brand-600 w-1/3">Pro</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="py-4 text-sm font-medium text-slate-500">Step 1</td>
                                        <td className="py-4 text-slate-800">Click ✨ icon</td>
                                        <td className="py-4 text-slate-800 font-medium">Click ✨ icon</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 text-sm font-medium text-slate-500">Step 2</td>
                                        <td className="py-4 text-slate-800">Choose a tone</td>
                                        <td className="py-4 text-brand-600 italic text-sm">(done — already polished)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 text-sm font-medium text-slate-500">Step 3</td>
                                        <td className="py-4 text-slate-800">Text is polished</td>
                                        <td className="py-4"></td>
                                    </tr>
                                    <tr className="bg-slate-100/50">
                                        <td className="py-4 px-2 rounded-l-lg text-sm font-bold text-slate-700">Total</td>
                                        <td className="py-4 text-slate-700 font-semibold">2 clicks, ~3 sec</td>
                                        <td className="py-4 px-2 rounded-r-lg text-brand-600 font-bold">1 click, ~1 sec</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="text-xs text-slate-500 mt-6 text-center italic">When you polish 30-50 messages a day, those saved seconds add up to 15+ minutes daily.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TextGlow vs Alternatives */}
            <section className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">How TextGlow Compares</h2>
                    <div className="overflow-x-auto pb-4">
                        <table className="w-full min-w-[800px] bg-white rounded-2xl border border-slate-200 shadow-sm text-left overflow-hidden">
                            <thead>
                                <tr className="bg-slate-100 border-b border-slate-200">
                                    <th className="p-5 font-semibold text-slate-500 w-1/3"></th>
                                    <th className="p-5 font-bold text-brand-600 text-lg">TextGlow Pro</th>
                                    <th className="p-5 font-semibold text-slate-800">Grammarly Premium</th>
                                    <th className="p-5 font-semibold text-slate-800">ChatGPT Plus</th>
                                    <th className="p-5 font-semibold text-slate-800">QuillBot Premium</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr>
                                    <td className="p-5 font-medium text-slate-700">Price</td>
                                    <td className="p-5 font-bold text-slate-900">$39/year</td>
                                    <td className="p-5 text-slate-600">$144/year</td>
                                    <td className="p-5 text-slate-600">$240/year</td>
                                    <td className="p-5 text-slate-600">$100/year</td>
                                </tr>
                                <tr>
                                    <td className="p-5 font-medium text-slate-700">Works in-place (no copy-paste)</td>
                                    <td className="p-5"><Check className="w-5 h-5 text-green-500" /></td>
                                    <td className="p-5"><Check className="w-5 h-5 text-green-500" /></td>
                                    <td className="p-5"><X className="w-5 h-5 text-slate-300" /></td>
                                    <td className="p-5"><X className="w-5 h-5 text-slate-300" /></td>
                                </tr>
                                <tr>
                                    <td className="p-5 font-medium text-slate-700">Tone selection (choose how you sound)</td>
                                    <td className="p-5 font-medium text-slate-800"><Check className="w-5 h-5 text-green-500 inline mr-2" />10 tones</td>
                                    <td className="p-5"><X className="w-5 h-5 text-slate-300" /></td>
                                    <td className="p-5 text-slate-500 text-sm"><X className="w-4 h-4 text-slate-300 inline mr-1" />(write a prompt)</td>
                                    <td className="p-5"><X className="w-5 h-5 text-slate-300" /></td>
                                </tr>
                                <tr>
                                    <td className="p-5 font-medium text-slate-700">One-click rewrite</td>
                                    <td className="p-5"><Check className="w-5 h-5 text-green-500" /></td>
                                    <td className="p-5 text-slate-500 text-sm"><X className="w-4 h-4 text-slate-300 inline mr-1" />(suggestions only)</td>
                                    <td className="p-5 text-slate-500 text-sm"><X className="w-4 h-4 text-slate-300 inline mr-1" />(multi-step)</td>
                                    <td className="p-5 text-slate-600 text-sm">Partial</td>
                                </tr>
                                <tr>
                                    <td className="p-5 font-medium text-slate-700">Works inside Gmail, Slack, LinkedIn</td>
                                    <td className="p-5"><Check className="w-5 h-5 text-green-500" /></td>
                                    <td className="p-5"><Check className="w-5 h-5 text-green-500" /></td>
                                    <td className="p-5"><X className="w-5 h-5 text-slate-300" /></td>
                                    <td className="p-5"><X className="w-5 h-5 text-slate-300" /></td>
                                </tr>
                                <tr>
                                    <td className="p-5 font-medium text-slate-700">No tab switching needed</td>
                                    <td className="p-5"><Check className="w-5 h-5 text-green-500" /></td>
                                    <td className="p-5"><Check className="w-5 h-5 text-green-500" /></td>
                                    <td className="p-5"><X className="w-5 h-5 text-slate-300" /></td>
                                    <td className="p-5"><X className="w-5 h-5 text-slate-300" /></td>
                                </tr>
                                <tr>
                                    <td className="p-5 font-medium text-slate-700">Privacy (text not stored)</td>
                                    <td className="p-5"><Check className="w-5 h-5 text-green-500" /></td>
                                    <td className="p-5"><X className="w-5 h-5 text-red-300" /></td>
                                    <td className="p-5"><X className="w-5 h-5 text-red-300" /></td>
                                    <td className="p-5"><X className="w-5 h-5 text-red-300" /></td>
                                </tr>
                                <tr>
                                    <td className="p-5 font-medium text-slate-700">Rewrites your text</td>
                                    <td className="p-5"><Check className="w-5 h-5 text-green-500" /></td>
                                    <td className="p-5 text-slate-500 text-sm"><X className="w-4 h-4 text-slate-300 inline mr-1" />(grammar only)</td>
                                    <td className="p-5 text-slate-600 text-sm"><Check className="w-4 h-4 text-green-500 inline mr-1" />(with effort)</td>
                                    <td className="p-5"><Check className="w-5 h-5 text-green-500" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="max-w-4xl mx-auto mt-8">
                        <p className="text-lg text-slate-700 font-medium text-center">
                            Bottom line: Grammarly fixes your grammar. ChatGPT requires copy-pasting and prompt-writing. <strong>TextGlow rewrites your text with the right tone — in place, in 1-2 clicks, for a third of the price.</strong>
                        </p>
                        <p className="text-xs text-slate-400 mt-4 text-center">
                            Prices as of 2026. Grammarly Premium = $12/mo annual plan. ChatGPT Plus = $20/mo. QuillBot Premium = $8.33/mo annual plan.
                        </p>
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why Professionals Choose TextGlow</h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                            <div className="flex text-yellow-400 mb-4"><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /></div>
                            <p className="text-slate-700 italic mb-6">"I was paying $144/year for Grammarly Premium. It fixed my typos but never made my emails sound better. TextGlow does what Grammarly can't — it changes how I come across. And it's a third of the price."</p>
                            <p className="font-semibold text-slate-900 text-sm">— Marketing Director, SaaS company</p>
                        </div>
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                            <div className="flex text-yellow-400 mb-4"><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /></div>
                            <p className="text-slate-700 italic mb-6">"I used to copy every important email into ChatGPT, rewrite it, then paste it back. That workflow took 5 minutes per email. TextGlow does it in 2 seconds without leaving Gmail. I genuinely can't go back."</p>
                            <p className="font-semibold text-slate-900 text-sm">— Account Executive, B2B sales</p>
                        </div>
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                            <div className="flex text-yellow-400 mb-4"><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /></div>
                            <p className="text-slate-700 italic mb-6">"English is my second language. Grammarly tells me my sentences are correct — but they still sound awkward. TextGlow makes me sound like a native speaker. That's worth 10x the price."</p>
                            <p className="font-semibold text-slate-900 text-sm">— Engineering Lead, remote startup</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
                    <div>
                        <FAQItem 
                            q="Can I try Pro before paying?" 
                            a="The free plan gives you 10 polishes per day with all 10 tones — forever. That's enough to experience the full quality of TextGlow's AI. When you're ready for more, Pro is one click away." 
                        />
                        <FAQItem 
                            q="Can I cancel anytime?" 
                            a="Yes. Cancel with one click from your account settings. No cancellation fees, no hoops. If you cancel a yearly plan, you keep Pro access until the end of your billing period." 
                        />
                        <FAQItem 
                            q="What happens when I hit my daily polish limit?" 
                            a="On the Free plan, your 10 polishes reset every 24 hours. On Pro, you get 150 per day — more than enough for even the busiest communicators. If you somehow hit the limit, it resets at midnight." 
                        />
                        <FAQItem 
                            q="What payment methods do you accept?" 
                            a="We accept all major credit cards (Visa, Mastercard, Amex) and PayPal through our secure payment processor, Stripe." 
                        />
                        <FAQItem 
                            q="Is my data private?" 
                            a="Yes. TextGlow processes your text in real-time to polish it, then discards it immediately. We never store your text, never use it for training, and never share it with third parties. Your writing stays yours." 
                        />
                        <FAQItem 
                            q="Does TextGlow work with my browser?" 
                            a="TextGlow works on Chrome, Microsoft Edge, Brave, and any Chromium-based browser. It works on every website — Gmail, Slack, LinkedIn, Outlook, Google Docs, Notion, and thousands more." 
                        />
                        <FAQItem 
                            q="What's the difference between TextGlow and Grammarly?" 
                            a="Grammarly is a grammar checker — it catches typos, punctuation errors, and grammatical mistakes. TextGlow is a tone rewriter — it takes your grammatically-correct text and makes it sound Professional, Friendly, Confident, or any of 10 tones. Many users run both: Grammarly catches the errors, TextGlow makes it sound right. The difference is: Grammarly corrects what's wrong. TextGlow improves what's already correct." 
                        />
                        <FAQItem 
                            q="Is $39/year really the full price? No upsells?" 
                            a="That's it. $39/year (or $4.99/month) for the full Pro experience. No tiered enterprise pricing, no per-seat costs, no add-on charges. One plan, one price, everything included." 
                        />
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-slate-900 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-white mb-6">Start Writing Better — In the Next 30 Seconds</h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Install TextGlow, open Gmail (or Slack, or LinkedIn, or anywhere you write), and polish your first message. Free. No signup. No credit card.
                        <br /><br />
                        <span className="text-brand-400 font-semibold">If you love it — and you will — Pro is $0.11/day.</span>
                    </p>
                    <div className="flex flex-col items-center">
                        <Button 
                            href={CHROME_URL} 
                            variant="secondary" 
                            size="lg" 
                            className="text-lg px-8 py-4 !bg-white !text-slate-900 font-bold hover:!bg-slate-100 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.25)] transition-all border-none"
                        >
                            <Chrome className="w-6 h-6 mr-3" />
                            Add to Chrome — It's Free
                        </Button>
                        <p className="mt-6 text-slate-400 text-sm font-medium">
                            Free forever: 10 polishes/day · All 10 tones · Works everywhere
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
