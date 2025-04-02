'use client';

import { atom, useAtom } from 'jotai';

export type Range = 'daily' | 'monthly' | 'quarterly';

const draggingAtom = atom(false);
const scrollXAtom = atom(0);

export const useGanttDragging = () => useAtom(draggingAtom);
export const useGanttScrollX = () => useAtom(scrollXAtom);
