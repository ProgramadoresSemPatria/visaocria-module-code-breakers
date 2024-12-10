import { create } from 'zustand';

export interface Lessons {
  title: string;
  link_url: string;
  image_url: string;
}

interface LessonsStore {
  lessonsData: Lessons[];
  setLessonsData: (data: Lessons[]) => void;
}

const useLessonsStore = create<LessonsStore>((set) => ({
  lessonsData: [],
  setLessonsData: (data: Lessons[]) => {
    set({ lessonsData: data });
  },
}));

export default useLessonsStore;
