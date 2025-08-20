'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX, Heart, Share2, Bookmark, MessageCircle, Maximize, Minimize } from 'lucide-react';
import { useGesture } from '@use-gesture/react';
import ReactPlayer from 'react-player';
import clsx from 'clsx';

interface VerticalVideoPlayerProps {
  videoUrl: string;
  posterUrl?: string;
  likes?: number;
  comments?: number;
  shares?: number;
  onLike?: () => void;
  onShare?: () => void;
  onBookmark?: () => void;
  onComment?: () => void;
  className?: string;
}

export default function VerticalVideoPlayer({
  videoUrl,
  posterUrl,
  likes = 1200,
  comments = 234,
  shares = 89,
  onLike,
  onShare,
  onBookmark,
  onComment,
  className
}: VerticalVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isInView, setIsInView] = useState(false);
  
  const videoRef = useRef<typeof ReactPlayer>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  // Intersection Observer for auto-play
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting && !isPlaying) {
          setIsPlaying(true);
        } else if (!entry.isIntersecting && isPlaying) {
          setIsPlaying(false);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isPlaying]);

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
    onClick: () => {
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

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike?.();
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    onBookmark?.();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      ref={containerRef}
      className={clsx('relative w-full mx-auto', className)}
      {...bind()}
    >
      {/* Video Container */}
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-lg bg-black">
        {/* React Player */}
        <ReactPlayer
          ref={videoRef}
          url={videoUrl}
          playing={isPlaying && isInView}
          muted={isMuted}
          loop
          playsinline
          width="100%"
          height="100%"
          onProgress={handleProgress}
          onDuration={handleDuration}
          onError={(e) => console.error('Video error:', e)}

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
        </div>

        {/* Right Side Action Buttons */}
        <div className="absolute right-3 bottom-20 flex flex-col items-center gap-4 pointer-events-auto">
          {/* Like Button */}
          <button
            onClick={handleLike}
            className="relative group"
          >
            <div className={clsx(
              'w-12 h-12 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm',
              'transition-all duration-200 hover:scale-110',
              isLiked && 'bg-red-500'
            )}>
              <Heart 
                className={clsx(
                  'w-6 h-6 transition-all duration-200',
                  isLiked ? 'text-white fill-white scale-125' : 'text-white'
                )} 
              />
            </div>
            {/* Like Count */}
            <span className="text-white text-xs mt-1 block text-center">
              {likes >= 1000 ? `${(likes / 1000).toFixed(1)}K` : likes}
            </span>
          </button>

          {/* Comment Button */}
          <button
            onClick={onComment}
            className="group"
          >
            <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm transition-all duration-200 hover:scale-110">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <span className="text-white text-xs mt-1 block text-center">
              {comments >= 1000 ? `${(comments / 1000).toFixed(1)}K` : comments}
            </span>
          </button>

          {/* Share Button */}
          <button
            onClick={onShare}
            className="group"
          >
            <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm transition-all duration-200 hover:scale-110">
              <Share2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-white text-xs mt-1 block text-center">
              {shares >= 1000 ? `${(shares / 1000).toFixed(1)}K` : shares}
            </span>
          </button>

          {/* Bookmark Button */}
          <button
            onClick={handleBookmark}
            className="group"
          >
            <div className={clsx(
              'w-12 h-12 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm',
              'transition-all duration-200 hover:scale-110',
              isBookmarked && 'bg-purple-500'
            )}>
              <Bookmark 
                className={clsx(
                  'w-6 h-6 transition-all duration-200',
                  isBookmarked ? 'text-white fill-white' : 'text-white'
                )} 
              />
            </div>
            <span className="text-white text-xs mt-1 block text-center">Save</span>
          </button>
        </div>

        {/* Bottom Controls */}
        <div className={clsx(
          'absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent',
          'transition-opacity duration-300',
          showControls ? 'opacity-100' : 'opacity-0'
        )}>
          <div className="flex items-center justify-between">
            <button
              onClick={handleVolumeChange}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>

            <button className="text-white hover:text-gray-300 transition-colors">
              <Maximize className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Double Tap Heart Animation */}
      {isLiked && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="animate-ping">
            <Heart className="w-24 h-24 text-red-500 fill-red-500" />
          </div>
        </div>
      )}
    </div>
  );
}
