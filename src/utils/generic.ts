export const splitOptions = (text: string): string[] => {
  if (!text) return [];
  return text.split('; ').filter(Boolean);
};

