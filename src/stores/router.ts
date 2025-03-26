import { create } from 'zustand';

import routes from '@/utils/routes';

interface RouterStore {
  current: keyof typeof routes;
  push: (route: keyof typeof routes) => void;
}

export const useRouterStore = create<RouterStore>((set, get) => ({
  current: 'form',
  push: (route) => {
    if (route !== get().current) {
      set({ current: route });
    }
  },
}));
