<template>
  <h2>Home</h2>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
if (route) {
  console.log(route.params);
}
</script>

<style scoped lang="scss"></style>
