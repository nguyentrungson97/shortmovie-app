'use client';

import { useState, useEffect } from 'react';
import { Play, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { movies } from '@/data/movies';

export default function Hero() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Get featured movies (hot, new, exclusive)
  const featuredMovies = movies.filter(m => m.isHot || m.isNew || m.isExclusive).slice(0, 5);
  
  console.log('Featured movies for carousel:', featuredMovies);
  console.log('Current slide:', currentSlide);
  
  // Auto-advance carousel
  useEffect(() => {
    if (featuredMovies.length <= 1) {
      console.log('Not enough movies for carousel, skipping auto-advance');
      return;
    }
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredMovies.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [featuredMovies.length]);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredMovies.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredMovies.length) % featuredMovies.length);
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  const currentMovie = featuredMovies[currentSlide];
  
  if (!currentMovie) return null;
  
  return (
    <section className="relative mb-8 h-[500px] overflow-hidden rounded-lg">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-blue-900/80 to-purple-900/80" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-8">
        <div className="max-w-2xl">
          {/* Badges */}
          <div className="mb-4 flex items-center gap-3">
            {currentMovie.isHot && (
              <div className="flex items-center gap-1 rounded-full bg-red-500 px-3 py-1 text-sm font-medium text-white">
                <Star className="h-4 w-4" fill="white" />
                Hot
              </div>
            )}
            {currentMovie.isNew && (
              <div className="rounded-full bg-green-500 px-3 py-1 text-sm font-medium text-white">
                New
              </div>
            )}
            {currentMovie.isExclusive && (
              <div className="rounded-full bg-purple-500 px-3 py-1 text-sm font-medium text-white">
                Exclusive
              </div>
            )}
            {currentMovie.isDubbed && (
              <div className="rounded-full bg-blue-500 px-3 py-1 text-sm font-medium text-white">
                Dubbed
              </div>
            )}
          </div>

          {/* Title */}
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {currentMovie.title}
          </h1>

          {/* Genres */}
          <div className="mb-6 flex flex-wrap gap-2">
            {currentMovie.genres.slice(0, 3).map((genre, index) => (
              <span key={index} className="rounded-full bg-white/20 px-3 py-1 text-sm text-white backdrop-blur-sm">
                {genre}
              </span>
            ))}
          </div>

          {/* Play Button */}
          <button 
            onClick={() => router.push(`/episode/${currentMovie.id}`)}
            className="flex items-center gap-2 rounded-full bg-white px-8 py-3 text-lg font-semibold text-black transition-all hover:bg-gray-100 hover:scale-105"
          >
            <Play className="h-6 w-6" fill="black" />
            Play Now
          </button>
          
          {/* Slide Counter */}
          {featuredMovies.length > 1 && (
            <div className="mt-4 text-sm text-white/80">
              {currentSlide + 1} of {featuredMovies.length}
            </div>
          )}
          
          {/* Brand Name */}
          <div className="mt-4 text-sm text-white/60">
            Phim Drama
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 flex gap-2">
        {featuredMovies.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Manual Navigation Buttons */}
      {featuredMovies.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="md:hidden absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white backdrop-blur-sm transition-all hover:bg-black/70 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="md:hidden absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white backdrop-blur-sm transition-all hover:bg-black/70 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Decorative Elements */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-white/5 to-transparent" />
    </section>
  );
}
