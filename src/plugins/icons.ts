import { App } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  install: (app: App) => {
    // Add the FontAwesome icons to the library
    library.add(faBars);

    // Register the FontAwesomeIcon component globally
    app.component("font-awesome-icon", FontAwesomeIcon);
  },
};
