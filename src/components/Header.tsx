import { Search, Menu, Globe } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600" />
          <span className="text-xl font-bold text-white">NetShort</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-300 transition-colors hover:text-white">
            Home
          </a>
          <a href="#" className="text-gray-300 transition-colors hover:text-white">
            Genres
          </a>
          <a href="#" className="text-gray-300 transition-colors hover:text-white">
            Download
          </a>
          <a href="#" className="text-gray-300 transition-colors hover:text-white">
            Blog
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search movies..."
              className="w-64 rounded-full bg-gray-800 px-10 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Language Selector */}
          <button className="flex items-center gap-2 rounded-lg bg-gray-800 px-3 py-2 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white">
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline">English</span>
          </button>

          {/* Mobile Menu */}
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </header>
  );
}
