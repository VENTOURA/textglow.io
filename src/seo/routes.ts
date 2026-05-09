import { blogPosts } from "../data/blogPosts.ts";
import { examples } from "../data/beforeAfterExamples.ts";

export const SITE_URL = "https://textglow.io";
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

export type RouteCategory =
  | "static"
  | "blog"
  | "example"
  | "tool"
  | "use-case";

export type PageComponentKey =
  | "home"
  | "pricing"
  | "howToUse"
  | "gmail"
  | "linkedin"
  | "slack"
  | "tinder"
  | "translate"
  | "privacy"
  | "terms"
  | "offer"
  | "blogIndex"
  | "blogPost"
  | "tools"
  | "emailToneAnalyzer"
  | "wordCounter"
  | "emailRewriter"
  | "formalityChecker"
  | "linkedinPostPreview"
  | "coldEmailGenerator"
  | "jargonTranslator"
  | "aiWritingDetector"
  | "passiveAggressiveChecker"
  | "genzTranslator"
  | "examplesGallery"
  | "exampleDetail"
  | "writingQuiz"
  | "subjectLineScorer"
  | "outOfOffice"
  | "customerSupport"
  | "sales"
  | "jobApplications"
  | "managers"
  | "freelancers"
  | "academic"
  | "hr"
  | "customerSuccess"
  | "remoteTeams";

export interface SeoMeta {
  title: string;
  description: string;
  canonical: string;
  ogType: "website" | "article";
  ogUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterCard: "summary_large_image";
  twitterTitle: string;
  twitterDescription: string;
}

export interface SiteRoute {
  path: string;
  pattern: string;
  component: PageComponentKey;
  category: RouteCategory;
  meta: SeoMeta;
}

interface RouteInput {
  path: string;
  pattern?: string;
  component: PageComponentKey;
  category: RouteCategory;
  title: string;
  description: string;
  ogType?: "website" | "article";
}

const normalizePath = (path: string) => {
  if (path === "/") return "/";
  return `/${path.replace(/^\/+|\/+$/g, "")}/`;
};

export const canonicalForPath = (path: string) => `${SITE_URL}${normalizePath(path)}`;

const patternForPath = (path: string) => {
  if (path === "/") return "/";
  return normalizePath(path).replace(/\/$/, "");
};

const route = ({
  path,
  pattern,
  component,
  category,
  title,
  description,
  ogType = "website",
}: RouteInput): SiteRoute => {
  const normalizedPath = normalizePath(path);
  const canonical = canonicalForPath(normalizedPath);

  return {
    path: normalizedPath,
    pattern: pattern ?? patternForPath(normalizedPath),
    component,
    category,
    meta: {
      title,
      description,
      canonical,
      ogType,
      ogUrl: canonical,
      ogTitle: title,
      ogDescription: description,
      ogImage: OG_IMAGE,
      twitterCard: "summary_large_image",
      twitterTitle: title,
      twitterDescription: description,
    },
  };
};

const staticRoutes: SiteRoute[] = [
  route({
    path: "/",
    component: "home",
    category: "static",
    title: "TextGlow — AI Writing Assistant That Rewrites Your Tone in 2 Clicks",
    description:
      "Rewrite emails, Slack messages, and LinkedIn posts in 2 clicks with TextGlow. Choose 10 tones and write naturally across the web without copy-pasting.",
  }),
  route({
    path: "/pricing/",
    component: "pricing",
    category: "static",
    title: "TextGlow Pricing — Free & Pro Plans | 3x Cheaper Than Grammarly",
    description:
      "Rewrite any text in 2 clicks for free — or go Pro for $39/year. 10 tones, works inside Gmail, LinkedIn, Slack. No copy-pasting.",
  }),
  route({
    path: "/how-to-use/",
    component: "howToUse",
    category: "static",
    title: "How to Use TextGlow — Step-by-Step Guide | TextGlow",
    description:
      "Learn how to install and use the TextGlow Chrome extension to rewrite your messages in 2 clicks. Master our 10 tone filters today.",
  }),
  route({
    path: "/gmail/",
    component: "gmail",
    category: "static",
    title: "AI Email Assistant for Gmail — Write Better Emails in 2 Clicks | TextGlow",
    description:
      "TextGlow rewrites your Gmail messages in 2 clicks — right inside the compose window. Choose your tone, hit send with confidence. Free Chrome extension.",
  }),
  route({
    path: "/linkedin/",
    component: "linkedin",
    category: "static",
    title: "AI LinkedIn Post Writer & Message Assistant | TextGlow",
    description:
      "Write LinkedIn posts, DMs, and comments that get engagement. TextGlow rewrites your tone in 2 clicks, right inside LinkedIn. Free Chrome extension.",
  }),
  route({
    path: "/slack/",
    component: "slack",
    category: "static",
    title: "AI Writing Assistant for Slack — Sound Professional in Every Message | TextGlow",
    description:
      "Rewrite your Slack messages before sending. TextGlow adjusts your tone in 2 clicks — right inside Slack. Free Chrome extension.",
  }),
  route({
    path: "/tinder/",
    component: "tinder",
    category: "static",
    title: "AI Dating Message Assistant — Better Tinder, Bumble & Hinge Messages | TextGlow",
    description:
      "Stop sending hey and getting ghosted. TextGlow's Flirty tone turns basic dating app messages into witty openers that get replies. Free Chrome extension.",
  }),
  route({
    path: "/translate/",
    component: "translate",
    category: "static",
    title: "AI Translator — Rewrite Messages in Any Language with Perfect Tone | TextGlow",
    description:
      "Don't just translate words. TextGlow rewrites your messages in any language while maintaining the perfect professional or friendly tone. Free Chrome extension.",
  }),
  route({
    path: "/privacy/",
    component: "privacy",
    category: "static",
    title: "Privacy Policy | TextGlow",
    description:
      "Your data privacy is our priority. Read our privacy policy to understand how we protect your information.",
  }),
  route({
    path: "/terms/",
    component: "terms",
    category: "static",
    title: "Terms of Service | TextGlow",
    description: "Please read our terms of service before using TextGlow.",
  }),
  route({
    path: "/offer/",
    component: "offer",
    category: "static",
    title: "Limited Time Offer — TextGlow Pro | TextGlow",
    description:
      "Special limited-time offer on TextGlow Pro. Get unlimited AI message rewrites, custom tones, and priority support at a special price. Upgrade today.",
  }),
  route({
    path: "/blog/",
    component: "blogIndex",
    category: "blog",
    title: "AI Writing Blog — Tips, Guides & AI Strategy | TextGlow",
    description:
      "Master the art of AI-assisted writing. Tips for better emails, LinkedIn growth, and Slack productivity from the TextGlow team.",
  }),
  route({
    path: "/tools/",
    component: "tools",
    category: "tool",
    title: "Free AI Writing Tools & Converters | TextGlow",
    description:
      "A collection of free tools to analyze tone, count words, generate cold emails, and more. All powered by TextGlow AI.",
  }),
  route({
    path: "/tools/email-tone-analyzer/",
    component: "emailToneAnalyzer",
    category: "tool",
    title: "Free AI Email Tone Analyzer — Fix Your Tone Instantly | TextGlow",
    description:
      "Analyze the tone of your emails before hitting send. Use TextGlow to detect passive-aggression, over-formality, or hidden tones. Rewrite for the perfect impact. Free.",
  }),
  route({
    path: "/tools/word-counter/",
    component: "wordCounter",
    category: "tool",
    title: "Free Online Word Counter — Count Words, Chars & More | TextGlow",
    description:
      "Free online word counter tool. Count words, characters, sentences, and paragraphs in real-time. Use TextGlow to rewrite and improve your content instantly.",
  }),
  route({
    path: "/tools/email-rewriter/",
    component: "emailRewriter",
    category: "tool",
    title: "Free AI Email Rewriter — Professional Email Writing Tool | TextGlow",
    description:
      "Rewrite your emails for better clarity, tone, and impact. Use TextGlow to turn rough drafts into rewritten professional messages instantly. Free Chrome extension.",
  }),
  route({
    path: "/tools/formality-checker/",
    component: "formalityChecker",
    category: "tool",
    title: "Free AI Formality Checker — Professional Writing Tool | TextGlow",
    description:
      "Check and adjust the formality of your writing instantly. Use TextGlow to rewrite informal text into professional language for emails, reports, and more. Free tool.",
  }),
  route({
    path: "/tools/linkedin-post-preview/",
    component: "linkedinPostPreview",
    category: "tool",
    title: "LinkedIn Post Preview & Scorer — Optimize Your Hook | TextGlow",
    description:
      "Preview your LinkedIn posts on desktop and mobile before posting. Get AI insights on hook strength, formatting, and readability to maximize your reach. Free tool.",
  }),
  route({
    path: "/tools/cold-email-generator/",
    component: "coldEmailGenerator",
    category: "tool",
    title: "Free AI Cold Email Generator — Write High-Converting Outreach | TextGlow",
    description:
      "Generate personalized, high-converting cold emails in seconds. Use TextGlow to rewrite your outreach for better response rates and engagement. Free online tool.",
  }),
  route({
    path: "/tools/jargon-translator/",
    component: "jargonTranslator",
    category: "tool",
    title: "Corporate Jargon Translator — Plain English AI Tool | TextGlow",
    description:
      "Translate corporate jargon and 'business speak' into plain English. Use TextGlow to understand what your boss or colleagues really mean. Free online tool.",
  }),
  route({
    path: "/tools/ai-writing-detector/",
    component: "aiWritingDetector",
    category: "tool",
    title: "Free AI Writing Detector — Check for AI-Generated Text | TextGlow",
    description:
      "Detect whether text was written by a human or generated by AI. Use TextGlow's detector to check essays, articles, and emails for AI patterns. Free online tool.",
  }),
  route({
    path: "/tools/passive-aggressive-checker/",
    component: "passiveAggressiveChecker",
    category: "tool",
    title: "Free Passive-Aggressive Email Checker — AI Tone Tool | TextGlow",
    description:
      "Stop sending passive-aggressive emails. Use TextGlow's checker to detect hidden tones and rewrite your messages for professional clarity and impact. Free online tool.",
  }),
  route({
    path: "/tools/genz-translator/",
    component: "genzTranslator",
    category: "tool",
    title: "Gen Z Translator — Slang to English Translator | TextGlow",
    description:
      "Translate Gen Z slang into plain English instantly. Use TextGlow to understand what your kids, students, or younger coworkers are saying. Free online tool.",
  }),
  route({
    path: "/tools/examples/",
    component: "examplesGallery",
    category: "example",
    title: "AI Writing Examples — Before & After Library | TextGlow",
    description:
      "Browse our library of 40+ before and after writing examples. See how AI rewrites messages for any professional situation.",
  }),
  route({
    path: "/tools/writing-quiz/",
    component: "writingQuiz",
    category: "tool",
    title: "Writing Personality Quiz — What's Your Writing Style? | TextGlow",
    description:
      "Discover your unique writing personality. Are you a Diplomat, a Commander, or a Ghost? Take our 2-minute quiz to find out and improve your communication. Free.",
  }),
  route({
    path: "/tools/subject-line-scorer/",
    component: "subjectLineScorer",
    category: "tool",
    title: "Free Email Subject Line Scorer — Optimize Your Open Rate | TextGlow",
    description:
      "Score your email subject lines instantly. Get AI insights on length, spam triggers, and personalization to improve your open rates. Free online tool.",
  }),
  route({
    path: "/tools/out-of-office/",
    component: "outOfOffice",
    category: "tool",
    title: "Free AI Out-of-Office Generator — Professional OOO | TextGlow",
    description:
      "Generate the perfect out-of-office message in seconds. Use TextGlow to create professional, funny, or short OOO replies for your vacation or sick leave. Free.",
  }),
];

const useCaseRoutes: SiteRoute[] = [
  route({
    path: "/customer-support/",
    component: "customerSupport",
    category: "use-case",
    title: "TextGlow for Customer Support — AI Writing Assistant",
    description:
      "Improve customer satisfaction and response times. Use TextGlow to rewrite support tickets, emails, and live chat messages to be more empathetic and professional.",
  }),
  route({
    path: "/sales/",
    component: "sales",
    category: "use-case",
    title: "TextGlow for Sales — AI Writing Assistant",
    description:
      "Scale your sales outreach without losing the human touch. Use TextGlow to rewrite cold emails, follow-ups, and LinkedIn pitches for maximum conversion.",
  }),
  route({
    path: "/job-applications/",
    component: "jobApplications",
    category: "use-case",
    title: "TextGlow for Job Seekers — AI Writing Assistant",
    description:
      "Stand out to recruiters. Use TextGlow to rewrite your cover letters, LinkedIn messages, and follow-up emails to sound confident and professional.",
  }),
  route({
    path: "/managers/",
    component: "managers",
    category: "use-case",
    title: "TextGlow for Managers — AI Writing Assistant",
    description:
      "Communicate better with your team. Use TextGlow to rewrite internal announcements, feedback, and Slack messages to be clear, professional, and motivating.",
  }),
  route({
    path: "/freelancers/",
    component: "freelancers",
    category: "use-case",
    title: "TextGlow for Freelancers — AI Writing Assistant",
    description:
      "Pitch better and manage clients with ease. Use TextGlow to rewrite proposals, invoices, and status updates for a more professional impression.",
  }),
  route({
    path: "/academic/",
    component: "academic",
    category: "use-case",
    title: "TextGlow for Students — AI Writing Assistant",
    description:
      "Elevate your academic writing. Use TextGlow to rewrite emails to professors, group projects, and formal requests to be polite and clear.",
  }),
  route({
    path: "/hr/",
    component: "hr",
    category: "use-case",
    title: "TextGlow for HR — AI Writing Assistant",
    description:
      "Streamline HR communication. Use TextGlow to rewrite recruiting emails, policy updates, and internal memos to be clear and professional.",
  }),
  route({
    path: "/customer-success/",
    component: "customerSuccess",
    category: "use-case",
    title: "TextGlow for Customer Success — AI Writing Assistant",
    description:
      "Build stronger client relationships. Use TextGlow to rewrite onboarding emails, check-ins, and renewals to be helpful and professional.",
  }),
  route({
    path: "/remote-teams/",
    component: "remoteTeams",
    category: "use-case",
    title: "TextGlow for Remote Teams — AI Writing Assistant",
    description:
      "Eliminate remote work miscommunication. Use TextGlow to rewrite Slack messages and emails to ensure your tone is always interpreted correctly.",
  }),
];

const blogRoutes: SiteRoute[] = blogPosts.map((post) =>
  route({
    path: `/blog/${post.slug}/`,
    pattern: "/blog/:slug",
    component: "blogPost",
    category: "blog",
    ogType: "article",
    title: `${post.title} | TextGlow Blog`,
    description: post.excerpt,
  }),
);

const exampleRoutes: SiteRoute[] = examples.map((example) =>
  route({
    path: `/tools/examples/${example.slug}/`,
    pattern: "/tools/examples/:slug",
    component: "exampleDetail",
    category: "example",
    title: example.seoTitle,
    description: example.seoDescription,
  }),
);

export const routes: SiteRoute[] = [
  ...staticRoutes,
  ...blogRoutes,
  ...exampleRoutes,
  ...useCaseRoutes,
];

export const routesByPath = new Map(routes.map((item) => [item.path, item]));

export const getRouteByPath = (path: string) => routesByPath.get(normalizePath(path));

export const nonRootRoutes = routes.filter((item) => item.path !== "/");
