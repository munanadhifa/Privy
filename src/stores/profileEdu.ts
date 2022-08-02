import { defineStore, acceptHMRUpdate } from "pinia";
import { postEducation, EducationInput } from "../api/profileEdu";

export const useEduStore = defineStore({
  id: "education",
  state: () => ({}),
  getters: {},
  actions: {
    async profileEdu(payload: EducationInput) {
      try {
        console.log(payload);
        const { data }: any = await postEducation(payload);
        return data;
      } catch (error: any) {
        throw Error(error);
      }
    },
  },
});
