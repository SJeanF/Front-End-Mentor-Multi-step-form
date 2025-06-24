<script setup>
const props = defineProps(["modelValue"]);

const emit = defineEmits(["update:modelValue"]);
const inputOn = () => {
  emit("update:modelValue", event.target.checked);
};
</script>

<template>
  <label for="yearly" class="switch">
    <input
      type="checkbox"
      id="yearly"
      :checked="modelValue"
      @change="inputOn"
    />
    <span class="slider"></span>
  </label>
</template>
