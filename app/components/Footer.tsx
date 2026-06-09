import Link from "next/link";

const SUPPORT_EMAIL = "galiette@testing-orbit.com";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg"></div>
              <span className="text-xl font-bold">Brevio</span>
            </div>
            <p className="text-slate-400 max-w-xs">
              Your inbox, only the important parts.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-slate-300">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="hover:text-white transition-colors"
            >
              {SUPPORT_EMAIL}
            </a>
          </nav>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; 2026 Orbit AI Labs. Brevio is a product of Orbit AI Labs.</p>
        </div>
      </div>
    </footer>
  );
}
