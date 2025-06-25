'use client';

import Navbar from '@/components/Navbar';
import {
  Mail,
  Linkedin,
  Facebook,
  Instagram
} from 'lucide-react';

export default function Home() {
  return (
    <>
      <Navbar />
      
      <section className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-20 px-6 text-center">
      {/* BM Logo Circle */}
        <div className="w-24 h-24 mx-auto rounded-full border-4 border-teal-400 flex items-center justify-center text-2xl font-bold shadow-xl bg-slate-950 text-white">
          BM
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mt-6 font-headline text-teal-400">
          Welcome! I’m Bilawal Mahmood.
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto mt-6 text-gray-300 text-lg leading-relaxed font-body">
        I’m a Unity & AR Developer, Specializing in immersive AR and Unity experiences — including XR development,
          AR Foundation, Vuforia, multiplayer games, physics-based simulations, and
          custom tool development. Passionate about integrating BIM and building the future of interactive tech.
        </p>

        <p className="mt-4 text-gray-400 font-body">
          Let’s connect and explore what we can build together.
        </p>

        {/* Social Links */}
        <div className="mt-10 flex justify-center gap-6">
          <a
            href="mailto:bilawal.mahmood@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300 transition-transform transform hover:scale-110"
            title="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/bilawal-mahmood-366877310/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300 transition-transform transform hover:scale-110"
            title="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/DrBilawalmah"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300 transition-transform transform hover:scale-110"
            title="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/drbilawalmah"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300 transition-transform transform hover:scale-110"
            title="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </section>
    </>
  );
}
