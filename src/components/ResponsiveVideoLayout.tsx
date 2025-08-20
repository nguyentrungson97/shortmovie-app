'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import clsx from 'clsx';

interface ResponsiveVideoLayoutProps {
  videoPlayer: React.ReactNode;
  infoPanel: React.ReactNode;
  episodeGrid: React.ReactNode;
  className?: string;
}

export default function ResponsiveVideoLayout({
  videoPlayer,
  infoPanel,
  episodeGrid,
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
      <div className="grid gap-6 transition-all duration-500 ease-in-out lg:grid-cols-5">
        
        {/* Video Player Section - 60% on desktop, full width on mobile */}
        <div className="lg:col-span-3">
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="lg:h-[85vh]">
              {videoPlayer}
            </div>
            
            {/* Fullscreen Toggle Button */}
            <div className="mt-4 text-center lg:hidden">
              <button
                onClick={handleFullscreenToggle}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
              >
                Fullscreen
              </button>
            </div>
          </div>
        </div>

        {/* Information Panel - 40% on desktop, below video on mobile */}
        <div className="lg:col-span-2">
          {/* Movie Info Panel */}
          <div className="transition-all duration-500 ease-in-out">
            {infoPanel}
          </div>

          {/* Episode Grid */}
          <div className="mt-6 transition-all duration-500 ease-in-out">
            {episodeGrid}
          </div>
        </div>
      </div>
    </div>
  );
}
