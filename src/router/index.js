import { createRouter, createWebHistory } from "vue-router";
import { AuthLayout, MainLayout } from "../layouts/index";
import {
  AboutView,
  EventDetailView,
  EventListView,
  HomeView,
  LoginView,
  PaymentView,
  RegisterView,
} from "../pages";

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
      {
        path: "event",
        name: "event",
        component: EventListView,
      },
      {
        path: "event/:id",
        name: "event-detail",
        component: EventDetailView,
      },
      {
        path: "payment",
        name: "payment",
        component: PaymentView,
      },
    ],
  },
  {
    path: "/auth",
    component: AuthLayout,
    children: [
      {
        path: "",
        name: "auth",
        redirect: "/auth/login",
      },
      {
        path: "login",
        name: "login",
        component: LoginView,
      },
      { path: "register", name: "register", component: RegisterView },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
