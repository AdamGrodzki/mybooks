export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="border-b border-slate-200 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-slate-900">📚 MyBooks</h1>
          <p className="mt-1 text-slate-600">Your personal book collection and reading companion</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Features */}
          <section className="rounded-lg bg-white p-8 shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">Features</h2>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-xl">📖</span>
                <span>Organize your entire book collection in one place</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">⭐</span>
                <span>Rate and review books you've read</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">📝</span>
                <span>Write detailed notes about each book</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">💬</span>
                <span>Save your favorite quotes from books</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🌐</span>
                <span>Built with Next.js, Tailwind CSS, and Contentful</span>
              </li>
            </ul>
          </section>

          {/* Getting Started */}
          <section className="rounded-lg bg-white p-8 shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">Getting Started</h2>
            <div className="space-y-4 text-slate-700">
              <p>
                <strong>1. Configure Contentful</strong>
                <br />
                Set up your Contentful space and add your API credentials to <code className="rounded bg-slate-100 px-2 py-1">.env.local</code>
              </p>
              <p>
                <strong>2. Create Content Models</strong>
                <br />
                Add Book, Note, and Quote content types in Contentful
              </p>
              <p>
                <strong>3. Start Adding Books</strong>
                <br />
                Create your first book and start tracking your reading journey
              </p>
            </div>
          </section>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a
            href="/books"
            className="inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            View My Book Collection →
          </a>
        </div>
      </main>
    </div>
  );
}
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
