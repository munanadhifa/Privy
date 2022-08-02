import { defineStore, acceptHMRUpdate } from "pinia";
import { postResend, ResendOTP } from "../api/resendOtp";

export const resendStore = defineStore({
  id: "resend",
  state: () => ({}),
  getters: {},
  actions: {
    async resendVerification(payload: ResendOTP) {
      try {
        console.log(payload);
        const { data }: any = await postResend(payload);
        return data;
      } catch (error: any) {
        throw Error(error);
      }
    },
  },
});
