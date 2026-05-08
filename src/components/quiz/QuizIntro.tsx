import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

interface QuizIntroProps {
  onStart: () => void;
}

export const QuizIntro = ({ onStart }: QuizIntroProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center max-w-2xl mx-auto py-12 px-4"
    >
      <div className="text-4xl md:text-5xl mb-6 tracking-widest select-none">
        👔💬📣🎯👻📋💻🌀📖🕊️
      </div>
      
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
        What's Your Writing Personality?
      </h1>
      
      <p className="text-xl text-brand-600 font-semibold mb-8">
        10 quick questions. 16 possible types. One surprisingly accurate result.
      </p>
      
      <p className="text-lg text-slate-600 mb-12 leading-relaxed max-w-xl mx-auto">
        Discover whether you're The Diplomat, The Commander, The Cheerleader, or The Ghost — and find out which TextGlow tone fits you perfectly.
      </p>
      
      <Button 
        onClick={onStart} 
        size="lg" 
        variant="pro" 
        className="px-10 py-5 text-xl rounded-full shadow-xl shadow-brand-500/20 w-full sm:w-auto"
      >
        Start the Quiz →
      </Button>
    </motion.div>
  );
};
