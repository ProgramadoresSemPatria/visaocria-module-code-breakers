import { create } from 'zustand';

export interface Courses {
  source: any;
  id: any;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  image_url: string;
  link_url: string;
  matter:
    | 'DATA_STRUCTURES_AND_ALGORITHMS'
    | 'SYSTEM_DESIGN'
    | 'PYTHON'
    | 'FULL_STACK_DEVELOPMENT'
    | 'OBJECT_ORIENTED_DESIGN';
}

interface CoursesStore {
  coursesData: Courses[];
  setCoursesData: (data: Courses[]) => void;
}

const useCoursesStore = create<CoursesStore>((set) => ({
  coursesData: [],
  setCoursesData: (data: Courses[]) => {
    set({ coursesData: data });
  },
}));

export default useCoursesStore;
