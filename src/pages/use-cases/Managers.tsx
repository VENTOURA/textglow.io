import React from 'react';
import { UseCaseLayout } from '../../components/layout/UseCaseLayout';

export const Managers: React.FC = () => {
  return (
    <UseCaseLayout
      meta={{
        title: "TextGlow for Managers — AI Writing Assistant",
        description: "Communicate better with your team. Use TextGlow to rewrite internal announcements, feedback, and Slack messages to be clear, professional, and motivating.",
        url: "/managers/"
      }}
      hero={{
        title: "The Hardest Part of Managing Isn't the Decisions — It's Writing Them Down",
        description: "Every Slack message, every email, every performance review is a leadership moment. TextGlow helps you get the tone right every time: direct without being harsh, empathetic without being soft, confident without being arrogant."
      }}
      problem={{
        title: "Why Management Writing Is the Highest-Stakes Writing You Do",
        content: (
          <div className="space-y-6">
            <p>According to McKinsey, managers spend 23+ hours per week communicating — and roughly 80% of that communication is written. That means you're spending more than 18 hours a week writing messages that directly shape how your team feels about their work, their future, and you.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">23+ hrs</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Communicating per week</div>
                <p className="mt-3 text-sm">Managers spend more than half their working hours in some form of communication.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">80%</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Written communication</div>
                <p className="mt-3 text-sm">The vast majority of manager communication is now through text-based platforms.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">70%</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Engagement variance</div>
                <p className="mt-3 text-sm">Gallup found that 70% of employee engagement variance is attributable to the manager.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">58%</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Primary reason for leaving</div>
                <p className="mt-3 text-sm">Over half of employees who left a job cited their manager as the primary reason.</p>
              </div>
            </div>
            <p><strong>The management communication gap.</strong> You get leadership workshops and conflict resolution seminars. But nobody teaches you how to write the 9:47 PM Slack message telling someone their project is being shelved, or the email explaining why they didn't get promoted.</p>
            <p><strong>Every word gets amplified.</strong> When you're a manager, your words carry more weight. A "Sounds good" vs. "Sounds great" can be interpreted as a verdict by a report who spent days on a proposal.</p>
          </div>
        )
      }}
      howItWorks={{
        platforms: ["Slack", "Microsoft Teams", "Gmail", "Notion", "Google Docs", "Confluence", "Lattice", "15Five"],
        tonesTable: [
          { tone: "Empathetic", bestFor: "Negative feedback, personal situations, team morale", scenario: "Telling a report their role is changing due to a reorg" },
          { tone: "Professional", bestFor: "Performance reviews, executive updates", scenario: "Quarterly update to the leadership team" },
          { tone: "Direct", bestFor: "Setting expectations, deadlines, accountability", scenario: "Slack message clarifying that a deliverable is due Friday" },
          { tone: "Confident", bestFor: "Rallying the team, announcing decisions", scenario: "Email pushing back on an unrealistic timeline" },
          { tone: "Friendly", bestFor: "1:1 check-ins, team celebrations", scenario: "Congratulating someone in the team channel" },
          { tone: "Concise", bestFor: "Status updates, quick approvals", scenario: "Approving a request without writing a paragraph" }
        ]
      }}
      useCases={[
        {
          title: "1. Performance Feedback",
          tone: "Empathetic",
          before: "Your last three deliverables have had significant issues. The quality isn't where it needs to be and it's creating extra work for the rest of the team. We need to see improvement quickly.",
          after: "I want to talk with you about something I've noticed in your recent work. The last three deliverables had some quality gaps that ended up impacting the broader team's workflow. I know that's probably not the experience you want to be having either. I'd like us to figure out together what's getting in the way and how I can better support you in getting back on track. Can we set up 30 minutes this week to dig into it?"
        },
        {
          title: "2. Announcing a Project Cancellation",
          tone: "Empathetic",
          before: "I wanted to let everyone know that Project Atlas is being cancelled effective immediately. Leadership has decided to reallocate resources to other priorities. Please transition any in-progress work by end of week.",
          after: "I have some difficult news to share. After a lot of discussion at the leadership level, the decision has been made to wind down Project Atlas. I know many of you have invested serious time and creative energy into this, and I want to be upfront: that work mattered, and this decision doesn't diminish what you built. The reason comes down to a shift in company priorities that's pulling resources toward [X]. Over the next week, I'll work with each of you individually to make sure your in-progress work is wrapped up thoughtfully and that your next assignments are a strong fit. I'm available for questions anytime — don't hesitate."
        },
        {
          title: "3. Denying a Promotion Request",
          tone: "Professional",
          before: "Thanks for raising this. Unfortunately, the timing isn't right for a promotion right now. Let's revisit in the next cycle.",
          after: "Thank you for bringing this up — I appreciate you advocating for yourself, and I want to give you a thoughtful response rather than a vague one. Right now, I'm not able to move forward with a promotion, and here's why: the areas where I'd need to see more growth are [specific skill/behavior]. That's not a reflection of your overall value to this team — it's about closing a specific gap. I'd like to map out a concrete plan together so that when the next cycle opens, you're in the strongest possible position. Can we schedule time this week to build that out?"
        },
        {
          title: "4. Delegating an Unpopular Task",
          tone: "Confident",
          before: "Hey, I'm really sorry to ask this, but someone needs to handle the data migration documentation and I was hoping you could take it on? I know it's not the most exciting work. Totally understand if you have concerns.",
          after: "I'm assigning the data migration documentation to you for this sprint. I chose you specifically because your technical writing on the last two projects was the clearest on the team, and this documentation is going to be referenced by engineering for months. I've blocked off capacity in your sprint so this doesn't stack on top of existing work. Let me know if you need anything to get started."
        },
        {
          title: "5. Setting Boundaries About After-Hours",
          tone: "Direct",
          before: "I've noticed I keep getting Slack messages at 10 PM and on weekends. I don't know about everyone else, but I do have a life outside of work. It would be great if we could keep things to business hours unless it's truly urgent.",
          after: "Quick note on team communication norms. Going forward, let's keep non-urgent Slack messages to business hours (9-6 in your time zone). If something genuinely can't wait, call or text me directly — I'll always pick up for real emergencies. For everything else, Slack's scheduled-send feature is great for writing a thought when you have it and delivering it the next morning. This isn't about working less — it's about making sure our off-hours are actually restorative so we show up sharper during work hours."
        },
        {
          title: "6. Defending Your Team's Timeline",
          tone: "Confident",
          before: "I understand there's pressure to move faster, but my team is already working at full capacity and we've been dealing with constant scope changes from the product team. If the timeline gets cut again, quality will suffer and we'll end up spending more time fixing things later.",
          after: "I want to share our perspective on the proposed timeline adjustment. Our current projection of March 15 is based on three factors: the two scope additions from the November product review, the QA cycles required for SOC 2 compliance, and the dependency on the platform team's API delivery (currently tracking to Feb 28). Compressing the timeline by three weeks would require either removing the November scope additions or reducing QA coverage — both of which carry measurable downstream risk. I've attached a brief impact analysis with two alternative options that could recover 8-10 days without compromising quality. Happy to walk through these in our Thursday sync."
        }
      ]}
      whySection={{
        title: "When You're a Manager, Every Word Gets Amplified",
        content: (
          <div className="space-y-6">
            <p>Your team doesn't hear your tone of voice when they read your words — they project one. A blunt sentence from a manager isn't just direct; it's potentially terrifying. A warm sentence isn't just friendly; it's a validation of their value.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs mt-0.5">✓</div>
                <p className="m-0 leading-normal"><strong>70% of engagement</strong> is driven by the relationship with the direct manager.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs mt-0.5">✓</div>
                <p className="m-0 leading-normal">Communication issues are the <strong>#1 reason</strong> top talent leaves their roles.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs mt-0.5">✓</div>
                <p className="m-0 leading-normal">Written tone in remote teams is the primary factor in building <strong>psychological safety</strong>.</p>
              </li>
            </ul>
            <p><strong>The remote leadership challenge.</strong> In an office, a warm smile can soften a direct directive. On Slack, you don't have that smile. Your writing is the only version of you your team experiences all day. TextGlow ensures that version matches the leader you aim to be.</p>
          </div>
        )
      }}
      socialProof={[
        {
          quote: "I used to spend 20 minutes agonizing over critical feedback. Now I write what I think, hit Empathetic, and it sounds exactly like the supportive version of me.",
          author: "Rachel T.",
          role: "Engineering Manager at a mid-size SaaS company"
        },
        {
          quote: "TextGlow helped me learn the difference between how I write to my team and how I should write to leadership. My VP says my updates are significantly clearer now.",
          author: "David K.",
          role: "VP of Operations"
        },
        {
          quote: "As a first-time manager, I had no idea how to write reviews that weren't robotic. TextGlow let me find a middle ground that my team genuinely appreciated.",
          author: "Priya M.",
          role: "Team Lead at an early-stage startup"
        }
      ]}
      faqs={[
        { q: "Does TextGlow work in Slack?", a: "Yes. TextGlow works in Slack's web app — both in direct messages and channels. It also works in Microsoft Teams, Gmail, and any other communication platform you use in your browser." },
        { q: "Can it help with performance reviews?", a: "Absolutely. Whether you're writing in Lattice, 15Five, Culture Amp, or Google Docs, TextGlow works in the text field to help you calibrate your feedback perfectly." },
        { q: "Will it make my messages sound inauthentic?", a: "No. TextGlow rewrites your specific words and ideas. It starts with what you actually want to say and adjusts the delivery, so your team still hears your voice, just at its best." },
        { q: "Can my whole management team use it?", a: "Yes. Each manager installs the extension individually. The free plan offers 10 rewrites per day, while the Pro plan provides 150 rewrites per day for $39/year." }
      ]}
    />
  );
};
