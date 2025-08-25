'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, Share2, Download, User, X } from 'lucide-react';
import { useRouter, useParams } from 'next/navigation';
import { movies } from '@/data/movies';
import { sampleVideos } from '@/data/videos';
import SimpleVideoPlayer from '@/components/SimpleVideoPlayer';
import MovieInfoPanel from '@/components/MovieInfoPanel';
import EpisodeGrid from '@/components/EpisodeGrid';
import ResponsiveVideoLayout from '@/components/ResponsiveVideoLayout';
import { Episode } from '@/types/movie';
import { useAuth } from '@/contexts/AuthContext';

export default function EpisodePage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const { isLoggedIn, login } = useAuth();
  
  const [currentEpisode, setCurrentEpisode] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  
  // Find the movie by ID
  const movie = movies.find(m => m.id === id);
  
  if (!movie) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Movie not found</h1>
          <button 
            onClick={() => router.push('/')}
            className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Find video data for current episode
  const currentEpisodeData = movie.episodes.find(ep => ep.number === currentEpisode) || movie.episodes[0];
  const totalEpisodes = movie.totalEpisodes;

  // Update episode data when currentEpisode changes
  useEffect(() => {
    console.log(`Episode changed to ${currentEpisode}`);
    console.log('New episode data:', currentEpisodeData);
    
    // Update page title
    document.title = `${movie.title} EP ${currentEpisode} - Phim Drama`;
    
    // Update URL without page reload
    const newUrl = `/episode/${id}?ep=${currentEpisode}`;
    window.history.replaceState({}, '', newUrl);
  }, [currentEpisode, currentEpisodeData, movie.title, id]);

  const handleEpisodeChange = (episode: Episode) => {
    console.log(`Changing to episode ${episode.number}: ${episode.title}`);
    console.log('Episode data:', episode);
    
    setCurrentEpisode(episode.number);
    
    // Reset any episode-specific state
    setIsLiked(false);
    setIsBookmarked(false);
    
    // Scroll to top of video player on mobile
    if (window.innerWidth < 1024) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${movie.title} EP ${currentEpisode}`,
        text: `Watch ${movie.title} Episode ${currentEpisode} on Phim Drama`,
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

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(loginForm.email, loginForm.password)) {
      setIsLoginOpen(false);
      setLoginForm({ email: '', password: '' });
    } else {
      alert('Invalid credentials. Use username: admin@gmail.com, password: admin');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    });
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
    setLoginForm({ email: '', password: '' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.push('/')}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="hidden sm:inline">Back</span>
            </button>
            
            {/* Brand Logo */}
            <div className="flex items-center gap-2">
              <img 
                src="/logos/Logo04.png" 
                alt="Phim Drama Logo" 
                className="h-10 w-auto"
              />
              {/* <span className="text-lg font-bold text-white">Phim Drama</span> */}
            </div>
            
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
              key={`episode-${currentEpisode}`}
              videoUrl={currentEpisodeData.videoUrl}
              posterUrl={currentEpisodeData.posterUrl}
              likes={1200}
              comments={234}
              shares={89}
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
              onEpisodeSelect={handleEpisodeChange}
              showLoginModal={() => setIsLoginOpen(true)}
            />
          }
          movie={movie}
          currentEpisode={currentEpisode}
          onEpisodeSelect={handleEpisodeChange}
          showLoginModal={() => setIsLoginOpen(true)}
        />
      </div>
      
      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-md bg-gray-900 rounded-lg p-6 mx-4">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Login</h2>
              <button
                onClick={closeLoginModal}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={loginForm.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={loginForm.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your password"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-2 px-4 rounded-lg transition-all duration-200 font-medium"
              >
                Login
              </button>
            </form>
            
            <div className="mt-4 text-center text-sm text-gray-400">
              <p>Use: <strong>admin@gmail.com</strong> / <strong>admin</strong></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
