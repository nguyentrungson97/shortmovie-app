'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MovieSection from '@/components/MovieSection';
import Footer from '@/components/Footer';
import GenreFilter from '@/components/GenreFilter';
import { categories, movies } from '@/data/movies';

export default function Home() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  
  // Get all unique genres
  const allGenres = useMemo(() => {
    const genres = new Set<string>();
    movies.forEach(movie => {
      movie.genres.forEach(genre => genres.add(genre));
    });
    return Array.from(genres).sort();
  }, []);
  
  // Filter categories based on selected genre
  const filteredCategories = useMemo(() => {
    if (!selectedGenre) return categories;
    
    return categories.map(category => ({
      ...category,
      movies: category.movies.filter(movie => 
        movie.genres.includes(selectedGenre)
      )
    })).filter(category => category.movies.length > 0);
  }, [selectedGenre]);

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="mx-auto max-w-7xl px-4 py-8">
        <Hero />
        
        <GenreFilter
          genres={allGenres}
          selectedGenre={selectedGenre}
          onGenreChange={setSelectedGenre}
        />
        
        {filteredCategories.map((category) => (
          <MovieSection key={category.id} category={category} />
        ))}
      </div>
      
      <Footer />
    </main>
  );
}
