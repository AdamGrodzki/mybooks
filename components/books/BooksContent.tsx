'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BookCard, Book } from './BookCard';
import { BookDetailsModal } from './BookDetailsModal';
import { BookOpen, ArrowBigLeft, ArrowBigDown, Ban } from 'lucide-react';
import Image from 'next/image';
import emptyBook from '../../public/emptyBook.svg';


interface BooksContentProps {
  books: any[];
}

export function BooksContent({ books }: BooksContentProps) {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const favoriteCount = Math.ceil(books.length * 0.4);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 w-full">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20 sm:h-24">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="text-3xl sm:text-4xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"><BookOpen /></div>
              <span className="text-2xl sm:text-3xl font-black text-gray-900 group-hover:text-gray-700 transition-colors">
                MyBooks
              </span>
            </Link>
            <Link
              href="/"
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-gray-800 hover:to-gray-700 transition-all duration-300 font-black text-sm sm:text-base inline-flex items-center gap-2 group hover:scale-105 shadow-lg"
            >
              <ArrowBigLeft className="group-hover:-translate-x-1 transition-transform text-lg" />
              <span>Wróć</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content - Flex Grow */}
      <main className="flex-1 flex flex-col">
        {/* Header with Stats */}
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 pt-12 sm:pt-20 pb-8 sm:pb-1">
          <div className="mb-12 sm:mb-16 text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-4 sm:mb-6 tracking-tighter drop-shadow-sm">
              Moja Biblioteka
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-bold">
              Kolekcja notatek z przeczytanych książek
            </p>
          </div>

          {/* Stats - Responsive Grid */}
          {books.length > 0 && (
            <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-20 mb-14 sm:mb-20">
              <div className="text-center">
                <div className="text-6xl sm:text-7xl md:text-8xl font-black text-gray-900 mb-3 sm:mb-4">
                  {books.length}
                </div>
                <p className="text-gray-700 font-black text-base sm:text-lg uppercase tracking-wider">
                  Książek
                </p>
              </div>
              <div className="hidden sm:block w-px bg-gray-300" />
              <div className="text-center">
                <div className="text-6xl sm:text-7xl md:text-8xl font-black text-gray-900 mb-3 sm:mb-4">
                  {favoriteCount}
                </div>
                <p className="text-gray-700 font-black text-base sm:text-lg uppercase tracking-wider">
                  Ulubionych
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Content - Books Grid/Scroll */}
        <div className="flex-1 flex flex-col">
          {books.length === 0 ? (
            <div className="flex-1 flex items-center justify-center px-4 sm:px-6">
              <div className="py-16 sm:py-0 text-center max-w-lg mx-auto">
                <div className="mb-6 sm:mb-8 text-9xl flex justify-center"><Image src={emptyBook} alt="Brak książek" /></div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-5 tracking-tight">
                  Brak książek
                </h2>
                <p className="text-gray-700 mb-8 sm:mb-12 text-lg sm:text-xl leading-relaxed font-bold">
                  Zacznij budować swoją kolekcję. Dodaj pierwszą książkę w Contentful, aby zobaczyć ją tutaj.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-3 px-12 sm:px-14 py-5 sm:py-6 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 text-white font-black transition-all duration-300 hover:from-gray-800 hover:to-gray-700 hover:scale-110 shadow-2xl text-lg sm:text-xl"
                >
                  <ArrowBigLeft className="text-xl sm:text-2xl" />
                  Wróć do strony głównej
                </Link>
              </div>
            </div>
          ) : (
              <div className="container mx-auto px-6 sm:px-8 lg:px-12 pb-12 sm:pb-16">
              {/* Hint text */}
                <p className="text-center text-gray-700 text-base sm:text-lg mb-6 sm:mb-8 font-bold">
                  <ArrowBigDown className="inline-block mr-2" />
                  Kliknij na książkę, aby zobaczyć szczegóły
              </p>

                {/* Horizontal Scroll Container - Responsive */}
                <div className="overflow-x-auto pb-6 scroll-smooth -mx-6 sm:-mx-8 lg:-mx-12 px-6 sm:px-8 lg:px-12">
                  <div className="flex gap-5 sm:gap-8">
                    {books.map((book) => (
                      <BookCard
                        key={book.sys.id}
                        book={book as Book}
                        onOpenDetails={setSelectedBook}
                      />
                    ))}
                  </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-100 border-t border-gray-200 py-8 sm:py-10 mt-auto text-center">
        <p className="text-base sm:text-lg text-gray-700 font-bold">
          © 2025 MyBooks. Wszystkie prawa zastrzeżone.
        </p>
      </footer>

      {/* Modal */}
      <BookDetailsModal book={selectedBook} onClose={() => setSelectedBook(null)} />
    </div>
  );
}
