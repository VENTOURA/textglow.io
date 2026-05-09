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
import { JargonTranslator } from './pages/JargonTranslator';
import { AiWritingDetector } from './pages/AiWritingDetector';
import { PassiveAggressiveChecker } from './pages/PassiveAggressiveChecker';
import { GenzTranslator } from './pages/GenzTranslator';
import { ExamplesGallery } from './pages/tools/ExamplesGallery';
import { ExampleDetail } from './pages/tools/ExampleDetail';
import { WritingQuiz } from './pages/tools/WritingQuiz';
import { SubjectLineScorer } from './pages/tools/SubjectLineScorer';
import { OutOfOffice } from './pages/tools/OutOfOffice';
import { CustomerSupport } from './pages/use-cases/CustomerSupport';
import { Sales } from './pages/use-cases/Sales';
import { JobApplications } from './pages/use-cases/JobApplications';
import { Managers } from './pages/use-cases/Managers';
import { Freelancers } from './pages/use-cases/Freelancers';
import { Academic } from './pages/use-cases/Academic';
import { HR } from './pages/use-cases/HR';
import { CustomerSuccess } from './pages/use-cases/CustomerSuccess';
import { RemoteTeams } from './pages/use-cases/RemoteTeams';
import { Tools } from './pages/Tools';
import NotFound from './pages/NotFound';

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
            <Route path="/tools/jargon-translator" element={<JargonTranslator />} />
            <Route path="/tools/ai-writing-detector" element={<AiWritingDetector />} />
            <Route path="/tools/passive-aggressive-checker" element={<PassiveAggressiveChecker />} />
            <Route path="/tools/genz-translator" element={<GenzTranslator />} />
            <Route path="/tools/writing-quiz" element={<WritingQuiz />} />
            <Route path="/tools/subject-line-scorer" element={<SubjectLineScorer />} />
            <Route path="/tools/out-of-office" element={<OutOfOffice />} />
            <Route path="/customer-support" element={<CustomerSupport />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/job-applications" element={<JobApplications />} />
            <Route path="/managers" element={<Managers />} />
            <Route path="/freelancers" element={<Freelancers />} />
            <Route path="/academic" element={<Academic />} />
            <Route path="/hr" element={<HR />} />
            <Route path="/customer-success" element={<CustomerSuccess />} />
            <Route path="/remote-teams" element={<RemoteTeams />} />
            <Route path="/tools/examples" element={<ExamplesGallery />} />
            <Route path="/tools/examples/:slug" element={<ExampleDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
