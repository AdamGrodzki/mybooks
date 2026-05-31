import { fetchBookById,   } from '@/lib/contentful/client';
import { NotesList } from '@/components/books/NotesList';
import { QuotesList } from '@/components/books/QuotesList';

interface BookDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function BookDetailPage({
  params,
}: BookDetailPageProps) {
  const { id } = await params;
  
  const [book, , ] = await Promise.all([
    fetchBookById(id),
    // fetchNotesByBook(id),
    // fetchQuotesByBook(id),
  ]);

  if (!book) {
    return (
      <div className="min-h-screen bg-slate-50 py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Book not found</h1>
          <p className="mt-2 text-slate-600">
            <a href="/books" className="text-blue-600 hover:underline">
              Back to books
            </a>
          </p>
        </div>
      </div>
    );
  }

  const bookFields = (book as any).fields;
  const bookCover = bookFields.coverImage?.fields?.file?.url;

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container mx-auto px-4">
        <a
          href="/books"
          className="mb-6 inline-block text-blue-600 hover:underline"
        >
          ← Back to books
        </a>

        <div className="mb-8 grid gap-8 md:grid-cols-3">
          {/* Book Info */}
          <div className="md:col-span-1">
            {bookCover && (
              <img
                src={`https:${bookCover}`}
                alt={bookFields.title}
                className="mb-4 w-full rounded-lg shadow-md"
              />
            )}
            <div className="rounded-lg bg-white p-4 shadow">
              <h1 className="text-2xl font-bold text-slate-900">
                {bookFields.title}
              </h1>
              <p className="mt-2 text-lg text-slate-600">
                by {bookFields.author}
              </p>
              {bookFields.rating && (
                <div className="mt-4">
                  <p className="font-semibold text-slate-700">Rating</p>
                  <p className="text-2xl">
                    {bookFields.rating}
                    <span className="ml-1 text-xl">⭐</span>
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Description and Content */}
          <div className="md:col-span-2 space-y-8">
            {bookFields.description && (
              <div className="rounded-lg bg-white p-6 shadow">
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  Description
                </h2>
                <p className="whitespace-pre-wrap text-slate-700">
                  {bookFields.description}
                </p>
              </div>
            )}

            {/* Notes Section */}
            <div className="rounded-lg bg-white p-6 shadow">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                My Notes
              </h2>
              {/* <NotesList notes={notes as any} /> */}
            </div>

            {/* Quotes Section */}
            <div className="rounded-lg bg-white p-6 shadow">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                Favorite Quotes
              </h2>
              {/* <QuotesList quotes={quotes as any} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
