'use client';

import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="text-3xl sm:text-4xl transition-transform group-hover:scale-110 group-hover:rotate-12 duration-300"><BookOpen /></div>
            <span className="text-2xl sm:text-3xl font-black text-gray-900 group-hover:text-gray-700 transition-colors">
              MyBooks
            </span>
          </Link>

          {/* CTA Button */}
          <Link
            href="/books"
            className="px-7 sm:px-9 py-3 sm:py-4 rounded-xl"
          >
            Moja Kolekcja
          </Link>
        </div>
      </div>
    </nav>
  );
}

