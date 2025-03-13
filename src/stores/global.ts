import { DotProps } from '@/types/types.config';
import type { ConfigProps, MapProps } from '@/types/types.config.js';
import { create } from 'zustand';

import { splitOptions } from '@/utils/generic';

interface GlobalStore {
  zohoInitialized: boolean;
  recordId: string | null;
  config: ConfigProps | null;
  getConfig: ({
    appName,
    reportName,
  }: {
    appName: string;
    reportName: string;
  }) => Promise<ConfigProps | null>;
  setConfig: (config: ConfigProps) => void;
}

export const useGlobalStore = create<GlobalStore>((set) => ({
  zohoInitialized: false,
  recordId: null,
  config: null,
  getConfig: async ({ appName, reportName }: { appName: string; reportName: string }) => {
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

      const configId = records[0].ID;

      set({ recordId: configId });

      const { data: record } = await ZOHO.CREATOR.API.getRecordById({
        ...paramsForm,
        id: configId,
      });

      let config = null;

      if (record.config_1) config = JSON.parse(record.config_1);

      console.log({ config });

      set({ config });
      return config;
    } catch (error: any) {
      throw error instanceof Error
        ? error
        : error?.responseText
          ? error.responseText
          : new Error('Unknown error occurred');
    }
  },
  setConfig: (config: ConfigProps) => {
    set({ config });
  },
}));
