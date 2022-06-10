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
// import VueGeolocation from "vue-browser-geolocation";

const app = createApp(App);
// app.config.productionTip = false;
// app.use(VueGeolocation);

// import * as VueGoogleMaps from "vue2-google-maps";
// app.use(VueGoogleMaps, {
//   load: {
//     key: "AIzaSyAuVK0GUA8DHgbZzAZ3jFXENor_GGrID9o",
//   },
//   installComponents: false,
// });
app.use(VueToast);
app.use(router);
app.config.globalProperties.$firebase = firebase;
app.mount("#app");
