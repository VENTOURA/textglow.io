import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/layout/Layout';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Home } from './pages/Home';
import { Pricing } from './pages/Pricing';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { HowToUse } from './pages/HowToUse';
import { LinkedIn } from './pages/LinkedIn';
import { Gmail } from './pages/Gmail';
import { Slack } from './pages/Slack';
import { Tinder } from './pages/Tinder';
import { Translate } from './pages/Translate';
import { BlogIndex } from './pages/BlogIndex';
import { BlogPost } from './pages/BlogPost';
import { Offer } from './pages/Offer';
import { EmailToneAnalyzer } from './pages/EmailToneAnalyzer';
import { WordCounter } from './pages/WordCounter';
import { EmailRewriter } from './pages/EmailRewriter';
import { FormalityChecker } from './pages/FormalityChecker';
import { LinkedinPostPreview } from './pages/LinkedinPostPreview';
import { ColdEmailGenerator } from './pages/ColdEmailGenerator';
import { Tools } from './pages/Tools';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/linkedin" element={<LinkedIn />} />
            <Route path="/gmail" element={<Gmail />} />
            <Route path="/slack" element={<Slack />} />
            <Route path="/tinder" element={<Tinder />} />
            <Route path="/translate" element={<Translate />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/how-to-use" element={<HowToUse />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/tools/email-tone-analyzer" element={<EmailToneAnalyzer />} />
            <Route path="/tools/word-counter" element={<WordCounter />} />
            <Route path="/tools/email-rewriter" element={<EmailRewriter />} />
            <Route path="/tools/formality-checker" element={<FormalityChecker />} />
            <Route path="/tools/linkedin-post-preview" element={<LinkedinPostPreview />} />
            <Route path="/tools/cold-email-generator" element={<ColdEmailGenerator />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
