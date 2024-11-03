import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  IoChevronForwardOutline,
  CoClock,
  IoLocationOutline,
  MdDaterange,
  IoTicketSharp,
} from "oh-vue-icons/icons";

addIcons(
  IoChevronForwardOutline,
  CoClock,
  IoLocationOutline,
  MdDaterange,
  IoTicketSharp
);

const app = createApp(App);

app.use(router);
app.component("v-icon", OhVueIcon);
app.mount("#app");
