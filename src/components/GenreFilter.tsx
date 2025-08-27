'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface GenreFilterProps {
  genres: string[];
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
}

export default function GenreFilter({ genres, selectedGenre, onGenreChange }: GenreFilterProps) {
  const { t } = useLanguage();

  return (
    <div className="mb-8">
      <div className="mx-auto max-w-7xl px-4">
        <h3 className="mb-4 text-lg font-semibold text-white">{t('movie.genre')}</h3>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => onGenreChange('all')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              selectedGenre === 'all'
                ? 'bg-red-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            {t('common.all')}
          </button>
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => onGenreChange(genre)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedGenre === genre
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {t(`genres.${genre.toLowerCase().replace(/\s+/g, '')}`) || genre}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
