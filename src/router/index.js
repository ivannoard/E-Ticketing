import { createRouter, createWebHistory } from "vue-router";
import { MainLayout } from "../layouts/index";
import { AboutView, HomeView } from "../pages";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
      },
      { path: "about", name: "about", component: AboutView },
    ],
  },
  ,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
