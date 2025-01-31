import { configDamageMapsType } from '@/utils/types';

const damageTypes = {
  default: [
    { label: 'Mossa', value: 'Mossa' },
    { label: 'Risco', value: 'Risco' },
    { label: 'Outros Danos', value: 'Outros Danos' },
  ],
  glass: [
    { label: 'Estalado', value: 'Estalado' },
    { label: 'Picado', value: 'Picado' },
    { label: 'Partido', value: 'Partido' },
  ],
};

export const configDamageMaps: configDamageMapsType = {
  ALL: {
    image:
      'https://previewengine-accl.zohoexternal.com/image/WD/letco0f5069236adb4cba9e4a7036e2c22d12',
    dots: [
      {
        id: 1,
        name: 'Roda Frente Esquerda',
        x: 34,
        y: 212,
        active: false,
      },
      {
        id: 2,
        name: 'Guarda-Lamas Esquerdo',
        x: 71,
        y: 217,
        active: false,
      },
      {
        id: 3,
        name: 'Porta Dianteira Esquerda',
        x: 52,
        y: 284,
        active: false,
      },
      {
        id: 4,
        name: 'Porta Traseira Esquerda',
        x: 52,
        y: 347,
        active: false,
      },
      {
        id: 5,
        name: 'Roda Traseira Esquerda',
        x: 34,
        y: 401,
        active: false,
      },
      {
        id: 6,
        name: 'Painel de Trás Esquerdo',
        x: 82,
        y: 407,
        active: false,
      },
      {
        id: 7,
        name: 'Pára-choques Traseiro',
        x: 197,
        y: 540,
        active: false,
      },
      {
        id: 8,
        name: 'Painel de Trás Direito',
        x: 312,
        y: 397,
        active: false,
      },
      {
        id: 9,
        name: 'Roda Traseira Direita',
        x: 355,
        y: 391,
        active: false,
      },
      {
        id: 10,
        name: 'Porta Traseira Direita',
        x: 327,
        y: 332,
        active: false,
      },
      {
        id: 11,
        name: 'Porta Dianteira Direita',
        x: 333,
        y: 267,
        active: false,
      },
      {
        id: 12,
        name: 'Guarda-Lamas Direito',
        x: 313,
        y: 206,
        active: false,
      },
      {
        id: 13,
        name: 'Roda Dianteira Direita',
        x: 355,
        y: 202,
        active: false,
      },
      {
        id: 14,
        name: 'Pára-choques Dianteiro',
        x: 194,
        y: 47,
        active: false,
      },
      {
        id: 15,
        name: 'Capô',
        x: 194,
        y: 180,
        active: false,
      },
      {
        id: 16,
        name: 'Tejadilho',
        x: 194,
        y: 243,
        active: false,
      },
      {
        id: 22,
        name: 'Tampa da Mala',
        x: 197,
        y: 404,
        active: false,
      },
      {
        id: 23,
        name: 'Tampa da Mala',
        x: 197,
        y: 442,
        active: false,
      },
    ],
  },
  GLASS: {
    image:
      'https://previewengine-accl.zohoexternal.com/image/WD/letco0f5069236adb4cba9e4a7036e2c22d12',
    dots: [
      {
        id: 1,
        x: 195,
        y: 242,
        active: false,
        name: 'Parabrisa',

        options: damageTypes.glass,
      },
      {
        id: 2,
        x: 143,
        y: 279,
        active: false,
        name: 'Vidro Lateral Frente Esquerdo',
        options: damageTypes.glass,
      },
      {
        id: 3,
        x: 247,
        y: 280,
        active: false,
        name: 'Vidro Lateral Frente Direito',
        options: damageTypes.glass,
      },
      {
        id: 4,
        x: 143,
        y: 333,
        active: false,
        name: 'Vidro Lateral Trás Esquerdo',

        options: damageTypes.glass,
      },
      {
        id: 5,
        x: 247,
        y: 333,
        active: false,
        name: 'Vidro Lateral Trás Direito',

        options: damageTypes.glass,
      },
      {
        id: 6,
        x: 195,
        y: 380,
        active: false,
        name: 'Óculo',

        options: damageTypes.glass,
      },
    ],
  },
  TESTE1: {
    image:
      'https://previewengine-accl.zohoexternal.com/image/WD/letco0f5069236adb4cba9e4a7036e2c22d12',
    dots: [
      {
        id: 1,
        name: 'Roda Frente Esquerda',
        x: 34,
        y: 212,
        active: false,

        options: damageTypes.default,
      },
      {
        id: 2,
        name: 'Guarda-Lamas Esquerdo',
        x: 71,
        y: 217,
        active: false,

        options: damageTypes.default,
      },
      {
        id: 3,
        name: 'Porta Dianteira Esquerda',
        x: 52,
        y: 284,
        active: false,

        options: damageTypes.default,
      },
      {
        id: 4,
        name: 'Porta Traseira Esquerda',
        x: 52,
        y: 347,
        active: false,

        options: damageTypes.default,
      },
      {
        id: 5,
        name: 'Roda Traseira Esquerda',
        x: 34,
        y: 401,
        active: false,

        options: damageTypes.default,
      },
      {
        id: 6,
        name: 'Painel de Trás Esquerdo',
        x: 82,
        y: 407,
        active: false,

        options: damageTypes.default,
      },
      {
        id: 7,
        name: 'Pára-choques Traseiro',
        x: 197,
        y: 540,
        active: false,

        options: damageTypes.default,
      },
      {
        id: 8,
        name: 'Painel de Trás Direito',
        x: 312,
        y: 397,
        active: false,

        options: damageTypes.default,
      },
      {
        id: 9,
        name: 'Roda Traseira Direita',
        x: 355,
        y: 391,
        active: false,

        options: damageTypes.default,
      },
      {
        id: 10,
        name: 'Porta Traseira Direita',
        x: 327,
        y: 332,
        active: false,

        options: damageTypes.default,
      },
      {
        id: 11,
        name: 'Porta Dianteira Direita',
        x: 333,
        y: 267,
        active: false,

        options: damageTypes.default,
      },
      {
        id: 12,
        name: 'Guarda-Lamas Direito',
        x: 313,
        y: 206,
        active: false,

        options: damageTypes.default,
      },
      {
        id: 13,
        name: 'Roda Dianteira Direita',
        x: 355,
        y: 202,
        active: false,

        options: damageTypes.default,
      },
      {
        id: 14,
        name: 'Pára-choques Dianteiro',
        x: 194,
        y: 47,
        active: false,

        options: damageTypes.default,
      },
      {
        id: 15,
        name: 'Capô',
        x: 194,
        y: 180,
        active: false,

        options: damageTypes.default,
      },
      {
        id: 16,
        name: 'Tejadilho',
        x: 194,
        y: 243,
        active: false,

        options: damageTypes.default,
      },
      {
        id: 22,
        name: 'Tampa da Mala',
        x: 197,
        y: 404,
        active: false,

        options: damageTypes.default,
      },
      {
        id: 23,
        name: 'Tampa da Mala',
        x: 197,
        y: 442,
        active: false,

        options: damageTypes.default,
      },
    ],
  },
};

