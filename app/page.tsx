import { Navbar, Hero, Footer } from '@/components/home';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Navbar />

      <main className="flex-1 flex flex-col">
        <Hero />
      </main>

      <Footer />
    </div>
  );
}
