<template>
  <form action="">
    <label for="">Pesquisa:</label>
    <br />
    <input type="text" v-model="input" />
    <br />
    <button type="button" @click="pesquisa()">Search</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const input = ref("");

function pesquisa() {
  alert(input.value);
}
</script>
