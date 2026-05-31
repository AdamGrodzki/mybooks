import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
});

export const previewClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN || '',
  host: 'preview.contentful.com',
});

export async function fetchBooks() {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'myBooks',
      // order: '-sys.createdAt',
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
}

export async function fetchBookById(id: string) {
  try {
    const response = await contentfulClient.getEntry(id);
    return response;
  } catch (error) {
    console.error('Error fetching book:', error);
    return null;
  }
}
