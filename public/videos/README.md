# Videos Folder

This folder contains mock video files for development and testing purposes.

## File Structure

```
public/videos/
├── README.md
├── girls-help-girls-ep1.mp4
├── born-to-dominate-ep1.mp4
├── 30-years-frozen-ep1.mp4
├── broken-bonds-ep1.mp4
├── janitors-mighty-fist-ep1.mp4
└── runaway-billionaire-ep1.mp4
```

## Video Files

### 1. girls-help-girls-ep1.mp4
- **Duration**: 45 minutes (2700 seconds)
- **Size**: 125MB
- **Format**: MP4
- **Description**: Episode 1 of "Girls Help Girls: Divorce or Die"

### 2. born-to-dominate-ep1.mp4
- **Duration**: 30 minutes (1800 seconds)
- **Size**: 89MB
- **Format**: MP4
- **Description**: Episode 1 of "Born to Dominate"

### 3. 30-years-frozen-ep1.mp4
- **Duration**: 60 minutes (3600 seconds)
- **Size**: 210MB
- **Format**: MP4
- **Description**: Episode 1 of "30 Years Frozen, 3 Brothers Regret"

### 4. broken-bonds-ep1.mp4
- **Duration**: 40 minutes (2400 seconds)
- **Size**: 156MB
- **Format**: MP4
- **Description**: Episode 1 of "Broken Bonds"

### 5. janitors-mighty-fist-ep1.mp4
- **Duration**: 33 minutes (2000 seconds)
- **Size**: 134MB
- **Format**: MP4
- **Description**: Episode 1 of "The Janitor's Mighty Fist"

### 6. runaway-billionaire-ep1.mp4
- **Duration**: 37 minutes (2200 seconds)
- **Size**: 145MB
- **Format**: MP4
- **Description**: Episode 1 of "Runaway Billionaire Becomes My Groom"

## Usage

### Adding New Videos
1. Place your video file in this folder
2. Update the `mockVideos` array in `src/data/mockVideos.ts`
3. Use the helper functions to access video data

### Helper Functions
```typescript
import { getVideoById, getAllVideos, getVideosByFormat, getVideosByDuration } from '@/data/mockVideos';

// Get video by ID
const video = getVideoById('1');

// Get all videos
const allVideos = getAllVideos();

// Get videos by format
const mp4Videos = getVideosByFormat('MP4');

// Get videos by duration range (in seconds)
const shortVideos = getVideosByDuration(0, 1800); // 0-30 minutes
const longVideos = getVideosByDuration(3600, 7200); // 60-120 minutes
```

## Notes

- All video files should be in MP4 format for best compatibility
- File sizes are approximate and may vary
- Duration is stored in seconds for easy calculations
- Videos are served from the public folder, so they're accessible via `/videos/filename.mp4`

## Development

For development purposes, you can use placeholder videos or sample MP4 files. The mock data structure allows you to easily switch between different video sources when needed.
