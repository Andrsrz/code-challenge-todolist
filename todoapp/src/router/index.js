import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ToDoList from '../views/ToDoList.vue'
import PageNotFound from '../views/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: { title: 'Home' }
	},
	{
		path: '/todolist/:id',
		name: 'ToDoList',
		component: ToDoList,
		meta: { title: 'ToDo List' }
	},
	{
		path: '*',
		name: 'PageNotFound',
		component: PageNotFound,
		meta: { title: 'Page Not Found' }
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
