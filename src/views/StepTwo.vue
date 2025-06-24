<script setup>
import StepsHeader from "@/components/StepsHeader.vue";
import StepTwoRadio from "@/components/StepTwoRadio.vue";
import StepTwoSwitch from "@/components/StepTwoSwitch.vue";
import NextStepButton from "@/components/NextStepButton.vue";
import GoBackButton from "@/components/GoBackButton.vue";
import { useRoutesStore } from "@/stores/routesStore";
import { useUserStore } from "@/stores/userStore";
import { usePlanStore } from "@/stores/planStore";
import { useRouter } from "vue-router";
import { ref } from "vue";
const dadosPlans = usePlanStore();
const dadosUsuario = useUserStore();
const dadosRotas = useRoutesStore();

const router = useRouter();
const proximaPagina = dadosRotas.nextPage();
const paginaAnterior = dadosRotas.beforePage();

const selected = ref(0);
const yearlyTemp = ref(false);

const salvarPlano = () => {
  const dadosPlanoEscolhido = dadosPlans.plans[selected.value];
  const yrly = yearlyTemp.value;

  const planoEscolhido = {
    tittle: dadosPlanoEscolhido.tittle,
    val: yrly ? dadosPlanoEscolhido.valYr : dadosPlanoEscolhido.valMO,
    yearly: yrly,
  };

  dadosUsuario.setPlan(planoEscolhido);
  router.push(proximaPagina);
};

const voltarPagina = () => {
  router.push(paginaAnterior);
};
</script>

<template>
  <div class="step-two steps">
    <StepsHeader
      tittle="Select your plan"
      subtittle="You have the option of monthly or yearly billing."
    />
    <div class="step-two__main steps__main">
      <div class="radio-list-container">
        <StepTwoRadio
          v-for="opcao in dadosPlans.plans"
          v-bind="opcao"
          v-model="selected"
          :yearly="yearlyTemp"
        />
      </div>
      <div class="switch-container">
        <p
          @click="salvarPlano"
          :class="{ 'monthly--is-active': !yearlyTemp }"
          class="monthly"
        >
          Monthly
        </p>
        <StepTwoSwitch v-model="yearlyTemp" />
        <p :class="{ 'yearly--is-active': yearlyTemp }" class="yearly">
          Yearly
        </p>
      </div>
    </div>
    <div class="step-two__footer steps__footer">
      <GoBackButton @click="voltarPagina" />
      <NextStepButton @click="salvarPlano" />
    </div>
  </div>
</template>

<!-- 
  Select your plan
  You have the option of monthly or yearly billing.

  Arcade
  $9/mo

  Advanced
  $12/mo

  Pro
  $15/mo

  Monthly
  Yearly

  Go Back
  Next Step
-->
