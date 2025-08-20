'use client';

import { useState } from 'react';
import { ExternalLink, Calendar, Clock, User, Star, Play, Download, Share2, Heart, Bookmark } from 'lucide-react';
import { Movie } from '@/types/movie';
import clsx from 'clsx';

interface MovieInfoPanelProps {
  movie: Movie;
  episodeNumber: number;
  totalEpisodes: number;
  className?: string;
}

export default function MovieInfoPanel({ movie, episodeNumber, totalEpisodes, className }: MovieInfoPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className={clsx('space-y-6', className)}>
      {/* Episode Header */}
      <div className="bg-gray-900 rounded-lg p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-white mb-2">
              {movie.isDubbed && '(Dubbed) '}{movie.title} EP {episodeNumber}
            </h1>
            
            {/* Stats */}
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
              <span>28.7K</span>
              <span>185.7K</span>
            </div>

            {/* Genre Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {movie.genres.map((genre, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Watch Original Button */}
        <button className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
          <ExternalLink className="w-4 h-4" />
          Watch Original
        </button>
      </div>

      {/* Episode Description */}
      <div className="bg-gray-900 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">The Hidden Master's Revelation</h2>
        
        <div className="text-gray-300 leading-relaxed mb-4">
          {isExpanded ? (
            <div>
              <p className="mb-3">
                Yannick Young thought he was just another weak disciple. But when he aces a deadly sect trial, the truth hits—he's anything but ordinary. Jealous rivals, secret mentors, and ancient enemies stand in his way. Is he ready to claim the power he never knew he had?
              </p>
              <p className="mb-3">
                EP {episodeNumber}: Yannick's humble training with his masters takes a surprising turn when they casually dismiss the powerful Demon Lord as weak, revealing their true strength. As word spreads, major sects scramble to recruit this mysterious master, while Yannick prepares to leave for the Celestial Academy trials with a precious token from his masters.
              </p>
              <p>
                What powers does the mysterious jade token hold, and how will it change Yannick's destiny?
              </p>
            </div>
          ) : (
            <p>
              Yannick Young thought he was just another weak disciple. But when he aces a deadly sect trial, the truth hits—he's anything but ordinary. Jealous rivals, secret mentors, and ancient enemies stand in his way...
            </p>
          )}
        </div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200"
        >
          {isExpanded ? 'Show less' : 'Read more'}
        </button>
      </div>

      {/* Action Buttons */}
      <div className="bg-gray-900 rounded-lg p-6">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
              isLiked 
                ? 'bg-red-500 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
            <span>Like</span>
          </button>
          
          <button className="bg-gray-800 text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2">
            <Bookmark className="w-5 h-5" />
            <span>Save</span>
          </button>
          
          <button className="bg-gray-800 text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2">
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>
        
        <div className="flex flex-col gap-3">
          <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
            <Download className="w-4 h-4" />
            Download Episode
          </button>
        </div>
      </div>

      {/* Movie Metadata */}
      <div className="bg-gray-900 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Movie Information</h3>
        
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-4 text-gray-300">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>45 min</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>4.8</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-gray-300">
            <User className="w-4 h-4" />
            <span>Directed by Studio XYZ</span>
          </div>
        </div>
      </div>
    </div>
  );
}
