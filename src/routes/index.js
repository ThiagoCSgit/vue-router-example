import { createMemoryHistory, createRouter } from "vue-router";
import About from "../views/About.vue";
import Home from "../views/Home.vue";
// import Product from "../views/Product.vue";

const routes = [
  { path: "/:param?", component: Home },
  { path: "/about", component: About },
  {
    path: "/product/:id?/:name",
    name: "product",
    component: () => import("../views/Product.vue"),
  },
  // usando a arrow function é possível ter o lazy load, assim o componente só é carregago ao clicar no link.
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
