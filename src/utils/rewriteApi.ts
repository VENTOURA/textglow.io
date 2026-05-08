export type ToneName = 'professional' | 'friendly' | 'confident' | 'concise' | 'empathetic' | 'persuasive' | 'direct' | 'polite' | 'funny' | 'flirty';

export interface RewriteRequest {
  text: string;
  tone: ToneName;
}

export interface RewriteResponse {
  rewritten?: string;
  error?: string;
}

export async function callRewriteApi(request: RewriteRequest): Promise<RewriteResponse> {
  try {
    const response = await fetch('https://polisher-server.vercel.app/api/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            text: request.text,
            // the server usually expects sentence case like "Professional"
            tone: request.tone.charAt(0).toUpperCase() + request.tone.slice(1),
        }),
    });

    const data = await response.json();

    if (!response.ok) {
        if (data.error === 'FREE_LIMIT_REACHED') {
            return { error: 'Daily server limit reached. Install the extension for more!' };
        }
        return { error: data.error || 'Failed to rewrite text' };
    }

    return { rewritten: data.data };
  } catch (error) {
    console.error('API call error:', error);
    return { error: 'Network error or service unavailable. Please try again later.' };
  }
}
