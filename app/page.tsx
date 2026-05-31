import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-900">📚 MyBooks</h1>
          <Link
            href="/books"
            className="px-6 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-colors"
          >
            My Collection
          </Link>
        </div>
      </nav>

      {/* Main Content - Flex Grow */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-32 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-bold text-slate-900 mb-6">
              Your Personal<br />
              <span className="text-primary-600">Book Collection</span>
            </h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              Organize, rate, and track your reading journey. Save quotes, write notes, and build your perfect book library.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/books"
                className="px-8 py-4 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-colors"
              >
                Start Exploring
              </Link>
              <a
                href="#features"
                className="px-8 py-4 rounded-lg border-2 border-slate-300 text-slate-900 hover:bg-slate-100 transition-colors font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">Key Features</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="p-8 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Organize</h3>
                <p className="text-slate-600">Manage your complete book collection in one place</p>
              </div>

              {/* Feature 2 */}
              <div className="p-8 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Rate</h3>
                <p className="text-slate-600">Give ratings and track your favorites easily</p>
              </div>

              {/* Feature 3 */}
              <div className="p-8 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Note</h3>
                <p className="text-slate-600">Write detailed notes and thoughts on each book</p>
              </div>

              {/* Feature 4 */}
              <div className="p-8 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Quote</h3>
                <p className="text-slate-600">Save and preserve your favorite quotes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Setup Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-2xl">
            <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">Getting Started</h2>

            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex gap-6 p-6 rounded-xl bg-blue-50 border border-primary-200">
                <div className="text-2xl font-bold text-primary-600 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Configure Contentful</h3>
                  <p className="text-slate-600 text-sm">Connect your Contentful CMS and add API credentials</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 p-6 rounded-xl bg-cyan-50 border border-secondary-200">
                <div className="text-2xl font-bold text-secondary-600 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Create Content Models</h3>
                  <p className="text-slate-600 text-sm">Set up Book, Note, and Quote models in Contentful</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 p-6 rounded-xl bg-purple-50 border border-accent-200">
                <div className="text-2xl font-bold text-accent-600 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Start Adding Books</h3>
                  <p className="text-slate-600 text-sm">Create your first book and begin your reading journey</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Begin?</h2>
            <p className="text-slate-600 mb-8 max-w-md mx-auto">Start organizing your reading journey today</p>
            <Link
            href="/books"
              className="inline-block px-8 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-colors"
          >
              View My Collection
            </Link>
        </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 mt-auto">
        <div className="container mx-auto px-6 text-center text-slate-600">
          <p>Made with 💕 for book lovers</p>
        </div>
      </footer>
    </div>
  );
}
