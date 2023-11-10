// Inside src/plugins/router.ts
import { inject } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { Auth } from "firebase/auth";
import constants from "@/constants.json";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/log",
    name: "Log",
    component: () => import("@/views/Log.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/analysis",
    name: "Analysis",
    component: () => import("@/views/Analysis.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("@/views/auth/Profile.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/auth/Login.vue"),
    meta: { requiresUnauth: true, hideNavBar: true },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/auth/Register.vue"),
    meta: { requiresUnauth: true },
  },
];

const router = createRouter({
  history: createWebHistory(constants.BASE_PATH),
  routes,
});

router.beforeEach((to, _from, next) => {
  const auth = inject<Auth>("auth");
  if (!auth) {
    throw new Error("Firebase Auth is not provided");
  }

  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const requiresUnauth = to.matched.some((record) => record.meta.requiresUnauth);

  // Check if the auth state has been initialized
  if (auth.currentUser !== null) {
    // Auth state is already known, proceed with the routing logic
    if (requiresAuth && !auth.currentUser) {
      return next("/login");
    } else if (requiresUnauth && auth.currentUser) {
      return next("/");
    } else {
      return next();
    }
  } else {
    // Auth state is not initialized yet, set up a listener
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // Unsubscribe immediately to avoid the listener being called again
      unsubscribe();

      if (requiresAuth && !user) {
        next("/login");
      } else if (requiresUnauth && user) {
        next("/");
      } else {
        next();
      }
    });
  }
});

export default router;
