import { createApp } from "vue";
import App from "./App.vue";
import router from "./plugins/router.ts";
import { setupStore, useUserStore } from "./plugins/store.ts";
import { auth } from "./plugins/firebase.ts";
import "./style.css";

const app = createApp(App);
app.use(router);
setupStore(app);

const userStore = useUserStore();
auth.onAuthStateChanged((user) => {
  userStore.setUser(user);
});

app.mount("#app");
