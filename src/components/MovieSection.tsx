import { Category } from '@/types/movie';
import MovieCard from './MovieCard';

interface MovieSectionProps {
  category: Category;
}

export default function MovieSection({ category }: MovieSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-xl font-bold text-white">{category.name}</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {category.movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            className="h-full"
          />
        ))}
      </div>
    </section>
  );
}
