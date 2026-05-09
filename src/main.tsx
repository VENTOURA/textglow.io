import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root')!;

// If react-snap has pre-rendered the page, the root element will have child nodes.
// In that case, we use hydrateRoot to attach React to the existing HTML.
// Otherwise, we use createRoot for a fresh client-side render.
if (navigator.userAgent.includes("ReactSnap")) {
  document.documentElement.setAttribute('data-prerender', 'true');
} else {
  document.documentElement.removeAttribute('data-prerender');
}

if (rootElement.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </StrictMode>
  );
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </StrictMode>,
  );
}
