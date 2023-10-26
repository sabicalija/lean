import { createApp } from "vue";
import App from "./App.vue";
import router from "./plugins/router.ts";
import store from "./plugins/store.ts";
import firebase from "./plugins/firebase.ts";
import icons from "./plugins/icons.ts";
import "./style/index.styl";

const app = createApp(App);

app.use(router);
app.use(firebase);
app.use(store);
app.use(icons);

app.mount("#app");
