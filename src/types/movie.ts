export interface Episode {
  id: string;
  number: number;
  title: string;
  description: string;
  duration: number; // in minutes
  isLocked: boolean;
  videoUrl: string;
  posterUrl: string;
}

export interface Movie {
  id: string;
  title: string;
  isDubbed?: boolean;
  genres: string[];
  image: string;
  isHot?: boolean;
  isNew?: boolean;
  isExclusive?: boolean;
  episodes: Episode[];
  totalEpisodes: number;
}

export interface Category {
  id: string;
  name: string;
  movies: Movie[];
}
