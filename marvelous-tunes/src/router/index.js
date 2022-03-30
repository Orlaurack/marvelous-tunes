import { createWebHistory, createRouter } from "vue-router"

import MainVue from "@/components/MainVue.vue"
import LoginVue from "@/components/LoginVue.vue"
import LoggedVue from "@/components/LoggedVue.vue"

const routes = [
  {
    path: "/",
    name: "Main",
    component: MainVue,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginVue,
  },
  {
    path: "/callback",
    name: "Logged",
    component: LoggedVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes,
})

export default router;