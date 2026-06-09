import Link from "next/link";
import Footer from "./Footer";
import Markdown from "./Markdown";

// Shared shell for the legal pages so they match the rest of the site.
export default function LegalPage({ content }: { content: string }) {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg"></div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Brevio
              </span>
            </Link>
            <Link
              href="/"
              className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
            >
              ← Back home
            </Link>
          </div>
        </div>
      </nav>

      <article className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Markdown>{content}</Markdown>
      </article>

      <Footer />
    </main>
  );
}
