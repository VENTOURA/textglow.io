import React from 'react';
import { UseCaseLayout } from '../../components/layout/UseCaseLayout';

export const Freelancers: React.FC = () => {
  return (
    <UseCaseLayout
      meta={{
        title: "TextGlow for Freelancers — AI Writing Assistant",
        description: "Pitch better and manage clients with ease. Use TextGlow to rewrite proposals, invoices, and status updates for a more professional impression.",
        url: "/freelancers/"
      }}
      hero={{
        title: "When You're Freelance, Every Email IS Your Brand",
        description: "You don't have a Fortune 500 logo. Your words are your reputation, your professionalism, and your competitive edge. TextGlow makes sure every client touchpoint sounds as good as your work."
      }}
      problem={{
        title: "You Write More High-Stakes Emails Than Anyone",
        content: (
          <div className="space-y-6">
            <p>A senior employee might write one important email a week. A freelancer writes those emails every day. Proposals. Rate negotiations. Scope pushback. Milestone updates. Every one of these strengthens or chips away at your client relationships.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">78%</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Decision factor</div>
                <p className="mt-3 text-sm">78% of clients cite 'professionalism of communication' as a top factor in choosing a freelancer.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">64M</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Freelancers</div>
                <p className="mt-3 text-sm">The market is crowded. Your communication is often your only differentiator besides price.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">#1</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Top challenge</div>
                <p className="mt-3 text-sm">Communicating professionally with clients is cited as the top challenge for solo workers.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">3x</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Close rate boost</div>
                <p className="mt-3 text-sm">Freelancers who match their client's communication style see significantly higher win rates.</p>
              </div>
            </div>
            <p><strong>The freelancer's dilemma.</strong> You're doing this completely alone. There's no communications team reviewing your proposal. No manager softening the message. It's just you, a blank compose window, and a client who's deciding if you're worth what you charge based on how you write.</p>
          </div>
        )
      }}
      howItWorks={{
        platforms: ["Gmail", "LinkedIn", "Upwork", "Fiverr", "Notion", "Slack", "Google Docs", "Outlook"],
        tonesTable: [
          { tone: "Professional", bestFor: "Client proposals, project kickoffs, formal updates", scenario: "Sending a project kickoff email to a new enterprise client" },
          { tone: "Confident", bestFor: "Rate negotiations, scope pushback", scenario: "Telling a client that additional revisions are outside scope" },
          { tone: "Friendly", bestFor: "Relationship building, casual check-ins", scenario: "Following up with a past client to stay top of mind" },
          { tone: "Persuasive", bestFor: "Proposals, upselling, new pitches", scenario: "Writing a proposal that positions you as the expert choice" },
          { tone: "Direct", bestFor: "Scope creep, payment follow-ups", scenario: "Sending a clear message about a missed invoice payment" }
        ]
      }}
      useCases={[
        {
          title: "1. Proposal Email to Potential Client",
          tone: "Persuasive",
          before: "Hi, I saw your job posting and I think I'd be a good fit. I have 5 years of experience in UX design and have worked with companies of various sizes. I'd love to discuss the project further. Let me know if you're interested.",
          after: "Hi Sarah — your posting caught my attention because the challenge you described (simplifying a complex onboarding flow for non-technical users) is exactly the kind of problem I've spent the last five years solving. Most recently, I redesigned the onboarding experience for [Client], which reduced drop-off by 34% in the first month. I'd love to learn more about your specific goals and share a few initial thoughts on the approach I'd take. Would a 20-minute call this week work on your end?"
        },
        {
          title: "2. Pushing Back on Scope Creep",
          tone: "Confident",
          before: "Hey, so I noticed the latest round of feedback includes some things that weren't in the original brief. I don't want to be difficult but these are kind of outside what we agreed on. Would it be possible to maybe discuss this?",
          after: "Thanks for the detailed feedback — it's clear you're thinking carefully about this, which I appreciate. I want to flag that a few of the items in this round (the new dashboard view and the additional user role) fall outside the scope we defined in our project agreement. I'm happy to take these on as a Phase 2 addition — I can have a quick estimate for the additional work to you by tomorrow. For now, I'll move forward with the revisions that fall within our current scope so we stay on track for the original deadline. Sound good?"
        },
        {
          title: "3. Raising Rates with Existing Client",
          tone: "Confident",
          before: "I hope this doesn't come as bad news, but I need to raise my rates starting next quarter. I know this might be inconvenient and I'm sorry. The new rate would be $125/hour instead of $100. I totally understand if you need to think about it or look at other options.",
          after: "I wanted to give you a heads-up about a rate adjustment taking effect next quarter. Starting April 1, my rate will be $125/hour, up from the current $100. This reflects both the increased complexity of the work we've been doing together and an adjustment to match current market rates for this level of specialization. For context, the average rate for senior UX consultants in this space is currently $140-160/hour. I've genuinely enjoyed our partnership — the work we've done on [project] is some of my favorite in my portfolio — and I'd love to continue. I'm happy to discuss how we can structure upcoming projects to maximize value within your budget."
        },
        {
          title: "4. Following up on a Late Invoice",
          tone: "Professional",
          before: "Hi, I just wanted to check in about invoice #247 from last month. I think it might have been overlooked? It was due on the 15th. No rush but if you could look into it that would be great. Thanks!",
          after: "Hi Mark — following up on invoice #247 ($4,200 for the October deliverables), which was due on November 15. I understand things can slip through the cracks, especially at end of quarter. Could you confirm when I can expect this to be processed? If it's helpful, I've reattached the invoice below. Thanks for looking into this."
        },
        {
          title: "5. Declining a Poor-Fit Project",
          tone: "Friendly",
          before: "Thanks for reaching out but I don't think this project is for me. The budget is too low for the amount of work involved and the timeline is unrealistic. Good luck finding someone.",
          after: "Thank you for thinking of me for this — I'm flattered you reached out. After reviewing the project details, I don't think I'm the right fit for this particular engagement, primarily because my current availability wouldn't allow me to give it the attention it deserves within your timeline. I'd hate to take it on and deliver anything less than my best. If it's helpful, I can recommend a couple of talented colleagues who might be a great match. And I'd love to stay in touch for future projects — your work in [their space] is really interesting to me."
        },
        {
          title: "6. Asking for a Referral",
          tone: "Friendly",
          before: "Since you were happy with the work I did, I was wondering if you know anyone else who might need similar services? Referrals are really important for my business. I'd appreciate any introductions you could make.",
          after: "It's been such a great experience working with you on this project — the results really exceeded what I expected when we kicked off, and that's largely because you were so clear about what you needed from day one. I'm currently opening up availability for Q2, and if anyone in your network is wrestling with similar challenges, I'd be grateful for an introduction. No pressure at all — I mostly just wanted to say thanks for being one of those clients who makes the work genuinely enjoyable."
        }
      ]}
      whySection={{
        title: "Solo Means Your Communication IS Your Competitive Advantage",
        content: (
          <div className="space-y-6">
            <p>When a potential client gets three comparable proposals, the deciding factor is almost always how those proposals feel to read. Your emails are the interview that never ends.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs mt-0.5">✓</div>
                <p className="m-0 leading-normal">Professional communication is the <strong>#1 factor</strong> in client re-hiring decisions.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs mt-0.5">✓</div>
                <p className="m-0 leading-normal">Confident rate negotiations lead to <strong>20-30% higher</strong> lifetime earnings.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs mt-0.5">✓</div>
                <p className="m-0 leading-normal">TextGlow levels the playing field for <strong>non-native English speakers</strong> competing globally.</p>
              </li>
            </ul>
            <p><strong>Every touchpoint is a brand moment.</strong> One compelling proposal lands a $50k contract. One poorly worded scope email costs you a retainer. TextGlow ensures every message reinforces your value as a premium partner.</p>
          </div>
        )
      }}
      socialProof={[
        {
          quote: "My close rate went from 15% to over 30% after I started running proposals through the Persuasive tone. That's an extra $40k in annual revenue.",
          author: "Andrei V.",
          role: "Freelance UX Designer"
        },
        {
          quote: "The Confident tone changed how I handle rate negotiations. I stopped apologizing and started stating my value. Clients respond better to it.",
          author: "Jessica L.",
          role: "Marketing Consultant"
        },
        {
          quote: "As a non-native speaker, tone was the hardest part to master. TextGlow ensures I sound native-level professional in every client email.",
          author: "Ravi S.",
          role: "Software Developer"
        }
      ]}
      faqs={[
        { q: "Does TextGlow work on Upwork and Fiverr?", a: "Yes. TextGlow works on the web versions of Upwork, Fiverr, and any other freelance platform you use in your browser. It also works in LinkedIn and Gmail." },
        { q: "Can it help with writing proposals?", a: "This is one of our top use cases. The Persuasive tone is specifically designed for proposals, pitches, and upselling situations." },
        { q: "Will clients know I'm using AI?", a: "No. TextGlow rewrites your own words, experience, and ideas. It adjusts how those things are expressed, so the result sounds like you at your best." },
        { q: "Does it help non-native English speakers?", a: "Absolutely. It's one of our core use cases, helping solo workers bridge the tone and fluency gap when working with global clients." }
      ]}
    />
  );
};
