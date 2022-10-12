import { writable } from "svelte/store";
import config from "../config";

function createPageCount() {
  const { subscribe, set, update } = writable(1);
  return {
    subscribe,
    goto: (n) => {
      set(n);
    },
    reset: set(1),
  };
}

export const page = createPageCount();
