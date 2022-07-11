import { writable } from 'svelte/store';

// interface Window {
//   title: string;
// }

/**
 * A store that keeps track of open windows.
 */
export const openWindows = writable<any>([]);

/**
 * A store to keep track of the current window.
 */
export const windowZIndex = writable<number>(0);
