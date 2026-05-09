import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Chrome, ChevronDown, ChevronUp, Monitor, Smartphone, ThumbsUp, MessageSquare, Repeat2, Send } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { analyzeLinkedinPost } from '../utils/linkedinScorer';
import type { LinkedinScore } from '../utils/linkedinScorer';

const CHROME_URL = "https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf";

const FAQItem = ({ q, a }: { q: string; a: string }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white mb-3">
            <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors">
                <span className="font-semibold text-slate-900 pr-4">{q}</span>
                {open ? <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />}
            </button>
            {open && <div className="px-5 pb-5"><p className="text-slate-600 leading-relaxed">{a}</p></div>}
        </div>
    );
};

const processText = (text: string) => {
    return text.split('\n').map((line, i, arr) => (
        <React.Fragment key={i}>
            {line.split(/(#\w+|@\w+(?: \w+)?)/g).map((part, j) => {
                if (part.startsWith('#')) return <span key={j} className="text-[#0a66c2] font-semibold">{part}</span>;
                if (part.startsWith('@')) return <span key={j} className="text-[#0a66c2] font-semibold">{part}</span>;
                return <span key={j}>{part}</span>;
            })}
            {i !== arr.length - 1 && <br />}
        </React.Fragment>
    ));
};

export const LinkedinPostPreview = () => {
    const [text, setText] = useState('');
    const [isMobile, setIsMobile] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [name, setName] = useState('Your Name');
    const [headline, setHeadline] = useState('Your Headline');
    const [score, setScore] = useState<LinkedinScore | null>(null);

    const nameRef = useRef<HTMLSpanElement>(null);
    const headlineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (text.trim()) {
                setScore(analyzeLinkedinPost(text));
            } else {
                setScore(null);
            }
        }, 300);
        return () => clearTimeout(timer);
    }, [text]);

    // Truncation logic
    const { truncatedText, needsTruncation } = useMemo(() => {
        if (!text.trim()) return { truncatedText: '', needsTruncation: false };
        const charLimit = isMobile ? 210 : 250;
        const lines = text.split('\n');
        let trunc = "";
        let needs = false;
        
        if (lines.length > 3) {
            trunc = lines.slice(0, 3).join('\n');
            needs = true;
        } else {
            trunc = text;
        }
        
        if (trunc.length > charLimit) {
            trunc = trunc.slice(0, charLimit);
            trunc = trunc.slice(0, Math.max(trunc.lastIndexOf(' '), charLimit - 15));
            needs = true;
        }
        
        return { truncatedText: trunc, needsTruncation: needs };
    }, [text, isMobile]);

    const getScoreColor = (value: number) => {
        if (value <= 40) return 'text-red-600';
        if (value <= 70) return 'text-amber-600';
        return 'text-green-600';
    };

    const getScoreBg = (value: number) => {
        if (value <= 40) return 'bg-red-600';
        if (value <= 70) return 'bg-amber-500';
        return 'bg-green-600';
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <Helmet>
                <title>LinkedIn Post Preview & Scorer — Optimize Your Hook | TextGlow</title>
                <meta name="description" content="Preview your LinkedIn posts on desktop and mobile before posting. Get AI insights on hook strength, formatting, and readability to maximize your reach. Free tool." />
                <link rel="canonical" href="https://textglow.io/tools/linkedin-post-preview/" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://textglow.io/tools/linkedin-post-preview/" />
                <meta property="og:title" content="LinkedIn Post Preview & Scorer — Optimize Your Hook | TextGlow" />
                <meta property="og:description" content="Preview your LinkedIn posts on desktop and mobile before posting. Get AI insights on hook strength, formatting, and readability to maximize your reach. Free tool." />
                <meta property="og:image" content="https://textglow.io/og-image.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="LinkedIn Post Preview & Scorer — Optimize Your Hook | TextGlow" />
                <meta property="twitter:description" content="Preview your LinkedIn posts on desktop and mobile before posting. Get AI insights on hook strength, formatting, and readability to maximize your reach. Free tool." />
            </Helmet>

            <section className="pt-20 pb-12 bg-white border-b border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-medium mb-6">
                            <span>LinkedIn Preview & Scorer</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">LinkedIn Post Preview & Scorer</h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            See exactly how your post looks on LinkedIn. Get scored on hook strength, length, readability, and formatting — instantly.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-8 mb-8">
                            
                            {/* Editor */}
                            <div className="flex flex-col h-[600px]">
                                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex-grow flex flex-col">
                                    <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                                        <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Your Post</span>
                                        <span className={`text-xs font-medium ${text.length > 3000 ? 'text-red-500' : 'text-slate-400'}`}>
                                            {text.length} / 3000
                                        </span>
                                    </div>
                                    <textarea
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        placeholder="Write your next viral LinkedIn post here..."
                                        className="w-full flex-grow p-6 text-lg text-slate-700 focus:outline-none resize-none"
                                    />
                                </div>
                            </div>

                            {/* Preview Panel */}
                            <div className="flex flex-col h-[600px]">
                                <div className="mb-4 flex justify-center space-x-2">
                                    <button 
                                        onClick={() => setIsMobile(false)}
                                        className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${!isMobile ? 'bg-slate-800 text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
                                    >
                                        <Monitor className="w-4 h-4 mr-2" /> Desktop
                                    </button>
                                    <button 
                                        onClick={() => setIsMobile(true)}
                                        className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isMobile ? 'bg-slate-800 text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
                                    >
                                        <Smartphone className="w-4 h-4 mr-2" /> Mobile
                                    </button>
                                </div>

                                <div className="flex-grow bg-slate-100 rounded-3xl border border-slate-200 p-4 md:p-8 flex items-start justify-center overflow-y-auto">
                                    {/* LinkedIn Card */}
                                    <div 
                                        className="bg-white border border-[#e0e0e0] shadow-sm rounded-lg overflow-hidden transition-all duration-300 w-full"
                                        style={{ 
                                            maxWidth: isMobile ? '375px' : '555px',
                                            padding: isMobile ? '12px 12px 4px 12px' : '16px 16px 4px 16px',
                                            fontFamily: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                                        }}
                                    >
                                        {/* Header */}
                                        <div className="flex items-center mb-3">
                                            <div className="w-12 h-12 rounded-full bg-[#e0e0e0] flex-shrink-0 flex items-center justify-center overflow-hidden">
                                                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white mt-2 fill-current">
                                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                                </svg>
                                            </div>
                                            <div className="ml-2">
                                                <div className="flex items-center">
                                                    <span 
                                                        ref={nameRef}
                                                        contentEditable 
                                                        suppressContentEditableWarning
                                                        onBlur={(e) => setName(e.currentTarget.textContent || 'Your Name')}
                                                        className="font-semibold text-[#000000E6] text-[14px] leading-tight outline-none border-b border-transparent hover:border-slate-300 focus:border-brand-500 cursor-text"
                                                    >{name}</span>
                                                    <span className="text-[#00000099] mx-1">·</span>
                                                    <span className="text-[#00000099] text-[14px]">1st</span>
                                                </div>
                                                <div 
                                                    ref={headlineRef}
                                                    contentEditable 
                                                    suppressContentEditableWarning
                                                    onBlur={(e) => setHeadline(e.currentTarget.textContent || 'Your Headline')}
                                                    className="text-[#00000099] text-[12px] leading-tight outline-none border-b border-transparent hover:border-slate-300 focus:border-brand-500 cursor-text truncate max-w-[200px] sm:max-w-[300px]"
                                                >{headline}</div>
                                                <div className="text-[#00000099] text-[12px] flex items-center mt-[1px]">
                                                    <span>Just now</span>
                                                    <span className="mx-1">·</span>
                                                    <span className="text-[10px]">🌐</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Body */}
                                        <div className="text-[#000000E6] text-[14px] leading-[20px] break-words whitespace-pre-wrap">
                                            {text ? (
                                                <>
                                                    {isExpanded ? processText(text) : (
                                                        <>
                                                            {processText(truncatedText)}
                                                            {needsTruncation && (
                                                                <>
                                                                    <span>...</span>
                                                                    <button 
                                                                        onClick={() => setIsExpanded(true)}
                                                                        className="text-[#00000099] font-medium hover:text-[#0a66c2] hover:underline ml-1"
                                                                    >
                                                                        see more
                                                                    </button>
                                                                </>
                                                            )}
                                                        </>
                                                    )}
                                                </>
                                            ) : (
                                                <span className="text-[#00000099] italic">Your post will appear here...</span>
                                            )}
                                        </div>

                                        {/* Footer */}
                                        <div className="mt-4 pt-2 border-t border-[#e0e0e0] flex items-center justify-between pb-1 px-2">
                                            <div className="flex flex-col items-center text-[#00000099] hover:bg-[#ebebeb] px-3 py-2 rounded transition-colors cursor-pointer">
                                                <ThumbsUp className="w-5 h-5 mb-1 stroke-[1.5]" />
                                                <span className="text-[12px] font-medium">Like</span>
                                            </div>
                                            <div className="flex flex-col items-center text-[#00000099] hover:bg-[#ebebeb] px-3 py-2 rounded transition-colors cursor-pointer">
                                                <MessageSquare className="w-5 h-5 mb-1 stroke-[1.5]" />
                                                <span className="text-[12px] font-medium">Comment</span>
                                            </div>
                                            <div className="flex flex-col items-center text-[#00000099] hover:bg-[#ebebeb] px-3 py-2 rounded transition-colors cursor-pointer">
                                                <Repeat2 className="w-5 h-5 mb-1 stroke-[1.5]" />
                                                <span className="text-[12px] font-medium">Repost</span>
                                            </div>
                                            <div className="flex flex-col items-center text-[#00000099] hover:bg-[#ebebeb] px-3 py-2 rounded transition-colors cursor-pointer">
                                                <Send className="w-5 h-5 mb-1 stroke-[1.5]" />
                                                <span className="text-[12px] font-medium">Send</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Scorer Panel */}
                        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-8 mb-8">
                            {score ? (
                                <>
                                    {/* Overall Score Row */}
                                    <div className="flex flex-col md:flex-row items-center justify-between border-b border-slate-100 pb-8 mb-8">
                                        <div className="text-center md:text-left mb-6 md:mb-0">
                                            <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Overall Score</div>
                                            <div className="flex items-baseline justify-center md:justify-start">
                                                <span className={`text-5xl font-black ${getScoreColor(score.overall)}`}>{score.overall}</span>
                                                <span className="text-2xl text-slate-400 font-medium ml-1">/100</span>
                                            </div>
                                        </div>
                                        <div className="flex-grow max-w-lg mx-6 w-full mb-6 md:mb-0">
                                            <div className="h-4 bg-slate-100 rounded-full overflow-hidden w-full relative">
                                                <div 
                                                    className={`absolute top-0 left-0 h-full ${getScoreBg(score.overall)} transition-all duration-700 ease-out`}
                                                    style={{ width: `${score.overall}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="text-center md:text-right">
                                            <div className={`text-xl font-bold ${getScoreColor(score.overall)}`}>{score.verdictLabel}</div>
                                        </div>
                                    </div>

                                    {/* 4 Categories */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                                        <div className="text-center p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Hook</div>
                                            <div className="text-2xl font-bold text-slate-700">{score.hook.score}<span className="text-sm text-slate-400">/10</span></div>
                                        </div>
                                        <div className="text-center p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Length</div>
                                            <div className="text-2xl font-bold text-slate-700">{score.length.score}<span className="text-sm text-slate-400">/10</span></div>
                                        </div>
                                        <div className="text-center p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Readability</div>
                                            <div className="text-2xl font-bold text-slate-700">{score.readability.score}<span className="text-sm text-slate-400">/10</span></div>
                                        </div>
                                        <div className="text-center p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Formatting</div>
                                            <div className="text-2xl font-bold text-slate-700">{score.formatting.score}<span className="text-sm text-slate-400">/10</span></div>
                                        </div>
                                    </div>

                                    {/* Length Bar Detail */}
                                    <div className="mb-8">
                                        <div className="text-sm font-medium text-slate-600 mb-2 flex justify-between">
                                            <span>Post Length: {text.length} chars</span>
                                            <span className="text-slate-400">{score.length.label}</span>
                                        </div>
                                        <div className="relative h-6 bg-slate-100 rounded-lg w-full">
                                            <div className="absolute top-0 bottom-0 left-[30%] right-[56.6%] bg-green-100 border-x-2 border-green-400" title="Sweet Spot (900-1300 chars)"></div>
                                            {/* Tick marks */}
                                            {[50, 200, 500, 900, 1300, 2000, 2500, 3000].map(val => (
                                                <div key={val} className="absolute top-0 bottom-0 border-l border-slate-300 z-10" style={{ left: `${(val / 3000) * 100}%` }}></div>
                                            ))}
                                            {/* Cursor */}
                                            <div 
                                                className="absolute top-[-4px] bottom-[-4px] w-1 bg-slate-800 rounded z-20 transition-all duration-300"
                                                style={{ left: `${Math.min((text.length / 3000) * 100, 100)}%` }}
                                            ></div>
                                        </div>
                                        <div className="text-center mt-2 text-xs text-green-600 font-medium">↑ Engagement Sweet Spot (900-1,300 chars)</div>
                                    </div>

                                    {/* Suggestions */}
                                    {score.allSuggestions.length > 0 && (
                                        <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6">
                                            <h3 className="text-sm font-bold text-brand-600 uppercase tracking-wider mb-4">How to Improve</h3>
                                            <ul className="space-y-3">
                                                {score.allSuggestions.map((sug, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="text-brand-500 mr-2 mt-0.5">•</span>
                                                        <span className="text-brand-900 leading-relaxed">{sug}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl">✍️</span>
                                    </div>
                                    <p className="text-slate-500 font-medium text-lg">Start typing to see your score.</p>
                                </div>
                            )}
                        </div>

                        {/* CTA Banner */}
                        <section className="rounded-3xl py-12 bg-slate-900 text-center mb-16 overflow-hidden relative">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-400 via-slate-900 to-slate-900"></div>
                            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                                <h2 className="text-3xl font-bold text-white mb-4">Your post looks great — but does it sound right?</h2>
                                <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
                                    TextGlow rewrites your LinkedIn posts with the perfect tone, right inside LinkedIn. No copy-pasting.
                                </p>
                                <Button href={CHROME_URL} variant="pro" size="lg" className="px-8 py-4 text-lg">
                                    <Chrome className="w-6 h-6 mr-3" /> Install TextGlow — Free
                                </Button>
                                <p className="mt-4 text-sm text-slate-500">
                                    Free: 10 rewrites/day | Pro: 150/day for $39/year
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </section>

            {/* SEO / FAQ Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
                    
                    <FAQItem 
                        q="Where does LinkedIn cut off my post?" 
                        a="LinkedIn shows roughly the first 210 characters on mobile and 250 characters on desktop before adding a '...see more' link. Everything after that fold is hidden until the reader clicks. Your first line is your only guaranteed impression — make it count." 
                    />
                    <FAQItem 
                        q="What's the ideal LinkedIn post length?" 
                        a="900-1,300 characters tends to perform best for reach and engagement, according to Hootsuite's 2025 data. Posts under 200 characters get scrolled past. Posts over 2,500 characters lose most readers before the end." 
                    />
                    <FAQItem 
                        q="How many hashtags should I use on LinkedIn?" 
                        a="3-5 hashtags is the sweet spot. Fewer than 3 and you miss discoverability. More than 5 and the post starts to look spammy, which can hurt reach." 
                    />
                    <FAQItem 
                        q="Does this tool store my post?" 
                        a="No. Everything runs entirely in your browser. Your text is never sent to any server, stored in any database, or shared with anyone." 
                    />
                    <FAQItem 
                        q="How can I improve my LinkedIn post hook?" 
                        a="Start with a question, a number, a bold claim, or a pattern interrupt. Avoid generic openings like 'I'm excited to announce' or 'Happy to share' — LinkedIn's algorithm tends to deprioritize these, and readers scroll right past them." 
                    />
                    <FAQItem 
                        q="What makes a LinkedIn post go viral?" 
                        a="There's no formula, but high-performing posts tend to share a strong first line (hook), a personal or contrarian take, short paragraphs with white space, and end with a question or call to engage. Consistency matters more than any single post." 
                    />
                </div>
            </section>
        </div>
    );
};
