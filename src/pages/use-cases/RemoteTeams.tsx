import React from 'react';
import { UseCaseLayout } from '../../components/layout/UseCaseLayout';

export const RemoteTeams: React.FC = () => {
  return (
    <UseCaseLayout
      meta={{
        title: "AI Writing Tool for Remote Teams — Fix Tone Fast | TextGlow",
        description: "Remote work means 80% of communication is written. TextGlow rewrites your Slack messages and emails with the right tone — so nothing gets lost in text.",
        url: "/remote-teams"
      }}
      hero={{
        title: "In Remote Work, Every Message Carries the Weight of a Conversation",
        description: "When you can't read the room or soften feedback with a smile, your text IS your presence. TextGlow ensures your tone matches your intent, so nothing gets lost in translation."
      }}
      problem={{
        title: "Your Writing Is 80% of Your Personality Now",
        content: (
          <div className="space-y-6">
            <p>Remote work stripped away the non-verbal cues that carry 70% of human communication. What's left is text. And text is brutally unforgiving.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">56%</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Misunderstandings</div>
                <p className="mt-3 text-sm">56% of remote workers report regular misunderstandings caused by written tone in Slack or email.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">45%</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Volume increase</div>
                <p className="mt-3 text-sm">Remote workers send 45% more written messages than their in-office counterparts.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">30%</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Retention lift</div>
                <p className="mt-3 text-sm">Companies with strong written communication cultures retain remote employees at 30% higher rates.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">3s</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Tone correction</div>
                <p className="mt-3 text-sm">Correcting your tone before sending takes seconds but saves hours of meeting-based conflict resolution.</p>
              </div>
            </div>
            <p><strong>The async premium.</strong> When a message is read 8 hours later in a different time zone, the cost of ambiguity multiplies. TextGlow ensures every message lands right the first time.</p>
          </div>
        )
      }}
      howItWorks={{
        platforms: ["Slack", "Microsoft Teams", "Gmail", "Notion", "Linear", "Jira", "Asana", "GitHub"],
        tonesTable: [
          { tone: "Friendly", bestFor: "Daily standups, social channels, welcome messages", scenario: "Building rapport without office proximity" },
          { tone: "Professional", bestFor: "Cross-team communication, client-facing messages", scenario: "Elevating your register for external stakeholders" },
          { tone: "Direct", bestFor: "Async decisions, blocker escalations, action items", scenario: "Saying what needs to be said without ambiguity" },
          { tone: "Empathetic", bestFor: "Feedback, team check-ins, sensitive topics", scenario: "Making sure the human comes through in a text medium" },
          { tone: "Concise", bestFor: "Status updates, thread replies, quick approvals", scenario: "Getting the point across without the Slack wall of text" },
          { tone: "Enthusiastic", bestFor: "Ship announcements, milestone celebrations", scenario: "Injecting energy into distributed team launches" }
        ]
      }}
      useCases={[
        {
          title: "1. Async Feedback on Designs",
          tone: "Empathetic",
          before: "Hey Marcus, I looked at the designs. The navigation is confusing and the color choices don't match the brand guidelines. Also the mobile layout is broken. Needs a lot of work before we can move forward.",
          after: "Hey Marcus, thanks for getting these over so quickly. I really like the direction on the landing page layout! A few areas where I think we can tighten things up: the navigation felt a bit complex, some accent colors are drifting from the brand guidelines, and I noticed some breaking on mobile. None of this is a dealbreaker — the foundation is solid. Want to sync on these async?"
        },
        {
          title: "2. Strategic Focus Shift Announcement",
          tone: "Confident",
          before: "Hi team, After reviewing our Q1 results, leadership has decided to shift our strategic focus. We will be deprioritizing the enterprise segment to focus on mid-market. Some teams will be restructured. More details to come.",
          after: "Hi team, I want to share a strategic shift: we're choosing to double down on the mid-market segment where our win rate is 3x higher. This means sales/marketing will realign over the next 30 days and product will prioritize mid-market features. I'm hosting a live Q&A on Friday for any questions. This is a big move, and I'm confident it's the right one."
        },
        {
          title: "3. Intro to a New Teammate",
          tone: "Friendly",
          before: "Hi Priya, I'm on the product team and I need to coordinate with you on the API documentation. Can we set up a meeting? Let me know your availability.",
          after: "Hi Priya! I've seen your name on a bunch of API docs — really clean work. I'm working on v3 and would love to coordinate on the documentation side. Rather than just jumping into a formal meeting, want to grab a virtual coffee first? I'd love to put a face to the name and hear what you're working on!"
        },
        {
          title: "4. Cross-Timezone Handoff",
          tone: "Professional",
          before: "Handoff notes: The deployment is in progress. There's an issue with the payment service. Check the logs. Also the client emailed about the reporting bug. Need to respond.",
          after: "Hi Tokyo team, here's the status: v2.4 deployment is 60% complete (pinned instructions in #deployments if it stalls). We're seeing intermittent 504 errors on the payment service — I've ruled out the DB but think it's the rate limiter config. Also, Acme Corp emailed about ticket #4521; an empathetic update today would go a long way. I'll be back online at 8 AM PT."
        },
        {
          title: "5. Declining a Meeting for Async",
          tone: "Direct",
          before: "Hi Sam, I don't think we need a meeting for this. Can you just put it in a doc? I have too many meetings already.",
          after: "Hi Sam, thanks for the invite! I've read the agenda and think I can give more useful input async. If you drop the proposal in a shared doc, I'll leave detailed comments by Thursday. This ensures you get my full attention rather than me multitasking during a call. If we hit a decision point that needs real-time back-and-forth, let's jump on a focused 15-min call then. Does that work?"
        },
        {
          title: "6. Sprint Retro Recap",
          tone: "Enthusiastic",
          before: "Sprint 14 retro summary. What went well: deployment was smooth, QA caught the auth bug early. What didn't go well: scope creep on the dashboard feature, missed the Friday deadline. Action items: better scope documentation, earlier design reviews.",
          after: "Great conversation today, team! We crushed the deployment pipeline (shout-out to the infra team) and QA caught a critical auth bug early. We got tripped up by some dashboard scope creep, so we're fixing the root cause: every feature gets a locked scope doc starting Sprint 15. Overall a solid sprint — let's make the next one even cleaner!"
        }
      ]}
      whySection={{
        title: "When You Can't Read the Room, Your Writing Is Your Presence",
        content: (
          <div className="space-y-6">
            <p>In a physical office, 70% of communication is nonverbal. Remote work stripped that away. Your writing is how people experience working with you — it builds or breaks trust every day.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs mt-0.5">✓</div>
                <p className="m-0 leading-normal">Tone correction <strong>prevents conflicts</strong> before they start.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs mt-0.5">✓</div>
                <p className="m-0 leading-normal">Professional tone bridges the <strong>cross-cultural communication</strong> gap.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs mt-0.5">✓</div>
                <p className="m-0 leading-normal">Clear async messages <strong>reduce meeting fatigue</strong> significantly.</p>
              </li>
            </ul>
            <p><strong>Trust accumulates slowly but collapses fast.</strong> One misinterpreted Slack message can set a relationship back weeks. TextGlow acts as a safety net, ensuring your intent and your impact are always aligned.</p>
          </div>
        )
      }}
      socialProof={[
        {
          quote: "Misunderstandings dropped noticeably after we adopted TextGlow. People send feedback with confidence now.",
          author: "Kevin Nakamura",
          role: "Remote Engineering Manager, Stripe"
        },
        {
          quote: "Escalations dropped by more than half. It's the highest-ROI tool we've adopted for team culture.",
          author: "Amara Osei",
          role: "CEO, Lightpath"
        },
        {
          quote: "It's like having a communications coach sitting next to every person on the team in every Slack channel.",
          author: "Sofia Lindgren",
          role: "Director of People, Oyster HR"
        }
      ]}
      faqs={[
        { q: "Does it work in Slack and Microsoft Teams?", a: "Yes. TextGlow works inside the web-based and desktop versions of Slack and Microsoft Teams, plus Discord and others." },
        { q: "Can our whole team use it?", a: "Yes. Each member installs the extension individually. No complex IT deployment required." },
        { q: "Does it help with cross-cultural communication?", a: "Extremely. It helps standardize tone norms so messages read clearly across global time zones." },
        { q: "Does it work in project tools like Jira?", a: "Yes. TextGlow works in Jira, Notion, Linear, Asana, GitHub, and any other tool your remote team uses." }
      ]}
    />
  );
};
