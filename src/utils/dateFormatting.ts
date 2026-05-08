function getOrdinal(d: number) {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
}

export function formatDate(isoString: string): string {
  const date = new Date(isoString + 'T00:00:00'); // avoid timezone shift
  const day = date.getDate();
  const formatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
  });
  return `${formatter.format(date)} ${day}${getOrdinal(day)}`;
}

export function getNextBusinessDay(isoString: string): string {
  const date = new Date(isoString + 'T00:00:00');
  date.setDate(date.getDate() + 1);
  // Skip Saturday (6) and Sunday (0)
  while (date.getDay() === 0 || date.getDay() === 6) {
    date.setDate(date.getDate() + 1);
  }
  return date.toISOString().split('T')[0];
}
