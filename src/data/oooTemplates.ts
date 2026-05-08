export type AbsenceReason =
  | 'vacation'
  | 'sick'
  | 'parental'
  | 'business_travel'
  | 'conference'
  | 'personal'
  | 'sabbatical'
  | 'public_holiday'
  | 'training'
  | 'mental_health';

export type Tone =
  | 'professional'
  | 'friendly'
  | 'funny'
  | 'minimal'
  | 'enthusiastic'
  | 'mysterious';

export type TemplateKey = `${AbsenceReason}_${Tone}`;

// Each key maps to an array of exactly 3 template strings (variations A, B, C)
export type OOOTemplates = Record<TemplateKey, [string, string, string]>;

export const oooTemplates: OOOTemplates = {

  // ─── VACATION ───────────────────────────────────────────────────────────────

  vacation_professional: [
    `Thank you for your email. I am currently out of the office on vacation from {startDate} through {endDate} with limited access to email.

I will respond to your message when I return on {returnDate}. {coverageLine}

Thank you for your patience.`,

    `Thank you for reaching out. I'm away on vacation from {startDate} to {endDate} and will have limited availability during this time.

Your email is important to me and I will follow up promptly upon my return on {returnDate}. {coverageLine}

Best regards.`,

    `I am currently on vacation and out of the office until {endDate}.

I will have limited access to email during this period and will respond to messages beginning {returnDate}. {coverageLine}

I appreciate your patience.`,
  ],

  vacation_friendly: [
    `Hi there! 👋 Thanks for reaching out. I'm currently off on vacation until {endDate} — recharging the batteries and stepping away from the inbox!

I'll get back to you as soon as I'm back at my desk on {returnDate}. {coverageLine}

Hope you're having a great week!`,

    `Hey! Thanks for your message. I'm out on vacation from {startDate} through {endDate} and enjoying every minute of it.

I'll be back and catching up on emails starting {returnDate}. {coverageLine}

Talk soon!`,

    `Thanks for getting in touch! I'm currently away on vacation and won't be checking email regularly until I'm back on {returnDate}.

{coverageLine}

I'll reply as soon as I can — looking forward to catching up!`,
  ],

  vacation_funny: [
    `I'm currently on vacation, which means I'm pretending emails don't exist. 🏖️

I'll be back on {returnDate}, hopefully with a tan and definitely with a full inbox. {coverageLine}

If this is urgent, please redefine "urgent" and try again when I'm back.`,

    `Congratulations! You've reached my out-of-office message. Your email has been received and placed lovingly in a pile I'll deal with on {returnDate}. 📚

I'm currently on vacation from {startDate} to {endDate}, eating too much and thinking too little. {coverageLine}

Thanks for understanding. Or don't — I'll be away regardless.`,

    `Out of office. On vacation. Living my best life. 🌴

I left on {startDate} and won't be back until {returnDate}. My email will be waiting for me like a loyal golden retriever when I return. {coverageLine}

Please lower your expectations for response time accordingly.`,
  ],

  vacation_minimal: [
    `Out of office until {endDate}. {coverageLineShort}Back {returnDate}.`,

    `Vacation: {startDate}–{endDate}. Returning {returnDate}. {coverageLineShort}`,

    `Away on vacation. Back {returnDate}. {coverageLineShort}`,
  ],

  vacation_enthusiastic: [
    `Thanks for your message! I'm out of the office exploring the world from {startDate} to {endDate}! 🌍✈️

I'm SO excited about this trip and completely offline. I'll get back to you bright and early on {returnDate}! {coverageLine}

Can't wait to catch up when I'm back!`,

    `Ahh, you've caught me at the best possible time — I'm on vacation!! 🎉 Away from {startDate} through {endDate} and absolutely loving it.

I'll be back at my desk on {returnDate} and will reply to everything with fresh energy and vacation-brain enthusiasm. {coverageLine}

Thanks for reaching out!`,

    `I am OUT OF OFFICE and having the time of my life! 🙌 Vacation runs from {startDate} to {endDate}.

I'll be back on {returnDate} recharged, refreshed, and ready to take on the world (and my inbox). {coverageLine}

Can't wait to connect when I'm back!`,
  ],

  vacation_mysterious: [
    `I'm away. Where? That's between me and my passport. 🕵️

Back on {returnDate}. {coverageLineShort}

All will be revealed upon my return.`,

    `Current status: unavailable. Location: classified. Return date: {returnDate}. 🗺️

{coverageLineShort}

Reach me after {returnDate} if you dare.`,

    `I've vanished from the office. No further details available at this time.

Expected reappearance: {returnDate}. {coverageLineShort}

Thank you for your discretion.`,
  ],

  // ─── SICK LEAVE ─────────────────────────────────────────────────────────────

  sick_professional: [
    `Thank you for your email. I am currently out of the office due to illness and may be slow to respond.

I expect to return on {returnDate}, though this may change. {coverageLine}

Thank you for your understanding.`,

    `Thank you for reaching out. I'm currently taking sick leave and have limited availability.

I anticipate returning to the office on {returnDate}. {coverageLine}

I appreciate your patience and will respond as soon as I am able.`,

    `I am out of the office on medical leave until approximately {endDate}.

I will respond to messages upon my return on {returnDate}. {coverageLine}

Thank you for your patience.`,
  ],

  sick_friendly: [
    `Hey! Thanks for your email. I'm unfortunately under the weather and taking some time to recover. 🤒

I'm hoping to be back by {returnDate}. {coverageLine}

Thanks for bearing with me — I'll get back to you as soon as I'm feeling better!`,

    `Hi there! I'm currently home sick and trying to get back on my feet. Not the most fun OOO reason, but here we are! 😅

I'll be back at my desk on {returnDate}. {coverageLine}

Thanks for your patience!`,

    `Thanks for reaching out! I'm taking a sick day (or a few) to recover and get back to 100%.

I'll be back and replying to emails starting {returnDate}. {coverageLine}

Hope you're staying healthy out there!`,
  ],

  sick_funny: [
    `My immune system has filed a formal complaint and I'm currently in negotiations. 🤧

Expected resolution date: {returnDate}. {coverageLine}

Please send soup and good vibes.`,

    `I have been temporarily taken offline by a biological adversary. Patches are being applied. 🦠

System expected to reboot on {returnDate}. {coverageLine}

Thank you for your patience while I undergo maintenance.`,

    `Out of office. My body staged a mutiny and I lost. 😷

I'll be back on {returnDate}, hopefully fully restored to factory settings. {coverageLine}

Urgent matters should be rerouted accordingly. Non-urgent matters: same advice.`,
  ],

  sick_minimal: [
    `Out sick until {endDate}. Back {returnDate}. {coverageLineShort}`,

    `Taking sick leave. Returning {returnDate}. {coverageLineShort}`,

    `Sick day(s). Back {returnDate}. {coverageLineShort}`,
  ],

  sick_enthusiastic: [
    `Hi! Thanks for your message. I'm currently taking some sick leave — doctor's orders! 🏥

I'll be back and at full capacity on {returnDate}! {coverageLine}

Looking forward to catching up with you then!`,

    `Thanks for reaching out! I'm away on sick leave but I am SO ready to get back to it on {returnDate}! 💪

{coverageLine}

See you soon!`,

    `Hey! I'm out sick right now but don't worry — I'll be back on {returnDate} with tons of energy to make up for lost time! 🌟

{coverageLine}

Thanks for your patience!`,
  ],

  sick_mysterious: [
    `I'm currently unavailable. The reason is personal. The return date is {returnDate}. 🤫

{coverageLineShort}

More information will not be forthcoming.`,

    `Out of office. Status: confidential. Return: {returnDate}. {coverageLineShort}`,

    `I've stepped away from the office under circumstances I'd rather not detail.

I'll return on {returnDate}. {coverageLineShort}

Thank you for your discretion.`,
  ],

  // ─── PARENTAL LEAVE ─────────────────────────────────────────────────────────

  parental_professional: [
    `Thank you for your email. I am currently on {parentalType} and will be away from the office until {endDate}.

{coverageLine}

I look forward to connecting with you upon my return on {returnDate}.`,

    `Thank you for reaching out. I'm currently on {parentalType} and will not be checking email regularly during this time.

For any time-sensitive matters, please see below. {coverageLine}

I will respond to messages upon my return on {returnDate}.`,

    `I am currently on {parentalType} through {endDate}.

I have limited access to email during this period. {coverageLine}

Thank you for your understanding — I'll be in touch when I return on {returnDate}.`,
  ],

  parental_friendly: [
    `Hi! Thanks for reaching out. I'm currently on {parentalType}, welcoming the newest member of our family! 👶

I'll be away until {endDate}. {coverageLine}

See you when I'm back on {returnDate} — hopefully with some sleep under my belt!`,

    `Hey there! I'm on {parentalType} right now — which means I'm in full-on baby mode and completely away from the office. 🍼

I'll return on {returnDate}. {coverageLine}

Thanks so much for your patience!`,

    `Thanks for your message! I'm out on {parentalType} through {endDate} and loving (almost) every sleepless minute of it. 👶

I'll be back on {returnDate}. {coverageLine}

Talk soon!`,
  ],

  parental_funny: [
    `I'm currently on {parentalType}, which means I've traded spreadsheets for diapers and meetings for midnight feedings. 👶

I'll return to the working world on {returnDate}. {coverageLine}

Until then, I'm learning that babies have no respect for schedules.`,

    `Out of office on {parentalType}. I am currently operating on no sleep, surviving on coffee, and somehow still smiling. ☕👶

Back on {returnDate}, assuming I remember what day it is by then. {coverageLine}

All urgent matters should be handled by a functioning adult.`,

    `I have temporarily left the building (and the workforce) for {parentalType}. A tiny human required my undivided attention. 🍼

Returning on {returnDate}. {coverageLine}

I will respond to your email. Probably. I haven't slept since {startDate}.`,
  ],

  parental_minimal: [
    `On {parentalType} until {endDate}. Back {returnDate}. {coverageLineShort}`,

    `{parentalType}. Returning {returnDate}. {coverageLineShort}`,

    `Out on {parentalType} through {endDate}. Back {returnDate}. {coverageLineShort}`,
  ],

  parental_enthusiastic: [
    `Thanks for your message! I'm out on {parentalType} — a brand new family member has arrived and I am OVER THE MOON! 🎉👶

I'll be back at my desk on {returnDate}! {coverageLine}

Can't wait to share the news when I'm back!`,

    `We did it!! I'm officially on {parentalType} and it is the most amazing, exhausting, wonderful thing I've ever done! 👶✨

Back in the office on {returnDate}. {coverageLine}

Thank you for the well wishes (I know you were thinking them)!`,

    `Hi! I'm out on {parentalType} through {endDate} and living the best chaos of my life! 🍼🎉

I'll return on {returnDate} with stories and probably some dark circles. {coverageLine}

Thanks for reaching out!`,
  ],

  parental_mysterious: [
    `I'm away from the office on an important personal matter. Duration: through {endDate}. Return: {returnDate}. 🌙

{coverageLineShort}

Details to follow at a later date.`,

    `Out of office indefinitely — or at least until {returnDate}. A significant life event is underway.

{coverageLineShort}

Thank you for your patience.`,

    `Something extraordinary is happening. I am unavailable. I return on {returnDate}.

{coverageLineShort}

All will make sense eventually.`,
  ],

  // ─── BUSINESS TRAVEL ────────────────────────────────────────────────────────

  business_travel_professional: [
    `Thank you for your email. I am currently traveling for business from {startDate} to {endDate} and may have limited access to email.

I will respond as soon as possible, but please expect delays until my return on {returnDate}. {coverageLine}

Thank you for your understanding.`,

    `Thank you for reaching out. I'm on a business trip through {endDate} with limited email availability.

I will follow up upon my return on {returnDate}. {coverageLine}

I appreciate your patience.`,

    `I am currently out of the office on business travel until {endDate}.

I will respond to your message when I return on {returnDate}. {coverageLine}

Thank you for your patience.`,
  ],

  business_travel_friendly: [
    `Hi! Thanks for your email. I'm currently on the road for work from {startDate} to {endDate} — lots of flights and meetings, limited inbox time!

I'll get back to you when I'm back at base on {returnDate}. {coverageLine}

Talk soon!`,

    `Hey! I'm traveling for work until {endDate} so my email access is a bit spotty.

I'll be back at my desk on {returnDate} and will catch up then. {coverageLine}

Thanks for your patience!`,

    `Thanks for reaching out! I'm away on a work trip through {endDate} and moving around quite a bit.

I'll get back to you on {returnDate} when I'm settled back in. {coverageLine}

Looking forward to connecting then!`,
  ],

  business_travel_funny: [
    `I'm currently in transit, in meetings, or in an airport — possibly all three simultaneously. ✈️

I'll be back in the office on {returnDate} with receipts to file and stories to tell. {coverageLine}

If this is urgent, please consult {coverageLineShort} — I'll be over an ocean shortly.`,

    `Out of office on business travel. Location: somewhere with bad Wi-Fi and good room service. 🏨

Back on {returnDate}. {coverageLine}

Godspeed.`,

    `I am currently representing our organization in the field. "The field" is a hotel conference room, but it still counts. 💼

I return on {returnDate} with complimentary mint chocolates and all your unanswered emails. {coverageLine}

Your patience is appreciated.`,
  ],

  business_travel_minimal: [
    `Business travel {startDate}–{endDate}. Back {returnDate}. {coverageLineShort}`,

    `Traveling for work until {endDate}. Returning {returnDate}. {coverageLineShort}`,

    `Out for business travel. Back {returnDate}. {coverageLineShort}`,
  ],

  business_travel_enthusiastic: [
    `Thanks for your message! I'm out traveling for work from {startDate} to {endDate} and fully in the zone! 🌎💼

I'll be back at my desk on {returnDate} and can't wait to dig into my emails! {coverageLine}

Talk soon!`,

    `Hi! I'm away on a work trip until {endDate} and absolutely making the most of it — meetings, networking, all the good stuff! ✈️

Back on {returnDate} and ready to roll! {coverageLine}

Thanks for reaching out!`,

    `Thanks for getting in touch! I'm on a business trip from {startDate} through {endDate} — making moves and closing deals! 🚀

I'll reply on {returnDate}. {coverageLine}

Can't wait to connect when I'm back!`,
  ],

  business_travel_mysterious: [
    `I'm away on business. The details are on a need-to-know basis. 🕶️

Return date: {returnDate}. {coverageLineShort}

Stand by.`,

    `Location: undisclosed. Purpose: business. Return: {returnDate}. 🗂️

{coverageLineShort}

Await further communication.`,

    `I've been deployed. Business travel. Very important. Very confidential.

Back {returnDate}. {coverageLineShort}`,
  ],

  // ─── CONFERENCE / EVENT ──────────────────────────────────────────────────────

  conference_professional: [
    `Thank you for your email. I am currently attending {eventName} from {startDate} to {endDate} and have limited access to email.

I will respond to your message upon my return on {returnDate}. {coverageLine}

Thank you for your patience.`,

    `Thank you for reaching out. I'm attending {eventName} through {endDate} and will have limited availability.

I'll follow up when I'm back at my desk on {returnDate}. {coverageLine}

I appreciate your understanding.`,

    `I am out of the office attending {eventName} from {startDate} through {endDate}.

I will respond to emails upon my return on {returnDate}. {coverageLine}

Thank you for your patience.`,
  ],

  conference_friendly: [
    `Hi! Thanks for your message. I'm away at {eventName} from {startDate} to {endDate} — completely immersed in sessions and networking!

I'll catch up on emails when I'm back on {returnDate}. {coverageLine}

Looking forward to connecting then!`,

    `Hey! I'm currently at {eventName} through {endDate} so I'm a little hard to reach right now.

I'll be back in the office on {returnDate} with lots of new ideas (and probably some swag). {coverageLine}

Talk soon!`,

    `Thanks for reaching out! I'm at {eventName} until {endDate} — learning a ton and meeting great people.

I'll be back at my desk on {returnDate}. {coverageLine}

Can't wait to catch up!`,
  ],

  conference_funny: [
    `I'm currently at {eventName}, nodding along to presentations and saying "let's connect" to strangers. 🎤

I'll return on {returnDate}, armed with business cards and a tote bag full of branded pens. {coverageLine}

Please re-send this email then so I can give it the attention it deserves.`,

    `Out of office at {eventName} from {startDate} to {endDate}. 

I am networking, attending panels, and pretending I've read all the books these speakers are referencing. 📚 Back on {returnDate}. {coverageLine}`,

    `I'm at a conference. There are lanyards. There are keynotes. There is complimentary coffee that's never quite right. ☕

{eventName} runs through {endDate}. I'll be back on {returnDate} having learned things I'll summarize in a two-paragraph email. {coverageLine}`,
  ],

  conference_minimal: [
    `At {eventName} {startDate}–{endDate}. Back {returnDate}. {coverageLineShort}`,

    `Attending {eventName} through {endDate}. Returning {returnDate}. {coverageLineShort}`,

    `Conference ({eventName}) until {endDate}. Back {returnDate}. {coverageLineShort}`,
  ],

  conference_enthusiastic: [
    `Thanks for your message! I'm currently attending {eventName} and completely immersed in sessions and networking! 🎤✨

I'll be back at my desk on {returnDate} and will catch up on emails then. {coverageLine}

Can't wait to share what I've learned!`,

    `I am SO excited to be at {eventName} right now!! 🙌 Running from {startDate} to {endDate} and absolutely loving every session.

I'll reply to everything on {returnDate}. {coverageLine}

This conference is going to change everything — talk soon!`,

    `Hi! I'm away at {eventName} from {startDate} through {endDate} and having an AMAZING time! 🎉

Back at my desk on {returnDate} with fresh inspiration and a full inbox to tackle. {coverageLine}

Can't wait to connect!`,
  ],

  conference_mysterious: [
    `I'm at an event. It's important. The details are professional in nature.

Back on {returnDate}. {coverageLineShort}

Thank you.`,

    `Currently at {eventName}. What happens at conferences stays at conferences. 🤐

Return date: {returnDate}. {coverageLineShort}`,

    `Away at a professional gathering. Back {returnDate}.

{coverageLineShort}

You'll hear from me when the time is right.`,
  ],

  // ─── PERSONAL DAY ───────────────────────────────────────────────────────────

  personal_professional: [
    `Thank you for your email. I am taking a personal day and will return to the office on {returnDate}.

{coverageLine}

I will respond to your message when I'm back.`,

    `Thank you for reaching out. I'm out of the office for a personal day on {startDate}.

I will respond to your email on {returnDate}. {coverageLine}

I appreciate your understanding.`,

    `I am out of the office today and will return on {returnDate}.

{coverageLine}

Thank you for your patience.`,
  ],

  personal_friendly: [
    `Hi! Thanks for your message. I'm taking a personal day and will be back tomorrow / on {returnDate}.

{coverageLine}

I'll reply as soon as I'm back — talk soon!`,

    `Hey! I'm out of office for the day. Taking a little time for myself. 🌿

I'll be back on {returnDate} and will reply then. {coverageLine}

Thanks for understanding!`,

    `Thanks for getting in touch! I'm taking a personal day today and will be back on {returnDate}.

{coverageLine}

Looking forward to connecting then!`,
  ],

  personal_funny: [
    `I'm taking a personal day, which is a professional way of saying I need a break from all of this. 🛋️

Back on {returnDate} with renewed enthusiasm (or at least a better attitude). {coverageLine}`,

    `Out of office. Taking a personal day. Living to fight another day.

Return: {returnDate}. {coverageLine}

Please keep the chaos to a minimum until I'm back.`,

    `I called in "personal" today, which covers approximately 47 different scenarios, none of which I'll be disclosing. 📋

Back on {returnDate}. {coverageLine}

Your email will be waiting for me.`,
  ],

  personal_minimal: [
    `Out of office today. Back {returnDate}. {coverageLineShort}`,

    `Personal day. Returning {returnDate}. {coverageLineShort}`,

    `Away today. Back {returnDate}. {coverageLineShort}`,
  ],

  personal_enthusiastic: [
    `Thanks for your message! I'm taking a personal day and will be back on {returnDate} ready to go! 🌟

{coverageLine}

Can't wait to catch up then!`,

    `Hi! Taking a well-deserved personal day today. Back tomorrow / on {returnDate} refreshed and ready! 💪

{coverageLine}

Thanks for reaching out!`,

    `Hey! Out of office for a personal day — self-care is important! 🌿 Back on {returnDate} with great energy.

{coverageLine}

Talk soon!`,
  ],

  personal_mysterious: [
    `I am away today for personal reasons I choose not to elaborate on.

Back {returnDate}. {coverageLineShort}

Thank you.`,

    `Personal day. No further details. Return: {returnDate}. {coverageLineShort}`,

    `Out of office. It's personal. Back {returnDate}. {coverageLineShort}`,
  ],

  // ─── SABBATICAL ─────────────────────────────────────────────────────────────

  sabbatical_professional: [
    `Thank you for your email. I am currently on a sabbatical leave from {startDate} through {endDate} and am not checking email regularly during this time.

{coverageLine}

I will respond to messages upon my return on {returnDate}. Thank you for your understanding.`,

    `Thank you for reaching out. I'm on an extended sabbatical through {endDate} and have stepped away from regular work communications.

{coverageLine}

I will be back in touch on {returnDate}.`,

    `I am on sabbatical leave until {endDate} and not available for regular correspondence.

{coverageLine}

I look forward to reconnecting upon my return on {returnDate}.`,
  ],

  sabbatical_friendly: [
    `Hi there! Thanks for your message. I'm currently on sabbatical from {startDate} through {endDate} — taking an extended break to recharge, grow, and do some deep thinking. 🌱

{coverageLine}

I'll be back on {returnDate} and looking forward to connecting then!`,

    `Hey! I'm on sabbatical right now through {endDate} and taking a real step back from work. It's been incredible so far.

I'll be back on {returnDate} and will get back to you then. {coverageLine}

Thanks for your patience!`,

    `Thanks for reaching out! I'm on a sabbatical leave through {endDate} — exploring, learning, and taking a much-needed long pause.

I'll return on {returnDate}. {coverageLine}

Can't wait to reconnect then!`,
  ],

  sabbatical_funny: [
    `I'm on sabbatical, which is the fancy word for "I negotiated an extended vacation and it worked." 🎓

I'll be back on {returnDate}, hopefully wiser, definitely more rested, and possibly with a new hobby. {coverageLine}

Your email will keep. Probably.`,

    `Out of office on sabbatical from {startDate} to {endDate}. I am currently engaging in activities my employer has agreed to call "professional development." 📚

Back {returnDate}. {coverageLine}

Please don't ruin anything while I'm gone.`,

    `Sabbatical mode activated. I've stepped away from work to think big thoughts and do small things. 🏔️

I return on {returnDate} with a fresh perspective and the same email backlog. {coverageLine}`,
  ],

  sabbatical_minimal: [
    `On sabbatical through {endDate}. Back {returnDate}. {coverageLineShort}`,

    `Sabbatical: {startDate}–{endDate}. Returning {returnDate}. {coverageLineShort}`,

    `Sabbatical leave until {endDate}. Back {returnDate}. {coverageLineShort}`,
  ],

  sabbatical_enthusiastic: [
    `Thanks for your message! I am on SABBATICAL and it is everything I hoped it would be! 🌍✨ Away from {startDate} through {endDate}.

{coverageLine}

I'll be back on {returnDate} with so much to share!`,

    `Hi! I'm on sabbatical right now and absolutely making the most of this incredible opportunity! 🎉 Back on {returnDate}.

{coverageLine}

Can't wait to reconnect when I return!`,

    `Thanks for reaching out! I'm on extended sabbatical leave through {endDate} and loving every single day of it! 🌱🙌

Back at work on {returnDate}. {coverageLine}

See you then!`,
  ],

  sabbatical_mysterious: [
    `I am on sabbatical. What I'm doing with the time is my own affair.

Return: {returnDate}. {coverageLineShort}

I will be a different person when I come back. You'll understand eventually.`,

    `Gone on sabbatical. Duration: {startDate} through {endDate}. Activities: unspecified. 🌙

Back {returnDate}. {coverageLineShort}`,

    `I've stepped away for a sabbatical. The details are between me and the horizon.

I return on {returnDate}. {coverageLineShort}

Until then.`,
  ],

  // ─── PUBLIC HOLIDAY ─────────────────────────────────────────────────────────

  public_holiday_professional: [
    `Thank you for your email. Our office is closed for {holidayName} on {startDate}.

Normal business operations will resume on {returnDate}. {coverageLine}

We will respond to your message at that time.`,

    `Thank you for reaching out. Our office is observing {holidayName} and will be closed through {endDate}.

We will be back in the office on {returnDate}. {coverageLine}

We appreciate your patience and wish you a wonderful holiday.`,

    `I am out of the office in observance of {holidayName}. The office will reopen on {returnDate}.

{coverageLine}

Thank you for your understanding.`,
  ],

  public_holiday_friendly: [
    `Hi! Thanks for your message. The office is closed for {holidayName} and I'm out until {returnDate}.

{coverageLine}

Hope you're enjoying the holiday too — I'll reply when we're back!`,

    `Hey there! We're off for {holidayName}! 🎉 Back in the office on {returnDate}.

{coverageLine}

Have a great holiday and I'll talk to you when we're back!`,

    `Thanks for reaching out! The office is closed for {holidayName} through {endDate}.

I'll be back on {returnDate} and will reply then. {coverageLine}

Hope you're having a lovely break!`,
  ],

  public_holiday_funny: [
    `The office is closed for {holidayName}, and I am celebrating with the appropriate level of commitment. 🎉

We'll be back on {returnDate}. {coverageLine}

Your email will be here waiting for us. As will the Monday.`,

    `Out of office for {holidayName}. I did not make this decision unilaterally — the entire office is off. 🏖️

Back {returnDate}. {coverageLine}

Please direct any complaints to the calendar.`,

    `It's {holidayName}! Which means I'm off, the office is closed, and this auto-reply is working harder than any of us right now. 

Returning {returnDate}. {coverageLine}`,
  ],

  public_holiday_minimal: [
    `Office closed for {holidayName}. Reopening {returnDate}. {coverageLineShort}`,

    `Out for {holidayName}. Back {returnDate}. {coverageLineShort}`,

    `{holidayName} holiday closure. Returning {returnDate}. {coverageLineShort}`,
  ],

  public_holiday_enthusiastic: [
    `Thanks for reaching out! We're off celebrating {holidayName}! 🎉🥳 The office reopens on {returnDate}.

{coverageLine}

Hope you're having an amazing holiday — talk soon!`,

    `Happy {holidayName}!! 🎊 The office is closed today through {endDate} and we are ENJOYING it.

Back on {returnDate} with full energy! {coverageLine}

Have a wonderful holiday!`,

    `The office is officially on holiday mode for {holidayName}! 🌟 We'll be back and better than ever on {returnDate}.

{coverageLine}

Wishing you a fantastic break!`,
  ],

  public_holiday_mysterious: [
    `The office is closed. The reason is traditional and calendar-based.

We return on {returnDate}. {coverageLineShort}

Thank you.`,

    `Closed for {holidayName}. Back {returnDate}. {coverageLineShort}

No further details required.`,

    `Office dark until {returnDate}. {holidayName} is to blame.

{coverageLineShort}`,
  ],

  // ─── TRAINING / PROFESSIONAL DEVELOPMENT ────────────────────────────────────

  training_professional: [
    `Thank you for your email. I am currently attending a training program from {startDate} through {endDate} and will have limited access to email during this time.

I will respond to your message upon my return on {returnDate}. {coverageLine}

Thank you for your patience.`,

    `Thank you for reaching out. I'm out of the office for professional development training through {endDate}.

I'll follow up when I return on {returnDate}. {coverageLine}

I appreciate your understanding.`,

    `I am attending a training from {startDate} to {endDate} and have limited availability.

I will respond to your email on {returnDate}. {coverageLine}

Thank you for your patience.`,
  ],

  training_friendly: [
    `Hi! Thanks for your message. I'm away at a training / professional development program until {endDate} — investing in new skills! 📚

I'll be back on {returnDate} and will reply then. {coverageLine}

Talk soon!`,

    `Hey! I'm out attending training from {startDate} through {endDate} and pretty heads-down in sessions.

I'll catch up on emails when I'm back on {returnDate}. {coverageLine}

Thanks for your patience!`,

    `Thanks for getting in touch! I'm at a professional development training through {endDate} and a bit hard to reach.

Back at my desk on {returnDate}. {coverageLine}

Looking forward to connecting then!`,
  ],

  training_funny: [
    `I'm currently in training, which means I'm in a room learning things I could have Googled but are apparently more official this way. 📋

Back on {returnDate}, credentialed and ready. {coverageLine}

If this is urgent, please consult someone who isn't currently watching a PowerPoint presentation.`,

    `Out of office at a training program. I am being professionally developed as we speak. 🎓

I'll return on {returnDate} having absorbed approximately 40% of the curriculum. {coverageLine}`,

    `I'm in training from {startDate} to {endDate}. The things I'm learning are important enough that someone put them in a binder.

Back {returnDate}. {coverageLine}

See you on the other side.`,
  ],

  training_minimal: [
    `At training {startDate}–{endDate}. Back {returnDate}. {coverageLineShort}`,

    `Professional development through {endDate}. Returning {returnDate}. {coverageLineShort}`,

    `Out for training. Back {returnDate}. {coverageLineShort}`,
  ],

  training_enthusiastic: [
    `Thanks for your message! I'm away at a professional development training from {startDate} to {endDate} — so excited to be leveling up my skills! 🚀

I'll be back on {returnDate} ready to put everything into practice! {coverageLine}

Can't wait to connect!`,

    `Hi! I'm at a training program through {endDate} and absolutely loving what I'm learning! 📚✨

Back on {returnDate} with new knowledge and big ideas! {coverageLine}

Talk soon!`,

    `Thanks for reaching out! I'm attending professional development training until {endDate} — investing in growth! 💡

I'll reply on {returnDate}. {coverageLine}

Excited to catch up when I'm back!`,
  ],

  training_mysterious: [
    `I'm away acquiring new capabilities. The nature of the training is not disclosed here.

Back {returnDate}. {coverageLineShort}

I will be enhanced upon my return.`,

    `Out for professional development. Details: classified. Return: {returnDate}. {coverageLineShort}`,

    `In training. Returning on {returnDate} with new abilities.

{coverageLineShort}

You'll notice the difference.`,
  ],

  // ─── MENTAL HEALTH DAY ──────────────────────────────────────────────────────

  mental_health_professional: [
    `Thank you for your email. I am taking a personal day and will return on {returnDate}.

{coverageLine}

I will respond to your message when I'm back.`,

    `Thank you for reaching out. I'm out of the office today and will return on {returnDate}.

{coverageLine}

I appreciate your patience and will respond promptly upon my return.`,

    `I am out of the office on a personal day and will be back on {returnDate}.

{coverageLine}

Thank you for your understanding.`,
  ],

  mental_health_friendly: [
    `Hi! Thanks for reaching out. I'm taking a day to recharge and will be back on {returnDate}. 🧘

{coverageLine}

Talk soon — and hope you're taking good care of yourself too!`,

    `Hey! I'm out today taking a much-needed mental health day. Back tomorrow / on {returnDate}. 🌿

{coverageLine}

I'll reply when I'm back — thanks for your patience!`,

    `Thanks for your message! I'm taking a personal wellness day and will return on {returnDate}.

{coverageLine}

Looking forward to connecting then!`,
  ],

  mental_health_funny: [
    `I have placed an out-of-office on my brain. Maintenance is being performed. 🧠

Back on {returnDate}, fully defragmented. {coverageLine}

Please hold all requests until systems are restored.`,

    `Currently participating in a mandatory self-care program I scheduled for myself. Attendance is non-negotiable.

Return date: {returnDate}. {coverageLine}

Thank you for respecting this boundary I have set in an auto-reply.`,

    `I'm taking a mental health day because apparently that's what healthy, self-aware people do. 🛋️

I'll be back on {returnDate}, having successfully touched grass, drank water, and not looked at emails. {coverageLine}`,
  ],

  mental_health_minimal: [
    `Out today. Back {returnDate}. {coverageLineShort}`,

    `Personal day. Returning {returnDate}. {coverageLineShort}`,

    `Away today. Back {returnDate}. {coverageLineShort}`,
  ],

  mental_health_enthusiastic: [
    `Thanks for your message! I'm taking a mental health day today — self-care matters! 🌟 Back on {returnDate} refreshed and ready to go!

{coverageLine}

Looking forward to connecting then!`,

    `Hi! Taking today for myself — and I feel GREAT about it! 💚 Back on {returnDate} with full energy.

{coverageLine}

Talk soon!`,

    `Out of office for a wellness day! 🧘✨ Taking time to recharge so I can bring my best self back on {returnDate}.

{coverageLine}

Thanks for understanding — see you soon!`,
  ],

  mental_health_mysterious: [
    `I'm away today for personal reasons.

Back {returnDate}. {coverageLineShort}

Thank you.`,

    `Out of office. Personal matter. Return: {returnDate}. {coverageLineShort}`,

    `Unavailable today. Back {returnDate}. {coverageLineShort}

No further details.`,
  ],
};
