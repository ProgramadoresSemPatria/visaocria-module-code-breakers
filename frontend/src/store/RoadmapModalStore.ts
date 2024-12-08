'use client';
import { create } from 'zustand';

type RoadmapModalStore = {
  isRoadmapModalOpen: boolean;
  setIsRoadmapModalOpen: (arg0: boolean) => void;
};

const useRoadmapModalStore = create<RoadmapModalStore>((set) => ({
  isRoadmapModalOpen: false,
  setIsRoadmapModalOpen: (isRoadmapModalOpen) => set({ isRoadmapModalOpen }),
}));

export default useRoadmapModalStore;
