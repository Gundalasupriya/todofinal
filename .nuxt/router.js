import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _72288922 = () => interopDefault(import('..\\pages\\CreateTodo.vue' /* webpackChunkName: "pages/CreateTodo" */))
const _5fd8409c = () => interopDefault(import('..\\pages\\GetAllTodos.vue' /* webpackChunkName: "pages/GetAllTodos" */))
const _dd76d74e = () => interopDefault(import('..\\pages\\Login.vue' /* webpackChunkName: "pages/Login" */))
const _3e094191 = () => interopDefault(import('..\\pages\\MyTodos.vue' /* webpackChunkName: "pages/MyTodos" */))
const _27c6c3fd = () => interopDefault(import('..\\pages\\todos.vue' /* webpackChunkName: "pages/todos" */))
const _6f0903ef = () => interopDefault(import('..\\pages\\UpdateTodo.vue' /* webpackChunkName: "pages/UpdateTodo" */))
const _502ad162 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/CreateTodo",
    component: _72288922,
    name: "CreateTodo"
  }, {
    path: "/GetAllTodos",
    component: _5fd8409c,
    name: "GetAllTodos"
  }, {
    path: "/Login",
    component: _dd76d74e,
    name: "Login"
  }, {
    path: "/MyTodos",
    component: _3e094191,
    name: "MyTodos"
  }, {
    path: "/todos",
    component: _27c6c3fd,
    name: "todos"
  }, {
    path: "/UpdateTodo",
    component: _6f0903ef,
    name: "UpdateTodo"
  }, {
    path: "/",
    component: _502ad162,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
