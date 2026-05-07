import { Button } from '../ui/Button';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.png';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;
    const linkClass = (path: string) => `text-sm font-medium transition-colors ${isActive(path) ? 'text-brand-600 font-bold' : 'text-slate-600 hover:text-slate-900'}`;
    const mobileLinkClass = (path: string) => `block py-2 text-base font-medium transition-colors ${isActive(path) ? 'text-brand-600 font-bold' : 'text-slate-600 hover:text-slate-900'}`;

    return (
        <div className="fixed top-0 w-full z-50 flex flex-col">
            <div className="bg-gradient-to-r from-brand-600 via-purple-600 to-indigo-600 text-white text-center py-3 px-4 shadow-md flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 relative z-10 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="flex items-center gap-2 relative z-20">
                    <span className="text-2xl animate-bounce drop-shadow-md">🎁</span>
                    <span className="text-sm sm:text-base font-bold tracking-wide text-shadow-sm flex items-center flex-wrap justify-center gap-1">
                        EARLY BIRD LAUNCH: First 20 yearly subscribers get $1,030 in 
                        <span className="bg-amber-400 text-amber-950 px-2 py-0.5 rounded text-xs sm:text-sm font-extrabold shadow-sm uppercase tracking-wider mx-1 border border-amber-300">
                            Anthropic Claude
                        </span>
                        API Credits!
                    </span>
                </div>
                <Link to="/offer" className="relative z-20 bg-white text-purple-700 px-5 py-1.5 rounded-full text-sm font-extrabold hover:bg-slate-50 hover:scale-105 transition-all shadow border border-purple-100 whitespace-nowrap">
                    Claim Offer &rarr;
                </Link>
            </div>
            <div className="bg-white/80 backdrop-blur-md border-b border-slate-100 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link to="/" className="flex items-center space-x-2">
                        <img src={logo} alt="Textglow Logo" className="w-8 h-8" />
                        <span className="font-bold text-xl tracking-tight text-slate-900">Textglow</span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className={linkClass('/')}>Home</Link>
                        <Link to="/how-to-use" className={linkClass('/how-to-use')}>How to Use</Link>
                        <Link to="/pricing" className={linkClass('/pricing')}>Pricing</Link>
                        <Link to="/tools" className={linkClass('/tools')}>Tools</Link>
                        {/* Hidden links
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900">About</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900">Blog</a>
            */}
                        <Button size="sm" href="https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf" variant="primary">Install Free</Button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            <Link to="/" onClick={() => setIsOpen(false)} className={mobileLinkClass('/')}>Home</Link>
                            <Link to="/how-to-use" onClick={() => setIsOpen(false)} className={mobileLinkClass('/how-to-use')}>How to Use</Link>
                            <Link to="/pricing" onClick={() => setIsOpen(false)} className={mobileLinkClass('/pricing')}>Pricing</Link>
                            <Link to="/tools" onClick={() => setIsOpen(false)} className={mobileLinkClass('/tools')}>Tools</Link>
                            <div className="pt-2">
                                <Button href="https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf" className="w-full justify-center">Install Free</Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
        </div>
    );
};
