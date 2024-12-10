import { create } from 'zustand';

interface RoadmapModalState {
  isRoadmapModalOpen: boolean;
  selectedNode: { label: string; description?: string } | null;
  setIsRoadmapModalOpen: (isOpen: boolean) => void;
  setSelectedNode: (
    node: { label: string; description?: string } | null,
  ) => void;
}

const useRoadmapModalStore = create<RoadmapModalState>((set) => ({
  isRoadmapModalOpen: false,
  selectedNode: null,
  setIsRoadmapModalOpen: (isOpen) => set({ isRoadmapModalOpen: isOpen }),
  setSelectedNode: (node) => set({ selectedNode: node }),
}));

export default useRoadmapModalStore;
