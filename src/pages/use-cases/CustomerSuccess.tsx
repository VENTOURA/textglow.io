import React from 'react';
import { UseCaseLayout } from '../../components/layout/UseCaseLayout';

export const CustomerSuccess: React.FC = () => {
  return (
    <UseCaseLayout
      meta={{
        title: "AI Writing Tool for Customer Success Teams | TextGlow",
        description: "CSMs write the emails that decide if revenue stays or churns. TextGlow rewrites renewal, upsell, and check-in messages with the perfect tone — inside Gainsight, Gmail, and Slack.",
        url: "/customer-success"
      }}
      hero={{
        title: "Your Emails Decide Whether Revenue Stays or Churns",
        description: "Renewals. Upsells. Check-ins. QBRs. CSMs write the messages that determine whether customers become lifers or logos on a churn report. TextGlow ensures every message lands perfectly."
      }}
      problem={{
        title: "Relationship Management Is a Writing Job Now",
        content: (
          <div className="space-y-6">
            <p>Between quarterly business reviews, your emails, Slack messages, and in-app notes ARE the relationship. Churn is almost always a communication failure before it's a product failure.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">5-7x</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Retention cost</div>
                <p className="mt-3 text-sm">It costs 5 to 7 times more to acquire a new customer than to retain an existing one.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">70-80%</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Revenue source</div>
                <p className="mt-3 text-sm">In SaaS, the vast majority of revenue comes from existing customers — making CSM writing mission-critical.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">20%</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Save rate boost</div>
                <p className="mt-3 text-sm">CS teams using tone-optimized communication see significant improvements in saving at-risk accounts.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">93%</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Renewal benchmarks</div>
                <p className="mt-3 text-sm">Top-performing CS teams leverage better communication to hit industry-leading renewal rates.</p>
              </div>
            </div>
            <p><strong>The CSM balance.</strong> In a single morning, you might congratule a milestone, pivot to a $100k renewal, and respond to a frustrated user. Each requires a different tone, and all must sound like you.</p>
          </div>
        )
      }}
      howItWorks={{
        platforms: ["Gainsight", "ChurnZero", "Vitally", "Catalyst", "Salesforce", "HubSpot", "Gmail", "Slack"],
        tonesTable: [
          { tone: "Friendly", bestFor: "Check-ins, milestones, NPS follow-ups", scenario: "Building rapport during the easy moments" },
          { tone: "Persuasive", bestFor: "Renewals, upsells, expansion pitches", scenario: "Making the ask feel like expert advice, not a sales play" },
          { tone: "Professional", bestFor: "QBR follow-ups, executive summaries", scenario: "Communicating with C-level sponsors" },
          { tone: "Empathetic", bestFor: "Complaints, product issues, price increases", scenario: "Acknowledging impact before jumping to solutions" },
          { tone: "Enthusiastic", bestFor: "New feature launches, beta invitations", scenario: "Making customers excited about what's coming" },
          { tone: "Direct", bestFor: "At-risk accounts, expectation setting", scenario: "When clarity and honesty matter more than comfort" }
        ]
      }}
      useCases={[
        {
          title: "1. Renewal Reminder — 90 Days Out",
          tone: "Persuasive",
          before: "Hi Linda, Your annual contract is up for renewal on September 15. Please let me know if you'd like to proceed with renewal. I can send over the paperwork whenever you're ready. Let me know if you have any questions.",
          after: "Hi Linda, Hard to believe it's been almost a year since we kicked things off. Your team has done some genuinely impressive work with the platform — the automation you built in Q2 alone saved over 200 hours. Your renewal is coming up on Sept 15, and I'd love to set up a quick conversation. Not a sales pitch — more of a chance to talk about what's working and whether we should look at any adjustments based on how your usage has evolved. Would sometime next week work for a 20-minute call?"
        },
        {
          title: "2. Upselling a New Feature",
          tone: "Persuasive",
          before: "Hi David, We just released our new Advanced Analytics module. It offers real-time dashboards, custom reports, and predictive insights. It's available as an add-on for $500/month. I think it would be great for your team. Want me to set up a demo?",
          after: "Hi David, I was looking at your team's reporting setup and remembered you mentioned that building custom reports was eating up 6 hours a week. We just shipped an Advanced Analytics module that does exactly that — real-time dashboards and predictive insights inside the platform. Honestly, based on your volume, I think this would pay for itself in the first month. Would it be helpful if I set up a 15-minute walkthrough so you can judge for yourself?"
        },
        {
          title: "3. Communicating a Price Increase",
          tone: "Empathetic",
          before: "Hi Chen, I'm reaching out to let you know that we'll be increasing prices by 15% starting with your next renewal cycle. This reflects the significant product investments we've made over the past year. Your new annual price will be $92,000. Let me know if you have questions.",
          after: "Hi Chen, I want to give you a heads-up about a pricing change coming with your next renewal, and I want to be transparent about the context. Starting with your next cycle, your annual investment will move from $80,000 to $92,000. I know that's not welcome news. Over the past year, we've shipped the analytics overhaul you requested and expanded API capacity by 3x. Let's schedule a call to walk through the ROI your team has seen this year so you feel confident in the value."
        },
        {
          title: "4. Check-in With a Quiet Champion",
          tone: "Friendly",
          before: "Hi Aisha, I haven't heard from you in a while and wanted to check in. How's everything going with the platform? Is there anything you need from us? Let me know.",
          after: "Hi Aisha, it's been a few weeks and I wanted to drop in — no agenda, just a genuine check-in. I noticed your team's power users went from 12 to 19 since last month, so things seem to be moving in the right direction! Also — I saw that your company just announced the Series C. Congrats! If the growth means your needs are evolving, I'd love to be a thought partner on that. Grab me on Slack anytime."
        },
        {
          title: "5. Responding to a Churn Threat",
          tone: "Confident",
          before: "Hi Raj, I'm sorry to hear you're considering other options. We really value your business and don't want to lose you. Can we set up a call to discuss your concerns? I'm sure we can work something out. We have some new features coming that I think will address your issues.",
          after: "Hi Raj, thank you for being direct with me — I'd much rather know where you stand than find out at renewal. Here's what I'd like to propose: a focused 30-minute conversation where we go through your three biggest pain points one by one. No generic roadmap presentation — just honest answers about what we can fix now and where we have genuine gaps. I've already looped in our Head of Product to join us. I want to earn back your confidence with specifics, not promises."
        },
        {
          title: "6. QBR Summary to Executive",
          tone: "Professional",
          before: "Hi Jennifer, Thank you for attending the QBR yesterday. Here is a summary. You had 500 support tickets this quarter. Your NPS went from 32 to 41. You used 85% of your license seats. We resolved 3 escalations. Next quarter we plan to focus on API integration and user training. Let me know if you have questions.",
          after: "Hi Jennifer, thanks for making time for the QBR. Here's a summary of where we stand, focused on the metrics that matter: NPS improved from 32 to 41 (top quartile), support resolution time dropped 34%, and license utilization hit 85%. Next quarter we're focused on API integration and an executive dashboard so your leadership team can see ROI without requesting reports. I'll send the full deck separately."
        }
      ]}
      whySection={{
        title: "Your Writing Is Your Revenue Protection Strategy",
        content: (
          <div className="space-y-6">
            <p>Customer Success isn't a support function — it's the revenue team that keeps the machine running. Your emails aren't just communication; they're retention strategy in action.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs mt-0.5">✓</div>
                <p className="m-0 leading-normal">Tone-optimized emails lead to measurably <strong>higher renewal rates</strong>.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs mt-0.5">✓</div>
                <p className="m-0 leading-normal">Trust built through writing is the <strong>best defense against churn</strong>.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs mt-0.5">✓</div>
                <p className="m-0 leading-normal">One tone-deaf email can <strong>undo months of trust-building</strong> work.</p>
              </li>
            </ul>
            <p><strong>The relationship economy.</strong> Customers stay for relationships, not just product. Your emails and Slack messages are the primary way those relationships are built and maintained. TextGlow ensures every touchpoint reinforces your value.</p>
          </div>
        )
      }}
      socialProof={[
        {
          quote: "My renewal rate went from 87% to 93% this year. I genuinely think better communication is the main reason.",
          author: "Jordan Alvarez",
          role: "Senior CSM, Clearbit"
        },
        {
          quote: "Consistency improved immediately. We no longer have customers requesting transfers because one CSM sounds warmer than another.",
          author: "Samara Okafor",
          role: "VP of Customer Success, Vercel"
        },
        {
          quote: "Our save rate on at-risk accounts improved by 20%. I spend my energy on strategy now and let TextGlow handle the delivery.",
          author: "Liam Chen",
          role: "CS Team Lead, Gong"
        }
      ]}
      faqs={[
        { q: "Does it work in Gainsight and Salesforce?", a: "Yes. TextGlow works inside web-based Gainsight, ChurnZero, Vitally, Catalyst, Salesforce, and HubSpot." },
        { q: "Can it help with renewal emails?", a: "Absolutely. The Persuasive tone is ideal for framing renewals around value rather than just a transaction." },
        { q: "Will it make my emails sound generic?", a: "No. It rewrites your specific customer context and strategic intent. It sounds like you on your best day." },
        { q: "Does it work for Slack with customers?", a: "Yes. TextGlow works in Slack message composers, including DMs and Slack Connect shared channels." }
      ]}
    />
  );
};
