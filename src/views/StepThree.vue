<script setup lang="ts">
import GoBackButton from "@/components/GoBackButton.vue";
import NextStepButton from "@/components/NextStepButton.vue";
import StepsHeader from "@/components/StepsHeader.vue";
import StepThreeCheck from "@/components/StepThreeCheck.vue";
import { useAddonsStore } from "@/stores/addonsStore";
import { useRoutesStore } from "@/stores/routesStore";
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "vue-router";
import { ref } from "vue";
const dadosAddons = useAddonsStore();
const dadosUsuario = useUserStore();
const dadosRotas = useRoutesStore();

const router = useRouter();
const proximaPagina = dadosRotas.nextPage();
const paginaAnterior = dadosRotas.beforePage();

const selectedsID = ref([]);
const salvarAddons = () => {
  const newAddonList = dadosAddons.checks
    .map((item) => {
      const { valMo, valYr, ...resto } = item;
      const valorPeriodico = {
        ...resto,
        val: dadosUsuario.plan.yearly ? valYr : valMo,
      };
      return valorPeriodico;
    })
    .filter((current) => selectedsID.value.includes(current.id));
  dadosUsuario.setAddons(newAddonList);
  router.push(proximaPagina);
};

const voltarPagina = () => {
  router.push(paginaAnterior);
};
</script>

<template>
  <div class="step-three steps">
    <StepsHeader
      tittle="Pick add-ons"
      subtittle="Add-ons help enhance your gaming experience."
    />
    <div class="step-three__main steps__main">
      <StepThreeCheck
        v-for="addon in dadosAddons.checks"
        v-bind="addon"
        :id="addon.id"
        :val="dadosUsuario.plan.yearly ? addon.valYr : addon.valMo"
        :yearly="dadosUsuario.plan.yearly"
        v-model="selectedsID"
      />
    </div>
    <div class="step-three__footer steps__footer">
      <GoBackButton @click="voltarPagina" />
      <NextStepButton @click="salvarAddons" />
    </div>
  </div>
</template>

<!-- 
  Pick add-ons
  Add-ons help enhance your gaming experience.

  Online service
  Access to multiplayer games
  +$1/mo

  Larger storage
  Extra 1TB of cloud save
  +$2/mo

  Customizable Profile
  Custom theme on your profile
  +$2/mo

  Go Back
  Next Step
-->
