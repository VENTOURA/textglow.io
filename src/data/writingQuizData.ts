export type PersonalityCode =
  | "WSDO" | "WSDC" | "WSPO" | "WSPC"
  | "WFDO" | "WFDC" | "WFPO" | "WFPC"
  | "RSDO" | "RSDC" | "RSPO" | "RSPC"
  | "RFDO" | "RFDC" | "RFPO" | "RFPC";

export type Question = {
  id: number;
  dimension: "warmth" | "structure" | "directness" | "formality";
  scenario: string;
  optionA: { text: string; value: "W" | "S" | "D" | "O" };
  optionB: { text: string; value: "R" | "F" | "P" | "C" };
};

export type PersonalityType = {
  code: PersonalityCode;
  name: string;
  emoji: string;
  description: string;
  emailsSoundLike: string;
  strengths: string[];
  weaknesses: string[];
  idealTone: string;
  famousCommunicator: string;
  improvementTip: string;
};

export const questions: Question[] = [
  {
    id: 1,
    dimension: "warmth",
    scenario: "You're emailing someone for the first time. You open with:",
    optionA: { text: `"Hi [Name]! Hope you're having a great week — I wanted to reach out about..."`, value: "W" },
    optionB: { text: `"[Name], I'm writing to inquire about..."`, value: "R" }
  },
  {
    id: 2,
    dimension: "structure",
    scenario: "Your manager asks for a project update. You reply with:",
    optionA: { text: "A bulleted summary — status, blockers, next steps, ETA. Clean and scannable.", value: "S" },
    optionB: { text: "A few paragraphs walking through where things are and what's happening next.", value: "F" }
  },
  {
    id: 3,
    dimension: "directness",
    scenario: "A colleague proposes an idea that won't work. You respond:",
    optionA: { text: `"I don't think this approach will work — here's my concern and an alternative."`, value: "D" },
    optionB: { text: `"Interesting angle! I have some thoughts on how we might refine this a bit..."`, value: "P" }
  },
  {
    id: 4,
    dimension: "formality",
    scenario: "You're messaging a senior stakeholder you've met twice. You start with:",
    optionA: { text: `"Dear [Name],"` + " or " + `"Hello [Name],"`, value: "O" },
    optionB: { text: `"Hey [Name],"` + " or just their first name and a dash", value: "C" }
  },
  {
    id: 5,
    dimension: "warmth",
    scenario: "You close an email to a client you've worked with for 6 months. You write:",
    optionA: { text: `"Looking forward to hearing from you! Have a great weekend 😊"`, value: "W" },
    optionB: { text: `"Please let me know if you have any questions."`, value: "R" }
  },
  {
    id: 6,
    dimension: "structure",
    scenario: "You're planning a team email about a process change. Before writing, you:",
    optionA: { text: "Outline the key points, structure it into sections, maybe add a TL;DR at the top.", value: "S" },
    optionB: { text: "Open a blank email and start typing — it'll come together as you write.", value: "F" }
  },
  {
    id: 7,
    dimension: "directness",
    scenario: "Someone sends you a proposal with a tight deadline that doesn't work for you. You reply:",
    optionA: { text: `"I can't turn this around by Friday. Monday works — does that give you enough time?"`, value: "D" },
    optionB: { text: `"Thanks for sending this over! I want to make sure I give this the attention it deserves — would there be any flexibility on timing?"`, value: "P" }
  },
  {
    id: 8,
    dimension: "formality",
    scenario: "You're writing a Slack message to your whole team about a lunch order. You type:",
    optionA: { text: `"Team, for today's lunch order please submit your preferences by 11:30 AM."`, value: "O" },
    optionB: { text: `"hey everyone — lunch order going in soon, lmk what you want by 11:30!"`, value: "C" }
  },
  {
    id: 9,
    dimension: "warmth",
    scenario: "A teammate just shipped a big feature. You write them a note. It:",
    optionA: { text: "Leads with genuine excitement — \"This is HUGE, you crushed it\" — and gets specific about what impressed you.", value: "W" },
    optionB: { text: "Acknowledges the work — \"Nice work on the release\" — and maybe notes the impact.", value: "R" }
  },
  {
    id: 10,
    dimension: "directness",
    scenario: "You need a favor from someone who owes you nothing. Your email:",
    optionA: { text: "Opens with the ask in the first two sentences, then explains the context.", value: "D" },
    optionB: { text: "Builds context and rapport first, then leads into the request toward the end.", value: "P" }
  }
];

export const personalityTypes: Record<PersonalityCode, PersonalityType> = {
  WSDO: {
    code: "WSDO",
    name: "The Executive",
    emoji: "👔",
    description: "You lead with warmth but mean business. Your emails are organized, direct, and convey authority without being cold. People open your emails first because they know exactly what they'll get and that it will matter.",
    emailsSoundLike: "The quarterly report of someone who also remembers your birthday.",
    strengths: [
      "Commands respect without intimidation.",
      "Combines efficiency with approachability.",
      "Gets responses because every message has a clear purpose."
    ],
    weaknesses: [
      "Can come across as too rewritten or rehearsed.",
      "May prioritize clarity over nuance in complex situations.",
      "Warmth can feel performative if overused."
    ],
    idealTone: "Professional",
    famousCommunicator: "Indra Nooyi",
    improvementTip: "Occasionally let your guard down — a small moment of genuine informality builds more loyalty than any perfectly structured email."
  },
  WSDC: {
    code: "WSDC",
    name: "The Team Captain",
    emoji: "🏆",
    description: "You're warm, organized, and get straight to the point — but you keep it real. You're the person whose Slack messages feel like a group hug and a project plan at the same time. People love working with you because you're both easy to talk to and easy to follow.",
    emailsSoundLike: "A motivational speech that ends with a bullet-point action list.",
    strengths: [
      "Natural at rallying people around a shared goal.",
      "Makes structured communication feel human.",
      "Adapts tone flawlessly between peers and leadership."
    ],
    weaknesses: [
      "Can over-organize casual conversations and kill the vibe.",
      "Sometimes too many check-ins.",
      "The enthusiasm can feel like pressure."
    ],
    idealTone: "Friendly",
    famousCommunicator: "Barack Obama",
    improvementTip: "Not every conversation needs a next-steps section. Practice the art of a message that's just... a message."
  },
  WSPO: {
    code: "WSPO",
    name: "The Diplomat",
    emoji: "🕊️",
    description: "You're the person everyone wants in the room when things get tense. Your emails are warm, thorough, organized, and carefully worded to keep all parties happy. You could deliver bad news in a way that makes people feel good about it.",
    emailsSoundLike: "A heartfelt apology that somehow also contains a project plan.",
    strengths: [
      "Exceptional at navigating conflict and sensitive topics.",
      "Builds long-term trust through consistent professionalism.",
      "Makes everyone feel heard."
    ],
    weaknesses: [
      "Can hedge so much that your actual position gets lost.",
      "Decision-making by committee is your default, even when someone just needs to decide.",
      "Over-qualification slows things down."
    ],
    idealTone: "Empathetic",
    famousCommunicator: "Jacinda Ardern",
    improvementTip: "Sometimes people need a clear recommendation, not options. Practice ending messages with \"I recommend X\" instead of \"both paths have merit.\""
  },
  WSPC: {
    code: "WSPC",
    name: "The Cheerleader",
    emoji: "📣",
    description: "You are sunshine in email form. Your messages are warm, organized, diplomatically worded, and written in a way that makes even a status update feel like good news. You're the colleague everyone enjoys hearing from, even about deadlines.",
    emailsSoundLike: "A newsletter you actually want to read.",
    strengths: [
      "Boosts team morale through communication alone.",
      "Skilled at softening difficult messages without losing the substance.",
      "Makes collaboration feel effortless."
    ],
    weaknesses: [
      "Can seem insufficiently serious in high-stakes situations.",
      "Diplomatic softening sometimes obscures urgency.",
      "Enthusiasm can be misread as lack of depth."
    ],
    idealTone: "Enthusiastic",
    famousCommunicator: "Oprah Winfrey",
    improvementTip: "Earn the room's attention in serious moments by occasionally writing something that's just plainly, directly important — no wrapping paper."
  },
  WFDO: {
    code: "WFDO",
    name: "The Storyteller",
    emoji: "📖",
    description: "You're warm and direct, but your thoughts flow in narrative form — and somehow it works. Your emails read like compelling memos: personal, structured in their own way, and always landing on a clear point. People forward your emails because they're genuinely worth reading.",
    emailsSoundLike: "A magazine article that ends with an ask.",
    strengths: [
      "Memorable communicator — your messages stick.",
      "Persuasive without being pushy.",
      "Brings context and humanity to complex topics."
    ],
    weaknesses: [
      "Emails can run long before getting to the point.",
      "Freeform flow isn't always scannable for busy readers.",
      "Formal tone can feel at odds with narrative style."
    ],
    idealTone: "Persuasive",
    famousCommunicator: "Malcolm Gladwell",
    improvementTip: "Respect the skimmer. Write your full narrative, then add a one-line summary at the very top — your audience will thank you."
  },
  WFDC: {
    code: "WFDC",
    name: "The Friend",
    emoji: "💬",
    description: "Your DMs feel like conversations. Warm, casual, direct, and flowing — you write the way you talk, and people love it. You're the person whose messages feel like a text from a good friend, even in a professional context. Everyone wishes they could write like you without it backfiring.",
    emailsSoundLike: "A voice note, but typed.",
    strengths: [
      "Builds fast rapport and trust.",
      "Disarmingly direct without feeling harsh.",
      "Makes people feel like collaborators, not subordinates."
    ],
    weaknesses: [
      "Freeform style can sacrifice clarity.",
      "Casualness can misfire in formal contexts.",
      "Hard to \"turn it up\" for high-stakes communications without it feeling forced."
    ],
    idealTone: "Casual",
    famousCommunicator: "Mark Zuckerberg (early Facebook era)",
    improvementTip: "Before hitting send on anything high-stakes, ask: \"Would I say this to a senior stakeholder?\" If no, run it through Professional tone."
  },
  WFPO: {
    code: "WFPO",
    name: "The Poet",
    emoji: "🌹",
    description: "Your emails are warm, beautifully written, diplomatically phrased, and formal enough to feel intentional — but sometimes people finish reading and aren't quite sure what you were asking for. You write with care and elegance. The problem is elegance doesn't always CC clarity.",
    emailsSoundLike: "A handwritten letter that somehow requires a follow-up.",
    strengths: [
      "Exceptionally thoughtful and considerate in communication.",
      "Makes people feel genuinely seen and valued.",
      "Writes with a quality and care that sets you apart."
    ],
    weaknesses: [
      "Clarity is frequently a casualty of craft.",
      "People sometimes don't know what to do after reading your email.",
      "Can over-romanticize situations that just need a decision."
    ],
    idealTone: "Empathetic",
    famousCommunicator: "Virginia Woolf (if she had email)",
    improvementTip: "At the end of every email, add one explicit sentence: \"Specifically, I'm asking for X by Y.\" Your writing can be beautiful — just make sure it's also actionable."
  },
  WFPC: {
    code: "WFPC",
    name: "The Rambler",
    emoji: "🌀",
    description: "You're warm, friendly, diplomatic, and write the way your brain moves — in all directions at once. Your emails have a lot of heart, a few tangents, and usually end with a 😊. People like you, which is why they gently read past the parts that didn't quite need to be there.",
    emailsSoundLike: "A brainstorm that forgot it needed a conclusion.",
    strengths: [
      "Genuinely warm and personable — people enjoy your energy.",
      "Never cold or robotic.",
      "Creates a comfortable, low-pressure communication environment."
    ],
    weaknesses: [
      "Emails regularly need a TLDR that never appears.",
      "Diplomatic framing + freeform structure = no one is sure what you want.",
      "Emoji deployment is... prolific."
    ],
    idealTone: "Concise",
    famousCommunicator: "Leslie Knope from Parks and Recreation",
    improvementTip: "Write your email, then cut 30% of it. That's the one that gets a response. TextGlow's Concise tone was built for you — use it before every send."
  },
  RSDO: {
    code: "RSDO",
    name: "The Commander",
    emoji: "⚔️",
    description: "Your emails get results. You're reserved, structured, direct, and formal — and every word earns its place. You don't do small talk. You don't do \"circle back.\" You state the situation, the decision needed, and the deadline. People respect you and are also slightly afraid of you.",
    emailsSoundLike: "A military briefing that ended up in someone's inbox.",
    strengths: [
      "Zero ambiguity — people always know exactly what you need.",
      "Extremely efficient.",
      "Excellent at crisis communication."
    ],
    weaknesses: [
      "Can alienate collaborators who need context and warmth.",
      "Comes across as cold or even hostile in casual settings.",
      "\"Getting results\" sometimes means burning bridges quietly."
    ],
    idealTone: "Direct",
    famousCommunicator: "Jeff Bezos (original \"door desk\" era)",
    improvementTip: "Add one sentence of human acknowledgment before the ask. \"I know this is short notice — here's what I need.\" That single sentence changes how the rest lands."
  },
  RSDC: {
    code: "RSDC",
    name: "The Hacker",
    emoji: "💻",
    description: "Your Slack messages look like git commit messages. Short, structured, lowercase, no punctuation unless necessary. You communicate in the minimum viable expression that conveys the required information. It's efficient. It's a little jarring. People have learned to decode you.",
    emailsSoundLike: `"re: issue — identified root cause, deployed fix, monitoring. lmk if problems persist."`,
    strengths: [
      "Ruthlessly efficient.",
      "No one ever has to read between the lines.",
      "Great in async technical environments where bandwidth matters."
    ],
    weaknesses: [
      "Context that seems obvious to you is not obvious to everyone.",
      "Tone reads as cold or dismissive to non-technical colleagues.",
      "Relationship-building through email? Not happening."
    ],
    idealTone: "Concise",
    famousCommunicator: "Linus Torvalds",
    improvementTip: "Save the commit-message style for your actual commits. When writing to non-engineers or about non-technical topics, try one warm sentence. It costs you four words."
  },
  RSPO: {
    code: "RSPO",
    name: "The Bureaucrat",
    emoji: "📋",
    description: "Everything by the book. Your emails are reserved, structured, diplomatic, and formally correct in every possible way. You CC the right people, use proper subject lines, and write \"Per our conversation\" without irony. Organizations need you. Also, they are slightly afraid of what happens when you escalate.",
    emailsSoundLike: "The terms and conditions, but for your meeting request.",
    strengths: [
      "Reliable, consistent, and process-oriented.",
      "Nothing falls through the cracks in your inbox.",
      "You protect organizations from their own informality."
    ],
    weaknesses: [
      "Can make routine communication feel bureaucratic and slow.",
      "Diplomacy in a formal structure can bury simple answers under layers of language.",
      "Hard to read as a person, not a role."
    ],
    idealTone: "Formal",
    famousCommunicator: "Dwight Schrute from The Office (unironically)",
    improvementTip: "Occasionally write an email where you skip the \"As per the attached documentation\" opener and just say what you mean. Brevity isn't unprofessionalism — it's a gift to your reader."
  },
  RSPC: {
    code: "RSPC",
    name: "The Minimalist",
    emoji: "◻️",
    description: "Short. Sweet. Occasionally ambiguous. Your Slack status has been \"🎯\" for three years and no one has asked what it means. You don't pad. You don't hedge. You say the thing. Whether that's enough context depends heavily on the recipient. Sometimes it is. Sometimes people are still not sure.",
    emailsSoundLike: `"Looks good." — with no subject line.`,
    strengths: [
      "Extraordinarily efficient.",
      "Never clutters communication.",
      "People who work with you long enough develop a fluency in your shorthand."
    ],
    weaknesses: [
      "Ambiguity is a feature for you but a bug for everyone else.",
      "New collaborators struggle.",
      "\"Sounds good\" to what, exactly?"
    ],
    idealTone: "Direct",
    famousCommunicator: "Steve Jobs (internal emails)",
    improvementTip: "Once a week, write a message that has a subject, a verb, and a why. Your instinct toward brevity is valuable — just make sure the meaning is fully loaded before you compress it."
  },
  RFDO: {
    code: "RFDO",
    name: "The Professor",
    emoji: "🎓",
    description: "Your emails are long, formal, direct, and flow like academic papers. You don't do bullet points because nuance can't be bulleted. You write with intellectual rigor, and if the reader needs a dictionary, that's on them. Your footnotes would have footnotes if Outlook supported it.",
    emailsSoundLike: "A peer-reviewed journal article requesting a meeting.",
    strengths: [
      "Unmatched depth and precision.",
      "Never misunderstood on the substance.",
      "Ideal for complex topics that genuinely require thorough treatment."
    ],
    weaknesses: [
      "The length and density lose people before the point.",
      "Formal register makes you hard to approach.",
      "Direct without the warmth = intimidating."
    ],
    idealTone: "Formal",
    famousCommunicator: "Noam Chomsky",
    improvementTip: "Write your full analysis, then write a two-sentence executive summary for the top. Not everyone is coming to class — some people just need the syllabus."
  },
  RFDC: {
    code: "RFDC",
    name: "The Straight Shooter",
    emoji: "🎯",
    description: "You are the person who replies \"No.\" to a three-paragraph email. Not rude, just efficient. You've eliminated every word that doesn't carry weight, and you never apologize for it. Your colleagues have stopped asking you to \"soften\" things because you've explained, twice, that you are already being soft.",
    emailsSoundLike: `"No." — entire email.`,
    strengths: [
      "Radical clarity.",
      "No one ever wonders what you think.",
      "Cuts through organizational noise like a hot knife."
    ],
    weaknesses: [
      "Can trigger defensive reactions even when right.",
      "Lacks the diplomatic packaging that helps ideas land.",
      "\"Just being honest\" sometimes lands as \"just being blunt.\""
    ],
    idealTone: "Direct",
    famousCommunicator: "Gordon Ramsay (pre-Nice Era)",
    improvementTip: "One sentence of context before the verdict. Not because you're wrong — you're often right — but because it's the difference between your idea being rejected and your idea being adopted."
  },
  RFPO: {
    code: "RFPO",
    name: "The Overthinker",
    emoji: "🌪️",
    description: "You've been drafting this email for 45 minutes. You've rewritten the opening four times, deleted a paragraph that was actually your best point, and are now reconsidering the sign-off. The email is reserved, diplomatic, formal, and a fascinating artifact of a person at war with their own words. When it finally arrives, it's actually quite good.",
    emailsSoundLike: "A diplomatic communiqué that took all week because every word had to be exactly right.",
    strengths: [
      "Takes communication seriously and it shows.",
      "Rarely puts a foot wrong in sensitive situations.",
      "Deep consideration for how messages will be received."
    ],
    weaknesses: [
      "Velocity is a casualty of perfection.",
      "The drafting process is its own psychological event.",
      "Over-qualification sometimes creates the ambiguity you were trying to avoid."
    ],
    idealTone: "Empathetic",
    famousCommunicator: "Hamlet (if he had a corporate email account)",
    improvementTip: "Set a 10-minute timer. Write the email. Send it. The version you'd send after 45 minutes is rarely better — just more exhausted."
  },
  RFPC: {
    code: "RFPC",
    name: "The Ghost",
    emoji: "👻",
    description: "You've read every email. You've drafted responses to most of them. Several were quite good. None have been sent. You're reserved, freeform in thought, diplomatic in intent, and casual in follow-through. You care. You just also think that maybe the situation will resolve itself. Sometimes it does.",
    emailsSoundLike: "A reply that exists in draft form somewhere and will be sent... soon.",
    strengths: [
      "Thoughtful observer — when you do engage, it carries weight because it's rare.",
      "Never says the wrong thing.",
      "Processes deeply before responding."
    ],
    weaknesses: [
      "Silence reads as disinterest or avoidance even when it isn't.",
      "Relationships require maintenance that the Ghost doesn't do.",
      "People stop asking."
    ],
    idealTone: "Friendly",
    famousCommunicator: "J.D. Salinger (post-Catcher)",
    improvementTip: "Set a rule: any email that's been in drafts for 48 hours gets sent or deleted. The drafting is the overthinking. Send it or let it go."
  }
};
