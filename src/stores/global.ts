import type { Config } from '@/types/index.js';
import { create } from 'zustand';

interface GlobalStore {
  zohoInitialized: boolean;
  config: Config | null;
  getConfig: ({
    appName,
    reportName,
  }: {
    appName: string;
    reportName: string;
  }) => Promise<Config | null>;
}

export const useGlobalStore = create<GlobalStore>((set) => ({
  zohoInitialized: false,
  config: null,
  getConfig: async ({
    appName,
    reportName,
  }: {
    appName: string;
    reportName: string;
  }) => {
    const paramsForm = {
      appName,
      reportName,
    };

    try {
      const { data: records } = await ZOHO.CREATOR.API.getAllRecords({
        ...paramsForm,
        criteria: '',
        page: 1,
        pageSize: 1,
      });

      if (!records?.length) {
        throw new Error('Nenhum registo encontrado ou erro na API');
      }

      const { data } = await ZOHO.CREATOR.API.getRecordById({
        ...paramsForm,
        id: records[0].ID,
      });

      const config = JSON.parse(data.config);
      set({ config });
      return config;
    } catch (error) {
      throw error instanceof Error
        ? error
        : new Error('Unknown error occurred');
    }
  },
}));
