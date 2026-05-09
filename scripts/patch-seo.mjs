import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DIST_DIR = path.join(ROOT, "dist");
const SITE_URL = "https://textglow.io";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

const staticRouteFiles = {
    "/": "src/pages/Home.tsx",
    "/pricing/": "src/pages/Pricing.tsx",
    "/how-to-use/": "src/pages/HowToUse.tsx",
    "/gmail/": "src/pages/Gmail.tsx",
    "/linkedin/": "src/pages/LinkedIn.tsx",
    "/slack/": "src/pages/Slack.tsx",
    "/tinder/": "src/pages/Tinder.tsx",
    "/translate/": "src/pages/Translate.tsx",
    "/privacy/": "src/pages/Privacy.tsx",
    "/terms/": "src/pages/Terms.tsx",
    "/offer/": "src/pages/Offer.tsx",
    "/blog/": "src/pages/BlogIndex.tsx",
    "/tools/": "src/pages/Tools.tsx",
    "/tools/email-tone-analyzer/": "src/pages/EmailToneAnalyzer.tsx",
    "/tools/word-counter/": "src/pages/WordCounter.tsx",
    "/tools/email-rewriter/": "src/pages/EmailRewriter.tsx",
    "/tools/formality-checker/": "src/pages/FormalityChecker.tsx",
    "/tools/linkedin-post-preview/": "src/pages/LinkedinPostPreview.tsx",
    "/tools/cold-email-generator/": "src/pages/ColdEmailGenerator.tsx",
    "/tools/jargon-translator/": "src/pages/JargonTranslator.tsx",
    "/tools/ai-writing-detector/": "src/pages/AiWritingDetector.tsx",
    "/tools/passive-aggressive-checker/": "src/pages/PassiveAggressiveChecker.tsx",
    "/tools/genz-translator/": "src/pages/GenzTranslator.tsx",
    "/tools/writing-quiz/": "src/pages/tools/WritingQuiz.tsx",
    "/tools/subject-line-scorer/": "src/pages/tools/SubjectLineScorer.tsx",
    "/tools/out-of-office/": "src/pages/tools/OutOfOffice.tsx",
    "/tools/examples/": "src/pages/tools/ExamplesGallery.tsx",
};

const stripTrailingSlash = (route) => (route === "/" ? "/" : route.replace(/\/+$/, ""));
const ensureTrailingSlash = (route) => (route === "/" ? "/" : `${stripTrailingSlash(route)}/`);
const canonicalForRoute = (route) => `${SITE_URL}${ensureTrailingSlash(route) === "/" ? "/" : ensureTrailingSlash(route)}`;

function readFile(relativePath) {
    return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

function decodeTsString(value = "") {
    return value
        .replace(/\\'/g, "'")
        .replace(/\\"/g, '"')
        .replace(/\\n/g, "\n")
        .replace(/\\u2014/g, "—")
        .replace(/\\u2013/g, "–");
}

function htmlEscape(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function parseAttrs(tag) {
    const attrs = {};
    for (const match of tag.matchAll(/([:\w-]+)\s*=\s*(["'])(.*?)\2/g)) {
        attrs[match[1]] = match[3];
    }
    return attrs;
}

function extractStaticHelmetMeta(relativePath, route) {
    const source = readFile(relativePath);
    const helmetMatch = source.match(/<Helmet>([\s\S]*?)<\/Helmet>/);

    if (!helmetMatch) {
        throw new Error(`No <Helmet> block found in ${relativePath}`);
    }

    const helmet = helmetMatch[1];
    const title = helmet.match(/<title>\s*([\s\S]*?)\s*<\/title>/)?.[1]?.trim();
    const metas = {};

    for (const tag of helmet.matchAll(/<meta\b[^>]*>/g)) {
        const attrs = parseAttrs(tag[0]);
        const key = attrs.name || attrs.property;
        if (key && attrs.content) {
            metas[key] = attrs.content;
        }
    }

    const canonical =
        helmet.match(/<link\b[^>]*rel=["']canonical["'][^>]*>/)?.[0] ||
        helmet.match(/<link\b[^>]*href=["'][^"']+["'][^>]*rel=["']canonical["'][^>]*>/)?.[0];

    const canonicalHref = canonical ? parseAttrs(canonical).href : canonicalForRoute(route);

    return withDefaults({
        route,
        title,
        description: metas.description,
        canonical: canonicalHref,
        ogTitle: metas["og:title"],
        ogDescription: metas["og:description"],
        ogUrl: metas["og:url"],
        ogImage: metas["og:image"],
        ogType: metas["og:type"],
        twitterCard: metas["twitter:card"],
        twitterTitle: metas["twitter:title"],
        twitterDescription: metas["twitter:description"],
    });
}

function withDefaults(meta) {
    const canonical = meta.canonical || canonicalForRoute(meta.route);
    return {
        route: meta.route,
        title: meta.title,
        description: meta.description,
        canonical,
        ogType: meta.ogType || "website",
        ogUrl: meta.ogUrl || canonical,
        ogTitle: meta.ogTitle || meta.title,
        ogDescription: meta.ogDescription || meta.description,
        ogImage: meta.ogImage || OG_IMAGE,
        twitterCard: meta.twitterCard || "summary_large_image",
        twitterTitle: meta.twitterTitle || meta.title,
        twitterDescription: meta.twitterDescription || meta.description,
    };
}

function extractBlogPostMeta() {
    const source = readFile("src/data/blogPosts.ts");
    const metas = new Map();
    const pattern = /slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*excerpt:\s*"([^"]+)"/g;

    for (const match of source.matchAll(pattern)) {
        const slug = decodeTsString(match[1]);
        const title = decodeTsString(match[2]);
        const description = decodeTsString(match[3]);
        const route = `/blog/${slug}/`;
        metas.set(route, withDefaults({
            route,
            title: `${title} | TextGlow Blog`,
            description,
            canonical: canonicalForRoute(route),
        }));
    }

    return metas;
}

function extractExampleMeta() {
    const source = readFile("src/data/beforeAfterExamples.ts");
    const metas = new Map();
    const stringValue = "((?:\\\\'|[^'])*)";
    const pattern = new RegExp(
        `slug:\\s*'${stringValue}',[\\s\\S]*?seoTitle:\\s*'${stringValue}',[\\s\\S]*?seoDescription:\\s*'${stringValue}'`,
        "g",
    );

    for (const match of source.matchAll(pattern)) {
        const slug = decodeTsString(match[1]);
        const route = `/tools/examples/${slug}/`;
        metas.set(route, withDefaults({
            route,
            title: decodeTsString(match[2]),
            description: decodeTsString(match[3]),
            canonical: canonicalForRoute(route),
        }));
    }

    return metas;
}

function extractUseCaseMeta() {
    const dir = path.join(ROOT, "src/pages/use-cases");
    const metas = new Map();

    for (const fileName of fs.readdirSync(dir)) {
        if (!fileName.endsWith(".tsx")) continue;

        const source = fs.readFileSync(path.join(dir, fileName), "utf8");
        const metaMatch = source.match(
            /meta=\{\{\s*title:\s*"([^"]+)",\s*description:\s*"([^"]+)",\s*url:\s*"([^"]+)"/,
        );

        if (!metaMatch) {
            throw new Error(`No UseCaseLayout meta found in ${fileName}`);
        }

        const route = ensureTrailingSlash(decodeTsString(metaMatch[3]));
        metas.set(route, withDefaults({
            route,
            title: decodeTsString(metaMatch[1]),
            description: decodeTsString(metaMatch[2]),
            canonical: canonicalForRoute(route),
        }));
    }

    return metas;
}

function routeToHtmlPath(route) {
    if (route === "/") return path.join(DIST_DIR, "index.html");
    return path.join(DIST_DIR, stripTrailingSlash(route).replace(/^\//, ""), "index.html");
}

function buildTags(meta) {
    return [
        `<title data-rh="true">${htmlEscape(meta.title)}</title>`,
        `<meta data-rh="true" name="description" content="${htmlEscape(meta.description)}">`,
        `<link data-rh="true" rel="canonical" href="${htmlEscape(meta.canonical)}">`,
        `<meta data-rh="true" property="og:type" content="${htmlEscape(meta.ogType)}">`,
        `<meta data-rh="true" property="og:url" content="${htmlEscape(meta.ogUrl)}">`,
        `<meta data-rh="true" property="og:title" content="${htmlEscape(meta.ogTitle)}">`,
        `<meta data-rh="true" property="og:description" content="${htmlEscape(meta.ogDescription)}">`,
        `<meta data-rh="true" property="og:image" content="${htmlEscape(meta.ogImage)}">`,
        `<meta data-rh="true" property="twitter:card" content="${htmlEscape(meta.twitterCard)}">`,
        `<meta data-rh="true" property="twitter:title" content="${htmlEscape(meta.twitterTitle)}">`,
        `<meta data-rh="true" property="twitter:description" content="${htmlEscape(meta.twitterDescription)}">`,
    ].join("");
}

function patchHtml(html, meta) {
    const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
    if (!headMatch) {
        throw new Error(`No <head> found for ${meta.route}`);
    }

    let head = headMatch[1];
    head = head
        .replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, "")
        .replace(/<meta\b[^>]*(?:name|property)=["']description["'][^>]*>/gi, "")
        .replace(/<meta\b[^>]*property=["']og:[^"']+["'][^>]*>/gi, "")
        .replace(/<meta\b[^>]*property=["']twitter:[^"']+["'][^>]*>/gi, "")
        .replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi, "")
        .replace(/<link\b[^>]*href=["'][^"']+["'][^>]*rel=["']canonical["'][^>]*>/gi, "");

    const nextHead = `${buildTags(meta)}${head}`;
    return html.replace(headMatch[0], `<head>${nextHead}</head>`);
}

function assertMeta(meta, route) {
    for (const key of ["title", "description", "canonical", "ogUrl", "ogTitle", "ogDescription", "twitterTitle", "twitterDescription"]) {
        if (!meta[key]) {
            throw new Error(`Missing ${key} metadata for ${route}`);
        }
    }
}

function main() {
    if (!fs.existsSync(DIST_DIR)) {
        throw new Error("dist directory does not exist. Run this script after vite build and react-snap.");
    }

    const packageJson = JSON.parse(readFile("package.json"));
    const includeRoutes = packageJson.reactSnap?.include || [];
    const routeMeta = new Map();

    for (const [route, relativePath] of Object.entries(staticRouteFiles)) {
        routeMeta.set(route, extractStaticHelmetMeta(relativePath, route));
    }

    for (const metaMap of [extractBlogPostMeta(), extractExampleMeta(), extractUseCaseMeta()]) {
        for (const [route, meta] of metaMap) {
            routeMeta.set(route, meta);
        }
    }

    const missingMeta = includeRoutes.filter((route) => !routeMeta.has(route));
    if (missingMeta.length) {
        throw new Error(`No SEO metadata found for routes: ${missingMeta.join(", ")}`);
    }

    let patched = 0;
    for (const route of includeRoutes) {
        const meta = routeMeta.get(route);
        assertMeta(meta, route);

        const htmlPath = routeToHtmlPath(route);
        if (!fs.existsSync(htmlPath)) {
            throw new Error(`Generated HTML file not found for ${route}: ${path.relative(ROOT, htmlPath)}`);
        }

        const html = fs.readFileSync(htmlPath, "utf8");
        fs.writeFileSync(htmlPath, patchHtml(html, meta));
        patched += 1;
    }

    console.log(`Patched SEO tags for ${patched} prerendered route(s).`);
}

main();
