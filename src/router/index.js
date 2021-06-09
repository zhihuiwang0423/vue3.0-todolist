import { createRouter, createWebHistory , createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  // 路由的配置数组
  // 必填参数 path:路由路径 必须以/开头  component:对应的路由组件
  //选填参数 name:路由名字
  {
    path: '/',
    name: 'Home',
    // 这种书写形式，是直接引入
    component: Home
  },
  {
    path: '/about',
    name: 'About', 
  //  component箭头函数的形式，是按需要引入。
  // 如果没有访问About 就不会加载这个组件，节约性能
    component: () => import('../views/About.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
  //  component箭头函数的形式，是按需要引入。
  // 如果没有访问About 就不会加载这个组件，节约性能
    component: () => import('../views/detail.vue')
  }
]

const router = createRouter({
  // 创建路由对象
  // createWebHashHistory hash模式  在端口后边跟一个#
  // createWebHistory history模式 常用这个模式
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
