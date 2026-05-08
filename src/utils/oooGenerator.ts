import { oooTemplates } from '../data/oooTemplates';
import type { AbsenceReason, Tone, TemplateKey } from '../data/oooTemplates';
import { formatDate, getNextBusinessDay } from './dateFormatting';

export interface OOOFormValues {
  reason: AbsenceReason;
  tone: Tone;
  startDate?: string;
  endDate?: string;
  unsureReturn?: boolean;
  coverageName?: string;
  coverageEmail?: string;
  additionalContacts?: Array<{ topic?: string; name: string; email: string }>;
  noCoverage?: boolean;
  additionalDetails?: string;
  eventName?: string;
  holidayName?: string;
  parentalType?: 'maternity leave' | 'paternity leave' | 'parental leave';
}

export interface GeneratedMessage {
  text: string;
  tone: Tone;
  charCount: number;
}

export function generateOOOMessages(values: OOOFormValues): GeneratedMessage[] {
  const key: TemplateKey = `${values.reason}_${values.tone}`;
  const templates = oooTemplates[key];

  if (!templates) {
    return []; // fallback if somehow not found
  }

  return templates.map((template) => {
    const text = substituteVariables(template, values);
    return {
      text,
      tone: values.tone,
      charCount: text.length,
    };
  });
}

function substituteVariables(template: string, values: OOOFormValues): string {
  let result = template;

  // Dates
  const startFormatted = values.startDate ? formatDate(values.startDate) : null;
  const endFormatted = values.endDate ? formatDate(values.endDate) : null;
  const returnFormatted = values.endDate
    ? formatDate(getNextBusinessDay(values.endDate))
    : null;

  result = result.replace(/{startDate}/g, startFormatted ?? 'a few days');
  result = result.replace(/{endDate}/g, endFormatted ?? 'soon');
  result = result.replace(
    /{returnDate}/g,
    values.unsureReturn
      ? "a date to be confirmed"
      : returnFormatted ?? 'shortly'
  );

  // Coverage lines
  const coverageLine = buildCoverageLine(values, 'full');
  const coverageLineShort = buildCoverageLine(values, 'short');
  result = result.replace(/{coverageLine}/g, coverageLine);
  result = result.replace(/{coverageLineShort}/g, coverageLineShort);

  // Reason-specific substitutions
  result = result.replace(/{parentalType}/g, values.parentalType ?? 'parental leave');
  result = result.replace(/{eventName}/g, values.eventName || 'a conference');
  result = result.replace(/{holidayName}/g, values.holidayName || 'a public holiday');

  // Additional details: append as own paragraph if provided
  if (values.additionalDetails?.trim()) {
    result = result.trimEnd() + '\n\n' + values.additionalDetails.trim();
  }

  // Clean up double spaces / trailing whitespace on lines
  result = result.replace(/ {2,}/g, ' ').trim();

  // If there are lingering spaces around punctuation from missing variables
  result = result.replace(/\s+\./g, '.');

  return result;
}

function buildCoverageLine(
  values: OOOFormValues,
  format: 'full' | 'short'
): string {
  if (values.noCoverage || (!values.coverageName && !values.coverageEmail && !values.additionalContacts?.length)) {
    return '';
  }

  const lines: string[] = [];

  if (values.coverageName || values.coverageEmail) {
    if (format === 'full') {
      lines.push(
        `For urgent matters, please contact ${values.coverageName ?? ''}${
          values.coverageEmail ? (values.coverageName ? ` at ${values.coverageEmail}` : values.coverageEmail) : ''
        }.`
      );
    } else {
      lines.push(
        `${values.coverageName ?? ''}${
          values.coverageEmail ? ` (${values.coverageEmail})` : ''
        } for urgent items.`
      );
    }
  }

  if (values.additionalContacts?.length) {
    for (const contact of values.additionalContacts) {
      if (!contact.name && !contact.email) continue;
      
      if (format === 'full') {
        lines.push(
          `For ${contact.topic ? contact.topic + ', please contact' : 'other matters, please reach'} ${contact.name ?? ''}${
            contact.email ? (contact.name ? ` at ${contact.email}` : contact.email) : ''
          }.`
        );
      } else {
        lines.push(`${contact.topic ? contact.topic + ': ' : ''}${contact.name ?? ''}${contact.email ? ` (${contact.email})` : ''}.`);
      }
    }
  }

  return lines.join(' ');
}
