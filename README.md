# 📚 MyBooks - Personal Book Collection Manager

A modern web application for managing your personal book collection with notes, ratings, and favorite quotes. Built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), [shadcn/ui](https://ui.shadcn.com), and [Contentful](https://www.contentful.com) CMS.

## Features

- 📖 **Book Collection** - Organize and browse all your books
- ⭐ **Ratings & Reviews** - Rate books and write descriptions
- 📝 **Personal Notes** - Take notes while reading
- 💬 **Quote Library** - Save and organize your favorite quotes
- 🎨 **Modern UI** - Built with Tailwind CSS and shadcn/ui components
- 🚀 **Fast & Performant** - Next.js with App Router
- 🌐 **Headless CMS** - Powered by Contentful for easy content management

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com)
- **CMS**: [Contentful](https://www.contentful.com)
- **Code Quality**: ESLint

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm, yarn, pnpm, or bun
- A Contentful account (free tier available)

### Installation

1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   ```

### Configure Contentful

1. Create a free account at [Contentful](https://www.contentful.com)
2. Create a new space
3. In the Contentful dashboard, create the following content models:

   **Book**
   - Title (Text, required)
   - Author (Text, required)
   - Description (Rich Text, optional)
   - Rating (Number, 0-5, optional)
   - CoverImage (Asset, optional)
   - PublishDate (Date, optional)

   **Note**
   - Title (Text, required)
   - Content (Rich Text, required)
   - Book (Reference to Book, required)

   **Quote**
   - Quote (Text, required)
   - Author (Text, optional)
   - Book (Reference to Book, required)
   - Page (Number, optional)

4. Publish your content models
5. Create API keys:
   - Go to Settings → API Keys
   - Copy your Space ID and Access Token
6. Create a `.env.local` file in the project root:
   ```bash
   cp .env.example .env.local
   ```
7. Add your Contentful credentials:
   ```
   NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your_space_id
   NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your_access_token
   CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_token
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
mybooks/
├── app/                    # Next.js app directory
│   ├── books/             # Book-related pages
│   │   ├── page.tsx       # Books list page
│   │   └── [id]/          # Book detail page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── books/             # Book-related components
│   │   ├── BookCard.tsx
│   │   ├── NotesList.tsx
│   │   └── QuotesList.tsx
│   └── ui/                # shadcn/ui components
├── lib/
│   ├── contentful/        # Contentful client and utilities
│   │   ├── client.ts      # Contentful API client
│   │   └── README.md      # Contentful setup guide
│   └── utils.ts           # Utility functions
├── public/                # Static assets
├── .env.example           # Example environment variables
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## Usage

### Adding Books

1. Go to your Contentful dashboard
2. Create a new "Book" entry
3. Fill in the required fields (title, author)
4. Add optional details (description, rating, cover image)
5. Publish the entry

### Adding Notes

1. Create a new "Note" entry
2. Write your note content
3. Link it to a book
4. Publish

### Adding Quotes

1. Create a new "Quote" entry
2. Add the quote text
3. Optionally add the author and page number
4. Link it to a book
5. Publish

## Roadmap

- [ ] User authentication
- [ ] Favorites/bookmarks
- [ ] Reading statistics and charts
- [ ] Book recommendations
- [ ] Search functionality
- [ ] Tags and categories
- [ ] Export data functionality
- [ ] Dark mode support

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
- [Contentful Documentation](https://www.contentful.com/developers/)

## License

This project is open source and available under the MIT License.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
