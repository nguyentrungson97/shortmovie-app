'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import clsx from 'clsx';
import EpisodeGrid from './EpisodeGrid';
import React from 'react'; // Added missing import for React

interface ResponsiveVideoLayoutProps {
  videoPlayer: React.ReactNode;
  infoPanel: React.ReactNode;
  movie: any; // Add movie prop
  currentEpisode: number; // Add currentEpisode prop
  onEpisodeSelect: (episode: any) => void; // Add onEpisodeSelect prop
  showLoginModal?: () => void; // Add showLoginModal prop
  className?: string;
}

export default function ResponsiveVideoLayout({
  videoPlayer,
  infoPanel,
  movie,
  currentEpisode,
  onEpisodeSelect,
  showLoginModal,
  className
}: ResponsiveVideoLayoutProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreenToggle = () => {
    setIsFullscreen(!isFullscreen);
  };

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 bg-black">
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={handleFullscreenToggle}
            className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex items-center justify-center h-full">
          <div className="w-full h-full max-w-2xl">
            {videoPlayer}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={clsx('w-full', className)}>
      {/* Mobile Layout: Video -> Episode Grid -> Info Panel */}
      <div className="lg:hidden space-y-6">
        {/* Video Player */}
        <div className="w-full">
          <div className="w-full">
            {videoPlayer}
          </div>
          
          {/* Fullscreen Toggle Button */}
          <div className="mt-4 text-center">
            <button
              onClick={handleFullscreenToggle}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
            >
              Fullscreen
            </button>
          </div>
        </div>

        {/* Episode Grid - Second on mobile (extracted from infoPanel) */}
        <div className="w-full bg-gray-900 rounded-lg p-6">
          <EpisodeGrid
            episodes={movie.episodes}
            currentEpisode={currentEpisode}
            onEpisodeSelect={onEpisodeSelect}
            showLoginModal={showLoginModal}
          />
        </div>

        {/* Movie Info Panel - Third on mobile (without episode grid) */}
        <div className="w-full">
          {/* Show infoPanel without episode grid on mobile */}
          {infoPanel}
        </div>
      </div>

      {/* Desktop Layout: Side by side (unchanged) */}
      <div className="hidden lg:grid gap-6 transition-all duration-500 ease-in-out lg:grid-cols-5">
        
        {/* Video Player Section - 60% on desktop */}
        <div className="lg:col-span-3">
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="lg:h-[85vh]">
              {videoPlayer}
            </div>
          </div>
        </div>

        {/* Information Panel - 40% on desktop */}
        <div className="lg:col-span-2">
          {/* Movie Info Panel - First on desktop */}
          <div className="transition-all duration-500 ease-in-out">
            {infoPanel}
          </div>

          {/* Episode Grid - Second on desktop */}
          <div className="mt-6 transition-all duration-500 ease-in-out">
            {/* Episode Grid - Second on desktop */}
          </div>
        </div>
      </div>
    </div>
  );
}
