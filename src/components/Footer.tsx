import { Globe, Download, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/logos/Logo04.png" 
                alt="Phim Drama Logo" 
                className="h-10 w-auto"
              />
              {/* <span className="text-xl font-bold text-white">Phim Drama</span> */}
            </div>
            <p className="text-gray-400 mb-4">
              Your ultimate destination for short movies and series. Watch the latest trending content anytime, anywhere.
            </p>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-700">
                <Download className="h-4 w-4" />
                Download App
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">Genres</a></li>
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">New Releases</a></li>
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">Exclusive</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-gray-400">
              © 2024 Phim Drama. Made with <Heart className="inline h-4 w-4 text-red-500" /> for movie lovers.
            </p>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white">
                <Globe className="h-4 w-4" />
                English
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
