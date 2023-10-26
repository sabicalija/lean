// Inside src/plugins/store.ts
import { App, inject, getCurrentInstance } from "vue";
import { User, onAuthStateChanged } from "firebase/auth";
import { createPinia, defineStore } from "pinia";
import { Auth } from "firebase/auth";

const setupStore = (app: App): void => {
  const pinia = createPinia();
  app.use(pinia);
};

const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: null as User | null,
  }),
  actions: {
    setUser(user: User | null) {
      this.user = user;
    },
  },
});

const setupAuthStateListener = () => {
  const auth = inject<Auth>("auth");
  if (!auth) {
    throw new Error("Firebase Auth is not provided");
  }
  onAuthStateChanged(auth, (user) => {
    useUserStore().setUser(user);
  });
};

export default {
  useUserStore,
  install: (app: App): void => {
    setupStore(app);
    if (getCurrentInstance()) {
      // If within a component context
      setupAuthStateListener();
    }
  },
};
