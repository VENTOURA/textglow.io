import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';

import { QuizIntro } from '../../components/quiz/QuizIntro';
import { QuizQuestion } from '../../components/quiz/QuizQuestion';
import { QuizResults } from '../../components/quiz/QuizResults';
import { questions, personalityTypes } from '../../data/writingQuizData';
import type { PersonalityCode } from '../../data/writingQuizData';

type QuizState = {
  screen: "intro" | "questions" | "results";
  currentQuestion: number;
  answers: Record<number, "A" | "B">;
  result: PersonalityCode | null;
};

export const WritingQuiz = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const urlResult = searchParams.get('result') as PersonalityCode | null;

  const [state, setState] = useState<QuizState>({
    screen: "intro",
    currentQuestion: 0,
    answers: {},
    result: null
  });

  // Handle direct links to results
  useEffect(() => {
    if (urlResult && personalityTypes[urlResult]) {
      setState(prev => ({
        ...prev,
        screen: "results",
        result: urlResult
      }));
    } else {
      // Clear invalid result param from URL
      if (urlResult) {
        navigate('/tools/writing-quiz', { replace: true });
      }
    }
  }, [urlResult, navigate]);

  const handleStart = () => {
    setState({
      screen: "questions",
      currentQuestion: 0,
      answers: {},
      result: null
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const calculateResult = (answers: Record<number, "A" | "B">): PersonalityCode => {
    const scores = { W: 0, R: 0, S: 0, F: 0, D: 0, P: 0, O: 0, C: 0 };

    questions.forEach((q, i) => {
      const answer = answers[i];
      if (!answer) return;
      if (answer === "A") scores[q.optionA.value]++;
      else scores[q.optionB.value]++;
    });

    const warmth = scores.W >= scores.R ? "W" : "R";
    const structure = scores.S >= scores.F ? "S" : "F";
    const directness = scores.D >= scores.P ? "D" : "P";
    const formality = scores.O >= scores.C ? "O" : "C";

    return `${warmth}${structure}${directness}${formality}` as PersonalityCode;
  };

  const handleAnswer = (answer: "A" | "B") => {
    const newAnswers = { ...state.answers, [state.currentQuestion]: answer };
    
    if (state.currentQuestion < questions.length - 1) {
      setState(prev => ({
        ...prev,
        answers: newAnswers,
        currentQuestion: prev.currentQuestion + 1
      }));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Quiz complete
      const finalResult = calculateResult(newAnswers);
      setState({
        screen: "results",
        currentQuestion: state.currentQuestion,
        answers: newAnswers,
        result: finalResult
      });
      // Update URL silently
      navigate(`/tools/writing-quiz?result=${finalResult}`, { replace: true });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRetake = () => {
    navigate('/tools/writing-quiz', { replace: true });
    setState({
      screen: "intro",
      currentQuestion: 0,
      answers: {},
      result: null
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Determine Meta Tags
  let helmetContext = (
    <Helmet>
      <title>Writing Personality Quiz — What's Your Writing Style? | TextGlow</title>
      <meta name="description" content="Discover your unique writing personality. Are you a Diplomat, a Commander, or a Ghost? Take our 2-minute quiz to find out and improve your communication. Free." />
      <link rel="canonical" href="https://textglow.io/tools/writing-quiz/" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://textglow.io/tools/writing-quiz/" />
      <meta property="og:title" content="Writing Personality Quiz — What's Your Writing Style? | TextGlow" />
      <meta property="og:description" content="Discover your unique writing personality. Are you a Diplomat, a Commander, or a Ghost? Take our 2-minute quiz to find out and improve your communication. Free." />
      <meta property="og:image" content="https://textglow.io/og-image.png" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="Writing Personality Quiz — What's Your Writing Style? | TextGlow" />
      <meta property="twitter:description" content="Discover your unique writing personality. Are you a Diplomat, a Commander, or a Ghost? Take our 2-minute quiz to find out and improve your communication. Free." />
    </Helmet>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {helmetContext}

      <div className="flex-grow pt-24 pb-20">
        <AnimatePresence mode="wait">
          {state.screen === "intro" && (
            <QuizIntro key="intro" onStart={handleStart} />
          )}
          
          {state.screen === "questions" && (
            <QuizQuestion 
              key={`q-${state.currentQuestion}`}
              question={questions[state.currentQuestion]}
              questionNumber={state.currentQuestion + 1}
              onAnswer={handleAnswer}
            />
          )}

          {state.screen === "results" && state.result && (
            <QuizResults 
              key="results"
              resultCode={state.result} 
              onRetake={handleRetake}
              isDirectLink={!!urlResult && Object.keys(state.answers).length === 0}
            />
          )}
        </AnimatePresence>
      </div>

      {/* SEO Content Section - Always visible below the fold */}
      <section className="bg-white py-16 border-t border-slate-200 mt-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Understanding Your Communication Style
          </h2>
          
          <div className="prose prose-lg prose-slate max-w-none mb-16">
            <p>
              How you communicate in writing shapes how colleagues, clients, and managers perceive you — often more than your actual words. Research in organizational communication consistently shows that tone, structure, and directness are read as signals of personality, confidence, and competence. Whether you know it or not, you have a default writing style, and it affects every professional relationship you build through text.
            </p>
            <p>
              The Writing Personality Quiz measures four core dimensions of professional communication. Warmth reflects how emotionally open your writing is — whether you build rapport or get to the point. Structure shows whether you organize thinking into scannable formats or write in flowing prose. Directness captures how quickly you state your position versus building toward it. Formality reflects the register you default to — from "Dear Mr. Smith" to "hey." These dimensions are independent, which is why two people who are both "warm" can communicate completely differently.
            </p>
            <p>
              Your communication style is a set of habits, not a fixed trait. Many people write one way with close colleagues and entirely differently with clients or executives. The goal of understanding your default type isn't to label yourself — it's to recognize when your defaults are serving you and when they're creating friction. The Ghost who drafts-and-never-sends and the Commander who never gives context are both effective communicators who've developed one tool at the expense of another.
            </p>
            <p>
              TextGlow was built for exactly this reason: your writing personality is your home base, but professional communication requires range. The ability to shift from your natural Casual + Freeform style to a Formal + Structured mode when the moment calls for it — without it feeling foreign or robotic — is what TextGlow's 10 tones are designed to give you. The quiz tells you who you are. TextGlow gives you everyone else.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">What do the 4 dimensions mean?</h3>
              <p className="text-slate-600 leading-relaxed">
                The four dimensions — Warmth, Structure, Directness, and Formality — represent the core variables that differentiate professional writing styles. Warmth captures emotional openness, Structure reflects organizational preference, Directness measures how quickly you state your position, and Formality reflects the register and vocabulary you naturally use.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Can I change my writing personality?</h3>
              <p className="text-slate-600 leading-relaxed">
                Absolutely. Your quiz result reflects your default style, not a permanent trait. With tools like TextGlow, you can deliberately shift your tone for different contexts — writing formally for executives, casually for colleagues, and empathetically for sensitive conversations — without having to overthink each message from scratch.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Is this scientifically validated?</h3>
              <p className="text-slate-600 leading-relaxed">
                This quiz is a fun tool inspired by communication research and personality frameworks, not a clinically validated psychometric assessment. It's designed to be insightful and entertaining, and many people find their result surprisingly accurate — but take it in the spirit it's offered: a useful mirror, not a scientific verdict.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">How many writing personality types are there?</h3>
              <p className="text-slate-600 leading-relaxed">
                There are 16 possible types, each representing a unique combination of the four dimensions (Warmth/Reserved, Structured/Freeform, Direct/Diplomatic, Formal/Casual). That's 2⁴ = 16 combinations, each with a distinct name, description, strengths, weaknesses, and recommended TextGlow tone.
              </p>
            </div>
          </div>
          
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [{
                  "@type": "Question",
                  "name": "What do the 4 dimensions mean?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The four dimensions — Warmth, Structure, Directness, and Formality — represent the core variables that differentiate professional writing styles. Warmth captures emotional openness, Structure reflects organizational preference, Directness measures how quickly you state your position, and Formality reflects the register and vocabulary you naturally use."
                  }
                }, {
                  "@type": "Question",
                  "name": "Can I change my writing personality?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Your quiz result reflects your default style, not a permanent trait. With tools like TextGlow, you can deliberately shift your tone for different contexts — writing formally for executives, casually for colleagues, and empathetically for sensitive conversations — without having to overthink each message from scratch."
                  }
                }, {
                  "@type": "Question",
                  "name": "Is this scientifically validated?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "This quiz is a fun tool inspired by communication research and personality frameworks, not a clinically validated psychometric assessment. It's designed to be insightful and entertaining, and many people find their result surprisingly accurate — but take it in the spirit it's offered: a useful mirror, not a scientific verdict."
                  }
                }, {
                  "@type": "Question",
                  "name": "How many writing personality types are there?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "There are 16 possible types, each representing a unique combination of the four dimensions (Warmth/Reserved, Structured/Freeform, Direct/Diplomatic, Formal/Casual). That's 2⁴ = 16 combinations, each with a distinct name, description, strengths, weaknesses, and recommended TextGlow tone."
                  }
                }]
              }
            `}
          </script>
        </div>
      </section>
    </div>
  );
};
