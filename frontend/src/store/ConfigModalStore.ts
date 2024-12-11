'use client';
import { create } from 'zustand';

type ConfigModalStore = {
  isConfigModalStore: boolean;
  setIsConfigModalStore: (arg0: boolean) => void;
};

const useConfigModalStore = create<ConfigModalStore>((set) => ({
  isConfigModalStore: false,
  setIsConfigModalStore: (isConfigModalStore) => set({ isConfigModalStore }),
}));

export default useConfigModalStore;
