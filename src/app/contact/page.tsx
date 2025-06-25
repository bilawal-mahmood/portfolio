'use client';

import { useActionState, useRef } from 'react';
import { submitContactForm } from '@/app/actions/contact';
import Navbar from '@/components/Navbar';

// Define the correct type
type ContactFormState = {
  message: string;
  status: 'success' | 'error';
  timestamp: number;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

const initialState: ContactFormState = {
  message: '',
  status: 'idle',
  timestamp: Date.now(),
  errors: {},
};

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-slate-800 text-white">
      <Navbar />

      <section className="pt-24 max-w-xl mx-auto px-4 pb-12 animate-fade-in">
        <h1 className="text-3xl font-bold mb-6 text-center text-teal-400">Contact Me</h1>

        <form
          ref={formRef}
          action={formAction}
          className="space-y-4 bg-white text-black shadow-lg p-6 rounded-lg"
        >
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-teal-200"
            />
            {state.errors?.name && (
              <p className="text-sm text-red-600 mt-1">{state.errors.name.join(', ')}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-teal-200"
            />
            {state.errors?.email && (
              <p className="text-sm text-red-600 mt-1">{state.errors.email.join(', ')}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-teal-200"
            />
            {state.errors?.message && (
              <p className="text-sm text-red-600 mt-1">{state.errors.message.join(', ')}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition"
          >
            Send Message
          </button>

          {state.message && (
            <p
              className={`text-sm mt-3 ${
                state.status === 'success' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {state.message}
            </p>
          )}
        </form>
      </section>
    </div>
  );
}
