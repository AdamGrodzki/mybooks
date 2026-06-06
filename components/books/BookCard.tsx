'use client';

import { useState } from 'react';
import { Heart } from 'lucide-react';

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
    favBook?: boolean;
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
  const { title, author, rating, bookCover, favBook } = book.fields;

  // Use book ID to assign colors (fallback)
  const colorIndex = book.sys.id.charCodeAt(0) % colorPalette.length;
  const colors = colorPalette[colorIndex];

  const coverImageUrl = getBookCoverUrl(bookCover);

  return (
    <button
      onClick={() => onOpenDetails(book)}
      className="group relative w-full h-80 sm:h-96 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2"
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Strong Drop Shadow - 3D Book Effect */}
      <div className="absolute -inset-1 rounded-xl shadow-2xl group-hover:shadow-2xl transition-shadow duration-300" />

      {/* Book Top Edge (3D depth) */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-b from-white/20 to-transparent rounded-t-xl" />

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
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 rounded-xl" />

      {/* Book Spine/Right Edge (3D effect) */}
      <div className="absolute top-0 right-0 w-3 h-full bg-gradient-to-r from-black/30 to-black/50 group-hover:from-black/40 group-hover:to-black/60 transition-all duration-300" />

      {/* Book Bottom Edge (3D depth) */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-t from-black/40 to-transparent rounded-b-xl" />

      {/* Favorite Heart Badge - Top Right */}
      {favBook && (
        <div className="absolute top-3 right-3 z-10 bg-red-500 rounded-full p-2 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 border-2 border-white">
          <Heart className="w-4 h-4 text-white fill-white" />
        </div>
      )}

      {/* Content - Bottom Section */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 rounded-xl">
        {/* Title */}
        <h3 className="font-bold text-lg sm:text-xl line-clamp-2 mb-2 leading-tight font-serif !text-white drop-shadow-lg group-hover:translate-y-1 transition-transform">
          {title}
        </h3>

        {/* Author */}
        <p className="text-xs sm:text-sm opacity-90 font-light !text-white drop-shadow-lg mb-3 group-hover:translate-y-1 transition-transform">
          {author}
        </p>

        {/* Rating */}
        {rating && (
          <div className="flex gap-0.5 drop-shadow-lg group-hover:translate-y-1 transition-transform">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-xs sm:text-sm ${i < Math.floor(rating) ? 'text-yellow-300' : 'text-white/30'}`}
              >
                ★
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Premium Shine/Gloss Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/0 via-transparent to-white/0 group-hover:from-white/15 group-hover:via-transparent group-hover:to-white/5 transition-all duration-300" />
    </button>
  );
}
