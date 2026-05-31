'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export interface Book {
  sys: { id: string };
  fields: {
    title: string;
    author: string;
    description?: string;
    rating?: number;
    coverImage?: { fields: { file: { url: string } } };
  };
}

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  const { title, author, description, rating, coverImage } = book.fields;
  const bookUrl = `/books/${book.sys.id}`;

  return (
    <a href={bookUrl} className="block transition-transform hover:scale-105">
      <Card className="h-full cursor-pointer overflow-hidden">
        {coverImage && (
          <div className="relative h-48 w-full bg-slate-200">
            <img
              src={`https:${coverImage.fields.file.url}`}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="line-clamp-2">{title}</CardTitle>
          <CardDescription>{author}</CardDescription>
        </CardHeader>
        <CardContent>
          {description && (
            <p className="mb-2 line-clamp-2 text-sm text-slate-600">
              {description}
            </p>
          )}
          {rating && (
            <div className="flex items-center">
              <span className="text-sm font-semibold">Rating:</span>
              <span className="ml-2 text-sm">{rating}/5 ⭐</span>
            </div>
          )}
        </CardContent>
      </Card>
    </a>
  );
}
