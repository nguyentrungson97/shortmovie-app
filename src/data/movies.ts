import { Movie, Category } from '@/types/movie';

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Girls Help Girls: Divorce or Die',
    genres: ['Secret Identity', 'Independent Woman'],
    image: '/api/placeholder',
    isHot: true,
    totalEpisodes: 12,
    episodes: [
      {
        id: '1-1',
        number: 1,
        title: 'The Beginning',
        description: 'A mysterious woman appears in the city with a mission to help other women.',
        duration: 45,
        isLocked: false,
        videoUrl: '/videos/girls-help-girls-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '1-2',
        number: 2,
        title: 'First Mission',
        description: 'The protagonist takes on her first case to help a woman in need.',
        duration: 42,
        isLocked: false,
        videoUrl: '/videos/girls-help-girls-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '1-3',
        number: 3,
        title: 'Revelation',
        description: 'Secrets are revealed about the protagonist\'s true identity.',
        duration: 44,
        isLocked: false,
        videoUrl: '/videos/girls-help-girls-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '1-4',
        number: 4,
        title: 'The Challenge',
        description: 'A new challenge arises that tests the protagonist\'s abilities.',
        duration: 43,
        isLocked: true,
        videoUrl: '/videos/girls-help-girls-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '1-5',
        number: 5,
        title: 'Allies and Enemies',
        description: 'The protagonist discovers who she can trust and who to avoid.',
        duration: 41,
        isLocked: true,
        videoUrl: '/videos/girls-help-girls-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '1-6',
        number: 6,
        title: 'The Plot Thickens',
        description: 'The mystery deepens as more women seek help.',
        duration: 46,
        isLocked: true,
        videoUrl: '/videos/girls-help-girls-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '1-7',
        number: 7,
        title: 'Breaking Point',
        description: 'The protagonist reaches a critical moment in her journey.',
        duration: 44,
        isLocked: true,
        videoUrl: '/videos/girls-help-girls-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '1-8',
        number: 8,
        title: 'New Allies',
        description: 'Unexpected help comes from an unlikely source.',
        duration: 42,
        isLocked: true,
        videoUrl: '/videos/girls-help-girls-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '1-9',
        number: 9,
        title: 'The Truth Emerges',
        description: 'Long-hidden secrets finally come to light.',
        duration: 45,
        isLocked: true,
        videoUrl: '/videos/girls-help-girls-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '1-10',
        number: 10,
        title: 'Final Preparations',
        description: 'The protagonist prepares for the ultimate confrontation.',
        duration: 43,
        isLocked: true,
        videoUrl: '/videos/girls-help-girls-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '1-11',
        number: 11,
        title: 'The Showdown',
        description: 'All the pieces come together in an epic confrontation.',
        duration: 47,
        isLocked: true,
        videoUrl: '/videos/girls-help-girls-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '1-12',
        number: 12,
        title: 'New Beginning',
        description: 'The story concludes with hope for the future.',
        duration: 46,
        isLocked: true,
        videoUrl: '/videos/girls-help-girls-ep1.mp4',
        posterUrl: '/api/placeholder'
      }
    ]
  },
  {
    id: '2',
    title: 'Born to Dominate',
    isDubbed: true,
    genres: ['Scumbag-punishing', 'Growth'],
    image: '/api/placeholder',
    isNew: true,
    totalEpisodes: 8,
    episodes: [
      {
        id: '2-1',
        number: 1,
        title: 'The Awakening',
        description: 'A young man discovers his hidden potential.',
        duration: 45,
        isLocked: false,
        videoUrl: '/videos/girls-help-girls-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '2-2',
        number: 2,
        title: 'First Steps',
        description: 'The journey of growth and learning begins.',
        duration: 43,
        isLocked: false,
        videoUrl: '/videos/girls-help-girls-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '2-3',
        number: 3,
        title: 'The Challenge',
        description: 'Facing the first real test of strength.',
        duration: 44,
        isLocked: false,
        videoUrl: '/videos/girls-help-girls-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '2-4',
        number: 4,
        title: 'Rising Power',
        description: 'The protagonist\'s abilities continue to grow.',
        duration: 42,
        isLocked: true,
        videoUrl: '/videos/girls-help-girls-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '2-5',
        number: 5,
        title: 'The Confrontation',
        description: 'A major enemy appears on the scene.',
        duration: 45,
        isLocked: true,
        videoUrl: '/videos/girls-help-girls-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '2-6',
        number: 6,
        title: 'Breaking Limits',
        description: 'Pushing beyond previous boundaries.',
        duration: 46,
        isLocked: true,
        videoUrl: '/videos/girls-help-girls-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '2-7',
        number: 7,
        title: 'The Final Battle',
        description: 'Preparing for the ultimate showdown.',
        duration: 44,
        isLocked: true,
        videoUrl: '/videos/girls-help-girls-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '2-8',
        number: 8,
        title: 'Dominance Achieved',
        description: 'The protagonist reaches his full potential.',
        duration: 47,
        isLocked: true,
        videoUrl: '/videos/girls-help-girls-ep1.mp4',
        posterUrl: '/api/placeholder'
      }
    ]
  },
  {
    id: '3',
    title: '30 Years Frozen, 3 Brothers Regret',
    genres: ['Regret', 'Stolen Identity'],
    image: '/api/placeholder',
    isExclusive: true,
    totalEpisodes: 6,
    episodes: [
      {
        id: '3-1',
        number: 1,
        title: 'The Awakening',
        description: 'After 30 years, the protagonist finally wakes up.',
        duration: 45,
        isLocked: false,
        videoUrl: '/videos/girls-help-girls-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '3-2',
        number: 2,
        title: 'The Discovery',
        description: 'Learning about the changes in the world.',
        duration: 43,
        isLocked: false,
        videoUrl: '/videos/girls-help-girls-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '3-3',
        number: 3,
        title: 'The Truth',
        description: 'Discovering what happened during the frozen years.',
        duration: 44,
        isLocked: false,
        videoUrl: '/videos/girls-help-girls-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '3-4',
        number: 4,
        title: 'The Reunion',
        description: 'Meeting the brothers after all these years.',
        duration: 42,
        isLocked: true,
        videoUrl: '/videos/girls-help-girls-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '3-5',
        number: 5,
        title: 'The Confrontation',
        description: 'Facing the brothers and their regrets.',
        duration: 45,
        isLocked: true,
        videoUrl: '/videos/girls-help-girls-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '3-6',
        number: 6,
        title: 'Resolution',
        description: 'Finding closure and moving forward.',
        duration: 46,
        isLocked: true,
        videoUrl: '/videos/girls-help-girls-ep1.mp4',
        posterUrl: '/api/placeholder'
      }
    ]
  },
  {
    id: '4',
    title: 'Broken Bonds',
    isDubbed: true,
    genres: ['Elite', 'Counterattack'],
    image: '/api/placeholder',
    totalEpisodes: 10,
    episodes: [
      {
        id: '4-1',
        number: 1,
        title: 'The Awakening',
        description: 'A young man discovers his hidden potential.',
        duration: 45,
        isLocked: false,
        videoUrl: '/videos/broken-bonds-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '4-2',
        number: 2,
        title: 'First Steps',
        description: 'The journey of growth and learning begins.',
        duration: 43,
        isLocked: false,
        videoUrl: '/videos/broken-bonds-ep2.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '4-3',
        number: 3,
        title: 'The Challenge',
        description: 'Facing the first real test of strength.',
        duration: 44,
        isLocked: false,
        videoUrl: '/videos/broken-bonds-ep3.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '4-4',
        number: 4,
        title: 'Rising Power',
        description: 'The protagonist\'s abilities continue to grow.',
        duration: 42,
        isLocked: true,
        videoUrl: '/videos/broken-bonds-ep4.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '4-5',
        number: 5,
        title: 'The Confrontation',
        description: 'A major enemy appears on the scene.',
        duration: 45,
        isLocked: true,
        videoUrl: '/videos/broken-bonds-ep5.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '4-6',
        number: 6,
        title: 'Breaking Limits',
        description: 'Pushing beyond previous boundaries.',
        duration: 46,
        isLocked: true,
        videoUrl: '/videos/broken-bonds-ep6.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '4-7',
        number: 7,
        title: 'The Final Battle',
        description: 'Preparing for the ultimate showdown.',
        duration: 44,
        isLocked: true,
        videoUrl: '/videos/broken-bonds-ep7.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '4-8',
        number: 8,
        title: 'Dominance Achieved',
        description: 'The protagonist reaches his full potential.',
        duration: 47,
        isLocked: true,
        videoUrl: '/videos/broken-bonds-ep8.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '4-9',
        number: 9,
        title: 'The Truth Emerges',
        description: 'Long-hidden secrets finally come to light.',
        duration: 45,
        isLocked: true,
        videoUrl: '/videos/broken-bonds-ep9.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '4-10',
        number: 10,
        title: 'Final Preparations',
        description: 'The protagonist prepares for the ultimate confrontation.',
        duration: 43,
        isLocked: true,
        videoUrl: '/videos/broken-bonds-ep10.mp4',
        posterUrl: '/api/placeholder'
      }
    ]
  },
  {
    id: '5',
    title: 'The Janitor\'s Mighty Fist',
    isDubbed: true,
    genres: ['Secret Identity', 'Action'],
    image: '/api/placeholder',
    totalEpisodes: 10,
    episodes: [
      {
        id: '5-1',
        number: 1,
        title: 'The Awakening',
        description: 'A young man discovers his hidden potential.',
        duration: 45,
        isLocked: false,
        videoUrl: '/videos/janitor-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '5-2',
        number: 2,
        title: 'First Steps',
        description: 'The journey of growth and learning begins.',
        duration: 43,
        isLocked: false,
        videoUrl: '/videos/janitor-ep2.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '5-3',
        number: 3,
        title: 'The Challenge',
        description: 'Facing the first real test of strength.',
        duration: 44,
        isLocked: false,
        videoUrl: '/videos/janitor-ep3.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '5-4',
        number: 4,
        title: 'Rising Power',
        description: 'The protagonist\'s abilities continue to grow.',
        duration: 42,
        isLocked: true,
        videoUrl: '/videos/janitor-ep4.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '5-5',
        number: 5,
        title: 'The Confrontation',
        description: 'A major enemy appears on the scene.',
        duration: 45,
        isLocked: true,
        videoUrl: '/videos/janitor-ep5.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '5-6',
        number: 6,
        title: 'Breaking Limits',
        description: 'Pushing beyond previous boundaries.',
        duration: 46,
        isLocked: true,
        videoUrl: '/videos/janitor-ep6.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '5-7',
        number: 7,
        title: 'The Final Battle',
        description: 'Preparing for the ultimate showdown.',
        duration: 44,
        isLocked: true,
        videoUrl: '/videos/janitor-ep7.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '5-8',
        number: 8,
        title: 'Dominance Achieved',
        description: 'The protagonist reaches his full potential.',
        duration: 47,
        isLocked: true,
        videoUrl: '/videos/janitor-ep8.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '5-9',
        number: 9,
        title: 'The Truth Emerges',
        description: 'Long-hidden secrets finally come to light.',
        duration: 45,
        isLocked: true,
        videoUrl: '/videos/janitor-ep9.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '5-10',
        number: 10,
        title: 'Final Preparations',
        description: 'The protagonist prepares for the ultimate confrontation.',
        duration: 43,
        isLocked: true,
        videoUrl: '/videos/janitor-ep10.mp4',
        posterUrl: '/api/placeholder'
      }
    ]
  },
  {
    id: '6',
    title: 'Runaway Billionaire Becomes My Groom',
    genres: ['CEO', 'Secret Identity'],
    image: '/api/placeholder',
    totalEpisodes: 10,
    episodes: [
      {
        id: '6-1',
        number: 1,
        title: 'The Awakening',
        description: 'A young man discovers his hidden potential.',
        duration: 45,
        isLocked: false,
        videoUrl: '/videos/runaway-billionaire-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '6-2',
        number: 2,
        title: 'First Steps',
        description: 'The journey of growth and learning begins.',
        duration: 43,
        isLocked: false,
        videoUrl: '/videos/runaway-billionaire-ep2.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '6-3',
        number: 3,
        title: 'The Challenge',
        description: 'Facing the first real test of strength.',
        duration: 44,
        isLocked: false,
        videoUrl: '/videos/runaway-billionaire-ep3.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '6-4',
        number: 4,
        title: 'Rising Power',
        description: 'The protagonist\'s abilities continue to grow.',
        duration: 42,
        isLocked: true,
        videoUrl: '/videos/runaway-billionaire-ep4.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '6-5',
        number: 5,
        title: 'The Confrontation',
        description: 'A major enemy appears on the scene.',
        duration: 45,
        isLocked: true,
        videoUrl: '/videos/runaway-billionaire-ep5.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '6-6',
        number: 6,
        title: 'Breaking Limits',
        description: 'Pushing beyond previous boundaries.',
        duration: 46,
        isLocked: true,
        videoUrl: '/videos/runaway-billionaire-ep6.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '6-7',
        number: 7,
        title: 'The Final Battle',
        description: 'Preparing for the ultimate showdown.',
        duration: 44,
        isLocked: true,
        videoUrl: '/videos/runaway-billionaire-ep7.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '6-8',
        number: 8,
        title: 'Dominance Achieved',
        description: 'The protagonist reaches his full potential.',
        duration: 47,
        isLocked: true,
        videoUrl: '/videos/runaway-billionaire-ep8.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '6-9',
        number: 9,
        title: 'The Truth Emerges',
        description: 'Long-hidden secrets finally come to light.',
        duration: 45,
        isLocked: true,
        videoUrl: '/videos/runaway-billionaire-ep9.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '6-10',
        number: 10,
        title: 'Final Preparations',
        description: 'The protagonist prepares for the ultimate confrontation.',
        duration: 43,
        isLocked: true,
        videoUrl: '/videos/runaway-billionaire-ep10.mp4',
        posterUrl: '/api/placeholder'
      }
    ]
  },
  {
    id: '7',
    title: 'After Switched Fiancé, I Married a Mafia Boss',
    genres: ['Mafia'],
    image: '/api/placeholder',
    totalEpisodes: 10,
    episodes: [
      {
        id: '7-1',
        number: 1,
        title: 'The Awakening',
        description: 'A young man discovers his hidden potential.',
        duration: 45,
        isLocked: false,
        videoUrl: '/videos/switched-fiancé-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '7-2',
        number: 2,
        title: 'First Steps',
        description: 'The journey of growth and learning begins.',
        duration: 43,
        isLocked: false,
        videoUrl: '/videos/switched-fiancé-ep2.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '7-3',
        number: 3,
        title: 'The Challenge',
        description: 'Facing the first real test of strength.',
        duration: 44,
        isLocked: false,
        videoUrl: '/videos/switched-fiancé-ep3.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '7-4',
        number: 4,
        title: 'Rising Power',
        description: 'The protagonist\'s abilities continue to grow.',
        duration: 42,
        isLocked: true,
        videoUrl: '/videos/switched-fiancé-ep4.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '7-5',
        number: 5,
        title: 'The Confrontation',
        description: 'A major enemy appears on the scene.',
        duration: 45,
        isLocked: true,
        videoUrl: '/videos/switched-fiancé-ep5.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '7-6',
        number: 6,
        title: 'Breaking Limits',
        description: 'Pushing beyond previous boundaries.',
        duration: 46,
        isLocked: true,
        videoUrl: '/videos/switched-fiancé-ep6.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '7-7',
        number: 7,
        title: 'The Final Battle',
        description: 'Preparing for the ultimate showdown.',
        duration: 44,
        isLocked: true,
        videoUrl: '/videos/switched-fiancé-ep7.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '7-8',
        number: 8,
        title: 'Dominance Achieved',
        description: 'The protagonist reaches his full potential.',
        duration: 47,
        isLocked: true,
        videoUrl: '/videos/switched-fiancé-ep8.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '7-9',
        number: 9,
        title: 'The Truth Emerges',
        description: 'Long-hidden secrets finally come to light.',
        duration: 45,
        isLocked: true,
        videoUrl: '/videos/switched-fiancé-ep9.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '7-10',
        number: 10,
        title: 'Final Preparations',
        description: 'The protagonist prepares for the ultimate confrontation.',
        duration: 43,
        isLocked: true,
        videoUrl: '/videos/switched-fiancé-ep10.mp4',
        posterUrl: '/api/placeholder'
      }
    ]
  },
  {
    id: '8',
    title: 'Love for the Wrong Sister',
    genres: ['Regret', 'Scumbag-punishing'],
    image: '/api/placeholder',
    totalEpisodes: 10,
    episodes: [
      {
        id: '8-1',
        number: 1,
        title: 'The Awakening',
        description: 'A young man discovers his hidden potential.',
        duration: 45,
        isLocked: false,
        videoUrl: '/videos/love-wrong-sister-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '8-2',
        number: 2,
        title: 'First Steps',
        description: 'The journey of growth and learning begins.',
        duration: 43,
        isLocked: false,
        videoUrl: '/videos/love-wrong-sister-ep2.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '8-3',
        number: 3,
        title: 'The Challenge',
        description: 'Facing the first real test of strength.',
        duration: 44,
        isLocked: false,
        videoUrl: '/videos/love-wrong-sister-ep3.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '8-4',
        number: 4,
        title: 'Rising Power',
        description: 'The protagonist\'s abilities continue to grow.',
        duration: 42,
        isLocked: true,
        videoUrl: '/videos/love-wrong-sister-ep4.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '8-5',
        number: 5,
        title: 'The Confrontation',
        description: 'A major enemy appears on the scene.',
        duration: 45,
        isLocked: true,
        videoUrl: '/videos/love-wrong-sister-ep5.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '8-6',
        number: 6,
        title: 'Breaking Limits',
        description: 'Pushing beyond previous boundaries.',
        duration: 46,
        isLocked: true,
        videoUrl: '/videos/love-wrong-sister-ep6.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '8-7',
        number: 7,
        title: 'The Final Battle',
        description: 'Preparing for the ultimate showdown.',
        duration: 44,
        isLocked: true,
        videoUrl: '/videos/love-wrong-sister-ep7.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '8-8',
        number: 8,
        title: 'Dominance Achieved',
        description: 'The protagonist reaches his full potential.',
        duration: 47,
        isLocked: true,
        videoUrl: '/videos/love-wrong-sister-ep8.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '8-9',
        number: 9,
        title: 'The Truth Emerges',
        description: 'Long-hidden secrets finally come to light.',
        duration: 45,
        isLocked: true,
        videoUrl: '/videos/love-wrong-sister-ep9.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '8-10',
        number: 10,
        title: 'Final Preparations',
        description: 'The protagonist prepares for the ultimate confrontation.',
        duration: 43,
        isLocked: true,
        videoUrl: '/videos/love-wrong-sister-ep10.mp4',
        posterUrl: '/api/placeholder'
      }
    ]
  },
  {
    id: '9',
    title: 'Mommy, Why Did Daddy Let Me Die',
    genres: ['Urban', 'Counterattack'],
    image: '/api/placeholder',
    totalEpisodes: 10,
    episodes: [
      {
        id: '9-1',
        number: 1,
        title: 'The Awakening',
        description: 'A young man discovers his hidden potential.',
        duration: 45,
        isLocked: false,
        videoUrl: '/videos/mommy-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '9-2',
        number: 2,
        title: 'First Steps',
        description: 'The journey of growth and learning begins.',
        duration: 43,
        isLocked: false,
        videoUrl: '/videos/mommy-ep2.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '9-3',
        number: 3,
        title: 'The Challenge',
        description: 'Facing the first real test of strength.',
        duration: 44,
        isLocked: false,
        videoUrl: '/videos/mommy-ep3.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '9-4',
        number: 4,
        title: 'Rising Power',
        description: 'The protagonist\'s abilities continue to grow.',
        duration: 42,
        isLocked: true,
        videoUrl: '/videos/mommy-ep4.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '9-5',
        number: 5,
        title: 'The Confrontation',
        description: 'A major enemy appears on the scene.',
        duration: 45,
        isLocked: true,
        videoUrl: '/videos/mommy-ep5.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '9-6',
        number: 6,
        title: 'Breaking Limits',
        description: 'Pushing beyond previous boundaries.',
        duration: 46,
        isLocked: true,
        videoUrl: '/videos/mommy-ep6.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '9-7',
        number: 7,
        title: 'The Final Battle',
        description: 'Preparing for the ultimate showdown.',
        duration: 44,
        isLocked: true,
        videoUrl: '/videos/mommy-ep7.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '9-8',
        number: 8,
        title: 'Dominance Achieved',
        description: 'The protagonist reaches his full potential.',
        duration: 47,
        isLocked: true,
        videoUrl: '/videos/mommy-ep8.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '9-9',
        number: 9,
        title: 'The Truth Emerges',
        description: 'Long-hidden secrets finally come to light.',
        duration: 45,
        isLocked: true,
        videoUrl: '/videos/mommy-ep9.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '9-10',
        number: 10,
        title: 'Final Preparations',
        description: 'The protagonist prepares for the ultimate confrontation.',
        duration: 43,
        isLocked: true,
        videoUrl: '/videos/mommy-ep10.mp4',
        posterUrl: '/api/placeholder'
      }
    ]
  },
  {
    id: '10',
    title: 'No Trash, I\'m OP!',
    isDubbed: true,
    genres: ['Son-in-Law', 'Warrior'],
    image: '/api/placeholder',
    totalEpisodes: 10,
    episodes: [
      {
        id: '10-1',
        number: 1,
        title: 'The Awakening',
        description: 'A young man discovers his hidden potential.',
        duration: 45,
        isLocked: false,
        videoUrl: '/videos/no-trash-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '10-2',
        number: 2,
        title: 'First Steps',
        description: 'The journey of growth and learning begins.',
        duration: 43,
        isLocked: false,
        videoUrl: '/videos/no-trash-ep2.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '10-3',
        number: 3,
        title: 'The Challenge',
        description: 'Facing the first real test of strength.',
        duration: 44,
        isLocked: false,
        videoUrl: '/videos/no-trash-ep3.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '10-4',
        number: 4,
        title: 'Rising Power',
        description: 'The protagonist\'s abilities continue to grow.',
        duration: 42,
        isLocked: true,
        videoUrl: '/videos/no-trash-ep4.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '10-5',
        number: 5,
        title: 'The Confrontation',
        description: 'A major enemy appears on the scene.',
        duration: 45,
        isLocked: true,
        videoUrl: '/videos/no-trash-ep5.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '10-6',
        number: 6,
        title: 'Breaking Limits',
        description: 'Pushing beyond previous boundaries.',
        duration: 46,
        isLocked: true,
        videoUrl: '/videos/no-trash-ep6.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '10-7',
        number: 7,
        title: 'The Final Battle',
        description: 'Preparing for the ultimate showdown.',
        duration: 44,
        isLocked: true,
        videoUrl: '/videos/no-trash-ep7.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '10-8',
        number: 8,
        title: 'Dominance Achieved',
        description: 'The protagonist reaches his full potential.',
        duration: 47,
        isLocked: true,
        videoUrl: '/videos/no-trash-ep8.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '10-9',
        number: 9,
        title: 'The Truth Emerges',
        description: 'Long-hidden secrets finally come to light.',
        duration: 45,
        isLocked: true,
        videoUrl: '/videos/no-trash-ep9.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '10-10',
        number: 10,
        title: 'Final Preparations',
        description: 'The protagonist prepares for the ultimate confrontation.',
        duration: 43,
        isLocked: true,
        videoUrl: '/videos/no-trash-ep10.mp4',
        posterUrl: '/api/placeholder'
      }
    ]
  },
  {
    id: '11',
    title: 'Married to Mr. Busy',
    isDubbed: true,
    genres: ['Love After Marriage', 'Flash Marriage'],
    image: '/api/placeholder',
    totalEpisodes: 10,
    episodes: [
      {
        id: '11-1',
        number: 1,
        title: 'The Awakening',
        description: 'A young man discovers his hidden potential.',
        duration: 45,
        isLocked: false,
        videoUrl: '/videos/married-busy-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '11-2',
        number: 2,
        title: 'First Steps',
        description: 'The journey of growth and learning begins.',
        duration: 43,
        isLocked: false,
        videoUrl: '/videos/married-busy-ep2.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '11-3',
        number: 3,
        title: 'The Challenge',
        description: 'Facing the first real test of strength.',
        duration: 44,
        isLocked: false,
        videoUrl: '/videos/married-busy-ep3.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '11-4',
        number: 4,
        title: 'Rising Power',
        description: 'The protagonist\'s abilities continue to grow.',
        duration: 42,
        isLocked: true,
        videoUrl: '/videos/married-busy-ep4.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '11-5',
        number: 5,
        title: 'The Confrontation',
        description: 'A major enemy appears on the scene.',
        duration: 45,
        isLocked: true,
        videoUrl: '/videos/married-busy-ep5.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '11-6',
        number: 6,
        title: 'Breaking Limits',
        description: 'Pushing beyond previous boundaries.',
        duration: 46,
        isLocked: true,
        videoUrl: '/videos/married-busy-ep6.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '11-7',
        number: 7,
        title: 'The Final Battle',
        description: 'Preparing for the ultimate showdown.',
        duration: 44,
        isLocked: true,
        videoUrl: '/videos/married-busy-ep7.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '11-8',
        number: 8,
        title: 'Dominance Achieved',
        description: 'The protagonist reaches his full potential.',
        duration: 47,
        isLocked: true,
        videoUrl: '/videos/married-busy-ep8.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '11-9',
        number: 9,
        title: 'The Truth Emerges',
        description: 'Long-hidden secrets finally come to light.',
        duration: 45,
        isLocked: true,
        videoUrl: '/videos/married-busy-ep9.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '11-10',
        number: 10,
        title: 'Final Preparations',
        description: 'The protagonist prepares for the ultimate confrontation.',
        duration: 43,
        isLocked: true,
        videoUrl: '/videos/married-busy-ep10.mp4',
        posterUrl: '/api/placeholder'
      }
    ]
  },
  {
    id: '12',
    title: 'The Devil\'s Bride',
    genres: ['Urban', 'Werewolf'],
    image: '/api/placeholder',
    totalEpisodes: 10,
    episodes: [
      {
        id: '12-1',
        number: 1,
        title: 'The Awakening',
        description: 'A young man discovers his hidden potential.',
        duration: 45,
        isLocked: false,
        videoUrl: '/videos/devil-bride-ep1.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '12-2',
        number: 2,
        title: 'First Steps',
        description: 'The journey of growth and learning begins.',
        duration: 43,
        isLocked: false,
        videoUrl: '/videos/devil-bride-ep2.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '12-3',
        number: 3,
        title: 'The Challenge',
        description: 'Facing the first real test of strength.',
        duration: 44,
        isLocked: false,
        videoUrl: '/videos/devil-bride-ep3.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '12-4',
        number: 4,
        title: 'Rising Power',
        description: 'The protagonist\'s abilities continue to grow.',
        duration: 42,
        isLocked: true,
        videoUrl: '/videos/devil-bride-ep4.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '12-5',
        number: 5,
        title: 'The Confrontation',
        description: 'A major enemy appears on the scene.',
        duration: 45,
        isLocked: true,
        videoUrl: '/videos/devil-bride-ep5.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '12-6',
        number: 6,
        title: 'Breaking Limits',
        description: 'Pushing beyond previous boundaries.',
        duration: 46,
        isLocked: true,
        videoUrl: '/videos/devil-bride-ep6.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '12-7',
        number: 7,
        title: 'The Final Battle',
        description: 'Preparing for the ultimate showdown.',
        duration: 44,
        isLocked: true,
        videoUrl: '/videos/devil-bride-ep7.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '12-8',
        number: 8,
        title: 'Dominance Achieved',
        description: 'The protagonist reaches his full potential.',
        duration: 47,
        isLocked: true,
        videoUrl: '/videos/devil-bride-ep8.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '12-9',
        number: 9,
        title: 'The Truth Emerges',
        description: 'Long-hidden secrets finally come to light.',
        duration: 45,
        isLocked: true,
        videoUrl: '/videos/devil-bride-ep9.mp4',
        posterUrl: '/api/placeholder'
      },
      {
        id: '12-10',
        number: 10,
        title: 'Final Preparations',
        description: 'The protagonist prepares for the ultimate confrontation.',
        duration: 43,
        isLocked: true,
        videoUrl: '/videos/devil-bride-ep10.mp4',
        posterUrl: '/api/placeholder'
      }
    ]
  }
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
