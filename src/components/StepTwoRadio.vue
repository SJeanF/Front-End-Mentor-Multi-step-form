<script setup>
const props = defineProps([
  "id",
  "tittle",
  "img",
  "modelValue",
  "valMO",
  "valYr",
  "yearly",
]);
const emit = defineEmits(["update:modelValue"]);

function inputOn() {
  emit("update:modelValue", props.id);
}
</script>

<template>
  <label class="radio-container" :for="`plans-${id}`">
    <input
      @change="inputOn"
      type="radio"
      :value="id"
      :checked="modelValue === props.id"
      name="plans"
      :id="`plans-${id}`"
    />
    <div class="radio-container__image-container">
      <img :src="img" :alt="`${tittle} Icon`" @click="console.log(yearly)" />
    </div>
    <div class="radio-container__texts">
      <h4 class="radio-container__texts__plan">
        {{ tittle }}
      </h4>
      <p class="radio-container__texts__val">
        {{ yearly ? `$${valYr}/yr` : `$${valMO}/mo` }}
      </p>
      <p v-if="yearly" class="radio-container__texts__month-free">
        2 months free
      </p>
    </div>
  </label>
</template>
