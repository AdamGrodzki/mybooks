import { fetchBooks } from '@/lib/contentful/client';
import { BooksContent } from '@/components/books/BooksContent';

export default async function BooksPage() {
  const books = await fetchBooks();

  return <BooksContent books={books} />;
}
