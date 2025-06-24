<script setup>
import StepsHeader from "@/components/StepsHeader.vue";
import StepOneInput from "@/components/StepOneInput.vue";
import NextStepButton from "@/components/NextStepButton.vue";
import { useUserStore } from "@/stores/userStore";
import { useRoutesStore } from "@/stores/routesStore";
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";
const nameInput = ref(undefined);
const emailInput = ref(undefined);
const phoneNumberInput = ref(undefined);
const dadosusuario = useUserStore();

const proximaPagina = useRoutesStore().nextPage();
const router = useRouter();

const state = reactive({
  nameRequired: false,
  emailRequired: false,
  phoneRequired: false,
});

const salvaUsuario = () => {
  const valorName = nameInput.value;
  const valorEmail = emailInput.value;
  const valorPhone = phoneNumberInput.value;
  if (valorName) {
    dadosusuario.setName(valorName);
    state.nameRequired = false;
  } else {
    state.nameRequired = true;
  }

  if (valorEmail) {
    dadosusuario.setEMail(valorEmail);
    state.emailRequired = false;
  } else {
    state.emailRequired = true;
  }

  if (valorPhone) {
    dadosusuario.setCelphone(valorPhone);
    state.phoneRequired = false;
  } else {
    state.phoneRequired = true;
  }

  if (valorName && valorEmail && valorPhone) router.push(proximaPagina);
};
</script>
<template>
  <div class="step-one steps">
    <StepsHeader
      tittle="Personal info"
      subtittle="Please provide your name, email address, and phone number."
    />
    <div class="step-one__main steps__main">
      <StepOneInput
        label="Name"
        placeholder="e.g. Stephen King"
        type="text"
        data-id="nome"
        v-model="nameInput"
        :required="state.nameRequired"
      />
      <StepOneInput
        label="Email Address"
        placeholder="e.g. stephenking@lorem.com"
        type="email"
        data-id="email"
        v-model="emailInput"
        :required="state.emailRequired"
      />
      <StepOneInput
        label="Phone Number"
        placeholder="e.g. +1 234 567 890"
        type="tel"
        data-id="telefone"
        v-model="phoneNumberInput"
        :required="state.phoneRequired"
      />
    </div>
    <div class="step-one__footer steps__footer">
      <NextStepButton @click="salvaUsuario" />
    </div>
  </div>
</template>
