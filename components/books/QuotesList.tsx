'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export interface BookQuote {
  sys: { id: string };
  fields: {
    quote: string;
    author?: string;
    page?: number;
    createdAt?: string;
  };
}

interface QuotesListProps {
  quotes: BookQuote[];
}

export function QuotesList({ quotes }: QuotesListProps) {
  if (quotes.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-slate-300 p-6 text-center">
        <p className="text-slate-500">No quotes saved yet for this book.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {quotes.map((quote) => (
        <Card key={quote.sys.id} className="border-l-4 border-l-blue-500">
          <CardContent className="pt-6">
            <blockquote className="space-y-2">
              <p className="italic text-slate-700">"{quote.fields.quote}"</p>
              <div className="flex items-center justify-between text-sm text-slate-500">
                <span>
                  {quote.fields.author && `— ${quote.fields.author}`}
                </span>
                {quote.fields.page && <span>p. {quote.fields.page}</span>}
              </div>
            </blockquote>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
