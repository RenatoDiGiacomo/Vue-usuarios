import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage";
import EditUser from "../views/EditUser";
import ViewUser from "../views/ViewUser";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/view/:user",
    name: "view",
    props: true,
    component: ViewUser,
  },
  {
    path: "/edit/:user",
    name: "edit",
    props: true,
    component: EditUser,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

