'use client';

import { Movie } from '@/types/movie';
import MovieCard from './MovieCard';
import { useLanguage } from '@/contexts/LanguageContext';

interface MovieSectionProps {
  title: string;
  movies: Movie[];
  showViewAll?: boolean;
}

export default function MovieSection({ title, movies, showViewAll = true }: MovieSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          {showViewAll && (
            <a href="#" className="text-red-400 hover:text-red-300 transition-colors">
              {t('common.view')} {t('common.all')}
            </a>
          )}
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
