import React from 'react';
import { UseCaseLayout } from '../../components/layout/UseCaseLayout';

export const CustomerSupport: React.FC = () => {
  return (
    <UseCaseLayout
      meta={{
        title: "AI Writing Assistant for Customer Support — Empathy at Scale | TextGlow",
        description: "Improve customer satisfaction and response times. Use TextGlow to rewrite support tickets, emails, and live chat messages to be more empathetic and professional.",
        url: "/use-cases/customer-support/"
      }}
      hero={{
        title: "Your 47th Empathetic Response Today Shouldn't Sound Like It",
        description: "TextGlow helps you rewrite support replies in the right tone instantly, right inside the platform you already use. Empathetic, professional, concise — in just two clicks."
      }}
      problem={{
        title: "Why Customer Support Writing Breaks People",
        content: (
          <div className="space-y-6">
            <p>Support writing is a category of its own. It's not marketing copy, it's not internal email, it's not a Slack message to your teammate. It's high-volume, high-stakes, emotionally demanding writing that never stops coming.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">50–80</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Tickets per day</div>
                <p className="mt-3 text-sm">The average handle volume for most support agents, with high-volume teams pushing past 100.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">60%+</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Time spent writing</div>
                <p className="mt-3 text-sm">Agents spend the majority of their day composing replies, revising tone, and re-reading for clarity.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">2x</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Burnout rate</div>
                <p className="mt-3 text-sm">Support roles have a burnout rate nearly double the average for office positions.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">73%</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Customer churn</div>
                <p className="mt-3 text-sm">Customers say they'll switch to a competitor after a single poor support experience.</p>
              </div>
            </div>
            <p><strong>The empathy paradox.</strong> Ticket number one of the day gets your full attention. Ticket number 47 gets whatever you have left. But the customer on ticket 47 doesn't know they're ticket 47. They expect the same quality as ticket one. That gap is where customer relationships quietly fall apart.</p>
            <p><strong>The ChatGPT workaround doesn't work at support volume.</strong> Switching to a separate tab adds 2 to 3 minutes per ticket. At 60 tickets a day, that's an extra 2 to 3 hours of tab-switching. For a job that already stretches people thin, that's not a solution — it's another problem.</p>
            <p><strong>Tone consistency across a team is nearly impossible to manage.</strong> When you have 5, 10, or 20 agents writing independently, your brand voice fragments. Customers might get a warm reply on Monday and a cold one on Tuesday for the same issue.</p>
          </div>
        )
      }}
      howItWorks={{
        platforms: ["Zendesk", "Intercom", "Freshdesk", "HelpScout", "Front", "Crisp", "Hubspot", "Live Chat"],
        tonesTable: [
          { tone: "Empathetic", bestFor: "Complaints, frustrated customers, escalations", scenario: "Customer has been waiting 5 days for a response" },
          { tone: "Professional", bestFor: "Refund denials, policy explanations, formal responses", scenario: "Explaining why a request falls outside your return window" },
          { tone: "Friendly", bestFor: "Onboarding, feature questions, happy customers", scenario: "New user asking how to connect their account" },
          { tone: "Concise", bestFor: "Status updates, quick confirmations, FAQ answers", scenario: "Confirming a replacement has shipped" },
          { tone: "Direct", bestFor: "Setting expectations, deadline communication", scenario: "Letting a customer know a feature won't be built yet" }
        ]
      }}
      useCases={[
        {
          title: "1. Angry customer about a billing error",
          tone: "Empathetic",
          before: "Hi, I looked into this and it seems like you were double charged because of a system issue on our end. I've refunded the extra charge. It should show up in 3-5 business days. Sorry about that.",
          after: "Hi Marcus, I completely understand how frustrating it must be to see an unexpected charge on your account — that's not the experience we want for you. I've looked into this thoroughly, and you're absolutely right: a system error on our end caused a duplicate charge. I've already processed a full refund for the extra amount, and you should see it reflected in your account within 3 to 5 business days. I'm truly sorry for the inconvenience, and I appreciate you bringing this to our attention so we could make it right."
        },
        {
          title: "2. Feature request you can't fulfill",
          tone: "Professional",
          before: "Thanks for the suggestion. Unfortunately that's not something we're planning to build right now. I'll pass it along to the team though. Let me know if you need anything else.",
          after: "Thank you for taking the time to share this suggestion — we genuinely value input from our users when considering our product direction. At this time, this feature is not on our current development roadmap. However, I've documented your request and shared it with our product team, as user feedback plays a direct role in how we prioritize future updates. If this changes, we'll be sure to communicate it through our product changelog. Please don't hesitate to reach out if there's anything else I can assist you with."
        },
        {
          title: "3. Refund denial (policy-based)",
          tone: "Professional",
          before: "Hi, I checked your account and your purchase was made 45 days ago. Our refund policy is 30 days so unfortunately I can't process a refund. I understand this is disappointing. You can review our full policy here.",
          after: "Hi Priya, thank you for reaching out about this. I've reviewed your account and can confirm that your purchase was made on March 24th, which is 45 days ago. Our refund policy allows returns within 30 days of purchase, and unfortunately, this request falls outside that window, so I'm unable to process a refund at this time. I understand this isn't the answer you were hoping for, and I'm sorry for the inconvenience. For reference, our complete refund policy is available here: [link]. If there's anything else I can help with, or if you'd like to explore other options such as a credit toward a future purchase, I'm happy to assist."
        },
        {
          title: "4. Customer confused about how to use a feature",
          tone: "Friendly",
          before: "To export your data, go to Settings, then Data, then click Export. You can choose CSV or PDF. It takes a few minutes for large files. Let me know if you have questions.",
          after: "Great question! Exporting your data is pretty straightforward — here's a quick walkthrough. Head to your Settings page (the gear icon in the top right), then click on the Data tab. From there, you'll see an Export button right at the top. You can choose between CSV or PDF depending on what works best for you. Once you hit export, it might take a minute or two if you have a lot of data, but you'll get a notification as soon as it's ready to download. If anything looks off or you get stuck along the way, just let me know — I'm happy to walk you through it step by step!"
        },
        {
          title: "5. Apologizing for a service outage",
          tone: "Empathetic",
          before: "Hi, yes we had an outage yesterday from 2-5pm EST. The issue has been resolved. We apologize for any disruption to your workflow. Everything should be working normally now.",
          after: "Hi Jordan, I want to sincerely apologize for the disruption you experienced yesterday. We had a service outage between 2:00 PM and 5:00 PM EST that affected your account, and I understand how disruptive that must have been to your workflow, especially mid-afternoon. Our engineering team identified and resolved the root cause, and the service has been fully restored since yesterday evening. We take reliability seriously, and we know that an outage like this impacts your ability to do your work — that's not something we take lightly. Everything should be running smoothly now, but if you notice any lingering issues at all, please reach out immediately and we'll prioritize getting you back on track."
        },
        {
          title: "6. Following up on an unresolved ticket",
          tone: "Friendly",
          before: "Hi, I'm following up on your ticket from last week. We're still looking into the issue with your dashboard loading slowly. I don't have an update yet but wanted to let you know we haven't forgotten. I'll update you when I know more.",
          after: "Hi Alex, just wanted to check in on the dashboard loading issue you reported last week. I know waiting without a clear answer is never fun, and I want you to know that your ticket is very much on our radar. Our team is actively investigating what's causing the slowdown on your account specifically, and we're making progress. I don't have a resolution to share just yet, but I didn't want you to wonder if this fell through the cracks — it definitely hasn't. I'll reach out again as soon as we have a concrete update, and in the meantime, if the issue gets worse or you notice anything new, please let me know right away."
        }
      ]}
      whySection={{
        title: "Tone Isn't a Nice-to-Have in Support. It's the Whole Game.",
        content: (
          <div className="space-y-6">
            <p>In most professional writing, tone is one factor among many. In customer support, tone often <strong>is</strong> the resolution. A customer who gets a well-toned response to a problem that can't be fixed walks away feeling heard. A customer who gets a poorly-toned response to a problem that was fixed walks away feeling dismissed.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs mt-0.5">✓</div>
                <p className="m-0 leading-normal"><strong>68% of customers leave</strong> because they feel a company is indifferent to them.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs mt-0.5">✓</div>
                <p className="m-0 leading-normal">An empathetic response makes a customer <strong>6x more likely</strong> to make another purchase.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs mt-0.5">✓</div>
                <p className="m-0 leading-normal">It takes <strong>12 positive experiences</strong> to make up for a single negative one.</p>
              </li>
            </ul>
            <p><strong>The emotional labor problem is structural, not personal.</strong> Support agents aren't bad at empathy. They're burned out from performing it 60 times a day. TextGlow doesn't replace your empathy. It catches you when your energy can't keep up with your intention.</p>
          </div>
        )
      }}
      socialProof={[
        {
          quote: "We rolled it out to the whole team in January and our CSAT went up 14 points in two months. No other process change, just better writing.",
          author: "Rachel Dominguez",
          role: "Support Lead at a mid-market SaaS company"
        },
        {
          quote: "It genuinely reduced our average handle time by about 40 seconds per ticket because agents stopped agonizing over wording. At our volume, that adds up to hours every week.",
          author: "James Okoye",
          role: "Customer Success Manager at an e-commerce platform"
        },
        {
          quote: "It's not replacing me, it's just keeping me consistent when I'm drained. I hit the Empathetic tone and it came back sounding like the version of me at 9 AM on a Monday.",
          author: "Tomás Reyes",
          role: "Senior Support Agent at a fintech startup"
        }
      ]}
      faqs={[
        { q: "Does TextGlow work in Zendesk, Intercom, and Freshdesk?", a: "Yes. TextGlow is a Chrome extension that works inside any web-based text field, which means it functions natively inside Zendesk, Intercom, Freshdesk, HelpScout, Front, Crisp, and any other support platform you use in your browser." },
        { q: "Can my whole team use it?", a: "Yes. Each agent installs the TextGlow Chrome extension individually. On the Free plan, every agent gets 10 rewrites per day. For teams with higher volume, the Pro plan provides 150 rewrites per day at $39 per year per person." },
        { q: "Does it use canned responses or templates?", a: "No. TextGlow doesn't insert pre-written text. It rewrites the draft you've already written, preserving your specific content, details, and resolution while adjusting the tone. Every rewrite is unique." },
        { q: "Will my responses sound robotic or AI-generated?", a: "No. TextGlow is specifically designed to make your writing sound more natural, not less. It preserves your voice and your message — it just adjusts how the tone comes across." },
        { q: "Is customer data safe? Does TextGlow store ticket content?", a: "TextGlow processes your text solely for the purpose of rewriting it. Your text is sent to the AI, rewritten, and returned — it is not stored, logged, or used for training." },
        { q: "Does TextGlow handle multiple languages?", a: "Yes. TextGlow can rewrite text in a wide range of languages including Spanish, German, French, Portuguese, and more. It will rewrite in the same language as your draft." }
      ]}
    />
  );
};
