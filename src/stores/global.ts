import { DotProps } from '@/types/types.config';
import type { Config, Damage } from '@/types/types.config.js';
import { create } from 'zustand';

import { splitOptions } from '@/utils/generic';

interface GlobalStore {
  zohoInitialized: boolean;
  recordId: string | null;
  config: Config | null;
  getConfig: ({
    appName,
    reportName,
  }: {
    appName: string;
    reportName: string;
  }) => Promise<Config | null>;
  setConfig: (config: Config) => void;
}

export const useGlobalStore = create<GlobalStore>((set) => ({
  zohoInitialized: false,
  recordId: null,
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

      const configId = records[0].ID;

      set({ recordId: configId });

      const { data } = await ZOHO.CREATOR.API.getRecordById({
        ...paramsForm,
        id: configId,
      });

      const config = JSON.parse(data.config_1);

      const configFormatted = config;
      // const configFormatted = {
      //   ...config,
      //   damage_maps: config?.damage_maps?.map((damage: Damage) => {
      //     const options =
      //       typeof damage.options === 'string'
      //         ? splitOptions(damage.options)
      //         : [];
      //     return {
      //       ...damage,
      //       options,
      //       dots:
      //         typeof damage.dots === 'string' &&
      //         JSON.parse(damage.dots).map((dot: DotProps) => ({
      //           ...dot,
      //           active: false,
      //           options: options.map((option: string) => ({
      //             label: option,
      //             value: option,
      //             active: false,
      //             estimate: false,
      //           })),
      //         })),
      //     };
      //   }),
      // };

      console.log({ configFormatted });

      set({ config: configFormatted });
      return config;
    } catch (error: any) {
      throw error instanceof Error
        ? error
        : error?.responseText
          ? error.responseText
          : new Error('Unknown error occurred');
    }
  },
  setConfig: (config: Config) => {
    set({ config });
  },
}));
