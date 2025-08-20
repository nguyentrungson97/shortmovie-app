import { Movie, Category } from '@/types/movie';

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Girls Help Girls: Divorce or Die',
    genres: ['Secret Identity', 'Independent Woman'],
    image: '/api/placeholder/300/400',
    isHot: true,
  },
  {
    id: '2',
    title: 'Born to Dominate',
    isDubbed: true,
    genres: ['Scumbag-punishing', 'Growth'],
    image: '/api/placeholder/300/400',
  },
  {
    id: '3',
    title: '30 Years Frozen, 3 Brothers Regret',
    genres: ['Regret', 'Stolen Identity'],
    image: '/api/placeholder/300/400',
  },
  {
    id: '4',
    title: 'Broken Bonds',
    isDubbed: true,
    genres: ['Elite', 'Counterattack'],
    image: '/api/placeholder/300/400',
  },
  {
    id: '5',
    title: 'The Janitor\'s Mighty Fist',
    isDubbed: true,
    genres: ['Secret Identity', 'Action'],
    image: '/api/placeholder/300/400',
  },
  {
    id: '6',
    title: 'Runaway Billionaire Becomes My Groom',
    genres: ['CEO', 'Secret Identity'],
    image: '/api/placeholder/300/400',
  },
  {
    id: '7',
    title: 'After Switched Fiancé, I Married a Mafia Boss',
    genres: ['Mafia'],
    image: '/api/placeholder/300/400',
  },
  {
    id: '8',
    title: 'Love for the Wrong Sister',
    genres: ['Regret', 'Scumbag-punishing'],
    image: '/api/placeholder/300/400',
  },
  {
    id: '9',
    title: 'Mommy, Why Did Daddy Let Me Die',
    genres: ['Urban', 'Counterattack'],
    image: '/api/placeholder/300/400',
  },
  {
    id: '10',
    title: 'No Trash, I\'m OP!',
    isDubbed: true,
    genres: ['Son-in-Law', 'Warrior'],
    image: '/api/placeholder/300/400',
    isNew: true,
  },
  {
    id: '11',
    title: 'Married to Mr. Busy',
    isDubbed: true,
    genres: ['Love After Marriage', 'Flash Marriage'],
    image: '/api/placeholder/300/400',
    isNew: true,
  },
  {
    id: '12',
    title: 'The Devil\'s Bride',
    genres: ['Urban', 'Werewolf'],
    image: '/api/placeholder/300/400',
    isExclusive: true,
  },
];

export const categories: Category[] = [
  {
    id: 'trending',
    name: 'Trending Now',
    movies: movies.slice(0, 8),
  },
  {
    id: 'new-releases',
    name: 'New Releases',
    movies: movies.filter(m => m.isNew),
  },
  {
    id: 'exclusive',
    name: 'Exclusive Originals',
    movies: movies.filter(m => m.isExclusive),
  },
  {
    id: 'recommended',
    name: 'Recommended',
    movies: movies.slice(4, 10),
  },
];
