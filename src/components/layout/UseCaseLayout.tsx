import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Chrome, Check } from 'lucide-react';
import { Button } from '../ui/Button';

interface Example {
  title: string;
  tone: string;
  before: string;
  after: string;
}

interface FAQ {
  q: string;
  a: string;
}

interface UseCaseLayoutProps {
  meta: {
    title: string;
    description: string;
    url: string;
  };
  hero: {
    title: string;
    description: string;
  };
  problem: {
    title: string;
    content: React.ReactNode;
  };
  howItWorks: {
    platforms: string[];
    tonesTable: { tone: string; bestFor: string; scenario: string }[];
  };
  useCases: Example[];
  whySection: {
    title: string;
    content: React.ReactNode;
  };
  socialProof: {
    quote: string;
    author: string;
    role: string;
  }[];
  faqs: FAQ[];
}

export const UseCaseLayout: React.FC<UseCaseLayoutProps> = ({
  meta,
  hero,
  problem,
  howItWorks,
  useCases,
  whySection,
  socialProof,
  faqs
}) => {
  const CHROME_URL = "https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf";

  return (
    <div className="bg-slate-50 min-h-screen">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={`https://textglow.io${meta.url}`} />
        <link rel="canonical" href={`https://textglow.io${meta.url}`} />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
            {hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            {hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={CHROME_URL} variant="pro" size="lg" className="px-8 py-4 text-lg shadow-xl shadow-brand-500/20">
              <Chrome className="w-6 h-6 mr-3" /> Add to Chrome — Free
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">{problem.title}</h2>
          <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-relaxed">
            {problem.content}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center text-balance">Two Clicks, Right Tone, Every Message</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Supported platforms include:</h3>
              <div className="grid grid-cols-2 gap-4">
                {howItWorks.platforms.map(p => (
                  <div key={p} className="flex items-center gap-2 text-slate-700 font-medium bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <Check className="w-5 h-5 text-brand-500" /> {p}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-50 p-8 rounded-3xl border border-brand-100">
              <h3 className="text-xl font-bold text-brand-900 mb-4">How it works in practice:</h3>
              <ol className="space-y-6 text-brand-800">
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold mt-0.5">1</span>
                  <p className="leading-relaxed">Type your message as you normally would — rough, unpolished, just getting thoughts down.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold mt-0.5">2</span>
                  <p className="leading-relaxed">Click the TextGlow sparkle icon that appears in the text field.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold mt-0.5">3</span>
                  <p className="leading-relaxed">Select the tone that fits your specific situation.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold mt-0.5">4</span>
                  <p className="leading-relaxed">Your message is rewritten instantly, in place, without leaving the platform.</p>
                </li>
              </ol>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-6 py-4 font-bold text-slate-900 border-b border-slate-200">Tone</th>
                  <th className="px-6 py-4 font-bold text-slate-900 border-b border-slate-200">Best For</th>
                  <th className="px-6 py-4 font-bold text-slate-900 border-b border-slate-200">Example Scenario</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {howItWorks.tonesTable.map((t, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-brand-600">{t.tone}</td>
                    <td className="px-6 py-4 text-slate-600">{t.bestFor}</td>
                    <td className="px-6 py-4 text-slate-600 italic">"{t.scenario}"</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center">Real Messages, Real Rewrites</h2>
          <div className="grid gap-12">
            {useCases.map((uc, i) => (
              <div key={i} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                <div className="px-8 py-4 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
                  <h3 className="font-bold text-slate-900">{uc.title}</h3>
                  <span className="px-3 py-1 bg-brand-100 text-brand-700 text-xs font-bold rounded-full uppercase tracking-wider">
                    Tone: {uc.tone}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                  <div className="p-8 space-y-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Before</h4>
                    <div className="text-slate-600 italic leading-relaxed">
                      {uc.before}
                    </div>
                  </div>
                  <div className="p-8 space-y-4 bg-brand-50/30">
                    <h4 className="text-xs font-bold text-brand-400 uppercase tracking-widest">After</h4>
                    <div className="text-slate-900 font-medium leading-relaxed">
                      {uc.after}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">{whySection.title}</h2>
          <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-relaxed">
            {whySection.content}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-16 text-center">What Teams Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {socialProof.map((sp, i) => (
              <div key={i} className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 relative">
                <div className="text-brand-400 text-4xl font-serif absolute top-4 left-4 opacity-20">"</div>
                <p className="text-slate-300 mb-8 relative z-10 leading-relaxed">
                  {sp.quote}
                </p>
                <div>
                  <div className="font-bold text-white">{sp.author}</div>
                  <div className="text-slate-500 text-sm">{sp.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-2xl bg-white hover:border-brand-200 transition-all">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg text-slate-900 list-none">
                  {faq.q}
                  <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-45 text-brand-500">
                    <PlusIcon />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-500 via-brand-600 to-brand-700 opacity-50"></div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8">
            Stop Worrying About Your Tone.
          </h2>
          <p className="text-xl md:text-2xl text-brand-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            TextGlow makes sure every message lands exactly the way you mean it. Professional, empathetic, confident — all in 2 clicks.
          </p>
          <div className="flex flex-col items-center gap-6">
            <Button href={CHROME_URL} variant="pro" size="lg" className="px-10 py-5 text-xl bg-white text-brand-600 hover:bg-brand-50 shadow-2xl">
              <Chrome className="w-6 h-6 mr-3" /> Add to Chrome — Free
            </Button>
            <p className="text-brand-200 font-medium">Free: 10 rewrites/day · Pro: 150/day for $39/year</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
