import { atom, useAtom } from 'jotai';

const scrollXAtom = atom(0);
const draggingAtom = atom(false);

export const useGanttScrollX = () => useAtom(scrollXAtom);
export const useGanttDragging = () => useAtom(draggingAtom);
