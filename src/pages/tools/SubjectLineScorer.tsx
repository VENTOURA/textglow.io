import { useState, useCallback, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Chrome, Ruler, ShieldAlert, UserPlus, Zap, Heart, Type, BarChart2 } from 'lucide-react';
import { Button } from '../../components/ui/Button';

import { analyzeSubjectLine } from '../../utils/subjectLineScorer';
import type { SubjectLineAnalysis } from '../../utils/subjectLineScorer';
import { generateSuggestions } from '../../utils/subjectLineSuggestions';

import { ScoreGauge } from '../../components/tools/subject-line-scorer/ScoreGauge';
import { CategoryCard } from '../../components/tools/subject-line-scorer/CategoryCard';
import { MobilePreview } from '../../components/tools/subject-line-scorer/MobilePreview';
import { ImprovedVersions } from '../../components/tools/subject-line-scorer/ImprovedVersions';
import { BenchmarkChart } from '../../components/tools/subject-line-scorer/BenchmarkChart';
import { SpamHighlighter } from '../../components/tools/subject-line-scorer/SpamHighlighter';
import { EmptyState } from '../../components/tools/subject-line-scorer/EmptyState';
import { FAQAccordion } from '../../components/tools/subject-line-scorer/FAQAccordion';

const CHROME_URL = "https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf";

const faqItems = [
  {
    question: "What's the ideal email subject line length?",
    answer: "Research consistently shows 6–10 words or 30–50 characters performs best. This length is specific enough to set expectations, short enough to display fully on mobile devices, and long enough to include an engagement hook. Under 3 words feels vague; over 60 characters gets cut off on iPhone Mail and Gmail mobile.",
  },
  {
    question: "Do emojis in subject lines help open rates?",
    answer: "Yes — with caveats. Studies from Experian and Return Path found that a single relevant emoji can boost open rates by up to 56% in certain industries. However, multiple emojis can signal spam or look unprofessional. The effect also varies by audience: B2B audiences tend to respond less favorably than B2C. Use one emoji maximum, and only when it's genuinely relevant.",
  },
  {
    question: "What are spam trigger words in email subject lines?",
    answer: "Spam trigger words are terms that email filtering algorithms — and wary readers — associate with unwanted or deceptive email. Common categories include money-related words (free, earn, cash, guaranteed), urgency manipulation (act now, limited time, expires today), false authority claims (you've been selected, winner, pre-approved), and vague clickbait (click here, see for yourself). Our scorer checks against 100+ terms across these categories.",
  },
  {
    question: "Is my subject line data stored or sent anywhere?",
    answer: "No. This tool runs 100% in your browser using client-side JavaScript. Your subject line text never leaves your device — there are no API calls, no server logs, and no analytics on your input. We don't even use cookies for this tool.",
  },
  {
    question: "How accurate is this subject line scorer?",
    answer: "Our scoring is based on published email marketing research from Mailchimp, HubSpot, Campaign Monitor, Litmus, and Return Path. The benchmarks for length, spam triggers, personalization lift, emoji effect, and question format are drawn from studies covering billions of emails. No automated scorer can predict your specific audience's behavior — treat scores as directional guidance, not absolute truth. A/B testing remains the gold standard.",
  },
];

export const SubjectLineScorer = () => {
  const [subject, setSubject] = useState('');
  const [previewText, setPreviewText] = useState('');
  const [analysis, setAnalysis] = useState<SubjectLineAnalysis | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleAnalysis = useCallback((text: string) => {
    if (!text.trim()) {
      setAnalysis(null);
      setSuggestions([]);
      return;
    }
    const result = analyzeSubjectLine(text);
    setAnalysis(result);
    setSuggestions(generateSuggestions(text, result));
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleAnalysis(subject);
    }, 200);
    return () => clearTimeout(timeout);
  }, [subject, handleAnalysis]);

  const handleSelectExample = (text: string) => {
    setSubject(text);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSpamBadges = () => {
    if (!analysis || analysis.categories.spam.matches.length === 0) return null;
    return (
      <div className="flex flex-wrap gap-2 mt-2">
        {analysis.categories.spam.matches.map((m, i) => (
          <span key={i} className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
            m.severity === 'high' ? 'bg-red-100 text-red-800' :
            m.severity === 'moderate' ? 'bg-amber-100 text-amber-800' :
            'bg-slate-100 text-slate-700'
          }`}>
            {m.term}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <Helmet>
        <title>Free Email Subject Line Scorer — Test Your Subject Line | TextGlow</title>
        <meta name="description" content="Score your email subject line instantly. Check length, spam triggers, personalization, and engagement. Get 3 improved alternatives. Free, private, no signup." />
        <meta property="og:title" content="Free Email Subject Line Scorer — Test Your Subject Line" />
        <meta property="og:description" content="Score your email subject line instantly. Check length, spam triggers, personalization, and engagement. Get 3 improved alternatives. Free, private, no signup." />
        <meta property="og:url" content="https://textglow.io/tools/subject-line-scorer" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Free Email Subject Line Scorer
          </h1>
          <p className="text-xl text-slate-600 mb-10">
            Type your subject line below for instant scoring and feedback.
          </p>

          <div className="max-w-2xl mx-auto text-left relative z-10">
            {/* Input Overlay for highlighting */}
            <div className="relative">
              <div 
                className="absolute inset-0 px-5 py-4 text-lg font-medium text-transparent whitespace-pre-wrap break-words pointer-events-none"
                aria-hidden="true"
              >
                <SpamHighlighter text={subject} matches={analysis?.categories.spam.matches || []} />
              </div>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter your email subject line..."
                maxLength={200}
                className="w-full px-5 py-4 text-lg font-medium bg-transparent border-2 border-slate-200 rounded-2xl focus:border-brand-500 focus:ring-4 focus:ring-brand-500/20 outline-none transition-all placeholder:text-slate-400 text-slate-900 shadow-sm"
                spellCheck={false}
              />
            </div>
            
            <div className="flex justify-between items-center mt-2 px-2">
              <div className="flex-1">
                <input
                  type="text"
                  value={previewText}
                  onChange={(e) => setPreviewText(e.target.value)}
                  placeholder="Preview text (optional)..."
                  className="w-full bg-transparent border-none text-sm text-slate-500 focus:outline-none focus:text-slate-900 placeholder:text-slate-300"
                />
              </div>
              <div className={`text-xs font-bold shrink-0 ${
                subject.length > 60 ? 'text-red-500' : 
                subject.length > 40 ? 'text-amber-500' : 'text-slate-400'
              }`}>
                {subject.length} / 200 chars
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Analysis Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          {!subject.trim() ? (
            <EmptyState onSelect={handleSelectExample} />
          ) : !analysis ? null : (
            <div className="space-y-12 transition-all duration-500 ease-in-out opacity-100">
              
              {/* Overall Score */}
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl flex flex-col md:flex-row items-center gap-10">
                <div className="shrink-0 relative">
                  <ScoreGauge 
                    value={analysis.overall.value} 
                    size="lg" 
                    color={analysis.overall.color} 
                    label={analysis.overall.label} 
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    Your subject line is <span style={{ color: analysis.overall.color }}>{analysis.overall.label.toLowerCase()}</span>.
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Based on 6 factors correlating to open rates: length, spam triggers, personalization, curiosity, emotional tone, and readability.
                  </p>
                </div>
              </div>

              {/* 6 Category Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CategoryCard 
                  title="Length" 
                  icon={<Ruler />}
                  score={analysis.categories.length.score} 
                  feedback={analysis.categories.length.feedback}
                  detail={
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">{analysis.categories.length.wordCount} words</span>
                      <span className="text-slate-500 font-medium">{analysis.categories.length.charCount} chars</span>
                    </div>
                  }
                />
                <CategoryCard 
                  title="Spam Check" 
                  icon={<ShieldAlert />}
                  score={analysis.categories.spam.score} 
                  feedback={analysis.categories.spam.feedback}
                  detail={renderSpamBadges()}
                />
                <CategoryCard 
                  title="Curiosity" 
                  icon={<Zap />}
                  score={analysis.categories.curiosity.score} 
                  feedback={analysis.categories.curiosity.feedback}
                  detail={
                    <div className="flex gap-2 flex-wrap">
                      {analysis.categories.curiosity.powerWords.map(pw => (
                        <span key={pw} className="text-xs bg-brand-50 text-brand-700 px-2 py-1 rounded">Power word: {pw}</span>
                      ))}
                    </div>
                  }
                />
                <CategoryCard 
                  title="Personalization" 
                  icon={<UserPlus />}
                  score={analysis.categories.personalization.score} 
                  feedback={analysis.categories.personalization.feedback}
                  detail={
                    <div className="text-xs text-slate-500">
                      Signals: {[
                        analysis.categories.personalization.hasTemplateTag && 'Template tags',
                        analysis.categories.personalization.hasYouYour && 'You/Your',
                        analysis.categories.personalization.isSpecific && 'Specific references'
                      ].filter(Boolean).join(', ') || 'None detected'}
                    </div>
                  }
                />
                <CategoryCard 
                  title="Emotional Tone" 
                  icon={<Heart />}
                  score={analysis.categories.tone.score} 
                  feedback={analysis.categories.tone.feedback}
                  detail={
                    <div className="flex gap-2">
                      <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded font-medium capitalize">
                        Primary: {analysis.categories.tone.primaryTone}
                      </span>
                    </div>
                  }
                />
                <CategoryCard 
                  title="Readability" 
                  icon={<Type />}
                  score={analysis.categories.readability.score} 
                  feedback={analysis.categories.readability.feedback}
                />
              </div>

              {/* Improved Versions */}
              {suggestions.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Zap className="w-6 h-6 text-brand-500" /> 
                    AI-Powered Alternatives
                  </h3>
                  <ImprovedVersions suggestions={suggestions} />
                </div>
              )}

              {/* Mobile Previews */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="text-2xl">📱</span> Inbox Preview
                </h3>
                <MobilePreview subject={subject} previewText={previewText} analysis={analysis} />
              </div>

              {/* Benchmark Charts */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <BarChart2 className="w-6 h-6 text-slate-400" />
                  Industry Benchmarks
                </h3>
                <BenchmarkChart />
              </div>

            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="bg-slate-900 rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-400 via-slate-900 to-slate-900"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-6">
                Great subject lines get opens — but your email body closes the deal.
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                TextGlow rewrites your emails in 2 clicks, right inside Gmail, Outlook, and LinkedIn.
              </p>
              <Button href={CHROME_URL} variant="pro" size="lg" className="px-8 py-4 text-lg mb-6 shadow-xl shadow-brand-500/20">
                <Chrome className="w-6 h-6 mr-3" /> Add to Chrome — Free
              </Button>
              <p className="text-sm font-medium text-brand-300">Free: 10 rewrites/day &nbsp;·&nbsp; Pro: 150/day for $39/year</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content & FAQ */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">What Makes a Great Email Subject Line?</h2>
          <div className="prose prose-lg prose-slate max-w-none mb-12 text-slate-600 leading-relaxed">
            <p>
              Your email subject line is the single most important factor in whether your email gets opened.
              Research from Mailchimp shows that subject lines between 6–10 words generate the highest open rates,
              while HubSpot data confirms that personalized subject lines outperform generic ones by up to 26%.
              Using this free email subject line tester, you can check all the key factors before you hit send.
            </p>
            <p>
              A great subject line balances length, clarity, emotional resonance, and deliverability. Too short
              and it feels vague. Too long and it gets cut off on iPhone (after 41 characters) and Gmail mobile
              (after 40 characters). Our subject line checker scores your draft against all these dimensions instantly,
              with no signup required.
            </p>
            <p>
              Email subject line best practices have evolved significantly. Spam filters have become more
              sophisticated — words like "free", "guaranteed", and "act now" still trigger filters in 2024.
              Numbers and questions consistently lift open rates across B2B and B2C. Personalization with the
              recipient's first name can increase open rates by 10–14% according to Campaign Monitor data.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <FAQAccordion items={faqItems} />

          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  ${faqItems.map(item => `
                    {
                      "@type": "Question",
                      "name": ${JSON.stringify(item.question)},
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": ${JSON.stringify(item.answer)}
                      }
                    }
                  `).join(',\n')}
                ]
              }
            `}
          </script>
        </div>
      </section>
    </div>
  );
};
