import { create } from 'zustand';

interface Problem {
  id: number;
  title: string;
  difficulty: string;
  status: string;
  url: string;
  solution_url: string;
  subject_id: number;
  isSolved: boolean;
}

interface Prerequisite {
  id: number;
  title: string;
  description: string;
  subject_id: number;
  link: string;
}

interface Subject {
  source: any;
  id: number;
  title: string;
  roadmap_id: number;
  progress: number;
  total_problems: number;
  createdAt: string;
  updatedAt: string;
  prerequisites: Prerequisite[];
  problems: Problem[];
}

interface Roadmap {
  id: number;
  title: string;
  progress: number;
  total_problems: number;
  createdAt: string;
  updatedAt: string;
  subjects: Subject[];
}

export type RoadmapList = Roadmap;

interface RoadmapStore {
  roadmapData: RoadmapList[];
  setRoadmapData: (data: RoadmapList[]) => void;
}

const useRoadmapStore = create<RoadmapStore>((set) => ({
  roadmapData: [],
  setRoadmapData: (data: RoadmapList[]) => {
    set({ roadmapData: data });
  },
}));

export default useRoadmapStore;
