import { defineStore, acceptHMRUpdate } from "pinia";
import { postCareer, CareerInput } from "../api/profileCareer";

export const useCareerStore = defineStore({
  id: "career",
  state: () => ({}),
  getters: {},
  actions: {
    async profileCareer(payload: CareerInput) {
      try {
        console.log(payload);
        const { data }: any = await postCareer(payload);
        return data;
      } catch (error: any) {
        throw Error(error);
      }
    },
  },
});
