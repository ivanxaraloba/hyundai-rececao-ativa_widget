import { addDays, endOfMonth, startOfMonth, subDays, subMonths } from 'date-fns';

export const GANTT_SIZES = {
  headerHeight: 60,
  sidebarWidth: 300,
  rowHeight: 38,
  baseColumnWidth: 50,
  monthlyColumnWidth: 150,
  quarterlyColumnWidth: 100,
};

export const GANTT_DEMO_FEATURES = [
  {
    id: '1',
    name: 'Casa da Praia',
    stays: [
      {
        startAt: new Date(),
        endAt: addDays(new Date(), 6),
        guest: 'Luísa Santos',
      },
      {
        startAt: addDays(new Date(), 10),
        endAt: addDays(new Date(), 15),
        guest: 'João Silva',
      },
    ],
  },
  {
    id: '2',
    name: 'Cabana da Serra',
    stays: [
      {
        startAt: addDays(new Date(), 7),
        endAt: addDays(new Date(), 12),
        guest: 'Ricardo Ferreira',
      },
    ],
  },
  {
    id: '3',
    name: 'Apartamento Central',
    stays: [],
  },
  {
    id: '4',
    name: 'Vila do Lago',
    stays: [
      {
        startAt: addDays(new Date(), 2),
        endAt: addDays(new Date(), 8),
        guest: 'Ana Oliveira',
      },
      {
        startAt: addDays(new Date(), 15),
        endAt: addDays(new Date(), 22),
        guest: 'Miguel Costa',
      },
    ],
  },
  {
    id: '5',
    name: 'Casa do Pinhal',
    stays: [
      {
        startAt: subDays(new Date(), 2),
        endAt: addDays(new Date(), 5),
        guest: 'Sofia Rodrigues',
      },
      {
        startAt: addDays(new Date(), 8),
        endAt: addDays(new Date(), 14),
        guest: 'David Martins',
      },
    ],
  },
  {
    id: '6',
    name: 'Quinta do Mar',
    stays: [
      {
        startAt: addDays(new Date(), 1),
        endAt: addDays(new Date(), 4),
        guest: 'Tiago Sousa',
      },
      {
        startAt: addDays(new Date(), 20),
        endAt: addDays(new Date(), 25),
        guest: 'António Carvalho',
      },
    ],
  },
  {
    id: '7',
    name: 'Loft Urbano',
    stays: [
      {
        startAt: addDays(new Date(), 5),
        endAt: addDays(new Date(), 10),
        guest: 'Mariana Almeida',
      },
    ],
  },
  {
    id: '8',
    name: 'Casa do Campo',
    stays: [
      {
        startAt: addDays(new Date(), 12),
        endAt: addDays(new Date(), 18),
        guest: 'Guilherme Dias',
      },
      {
        startAt: addDays(new Date(), 25),
        endAt: addDays(new Date(), 30),
        guest: 'Beatriz Pinto',
      },
    ],
  },
  {
    id: '9',
    name: 'Quinta do Vale',
    stays: [
      {
        startAt: addDays(new Date(), 3),
        endAt: addDays(new Date(), 7),
        guest: 'Alexandre Ribeiro',
      },
    ],
  },
  {
    id: '10',
    name: 'Casa da Montanha',
    stays: [
      {
        startAt: addDays(new Date(), 8),
        endAt: addDays(new Date(), 15),
        guest: 'Isabel Fonseca',
      },
      {
        startAt: addDays(new Date(), 18),
        endAt: addDays(new Date(), 23),
        guest: 'Lucas Teixeira',
      },
    ],
  },
  {
    id: '11',
    name: 'Chalé do Rio',
    stays: [
      {
        startAt: subDays(new Date(), 1),
        endAt: addDays(new Date(), 3),
        guest: 'Carolina Moreira',
      },
      {
        startAt: addDays(new Date(), 6),
        endAt: addDays(new Date(), 11),
        guest: 'Henrique Nunes',
      },
    ],
  },
  {
    id: '12',
    name: 'Vila dos Jardins',
    stays: [
      {
        startAt: addDays(new Date(), 4),
        endAt: addDays(new Date(), 9),
        guest: 'Madalena Correia',
      },
      {
        startAt: addDays(new Date(), 15),
        endAt: addDays(new Date(), 20),
        guest: 'Bernardo Vieira',
      },
    ],
  },
  {
    id: '13',
    name: 'Penthouse Panorâmica',
    stays: [
      {
        startAt: addDays(new Date(), 1),
        endAt: addDays(new Date(), 7),
        guest: 'Catarina Mendes',
      },
      {
        startAt: addDays(new Date(), 10),
        endAt: addDays(new Date(), 16),
        guest: 'Daniel Ramos',
      },
    ],
  },
];

export const GANTT_DEMO_MARKERS = [
  {
    id: '1',
    date: startOfMonth(subMonths(new Date(), 3)),
    label: 'High Season Start',
    className: 'bg-blue-100 text-blue-900',
  },
  {
    id: '2',
    date: subMonths(endOfMonth(new Date()), 2),
    label: 'Low Season Start',
    className: 'bg-green-100 text-green-900',
  },
];

export const GANTT_FEATURES_COLORS = [
  '#FF9F0A', // orange (warmer)
  '#FF375F', // pink (vibrant)
  '#BF5AF2', // purple (softer)
  '#0A84FF', // blue (bright)
  '#32D74B', // green (fresh)
  '#64D2FF', // cyan (light)
  '#5E5CE6', // indigo (muted)
  '#FF6B6B', // coral (warm)
  '#FFD60A', // yellow (bright)
  '#66D4CF', // mint (cool)
  '#FF8CC3', // rose (soft)
  '#40C8E0', // sky (bright)
];
