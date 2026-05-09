import React from 'react';
import { UseCaseLayout } from '../../components/layout/UseCaseLayout';

export const JobApplications: React.FC = () => {
  return (
    <UseCaseLayout
      meta={{
        title: "TextGlow for Job Seekers — AI Writing Assistant",
        description: "Stand out to recruiters. Use TextGlow to rewrite your cover letters, LinkedIn messages, and follow-up emails to sound confident and professional.",
        url: "/job-applications/"
      }}
      hero={{
        title: "The Most Important Emails You'll Ever Write, and You're Writing Them Stressed",
        description: "Don't let anxiety or 'cover-letter fatigue' ruin your chances. TextGlow rewrites your job application emails in the right tone instantly, right inside Gmail, LinkedIn, or any career portal."
      }}
      problem={{
        title: "Why Job Application Writing Feels So Impossibly Hard",
        content: (
          <div className="space-y-6">
            <p>Job application writing isn't just hard writing. It's high-stakes writing under stress, often with zero feedback until it's too late. The tone you use determines whether a recruiter keeps reading past those first 6 seconds.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">6–7 secs</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Recruiter scan time</div>
                <p className="mt-3 text-sm">Recruiters form a first impression almost instantly. Tone registers before content does.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">2x</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Advancement rate</div>
                <p className="mt-3 text-sm">Applications with a confident, specific tone are twice as likely to advance to an interview.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">250</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Avg applicants per role</div>
                <p className="mt-3 text-sm">In a massive stack, generic applications disappear. calibrated ones stand out.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">45 mins</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Time per cover letter</div>
                <p className="mt-3 text-sm">Overthinking lead to 'stiff' writing. TextGlow cuts this time down while improving quality.</p>
              </div>
            </div>
            <p><strong>The tone trap.</strong> You need to be confident but not arrogant, enthusiastic but not desperate, professional but not stiff, and unique but not 'try-hard'. threading this needle while job-hunting is exhausting.</p>
            <p><strong>Cover letter fatigue is real.</strong> Your 1st cover letter is great. Your 80th is a copy-pasted mess. TextGlow keeps your tone consistent and sharp across the entire search — your 120th email sounds as considered as your first.</p>
          </div>
        )
      }}
      howItWorks={{
        platforms: ["Gmail", "LinkedIn", "Greenhouse", "Lever", "Workday", "BambooHR", "Outlook", "Indeed"],
        tonesTable: [
          { tone: "Professional", bestFor: "Cover letters, formal applications, large corporations", scenario: "Applying to a Fortune 500 company" },
          { tone: "Confident", bestFor: "Salary negotiations, highlighting achievements", scenario: "Responding to a compensation offer" },
          { tone: "Friendly", bestFor: "Startup applications, casual company cultures", scenario: "Applying to a company whose listing uses humor" },
          { tone: "Persuasive", bestFor: "Networking emails, referral introductions", scenario: "Asking a contact to refer you internally" },
          { tone: "Enthusiastic", bestFor: "Dream jobs, passion-driven roles", scenario: "Applying to a company you've followed for years" }
        ]
      }}
      useCases={[
        {
          title: "1. Cover letter opening paragraph",
          tone: "Professional",
          before: "I am writing to apply for the Product Manager position at Northlight. I have 5 years of experience in product management and I am excited about this opportunity. I believe my skills and experience make me a strong candidate for this role.",
          after: "Northlight's approach to building collaborative design tools for distributed teams resonates strongly with my experience leading product at two fully remote companies. Over the past five years, I've shipped products used by over 200,000 users and led cross-functional teams through three zero-to-one product launches — each focused on solving the exact kind of async collaboration challenges Northlight is tackling. I'd welcome the chance to bring that perspective to your Product Manager role."
        },
        {
          title: "2. Email to recruiter after applying",
          tone: "Friendly",
          before: "Hi Jennifer, I recently applied for the Marketing Analyst role and wanted to follow up. I have experience in marketing analytics and I think I would be a good fit. I've attached my resume for your reference. I look forward to hearing from you.",
          after: "Hi Jennifer, I just submitted my application for the Marketing Analyst role and wanted to reach out directly. I've spent the last three years deep in marketing analytics at a Series B startup — everything from building attribution models to running experiments that actually changed how we allocated budget. When I saw that your team is building out its analytics function from the ground up, I got genuinely excited because that's exactly the kind of work I do best. I'd love to chat about it if you think there's a fit. Thanks for taking the time to read this!"
        },
        {
          title: "3. Thank-you email after interview",
          tone: "Professional",
          before: "Hi David, thank you for taking the time to interview me today. I enjoyed learning about the role and the company. I think my experience would be a great fit. I look forward to hearing about next steps.",
          after: "Hi David, thank you for the conversation today — I especially appreciated the candor about the challenges your team is facing with the platform migration. It gave me a much clearer picture of where this role fits into the broader strategy. Our discussion about balancing technical debt with feature velocity particularly resonated with me, as that was the central tension I navigated during the replatforming project at Cascadia. I left the conversation more excited about this opportunity than when I walked in. Please don't hesitate to reach out if there's any additional information I can provide as you move through the process."
        },
        {
          title: "4. Salary negotiation email",
          tone: "Confident",
          before: "Hi Lisa, thanks for the offer. I'm really excited about the role. I was hoping we could discuss the salary a bit. The offer is $95,000 but based on my research I was hoping for something closer to $110,000. I totally understand if that's not possible and I'm flexible. Let me know what you think.",
          after: "Hi Lisa, thank you for the offer — I'm genuinely enthusiastic about joining the team and contributing to the work you described during our conversations. I'd like to discuss the compensation component before finalizing. Based on my research into market rates for this role in the Denver area, combined with the seven years of directly relevant experience I bring — including the infrastructure project at Riverton that mirrors your current roadmap — I believe a base salary in the range of $108,000 to $112,000 more accurately reflects the value I'd deliver from day one. I'm confident we can find a number that works for both of us. Would you be open to discussing this further?"
        },
        {
          title: "5. Following up after no response",
          tone: "Professional",
          before: "Hi Jennifer, I applied for the Marketing Analyst role about two weeks ago and haven't heard back. I just wanted to make sure my application was received. I'm very interested in this position and would appreciate any update on the timeline. Thanks!",
          after: "Hi Jennifer, I hope your week is going well. I submitted my application for the Marketing Analyst position approximately two weeks ago and wanted to follow up. I remain very interested in this opportunity, particularly given Blackthorn's recent expansion into performance marketing analytics. I understand the review process takes time and I appreciate your patience in working through the applicant pool. If it would be helpful to have any additional materials from me — work samples, references, or a brief portfolio of relevant projects — I'm happy to provide them. Thank you for your consideration."
        },
        {
          title: "6. Networking email to someone at a target company",
          tone: "Persuasive",
          before: "Hi Rachel, I found your profile on LinkedIn and saw you work at Oakpoint as a Product Manager. I'm interested in product management roles there and was wondering if you'd be willing to chat about your experience. I'd appreciate any time you could give me.",
          after: "Hi Rachel, I came across your talk at ProductConf last month on building feedback loops into remote teams — it was one of the standout sessions and it directly changed how I think about user research at my current company. I noticed you've been at Oakpoint for about three years, which is an impressive tenure in product at a company that's scaling as quickly as they are. I'm actively exploring PM roles right now and Oakpoint has been at the top of my list since I started following your team's product updates. Would you be open to a 20-minute conversation about your experience there? I'd love to learn what the team culture is like from someone on the inside. Happy to work around your schedule — and I'm glad to return the favor if there's ever anything I can help with on my end."
        }
      ]}
      whySection={{
        title: "The Highest-Stakes Writing Most People Ever Do",
        content: (
          <div className="space-y-6">
            <p>Most professional writing has a safety net. Job application writing has none. A cover letter that strikes the wrong tone doesn't get a revision request — it gets a rejection. You send it, and it either works or it doesn't.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs mt-0.5">✓</div>
                <p className="m-0 leading-normal">Recruiters form a <strong>first impression in 6 seconds</strong>. Tone is evaluated before content.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs mt-0.5">✓</div>
                <p className="m-0 leading-normal">Applications with a <strong>confident, specific tone</strong> are 2x more likely to advance.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs mt-0.5">✓</div>
                <p className="m-0 leading-normal">TextGlow eliminates 'cover letter fatigue' ensuring your 100th app is as sharp as your 1st.</p>
              </li>
            </ul>
            <p><strong>Tone signals competence.</strong> Before they've assessed your skills, they've formed an impression based on how your writing sounds. Confident tone signals competence. Clear language signals strong communication. TextGlow ensures these signals are working <em>for</em> you, not against you.</p>
          </div>
        )
      }}
      socialProof={[
        {
          quote: "I started using TextGlow to rewrite my cover letters in Professional tone and the difference was shocking. I got three interview requests in my first week.",
          author: "Kira Johanssen",
          role: "Marketing Coordinator"
        },
        {
          quote: "I was transitioning from teaching into UX design and my biggest challenge was sounding like a design pro. TextGlow's Confident tone completely changed how I presented myself.",
          author: "Andre Simmons",
          role: "UX Designer"
        },
        {
          quote: "At my level, every email is a negotiation. TextGlow cut my drafting time by half. My recruiter said my communication was 'unusually rewritten and consistent'.",
          author: "Catherine Liang",
          role: "VP of Operations"
        }
      ]}
      faqs={[
        { q: "Does TextGlow write cover letters from scratch?", a: "No. TextGlow rewrites your draft. You provide the experience and qualifications, and TextGlow adjusts the tone so it sounds rewritten and intentional." },
        { q: "Can it adapt tone for different company cultures?", a: "Yes. Use Professional for corporate roles, Friendly for startups, Enthusiastic for mission-driven roles, and Confident for executive positions." },
        { q: "Is it ethical to use AI for job applications?", a: "Yes. It's a writing tool, not a replacement for your own qualifications. It works like a highly advanced spell-check or having a mentor review your draft." },
        { q: "Does it work for LinkedIn applications?", a: "Yes. TextGlow works inside LinkedIn's message fields, InMails, connection requests, and Easy Apply text fields." },
        { q: "Will recruiters know I used AI?", a: "No. TextGlow rewrites your own words and ideas, so the output reads like a well-crafted human email. It doesn't use the 'generic' patterns typical of generated text." }
      ]}
    />
  );
};
