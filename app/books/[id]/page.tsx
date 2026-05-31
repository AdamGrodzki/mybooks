import Link from 'next/link';
import { fetchBookById } from '@/lib/contentful/client';

interface BookDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function BookDetailPage({
  params,
}: BookDetailPageProps) {
  const { id } = await params;

  const book = await fetchBookById(id);

  if (!book) {
    return (
      <div className="flex flex-col min-h-screen bg-white w-full">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-slate-900">
              📚 MyBooks
            </Link>
          </div>
        </nav>

        <div className="flex-1 flex items-center justify-center">
          <div className="container mx-auto px-6 py-20 text-center">
            <div className="text-6xl mb-6">📖</div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Book Not Found</h1>
            <p className="text-slate-600 mb-8 max-w-md mx-auto">
              This book doesn't exist or has been removed.
            </p>
            <Link
              href="/books"
              className="inline-block px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-colors"
            >
              Back to Collection
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const bookFields = (book as any).fields;
  const bookCover = bookFields.coverImage?.fields?.file?.url;

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-slate-900">
            📚 MyBooks
          </Link>
        </div>
      </nav>

      {/* Back Button */}
      <div className="container mx-auto px-6 pt-8">
        <Link
          href="/books"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors font-medium"
        >
          <span>←</span>
          <span>Back to Collection</span>
        </Link>
      </div>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 py-12 w-full">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Sidebar: Book Cover & Info */}
          <div className="md:col-span-1">
            {/* Cover Image */}
            {bookCover && (
              <div className="mb-6 rounded-xl overflow-hidden border-2 border-slate-200 h-auto shadow-md">
                <img
                  src={`https:${bookCover}`}
                  alt={bookFields.title}
                  className="w-full h-auto"
                />
              </div>
            )}

            {!bookCover && (
              <div className="mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center h-72 border-2 border-slate-200">
                <span className="text-7xl">📚</span>
              </div>
            )}

            {/* Book Info Card */}
            <div className="rounded-xl bg-primary-50 border-2 border-primary-200 p-8">
              <h1 className="text-2xl font-bold text-slate-900 mb-2">
                {bookFields.title}
              </h1>
              <p className="text-slate-700 font-medium mb-6">
                by {bookFields.author}
              </p>

              {/* Rating */}
              {bookFields.rating && (
                <div className="mb-8 pb-8 border-b-2 border-primary-200">
                  <p className="text-sm font-semibold text-slate-700 mb-3">Rating</p>
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.floor(bookFields.rating) ? 'text-yellow-500 text-xl' : 'text-slate-300 text-xl'}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="font-bold text-slate-900 ml-2">{bookFields.rating}/5</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Description */}
            {bookFields.description && (
              <div className="rounded-xl bg-secondary-50 border-2 border-secondary-200 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">About</h2>
                <p className="whitespace-pre-wrap text-slate-700 leading-relaxed">
                  {bookFields.description}
                </p>
              </div>
            )}

            {/* Notes Section */}
            <div className="rounded-xl bg-accent-50 border-2 border-accent-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📝</span>
                <h2 className="text-2xl font-bold text-slate-900">Notes</h2>
              </div>
              <p className="text-slate-600 text-sm">Coming soon: Add notes for this book</p>
            </div>

            {/* Quotes Section */}
            <div className="rounded-xl bg-success-50 border-2 border-success-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">💬</span>
                <h2 className="text-2xl font-bold text-slate-900">Quotes</h2>
              </div>
              <p className="text-slate-600 text-sm">Coming soon: Save quotes from this book</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 mt-auto">
        <div className="container mx-auto px-6 text-center text-slate-600">
          <p>Made with 💕 for book lovers</p>
        </div>
      </footer>
    </div>
  );
}
