
'use server';

import { z } from 'zod';
import { headers } from 'next/headers';

const formSchema = z.object({
  fullName: z.string(),
  whatsappNumber: z.string(),
  email: z.string().email(),
  spellType: z.string(),
  targetName: z.string(),
  message: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

const TELEGRAM_BOT_TOKEN = '6858405369:AAHIBm11hz5SSLgH_BZb9mSSFBIOkeiExb8';
const TELEGRAM_CHAT_ID = '5485468089';

export async function submitBooking(values: FormValues) {
  const headersList = headers();
  const ip = headersList.get('x-forwarded-for') || 'Not available';

  const messageText = `
New spell booking from Solution temple

Full Name: ${values.fullName}
WhatsApp: ${values.whatsappNumber}
Email: ${values.email}
Spell Type: ${values.spellType}
Target's Name: ${values.targetName}

Situation:
${values.message}

---
Client IP: ${ip}
`;

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: messageText,
      }),
    });

    const result = await response.json();
    
    if (!result.ok) {
      console.error('Telegram API error:', result);
      return { success: false, error: 'Failed to send notification.' };
    }

    return { success: true };
  } catch (error) {
    console.error('Error submitting booking:', error);
    return { success: false, error: 'An unexpected error occurred.' };
  }
}
