// Inside src/plugins/router.ts
import { createRouter, createWebHistory } from "vue-router";
import { auth } from "@/plugins/firebase.ts";
import constants from "@/constants.json";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/auth/Login.vue"),
    meta: { requiresUnauth: true },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/auth/Register.vue"),
    meta: { requiresUnauth: true },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("@/views/auth/Profile.vue"),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(constants.BASE_PATH),
  routes,
});

router.beforeEach((to, _from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const requiresUnauth = to.matched.some((record) => record.meta.requiresUnauth);

  return new Promise<void>((resolve) => {
    auth.onAuthStateChanged((user) => {
      if (requiresAuth && !user) {
        next("/login");
      } else if (requiresUnauth && user) {
        next("/");
      } else {
        next();
      }
      resolve();
    });
  });
});

export default router;
