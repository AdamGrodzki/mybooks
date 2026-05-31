'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BookCard, Book } from './BookCard';
import { BookDetailsModal } from './BookDetailsModal';

interface BooksContentProps {
  books: any[];
}

export function BooksContent({ books }: BooksContentProps) {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const favoriteCount = Math.ceil(books.length * 0.4);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-white w-full">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            📚 MyBooks
          </Link>
          <span className="text-sm text-slate-600">
            Notatki z przeczytanych książek
          </span>
        </div>
      </nav>

      {/* Main Content - Flex Grow */}
      <main className="flex-1 flex flex-col items-center">
        {/* Header with Stats */}
        <div className="container mx-auto px-6 pt-16 pb-8">
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-serif font-bold text-slate-900 mb-2">
              Moja Biblioteka
            </h1>
            <p className="text-slate-600 text-lg">
              Notatki z przeczytanych książek
            </p>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-16 mb-12">
            <div className="text-center">
              <div className="text-5xl font-serif font-bold text-slate-900 mb-1">
                {books.length}
              </div>
              <p className="text-slate-600 font-medium">
                Przeczytanych
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-serif font-bold text-slate-900 mb-1">
                {favoriteCount}
              </div>
              <p className="text-slate-600 font-medium">
                Ulubionych
              </p>
            </div>
          </div>
        </div>

        {/* Content - Horizontal Scroll */}
        <div className="flex-1 flex flex-col">
          {books.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="py-24 text-center">
                <div className="mb-6 text-6xl">📚</div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  Brak książek
                </h2>
                <p className="text-slate-600 mb-8 max-w-md mx-auto">
                  Zacznij budować swoją kolekcję. Dodaj pierwszą książkę w Contentful, aby zobaczyć ją tutaj.
                </p>
                <Link
                  href="/"
                  className="inline-block px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-colors"
                >
                  Wróć do strony głównej
                </Link>
              </div>
            </div>
          ) : (
            <div className="container mx-auto px-6 pb-12">
              {/* Hint text */}
              <p className="text-center text-slate-600 text-sm mb-6">
                Kliknij na książkę, aby zobaczyć notatki
              </p>

              {/* Horizontal Scroll Container */}
              <div className="flex overflow-x-auto gap-6 pb-4 scroll-smooth">
                {books.map((book) => (
                  <BookCard
                    key={book.sys.id}
                    book={book as Book}
                    onOpenDetails={setSelectedBook}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/50 border-t border-slate-200 py-12 mt-auto text-center text-slate-600 text-sm">
        <p>
          Twoja osobista kolekcja literackich przemyśleń
        </p>
      </footer>

      {/* Modal */}
      <BookDetailsModal book={selectedBook} onClose={() => setSelectedBook(null)} />
    </div>
  );
}
