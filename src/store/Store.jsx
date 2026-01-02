import { create } from "zustand";
import { immer } from "zustand/middleware/immer"; //middleware that lets you perform immutable updates
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "../constants/index";

//immer is used bc zustand originally deals with immutable data. Meaning, each new state must be a new object
//if i want to only use one attribute of an object, I will have to first use the spread operator to create a new array/object
// then destructure the prop
const useWindowStore = create(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex++;
      }),

    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),

    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.zIndex = state.nextZIndex++;
      }),

    minimizeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.isMinimized = true;
      }),

    restoreWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.isMinimized = false;
        win.zIndex = state.nextZIndex++;
      }),

    toggleMaximize: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.isMaximized = !win.isMaximized;
      }),
  }))
);

export default useWindowStore;
