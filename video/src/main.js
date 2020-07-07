import Vue from "vue";
import App from "./App.vue";
import elementUi from "element-ui";
import Config from "@/config/app";
import "@/assets/css/style.scss";
import router from "./router";
import "@/utils/v-auth.js";
import "./components";

Vue.config.productionTip = false;
Vue.prototype.GlobalCfg = Config;
Vue.use(elementUi);

router.beforeEach((to, from, next) => {
  console.log(from);
  window.document.title = to.meta.title
    ? to.meta.title + "-" + Config.siteName
    : Config.siteName;
  next();
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
