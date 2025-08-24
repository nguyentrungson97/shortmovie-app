'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Heart, Share2, Bookmark, MessageCircle } from 'lucide-react';
import clsx from 'clsx';

interface SimpleVideoPlayerProps {
  className?: string;
  videoUrl?: string;
  posterUrl?: string;
  likes?: number;
  comments?: number;
  shares?: number;
  onLike?: () => void;
  onShare?: () => void;
  onBookmark?: () => void;
  onComment?: () => void;
}

export default function SimpleVideoPlayer({
  className,
  videoUrl,
  posterUrl,
  likes = 1200,
  comments = 234,
  shares = 89,
  onLike,
  onShare,
  onBookmark,
  onComment
}: SimpleVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // Reset video player state when video URL changes (new episode)
  useEffect(() => {
    if (videoRef.current) {
      console.log('Video URL changed, resetting player state');
      // Reset state
      setIsPlaying(false);
      setCurrentTime(0);
      setDuration(0);
      setIsSeeking(false);
      
      // Reset video element
      videoRef.current.currentTime = 0;
      videoRef.current.load(); // Reload the video
    }
  }, [videoUrl]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        console.log('Video paused');
      } else {
        videoRef.current.play();
        console.log('Video playing');
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    handlePlayPause();
    // Show controls temporarily, but don't override hover behavior
    if (!isHovered) {
      setShowControls(true);
      setTimeout(() => setShowControls(false), 3000);
    }
  };

  const handleVideoHover = () => {
    setIsHovered(true);
    setShowControls(true);
  };

  const handleVideoLeave = () => {
    setIsHovered(false);
    // Hide controls immediately when leaving video area
    setShowControls(false);
  };

  const handleVolumeToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike?.();
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    onBookmark?.();
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && !isSeeking) {
      const currentTimeValue = videoRef.current.currentTime;
      setCurrentTime(currentTimeValue);
      console.log('Time update:', currentTimeValue, 'Duration:', duration);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      const durationValue = videoRef.current.duration;
      setDuration(durationValue);
      console.log('Video loaded, duration:', durationValue);
    }
  };

  const handleError = (e: any) => {
    console.error('Video error:', e);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current || !videoRef.current) return;
    
    const rect = progressRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const progressWidth = rect.width;
    const clickPercent = Math.max(0, Math.min(1, clickX / progressWidth));
    
    const newTime = clickPercent * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    
    // Keep controls visible after seeking
    setShowControls(true);
    setTimeout(() => setShowControls(false), 3000);
  };

  const handleProgressMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsSeeking(true);
    // Immediately seek to the clicked position
    handleProgressClick(e);
  };

  const handleProgressMouseUp = () => {
    setIsSeeking(false);
  };

  const handleProgressMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isSeeking && progressRef.current && videoRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const progressWidth = rect.width;
      const clickPercent = Math.max(0, Math.min(1, clickX / progressWidth));
      
      const newTime = clickPercent * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  // Debug progress bar updates
  useEffect(() => {
    console.log('Progress update:', { currentTime, duration, progressPercent });
  }, [currentTime, duration, progressPercent]);

  // Handle document mouse events for progress bar dragging
  useEffect(() => {
    const handleDocumentMouseMove = (e: MouseEvent) => {
      if (isSeeking && progressRef.current && videoRef.current) {
        const rect = progressRef.current.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const progressWidth = rect.width;
        const clickPercent = Math.max(0, Math.min(1, clickX / progressWidth));
        
        const newTime = clickPercent * duration;
        videoRef.current.currentTime = newTime;
        setCurrentTime(newTime);
      }
    };

    const handleDocumentMouseUp = () => {
      setIsSeeking(false);
    };

    if (isSeeking) {
      document.addEventListener('mousemove', handleDocumentMouseMove);
      document.addEventListener('mouseup', handleDocumentMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleDocumentMouseMove);
      document.removeEventListener('mouseup', handleDocumentMouseUp);
    };
  }, [isSeeking, duration]);

  return (
    <div className={clsx('relative w-full h-full', className)}>
      {/* Video Container */}
      <div 
        className="relative aspect-[9/16] w-full h-full overflow-hidden rounded-lg bg-black"
        onMouseEnter={handleVideoHover}
        onMouseLeave={handleVideoLeave}
      >
        {/* HTML5 Video Element */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster={posterUrl}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onError={handleError}
          playsInline
          loop
        >
          {videoUrl && <source src={videoUrl} type="video/mp4" />}
          Your browser does not support the video tag.
        </video>

        {/* Video Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Center Play/Pause Button */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Play className="w-12 h-12 text-white ml-1" fill="white" />
              </div>
            </div>
          )}
        </div>

        {/* Clickable overlay for play/pause */}
        <div 
          className="absolute inset-0 cursor-pointer"
          onClick={handleVideoClick}
        />

        {/* Right Side Action Buttons */}
        <div className="absolute right-3 bottom-20 flex flex-col items-center gap-3 pointer-events-auto">
          {/* Like Button */}
          <button
            onClick={handleLike}
            className="relative group"
          >
            <div className={clsx(
              'w-10 h-10 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm',
              'transition-all duration-200 hover:scale-110',
              isLiked && 'bg-red-500'
            )}>
              <Heart 
                className={clsx(
                  'w-5 h-5 transition-all duration-200',
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
            <div className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm transition-all duration-200 hover:scale-110">
              <MessageCircle className="w-5 h-5 text-white" />
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
            <div className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm transition-all duration-200 hover:scale-110">
              <Share2 className="w-5 h-5 text-white" />
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
              'w-10 h-10 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm',
              'transition-all duration-200 hover:scale-110',
              isBookmarked && 'bg-purple-500'
            )}>
              <Bookmark 
                className={clsx(
                  'w-5 h-5 transition-all duration-200',
                  isBookmarked ? 'text-white fill-white' : 'text-white'
                )} 
              />
            </div>
            <span className="text-white text-xs mt-1 block text-center">Save</span>
          </button>
        </div>

        {/* Bottom Controls */}
        <div className={clsx(
          'absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent',
          'transition-opacity duration-300',
          (showControls || isHovered) ? 'opacity-100' : 'opacity-0'
        )}>
          {/* Progress Bar */}
          <div className="mb-3">
            <div 
              ref={progressRef}
              className="relative w-full h-2 bg-white/30 rounded-full cursor-pointer"
              onClick={handleProgressClick}
              onMouseDown={handleProgressMouseDown}
              onMouseUp={handleProgressMouseUp}
              onMouseMove={handleProgressMouseMove}
            >
              <div 
                className="absolute top-0 left-0 h-full rounded-full transition-all duration-100 bg-white"
                style={{ width: `${progressPercent}%` }}
              />
              <div 
                className="absolute top-1/2 w-3 h-3 bg-white rounded-full -translate-y-1/2 -translate-x-1/2 shadow-lg"
                style={{ left: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Time Display and Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={handleVolumeToggle}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>
              
              <span className="text-white text-xs font-mono">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <button 
              onClick={handlePlayPause}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Double Tap Heart Animation */}
      {isLiked && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="animate-ping">
            <Heart className="w-20 h-20 text-red-500 fill-red-500" />
          </div>
        </div>
      )}
    </div>
  );
}
