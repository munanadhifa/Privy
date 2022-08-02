import { defineStore, acceptHMRUpdate } from "pinia";

export const useToastStore = defineStore({
  id: "toast",
  state: () => ({
    isToastVisible: false,
  }),
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useToastStore, import.meta.hot));
}
