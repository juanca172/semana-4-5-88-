import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/categoria',
    name: 'Categoria',
    component: () => import(/* webpackChunkName: "Categoria" */ '../views/Categoria.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/articulo',
    name: 'Articulo',
    component: () => import(/* webpackChunkName: "Articulo" */ '../views/Articulo.vue'),
  },
  {
    path: '/usuario',
    name: 'Usuario',
    component: () => import(/* webpackChunkName: "Usuario" */ '../views/Usuario.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem("accessToken")) {
      next({
        path: "/"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
