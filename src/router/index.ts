import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "Home",
			component: () => import("../views/Home.vue"),
		},

		{
			path: "/profile",
			name: "Profile",
			component: () => import("../views/Profile.vue"),
		},
		{
			path: "/learning",
			name: "Learning",
			component: () => import("../views/Learning.vue"),
		},
	],
	scrollBehavior(to, _from, savedPosition) {
		if (savedPosition) {
			return { savedPosition, behavior: "smooth" };
		} else if (to.hash) {
			return {
				el: to.hash,
				behavior: "smooth",
			};
		} else {
			return {
				top: 0,
				behavior: "smooth",
			};
		}
	},
});

export default router;
