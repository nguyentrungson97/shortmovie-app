'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX, Heart, Share2, Bookmark, MessageCircle, Maximize, Minimize } from 'lucide-react';
import { useGesture } from '@use-gesture/react';
import ReactPlayer from 'react-player';
import clsx from 'clsx';

interface HorizontalVideoPlayerProps {
  videoUrl: string;
  posterUrl?: string;
  episodeNumber: number;
  totalEpisodes: number;
  isFullscreen: boolean;
  onFullscreenToggle: () => void;
  onEpisodeChange?: (episode: number) => void;
  className?: string;
}

export default function HorizontalVideoPlayer({
  videoUrl,
  posterUrl,
  episodeNumber,
  totalEpisodes,
  isFullscreen,
  onFullscreenToggle,
  onEpisodeChange,
  className
}: HorizontalVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const videoRef = useRef<ReactPlayer>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();

  // Auto-hide controls
  const showControlsTemporarily = useCallback(() => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => setShowControls(false), 3000);
  }, []);

  // Gesture controls
  const bind = useGesture({
    onTap: () => {
      setIsPlaying(!isPlaying);
      showControlsTemporarily();
    },
  });

  const handleProgress = (state: any) => {
    setProgress(state.played);
  };

  const handleDuration = (duration: number) => {
    setDuration(duration);
  };

  const handleVolumeChange = () => {
    setIsMuted(!isMuted);
  };

  const handlePreviousEpisode = () => {
    if (episodeNumber > 1 && onEpisodeChange) {
      onEpisodeChange(episodeNumber - 1);
    }
  };

  const handleNextEpisode = () => {
    if (episodeNumber < totalEpisodes && onEpisodeChange) {
      onEpisodeChange(episodeNumber + 1);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      className={clsx(
        'relative mx-auto transition-all duration-300',
        isFullscreen 
          ? 'w-full max-w-none' 
          : 'w-full max-w-md lg:max-w-lg xl:max-w-xl',
        className
      )}
      {...bind()}
    >
      {/* Video Container */}
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
        {/* React Player */}
        <ReactPlayer
          ref={videoRef}
          url={videoUrl}
          playing={isPlaying}
          muted={isMuted}
          loop
          playsinline
          width="100%"
          height="100%"
          onProgress={handleProgress}
          onDuration={handleDuration}
          onError={(e) => console.error('Video error:', e)}
          config={{
            file: {
              attributes: {
                poster: posterUrl,
              },
            } as any,
          }}
        />

        {/* Video Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Center Play/Pause Button */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Play className="w-10 h-10 text-white ml-1" fill="white" />
              </div>
            </div>
          )}

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30">
            <div 
              className="h-full bg-purple-500 transition-all duration-100"
              style={{ width: `${progress * 100}%` }}
            />
          </div>

          {/* Time Display */}
          <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
            {formatTime(progress * duration)} / {formatTime(duration)}
          </div>

          {/* Episode Info */}
          <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg p-3 text-white">
            <div className="text-sm font-medium">EP {episodeNumber}</div>
            <div className="text-xs text-gray-300">{episodeNumber}/{totalEpisodes}</div>
          </div>
        </div>

        {/* Video Controls Overlay */}
        <div className={clsx(
          'absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent',
          'transition-opacity duration-300',
          showControls ? 'opacity-100' : 'opacity-0'
        )}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Episode Navigation */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePreviousEpisode}
                  disabled={episodeNumber <= 1}
                  className="text-white hover:text-purple-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <button
                  onClick={handleNextEpisode}
                  disabled={episodeNumber >= totalEpisodes}
                  className="text-white hover:text-purple-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Volume Control */}
              <button 
                onClick={handleVolumeChange}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="h-5 w-5" />
                ) : (
                  <Volume2 className="h-5 w-5" />
                )}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={onFullscreenToggle}
                className="text-white hover:text-purple-300 transition-colors"
              >
                {isFullscreen ? (
                  <Minimize className="h-5 w-5" />
                ) : (
                  <Maximize className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
