<script setup>
const props = defineProps(["tittle", "val", "yearly"]);
</script>

<template>
  <div class="main-plan">
    <div class="main-plan__texts">
      <h3 class="main-plan__texts__plan">
        {{ `${tittle} ${props.yearly ? "Yearly" : "Montly"}` }}
      </h3>
      <a class="main-plan__texts__change" href="/register/plans">Change</a>
    </div>
    <p class="main-plan__val">
      {{ `$${val}/${props.yearly ? "yr" : "mo"}` }}
    </p>
  </div>
</template>
