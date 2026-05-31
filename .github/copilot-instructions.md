# MyBooks - Personal Book Collection Manager

Your Next.js application for managing a personal book collection is now set up!

## Project Setup Complete ✓

- [x] Next.js 16 scaffolded with App Router
- [x] TypeScript configured
- [x] Tailwind CSS configured
- [x] shadcn/ui ready (components/ui directory)
- [x] Contentful CMS integration setup
- [x] Book management pages created
- [x] Note-taking and quote tracking features

## Tech Stack

- **Framework**: Next.js 16 + TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **CMS**: Contentful
- **Linting**: ESLint

## Project Structure

```
mybooks/
├── app/
│   ├── books/              # Book pages
│   │   ├── page.tsx        # Books list
│   │   └── [id]/page.tsx   # Book detail with notes & quotes
│   └── page.tsx            # Home page
├── components/
│   ├── books/              # Book-related components
│   │   ├── BookCard.tsx
│   │   ├── NotesList.tsx
│   │   └── QuotesList.tsx
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── contentful/         # Contentful utilities
│   │   └── client.ts       # Contentful API client
│   └── utils.ts            # Helper functions
└── public/                 # Static files
```

## Next Steps

### 1. Install Dependencies
Open a terminal in the project directory and run:
```bash
npm install
```

This will install:
- contentful (CMS SDK)
- clsx & tailwind-merge (utility functions)
- All other dependencies

### 2. Configure Contentful

1. **Create a Contentful account**: https://www.contentful.com/
2. **Create a new space** (free tier available)
3. **Create Content Models** in Contentful:

   **Book Model:**
   - title (Text, required)
   - author (Text, required)
   - description (Rich Text)
   - rating (Number, 0-5)
   - coverImage (Asset)

   **Note Model:**
   - title (Text, required)
   - content (Rich Text, required)
   - book (Reference to Book, required)

   **Quote Model:**
   - quote (Text, required)
   - author (Text)
   - book (Reference to Book, required)
   - page (Number)

4. **Get API Credentials**:
   - Go to Settings → API Keys
   - Copy your Space ID and Content Delivery API access token

5. **Create .env.local** file:
   ```
   cp .env.example .env.local
   ```
   Then add your Contentful credentials:
   ```
   NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your_space_id
   NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your_access_token
   CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_token
   ```

### 3. Run Development Server
```bash
npm run dev
```

Open http://localhost:3000 to see your application.

### 4. Create Your First Book
1. Go to http://localhost:3000/books
2. Add a book in Contentful dashboard
3. Publish the entry
4. Refresh your browser to see it listed

## Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Run production build
- `npm run lint` - Run ESLint

## Features Ready to Use

- 📚 **Book Collection Page** - View all books in a responsive grid
- 📖 **Book Detail Page** - View individual book info with notes and quotes
- ⭐ **Ratings** - Display book ratings
- 📝 **Notes** - Organize reading notes by book
- 💬 **Quotes** - Save and display favorite quotes
- 🎨 **Modern UI** - Built with Tailwind CSS

## Customization Ideas

- Add more shadcn/ui components (Button, Dialog, etc.)
- Implement search and filtering
- Add user authentication
- Create reading statistics/dashboard
- Add dark mode support
- Implement image optimization
- Add export functionality

## Troubleshooting

**No books showing?**
- Check that your Contentful credentials in .env.local are correct
- Ensure you've published at least one Book entry
- Check browser console for API errors

**Styling issues?**
- Clear .next folder and rebuild: `rm -rf .next && npm run build`
- Tailwind CSS should auto-compile

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Contentful Docs](https://www.contentful.com/developers/)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [shadcn/ui Docs](https://ui.shadcn.com)
