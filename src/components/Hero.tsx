import { Play, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative mb-8 h-[500px] overflow-hidden rounded-lg">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-blue-900/80 to-purple-900/80" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-8">
        <div className="max-w-2xl">
          {/* Badges */}
          <div className="mb-4 flex items-center gap-3">
            <div className="flex items-center gap-1 rounded-full bg-red-500 px-3 py-1 text-sm font-medium text-white">
              <Star className="h-4 w-4" fill="white" />
              Hot
            </div>
            <div className="rounded-full bg-purple-500 px-3 py-1 text-sm font-medium text-white">
              Trending
            </div>
          </div>

          {/* Title */}
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Girls Help Girls: Divorce or Die
          </h1>

          {/* Genres */}
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-white/20 px-3 py-1 text-sm text-white backdrop-blur-sm">
              Secret Identity
            </span>
            <span className="rounded-full bg-white/20 px-3 py-1 text-sm text-white backdrop-blur-sm">
              Independent Woman
            </span>
          </div>

          {/* Play Button */}
          <button className="flex items-center gap-2 rounded-full bg-white px-8 py-3 text-lg font-semibold text-black transition-all hover:bg-gray-100 hover:scale-105">
            <Play className="h-6 w-6" fill="black" />
            Play Now
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-white/5 to-transparent" />
    </section>
  );
}
