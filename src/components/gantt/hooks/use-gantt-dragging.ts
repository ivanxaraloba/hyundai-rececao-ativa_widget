import { atom, useAtom } from 'jotai';

const draggingAtom = atom(false);

export const useGanttDragging = () => useAtom(draggingAtom);
