import { defineStore } from "pinia";
import ArcadeIcon from "../assets/images/icon-arcade.svg";
import AdvancedIcon from "../assets/images/icon-advanced.svg";
import ProIcon from "../assets/images/icon-pro.svg";

export const usePlanStore = defineStore("plans", {
  state: () => ({
    plans: [
      { id: 0, tittle: "Arcade", valMO: 9, valYr: 90, img: ArcadeIcon },
      { id: 1, tittle: "Advanced", valMO: 12, valYr: 120, img: AdvancedIcon },
      { id: 2, tittle: "Pro", valMO: 15, valYr: 150, img: ProIcon },
    ],
  }),
});
