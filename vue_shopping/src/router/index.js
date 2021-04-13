import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/index.vue'
import Type from '../views/type/type.vue'
import Shopping from '../views/shopping/shopping.vue'
import Home from '../views/home/home.vue'

//解决Error: Avoided redundant navigation to current location:
const originalPush = VueRouter.prototype.replace
   VueRouter.prototype.replace = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}


Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect:'/index'
	},
	{
		path: '/index',
		name: 'index',
		component: Index
	},
	{
		path: '/type',
		name: 'type',
		component: Type
	},
	{
		path: '/shopping',
		name: 'shopping',
		component: Shopping
	},
	{
		path: '/home',
		name: 'home',
		component: Home
	}
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
