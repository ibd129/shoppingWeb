import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/order',
    name: 'order',
    meta: {
      requireAuth: true// 添加该字段，表示进入这个路由是需要登录的
    },
    component: () => import('@/views/Order.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/RegisterView.vue')
  },
  {
    path: '/forgotpassword',
    name: 'forgotpassword',
    component: () => import('@/views/ForGotPassword.vue')
  },
  {
    path: '/help',
    name: 'help',
    component: () => import('@/views/Help.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (localStorage.getItem('token')) { // 从本地存储localStorage获取当前的token是否存在
      next()
    } else {
      next('/login') // 如果token不存在，就跳到首页
    }
  } else {
    if (localStorage.getItem('token') && to.path === '/login') { // token存在时候，进去登录页面就自动跳转到首页
      next('/')
    } else {
      next()
    }
  }
})

export default router
