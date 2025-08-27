'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MovieSection from '@/components/MovieSection';
import Footer from '@/components/Footer';
import GenreFilter from '@/components/GenreFilter';
import { movies } from '@/data/movies';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();
  const [selectedGenre, setSelectedGenre] = useState('all');

  // Get all unique genres
  const allGenres = useMemo(() => {
    const genres = new Set<string>();
    movies.forEach(movie => {
      movie.genres.forEach(genre => genres.add(genre));
    });
    return Array.from(genres);
  }, []);

  // Filter movies by selected genre
  const filteredMovies = useMemo(() => {
    if (selectedGenre === 'all') return movies;
    return movies.filter(movie => movie.genres.includes(selectedGenre));
  }, [selectedGenre]);

  // Get featured movies for hero
  const featuredMovies = useMemo(() => {
    return movies.filter(movie => movie.isHot || movie.isNew || movie.isExclusive);
  }, []);

  // Get trending movies
  const trendingMovies = useMemo(() => {
    return movies.filter(movie => movie.isHot).slice(0, 10);
  }, []);

  // Get new releases
  const newReleases = useMemo(() => {
    return movies.filter(movie => movie.isNew).slice(0, 10);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main>
        <Hero />
        
        <GenreFilter
          genres={allGenres}
          selectedGenre={selectedGenre}
          onGenreChange={setSelectedGenre}
        />

        {selectedGenre === 'all' ? (
          <>
            <MovieSection
              title={t('categories.trending')}
              movies={trendingMovies}
            />
            <MovieSection
              title={t('categories.newReleases')}
              movies={newReleases}
            />
            <MovieSection
              title={t('categories.exclusive')}
              movies={movies.filter(movie => movie.isExclusive).slice(0, 10)}
            />
          </>
        ) : (
          <MovieSection
            title={`${t('movie.genre')}: ${t(`genres.${selectedGenre.toLowerCase().replace(/\s+/g, '')}`) || selectedGenre}`}
            movies={filteredMovies}
            showViewAll={false}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
