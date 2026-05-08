import React from 'react';
import { UseCaseLayout } from '../../components/layout/UseCaseLayout';

export const Academic: React.FC = () => {
  return (
    <UseCaseLayout
      meta={{
        title: "Email Your Professor With Confidence — AI Tone Tool | TextGlow",
        description: "Rewrite emails to professors, advisors, and admissions offices with the right tone. TextGlow helps students sound professional and clear. Free Chrome extension.",
        url: "/academic"
      }}
      hero={{
        title: "That Email to Your Professor Shouldn't Take an Hour to Write",
        description: "respectful, clear, and exactly the right tone for academic communication. TextGlow rewrites your student emails in one click, right inside Gmail, Outlook, or Canvas."
      }}
      problem={{
        title: "The Anxiety of the 'Send' Button",
        content: (
          <div className="space-y-6">
            <p>Nobody teaches you how to write a professional email — then everyone judges you for getting it wrong. You're emailing someone who controls your grade, your recommendation, or your admission. The stakes are real.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">60%</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Email stress</div>
                <p className="mt-3 text-sm">60% of students report significant stress about not knowing the 'right' tone when emailing professors.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">78%</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Intl. Student Anxiety</div>
                <p className="mt-3 text-sm">International students face even higher anxiety navigating unfamiliar academic communication norms.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">45m</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Avg drafting time</div>
                <p className="mt-3 text-sm">Students often spend 45-60 minutes drafting a single two-paragraph email to a professor.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-600 mb-2">#1</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Success factor</div>
                <p className="mt-3 text-sm">Professional communication is cited as a top factor in securing research and grad positions.</p>
              </div>
            </div>
            <p><strong>The academic power dynamic.</strong> You need to be respectful but not groveling, clear but not demanding, and personal but not unprofessional. Navigating this without guidance is a major source of campus stress.</p>
          </div>
        )
      }}
      howItWorks={{
        platforms: ["Gmail", "Outlook", "Canvas", "Blackboard", "Slack", "LinkedIn", "Microsoft Teams"],
        tonesTable: [
          { tone: "Professional", bestFor: "Professor emails, admissions inquiries, formal requests", scenario: "Emailing a department chair about course enrollment" },
          { tone: "Empathetic", bestFor: "Extension requests, sensitive topics, recommendation asks", scenario: "Asking for extra time while explaining a personal circumstance" },
          { tone: "Confident", bestFor: "Research positions, scholarship essays", scenario: "Cold emailing a professor whose lab you want to join" },
          { tone: "Concise", bestFor: "Quick questions, confirmations, office hours", scenario: "Confirming a meeting time or asking a short clarifying question" },
          { tone: "Friendly", bestFor: "Peer collaboration, TA communication", scenario: "Organizing a study session with group members" }
        ]
      }}
      useCases={[
        {
          title: "1. Asking for a Deadline Extension",
          tone: "Professional",
          before: "Dear Professor Chen, I am so so sorry to bother you with this. I know everyone probably asks for this and I feel terrible. I was wondering if there was any possibility at all of getting an extension on the research paper? I've been dealing with some stuff and I'm really struggling. I completely understand if you can't. I'm so sorry for even asking. Thank you so much for your time.",
          after: "Dear Professor Chen, I'm writing to request a two-day extension on the research paper due this Friday. I've been managing a family situation this week that has significantly impacted my ability to give the paper the depth it deserves. I have a solid draft completed and am confident that two additional days would allow me to submit work that meets the standard of the course. I'm happy to discuss this further during office hours if that would be helpful. Thank you for considering this."
        },
        {
          title: "2. Grade Dispute Email",
          tone: "Professional",
          before: "Hi Professor Davis, I just got my grade back for the midterm and I got a B- which I really don't think is fair. I studied really hard for this exam and I know the material. I think there might have been an error in the grading because some of my answers were basically the same as what was discussed in lecture. Can you regrade it?",
          after: "Dear Professor Davis, I'm writing regarding my midterm grade. After reviewing my exam, I noticed two areas where I believe my responses may not have received full credit, and I wanted to bring them to your attention. Specifically, my answer on question 7 (regarding market equilibrium) closely follows the framework you presented in the October 12 lecture, and my response to question 14 cites the Krugman reading from Week 5. I've attached photos of my exam with the relevant sections highlighted. Would it be possible to meet during office hours to review these together? I appreciate your time and want to make sure I understand the grading criteria so I can improve going forward."
        },
        {
          title: "3. Requesting a Recommendation Letter",
          tone: "Professional",
          before: "Hi Professor Park, I was hoping you could write me a letter of recommendation? I'm applying to some grad schools and I think you know my work pretty well since I took your class. Let me know if you'd be willing. Thanks!",
          after: "Dear Professor Park, I'm applying to master's programs in computational biology this fall (specifically at MIT, Stanford, and UW) and I would be honored if you'd be willing to write a letter of recommendation on my behalf. I'm reaching out to you specifically because your Advanced Genetics course was where I first developed my interest in genomic data analysis, and I believe you can speak to both my analytical abilities and my engagement with the material. The first deadline is December 1, which gives approximately six weeks. I've prepared a brief summary of my research interests, application goals, and the specific programs I'm targeting — I'd be happy to share that along with my CV to make the process as easy as possible. I completely understand if your schedule doesn't allow it, and I'm grateful either way for the impact your teaching has had on my academic path."
        },
        {
          title: "4. Cold Email for a Research Position",
          tone: "Confident",
          before: "Hey Dr. Martinez, I'm a junior at State University and I came across your research on neural networks. It seems really cool. I was wondering if you have any openings in your lab for summer? I'm pretty good with Python and I'm a fast learner. Let me know!",
          after: "Dear Dr. Martinez, I'm a junior in Computer Science at State University, and I'm writing because your lab's recent work on convolutional neural networks for medical image classification (particularly the 2024 paper in Nature Methods) closely aligns with the research direction I want to pursue in graduate school. This past year, I completed an independent project applying transfer learning techniques to dermatological image datasets, achieving 91% classification accuracy using a modified ResNet architecture. I'm reaching out to ask whether you anticipate any openings for a summer research assistant. I would bring strong Python and PyTorch skills, experience with medical imaging datasets, and genuine enthusiasm for this specific problem space. I've attached my CV and a brief project summary. I would deeply appreciate the opportunity to discuss how I might contribute to your team's work. Thank you for your time and consideration."
        },
        {
          title: "5. Admissions Status Inquiry",
          tone: "Professional",
          before: "Hi, I applied to the MBA program back in January and I still haven't heard anything. I'm getting really anxious because other schools have already sent decisions and I need to know so I can plan my life. Is there any way to find out where my application stands? This is really stressful. Thank you.",
          after: "Dear Admissions Committee, I'm writing to inquire about the status of my application to the MBA program (Application ID: 2026-4892), submitted on January 15. I understand that the review process is thorough and takes time, and I appreciate the care your team puts into evaluating each candidate. As I'm approaching decision deadlines for other programs in the coming weeks, any information about my expected timeline would be very helpful for planning purposes. Thank you for your time, and please don't hesitate to let me know if any additional materials would be helpful from my end."
        },
        {
          title: "6. Group Project Communication",
          tone: "Direct",
          before: "Hey everyone, just wanted to check in since we're 2 weeks from the deadline and I seem to be the only one who's actually done any work on this. I've finished the intro, literature review, AND the methodology section. Not sure what the rest of the team has been up to but it would be nice to not be doing this alone. Please let me know your 'plans' for contributing.",
          after: "Hey team, checking in on where everyone stands with two weeks until the deadline. Here's what's been completed so far: I've finished the introduction, literature review, and methodology sections. That leaves the data analysis, results, discussion, and final formatting still to be assigned or completed. Can each of you reply by Thursday with a quick update on what you've completed and what you're planning to take on for the remaining sections? If anyone is running into obstacles or needs to adjust their section, now is the time to flag it so we can redistribute if needed. I want to make sure we all end up with a project we're proud of."
        }
      ]}
      whySection={{
        title: "Your First Professional Communication Experience",
        content: (
          <div className="space-y-6">
            <p>Professors form impressions based on email tone that directly influence their willingness to grant extensions, write recommendations, and offer research positions. Clear, professional tone signals competence before they even assess your skills.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs mt-0.5">✓</div>
                <p className="m-0 leading-normal">Professional emails lead to <strong>higher ratings</strong> of student competence and motivation.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs mt-0.5">✓</div>
                <p className="m-0 leading-normal">Strong communication is the <strong>key differentiator</strong> for competitive research positions.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs mt-0.5">✓</div>
                <p className="m-0 leading-normal">TextGlow bridges the <strong>cultural communication gap</strong> for international students.</p>
              </li>
            </ul>
            <p><strong>Habits that last a career.</strong> The student who learns to write a clear, respectful email to a professor will write better emails to hiring managers, clients, and executives. TextGlow helps you build these professional habits now.</p>
          </div>
        )
      }}
      socialProof={[
        {
          quote: "I spent 45 minutes writing two paragraphs to my professor. With TextGlow, I got the tone right in one click. My professor replied in ten minutes with a yes.",
          author: "Maya R.",
          role: "Junior, Psychology major"
        },
        {
          quote: "I cold-email professors for research collaborations regularly. After using the Confident tone, my response rate roughly doubled.",
          author: "James W.",
          role: "PhD Candidate, Computer Science"
        },
        {
          quote: "TextGlow helped me find the middle ground between Korea's ultra-formal style and the American academic norms. My advisor noticed the difference immediately.",
          author: "Soo-Jin K.",
          role: "Master's Student, Electrical Engineering"
        }
      ]}
      faqs={[
        { q: "Is using TextGlow considered cheating?", a: "No. It's a writing tool, similar to spell-check or a thesaurus. It doesn't write your email for you; it rewrites your own ideas in a different tone." },
        { q: "Does it work with university email?", a: "Yes. Most universities use Gmail or Outlook web apps, and TextGlow works in the web versions of both, plus Canvas and Blackboard." },
        { q: "Can it help international students?", a: "Absolutely. It's a core use case, helping students bridge the tone and cultural communication gap when working with American universities." },
        { q: "Is it free for students?", a: "Yes. The free plan includes 10 rewrites per day with no signup required, which covers most students' needs comfortably." }
      ]}
    />
  );
};
