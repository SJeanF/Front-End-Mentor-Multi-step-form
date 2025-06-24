<script setup>
import { useRoute } from "vue-router";
const props = defineProps(["num", "type", "link"]);
const rota = useRoute();
</script>

<template>
  <div
    :class="{ 'sidebar__item--is-active': rota.path === link }"
    class="sidebar__item"
  >
    <span class="num-icon">{{ props.num }}</span>
    <div class="sidebar__item__texts">
      <p class="step-text">Step {{ props.num }}</p>
      <h5 class="step-type">{{ props.type }}</h5>
    </div>
  </div>
</template>
