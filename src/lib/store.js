import { writable } from "svelte/store";
import config from "../config";

function createPageCount() {
  const { subscribe, set } = writable(1);
  return {
    subscribe,
    goto: (n) => {
      set(n);
    },
    reset: set(1),
  };
}

function createLogged() {
  const { subscribe, set } = writable(false);
  return {
    subscribe,
    log: () => {
      set(true);
      localStorage.setItem("log", new Date().toLocaleString());
    },
    reset: set(false),
  };
}

export const page = createPageCount();

export const logged = createLogged();
