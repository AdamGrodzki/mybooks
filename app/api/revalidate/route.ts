import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // Weryfikacja tokenu (zabezpieczenie)
  const authHeader = request.headers.get('authorization');
  const token = process.env.CONTENTFUL_REVALIDATE_SECRET;

  if (!token || authHeader !== `Bearer ${token}`) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    
    // Contentful webhook payload zawiera informacje o zmianach
    console.log('Contentful webhook received:', body);

    // Revalidate wszystkie strony z książkami
    revalidatePath('/books');
    revalidatePath('/');
    
    // Jeśli używasz tagów (opcjonalnie)

    // Jeśli to konkretna książka - revalidate jej strony szczegółów
    if (body.sys?.id) {
      revalidatePath(`/books/${body.sys.id}`);
    }

    return NextResponse.json({ 
      revalidated: true, 
      now: Date.now(),
      message: 'Cache cleared successfully' 
    });
  } catch (err) {
    console.error('Error revalidating:', err);
    return NextResponse.json(
      { message: 'Error revalidating', error: String(err) },
      { status: 500 }
    );
  }
}

// Opcjonalnie - GET endpoint do ręcznego testowania
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  const token = process.env.CONTENTFUL_REVALIDATE_SECRET;

  if (!token || authHeader !== `Bearer ${token}`) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    revalidatePath('/books');
    revalidatePath('/');

    return NextResponse.json({ 
      revalidated: true, 
      now: Date.now(),
      message: 'Manual revalidation successful' 
    });
  } catch (err) {
    return NextResponse.json(
      { message: 'Error revalidating', error: String(err) },
      { status: 500 }
    );
  }
}
