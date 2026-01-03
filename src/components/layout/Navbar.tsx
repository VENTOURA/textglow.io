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
        <div className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
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
                            <div className="pt-2">
                                <Button href="https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf" className="w-full justify-center">Install Free</Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
