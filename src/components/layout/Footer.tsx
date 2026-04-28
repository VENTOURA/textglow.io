import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export const Footer = () => {
    return (
        <footer className="bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    <div className="md:col-span-1 space-y-4">
                        <div className="flex items-center space-x-2">
                            <img src={logo} alt="Textglow Logo" className="w-6 h-6" />
                            <span className="font-bold text-lg text-slate-900">Textglow</span>
                        </div>
                        <p className="text-sm text-slate-500">
                            Polish and rewrite your text instantly, anywhere on the web.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">Use Cases</h3>
                        <ul className="space-y-2">
                            <li><Link to="/linkedin" className="text-sm text-slate-600 hover:text-slate-900">For LinkedIn</Link></li>
                            <li><Link to="/gmail" className="text-sm text-slate-600 hover:text-slate-900">For Gmail</Link></li>
                            <li><Link to="/slack" className="text-sm text-slate-600 hover:text-slate-900">For Slack</Link></li>
                            <li><Link to="/tinder" className="text-sm text-slate-600 hover:text-slate-900">For Dating Apps</Link></li>
                            <li><Link to="/translate" className="text-sm text-slate-600 hover:text-slate-900">For Translation</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">Product</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-sm text-slate-600 hover:text-slate-900">Features</Link></li>
                            <li><Link to="/pricing" className="text-sm text-slate-600 hover:text-slate-900">Pricing</Link></li>
                            <li><Link to="/blog" className="text-sm text-slate-600 hover:text-slate-900">Blog</Link></li>
                            <li><a href="https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-slate-900">Chrome Extension</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><Link to="/privacy" className="text-sm text-slate-600 hover:text-slate-900">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-sm text-slate-600 hover:text-slate-900">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><a href="mailto:support@textglow.io" className="text-sm text-slate-600 hover:text-slate-900">Contact Us</a></li>
                            <li><a href="mailto:support@textglow.io" className="text-sm text-slate-600 hover:text-slate-900 font-medium">support@textglow.io</a></li>
                        </ul>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-slate-500">© {new Date().getFullYear()} Textglow. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
