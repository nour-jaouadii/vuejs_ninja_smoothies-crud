import Vue from "vue";
import VueRouter from "vue-router";
import index from "@/components/index.vue";
import AddSmoothie from "@/components/AddSmoothie"       
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: index
  },
  {
    path: "/add-smoothie",
    name: "AddSmoothie",
    component: AddSmoothie
  },
  
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
