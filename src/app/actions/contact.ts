'use server';

import { z } from 'zod';
import { Resend } from 'resend';

export type ContactFormState = {
  message: string;
  status: 'success' | 'error';
  timestamp: number;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
    _form?: string[];
  };
};

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.').max(100),
  email: z.string().email('Invalid email address.').max(100),
  message: z.string().min(10, 'Message must be at least 10 characters.').max(1000),
});

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get('name')?.toString() || '';
  const email = formData.get('email')?.toString() || '';
  const message = formData.get('message')?.toString() || '';

  const result = contactFormSchema.safeParse({ name, email, message });

  if (!result.success) {
    const zodErrors = result.error.flatten().fieldErrors;
    return {
      message: 'Validation failed.',
      status: 'error',
      errors: {
        name: zodErrors.name,
        email: zodErrors.email,
        message: zodErrors.message,
      },
      timestamp: Date.now(),
    };
  }

  const { name: validName, email: validEmail, message: validMessage } = result.data;

  if (!process.env.RESEND_API_KEY) {
    return {
      message: 'Server configuration error.',
      status: 'error',
      errors: { _form: ['Email service not configured.'] },
      timestamp: Date.now(),
    };
  }

  try {
    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['bilawal.mahmood@gmail.com'],
      subject: `Message from ${validName}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${validName}</p>
        <p><strong>Email:</strong> ${validEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${validMessage.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: validEmail,
    });

    if (error) {
      return {
        message: 'Failed to send message.',
        status: 'error',
        errors: { _form: [error.message] },
        timestamp: Date.now(),
      };
    }

    return {
      message: 'Your message was sent successfully!',
      status: 'success',
      timestamp: Date.now(),
    };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unexpected server error.';
    return {
      message: errorMessage,
      status: 'error',
      errors: { _form: [errorMessage] },
      timestamp: Date.now(),
    };
  }
}
