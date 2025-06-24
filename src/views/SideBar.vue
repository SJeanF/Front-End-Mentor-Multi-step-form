<script setup>
import SideBarItem from "../components/SideBarItem.vue";
import { useRoutesStore } from "@/stores/routesStore";

const dadosRotas = useRoutesStore();

const itemsData = [
  {
    num: 1,
    type: "Your Info",
  },
  {
    num: 2,
    type: "Select plan",
  },
  {
    num: 3,
    type: "Add-ons",
  },
  {
    num: 4,
    type: "Summary",
  },
];
const linkedItemsData = itemsData.map((current, index) => {
  return { ...current, link: dadosRotas.rotas[index] };
});
</script>

<template>
  <div class="sidebar">
    <SideBarItem v-for="item in linkedItemsData" v-bind="item" />
  </div>
</template>
