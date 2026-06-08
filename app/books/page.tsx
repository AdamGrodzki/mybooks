import { fetchBooks } from '@/lib/contentful/client';
import { BooksContent } from '@/components/books/BooksContent';

// Revalidate co 60 sekund (ISR)
export const revalidate = 60;

export default async function BooksPage() {
  const books = await fetchBooks();

  return <BooksContent books={books} />;
}
