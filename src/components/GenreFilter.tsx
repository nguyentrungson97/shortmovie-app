import { useState } from 'react';
import { Filter } from 'lucide-react';

interface GenreFilterProps {
  genres: string[];
  selectedGenre: string | null;
  onGenreChange: (genre: string | null) => void;
}

export default function GenreFilter({ genres, selectedGenre, onGenreChange }: GenreFilterProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-4">
        <Filter className="h-5 w-5 text-gray-400" />
        <h3 className="text-lg font-semibold text-white">Filter by Genre</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onGenreChange(null)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            selectedGenre === null
              ? 'bg-purple-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          All
        </button>
        
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => onGenreChange(genre)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              selectedGenre === genre
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}
