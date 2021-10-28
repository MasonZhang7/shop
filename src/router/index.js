import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Index from '../pages/index'
import Product from '../pages/product'
import Detail from '../pages/detail'
import Cart from '../pages/cart'
import Order from '../pages/order'
import OrderConfirm from '../pages/orderConfirm'
import OrderList from '../pages/orderList'
import OrderPay from '../pages/orderPay'
import AliPay from '../pages/aliPay'
// import Home from '../views/Home.vue'

Vue.use(Router)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = new VueRouter({
//   routes
// })

export default new Router({
  routes:[
    {
      path: '/',
      name: 'home',
      component:Home,
      redirect:'/index',
      children:[
        {
        path: '/index',
        name: 'index',
        component:Index,
        },
        {
          path: '/product/:id',
          name: 'product',
          component:Product,
        },
        {
          path: '/detail/:id',
          name: 'detail',
          component:Detail,
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component:Cart
    },
    {
      path: '/order',
      name: 'order',
      component:Order,
      children:[
        {
          path: 'list',
          name: 'order-list',
          component:OrderList
        },
        {
          path: 'confirm',
          name: 'order-confirm',
          component:OrderConfirm
        },
        {
          path: 'pay',
          name: 'order-pay',
          component:OrderPay
        },
        {
          path: 'alipay',
          name: 'alipay',
          component:AliPay
        }
      ]
    }

  ]
})
