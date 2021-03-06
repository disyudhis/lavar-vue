import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import VueToast from "vue-toast-notification";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import "flowbite";
import "vue-toast-notification/dist/theme-default.css";
import "./assets/css/main.css";
import firebase from "./firebase";
import "tw-elements";

const app = createApp(App);

app.use(VueToast);
app.use(router);
app.config.globalProperties.$firebase = firebase;
app.mount("#app");
