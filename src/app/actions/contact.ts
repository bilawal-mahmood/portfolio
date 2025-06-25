'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { ContactFormState } from '@/types/contact';

const resend = new Resend(process.env.RESEND_API_KEY);

// Zod validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.').max(100),
  email: z.string().email('Invalid email address.').max(100),
  message: z.string().min(10, 'Message must be at least 10 characters.').max(1000),
});

// State type returned to the frontend
export type ContactFormState = {
  message: string;
  status: 'success' | 'error';
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
    _form?: string[]; // general server error
  };
  timestamp?: number;
};

// Main action used in ContactPage
export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get('name')?.toString() || '';
  const email = formData.get('email')?.toString() || '';
  const message = formData.get('message')?.toString() || '';

  // Simple validation
  const errors: ContactFormState['errors'] = {};
  if (!name) errors.name = ['Name is required'];
  if (!email) errors.email = ['Email is required'];
  if (!message) errors.message = ['Message is required'];

  if (Object.keys(errors).length > 0) {
    return {
      message: 'Please correct the errors.',
      status: 'error',
      timestamp: Date.now(),
      errors,
    };
  }

  // Send email or handle the form data...

  return {
    message: 'Message sent successfully!',
    status: 'success',
    timestamp: Date.now(),
    errors: {},
  };
}

  const { name, email, message } = result.data;

  // Fail-safe if RESEND_API_KEY is not configured
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
      subject: `Message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
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
