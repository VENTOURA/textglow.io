import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export const Footer = () => {
    return (
        <footer className="bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                    <div className="md:col-span-1 space-y-4">
                        <div className="flex items-center space-x-2">
                            <img src={logo} alt="TextGlow Logo" className="w-6 h-6" />
                            <span className="font-bold text-lg text-slate-900">TextGlow</span>
                        </div>
                        <p className="text-sm text-slate-500">
                            Rewrite and rewrite your text instantly, anywhere on the web.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">Use Cases</h3>
                        <ul className="space-y-2">
                            <li><Link to="/linkedin/" className="text-sm text-slate-600 hover:text-slate-900">For LinkedIn</Link></li>
                            <li><Link to="/gmail/" className="text-sm text-slate-600 hover:text-slate-900">For Gmail</Link></li>
                            <li><Link to="/slack/" className="text-sm text-slate-600 hover:text-slate-900">For Slack</Link></li>
                            <li><Link to="/tinder/" className="text-sm text-slate-600 hover:text-slate-900">For Dating Apps</Link></li>
                            <li><Link to="/translate/" className="text-sm text-slate-600 hover:text-slate-900">For Translation</Link></li>
                            <li><Link to="/customer-support/" className="text-sm text-slate-600 hover:text-slate-900">Customer Support</Link></li>
                            <li><Link to="/sales/" className="text-sm text-slate-600 hover:text-slate-900">Sales & Outreach</Link></li>
                            <li><Link to="/job-applications/" className="text-sm text-slate-600 hover:text-slate-900">Job Applications</Link></li>
                            <li><Link to="/managers/" className="text-sm text-slate-600 hover:text-slate-900">For Managers</Link></li>
                            <li><Link to="/freelancers/" className="text-sm text-slate-600 hover:text-slate-900">For Freelancers</Link></li>
                            <li><Link to="/academic/" className="text-sm text-slate-600 hover:text-slate-900">For Academic</Link></li>
                            <li><Link to="/hr/" className="text-sm text-slate-600 hover:text-slate-900">For HR & Recruiting</Link></li>
                            <li><Link to="/customer-success/" className="text-sm text-slate-600 hover:text-slate-900">Customer Success</Link></li>
                            <li><Link to="/remote-teams/" className="text-sm text-slate-600 hover:text-slate-900">Remote Teams</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">Free Tools</h3>
                        <ul className="space-y-2">
                            <li><Link to="/tools/email-tone-analyzer/" className="text-sm text-slate-600 hover:text-slate-900">Email Tone Analyzer</Link></li>
                            <li><Link to="/tools/word-counter/" className="text-sm text-slate-600 hover:text-slate-900">Word Counter</Link></li>
                            <li><Link to="/tools/email-rewriter/" className="text-sm text-slate-600 hover:text-slate-900">Email Rewriter</Link></li>
                            <li><Link to="/tools/formality-checker/" className="text-sm text-slate-600 hover:text-slate-900">Formality Checker</Link></li>
                            <li><Link to="/tools/linkedin-post-preview/" className="text-sm text-slate-600 hover:text-slate-900">LinkedIn Post Preview</Link></li>
                            <li><Link to="/tools/cold-email-generator/" className="text-sm text-slate-600 hover:text-slate-900">Cold Email Generator</Link></li>
                            <li><Link to="/tools/jargon-translator/" className="text-sm text-slate-600 hover:text-slate-900">Jargon Translator</Link></li>
                            <li><Link to="/tools/ai-writing-detector/" className="text-sm text-slate-600 hover:text-slate-900">AI Writing Detector</Link></li>
                            <li><Link to="/tools/passive-aggressive-checker/" className="text-sm text-slate-600 hover:text-slate-900">Passive-Aggressive Checker</Link></li>
                            <li><Link to="/tools/genz-translator/" className="text-sm text-slate-600 hover:text-slate-900">Gen Z Translator</Link></li>
                            <li><Link to="/tools/subject-line-scorer/" className="text-sm text-slate-600 hover:text-slate-900">Subject Line Scorer</Link></li>
                            <li><Link to="/tools/out-of-office/" className="text-sm text-slate-600 hover:text-slate-900">Out-of-Office Generator</Link></li>
                            <li><Link to="/tools/writing-quiz/" className="text-sm text-slate-600 hover:text-slate-900">Writing Personality Quiz</Link></li>
                            <li><Link to="/tools/examples/" className="text-sm text-slate-600 hover:text-slate-900">Writing Examples</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">Product</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-sm text-slate-600 hover:text-slate-900">Features</Link></li>
                            <li><Link to="/pricing/" className="text-sm text-slate-600 hover:text-slate-900">Pricing</Link></li>
                            <li><Link to="/blog/" className="text-sm text-slate-600 hover:text-slate-900">Blog</Link></li>
                            <li><a href="https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-slate-900">Chrome Extension</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><Link to="/privacy/" className="text-sm text-slate-600 hover:text-slate-900">Privacy Policy</Link></li>
                            <li><Link to="/terms/" className="text-sm text-slate-600 hover:text-slate-900">Terms of Service</Link></li>
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

                <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-slate-500">© {new Date().getFullYear()} TextGlow. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
