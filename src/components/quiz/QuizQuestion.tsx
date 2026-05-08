import { motion } from 'framer-motion';
import type { Question } from '../../data/writingQuizData';

interface QuizQuestionProps {
  question: Question;
  questionNumber: number;
  onAnswer: (answer: "A" | "B") => void;
}

const ACCENT_COLORS = [
  'border-brand-500',
  'border-purple-500',
  'border-pink-500',
  'border-orange-500',
  'border-emerald-500'
];

export const QuizQuestion = ({ question, questionNumber, onAnswer }: QuizQuestionProps) => {
  const progress = (questionNumber / 10) * 100;
  const accentColor = ACCENT_COLORS[(questionNumber - 1) % ACCENT_COLORS.length];

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.25 }}
      className="w-full max-w-2xl mx-auto px-4"
    >
      {/* Progress Bar */}
      <div className="mb-10 sticky top-4 z-10 bg-slate-50/80 backdrop-blur pt-2 pb-4">
        <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
          <span>Question {questionNumber} of 10</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-brand-400 to-brand-600 rounded-full"
            initial={{ width: `${((questionNumber - 1) / 10) * 100}%` }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className={`bg-white rounded-3xl shadow-lg border border-slate-100 border-l-8 ${accentColor} p-8 md:p-10 mb-8`}>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-2">
          {question.scenario}
        </h2>
      </div>

      {/* Answers */}
      <div className="space-y-4">
        <button
          onClick={() => onAnswer("A")}
          className="w-full text-left bg-white border-2 border-slate-200 hover:border-brand-500 hover:bg-brand-50 text-slate-700 hover:text-brand-900 rounded-2xl p-6 md:p-8 transition-all duration-200 group relative overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-200" />
          <span className="text-lg md:text-xl font-medium block pr-8 leading-relaxed">
            {question.optionA.text}
          </span>
          <div className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-slate-300 group-hover:border-brand-500 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-brand-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </button>

        <button
          onClick={() => onAnswer("B")}
          className="w-full text-left bg-white border-2 border-slate-200 hover:border-brand-500 hover:bg-brand-50 text-slate-700 hover:text-brand-900 rounded-2xl p-6 md:p-8 transition-all duration-200 group relative overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-200" />
          <span className="text-lg md:text-xl font-medium block pr-8 leading-relaxed">
            {question.optionB.text}
          </span>
          <div className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-slate-300 group-hover:border-brand-500 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-brand-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </button>
      </div>
    </motion.div>
  );
};
