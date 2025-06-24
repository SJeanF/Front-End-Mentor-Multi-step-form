import { createRouter, createWebHistory } from "vue-router";
import StepOne from "./views/StepOne.vue";
import StepTwo from "./views/StepTwo.vue";
import StepThree from "./views/StepThree.vue";
import StepFour from "./views/StepFour.vue";
import StepFive from "./views/StepFive.vue";

const routes = [
  {
    path: "/",
    redirect: "/register/yourinfo",
  },
  {
    path: "/register/yourinfo",
    name: "YourInfo",
    component: StepOne,
  },
  {
    path: "/register/plans",
    name: "PlanSelect",
    component: StepTwo,
  },
  {
    path: "/register/addons",
    name: "Addons",
    component: StepThree,
  },
  {
    path: "/register/finish",
    name: "FinishUp",
    component: StepFour,
  },
  {
    path: "/thankyou",
    name: "ThankYou",
    component: StepFive,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
