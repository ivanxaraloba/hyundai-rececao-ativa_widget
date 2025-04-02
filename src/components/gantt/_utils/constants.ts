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
      {
        startAt: addDays(new Date(), 28),
        endAt: addDays(new Date(), 33),
        guest: 'Pedro Costa',
      },
      {
        startAt: addDays(new Date(), 40),
        endAt: addDays(new Date(), 45),
        guest: 'Margarida Torres',
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
      {
        startAt: addDays(new Date(), 28),
        endAt: addDays(new Date(), 33),
        guest: 'Maria Lima',
      },
      {
        startAt: addDays(new Date(), 40),
        endAt: addDays(new Date(), 45),
        guest: 'Gabriel Santos',
      },
    ],
  },
  {
    id: '3',
    name: 'Apartamento Central',
    stays: [
      {
        startAt: addDays(new Date(), 28),
        endAt: addDays(new Date(), 33),
        guest: 'Carlos Santos',
      },
      {
        startAt: addDays(new Date(), 40),
        endAt: addDays(new Date(), 45),
        guest: 'Diana Ferreira',
      },
    ],
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
      {
        startAt: addDays(new Date(), 28),
        endAt: addDays(new Date(), 33),
        guest: 'Joana Pereira',
      },
      {
        startAt: addDays(new Date(), 40),
        endAt: addDays(new Date(), 45),
        guest: 'Rafael Lima',
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
      {
        startAt: addDays(new Date(), 28),
        endAt: addDays(new Date(), 33),
        guest: 'Rui Carvalho',
      },
      {
        startAt: addDays(new Date(), 40),
        endAt: addDays(new Date(), 45),
        guest: 'Leonor Costa',
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
      {
        startAt: addDays(new Date(), 28),
        endAt: addDays(new Date(), 33),
        guest: 'Inês Monteiro',
      },
      {
        startAt: addDays(new Date(), 40),
        endAt: addDays(new Date(), 45),
        guest: 'Matilde Ribeiro',
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
      {
        startAt: addDays(new Date(), 28),
        endAt: addDays(new Date(), 33),
        guest: 'Francisco Gomes',
      },
      {
        startAt: addDays(new Date(), 40),
        endAt: addDays(new Date(), 45),
        guest: 'Tomás Carvalho',
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
      {
        startAt: addDays(new Date(), 28),
        endAt: addDays(new Date(), 33),
        guest: 'Ana Martins',
      },
      {
        startAt: addDays(new Date(), 40),
        endAt: addDays(new Date(), 45),
        guest: 'João Oliveira',
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
      {
        startAt: addDays(new Date(), 28),
        endAt: addDays(new Date(), 33),
        guest: 'João Cardoso',
      },
      {
        startAt: addDays(new Date(), 40),
        endAt: addDays(new Date(), 45),
        guest: 'Sofia Almeida',
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
      {
        startAt: addDays(new Date(), 28),
        endAt: addDays(new Date(), 33),
        guest: 'Marta Figueiredo',
      },
      {
        startAt: addDays(new Date(), 40),
        endAt: addDays(new Date(), 45),
        guest: 'Diogo Costa',
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
      {
        startAt: addDays(new Date(), 28),
        endAt: addDays(new Date(), 33),
        guest: 'Sara Almeida',
      },
      {
        startAt: addDays(new Date(), 40),
        endAt: addDays(new Date(), 45),
        guest: 'Miguel Santos',
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
      {
        startAt: addDays(new Date(), 28),
        endAt: addDays(new Date(), 33),
        guest: 'Cláudia Silva',
      },
      {
        startAt: addDays(new Date(), 40),
        endAt: addDays(new Date(), 45),
        guest: 'Leonardo Costa',
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
      {
        startAt: addDays(new Date(), 28),
        endAt: addDays(new Date(), 33),
        guest: 'Fábio Costa',
      },
      {
        startAt: addDays(new Date(), 40),
        endAt: addDays(new Date(), 45),
        guest: 'Mariana Silva',
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
