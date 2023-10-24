// Inside src/plugins/store.ts
import { App } from "vue";
import { User } from "firebase/auth";
import { createPinia, defineStore } from "pinia";

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

export { useUserStore, setupStore };
