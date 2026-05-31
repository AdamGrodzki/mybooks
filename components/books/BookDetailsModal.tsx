'use client';

import { Book } from './BookCard';

interface BookDetailsModalProps {
  book: Book | null;
  onClose: () => void;
}

// Colors matching BookCard
const colorPalette = [
  { bg: 'bg-amber-900', border: 'border-amber-900' },
  { bg: 'bg-teal-700', border: 'border-teal-700' },
  { bg: 'bg-purple-700', border: 'border-purple-700' },
  { bg: 'bg-blue-900', border: 'border-blue-900' },
  { bg: 'bg-green-600', border: 'border-green-600' },
  { bg: 'bg-pink-600', border: 'border-pink-600' },
];

function getBookCoverUrl(bookCover: any): string | null {
  if (!bookCover) return null;
  
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

export function BookDetailsModal({ book, onClose }: BookDetailsModalProps) {
  if (!book) return null;

  const { title, author, rating, notes, favouriteQuote, bookCover, dateRead } = book.fields as any;
  const colorIndex = book.sys.id.charCodeAt(0) % colorPalette.length;
  const colors = colorPalette[colorIndex];
  const coverUrl = getBookCoverUrl(bookCover);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-screen overflow-hidden shadow-2xl flex flex-col">
          {/* Banner with Book Cover */}
          <div
            className={`${colors.bg} relative h-64 overflow-hidden`}
            style={
              coverUrl
                ? {
                    backgroundImage: `url(${coverUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }
                : {}
            }
          >
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white/80 hover:text-white text-3xl transition-colors z-10"
            >
              ✕
            </button>

            {/* Title & Author at Bottom of Banner */}
            <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
              <h2 className="text-5xl font-serif font-bold mb-2 line-clamp-2 !text-white drop-shadow-lg">
                {title}
              </h2>
              <p className="text-lg opacity-95 !text-white drop-shadow-lg font-light">
                {author}
              </p>
            </div>
          </div>

          {/* Meta Bar */}
          <div className="bg-slate-100 px-12 py-6 flex items-center justify-between border-b border-slate-200">
            <span className="text-slate-600 text-base font-medium">{dateRead ? `Książka Przeczytana: ${new Date(dateRead).toLocaleDateString()}` : 'Nie zaczęto czytać'}</span>
            {rating && (
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-slate-300'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Content - Scrollable */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-12 space-y-10">
              {/* Notes Section */}
              {notes && (
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-4xl">📝</span>
                    <h3 className="text-3xl font-serif font-bold text-slate-900">
                      Moje notatki
                    </h3>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-10 border-l-4 border-amber-500 shadow-sm">
                    <p className="text-slate-800 text-base whitespace-pre-wrap leading-relaxed font-light">
                      {notes}
                    </p>
                  </div>
                </div>
              )}

              {!notes && (
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-4xl">📝</span>
                    <h3 className="text-3xl font-serif font-bold text-slate-900">
                      Moje notatki
                    </h3>
                  </div>
                  <p className="text-slate-400 text-base italic">
                    Nie dodałeś jeszcze notatek do tej książki.
                  </p>
                </div>
              )}

              {/* Quote Section */}
              {favouriteQuote && (
                <div className="pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-4xl">💬</span>
                    <h3 className="text-3xl font-serif font-bold text-slate-900">
                      Ulubiony cytat
                    </h3>
                  </div>

                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-10 border-l-4 border-pink-500 shadow-sm">
                    <p className="text-slate-800 text-base italic leading-relaxed font-light">
                      "{favouriteQuote}"
                    </p>
                  </div>
                </div>
              )}

              {!favouriteQuote && (
                <div className={notes ? 'pt-6 border-t border-slate-200' : ''}>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-4xl">💬</span>
                    <h3 className="text-3xl font-serif font-bold text-slate-900">
                      Ulubiony cytat
                    </h3>
                  </div>
                  <p className="text-slate-400 text-base italic">
                    Nie dodałeś jeszcze cytatów z tej książki.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100 px-12 py-8 flex justify-center">
            <button
              onClick={onClose}
              className="px-10 py-4 text-slate-700 font-semibold hover:bg-white rounded-lg transition-all duration-200 hover:shadow-md"
            >
              Zamknij
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
