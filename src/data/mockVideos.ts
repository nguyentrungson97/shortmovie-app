export interface MockVideo {
  id: string;
  title: string;
  filename: string;
  path: string;
  duration: number; // in seconds
  size: string; // file size
  format: string;
  thumbnail?: string;
  description: string;
}

export const mockVideos: MockVideo[] = [
  {
    id: '1',
    title: 'Girls Help Girls: Divorce or Die',
    filename: 'girls-help-girls-ep1.mp4',
    path: '/videos/girls-help-girls-ep1.mp4',
    duration: 2700, // 45 minutes
    size: '125MB',
    format: 'MP4',
    description: 'Episode 1: The beginning of an empowering journey where women support each other through life\'s challenges.'
  },
  {
    id: '2',
    title: 'Born to Dominate',
    filename: 'born-to-dominate-ep1.mp4',
    path: '/videos/born-to-dominate-ep1.mp4',
    duration: 1800, // 30 minutes
    size: '89MB',
    format: 'MP4',
    description: 'Episode 1: A powerful story of destiny and determination as our protagonist discovers their true potential.'
  },
  {
    id: '3',
    title: '30 Years Frozen, 3 Brothers Regret',
    filename: '30-years-frozen-ep1.mp4',
    path: '/videos/30-years-frozen-ep1.mp4',
    duration: 3600, // 60 minutes
    size: '210MB',
    format: 'MP4',
    description: 'Episode 1: A tale of time, regret, and redemption as three brothers face the consequences of their past.'
  },
  {
    id: '4',
    title: 'Broken Bonds',
    filename: 'broken-bonds-ep1.mp4',
    path: '/videos/broken-bonds-ep1.mp4',
    duration: 2400, // 40 minutes
    size: '156MB',
    format: 'MP4',
    description: 'Episode 1: Exploring the complexities of relationships and the bonds that hold us together or tear us apart.'
  },
  {
    id: '5',
    title: 'The Janitor\'s Mighty Fist',
    filename: 'janitors-mighty-fist-ep1.mp4',
    path: '/videos/janitors-mighty-fist-ep1.mp4',
    duration: 2000, // 33 minutes
    size: '134MB',
    format: 'MP4',
    description: 'Episode 1: An unlikely hero emerges from the shadows with extraordinary abilities and a mysterious past.'
  },
  {
    id: '6',
    title: 'Runaway Billionaire Becomes My Groom',
    filename: 'runaway-billionaire-ep1.mp4',
    path: '/videos/runaway-billionaire-ep1.mp4',
    duration: 2200, // 37 minutes
    size: '145MB',
    format: 'MP4',
    description: 'Episode 1: A romantic comedy about love, wealth, and the unexpected paths life takes us on.'
  }
];

// Helper function to get video by ID
export const getVideoById = (id: string): MockVideo | undefined => {
  return mockVideos.find(video => video.id === id);
};

// Helper function to get all videos
export const getAllVideos = (): MockVideo[] => {
  return mockVideos;
};

// Helper function to get videos by format
export const getVideosByFormat = (format: string): MockVideo[] => {
  return mockVideos.filter(video => video.format.toLowerCase() === format.toLowerCase());
};

// Helper function to get videos by duration range
export const getVideosByDuration = (minDuration: number, maxDuration: number): MockVideo[] => {
  return mockVideos.filter(video => 
    video.duration >= minDuration && video.duration <= maxDuration
  );
};
