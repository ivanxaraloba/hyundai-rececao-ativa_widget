export const MODERN_COLORS = [
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

export const getColorFromId = (id: string): string => {
  const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const index = hash % MODERN_COLORS.length;
  return MODERN_COLORS[index];
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
