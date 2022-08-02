import { defineStore, acceptHMRUpdate } from "pinia";
import { postOtp, MatchInput } from "../api/matchOtp";

export const matchStore = defineStore({
  id: "match",
  state: () => ({}),
  getters: {},
  actions: {
    async matchVerification(payload: MatchInput) {
      try {
        console.log(payload);
        const { data }: any = await postOtp(payload);
        return data;
      } catch (error: any) {
        throw Error(error);
      }
    },
  },
});
