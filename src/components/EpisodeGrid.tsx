'use client';

import { Play } from 'lucide-react';
import clsx from 'clsx';
import { useState } from 'react';

interface EpisodeGridProps {
  currentEpisode: number;
  totalEpisodes: number;
  onEpisodeSelect: (episode: number) => void;
  className?: string;
}

export default function EpisodeGrid({ currentEpisode, totalEpisodes, onEpisodeSelect, className }: EpisodeGridProps) {
  // Create episode ranges for pagination
  const episodesPerPage = 20; // Reduced from 30
  const totalPages = Math.ceil(totalEpisodes / episodesPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const startEpisode = (currentPage - 1) * episodesPerPage + 1;
  const endEpisode = Math.min(currentPage * episodesPerPage, totalEpisodes);

  const episodes = Array.from(
    { length: endEpisode - startEpisode + 1 },
    (_, i) => startEpisode + i
  );

  return (
    <div className={clsx('bg-gray-900 rounded-lg p-4', className)}> {/* Reduced padding from p-6 */}
      <h3 className="text-sm font-semibold text-white mb-3">Full episodes</h3> {/* Reduced text size and margin */}
      
      {/* Episode Range Navigation */}
      <div className="flex flex-wrap gap-1 mb-3"> {/* Reduced gap and margin */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={clsx(
              'px-2 py-1 rounded text-xs transition-colors', // Reduced padding and text size
              currentPage === page
                ? 'bg-purple-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            )}
          >
            {((page - 1) * episodesPerPage) + 1} - {Math.min(page * episodesPerPage, totalEpisodes)}
          </button>
        ))}
      </div>

      {/* Episode Grid */}
      <div className="grid grid-cols-6 gap-1"> {/* Increased columns from 5 to 6, reduced gap */}
        {episodes.map((episode) => (
          <button
            key={episode}
            onClick={() => onEpisodeSelect(episode)}
            className={clsx(
              'aspect-square rounded flex items-center justify-center text-xs font-medium transition-all duration-200', // Reduced text size
              episode === currentEpisode
                ? 'bg-purple-600 text-white scale-105'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105'
            )}
          >
            {episode === currentEpisode ? (
              <Play className="w-3 h-3" fill="white" /> // Reduced icon size
            ) : (
              episode
            )}
          </button>
        ))}
      </div>

      {/* Current Page Info */}
      <div className="mt-3 text-center text-xs text-gray-400"> {/* Reduced margin and text size */}
        Showing episodes {startEpisode} - {endEpisode} of {totalEpisodes}
      </div>
    </div>
  );
}
