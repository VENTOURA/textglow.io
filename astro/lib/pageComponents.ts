import type { ComponentType } from "react";
import { Academic } from "../../src/pages/use-cases/Academic";
import { AiWritingDetector } from "../../src/pages/AiWritingDetector";
import { BlogIndex } from "../../src/pages/BlogIndex";
import { BlogPost } from "../../src/pages/BlogPost";
import { ColdEmailGenerator } from "../../src/pages/ColdEmailGenerator";
import { CustomerSuccess } from "../../src/pages/use-cases/CustomerSuccess";
import { CustomerSupport } from "../../src/pages/use-cases/CustomerSupport";
import { EmailRewriter } from "../../src/pages/EmailRewriter";
import { EmailToneAnalyzer } from "../../src/pages/EmailToneAnalyzer";
import { ExampleDetail } from "../../src/pages/tools/ExampleDetail";
import { ExamplesGallery } from "../../src/pages/tools/ExamplesGallery";
import { FormalityChecker } from "../../src/pages/FormalityChecker";
import { Freelancers } from "../../src/pages/use-cases/Freelancers";
import { GenzTranslator } from "../../src/pages/GenzTranslator";
import { Gmail } from "../../src/pages/Gmail";
import { HR } from "../../src/pages/use-cases/HR";
import { Home } from "../../src/pages/Home";
import { HowToUse } from "../../src/pages/HowToUse";
import { JargonTranslator } from "../../src/pages/JargonTranslator";
import { JobApplications } from "../../src/pages/use-cases/JobApplications";
import { LinkedIn } from "../../src/pages/LinkedIn";
import { LinkedinPostPreview } from "../../src/pages/LinkedinPostPreview";
import { Managers } from "../../src/pages/use-cases/Managers";
import { Offer } from "../../src/pages/Offer";
import { OutOfOffice } from "../../src/pages/tools/OutOfOffice";
import { PassiveAggressiveChecker } from "../../src/pages/PassiveAggressiveChecker";
import { Pricing } from "../../src/pages/Pricing";
import { Privacy } from "../../src/pages/Privacy";
import { RemoteTeams } from "../../src/pages/use-cases/RemoteTeams";
import { Sales } from "../../src/pages/use-cases/Sales";
import { Slack } from "../../src/pages/Slack";
import { SubjectLineScorer } from "../../src/pages/tools/SubjectLineScorer";
import { Terms } from "../../src/pages/Terms";
import { Tinder } from "../../src/pages/Tinder";
import { Tools } from "../../src/pages/Tools";
import { Translate } from "../../src/pages/Translate";
import { WordCounter } from "../../src/pages/WordCounter";
import { WritingQuiz } from "../../src/pages/tools/WritingQuiz";
import type { PageComponentKey } from "../../src/seo/routes";

export const pageComponents: Record<PageComponentKey, ComponentType> = {
  academic: Academic,
  aiWritingDetector: AiWritingDetector,
  blogIndex: BlogIndex,
  blogPost: BlogPost,
  coldEmailGenerator: ColdEmailGenerator,
  customerSuccess: CustomerSuccess,
  customerSupport: CustomerSupport,
  emailRewriter: EmailRewriter,
  emailToneAnalyzer: EmailToneAnalyzer,
  exampleDetail: ExampleDetail,
  examplesGallery: ExamplesGallery,
  formalityChecker: FormalityChecker,
  freelancers: Freelancers,
  genzTranslator: GenzTranslator,
  gmail: Gmail,
  home: Home,
  howToUse: HowToUse,
  hr: HR,
  jargonTranslator: JargonTranslator,
  jobApplications: JobApplications,
  linkedin: LinkedIn,
  linkedinPostPreview: LinkedinPostPreview,
  managers: Managers,
  offer: Offer,
  outOfOffice: OutOfOffice,
  passiveAggressiveChecker: PassiveAggressiveChecker,
  pricing: Pricing,
  privacy: Privacy,
  remoteTeams: RemoteTeams,
  sales: Sales,
  slack: Slack,
  subjectLineScorer: SubjectLineScorer,
  terms: Terms,
  tinder: Tinder,
  tools: Tools,
  translate: Translate,
  wordCounter: WordCounter,
  writingQuiz: WritingQuiz,
};
