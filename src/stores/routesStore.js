import { defineStore } from "pinia";
import { useRoute } from "vue-router";

export const useRoutesStore = defineStore("routes", {
  state: () => ({
    rotas: [
      "/register/yourinfo",
      "/register/plans",
      "/register/addons",
      "/register/finish",
      "/thankyou",
    ],
  }),
  actions: {
    nextPage() {
      const currentRoute = useRoute();
      const indexRotaAtual = this.rotas.indexOf(currentRoute.path);
      const nextRoute = this.rotas[indexRotaAtual + 1];
      return nextRoute;
    },
    beforePage() {
      const currentRoute = useRoute();
      const indexRotaAtual = this.rotas.indexOf(currentRoute.path);
      const beforeRoute = this.rotas[indexRotaAtual - 1];
      return beforeRoute;
    },
  },
});
