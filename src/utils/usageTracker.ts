const STORAGE_KEY = 'textglow_demo_uses';
const MAX_DAILY_USES = 3;

export interface UsageState {
  count: number;
  date: string;  // ISO date string (YYYY-MM-DD)
}

export function getUsage(): UsageState {
  const stored = localStorage.getItem(STORAGE_KEY);
  const today = new Date().toISOString().split('T')[0];
  
  if (!stored) return { count: 0, date: today };
  
  try {
    const parsed = JSON.parse(stored) as UsageState;
    // Reset if it's a new day
    if (parsed.date !== today) {
      return { count: 0, date: today };
    }
    return parsed;
  } catch (e) {
    return { count: 0, date: today };
  }
}

export function incrementUsage(): UsageState {
  const usage = getUsage();
  const updated = { count: usage.count + 1, date: usage.date };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}

export function canUse(): boolean {
  return getUsage().count < MAX_DAILY_USES;
}

export function remainingUses(): number {
  return Math.max(0, MAX_DAILY_USES - getUsage().count);
}
