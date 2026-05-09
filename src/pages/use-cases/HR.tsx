import React from 'react';
import { UseCaseLayout } from '../../components/layout/UseCaseLayout';

export const HR: React.FC = () => {
  return (
    <UseCaseLayout
      meta={{
        title: "AI Writing Assistant for HR Teams — Clear & Empathetic | TextGlow",
        description: "Improve employee experience and employer branding. Use TextGlow to rewrite internal announcements, sensitive emails, and recruiting outreach in the right tone.",
        url: "/use-cases/hr/"
      }}
      hero={{
        title: "HR Writes the Most Sensitive Emails in the Company — 50 Times a Day",
        description: "Every email from HR represents the entire organization. TextGlow rewrites your HR communications with exactly the right tone — inside Gmail, Outlook, BambooHR, Greenhouse, or any web-based platform."
      }}
      problem={{
        title: "The Highest-Stakes Writing in the Building",
        content: (
          <div className="space-y-6">
            <p>HR professionals write emails that change people's lives. An offer letter is the beginning of someone's next chapter. A rejection email shapes how a candidate talks about your company for years. A termination notice is the worst email someone will receive that decade.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">40%</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Time spent writing</div>
                <p className="mt-3 text-sm">HR professionals spend approximately 40% of their working hours on written communication.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">72%</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Negative sharing</div>
                <p className="mt-3 text-sm">72% of candidates share negative hiring experiences with their network, often triggered by a poorly worded rejection.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">Unified</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Brand Voice</div>
                <p className="mt-3 text-sm">Consistency across the team ensures your company speaks with one voice regardless of who is writing.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">Legal</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Compliance</div>
                <p className="mt-3 text-sm">Getting tone right isn't just about feelings — it's about reducing liability in sensitive communications.</p>
              </div>
            </div>
            <p><strong>The emotional labor problem.</strong> Writing your 47th genuinely empathetic rejection email of the day is exhausting. TextGlow catches you when your energy can't keep up with your intention, ensuring every candidate gets your best.</p>
          </div>
        )
      }}
      howItWorks={{
        platforms: ["BambooHR", "Workday", "Greenhouse", "Lever", "Gmail", "Outlook", "Slack", "LinkedIn Recruiter"],
        tonesTable: [
          { tone: "Empathetic", bestFor: "Rejection emails, difficult conversations, layoff notifications", scenario: "Writing a rejection that preserves employer brand" },
          { tone: "Professional", bestFor: "Offer letters, policy updates, formal announcements", scenario: "Official correspondence that needs gravitas without stiffness" },
          { tone: "Friendly", bestFor: "Onboarding, welcome emails, culture communications", scenario: "Making new hires feel genuinely welcomed" },
          { tone: "Direct", bestFor: "Policy enforcement, deadline reminders", scenario: "When clarity matters more than comfort" },
          { tone: "Enthusiastic", bestFor: "Job postings, employer branding", scenario: "Attracting candidates with high energy language" },
          { tone: "Confident", bestFor: "Leadership announcements, strategic updates", scenario: "Communicating organizational change with assurance" }
        ]
      }}
      useCases={[
        {
          title: "1. Rejection After Final Interview",
          tone: "Empathetic",
          before: "Hi Sarah, Thanks for interviewing for the Marketing Manager position. We decided to go with another candidate. Good luck with your job search.",
          after: "Hi Sarah, Thank you so much for the time and energy you invested in interviewing for the Marketing Manager role. Your presentation on brand repositioning was genuinely impressive, and the team really enjoyed the conversation. After a lot of deliberation, we've decided to move forward with another candidate whose background was a closer match for the specific challenges we're facing right now. This was not an easy decision — you were a strong finalist. I'd love to stay connected. We're growing quickly, and I could absolutely see a fit for you here as new roles open up. Would it be okay if I reached out when something relevant comes up?"
        },
        {
          title: "2. Offer Letter Congratulations",
          tone: "Enthusiastic",
          before: "Hi James, We are pleased to inform you that you have been selected for the Senior Software Engineer role. Your start date is March 15. Please review the attached offer letter and let us know if you have questions.",
          after: "Hi James, I'm thrilled to share the news — we'd like to officially offer you the Senior Software Engineer position! The entire interview panel was blown away by your system design walkthrough, and we can't wait to see what you build with us. Your start date is March 15, and I've attached the full offer letter with all the details on compensation, benefits, and equity. Take your time reviewing everything, and don't hesitate to reach out with any questions — I'm here to make this process as smooth as possible. We're genuinely excited to have you join the team. Welcome to Alder!"
        },
        {
          title: "3. Announcing a Policy Change",
          tone: "Empathetic",
          before: "Effective June 1, the company is updating the remote work policy. Employees will be required to be in the office 3 days per week, up from 2. Please see the updated policy document attached. Direct questions to your manager.",
          after: "Hi everyone, I want to share an update to our hybrid work schedule that takes effect June 1, and I want to be straightforward about what's changing and why. Starting June 1, we're moving from 2 in-office days to 3 per week. I know this isn't the news many of you were hoping for, and I understand that. This shift comes after looking closely at collaboration patterns across teams — we've seen that our most productive cross-functional work happens during in-person overlap, and we want to create more space for that. [Full details follow...]"
        },
        {
          title: "4. Responding to an Employee Complaint",
          tone: "Empathetic",
          before: "Hi Marcus, I received your complaint about your team lead. We take these matters seriously. We will look into it. HR will follow up with you once we have more information.",
          after: "Hi Marcus, Thank you for bringing this to my attention — I know it isn't easy to raise concerns like this, and I genuinely appreciate your willingness to speak up. It matters. I want you to know that I've read your account carefully and I'm taking it seriously. Here's what happens next: I'll be looking into the situation over the next 5 business days, everything is being handled confidentially, and I'll check in with you by next Friday at the latest. You did the right thing by raising this, Marcus. I'm on it."
        },
        {
          title: "5. Passive Candidate Outreach",
          tone: "Friendly",
          before: "Hi Priya, I came across your profile and was impressed by your experience. We have a great opportunity at our company that I think would be a perfect fit. We're a leading provider of cloud infrastructure solutions. Would you be open to a quick chat? Let me know your availability.",
          after: "Hi Priya, Your work on the event-driven architecture at Stripe caught my eye — particularly the write-up you shared on reducing message processing latency. Really impressive stuff. I'm reaching out because we're building something similar at Alder. I'd just love to share more about what we're working on over a quick coffee chat. Even if the timing isn't right, I'd enjoy the conversation. Would you be open to 20 minutes sometime next week?"
        },
        {
          title: "6. Communicating Benefits Changes",
          tone: "Professional",
          before: "Dear Employees, We are making changes to the dental plan. Effective Q3, we will transition from Delta Dental PPO to Guardian PPO. Please review the attached comparison document for details on coverage differences. Open enrollment for the new plan will be held July 10-24. Contact benefits@company.com with questions.",
          after: "Hi everyone, I'm writing to share an update to our dental benefits that takes effect in Q3, along with what it means for you and your family. We're transitioning from Delta Dental PPO to Guardian PPO. Why? Guardian offers broader in-network coverage in our regions and adds orthodontic coverage for dependents — a benefit many of you have requested. Your monthly premium is unchanged. Preventive care remains 100% covered. I've attached a side-by-side comparison so you can see exactly what's different."
        }
      ]}
      whySection={{
        title: "Your Emails Shape Your Entire Company Brand",
        content: (
          <div className="space-y-6">
            <p>HR doesn't just send emails. HR sends emails that people screenshot, forward to partners, and post on Glassdoor. The stakes are categorically different from other departments.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs mt-0.5">✓</div>
                <p className="m-0 leading-normal">Every rejection is a <strong>brand impression</strong> that lasts years.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs mt-0.5">✓</div>
                <p className="m-0 leading-normal">Tone has <strong>legal implications</strong> in HR that other departments don't face.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs mt-0.5">✓</div>
                <p className="m-0 leading-normal">Consistency ensures the company speaks with <strong>one trusted voice</strong>.</p>
              </li>
            </ul>
            <p><strong>Your employer brand starts with how you write.</strong> Before a candidate ever visits your careers page, they've received an email from your recruiter. Before an employee forms an opinion about a policy change, they've read your announcement. The writing IS the experience.</p>
          </div>
        )
      }}
      socialProof={[
        {
          quote: "I can give 200 candidates per month the same level of care I used to give 30. TextGlow ensures every rejection preserves our brand.",
          author: "Rachel Huang",
          role: "HR Director, Lattice Systems"
        },
        {
          quote: "Our response rate jumped from 12% to 23% after using Friendly tone for outreach. It's the highest ROI tool we've added this year.",
          author: "DeShawn Williams",
          role: "Head of Talent Acquisition"
        },
        {
          quote: "TextGlow's Empathetic tone keeps me grounded when I'm running on fumes. Our communication quality has gotten significantly more consistent.",
          author: "Katarina Novak",
          role: "People Operations Manager"
        }
      ]}
      faqs={[
        { q: "Does it work in Greenhouse and BambooHR?", a: "Yes. TextGlow works inside any web-based platform including Greenhouse, Lever, BambooHR, Workday, and any other HRIS or ATS." },
        { q: "Is it safe for sensitive HR communications?", a: "Yes. TextGlow processes text solely for rewriting and does not store or log your messages. For legally critical docs, we still recommend a final human review." },
        { q: "Can it help with job postings?", a: "Absolutely. The Enthusiastic tone is perfect for job descriptions that need to attract top talent by projecting energy and culture." },
        { q: "Can my whole team use it?", a: "Yes. Each team member installs the extension individually. Free for 10 rewrites/day, or $39/year for 150 rewrites/day." }
      ]}
    />
  );
};
