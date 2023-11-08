import { App } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  install: (app: App) => {
    // Add the FontAwesome icons to the library
    library.add(faBars, faLocationArrow, faGoogle, faGithub);

    // Register the FontAwesomeIcon component globally
    app.component("font-awesome-icon", FontAwesomeIcon);
  },
};
