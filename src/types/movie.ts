export interface Movie {
  id: string;
  title: string;
  isDubbed?: boolean;
  genres: string[];
  image: string;
  isHot?: boolean;
  isNew?: boolean;
  isExclusive?: boolean;
}

export interface Category {
  id: string;
  name: string;
  movies: Movie[];
}
