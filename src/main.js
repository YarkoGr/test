import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/style.scss";

import VueAwesomeSwiper from "vue-awesome-swiper";
import "./styles/swiper/style.css";

// import "../node_modules/swiper/swiper.scss";

Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");