export const toneTable = [
    { tone: "Professional", when: "Work emails, client communication, reports", fixes: "Over-formal phrasing, literal translations, stiff structure", color: "bg-blue-50 text-blue-700 border-blue-200" },
    { tone: "Friendly", when: "Team chat, casual emails, peer messages", fixes: "Robotic formality, missing contractions, unnatural politeness", color: "bg-green-50 text-green-700 border-green-200" },
    { tone: "Confident", when: "Presentations, leadership emails, LinkedIn", fixes: "Hedging language, passive voice, apologetic tone", color: "bg-amber-50 text-amber-700 border-amber-200" },
    { tone: "Concise", when: "Slack, quick replies, status updates", fixes: "Wordy constructions, unnecessary qualifiers", color: "bg-slate-100 text-slate-700 border-slate-200" },
    { tone: "Polite", when: "Formal requests, cross-cultural, senior stakeholders", fixes: "Formality level for English (often less formal than expected)", color: "bg-purple-50 text-purple-700 border-purple-200" },
    { tone: "Direct", when: "Deadlines, feedback, escalations", fixes: "Softened language that buries the point, circular phrasing", color: "bg-red-50 text-red-700 border-red-200" },
];

export const useCases = [
    { title: "The Overly Formal Work Email", context: "Common for Spanish, Portuguese, Arabic, Hindi speakers", emoji: "📧", before: "Dear Mr. Johnson, I would like to kindly inform you that the report you requested has been completed and is attached herewith for your kind review and consideration.", tone: "Professional", after: "Hi David, the report's ready — attached here. Let me know if anything needs adjusting, happy to iterate." },
    { title: "The Awkward Team Slack Message", context: "Common for German, Japanese, Korean speakers", emoji: "💬", before: "I have finished the task that was assigned to me. Please inform me if there are additional items that require my attention.", tone: "Friendly", after: "All done on my end! Let me know if there's anything else I can jump on 😊" },
    { title: "The Hedging LinkedIn Post", context: "Common for East Asian, Scandinavian speakers", emoji: "📝", before: "I think maybe it could be possible that AI might change how we do marketing in the future, in my humble opinion.", tone: "Confident", after: "AI is fundamentally changing marketing — and the companies adapting now will have a massive head start. Here's what I'm seeing on the ground." },
    { title: "The Literal Translation Email", context: "Common for French, Italian, Russian speakers", emoji: "🔄", before: "I am writing to you in order to ask if it would be possible that we arrange a meeting for the purpose of discussing the new project.", tone: "Concise", after: "Can we set up a quick meeting to discuss the new project? I'm free Thursday or Friday afternoon." },
    { title: "The Too-Polite Client Follow-Up", context: "Common for Japanese, Thai, Indonesian speakers", emoji: "🙇", before: "I am very sorry to disturb you and I apologize for sending this email, but I was wondering if perhaps you have had the chance to review our proposal, if it is not too much trouble.", tone: "Professional", after: "Hi [Name], just following up on the proposal I sent last week. I'd love to hear your thoughts — any questions or feedback? Happy to jump on a call if that's easier." },
    { title: "The Blunt Feedback Message", context: "Common for Dutch, German, Russian, Israeli speakers", emoji: "🎯", before: "This design is not good. The colors are wrong and the layout doesn't make sense. You need to change it.", tone: "Empathetic", after: "I've reviewed the design — thanks for putting this together. I have some thoughts on the color palette and layout that I think could strengthen the overall impact. Want to walk through them together?" },
];

export const testimonials = [
    { quote: "My native language is Portuguese. My English is good — but my emails always sounded too formal compared to my American colleagues. TextGlow taught me more about natural English tone in one week than years of language apps ever did.", author: "Product Manager", context: "São Paulo → NYC remote team" },
    { quote: "I lead a team of 12 across three time zones. Before TextGlow, I would spend 20 minutes on a 3-sentence Slack message. Now I type my thoughts, click the button, and move on.", author: "Engineering Manager", context: "Originally from Seoul" },
    { quote: "I stopped asking my native English-speaking coworker to 'quickly check' my emails. TextGlow gives me the same result instantly.", author: "Marketing Lead", context: "Originally from Berlin" },
    { quote: "English is my third language. TextGlow's Confident tone captures the energy I have when I speak — but in writing. My engagement tripled.", author: "Startup Founder", context: "Originally from Nairobi" },
];

export const faqs = [
    { q: "Does TextGlow work if I write in my native language?", a: "TextGlow is optimized for polishing text that's already in the target language. It's not a translator — it's a fluency enhancer. Write in the language you need the output in, and TextGlow makes it sound natural." },
    { q: "Is this different from Google Translate?", a: "Completely. Google Translate converts one language to another. TextGlow takes text that's already in English and makes it sound like a native speaker wrote it." },
    { q: "Does it work for languages other than English?", a: "Yes. TextGlow auto-detects the language and applies native-level polishing. It works particularly well with English, Spanish, French, German, Portuguese, Italian, Dutch, and other widely-used languages." },
    { q: "Will my original meaning change?", a: "No. TextGlow preserves your intent and meaning. It changes how your message sounds, not what it says." },
    { q: "Does it work with technical writing?", a: "Yes. TextGlow understands context. It preserves technical terminology while making the surrounding phrasing more natural." },
    { q: "I already use Grammarly. Why would I need TextGlow?", a: "Grammarly catches grammar and spelling errors. TextGlow fixes the things Grammarly can't: unnatural phrasing, over-formality, tone mismatches, and the subtle patterns that mark writing as non-native. Many users run both." },
    { q: "Does TextGlow store my text?", a: "No. TextGlow processes your text in real-time and does not store, log, or use your content for training." },
    { q: "What platforms does it work on?", a: "TextGlow works in any text field in Chrome, Edge, or Brave — Gmail, Outlook, Slack, LinkedIn, Google Docs, Notion, and thousands more." },
];

export const comparisonTable = [
    { feature: "Fixes grammar", grammarly: true, textglow: true },
    { feature: "Fixes spelling", grammarly: true, textglow: true },
    { feature: "Fixes naturalness", grammarly: false, textglow: true },
    { feature: "Adjusts formality level", grammarly: false, textglow: true },
    { feature: "Removes literal translation patterns", grammarly: false, textglow: true },
    { feature: "Adapts tone to context", grammarly: false, textglow: true },
    { feature: "Works in-place (no copy-paste)", grammarly: false, textglow: true },
    { feature: "Understands cultural phrasing norms", grammarly: false, textglow: true },
];
