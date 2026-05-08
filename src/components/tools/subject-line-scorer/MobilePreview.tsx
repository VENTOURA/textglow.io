import type { SubjectLineAnalysis } from '../../../utils/subjectLineScorer';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

interface MobilePreviewProps {
  subject: string;
  previewText: string;
  analysis: SubjectLineAnalysis;
}

export const MobilePreview = ({ subject, previewText, analysis }: MobilePreviewProps) => {
  const { length } = analysis.categories;

  const renderSubjectWithTruncation = (maxChars: number) => {
    if (subject.length <= maxChars) return <span>{subject}</span>;
    return (
      <span>
        {subject.substring(0, maxChars)}
        <span className="opacity-40">...</span>
      </span>
    );
  };

  const renderPreviewText = (maxChars: number) => {
    if (!previewText) return null;
    if (previewText.length <= maxChars) return previewText;
    return previewText.substring(0, maxChars) + '...';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* iPhone Mail */}
      <div className="flex flex-col">
        <div className="bg-white rounded-[2rem] border-[8px] border-slate-900 shadow-xl overflow-hidden h-[240px] flex flex-col">
          <div className="bg-slate-100 h-6 flex justify-center items-center gap-1 border-b border-slate-200">
            <div className="w-12 h-3 bg-slate-900 rounded-full" />
          </div>
          <div className="p-4 bg-white border-b border-slate-100 relative">
            <div className="flex justify-between items-baseline mb-1">
              <span className="font-semibold text-slate-900 text-sm">Sender Name</span>
              <span className="text-slate-400 text-[10px]">10:42 AM</span>
            </div>
            <div className="font-medium text-slate-900 text-[13px] mb-1 line-clamp-1">
              {renderSubjectWithTruncation(41)}
            </div>
            <div className="text-slate-500 text-[12px] leading-tight line-clamp-2">
              {renderPreviewText(80) || 'Preview text goes here...'}
            </div>
            <div className="absolute top-1/2 right-3 w-2 h-2 rounded-full bg-blue-500" />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm">
          {length.isTruncatedOnIphone ? (
            <><AlertTriangle className="w-4 h-4 text-amber-500" /><span className="text-amber-700 font-medium">Cut off on iPhone (41+ chars)</span></>
          ) : (
            <><CheckCircle2 className="w-4 h-4 text-emerald-500" /><span className="text-emerald-700 font-medium">Fully visible on iPhone</span></>
          )}
        </div>
      </div>

      {/* Gmail Mobile */}
      <div className="flex flex-col">
        <div className="bg-white rounded-[2rem] border-[8px] border-slate-900 shadow-xl overflow-hidden h-[240px] flex flex-col">
          <div className="bg-slate-100 h-6 flex justify-center items-center gap-1 border-b border-slate-200">
            <div className="w-12 h-3 bg-slate-900 rounded-full" />
          </div>
          <div className="p-4 bg-white border-b border-slate-100 flex gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold flex-shrink-0">
              S
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-0.5">
                <span className="font-bold text-slate-900 text-[13px]">Sender Name</span>
                <span className="text-slate-600 text-[10px]">10:42 AM</span>
              </div>
              <div className="text-[13px] leading-snug line-clamp-2">
                <span className="font-bold text-slate-900">{renderSubjectWithTruncation(40)}</span>
                <span className="text-slate-500 ml-1">— {renderPreviewText(40) || 'Preview text...'}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm">
          {length.isTruncatedOnGmail ? (
            <><AlertTriangle className="w-4 h-4 text-amber-500" /><span className="text-amber-700 font-medium">Cut off on Gmail (40+ chars)</span></>
          ) : (
            <><CheckCircle2 className="w-4 h-4 text-emerald-500" /><span className="text-emerald-700 font-medium">Fully visible on Gmail</span></>
          )}
        </div>
      </div>

      {/* Outlook Mobile */}
      <div className="flex flex-col">
        <div className="bg-white rounded-[2rem] border-[8px] border-slate-900 shadow-xl overflow-hidden h-[240px] flex flex-col">
          <div className="bg-slate-100 h-6 flex justify-center items-center gap-1 border-b border-slate-200">
            <div className="w-12 h-3 bg-slate-900 rounded-full" />
          </div>
          <div className="p-3 bg-[#f3f2f1] h-full">
            <div className="bg-white rounded shadow-sm p-3">
              <div className="flex justify-between items-baseline mb-1">
                <span className="font-semibold text-slate-900 text-[13px]">Sender Name</span>
                <span className="text-slate-500 text-[10px]">10:42 AM</span>
              </div>
              <div className="font-medium text-[#0078d4] text-[13px] mb-1 line-clamp-1">
                {renderSubjectWithTruncation(45)}
              </div>
              <div className="text-slate-500 text-[12px] line-clamp-1">
                {renderPreviewText(45) || 'Preview text goes here...'}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm">
          {length.isTruncatedOnOutlook ? (
            <><AlertTriangle className="w-4 h-4 text-amber-500" /><span className="text-amber-700 font-medium">Cut off on Outlook (45+ chars)</span></>
          ) : (
            <><CheckCircle2 className="w-4 h-4 text-emerald-500" /><span className="text-emerald-700 font-medium">Fully visible on Outlook</span></>
          )}
        </div>
      </div>
    </div>
  );
};
