/* eslint-disable */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Vuetify from "vuetify";
import css from "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader
import Vuex from "vuex";
import VeeValidate from "vee-validate";
import { store } from "./store/store";
import VueFormWizard from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
Vue.use(VueFormWizard);
Vue.use(VeeValidate);
Vue.use(Vuex);
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store: store,

  components: { App },
  template: "<App/>"
});
