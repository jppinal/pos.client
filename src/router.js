import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => System.import(`@/${component}.vue`)
}

function mobile (component) {
  // '@' is aliased to src/components
  return () => System.import(`src/mobile/${component}.vue`)
}

function desktop (component) {
  // '@' is aliased to src/components
  return () => System.import(`src/desktop/${component}.vue`)
}

function requireAuth (to, from, next) {
  /* if (localStorage.getItem('feathers-jwt') === null) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }
  else {
    client.authenticate({
      strategy: 'jwt',
      accessToken: localStorage.getItem('feathers-jwt')
    }).then(response => {
      next()
    })
  } */
  next()
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  routes: [
    {
      path: '/',
      component: load('main/layout'),
      children: [
        {path: 'ticket', component: mobile('ticket')},
        {path: 'shopfloor', component: desktop('shopfloor')}
      ],
      beforeEnter: requireAuth
    },
    {
      path: '/edit',
      component: load('edit/layout'),
      children: [
        {path: 'products', component: load('edit/products/index')},
        {path: 'options', component: load('edit/options/index')}
      ],
      beforeEnter: requireAuth
    },
    // Always leave this last one
    { path: '*', component: load('error/404') } // Not found
  ]
})
