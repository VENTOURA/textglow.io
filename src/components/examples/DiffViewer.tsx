import { memo } from 'react';
import { diffWordsWithSpace } from 'diff';

interface DiffViewerProps {
    beforeText: string;
    afterText: string;
    mode: 'before' | 'after';
}

export const DiffViewer = memo(({ beforeText, afterText, mode }: DiffViewerProps) => {
    // Computes word diff with spaces preserved
    const diff = diffWordsWithSpace(beforeText, afterText);
    
    return (
        <div className="whitespace-pre-wrap leading-relaxed text-slate-700">
            {diff.map((part, index) => {
                if (mode === 'before') {
                    if (part.added) return null;
                    if (part.removed) {
                        return <span key={index} className="bg-[#FFD7D5] text-red-900 line-through px-0.5 rounded mx-[1px]">{part.value}</span>;
                    }
                    return <span key={index}>{part.value}</span>;
                } else {
                    if (part.removed) return null;
                    if (part.added) {
                        return <span key={index} className="bg-[#C8F7C5] text-green-900 px-0.5 rounded mx-[1px] font-medium">{part.value}</span>;
                    }
                    return <span key={index}>{part.value}</span>;
                }
            })}
        </div>
    );
});

DiffViewer.displayName = 'DiffViewer';
