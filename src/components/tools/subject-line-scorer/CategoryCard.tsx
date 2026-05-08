import React from 'react';
import { ScoreGauge } from './ScoreGauge';

interface CategoryCardProps {
  title: string;
  score: number;
  feedback: string;
  detail?: React.ReactNode;
  icon?: React.ReactNode;
}

export const CategoryCard = ({ title, score, feedback, detail, icon }: CategoryCardProps) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col h-full hover:border-slate-300 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500">
              {icon}
            </div>
          )}
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        </div>
        <div className="flex-shrink-0 ml-4">
          <ScoreGauge value={score} max={10} size="sm" />
        </div>
      </div>
      
      <div className="mt-2 mb-4">
        <p className="text-slate-700 font-medium leading-relaxed">{feedback}</p>
      </div>

      {detail && (
        <div className="mt-auto pt-4 border-t border-slate-100">
          {detail}
        </div>
      )}
    </div>
  );
};
