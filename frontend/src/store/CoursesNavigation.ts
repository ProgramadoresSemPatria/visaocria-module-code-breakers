import { create } from 'zustand';

type CoursesNavigationStore = {
  activeTab: 'courses' | 'lessons';
  setActiveTab: (tab: 'courses' | 'lessons') => void;
};

const useCoursesNavigationStore = create<CoursesNavigationStore>((set) => ({
  activeTab: 'courses',
  setActiveTab: (tab) => set({ activeTab: tab }),
}));

export default useCoursesNavigationStore;
