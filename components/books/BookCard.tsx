'use client';

import { useState } from 'react';

export interface Book {
  sys: { id: string };
  fields: {
    title: string;
    author: string;
    description?: string;
    rating?: number;
    coverImage?: { fields: { file: { url: string } } };
    bookCover?: any;
    notes?: string;
    favouriteQuote?: string;
  };
}

interface BookCardProps {
  book: Book;
  onOpenDetails: (book: Book) => void;
}

// Vibrant, elegant colors for book cards (fallback)
const colorPalette = [
  { bg: 'bg-amber-900', border: 'border-amber-900' },      // Brown
  { bg: 'bg-teal-700', border: 'border-teal-700' },        // Teal
  { bg: 'bg-purple-700', border: 'border-purple-700' },    // Purple
  { bg: 'bg-blue-900', border: 'border-blue-900' },        // Dark Blue
  { bg: 'bg-green-600', border: 'border-green-600' },      // Green
  { bg: 'bg-pink-600', border: 'border-pink-600' },        // Pink/Red
];

function getBookCoverUrl(bookCover: any): string | null {
  if (!bookCover) return null;

  // Handle different Contentful asset link formats
  if (typeof bookCover === 'string') return bookCover;
  if (bookCover.fields?.file?.url) {
    const url = bookCover.fields.file.url;
    return url.startsWith('http') ? url : `https:${url}`;
  }
  if (bookCover.url) {
    const url = bookCover.url;
    return url.startsWith('http') ? url : `https:${url}`;
  }

  return null;
}

export function BookCard({ book, onOpenDetails }: BookCardProps) {
  const [imageError, setImageError] = useState(false);
  const { title, author, rating, bookCover } = book.fields;

  // Use book ID to assign colors (fallback)
  const colorIndex = book.sys.id.charCodeAt(0) % colorPalette.length;
  const colors = colorPalette[colorIndex];

  const coverImageUrl = getBookCoverUrl(bookCover);

  return (
    <button
      onClick={() => onOpenDetails(book)}
      className="group relative flex-shrink-0 min-w-max w-56 h-80 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2"
      style={{
        perspective: '1000px',
      }}
    >
      {/* Book Shadow/3D Effect */}
      <div className="absolute inset-0 rounded-xl shadow-2xl group-hover:shadow-2xl transition-shadow duration-300" />

      {/* Book Cover Background */}
      {coverImageUrl && !imageError ? (
        <img
          src={coverImageUrl}
          alt={title}
          onError={() => setImageError(true)}
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
        />
      ) : (
        <div className={`absolute inset-0 w-full h-full ${colors.bg} rounded-xl`} />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-xl" />

      {/* Book Spine Effect (optional 3D right edge) */}
      <div className="absolute top-0 right-0 w-2 h-full bg-black/40 rounded-r-xl" />

      {/* Content - Bottom Section */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 rounded-xl">
        {/* Title */}
        <h3 className="font-bold text-xl line-clamp-2 mb-1 leading-tight font-serif !text-white drop-shadow-lg group-hover:translate-y-1 transition-transform">
          {title}
        </h3>

        {/* Author */}
        <p className="text-sm opacity-90 font-light !text-white drop-shadow-lg mb-3 group-hover:translate-y-1 transition-transform">
          {author}
        </p>

        {/* Rating */}
        {rating && (
          <div className="flex gap-0.5 drop-shadow-lg group-hover:translate-y-1 transition-transform">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-sm ${i < Math.floor(rating) ? 'text-yellow-300' : 'text-white/30'}`}
              >
                ★
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Hover Shine Effect */}
      <div className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
    </button>
  );
}
