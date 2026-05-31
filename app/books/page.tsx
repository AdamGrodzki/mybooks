import { fetchBooks } from '@/lib/contentful/client';
import { BookCard } from '@/components/books/BookCard';

export default async function BooksPage() {
  const books = await fetchBooks();

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="mb-2 text-4xl font-bold text-slate-900">My Book Collection</h1>
        <p className="mb-8 text-slate-600">
          Explore my reading journey with notes, ratings, and favorite quotes
        </p>

        {books.length === 0 ? (
          <div className="rounded-lg border border-dashed border-slate-300 py-12 text-center">
            <p className="text-slate-500">
              No books yet. Set up Contentful and add some books to get started!
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
              <BookCard key={book.sys.id} book={book as any} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
