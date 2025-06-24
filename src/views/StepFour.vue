<script setup>
import GoBackButton from "@/components/GoBackButton.vue";
import NextStepButton from "@/components/NextStepButton.vue";
import StepFourTextVal from "@/components/StepFourTextVal.vue";
import StepFourMainPlan from "@/components/StepFourMainPlan.vue";
import StepsHeader from "@/components/StepsHeader.vue";
import { useRoutesStore } from "@/stores/routesStore";
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "vue-router";

const dadosUsuario = useUserStore();
const dadosRotas = useRoutesStore();

const router = useRouter();
const proximaPagina = dadosRotas.nextPage();
const paginaAnterior = dadosRotas.beforePage();

const planoObj = dadosUsuario.plan;
const addonsArray = [...dadosUsuario.addons];
const totalVal =
  addonsArray.reduce((acc, item) => {
    return acc + item.val;
  }, 0) + planoObj.val;

const confirmar = () => {
  router.push(proximaPagina);
};

const voltarPagina = () => {
  router.push(paginaAnterior);
};
</script>

<template>
  <div class="step-four steps">
    <StepsHeader
      tittle="Finishing up"
      subtittle="Double-check everything looks OK before confirming."
    />
    <div class="step-four__main steps__main">
      <div class="step-four__main__prices">
        <StepFourMainPlan v-bind="planoObj" />
        <StepFourTextVal
          v-for="addon in addonsArray"
          v-bind="addon"
          :yearly="planoObj.yearly"
        />
      </div>
      <div class="step-four__main__total-container">
        <StepFourTextVal
          :tittle="`Total (per ${planoObj.yearly ? 'year' : 'month'})`"
          :total="true"
          :yearly="planoObj.yearly"
          :val="totalVal"
        />
      </div>
    </div>
    <div class="step-two__footer steps__footer">
      <GoBackButton @click="voltarPagina" />
      <NextStepButton @click="confirmar" />
    </div>
  </div>
</template>

<!-- 
  Finishing up
  Double-check everything looks OK before confirming. 
  -->

<!-- Dynamically add subscription and add-on selections here -->
<!-- 
  Total (per month/year)

  Go Back
  Confirm

  -->
