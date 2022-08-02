import { defineStore, acceptHMRUpdate } from "pinia";
import { postRegister, RegisterInput } from "../api/register";

export const useRegisterStore = defineStore({
  id: "register",
  state: () => ({}),
  getters: {},
  actions: {
    async registerAccount(payload: RegisterInput) {
      try {
        console.log(payload);
        const { data }: any = await postRegister(payload);
        return data;
      } catch (error: any) {
        throw Error(error);
      }
    },
  },
});
