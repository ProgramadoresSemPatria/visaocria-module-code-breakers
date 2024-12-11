import { create } from 'zustand';

interface RoadmapStore {
  selectedRoadmap: 'Algorithms' | 'Courses';
  setRoadmap: (roadmap: 'Algorithms' | 'Courses') => void;
}

const useRenderRoadmapStore = create<RoadmapStore>((set) => ({
  selectedRoadmap: 'Algorithms',
  setRoadmap: (roadmap: 'Algorithms' | 'Courses') =>
    set({ selectedRoadmap: roadmap }),
}));

export default useRenderRoadmapStore;
