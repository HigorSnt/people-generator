import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

import router from "./routes";
import actions from "./actions";
import mutations from "./mutations";

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		names: {
			firstName: [],
			lastName: []
		},
		people: []
	},
	mutations,
	actions
});

Promise.all([
	store.dispatch("getNames", "firstName"),
	store.dispatch("getNames", "lastName")
]).then(() => {
	store.dispatch("generatePeople");
});

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount("#app");
