'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export interface BookNote {
  sys: { id: string };
  fields: {
    title: string;
    content: string;
    createdAt?: string;
  };
}

interface NotesListProps {
  notes: BookNote[];
}

export function NotesList({ notes }: NotesListProps) {
  if (notes.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-slate-300 p-6 text-center">
        <p className="text-slate-500">No notes yet for this book.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <Card key={note.sys.id}>
          <CardHeader>
            <CardTitle className="text-lg">{note.fields.title}</CardTitle>
            {note.fields.createdAt && (
              <p className="text-sm text-slate-500">
                {new Date(note.fields.createdAt).toLocaleDateString()}
              </p>
            )}
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap text-slate-700">
              {note.fields.content}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
