import { MockVideo } from './mockVideos';

export interface VideoData {
  id: string;
  title: string;
  url: string;
  posterUrl: string;
  duration: number;
  views: number;
  likes: number;
  comments: number;
  shares: number;
}

// Convert mock videos to video data format
export const sampleVideos: VideoData[] = [
  {
    id: '1',
    title: 'Girls Help Girls: Divorce or Die',
    url: '/videos/girls-help-girls-ep1.mp4',
    posterUrl: '/api/placeholder/400/700',
    duration: 2700, // 45 minutes in seconds
    views: 1250000,
    likes: 12500,
    comments: 2340,
    shares: 890,
  },
  {
    id: '2',
    title: 'Born to Dominate',
    url: '/videos/born-to-dominate-ep1.mp4',
    posterUrl: '/api/placeholder/400/700',
    duration: 1800, // 30 minutes in seconds
    views: 890000,
    likes: 8900,
    comments: 1560,
    shares: 670,
  },
  {
    id: '3',
    title: '30 Years Frozen, 3 Brothers Regret',
    url: '/videos/30-years-frozen-ep1.mp4',
    posterUrl: '/api/placeholder/400/700',
    duration: 3600, // 60 minutes in seconds
    views: 2100000,
    likes: 21000,
    comments: 3450,
    shares: 1200,
  },
  {
    id: '4',
    title: 'Broken Bonds',
    url: '/videos/broken-bonds-ep1.mp4',
    posterUrl: '/api/placeholder/400/700',
    duration: 2400, // 40 minutes in seconds
    views: 1560000,
    likes: 15600,
    comments: 2890,
    shares: 980,
  },
  {
    id: '5',
    title: 'The Janitor\'s Mighty Fist',
    url: '/videos/janitors-mighty-fist-ep1.mp4',
    posterUrl: '/api/placeholder/400/700',
    duration: 2000, // 33 minutes in seconds
    views: 1340000,
    likes: 13400,
    comments: 2450,
    shares: 820,
  },
  {
    id: '6',
    title: 'Runaway Billionaire Becomes My Groom',
    url: '/videos/runaway-billionaire-ep1.mp4',
    posterUrl: '/api/placeholder/400/700',
    duration: 2200, // 37 minutes in seconds
    views: 1450000,
    likes: 14500,
    comments: 2670,
    shares: 910,
  },
];

// Helper function to get video by ID
export const getVideoById = (id: string): VideoData | undefined => {
  return sampleVideos.find(video => video.id === id);
};

// Helper function to get all videos
export const getAllVideos = (): VideoData[] => {
  return sampleVideos;
};

// Helper function to get videos by duration range
export const getVideosByDuration = (minDuration: number, maxDuration: number): VideoData[] => {
  return sampleVideos.filter(video => 
    video.duration >= minDuration && video.duration <= maxDuration
  );
};
