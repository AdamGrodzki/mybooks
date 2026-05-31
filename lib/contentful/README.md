# Contentful Configuration

## Environment Variables

Add the following to your `.env.local` file:

```
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your_space_id
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your_access_token
CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_token
```

## Setup Instructions

1. Create a Contentful space at https://www.contentful.com/
2. Create content models for:
   - **Book**: title, author, description, rating, coverImage, publishDate
   - **Note**: title, content, book (reference), createdAt
   - **Quote**: quote, author, book (reference), page, createdAt
3. Publish your content
4. Copy your Space ID and Access Token to `.env.local`
