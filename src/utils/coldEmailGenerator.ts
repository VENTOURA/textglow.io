export interface ColdEmailInputs {
    yourName: string;
    yourRole: string;
    yourCompany: string;
    recipientName: string;
    recipientCompany: string;
    purpose: string;
    customPurpose: string;
    valueProp: string;
    cta: string;
}

export interface ColdEmailResult {
    subject: string;
    body: string;
    wordCount: number;
}

export interface GeneratedEmails {
    professional: ColdEmailResult;
    persuasive: ColdEmailResult;
    friendly: ColdEmailResult;
}

const purposePhraseMap: Record<string, {
    purpose: string;
    purposePhrase: string;
    outcomePhrase: string;
    painPoint: string;
    benefit: string;
}> = {
    partnership: {
        purpose: "partnership",
        purposePhrase: "collaboration",
        outcomePhrase: "create value for both teams",
        painPoint: "miss high-leverage partnerships",
        benefit: "unlock a new growth channel",
    },
    sales: {
        purpose: "a potential fit",
        purposePhrase: "working together",
        outcomePhrase: "help your team hit its goals faster",
        painPoint: "waste time on tools that don't deliver",
        benefit: "save hours every week",
    },
    job: {
        purpose: "a role at your company",
        purposePhrase: "joining your team",
        outcomePhrase: "contribute to what you're building",
        painPoint: "struggle to find candidates who care about the mission",
        benefit: "get someone who's already up to speed on your space",
    },
    networking: {
        purpose: "connecting",
        purposePhrase: "getting to know each other",
        outcomePhrase: "trade notes and ideas",
        painPoint: "miss out on connections that could change their trajectory",
        benefit: "expand your network with people who get it",
    },
    guest_post: {
        purpose: "content collaboration",
        purposePhrase: "co-creating content",
        outcomePhrase: "reach each other's audiences",
        painPoint: "run out of fresh content angles",
        benefit: "get a high-quality guest piece with zero effort",
    },
    investment: {
        purpose: "a funding conversation",
        purposePhrase: "investment",
        outcomePhrase: "explore a potential investment opportunity",
        painPoint: "miss early-stage deals that outperform",
        benefit: "get in early on a high-growth company",
    },
    feedback: {
        purpose: "getting your feedback",
        purposePhrase: "getting your perspective",
        outcomePhrase: "get sharper with your input",
        painPoint: "build in a vacuum without outside perspective",
        benefit: "shape something that actually works for people like you",
    },
};

const ctaPhraseMap: Record<string, string> = {
    call: "a quick 15-minute call",
    coffee: "a quick coffee chat",
    reply: "shooting me a quick reply",
    link: "taking a look at this",
    open: "connecting — whatever format works best for you",
};

const signOffMap: Record<string, string[]> = {
    professional: ["Best regards,", "Best,", "Kind regards,"],
    persuasive: ["Looking forward,", "Talk soon,", "Best,"],
    friendly: ["Cheers,", "Talk soon!", "Best,"],
};

type TemplateFn = (vars: any) => { subject: string; body: string };

const professionalTemplates: TemplateFn[] = [
    // Framework P1: DIRECT ASK
    (v) => ({
        subject: `${v.purpose} opportunity — ${v.your_company} + ${v.their_company}`,
        body: `Hi ${v.recipient_name},\n\nI'm ${v.your_name}, ${v.your_role} at ${v.your_company}. ${v.value_prop}.\n\nI came across ${v.their_company} and see a strong fit for ${v.purpose_phrase}. I'd love to explore how we might ${v.outcome_phrase}.\n\nWould you be open to ${v.cta_phrase}? Happy to work around your schedule.\n\n${v.sign_off}\n${v.your_name}`
    }),
    // Framework P2: COMPLIMENT + ASK
    (v) => ({
        subject: `Impressed by ${v.their_company}'s work`,
        body: `Hi ${v.recipient_name},\n\nI've been following ${v.their_company}'s growth — really impressive momentum. I'm ${v.your_name}, ${v.your_role} at ${v.your_company}. ${v.value_prop}.\n\nI see a strong ${v.purpose_phrase} opportunity between our teams and wanted to reach out directly. Would ${v.cta_phrase} make sense on your end?\n\nEither way, keep up the great work.\n\n${v.sign_off}\n${v.your_name}`
    }),
    // Framework P3: CONTEXT + VALUE
    (v) => ({
        subject: `Quick note re: ${v.purpose_phrase} with ${v.their_company}`,
        body: `Hi ${v.recipient_name},\n\nI'm ${v.your_name} with ${v.your_company}, where ${v.value_prop}. I've been looking into ${v.their_company} and think there's a clear alignment around ${v.purpose_phrase}.\n\nRather than a long pitch, I'll keep it simple: I think we could ${v.outcome_phrase}, and I'd love to explain why in ${v.cta_phrase}.\n\nNo pressure at all — just thought it was worth reaching out.\n\n${v.sign_off}\n${v.your_name}`
    })
];

const persuasiveTemplates: TemplateFn[] = [
    // Framework S1: STAT + PAIN + SOLUTION
    (v) => ({
        subject: `Quick idea for ${v.their_company}`,
        body: `${v.recipient_name},\n\nMost companies in your space ${v.pain_point}. At ${v.your_company}, ${v.value_prop}.\n\nI've been looking at ${v.their_company} and spotted a specific opportunity that could ${v.benefit}. Worth ${v.cta_phrase} to walk through what I'm seeing? No pitch — just sharing what I noticed.\n\n${v.sign_off}\n${v.your_name}\n${v.your_role}, ${v.your_company}`
    }),
    // Framework S2: BEFORE/AFTER
    (v) => ({
        subject: `How ${v.their_company} could ${v.benefit}`,
        body: `${v.recipient_name},\n\nBefore: companies ${v.pain_point}.\nAfter: ${v.value_prop}.\n\nThat's the shift we've helped teams make at ${v.your_company}. I think ${v.their_company} is in a great position to see similar results, and I have a specific idea on how.\n\nInterested in ${v.cta_phrase}?\n\n${v.sign_off}\n${v.your_name}`
    }),
    // Framework S3: CURIOSITY GAP
    (v) => ({
        subject: `Something I noticed about ${v.their_company}`,
        body: `${v.recipient_name},\n\nI spent some time looking at ${v.their_company} this week and noticed something interesting — you're doing a lot right, but there's one area where I think you're leaving value on the table.\n\nAt ${v.your_company}, ${v.value_prop}. I'd love to share what I'm seeing and see if it resonates.\n\n${v.cta_phrase}? Takes 15 minutes, and if it's not useful, I'll be the first to say so.\n\n${v.sign_off}\n${v.your_name}\n${v.your_role}, ${v.your_company}`
    })
];

const friendlyTemplates: TemplateFn[] = [
    // Framework F1: CASUAL HUMAN
    (v) => ({
        subject: `Quick hello from ${v.your_name}`,
        body: `Hey ${v.recipient_name}!\n\nI'm ${v.your_name} from ${v.your_company} — ${v.value_prop}. I came across ${v.their_company} and honestly, what you all are doing is really cool.\n\nI think there might be a fun ${v.purpose_phrase} angle between us. Totally low-pressure — would you be up for ${v.cta_phrase}?\n\nNo worries at all if the timing's off!\n\n${v.sign_off}\n${v.your_name}`
    }),
    // Framework F2: SHARED WORLD
    (v) => ({
        subject: `Fellow professional saying hi`, // Fallback subject if no specific industry
        body: `Hey ${v.recipient_name}!\n\nI'm ${v.your_name}, ${v.your_role} at ${v.your_company}. We're in a similar world — ${v.value_prop}, and I've been watching what ${v.their_company} is up to with genuine interest.\n\nWould love to ${v.outcome_phrase} over ${v.cta_phrase} sometime. Nothing formal — just a conversation.\n\nLet me know if you're up for it!\n\n${v.sign_off}\n${v.your_name}`
    }),
    // Framework F3: GENUINE + DIRECT
    (v) => ({
        subject: `${v.recipient_name}, quick question`,
        body: `Hey ${v.recipient_name},\n\nThis might be a little out of the blue, but I'm ${v.your_name} from ${v.your_company} and I've been a fan of what ${v.their_company} is building.\n\nHere's the short version: ${v.value_prop}. I think there's a real ${v.purpose_phrase} opportunity here, and I'd love to bounce the idea off you.\n\nAny chance you'd be open to ${v.cta_phrase}? Totally understand if now's not the right time.\n\n${v.sign_off}\n${v.your_name}`
    })
];

function getWordCount(text: string): number {
    return text.trim().split(/\s+/).filter(w => w.length > 0).length;
}

export function generateColdEmails(inputs: ColdEmailInputs, pIndex: number, sIndex: number, fIndex: number): GeneratedEmails {
    const {
        yourName,
        yourRole,
        yourCompany,
        recipientName,
        recipientCompany,
        purpose,
        customPurpose,
        valueProp,
        cta
    } = inputs;

    const rName = recipientName.trim() || "[Name]";
    const ctaPhrase = ctaPhraseMap[cta] || "a quick conversation";

    let pData = purposePhraseMap[purpose];
    if (purpose === 'custom') {
        pData = {
            purpose: customPurpose,
            purposePhrase: customPurpose,
            outcomePhrase: "find a great way to work together",
            painPoint: "miss opportunities that are right in front of them",
            benefit: "get a meaningful result",
        };
    }

    // Capitalize first letter of purpose where needed for subjects
    const capPurpose = pData.purpose.charAt(0).toUpperCase() + pData.purpose.slice(1);

    const vars = {
        your_name: yourName,
        your_role: yourRole,
        your_company: yourCompany,
        recipient_name: rName,
        their_company: recipientCompany,
        purpose: capPurpose,
        purpose_phrase: pData.purposePhrase,
        outcome_phrase: pData.outcomePhrase,
        pain_point: pData.painPoint,
        benefit: pData.benefit,
        value_prop: valueProp,
        cta_phrase: ctaPhrase,
        // Sign-offs will be dynamic
    };

    const runTemplate = (templates: TemplateFn[], index: number, signOffList: string[]) => {
        const template = templates[index % templates.length];
        const signOff = signOffList[Math.floor(Math.random() * signOffList.length)];
        const result = template({ ...vars, sign_off: signOff });
        return {
            ...result,
            wordCount: getWordCount(result.body)
        };
    };

    return {
        professional: runTemplate(professionalTemplates, pIndex, signOffMap.professional),
        persuasive: runTemplate(persuasiveTemplates, sIndex, signOffMap.persuasive),
        friendly: runTemplate(friendlyTemplates, fIndex, signOffMap.friendly),
    };
}
