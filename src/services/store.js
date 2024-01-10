import { defineStore } from 'pinia';

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    darkMode: false,
  }),
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
  },
});
