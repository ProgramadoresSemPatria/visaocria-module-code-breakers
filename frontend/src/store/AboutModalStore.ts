'use client'
import { create } from 'zustand';

type AboutModalStore = {
  isAboutModalStore: boolean;
  setIsAboutModalStore: (arg0: boolean) => void;
};

const useAboutModalStore = create<AboutModalStore>((set) => ({
  isAboutModalStore: false,
  setIsAboutModalStore: (isAboutModalStore) => set({ isAboutModalStore }),
}));

export default useAboutModalStore;
