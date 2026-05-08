import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Chrome, ChevronDown, ChevronUp, Copy, Check, Shuffle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { generateColdEmails } from '../utils/coldEmailGenerator';
import type { ColdEmailInputs, GeneratedEmails } from '../utils/coldEmailGenerator';

const CHROME_URL = "https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf";

const FAQItem = ({ q, a }: { q: string; a: string }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white mb-3">
            <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors">
                <span className="font-semibold text-slate-900 pr-4">{q}</span>
                {open ? <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />}
            </button>
            {open && <div className="px-5 pb-5"><p className="text-slate-600 leading-relaxed">{a}</p></div>}
        </div>
    );
};

export const ColdEmailGenerator = () => {
    const [inputs, setInputs] = useState<ColdEmailInputs>({
        yourName: '',
        yourRole: '',
        yourCompany: '',
        recipientName: '',
        recipientCompany: '',
        purpose: 'partnership',
        customPurpose: '',
        valueProp: '',
        cta: 'call'
    });

    const [generatedEmails, setGeneratedEmails] = useState<GeneratedEmails | null>(null);
    const [activeTab, setActiveTab] = useState<'professional' | 'persuasive' | 'friendly'>('professional');
    const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});
    
    // Store indices to ensure shuffle changes the template
    const templateIndices = useRef({ p: 0, s: 0, f: 0 });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const isFormValid = Boolean(
        inputs.yourName.trim() &&
        inputs.yourRole.trim() &&
        inputs.yourCompany.trim() &&
        inputs.recipientCompany.trim() &&
        inputs.valueProp.trim() &&
        (inputs.purpose !== 'custom' || inputs.customPurpose.trim())
    );

    const generate = (shuffle: boolean = false) => {
        if (!isFormValid) return;
        
        if (shuffle) {
            templateIndices.current = {
                p: templateIndices.current.p + Math.floor(Math.random() * 2) + 1,
                s: templateIndices.current.s + Math.floor(Math.random() * 2) + 1,
                f: templateIndices.current.f + Math.floor(Math.random() * 2) + 1,
            };
        }
        
        const result = generateColdEmails(
            inputs, 
            templateIndices.current.p, 
            templateIndices.current.s, 
            templateIndices.current.f
        );
        
        setGeneratedEmails(result);
    };

    const copyToClipboard = async (tone: string, subject: string, body: string) => {
        const text = `Subject: ${subject}\n\n${body}`;
        try {
            await navigator.clipboard.writeText(text);
            setCopiedStates(prev => ({ ...prev, [tone]: true }));
            setTimeout(() => {
                setCopiedStates(prev => ({ ...prev, [tone]: false }));
            }, 1500);
        } catch (err) {
            // Fallback
            const textArea = document.createElement("textarea");
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
            setCopiedStates(prev => ({ ...prev, [tone]: true }));
            setTimeout(() => {
                setCopiedStates(prev => ({ ...prev, [tone]: false }));
            }, 1500);
        }
    };

    const renderEmailCard = (tone: 'professional' | 'persuasive' | 'friendly', title: string, colorClass: string, bgClass: string) => {
        if (!generatedEmails) return null;
        const email = generatedEmails[tone];
        const isCopied = copiedStates[tone];

        return (
            <div className={`bg-white rounded-3xl shadow-sm border border-slate-200 flex flex-col h-full overflow-hidden ${activeTab === tone ? 'block' : 'hidden md:flex'}`}>
                <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${colorClass} ${bgClass}`}>
                        {title}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                        {email.wordCount} words
                    </span>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-4 text-slate-900">
                        <span className="font-bold">Subject:</span> <span className="font-semibold">{email.subject}</span>
                    </div>
                    <div className="text-slate-700 whitespace-pre-wrap flex-grow font-mono text-sm leading-relaxed mb-6">
                        {email.body}
                    </div>
                    <div>
                        {(email.wordCount < 50 || email.wordCount > 125) && (
                            <p className="text-xs text-amber-600 mb-3 font-medium">
                                Best cold emails are 50-125 words (Boomerang data).
                            </p>
                        )}
                        <button
                            onClick={() => copyToClipboard(tone, email.subject, email.body)}
                            className={`w-full py-2.5 rounded-xl text-sm font-bold flex items-center justify-center transition-all ${
                                isCopied 
                                    ? 'bg-green-500 text-white' 
                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                        >
                            {isCopied ? (
                                <>
                                    <Check className="w-4 h-4 mr-2" /> Copied!
                                </>
                            ) : (
                                <>
                                    <Copy className="w-4 h-4 mr-2" /> Copy Email
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <Helmet>
                <title>Free Cold Email Generator — Professional, Persuasive & Friendly Templates | TextGlow</title>
                <meta name="description" content="Generate cold email templates in 3 tones instantly. Fill in your details, get ready-to-send emails for partnerships, sales, networking, and more. Free, no signup." />
                <link rel="canonical" href="https://textglow.io/tools/cold-email-generator" />
            </Helmet>

            <section className="pt-20 pb-12 bg-white border-b border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-medium mb-6">
                            <span>Cold Email Generator</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Cold Email Generator</h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Fill in your details. Get 3 ready-to-send cold emails in Professional, Persuasive, and Friendly tones — instantly.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        
                        {/* Input Form */}
                        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-10 mb-12">
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Your name *</label>
                                    <input 
                                        type="text" name="yourName" value={inputs.yourName} onChange={handleInputChange}
                                        placeholder="e.g., Alex Chen"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Your role/title *</label>
                                    <input 
                                        type="text" name="yourRole" value={inputs.yourRole} onChange={handleInputChange}
                                        placeholder="e.g., Head of Partnerships"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Your company *</label>
                                    <input 
                                        type="text" name="yourCompany" value={inputs.yourCompany} onChange={handleInputChange}
                                        placeholder="e.g., TextGlow"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Recipient's name</label>
                                    <input 
                                        type="text" name="recipientName" value={inputs.recipientName} onChange={handleInputChange}
                                        placeholder="e.g., Sarah (defaults to [Name] if empty)"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Recipient's company *</label>
                                    <input 
                                        type="text" name="recipientCompany" value={inputs.recipientCompany} onChange={handleInputChange}
                                        placeholder="e.g., Acme Corp"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">What you're reaching out about *</label>
                                    <select 
                                        name="purpose" value={inputs.purpose} onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-white"
                                    >
                                        <option value="partnership">Partnership / collaboration</option>
                                        <option value="sales">Sales / offering a product or service</option>
                                        <option value="job">Job inquiry / application</option>
                                        <option value="networking">Networking / connection request</option>
                                        <option value="guest_post">Guest posting / content collaboration</option>
                                        <option value="investment">Investment / fundraising</option>
                                        <option value="feedback">Feedback request</option>
                                        <option value="custom">Custom...</option>
                                    </select>
                                </div>
                            </div>
                            
                            {inputs.purpose === 'custom' && (
                                <div className="mb-6">
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Custom purpose *</label>
                                    <input 
                                        type="text" name="customPurpose" value={inputs.customPurpose} onChange={handleInputChange}
                                        placeholder="e.g., inviting them to speak at our upcoming conference"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                                    />
                                </div>
                            )}

                            <div className="mb-6">
                                <label className="block text-sm font-bold text-slate-700 mb-2">One line about your value prop *</label>
                                <textarea 
                                    name="valueProp" value={inputs.valueProp} onChange={handleInputChange}
                                    placeholder="e.g., We help SaaS companies increase demo bookings by 40%"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all resize-none h-24"
                                />
                            </div>

                            <div className="mb-8">
                                <label className="block text-sm font-bold text-slate-700 mb-2">Desired CTA *</label>
                                <select 
                                    name="cta" value={inputs.cta} onChange={handleInputChange}
                                    className="w-full md:w-1/2 px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-white"
                                >
                                    <option value="call">15-minute call</option>
                                    <option value="coffee">Quick coffee chat</option>
                                    <option value="reply">Email reply</option>
                                    <option value="link">Check out a link</option>
                                    <option value="open">Open to suggestions</option>
                                </select>
                            </div>

                            <div className="flex justify-end">
                                <Button 
                                    onClick={() => generate(false)} 
                                    disabled={!isFormValid}
                                    className="w-full md:w-auto px-8 py-4 text-lg"
                                >
                                    Generate Emails
                                </Button>
                            </div>
                        </div>

                        {/* Generated Output */}
                        {generatedEmails && (
                            <div className="mb-12">
                                {/* Mobile Tabs */}
                                <div className="flex md:hidden mb-6 border-b border-slate-200 overflow-x-auto">
                                    <button 
                                        onClick={() => setActiveTab('professional')}
                                        className={`flex-1 py-3 px-4 text-sm font-bold whitespace-nowrap border-b-2 transition-colors ${activeTab === 'professional' ? 'border-brand-500 text-brand-600' : 'border-transparent text-slate-500'}`}
                                    >
                                        Professional
                                    </button>
                                    <button 
                                        onClick={() => setActiveTab('persuasive')}
                                        className={`flex-1 py-3 px-4 text-sm font-bold whitespace-nowrap border-b-2 transition-colors ${activeTab === 'persuasive' ? 'border-brand-500 text-brand-600' : 'border-transparent text-slate-500'}`}
                                    >
                                        Persuasive
                                    </button>
                                    <button 
                                        onClick={() => setActiveTab('friendly')}
                                        className={`flex-1 py-3 px-4 text-sm font-bold whitespace-nowrap border-b-2 transition-colors ${activeTab === 'friendly' ? 'border-brand-500 text-brand-600' : 'border-transparent text-slate-500'}`}
                                    >
                                        Friendly
                                    </button>
                                </div>

                                {/* Output Grid */}
                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    {renderEmailCard('professional', 'Professional', 'text-blue-700 border-blue-200', 'bg-blue-50')}
                                    {renderEmailCard('persuasive', 'Persuasive', 'text-purple-700 border-purple-200', 'bg-purple-50')}
                                    {renderEmailCard('friendly', 'Friendly', 'text-amber-700 border-amber-200', 'bg-amber-50')}
                                </div>

                                <div className="flex justify-center">
                                    <button 
                                        onClick={() => generate(true)}
                                        className="flex items-center px-6 py-3 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-bold rounded-xl shadow-sm transition-all"
                                    >
                                        <Shuffle className="w-4 h-4 mr-2 text-slate-500" /> Shuffle Templates
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* CTA Banner */}
                        <section className="rounded-3xl py-12 bg-slate-900 text-center mb-16 overflow-hidden relative">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-400 via-slate-900 to-slate-900"></div>
                            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                                <h2 className="text-3xl font-bold text-white mb-4">Like these templates? Skip the templates entirely.</h2>
                                <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
                                    TextGlow rewrites your emails with the perfect tone right inside Gmail — just type your rough draft and click the rewrite button. No copy-pasting, no templates.
                                </p>
                                <Button href={CHROME_URL} variant="pro" size="lg" className="px-8 py-4 text-lg">
                                    <Chrome className="w-6 h-6 mr-3" /> Install TextGlow — Free
                                </Button>
                                <p className="mt-4 text-sm text-slate-500">
                                    Free: 10 rewrites/day | Pro: 150/day for $39/year
                                </p>
                            </div>
                        </section>

                    </div>
                </div>
            </section>

            {/* SEO / FAQ Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
                    
                    <FAQItem 
                        q="Are these emails AI-generated?" 
                        a="No. They're built on proven email frameworks (direct ask, compliment-then-ask, pain-solution, curiosity gap) with your details filled in. No AI API calls, no generic output. The templates are based on patterns that consistently get replies." 
                    />
                    <FAQItem 
                        q="What's the best cold email length?" 
                        a="50-125 words. Short enough to respect their time, long enough to communicate value. According to Boomerang's data, emails in this range see the highest response rates." 
                    />
                    <FAQItem 
                        q="How do I improve my cold email reply rate?" 
                        a="Personalize beyond just the name. Reference something specific about their company — a recent product launch, a blog post, a shared connection. Generic emails get ignored. The templates here give you a strong starting point; the personalization is what gets the reply." 
                    />
                    <FAQItem 
                        q="Can I edit the templates after generating?" 
                        a="Yes — copy the template and customize it however you like. These are starting points, not final drafts. The more you personalize, the better your results." 
                    />
                    <FAQItem 
                        q="Is my data stored?" 
                        a="No. Everything runs entirely in your browser. Your name, company, and all other inputs are never sent to any server or stored anywhere." 
                    />
                    <FAQItem 
                        q="What if my purpose isn't in the dropdown?" 
                        a="Select 'Custom' and type your own purpose. The templates will adapt to whatever you enter." 
                    />
                </div>
            </section>
        </div>
    );
};
