'use client';

import { useState } from 'react';
import { Lock, Play, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Episode } from '@/types/movie';
import clsx from 'clsx';

interface EpisodeGridProps {
  episodes: Episode[];
  currentEpisode: number;
  onEpisodeSelect: (episode: Episode) => void;
  showLoginModal?: () => void;
  className?: string;
}

export default function EpisodeGrid({ 
  episodes, 
  currentEpisode, 
  onEpisodeSelect,
  showLoginModal,
  className 
}: EpisodeGridProps) {
  const { isLoggedIn } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const episodesPerPage = 12;
  const totalPages = Math.ceil(episodes.length / episodesPerPage);
  
  const startIndex = (currentPage - 1) * episodesPerPage;
  const endIndex = startIndex + episodesPerPage;
  const currentEpisodes = episodes.slice(startIndex, endIndex);

  const handleEpisodeClick = (episode: Episode) => {
    if (episode.isLocked && !isLoggedIn) {
      // Show login popup instead of alert
      console.log('Locked episode clicked, showing login modal');
      if (showLoginModal) {
        showLoginModal();
      }
      return;
    }
    onEpisodeSelect(episode);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">Episodes</h2>
        <span className="text-sm text-gray-400">
          {currentEpisode} of {episodes.length}
        </span>
      </div>
      
      {/* Episode Grid */}
      <div className="grid grid-cols-6 gap-2 mb-4">
        {currentEpisodes.map((episode) => (
          <button
            key={episode.id}
            onClick={() => handleEpisodeClick(episode)}
            className={clsx(
              'relative px-3 py-2 text-sm rounded-lg transition-all duration-200 text-center group',
              episode.number === currentEpisode
                ? 'bg-purple-600 text-white'
                : episode.isLocked
                ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
            )}
            disabled={episode.isLocked && !isLoggedIn}
          >
            {/* Episode Number */}
            <span className="block">{episode.number}</span>
            
            {/* Lock Icon for Locked Episodes */}
            {episode.isLocked && !isLoggedIn && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                <Lock className="w-4 h-4 text-gray-400" />
              </div>
            )}
            
            {/* Play Icon for Current Episode */}
            {episode.number === currentEpisode && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center">
                <Play className="w-2 h-2 text-white" />
              </div>
            )}
          </button>
        ))}
      </div>
      
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => goToPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700"
          >
            Previous
          </button>
          <span className="text-sm text-gray-400">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage >= totalPages}
            className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700"
          >
            Next
          </button>
        </div>
      )}
      
      {/* Login Reminder for Locked Episodes */}
      {!isLoggedIn && episodes.some(ep => ep.isLocked) && (
        <div className="mt-4 p-3 bg-gray-800 rounded-lg border border-gray-700">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Lock className="w-4 h-4" />
              <span>
                Login to unlock all episodes! Use username: <strong>admin@gmail.com</strong>, password: <strong>admin</strong>
              </span>
            </div>
            
            {/* Login Button */}
            <button
              onClick={() => {
                console.log('Login button clicked, showing login modal');
                if (showLoginModal) {
                  showLoginModal();
                }
              }}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <User className="w-4 h-4" />
              Login to Unlock
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
