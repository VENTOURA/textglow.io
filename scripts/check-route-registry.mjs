import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { routes, SITE_URL } from "../src/seo/routes.ts";

const expectedCount = 94;
const requiredMeta = [
  "title",
  "description",
  "canonical",
  "ogUrl",
  "ogTitle",
  "ogDescription",
  "ogImage",
  "twitterCard",
  "twitterTitle",
  "twitterDescription",
];

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const packageJson = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const sitemapXml = fs.readFileSync(path.join(root, "public/sitemap.xml"), "utf8");

const fail = (message) => {
  throw new Error(message);
};

const normalizePath = (pathname) => {
  if (pathname === "/") return "/";
  return `/${pathname.replace(/^\/+|\/+$/g, "")}/`;
};

if (routes.length !== expectedCount) {
  fail(`Route registry has ${routes.length} routes, expected ${expectedCount}.`);
}

const routePaths = routes.map((route) => route.path);
const uniqueRoutes = new Set(routePaths);

if (uniqueRoutes.size !== routes.length) {
  const duplicates = routePaths.filter((route, index) => routePaths.indexOf(route) !== index);
  fail(`Route registry contains duplicate routes: ${duplicates.join(", ")}`);
}

for (const route of routes) {
  if (!route.path.startsWith("/") || !route.path.endsWith("/")) {
    fail(`Route path must use a leading and trailing slash: ${route.path}`);
  }

  if (!route.pattern) {
    fail(`Route ${route.path} is missing a React Router pattern.`);
  }

  for (const key of requiredMeta) {
    if (!route.meta[key]) {
      fail(`Route ${route.path} is missing metadata field: ${key}`);
    }
  }

  const expectedCanonical = `${SITE_URL}${route.path}`;

  if (route.meta.canonical !== expectedCanonical) {
    fail(`Route ${route.path} canonical is ${route.meta.canonical}, expected ${expectedCanonical}.`);
  }

  if (route.meta.ogUrl !== route.meta.canonical) {
    fail(`Route ${route.path} OG URL must match canonical.`);
  }
}

const sitemapUrls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const sitemapPaths = sitemapUrls.map((url) => normalizePath(new URL(url).pathname));
const uniqueSitemapPaths = new Set(sitemapPaths);

if (sitemapPaths.length !== expectedCount) {
  fail(`Sitemap has ${sitemapPaths.length} URLs, expected ${expectedCount}.`);
}

if (uniqueSitemapPaths.size !== expectedCount) {
  const duplicates = sitemapPaths.filter((item, index) => sitemapPaths.indexOf(item) !== index);
  fail(`Sitemap contains duplicate paths: ${duplicates.join(", ")}`);
}

const missingFromSitemap = routePaths.filter((route) => !uniqueSitemapPaths.has(route));
const missingFromRegistry = sitemapPaths.filter((route) => !uniqueRoutes.has(route));

if (missingFromSitemap.length) {
  fail(`Sitemap is missing registry routes: ${missingFromSitemap.join(", ")}`);
}

if (missingFromRegistry.length) {
  fail(`Registry is missing sitemap routes: ${missingFromRegistry.join(", ")}`);
}

const reactSnapRoutes = packageJson.reactSnap?.include ?? [];
const reactSnapPaths = new Set(reactSnapRoutes.map(normalizePath));
const missingFromReactSnap = routePaths.filter((route) => !reactSnapPaths.has(route));
const missingFromRoutes = [...reactSnapPaths].filter((route) => !uniqueRoutes.has(route));

if (missingFromReactSnap.length) {
  fail(`reactSnap.include is missing registry routes: ${missingFromReactSnap.join(", ")}`);
}

if (missingFromRoutes.length) {
  fail(`Registry is missing reactSnap routes: ${missingFromRoutes.join(", ")}`);
}

console.log(`Route registry OK: ${routes.length} routes, sitemap ${sitemapPaths.length} URLs.`);
