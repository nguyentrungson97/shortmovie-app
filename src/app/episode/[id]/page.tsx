'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, Share2, Download } from 'lucide-react';
import { useRouter, useParams } from 'next/navigation';
import { movies } from '@/data/movies';
import { sampleVideos } from '@/data/videos';
import SimpleVideoPlayer from '@/components/SimpleVideoPlayer';
import MovieInfoPanel from '@/components/MovieInfoPanel';
import EpisodeGrid from '@/components/EpisodeGrid';
import ResponsiveVideoLayout from '@/components/ResponsiveVideoLayout';

export default function EpisodePage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  
  const [currentEpisode, setCurrentEpisode] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  // Find the movie by ID
  const movie = movies.find(m => m.id === id);
  
  if (!movie) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Movie not found</h1>
          <button 
            onClick={() => router.back()}
            className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Find video data
  const videoData = sampleVideos.find(v => v.id === id) || sampleVideos[0];
  const totalEpisodes = 74; // Based on NetShort data

  const handleEpisodeChange = (episode: number) => {
    setCurrentEpisode(episode);
    // Here you would typically load the new episode video
    console.log(`Loading episode ${episode}`);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${movie.title} EP ${currentEpisode}`,
        text: `Watch ${movie.title} Episode ${currentEpisode} on NetShort`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="hidden sm:inline">Back</span>
            </button>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={handleShare}
                className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
              >
                <Share2 className="h-5 w-5" />
              </button>
              <button className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg">
                <Download className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Responsive Layout */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        <ResponsiveVideoLayout
          videoPlayer={
            <SimpleVideoPlayer
              videoUrl={videoData.url}
              posterUrl={videoData.posterUrl}
              likes={videoData.likes}
              comments={videoData.comments}
              shares={videoData.shares}
              onLike={handleLike}
              onShare={handleShare}
              onBookmark={handleBookmark}
              onComment={() => console.log('Comment clicked')}
              className="w-full max-w-md mx-auto lg:max-w-lg xl:max-w-xl"
            />
          }
          infoPanel={
            <MovieInfoPanel 
              movie={movie} 
              episodeNumber={currentEpisode}
              totalEpisodes={totalEpisodes}
            />
          }
          episodeGrid={
            <EpisodeGrid
              currentEpisode={currentEpisode}
              totalEpisodes={totalEpisodes}
              onEpisodeSelect={handleEpisodeChange}
            />
          }
        />
      </div>
    </div>
  );
}
