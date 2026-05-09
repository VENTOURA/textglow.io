import { useState, useEffect, useRef } from 'react';
import { Sparkles, MousePointer2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DemoCardProps {
    originalText: string;
    rewrittenText: string;
    tone: string;
    delay?: number;
}

type AnimationState = 'IDLE' | 'TYPING' | 'PRE_REWRITE' | 'MOVING_CURSOR' | 'CLICKING' | 'REWRITING' | 'REWRITTEN' | 'RESETTING';

export const DemoCard = ({ originalText, rewrittenText, tone, delay = 0 }: DemoCardProps) => {
    const [text, setText] = useState('');
    const [state, setState] = useState<AnimationState>('IDLE');
    const [cursorVisible, setCursorVisible] = useState(true);

    // Refs to manage timeouts and prevent memory leaks
    const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

    const addTimeout = (callback: () => void, ms: number) => {
        const id = setTimeout(callback, ms);
        timeoutsRef.current.push(id);
        return id;
    };

    const clearTimeouts = () => {
        timeoutsRef.current.forEach(clearTimeout);
        timeoutsRef.current = [];
    };

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setCursorVisible(v => !v);
        }, 500);

        // Start the animation loop
        const startAnimation = () => {
            setState('IDLE');
            setText('');

            // Initial Delay
            addTimeout(() => {
                setState('TYPING');
            }, delay);
        };

        startAnimation();

        return () => {
            clearInterval(cursorInterval);
            clearTimeouts();
        };
    }, [delay]); // Only restart if props change significantly

    // State Machine Effect
    useEffect(() => {
        if (state === 'TYPING') {
            let charIndex = 0;
            const typeChar = () => {
                if (charIndex <= originalText.length) {
                    setText(originalText.slice(0, charIndex));
                    charIndex++;
                    // Random typing speed between 30ms and 70ms
                    const speed = Math.random() * 40 + 30;
                    addTimeout(typeChar, speed);
                } else {
                    setState('PRE_REWRITE');
                }
            };
            typeChar();
        } else if (state === 'PRE_REWRITE') {
            // Short pause before cursor starts moving
            addTimeout(() => {
                setState('MOVING_CURSOR');
            }, 500);
        } else if (state === 'MOVING_CURSOR') {
            // Time for cursor to travel to button
            addTimeout(() => {
                setState('CLICKING');
            }, 1000);
        } else if (state === 'CLICKING') {
            // Click animation
            addTimeout(() => {
                setState('REWRITING');
            }, 300);
        } else if (state === 'REWRITING') {
            // Simulate processing time + button animation
            addTimeout(() => {
                setText(rewrittenText);
                setState('REWRITTEN');
            }, 800);
        } else if (state === 'REWRITTEN') {
            // Wait so user can read the result
            addTimeout(() => {
                setState('RESETTING');
            }, 4000);
        } else if (state === 'RESETTING') {
            setText('');
            setState('TYPING'); // Loop back to typing immediately or after small delay
        }
    }, [state, originalText, rewrittenText]);

    return (
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:shadow-xl relative">
            {/* Mock Window Header */}
            <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>

            {/* Editor Area */}
            <div className="p-4 flex-grow bg-white relative">
                <div className="font-mono text-base text-slate-800 leading-relaxed min-h-[140px] whitespace-pre-wrap">
                    {text}
                    {(state === 'TYPING' || state === 'IDLE' || state === 'PRE_REWRITE') && (
                        <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} text-brand-500 font-bold`}>|</span>
                    )}
                </div>

                {/* Tone Badge */}
                <AnimatePresence>
                    {state === 'REWRITTEN' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="absolute bottom-4 right-4 bg-purple-100 text-purple-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-purple-200 shadow-sm"
                        >
                            Tone: {tone}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Toolbar / Action Area */}
            <div className="bg-slate-50 p-3 border-t border-slate-100 flex justify-end items-center relative z-10">
                <motion.button
                    animate={state === 'CLICKING' || state === 'REWRITING' ? { scale: 0.95 } : { scale: 1 }}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${state === 'REWRITTEN'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                        }`}
                >
                    <Sparkles className={`w-4 h-4 ${state === 'REWRITING' ? 'animate-spin' : ''}`} />
                    <span>{state === 'REWRITTEN' ? 'Rewritten!' : 'Rewrite'}</span>
                </motion.button>
            </div>

            {/* Animated Mouse Cursor */}
            <AnimatePresence>
                {(state === 'MOVING_CURSOR' || state === 'CLICKING') && (
                    <motion.div
                        initial={{ opacity: 0, top: "40%", left: "40%" }}
                        animate={{
                            opacity: 1,
                            top: "88%",   // Approximate position of the button
                            left: "85%"   // Approximate position of the button
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute z-50 pointer-events-none"
                    >
                        <MousePointer2 className="w-6 h-6 text-slate-900 fill-slate-900 drop-shadow-md" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
