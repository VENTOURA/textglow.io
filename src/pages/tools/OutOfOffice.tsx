import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Plus, Minus, Chrome, Check, Copy, RefreshCw, Mail } from 'lucide-react';
import { Button } from '../../components/ui/Button';

import type { AbsenceReason, Tone } from '../../data/oooTemplates';
import { generateOOOMessages } from '../../utils/oooGenerator';
import type { OOOFormValues, GeneratedMessage } from '../../utils/oooGenerator';

const CHROME_URL = "https://chromewebstore.google.com/detail/textglow-ai-message-polis/bjjbefpiaedgddoflnjhpnadenlibfhf";

const REASONS: { value: AbsenceReason; label: string; icon: string }[] = [
  { value: 'vacation', label: 'Vacation / Holiday', icon: '🏖️' },
  { value: 'sick', label: 'Sick Leave', icon: '🤒' },
  { value: 'parental', label: 'Parental Leave', icon: '👶' },
  { value: 'business_travel', label: 'Business Travel', icon: '✈️' },
  { value: 'conference', label: 'Conference / Event', icon: '🎤' },
  { value: 'personal', label: 'Personal Day', icon: '🌿' },
  { value: 'sabbatical', label: 'Sabbatical', icon: '🎓' },
  { value: 'public_holiday', label: 'Public Holiday', icon: '🎉' },
  { value: 'training', label: 'Training', icon: '📚' },
  { value: 'mental_health', label: 'Mental Health Day', icon: '🧘' },
];

const TONES: { value: Tone; label: string; subtitle: string; icon: string; color: string }[] = [
  { value: 'professional', label: 'Professional', subtitle: 'Standard business', icon: '👔', color: 'bg-blue-100 text-blue-800 border-blue-200' },
  { value: 'friendly', label: 'Friendly', subtitle: 'Warm, approachable', icon: '👋', color: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
  { value: 'funny', label: 'Funny / Witty', subtitle: 'Less formal workplaces', icon: '😂', color: 'bg-amber-100 text-amber-800 border-amber-200' },
  { value: 'minimal', label: 'Minimal', subtitle: 'Bare essentials only', icon: '⚡', color: 'bg-slate-100 text-slate-800 border-slate-200' },
  { value: 'enthusiastic', label: 'Enthusiastic', subtitle: 'Excited about the occasion', icon: '🚀', color: 'bg-purple-100 text-purple-800 border-purple-200' },
  { value: 'mysterious', label: 'Mysterious', subtitle: 'Vague and intriguing', icon: '🕵️', color: 'bg-indigo-100 text-indigo-800 border-indigo-200' },
];

const QUICK_PICKS = [
  { label: 'Quick Vacation OOO', reason: 'vacation', tone: 'professional' },
  { label: 'Funny Vacation', reason: 'vacation', tone: 'funny' },
  { label: 'Simple Sick Day', reason: 'sick', tone: 'minimal' },
  { label: 'Parental Leave', reason: 'parental', tone: 'friendly' },
  { label: 'Holiday Closure', reason: 'public_holiday', tone: 'professional' },
  { label: 'Minimal OOO', reason: 'personal', tone: 'minimal' },
] as const;

export const OutOfOffice = () => {
  const [form, setForm] = useState<OOOFormValues>({
    reason: 'vacation',
    tone: 'professional',
    unsureReturn: false,
    noCoverage: false,
    additionalContacts: [],
  });

  const [results, setResults] = useState<GeneratedMessage[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const handleUpdate = (field: keyof OOOFormValues, value: any) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const addContact = () => {
    if ((form.additionalContacts?.length || 0) >= 3) return;
    handleUpdate('additionalContacts', [...(form.additionalContacts || []), { name: '', email: '', topic: '' }]);
  };

  const updateContact = (index: number, field: string, value: string) => {
    const contacts = [...(form.additionalContacts || [])];
    contacts[index] = { ...contacts[index], [field]: value };
    handleUpdate('additionalContacts', contacts);
  };

  const removeContact = (index: number) => {
    const contacts = [...(form.additionalContacts || [])];
    contacts.splice(index, 1);
    handleUpdate('additionalContacts', contacts);
  };

  const handleGenerate = () => {
    const generated = generateOOOMessages(form);
    setResults(generated);
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleSurpriseMe = () => {
    const randomTone = TONES[Math.floor(Math.random() * TONES.length)].value;
    handleUpdate('tone', randomTone);
    const generated = generateOOOMessages({ ...form, tone: randomTone });
    setResults(generated);
  };

  const handleQuickPick = (pick: typeof QUICK_PICKS[number]) => {
    const updatedForm = { ...form, reason: pick.reason, tone: pick.tone };
    setForm(updatedForm);
    const generated = generateOOOMessages(updatedForm);
    setResults(generated);
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleCopyAll = async () => {
    if (!results.length) return;
    const text = results.map(r => r.text).join('\n\n---\n\n');
    try {
      await navigator.clipboard.writeText(text);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
    } catch (err) {
      console.error('Failed to copy all: ', err);
    }
  };

  const getToneStyle = (tone: Tone) => {
    return TONES.find(t => t.value === tone)?.color || 'bg-slate-100 text-slate-800 border-slate-200';
  };

  const getToneLabel = (tone: Tone) => {
    return TONES.find(t => t.value === tone)?.label || tone;
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <Helmet>
        <title>Free AI Out-of-Office Generator — Professional OOO | TextGlow</title>
        <meta name="description" content="Generate the perfect out-of-office message in seconds. Use TextGlow to create professional, funny, or short OOO replies for your vacation or sick leave. Free." />
        <link rel="canonical" href="https://textglow.io/tools/out-of-office/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://textglow.io/tools/out-of-office/" />
        <meta property="og:title" content="Free AI Out-of-Office Generator — Professional OOO | TextGlow" />
        <meta property="og:description" content="Generate the perfect out-of-office message in seconds. Use TextGlow to create professional, funny, or short OOO replies for your vacation or sick leave. Free." />
        <meta property="og:image" content="https://textglow.io/og-image.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Free AI Out-of-Office Generator — Professional OOO | TextGlow" />
        <meta property="twitter:description" content="Generate the perfect out-of-office message in seconds. Use TextGlow to create professional, funny, or short OOO replies for your vacation or sick leave. Free." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Free Out-of-Office Message Generator
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Create the perfect OOO auto-reply in seconds. 10 scenarios, 6 tones, instantly copyable.
          </p>

          {/* Quick Picks */}
          <div className="flex overflow-x-auto pb-4 gap-3 justify-start md:justify-center px-4 snap-x hide-scrollbar">
            {QUICK_PICKS.map((pick, i) => (
              <button
                key={i}
                onClick={() => handleQuickPick(pick)}
                className="shrink-0 snap-start bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                {pick.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-10 mb-12">
            
            {/* 1. Reason */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-slate-900 mb-3">1. Why are you away?</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {REASONS.map(r => (
                  <button
                    key={r.value}
                    onClick={() => handleUpdate('reason', r.value)}
                    className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-colors ${
                      form.reason === r.value 
                        ? 'border-brand-500 bg-brand-50 text-brand-900 ring-1 ring-brand-500' 
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                    }`}
                  >
                    <span className="text-xl">{r.icon}</span>
                    <span className="font-medium text-sm">{r.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Conditional Fields based on Reason */}
            <div className={`space-y-4 mb-8 overflow-hidden transition-all duration-300 ${
              ['conference', 'public_holiday', 'parental'].includes(form.reason) ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 mb-0'
            }`}>
              {form.reason === 'conference' && (
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Event/Conference Name</label>
                  <input
                    type="text"
                    value={form.eventName || ''}
                    onChange={(e) => handleUpdate('eventName', e.target.value)}
                    placeholder="e.g. Dreamforce 2024"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                  />
                </div>
              )}
              {form.reason === 'public_holiday' && (
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Holiday Name</label>
                  <input
                    type="text"
                    value={form.holidayName || ''}
                    onChange={(e) => handleUpdate('holidayName', e.target.value)}
                    placeholder="e.g. Thanksgiving"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                  />
                </div>
              )}
              {form.reason === 'parental' && (
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Type of Leave</label>
                  <div className="flex gap-4">
                    {['parental leave', 'maternity leave', 'paternity leave'].map(type => (
                      <label key={type} className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                        <input
                          type="radio"
                          name="parentalType"
                          value={type}
                          checked={(form.parentalType || 'parental leave') === type}
                          onChange={(e) => handleUpdate('parentalType', e.target.value)}
                          className="text-brand-500 focus:ring-brand-500"
                        />
                        <span className="capitalize">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 2. Dates */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-slate-900 mb-3">2. When are you away?</label>
              
              <div className="mb-3">
                <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.unsureReturn}
                    onChange={(e) => {
                      handleUpdate('unsureReturn', e.target.checked);
                      if (e.target.checked) {
                        handleUpdate('startDate', '');
                        handleUpdate('endDate', '');
                      }
                    }}
                    className="rounded text-brand-500 focus:ring-brand-500 border-slate-300 w-4 h-4"
                  />
                  I'm not sure when I'll be back
                </label>
              </div>

              {!form.unsureReturn && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Start Date</label>
                    <input
                      type="date"
                      value={form.startDate || ''}
                      onChange={(e) => handleUpdate('startDate', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-slate-700"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">End Date</label>
                    <input
                      type="date"
                      value={form.endDate || ''}
                      onChange={(e) => handleUpdate('endDate', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-slate-700"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* 3. Coverage */}
            <div className="mb-8">
              <div className="flex justify-between items-end mb-3">
                <label className="block text-sm font-bold text-slate-900">3. Who should they contact?</label>
                <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.noCoverage}
                    onChange={(e) => handleUpdate('noCoverage', e.target.checked)}
                    className="rounded text-brand-500 focus:ring-brand-500 border-slate-300 w-4 h-4"
                  />
                  No coverage
                </label>
              </div>

              {!form.noCoverage && (
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <p className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wider">Primary Contact (Urgent)</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Name (e.g. Jane Doe)"
                        value={form.coverageName || ''}
                        onChange={(e) => handleUpdate('coverageName', e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-brand-500 outline-none text-sm"
                      />
                      <input
                        type="email"
                        placeholder="Email (e.g. jane@company.com)"
                        value={form.coverageEmail || ''}
                        onChange={(e) => handleUpdate('coverageEmail', e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-brand-500 outline-none text-sm"
                      />
                    </div>
                  </div>

                  {form.additionalContacts?.map((contact, i) => (
                    <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-200 relative group">
                      <p className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wider">Additional Contact {i + 1}</p>
                      <button 
                        onClick={() => removeContact(i)}
                        className="absolute top-3 right-3 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Remove contact"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <div className="space-y-3">
                        <input
                          type="text"
                          placeholder="Topic (e.g. Design approvals)"
                          value={contact.topic || ''}
                          onChange={(e) => updateContact(i, 'topic', e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-brand-500 outline-none text-sm"
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input
                            type="text"
                            placeholder="Name"
                            value={contact.name}
                            onChange={(e) => updateContact(i, 'name', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-brand-500 outline-none text-sm"
                          />
                          <input
                            type="email"
                            placeholder="Email"
                            value={contact.email}
                            onChange={(e) => updateContact(i, 'email', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-brand-500 outline-none text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  {(form.additionalContacts?.length || 0) < 3 && (
                    <button 
                      onClick={addContact}
                      className="text-sm font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1"
                    >
                      <Plus className="w-4 h-4" /> Add another contact
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* 4. Tone */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-slate-900 mb-3">4. Choose your tone</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TONES.map(t => (
                  <button
                    key={t.value}
                    onClick={() => handleUpdate('tone', t.value)}
                    className={`flex items-start gap-3 p-4 rounded-xl border text-left transition-all ${
                      form.tone === t.value 
                        ? 'border-brand-500 bg-brand-50 ring-1 ring-brand-500' 
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <span className="text-2xl leading-none mt-1">{t.icon}</span>
                    <div>
                      <div className={`font-bold text-sm ${form.tone === t.value ? 'text-brand-900' : 'text-slate-900'}`}>{t.label}</div>
                      <div className={`text-xs mt-0.5 ${form.tone === t.value ? 'text-brand-700' : 'text-slate-500'}`}>{t.subtitle}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Additional Details */}
            <div className="mb-10">
              <label className="block text-sm font-bold text-slate-900 mb-3">5. Additional Details (Optional)</label>
              <textarea
                rows={3}
                value={form.additionalDetails || ''}
                onChange={(e) => handleUpdate('additionalDetails', e.target.value)}
                placeholder="Anything else to include? (e.g. limited email access, checking messages periodically, specific project notes...)"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-slate-700 resize-none"
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <Button onClick={handleGenerate} size="lg" className="w-full py-4 text-lg">
                Generate My OOO Messages
              </Button>
              <button 
                onClick={handleSurpriseMe}
                className="w-full py-3 text-sm font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" /> Surprise Me (Random Tone)
              </button>
            </div>
          </div>

          {/* Results Section */}
          {results.length > 0 && (
            <div ref={resultsRef} className="space-y-6 pt-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Your Out-of-Office Messages</h2>
              
              {results.map((result, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden group hover:border-brand-300 transition-colors">
                  <div className="p-5 md:p-6 border-b border-slate-100">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-slate-900">Variation {idx + 1}</h3>
                      <span className={`px-2.5 py-1 text-xs font-bold rounded-full border ${getToneStyle(result.tone)}`}>
                        {getToneLabel(result.tone)}
                      </span>
                    </div>
                    
                    <div className="bg-slate-50 p-4 rounded-xl text-slate-800 whitespace-pre-wrap font-medium leading-relaxed font-sans text-[15px]">
                      {result.text}
                    </div>
                  </div>
                  
                  <div className="bg-slate-50/50 px-5 py-3 flex justify-between items-center flex-wrap gap-4">
                    <span className="text-xs font-semibold text-slate-400">{result.charCount} chars</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setPreviewIndex(previewIndex === idx ? null : idx)}
                        className="px-4 py-2 text-sm font-semibold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4" /> {previewIndex === idx ? 'Hide Preview' : 'Preview'}
                      </button>
                      <button
                        onClick={() => handleCopy(result.text, idx)}
                        className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors flex items-center gap-2 ${
                          copiedIndex === idx ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-white hover:bg-slate-800'
                        }`}
                      >
                        {copiedIndex === idx ? <><Check className="w-4 h-4" /> Copied!</> : <><Copy className="w-4 h-4" /> Copy</>}
                      </button>
                    </div>
                  </div>

                  {/* Email Preview */}
                  {previewIndex === idx && (
                    <div className="p-6 bg-slate-100 border-t border-slate-200 animate-in fade-in slide-in-from-top-2">
                      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden max-w-lg mx-auto">
                        <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 space-y-2 text-sm">
                          <div className="flex"><span className="text-slate-400 w-16">From:</span><span className="text-slate-900 font-medium">You</span></div>
                          <div className="flex"><span className="text-slate-400 w-16">Subject:</span><span className="text-slate-900 font-medium">Out of Office: Re: Your recent email</span></div>
                        </div>
                        <div className="p-4 text-slate-800 whitespace-pre-wrap text-[14px] leading-relaxed">
                          {result.text}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-6 pb-12 flex justify-center">
                <Button onClick={handleCopyAll} variant="secondary" size="lg" className="w-full md:w-auto">
                  {copiedAll ? <><Check className="w-5 h-5 mr-2" /> All Copied!</> : <><Copy className="w-5 h-5 mr-2" /> Copy All 3 Messages</>}
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Your out-of-office is set — but what about the 50 emails waiting when you get back?
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            TextGlow rewrites your replies in 2 clicks — in Gmail, Slack, LinkedIn, and anywhere you type.
          </p>
          <Button href={CHROME_URL} variant="pro" size="lg" className="px-8 py-4 text-lg mb-6 shadow-xl shadow-brand-500/20">
            <Chrome className="w-6 h-6 mr-3" /> Add to Chrome — Free
          </Button>
          <p className="text-sm font-medium text-brand-300">Free: 10 rewrites/day &nbsp;·&nbsp; Pro: 150/day for $39/year</p>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Perfect Out-of-Office Message</h2>
          <div className="prose prose-lg prose-slate max-w-none mb-12 text-slate-600 leading-relaxed">
            <p>
              An out-of-office message — also called an OOO message or auto-reply — lets colleagues, clients, and contacts know you're unavailable and when to expect a response. A good OOO message sets expectations, prevents frustration, and reflects your personal or company brand.
            </p>
            <p>
              The best OOO messages include three core elements: the dates you'll be away, when you'll return, and who to contact for urgent matters. Everything else is optional. A professional tone suits most workplaces, but a warm or even funny message can strengthen relationships in the right context.
            </p>
            <p>
              Brevity wins. Two to four sentences is the sweet spot for most OOO messages — long enough to be informative, short enough to read in seconds. For extended leave (parental leave, sabbatical), a slightly longer message is appropriate to explain coverage arrangements clearly.
            </p>
            <p>
              This free OOO message generator covers 10 common absence scenarios — from vacation and sick leave to parental leave and sabbaticals — across 6 distinct tones. All templates are instantly copyable and fully editable. No sign-up, no data storage, no AI costs.
            </p>
            
            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Tips for a great auto-reply</h3>
            <ul className="space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-100 list-none pl-0">
              <li className="flex gap-3"><Check className="w-6 h-6 text-emerald-500 shrink-0" /><span><strong>Match your tone to your audience.</strong> A funny out-of-office works great for internal teams and creative industries, but stick to professional for client-facing or regulated environments.</span></li>
              <li className="flex gap-3"><Check className="w-6 h-6 text-emerald-500 shrink-0" /><span><strong>Always include a return date if you know it.</strong> Vague messages ("I'll be back soon") frustrate senders. Even an approximate date is better than nothing.</span></li>
              <li className="flex gap-3"><Check className="w-6 h-6 text-emerald-500 shrink-0" /><span><strong>Designate a backup contact for urgent matters.</strong> Especially important for absences longer than 2–3 days.</span></li>
              <li className="flex gap-3"><Check className="w-6 h-6 text-emerald-500 shrink-0" /><span><strong>Set it before you leave, not after.</strong> Schedule your OOO to activate the night before your first day away.</span></li>
              <li className="flex gap-3"><Check className="w-6 h-6 text-emerald-500 shrink-0" /><span><strong>Check your email client's character limit.</strong> Some systems (especially mobile mail apps) truncate long OOO messages. Aim for under 500 characters for the safest option.</span></li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "What should I include in my out-of-office message?",
                a: "At minimum: the dates you're away and when you'll return. Optionally include an emergency contact and a brief reason for your absence. Keep it short — most readers just need to know when you'll be back."
              },
              {
                q: "Should my out-of-office message be funny?",
                a: "It depends on your workplace culture. Funny OOO messages are great for internal teams, startup environments, and creative industries. If you regularly correspond with external clients or work in a conservative industry (finance, law, healthcare), stick to a professional or friendly tone."
              },
              {
                q: "How long should an out-of-office message be?",
                a: "2–4 sentences is ideal for most situations. Longer messages (5–8 sentences) are appropriate for extended leave such as parental leave or sabbaticals where more context is helpful. Avoid going over 500 characters to ensure your message isn't truncated."
              },
              {
                q: "Should I set an out-of-office for a single day off?",
                a: "Yes. A short, minimal OOO for a single day prevents confusion and sets appropriate expectations. Use the \"Minimal\" or \"Personal Day\" options in this generator for single-day messages."
              },
              {
                q: "Is my information stored anywhere?",
                a: "No. This tool is 100% client-side. Your dates, contact details, and any other information you enter never leave your browser and are not stored, logged, or transmitted anywhere."
              }
            ].map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-2xl bg-white hover:border-brand-200 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg text-slate-900">
                  {faq.q}
                  <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-45 text-brand-500">
                    <Plus className="w-5 h-5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
