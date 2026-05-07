import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Loader2, RotateCcw } from 'lucide-react';
import { Button } from '../ui/Button';

const TONES = [
    "Professional", "Friendly", "Confident", "Concise",
    "Empathetic", "Persuasive", "Direct", "Polite", "Funny", "Flirty"
];

export const Playground = () => {
    const [inputText, setInputText] = useState('');
    const [polishedText, setPolishedText] = useState('');
    const [tone, setTone] = useState('Professional');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handlePolish = async () => {
        if (!inputText.trim()) return;

        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('https://polisher-server.vercel.app/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text: inputText,
                    tone: tone,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                if (data.error === 'FREE_LIMIT_REACHED') {
                    setError('Daily playground limit reached. Install the extension for more!');
                } else {
                    setError('Something went wrong. Please try again.');
                }
                return;
            }

            setPolishedText(data.data);
        } catch (err) {
            setError('Failed to connect to the AI. Please check your internet.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleReset = () => {
        setInputText('');
        setPolishedText('');
        setError('');
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
                {/* Header/Toolbar */}
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        <span className="ml-2 text-sm font-medium text-slate-500 font-mono">textglow-playground.exe</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <select
                            value={tone}
                            onChange={(e) => setTone(e.target.value)}
                            className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
                        >
                            {TONES.map(t => (
                                <option key={t} value={t}>{t} Tone</option>
                            ))}
                        </select>

                        <button
                            onClick={handleReset}
                            className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors"
                            title="Reset"
                        >
                            <RotateCcw className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                    {/* Input Area */}
                    <div className="relative p-6 bg-white">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Your Draft</span>
                            <span className="text-[10px] font-medium text-slate-400">{inputText.length} / 800</span>
                        </div>
                        <textarea
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value.slice(0, 800))}
                            placeholder="Type something here to polish... e.g. 'can u help me with this task tomorrow thx'"
                            className="w-full h-48 md:h-64 resize-none border-none focus:ring-0 p-0 text-slate-700 placeholder-slate-300 text-lg leading-relaxed"
                        />

                        <div className="mt-4 flex justify-end">
                            <motion.button
                                onClick={handlePolish}
                                disabled={isLoading || !inputText.trim()}
                                whileHover={!isLoading && inputText.trim() ? { scale: 1.02 } : {}}
                                whileTap={!isLoading && inputText.trim() ? { scale: 0.98 } : {}}
                                animate={!isLoading && inputText.trim() ? {
                                    boxShadow: [
                                        "0 10px 15px -3px rgba(37, 99, 235, 0.2)",
                                        "0 10px 25px -3px rgba(37, 99, 235, 0.4)",
                                        "0 10px 15px -3px rgba(37, 99, 235, 0.2)"
                                    ]
                                } : {}}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className={`
                                    flex items-center gap-2.5 px-8 py-3.5 rounded-2xl font-black transition-all text-sm uppercase tracking-wider
                                    ${isLoading || !inputText.trim()
                                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none'
                                        : 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95 border-b-4 border-blue-800'}
                                `}
                            >
                                {isLoading ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    <div className="relative">
                                        <Sparkles className="w-5 h-5" />
                                        <motion.div
                                            animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
                                            transition={{ repeat: Infinity, duration: 1.5 }}
                                            className="absolute -top-1 -right-1"
                                        >
                                            <Sparkles className="w-2 h-2 text-blue-200 fill-current" />
                                        </motion.div>
                                    </div>
                                )}
                                {isLoading ? 'Polishing...' : 'Polish Text'}
                            </motion.button>
                        </div>
                    </div>

                    {/* Output Area */}
                    <div className="relative p-6 bg-slate-50/50">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Polished Result</span>
                            {polishedText && (
                                <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold">READY</span>
                            )}
                        </div>

                        <div className="w-full h-48 md:h-64 overflow-y-auto">
                            <AnimatePresence mode="wait">
                                {isLoading ? (
                                    <motion.div
                                        key="loading"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="h-full flex flex-col items-center justify-center text-slate-400 gap-4"
                                    >
                                        <div className="flex gap-1">
                                            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0 }} className="w-2 h-2 bg-brand-400 rounded-full" />
                                            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-2 h-2 bg-brand-400 rounded-full" />
                                            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-2 h-2 bg-brand-400 rounded-full" />
                                        </div>
                                        <p className="text-sm font-medium animate-pulse">Polishing your message...</p>
                                    </motion.div>
                                ) : error ? (
                                    <motion.div
                                        key="error"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="h-full flex flex-col items-center justify-center text-center p-4"
                                    >
                                        <p className="text-red-500 font-medium">{error}</p>
                                        <Button variant="secondary" size="sm" className="mt-4" href="https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf">
                                            Install Extension
                                        </Button>
                                    </motion.div>
                                ) : polishedText ? (
                                    <motion.div
                                        key="result"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-slate-800 text-lg leading-relaxed whitespace-pre-wrap"
                                    >
                                        {polishedText}
                                    </motion.div>
                                ) : (
                                    <div className="h-full flex flex-col items-center justify-center text-slate-300 text-center px-8">
                                        <Sparkles className="w-12 h-12 mb-4 opacity-20" />
                                        <p className="text-sm">Your polished message will appear here instantly.</p>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>

                        {polishedText && !isLoading && (
                            <div className="mt-4 flex justify-end">
                                <button
                                    onClick={() => navigator.clipboard.writeText(polishedText)}
                                    className="text-xs font-bold text-brand-600 hover:text-brand-700 underline underline-offset-4"
                                >
                                    Copy to clipboard
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <p className="mt-6 text-center text-slate-500 text-sm">
                This is a preview. The extension works directly inside your favorite websites.
            </p>
        </div>
    );
};
