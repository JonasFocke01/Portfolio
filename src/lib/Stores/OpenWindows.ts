import { derived, writable } from 'svelte/store';
import type { SvelteComponent } from 'svelte';

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

/**
 * A Function to add or remove Windows from the Store.
 */
export async function addOrRemoveWindow(
  component: typeof SvelteComponent,
  options: { title: string; id: string }
) {
  let windows: Array<any>;
  await openWindows.subscribe((e) => (windows = e));
  if (!windows.find((e) => e[0]?.name.indexOf(options.id) > 0)) {
    openWindows.update((e) => [
      ...e,
      [
        component,
        {
          title: options.title,
          id: options.id
        }
      ]
    ]);
  } else {
    openWindows.update((e) =>
      e.filter((e: any) => e[0]?.name.indexOf(options.id) === -1)
    );
  }
}
