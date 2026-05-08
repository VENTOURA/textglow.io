import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { personalityTypes } from '../../data/writingQuizData';

export const AllTypesSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const types = Object.values(personalityTypes);

  return (
    <div className="mt-20 border-t border-slate-200 pt-10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 group"
      >
        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
          See All 16 Writing Personality Types
        </h3>
        <div className="bg-slate-100 text-slate-500 rounded-full p-2 group-hover:bg-brand-100 group-hover:text-brand-600 transition-colors">
          {isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
              {types.map(type => (
                <a 
                  key={type.code}
                  href={`/tools/writing-quiz?result=${type.code}`}
                  className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-brand-500 hover:shadow-lg transition-all group block"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform origin-bottom-left">
                    {type.emoji}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                      {type.code}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {type.name}
                  </h4>
                  <p className="text-sm text-slate-600 line-clamp-3">
                    {type.description}
                  </p>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
