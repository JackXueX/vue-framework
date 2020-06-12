import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
  {path: '/', redirect: '/passwordPay'},
  // 密码支付页面
  {
    path: '/passwordPay',
    name: 'PasswordPay',
    component: () => import('@/views/integralPay/passwordPay')
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export default router
