import type { Config } from '@/types/index.js';
import { create } from 'zustand';

interface GlobalStore {
  zohoInitialized: boolean;
  config: Config | null;
}

export const useGlobalStore = create<GlobalStore>((set) => ({
  zohoInitialized: false,
  config: null,
}));
