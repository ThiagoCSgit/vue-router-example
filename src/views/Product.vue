<!-- Compositions API -->
<!-- <template>
  <h2>Product</h2>
  <Search />
  <button @click="voltar()">Voltar</button>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import Search from "../components/Search.vue";

const route = useRoute();
const router = useRouter();
function voltar() {
  router.push("/");
}

console.log(route.params);
console.log(router);
</script> -->

<!-- Options API -->

<template>
  <h2>Product</h2>
  <Search />
  {{ $route.params }}
  <button @click="voltar()">Voltar</button>
</template>

<script>
// import { useRoute, useRouter } from "vue-router";
import Search from "../components/Search.vue";

// const route = useRoute();
// const router = useRouter();
export default {
  components: {
    Search,
  },
  methods: {
    voltar: function () {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped lang="scss"></style>
