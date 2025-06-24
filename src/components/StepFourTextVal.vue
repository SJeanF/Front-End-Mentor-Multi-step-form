<script setup>
const props = defineProps({
  tittle: String,
  val: Number,
  total: {
    type: Boolean,
    default: false,
  },
  yearly: Boolean,
});
</script>

<template>
  <div class="addon">
    <p class="addon__name">
      {{ props.tittle }}
    </p>
    <p class="addon__val" :class="{ 'addon__val--is-total': props.total }">
      {{ `$${val}/${yearly ? "yr" : "mo"}` }}
    </p>
  </div>
</template>
