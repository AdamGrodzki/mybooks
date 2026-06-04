'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 border-t border-gray-200 py-8 sm:py-10">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <p className="text-base sm:text-lg text-gray-700 font-bold text-center">
          © {currentYear} MyBooks. Wszystkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}
