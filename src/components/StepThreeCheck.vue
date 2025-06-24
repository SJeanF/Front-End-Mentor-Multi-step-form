<script setup>
const props = defineProps([
  "id",
  "tittle",
  "description",
  "val",
  "modelValue",
  "yearly",
]);

const emit = defineEmits(["update:modelValue"]);

const inputOn = () => {
  const isChecked = event.target.checked;
  const newValue = [...props.modelValue];

  if (isChecked && !newValue.includes(props.id)) {
    newValue.push(props.id);
  } else if (!isChecked && newValue.includes(props.id)) {
    const index = newValue.indexOf(props.id);
    newValue.splice(index, 1);
  }

  emit("update:modelValue", newValue);
};
</script>

<template>
  <label class="addons-check" :for="`addons-${id}`">
    <div class="addons-check__check-container">
      <input
        class="addons-check__check-container__input"
        type="checkbox"
        :id="`addons-${id}`"
        :value="id"
        :checked="props.modelValue.includes(id)"
        @input="inputOn"
      />
    </div>
    <div class="addons-check__texts">
      <h4 class="addons-check__texts__tittle">{{ tittle }}</h4>
      <p class="addons-check__texts__description">
        {{ description }}
      </p>
    </div>
    <div class="addons-check__val">
      <span class="addons-check__val__num">{{
        `+$${val}/${props.yearly ? "yr" : "mo"}`
      }}</span>
    </div>
  </label>
</template>
