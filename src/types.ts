export interface Project {
    id: string;
    title: string;
    description: string;
    videoUrl: string;
    videoPlaceholder?: { width: number; height: number; aiHint?: string };
    tags: string[];
  }
  