import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/new",
    name: "new",
    //    route level code-splitting
    //    this generates a separate chunk (about.[hash].js) for this route
    //    which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "new" */ "../views/NewUser.vue"),
  },
  {
    path: "/view",
    name: "view",
    component: () => import(/* webpackChunkName: "view" */ "../views/ViewUser.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

