'use client';

import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 sm:mb-10 text-6xl sm:text-7xl md:text-8xl text-red-500"><BookOpen /></div>
          
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-black mb-8 sm:mb-10 leading-none tracking-tighter">
            MyBooks
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-slate-900 mb-5 sm:mb-6 leading-snug font-semibold max-w-2xl mx-auto">
            Twoja osobista kolekcja książek
          </p>

          <p className="text-lg sm:text-xl text-slate-600 mb-12 sm:mb-16 leading-relaxed max-w-xl mx-auto">
            Organizuj, notujesz i zapisujesz ulubione cytaty w jednym miejscu.
          </p>

          <Link
            href="/books"
            className="inline-flex items-center justify-center gap-3"
          >
            Przejdź do Kolekcji
            <span className="text-xl sm:text-2xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
