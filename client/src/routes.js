import PeopleList from "./components/PeopleList";
import VueRouter from "vue-router";

const router = new VueRouter({
	routes: [
		{
			path: "/people",
			component: PeopleList
		},
		{
			path: "/",
			redirect: "/people"
		}
	]
});

export default router;