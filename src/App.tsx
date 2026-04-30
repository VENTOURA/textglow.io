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
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
