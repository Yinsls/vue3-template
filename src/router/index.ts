import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'MyHome',
		component: () => import('@/view/my-home.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
