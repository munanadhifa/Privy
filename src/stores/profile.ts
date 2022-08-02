import { defineStore, acceptHMRUpdate } from "pinia";
import { postProfile, ProfileInput } from "../api/profile";

export const useProfileStore = defineStore({
  id: "profile",
  state: () => ({}),
  getters: {},
  actions: {
    async profileAccount(payload: ProfileInput) {
      try {
        console.log(payload);
        const { data }: any = await postProfile(payload);
        return data;
      } catch (error: any) {
        throw Error(error);
      }
    },
  },
});
