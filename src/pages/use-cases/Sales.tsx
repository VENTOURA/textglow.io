import React from 'react';
import { UseCaseLayout } from '../../components/layout/UseCaseLayout';

export const Sales: React.FC = () => {
  return (
    <UseCaseLayout
      meta={{
        title: "AI Sales Email Writer — Rewrite Cold Outreach That Converts",
        description: "Rewrite sales emails in the right tone instantly. TextGlow helps SDRs and AEs craft cold outreach, follow-ups, and proposals that sound confident, not pushy. Chrome extension.",
        url: "/sales"
      }}
      hero={{
        title: "Your Cold Email Sounds Exactly Like the Last 11 They Deleted",
        description: "The gap between 'confident' and 'pushy' is razor-thin. TextGlow helps you rewrite your sales outreach in the right tone instantly, right inside Gmail, LinkedIn, or your CRM."
      }}
      problem={{
        title: "The Brutal Math of Cold Outreach",
        content: (
          <div className="space-y-6">
            <p>Sales outreach has a numbers problem, and most reps are trying to solve it with volume when they should be solving it with quality. The cold reality is that most outreach is ignored because it lacks the right tone calibration.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">1–3%</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Response rate</div>
                <p className="mt-3 text-sm">Average cold email response rates are brutal. 97% of people ignore your outreach entirely.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">21 hrs</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Writing per week</div>
                <p className="mt-3 text-sm">Top-performing reps spend nearly half their working time on email-related activities.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">5+</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Follow-ups needed</div>
                <p className="mt-3 text-sm">80% of sales require 5 or more touches, but most reps give up after 2 because writing follow-ups is hard.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">80%</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Deleted on sight</div>
                <p className="mt-3 text-sm">Prospects can spot a generic AI template or a mass-blast first-name token in seconds.</p>
              </div>
            </div>
            <p><strong>The tone tightrope.</strong> You need to be confident but not arrogant, persistent but not annoying, personal but not creepy, and urgent but not desperate. Walking this line manually for 60 emails a day is impossible.</p>
            <p><strong>The ChatGPT workaround fails.</strong> ChatGPT writes like ChatGPT — and after two years of AI-generated emails flooding inboxes, prospects spot the cadence instantly. TextGlow rewrites <em>your</em> words in <em>your</em> voice.</p>
          </div>
        )
      }}
      howItWorks={{
        platforms: ["Gmail", "Outlook", "LinkedIn", "Sales Navigator", "Salesforce", "HubSpot", "Outreach", "Salesloft"],
        tonesTable: [
          { tone: "Persuasive", bestFor: "Cold outreach, value propositions", scenario: "First touch to a new prospect" },
          { tone: "Confident", bestFor: "Follow-ups, meeting requests", scenario: "They know who you are; move them toward a decision" },
          { tone: "Friendly", bestFor: "Warm intros, networking, referral asks", scenario: "There's a mutual connection or shared context" },
          { tone: "Professional", bestFor: "Enterprise prospects, C-suite outreach", scenario: "The recipient expects a certain formal standard" },
          { tone: "Direct", bestFor: "Re-engagement, deadline nudges", scenario: "You've earned the right to be straightforward" }
        ]
      }}
      useCases={[
        {
          title: "1. Cold email to a prospect",
          tone: "Persuasive",
          before: "Hi Sarah, I'm reaching out because I think our platform could help your team with productivity. We work with companies like yours and have seen great results. Would you be open to a quick call to learn more?",
          after: "Hi Sarah, I noticed your team at Meridian recently expanded from 40 to 65 people in six months — that kind of growth usually means your existing workflows are under serious pressure. We built Claro specifically for operations teams navigating that scale-up phase, and companies in a similar position have cut their project turnaround time by about 30% within the first quarter. I'd love to share how that would look for Meridian specifically. Would a 15-minute call on Thursday or Friday work for you?"
        },
        {
          title: "2. Follow-up after no response",
          tone: "Confident",
          before: "Hi Sarah, just wanted to follow up on my last email. I know you're busy but I think this could really help your team. Would love to chat if you have a few minutes. Let me know either way!",
          after: "Hi Sarah, I wanted to circle back with something specific. Since my last note, we published a case study with Halo Group — they were in a similar growth stage to Meridian and facing the same workflow bottlenecks. The results are worth a look: they reduced their project cycle time by 34% in 90 days. I've linked it below. If it resonates, I'm available for a brief call this week. If the timing isn't right, no worries at all — I'll follow up next quarter."
        },
        {
          title: "3. Meeting request to a C-suite exec",
          tone: "Professional",
          before: "Hey David, I've been following what your company's been doing and I'd love to pick your brain about how you handle operational scaling. Could we grab 15 minutes sometime? I think there are some interesting synergies.",
          after: "David, I've been following Westbrook's expansion into the APAC region — the operational complexity of scaling across three new markets simultaneously is significant, and it's a challenge we've helped several companies in your sector navigate. I'd welcome the opportunity to share a few specific insights from those engagements. Would 15 minutes on your calendar this week or next be feasible? I'm happy to work around your schedule."
        },
        {
          title: "4. Post-demo follow-up",
          tone: "Confident",
          before: "Hi Sarah, thanks for taking the time for the demo yesterday. I think it went well and I hope you saw how our tool could fit with your workflow. Let me know if you have any questions or want to discuss next steps.",
          after: "Hi Sarah, thanks for the conversation yesterday. Two things stood out from our demo that I want to highlight. First, the workflow automation you asked about for your onboarding process — I confirmed with our team that we can replicate that exact sequence, and I've attached a short walkthrough showing how it would work for your use case. Second, the integration with your existing Notion setup is straightforward and wouldn't require any migration. I've put together a custom proposal reflecting what we discussed, including the team pricing for 65 seats. I'll send that over by end of day tomorrow. In the meantime, would it make sense to schedule a call with your Head of Ops to walk through the technical details?"
        },
        {
          title: "5. Re-engaging a cold lead",
          tone: "Direct",
          before: "Hi Sarah, we spoke about 4 months ago about using our platform but the timing wasn't right. I wanted to check back in and see if things have changed. We've added some cool new features since then. Want to reconnect?",
          after: "Hi Sarah, we last spoke in January when your team was mid-reorg and the timing wasn't right for a new tool. Two things have changed since then that might shift the calculus. We launched an automated reporting feature that directly addresses the bottleneck you mentioned around weekly status updates. And based on your last quarterly report, it looks like the team restructure has settled — which was the main blocker last time. Worth a fresh 15-minute look? If not, just say the word and I'll check back after Q3."
        },
        {
          title: "6. Responding to a pricing objection",
          tone: "Persuasive",
          before: "I understand the price seems high but when you factor in all the features included and the time savings, it's actually very competitive. Most of our customers see ROI within the first month. I can also check with my manager about a possible discount.",
          after: "That's a completely fair question, and I want to make sure the investment makes sense for your team before we move forward. Here's how I'd think about it: your team currently spends roughly 15 hours a week on the manual reporting process you described. At your team's average fully-loaded cost, that's approximately $4,200 a month in labor. Our annual plan comes to $1,100 a month. Even if we only cut that reporting time in half — and most teams see closer to a 70% reduction — you're looking at a net savings of about $1,000 a month starting in month one. I'd rather you see those numbers and make the call that's right for Meridian than push for a close that doesn't hold up."
        }
      ]}
      whySection={{
        title: "In Sales, Tone IS the Product",
        content: (
          <div className="space-y-6">
            <p>Here's a truth that separates top-performing sales reps from everyone else: they're not writing fundamentally different content. They're writing in a different <strong>tone</strong>. And that difference is the difference between a 2% response rate and an 8% one.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs mt-0.5">✓</div>
                <p className="m-0 leading-normal">Emails matching the recipient's style see response rates <strong>up to 3x higher</strong>.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs mt-0.5">✓</div>
                <p className="m-0 leading-normal">Pushy or aggressive emails are <strong>60% more likely</strong> to be marked as spam.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs mt-0.5">✓</div>
                <p className="m-0 leading-normal">Reps focusing on tone and personalization close <strong>28% more deals</strong>.</p>
              </li>
            </ul>
            <p><strong>The instinct of top performers.</strong> Top-quartile sellers instinctively match the energy of their recipient. They write differently to a VP of Engineering than to a Head of Marketing. TextGlow gives this high-level instinct to every rep on day one.</p>
          </div>
        )
      }}
      socialProof={[
        {
          quote: "I started using TextGlow to rewrite every first-touch email in Persuasive tone, and my response rate climbed from 2% to 5%. I booked 9 additional meetings in my first month.",
          author: "Dani Park",
          role: "Senior SDR at a B2B SaaS company"
        },
        {
          quote: "The thing I use it for most is follow-ups. Writing follow-up number three without sounding desperate? That's where I always struggled. Now I hit Confident and it just works.",
          author: "Michael Tran",
          role: "Account Executive at a cloud infrastructure company"
        },
        {
          quote: "Our enterprise response rate is up 40% this quarter and I genuinely attribute most of that to just sounding more professional and calibrated.",
          author: "Angela Russo",
          role: "Director of Sales Development"
        }
      ]}
      faqs={[
        { q: "Does TextGlow work with Salesforce and HubSpot?", a: "Yes. TextGlow works inside the web versions of Salesforce, HubSpot, and any other CRM or sales engagement platform that runs in your browser. No integration is required." },
        { q: "Can I use it for LinkedIn InMails and connection requests?", a: "Yes. TextGlow works inside LinkedIn's message composer, InMail windows, and connection request note fields. This is especially useful for Sales Navigator outreach." },
        { q: "Will my emails sound templated or generic?", a: "No. TextGlow rewrites the specific draft you wrote — your details, your personalization, your points. It adjusts tone, not content. The result sounds like your best writing." },
        { q: "Does TextGlow write emails from scratch?", a: "No, and that's by design. You write the rough version with your research and value prop, and TextGlow improves the delivery. You bring the substance; TextGlow brings the tone." },
        { q: "Is TextGlow compliant for sales outreach?", a: "TextGlow is a writing tool, similar to Grammarly. It doesn't send emails or automate sequences. Your outreach compliance obligations (CAN-SPAM, GDPR, etc.) remain the same." }
      ]}
    />
  );
};
