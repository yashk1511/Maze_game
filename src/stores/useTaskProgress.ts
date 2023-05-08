import { create } from "zustand";
import { combine } from "zustand/middleware";
import { IntialProgress } from "src/constants/GameLevel";

const progressKey = "task_progress@cerebrus";

export const useTaskProgress = create(
  combine({ progress: { ...IntialProgress } }, (set, get) => ({
    loadTaskProgress: async () => {
      try {
        const progress = JSON.parse(localStorage.getItem(progressKey) || "");

        set({ progress });
      } catch {}
    },

    updateTaskProgress: (y: Partial<typeof IntialProgress>) => {
      set(({ progress }) => {
        progress = { ...get().progress, ...y };
        localStorage.setItem(progressKey, JSON.stringify(progress));

        return { progress };
      });
    },

    resetTaskProgress: () => {
      set({ progress: { ...IntialProgress } });
      try {
        localStorage.setItem(progressKey, "");
      } catch {}
    },
  }))
);
