import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import routes from "./routes";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faCirclePlus,
  faCircleXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

library.add(faPhone, faCirclePlus, faCircleXmark, faBars);

const app = createApp(App);
app.use(routes);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
