import { forwardRef } from 'react';
import type { PersonalityType } from '../../data/writingQuizData';

interface ResultCardProps {
  type: PersonalityType;
}

export const ResultCard = forwardRef<HTMLDivElement, ResultCardProps>(({ type }, ref) => {
  // Determine gradient based on group
  // W* = warm, R* = cool
  // *S* = structured/linear, *F* = freeform/radial
  
  let bgClass = '';
  const isWarm = type.code.startsWith('W');
  const isStructured = type.code[1] === 'S';

  if (isWarm && isStructured) {
    bgClass = 'bg-gradient-to-br from-rose-400 via-orange-400 to-amber-500';
  } else if (isWarm && !isStructured) {
    bgClass = 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-400 via-rose-400 to-orange-400';
  } else if (!isWarm && isStructured) {
    bgClass = 'bg-gradient-to-bl from-slate-600 via-indigo-600 to-blue-700';
  } else {
    bgClass = 'bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-teal-400 via-cyan-500 to-blue-600';
  }

  return (
    <div 
      ref={ref}
      id="result-card"
      className={`w-full max-w-[600px] aspect-[1.91/1] mx-auto rounded-3xl overflow-hidden shadow-2xl relative flex flex-col p-8 md:p-10 ${bgClass}`}
      style={{ 
        // Force dimensions for consistent html2canvas capture if needed
        width: '600px',
        height: '315px',
        maxWidth: '100%' 
      }}
    >
      {/* Top row */}
      <div className="flex justify-between items-start w-full z-10">
        <div className="text-white/90 font-bold tracking-widest uppercase text-xs">
          textglow.io
        </div>
        <div className="text-5xl md:text-6xl filter drop-shadow-md">
          {type.emoji}
        </div>
      </div>

      {/* Center content */}
      <div className="flex-grow flex flex-col justify-center z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-2 py-1 bg-white/20 backdrop-blur text-white text-sm font-bold rounded">
            {type.code}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white drop-shadow-sm leading-none">
            {type.name}
          </h2>
        </div>
        <p className="text-white/95 text-lg md:text-xl font-medium leading-tight max-w-[90%] drop-shadow-sm">
          {type.description.split('.')[0]}.
        </p>
      </div>

      {/* Bottom quote */}
      <div className="w-full z-10 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
        <p className="text-white text-sm md:text-base font-medium italic">
          "{type.emailsSoundLike}"
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl" />
    </div>
  );
});

ResultCard.displayName = 'ResultCard';
