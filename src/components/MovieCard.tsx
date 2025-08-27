'use client';

import { Movie } from '@/types/movie';
import { Play, Star, Clock } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const router = useRouter();
  const { t } = useLanguage();

  const handleClick = () => {
    if (movie.episodes && movie.episodes.length > 0) {
      router.push(`/episode/${movie.id}`);
    }
  };

  return (
    <div className="group cursor-pointer overflow-hidden rounded-lg bg-gray-900 transition-transform hover:scale-105">
      {/* Movie Poster */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={movie.image}
          alt={movie.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
          <div className="flex h-full items-center justify-center">
            <button
              onClick={handleClick}
              className="flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
            >
              <Play className="h-5 w-5" />
              {t('hero.watchNow')}
            </button>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-2">
          {movie.isHot && (
            <span className="rounded-full bg-red-500 px-2 py-1 text-xs font-medium text-white">
              {t('hero.hot')}
            </span>
          )}
          {movie.isNew && (
            <span className="rounded-full bg-blue-500 px-2 py-1 text-xs font-medium text-white">
              {t('hero.new')}
            </span>
          )}
          {movie.isExclusive && (
            <span className="rounded-full bg-purple-500 px-2 py-1 text-xs font-medium text-white">
              {t('hero.exclusive')}
            </span>
          )}
        </div>
      </div>

      {/* Movie Info */}
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold text-white line-clamp-2">
          {movie.title}
        </h3>
        
        <div className="mb-3 flex items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>8.5</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{movie.totalEpisodes} {t('episode.episodes')}</span>
          </div>
        </div>

        <div className="mb-3 flex flex-wrap gap-2">
          {movie.genres.slice(0, 2).map((genre) => (
            <span
              key={genre}
              className="rounded-full bg-gray-800 px-2 py-1 text-xs text-gray-300"
            >
              {t(`genres.${genre.toLowerCase().replace(/\s+/g, '')}`) || genre}
            </span>
          ))}
        </div>

        <p className="text-sm text-gray-400 line-clamp-2">
          {movie.isDubbed && <span className="text-blue-400">{t('hero.dubbed')} • </span>}
          {t('episode.episodes')}: {movie.totalEpisodes}
        </p>
      </div>
    </div>
  );
}
