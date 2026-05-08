import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import html2canvas from 'html2canvas';
import { Chrome, Download, Link as LinkIcon, Twitter, Linkedin, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { ResultCard } from './ResultCard';
import { AllTypesSection } from './AllTypesSection';
import { personalityTypes } from '../../data/writingQuizData';
import type { PersonalityCode } from '../../data/writingQuizData';

interface QuizResultsProps {
  resultCode: PersonalityCode;
  onRetake: () => void;
  isDirectLink?: boolean;
}

const CHROME_URL = "https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf";

export const QuizResults = ({ resultCode, onRetake, isDirectLink = false }: QuizResultsProps) => {
  const type = personalityTypes[resultCode];
  const cardRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isDirectLink) {
      // Fire confetti on first result
      const duration = 3000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#0ea5e9', '#ec4899', '#f59e0b']
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#0ea5e9', '#ec4899', '#f59e0b']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    }
  }, [isDirectLink]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleDownload = async () => {
    if (!cardRef.current) return;
    try {
      const canvas = await html2canvas(cardRef.current, { 
        scale: 2, 
        useCORS: true,
        backgroundColor: null
      });
      const link = document.createElement("a");
      link.download = `my-writing-personality-${type.code}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (err) {
      console.error('Failed to generate image: ', err);
    }
  };

  const shareText = `I'm The ${type.name} (${type.code}) — what's your writing personality? 👇`;
  const shareUrl = window.location.href;

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Your Writing Personality is...
        </h1>
      </div>

      {/* Main Card */}
      <div className="mb-8">
        <ResultCard type={type} ref={cardRef} />
      </div>

      {/* Share Actions */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
        <button 
          onClick={handleCopyLink}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
        >
          <LinkIcon className="w-4 h-4" />
          {copied ? "Copied!" : "Copy Link"}
        </button>
        <a 
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-[#000000] border border-[#000000] rounded-full text-sm font-medium text-white hover:bg-slate-800 transition-colors shadow-sm"
        >
          <Twitter className="w-4 h-4" />
          Share on X
        </a>
        <a 
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-[#0A66C2] border border-[#0A66C2] rounded-full text-sm font-medium text-white hover:bg-[#004182] transition-colors shadow-sm"
        >
          <Linkedin className="w-4 h-4" />
          Share on LinkedIn
        </a>
        <button 
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
        >
          <Download className="w-4 h-4" />
          Save Image
        </button>
      </div>

      {/* Full Breakdown */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            Your Strengths
          </h3>
          <ul className="space-y-4">
            {type.strengths.map((str, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span className="text-slate-700 leading-relaxed">{str}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            Watch Out For
          </h3>
          <ul className="space-y-4">
            {type.weaknesses.map((wk, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                <span className="text-slate-700 leading-relaxed">{wk}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-brand-50 rounded-3xl p-8 md:p-10 mb-16 border border-brand-100 flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="w-full md:w-2/3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full text-brand-700 text-sm font-bold shadow-sm mb-4">
            ✨ Actionable Advice
          </div>
          <h3 className="text-2xl font-bold text-brand-900 mb-4">The Fix</h3>
          <p className="text-lg text-brand-800 leading-relaxed font-medium">
            {type.improvementTip}
          </p>
        </div>
        <div className="w-full md:w-1/3 bg-white rounded-2xl p-6 shadow-sm border border-brand-100/50 flex flex-col justify-center items-center text-center h-full">
          <span className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2 block">
            Your Ideal TextGlow Tone
          </span>
          <span className="text-2xl font-black text-brand-600">
            {type.idealTone}
          </span>
          <hr className="w-full border-slate-100 my-4" />
          <span className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2 block">
            Famous Communicator
          </span>
          <span className="text-lg font-bold text-slate-900">
            {type.famousCommunicator}
          </span>
        </div>
      </div>

      {/* Product CTA */}
      <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl mb-12">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-400 via-slate-900 to-slate-900"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            You're a {type.name} — but every audience needs a different approach.
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            TextGlow gives you 10 tones to match any context, right inside Gmail, Slack, and LinkedIn. Keep your personality, but expand your range.
          </p>
          <Button href={CHROME_URL} variant="pro" size="lg" className="px-8 py-5 text-xl shadow-xl shadow-brand-500/20 w-full sm:w-auto mb-6">
            <Chrome className="w-6 h-6 mr-3" /> Add to Chrome — Free
          </Button>
          <p className="text-sm font-medium text-brand-300">Free: 10 rewrites/day &nbsp;·&nbsp; Pro: 150/day for $39/year</p>
        </div>
      </div>

      {/* Retake / Take Quiz CTA */}
      <div className="text-center">
        {isDirectLink ? (
          <Button onClick={onRetake} variant="secondary" size="lg" className="px-10 bg-white">
            Take the Quiz Yourself <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <button 
            onClick={onRetake}
            className="text-slate-500 hover:text-slate-900 font-medium underline underline-offset-4"
          >
            Retake Quiz
          </button>
        )}
      </div>

      <AllTypesSection />

    </motion.div>
  );
};
