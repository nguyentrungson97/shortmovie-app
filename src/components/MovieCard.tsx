import { Movie } from '@/types/movie';
import { Play, Star } from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';

interface MovieCardProps {
  movie: Movie;
  className?: string;
}

export default function MovieCard({ movie, className }: MovieCardProps) {
  return (
    <Link href={`/episode/${movie.id}`} className="block">
      <div className={clsx(
        'group relative flex h-full flex-col overflow-hidden rounded-lg bg-gray-900',
        'transition-all duration-300 ease-in-out',
        'hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25',
        'cursor-pointer',
        className
      )}>
        {/* Movie Image */}
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <div className="h-full w-full bg-gradient-to-br from-purple-600 to-blue-600 transition-transform duration-300 group-hover:scale-110" />
          
          {/* Overlay with Play Button */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-200 group-hover:bg-white/30 group-hover:scale-110">
              <Play className="h-6 w-6 text-white" fill="white" />
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {movie.isHot && (
              <div className="flex items-center gap-1 rounded-full bg-red-500 px-2 py-1 text-xs font-medium text-white transition-transform duration-200 group-hover:scale-110">
                <Star className="h-3 w-3" fill="white" />
                Hot
              </div>
            )}
            {movie.isNew && (
              <div className="rounded-full bg-green-500 px-2 py-1 text-xs font-medium text-white transition-transform duration-200 group-hover:scale-110">
                New
              </div>
            )}
            {movie.isExclusive && (
              <div className="rounded-full bg-purple-500 px-2 py-1 text-xs font-medium text-white transition-transform duration-200 group-hover:scale-110">
                Exclusive
              </div>
            )}
          </div>

          {/* Dubbed Badge */}
          {movie.isDubbed && (
            <div className="absolute top-2 right-2 rounded-full bg-blue-500 px-2 py-1 text-xs font-medium text-white transition-transform duration-200 group-hover:scale-110">
              Dubbed
            </div>
          )}
        </div>

        {/* Movie Info */}
        <div className="flex flex-1 flex-col justify-between p-3 transition-colors duration-300 group-hover:bg-gray-800">
          <h3 className="mb-2 line-clamp-2 text-sm font-medium text-white leading-tight transition-colors duration-300 group-hover:text-purple-200">
            {movie.title}
          </h3>
          <div className="mt-auto">
            <div className="flex flex-wrap gap-1">
              {movie.genres.slice(0, 2).map((genre, index) => (
                <span
                  key={index}
                  className="rounded-full bg-gray-700 px-2 py-1 text-xs text-gray-300 transition-all duration-200 group-hover:bg-purple-600 group-hover:text-white"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
