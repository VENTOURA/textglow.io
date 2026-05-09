/**
 * Detects if the current environment is a pre-rendering session (like react-snap).
 */
export const isPrerender = (): boolean => {
  return (
    navigator.userAgent.includes('ReactSnap') ||
    navigator.userAgent.includes('Chrome-Lighthouse') ||
    window.location.search.includes('prerender=true') ||
    !!(window as any).snapSaveState
  );
};
