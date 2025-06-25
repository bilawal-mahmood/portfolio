'use client';

import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa'; // install if not already

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/923234900245?text=Hi%20Bilawal%2C%20I%20saw%20your%20portfolio!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
    >
      <FaWhatsapp className="text-2xl" />
    </Link>
  );
}
