import { create } from "zustand";
import { combine } from "zustand/middleware";

const resultKey = "result@cerebrus";

export const useResultStore = create(
  combine({ result: {} }, (set, getState) => ({
    loadResult: async () => {
      try {
        const data = JSON.parse(localStorage.getItem(resultKey) || "");

        set(data);
      } catch {}
    },

    updateResult: (value: any) => {
      set(({ result }) => {
        return { result: { ...result, ...value } };
      });

      try {
        localStorage.setItem(resultKey, JSON.stringify(getState()));
      } catch {}
    },

    resetResult: () => {
      set({ result: "" });

      try {
        localStorage.setItem(resultKey, "{}");
      } catch {}
    },
  }))
);
