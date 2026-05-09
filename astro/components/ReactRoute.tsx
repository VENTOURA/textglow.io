import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes, StaticRouter } from "react-router";
import { pageComponents } from "../lib/pageComponents";
import type { PageComponentKey } from "../../src/seo/routes";

interface ReactRouteProps {
  route: string;
  pattern: string;
  component: PageComponentKey;
}

const isBrowser = typeof window !== "undefined";

const handleClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.altKey ||
    event.ctrlKey ||
    event.shiftKey
  ) {
    return;
  }

  const target = event.target as HTMLElement | null;
  const anchor = target?.closest("a[href]") as HTMLAnchorElement | null;

  if (!anchor || anchor.target || anchor.hasAttribute("download")) {
    return;
  }

  const url = new URL(anchor.href, window.location.href);

  if (url.origin !== window.location.origin) {
    return;
  }

  if (url.pathname === window.location.pathname && url.hash) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  window.location.href = `${url.pathname}${url.search}${url.hash}`;
};

export const ReactRoute = ({ route, pattern, component }: ReactRouteProps) => {
  const Page = pageComponents[component];

  const content = (
    <HelmetProvider>
      <div onClickCapture={isBrowser ? handleClickCapture : undefined}>
        <Routes>
          <Route path={pattern} element={<Page />} />
        </Routes>
      </div>
    </HelmetProvider>
  );

  if (isBrowser) {
    return <BrowserRouter>{content}</BrowserRouter>;
  }

  return <StaticRouter location={route}>{content}</StaticRouter>;
};
