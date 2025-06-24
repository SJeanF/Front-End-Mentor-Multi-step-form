import { defineStore } from "pinia";

export const useAddonsStore = defineStore("addons", {
  state: () => ({
    checks: [
      {
        id: 0,
        tittle: "Online service",
        description: "Access to multiplayer games",
        valMo: 1,
        valYr: 10,
      },
      {
        id: 1,
        tittle: "Larger storage",
        description: "Extra 1TB of cloud save",
        valMo: 2,
        valYr: 20,
      },
      {
        id: 2,
        tittle: "Customizable Profile",
        description: "Custom theme on your profile",
        valMo: 2,
        valYr: 20,
      },
    ],
  }),
});
