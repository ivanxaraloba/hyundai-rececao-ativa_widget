import { DotProps } from '@/types/types.config';
import type { Config, Damage } from '@/types/types.config.js';
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

      const configFormatted = {
        ...config,
        damage_maps: config?.damage_maps?.map((damage: Damage) => {
          const options =
            typeof damage.options === 'string'
              ? damage.options.split(';').filter(Boolean)
              : [];

          return {
            ...damage,
            options,
            dots:
              typeof damage.dots === 'string' &&
              JSON.parse(damage.dots).map((dot: DotProps) => ({
                ...dot,
                options: options.map((option: string) => ({
                  label: option,
                  value: option,
                  active: false,
                  estimate: false,
                })),
              })),
          };
        }),
      };

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
}));
