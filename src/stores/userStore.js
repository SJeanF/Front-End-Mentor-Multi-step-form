import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    name: undefined,
    email: undefined,
    celphone: undefined,
    plan: undefined,
    addons: undefined,
  }),
  actions: {
    setName(newName) {
      this.name = newName;
    },
    setEMail(newEMail) {
      this.email = newEMail;
    },
    setCelphone(newPhone) {
      this.celphone = newPhone;
    },
    setPlan(newPlan) {
      this.plan = newPlan;
    },
    setAddons(newAddon) {
      this.addons = newAddon;
    },
  },
});
