import { atom, useAtom } from 'jotai';

const scrollXAtom = atom(0);

export const useGanttScrollX = () => useAtom(scrollXAtom);
