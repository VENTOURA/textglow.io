import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link to="/" className="flex items-center space-x-2">
                        <Sparkles className="w-6 h-6 text-brand-500" />
                        <span className="font-bold text-xl tracking-tight text-slate-900">Textglow</span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-sm font-medium text-slate-600 hover:text-slate-900">Home</Link>
                        <Link to="/pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900">Pricing</Link>
                        <Button size="sm" href="https://chrome.google.com/webstore" variant="primary">Install Free</Button>
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
                            <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 text-base font-medium text-slate-600 hover:text-slate-900">Home</Link>
                            <Link to="/pricing" onClick={() => setIsOpen(false)} className="block py-2 text-base font-medium text-slate-600 hover:text-slate-900">Pricing</Link>
                            <div className="pt-2">
                                <Button href="https://chrome.google.com/webstore" className="w-full justify-center">Install Free</Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
