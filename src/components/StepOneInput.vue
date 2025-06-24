<script setup>
const props = defineProps([
  "label",
  "placeholder",
  "type",
  "dataId",
  "modelValue",
  "required",
]);

const emit = defineEmits(["update:modelValue"]);

function inputOn(event) {
  emit("update:modelValue", event.target.value);
}
</script>

<template>
  <div class="step-one__main__text-area">
    <div class="step-one__main__text-area__texts">
      <label class="step-one__main__text-area__texts__label" for="nome"
        >{{ props.label }}
      </label>
      <p
        :class="{
          'step-one__main__text-area__texts__alert--field-required':
            props.required,
        }"
        class="step-one__main__text-area__texts__alert"
      >
        This field is required
      </p>
    </div>
    <input
      :class="{
        'step-one__main__text-area__input--field-required': props.required,
      }"
      class="step-one__main__text-area__input"
      id="nome"
      :type="props.type"
      :placeholder="props.placeholder"
      :value="modelValue"
      @input="inputOn"
    />
  </div>
</template>
