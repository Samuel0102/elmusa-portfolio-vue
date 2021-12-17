import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router";
import VueScrollTool from "vue-scrollto";

const app = createApp(App).use(router).use(VueScrollTool, {
    offset: -80
});

app.mount("#app");
