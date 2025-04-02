import { GANTT_FEATURES_COLORS } from './constants';

export const getColorFromId = (id: string): string => {
  const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const index = hash % GANTT_FEATURES_COLORS.length;
  return GANTT_FEATURES_COLORS[index];
};

export const getLightColor = (color: string): string => {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  const lighterR = Math.round(r + (255 - r) * 0.9);
  const lighterG = Math.round(g + (255 - g) * 0.9);
  const lighterB = Math.round(b + (255 - b) * 0.9);

  return `rgb(${lighterR} ${lighterG} ${lighterB})`;
};
