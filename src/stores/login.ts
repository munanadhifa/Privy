import { defineStore, acceptHMRUpdate } from "pinia";
import { postLogin, LoginInput } from "../api/login";

export const useLoginStore = defineStore({
  id: "login",
  state: () => ({}),
  getters: {},
  actions: {
    async loginAccount(payload: LoginInput) {
      try {
        console.log(payload);
        const { data }: any = await postLogin(payload);
        return data;
      } catch (error: any) {
        throw Error(error);
      }
    },
  },
});
