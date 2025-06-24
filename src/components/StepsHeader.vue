<script setup>
const props = defineProps(["tittle", "subtittle"]);
</script>

<template>
  <div class="steps__header">
    <h2 class="steps__header__tittle">{{ props.tittle }}</h2>
    <p class="steps__header__subtittle">{{ props.subtittle }}</p>
  </div>
</template>
