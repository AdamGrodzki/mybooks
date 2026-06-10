import type { Metadata } from "next";
import "./globals.css";
import { LoaderProvider } from "@/contexts/LoaderContext";
import { GlobalLoader } from "@/components/ui/GlobalLoader";

export const metadata: Metadata = {
  title: "MyBooks - Personal Book Collection Manager",
  description: "Organize your book collection, write notes, save quotes, and track your reading journey with beautiful design.",
  icons: {
    icon: "📚",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth h-full">
      <body className="antialiased h-full min-h-screen flex flex-col">
        <LoaderProvider>
          <GlobalLoader />
          {children}
        </LoaderProvider>
      </body>
    </html>
  );
}
