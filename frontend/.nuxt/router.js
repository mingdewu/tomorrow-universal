import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b84e7270 = () => interopDefault(import('..\\pages\\japanese_major.vue' /* webpackChunkName: "pages/japanese_major" */))
const _2c19dcba = () => interopDefault(import('..\\pages\\japanese_major\\index.vue' /* webpackChunkName: "pages/japanese_major/index" */))
const _5ef23eb0 = () => interopDefault(import('..\\pages\\japanese_major\\emotion_classification\\index.vue' /* webpackChunkName: "pages/japanese_major/emotion_classification/index" */))
const _aae495dc = () => interopDefault(import('..\\pages\\japanese_major\\japanese_classicalchinese_model\\index.vue' /* webpackChunkName: "pages/japanese_major/japanese_classicalchinese_model/index" */))
const _0fb5e085 = () => interopDefault(import('..\\pages\\japanese_major\\japanese_grammer\\index.vue' /* webpackChunkName: "pages/japanese_major/japanese_grammer/index" */))
const _c957d008 = () => interopDefault(import('..\\pages\\japanese_major\\listenning_shadowing\\index.vue' /* webpackChunkName: "pages/japanese_major/listenning_shadowing/index" */))
const _087f6a67 = () => interopDefault(import('..\\pages\\japanese_major\\japanese_grammer\\check\\index.vue' /* webpackChunkName: "pages/japanese_major/japanese_grammer/check/index" */))
const _0e37bf28 = () => interopDefault(import('..\\pages\\japanese_major\\japanese_grammer\\complete\\index.vue' /* webpackChunkName: "pages/japanese_major/japanese_grammer/complete/index" */))
const _5a779b30 = () => interopDefault(import('..\\pages\\japanese_major\\japanese_grammer\\write\\index.vue' /* webpackChunkName: "pages/japanese_major/japanese_grammer/write/index" */))
const _9b50f010 = () => interopDefault(import('..\\pages\\life_line\\index.vue' /* webpackChunkName: "pages/life_line/index" */))
const _098c0c6c = () => interopDefault(import('..\\pages\\mingde_university.vue' /* webpackChunkName: "pages/mingde_university" */))
const _bd68b910 = () => interopDefault(import('..\\pages\\mingde_university\\index.vue' /* webpackChunkName: "pages/mingde_university/index" */))
const _51a326ce = () => interopDefault(import('..\\pages\\mingde_university\\discrete_math\\index.vue' /* webpackChunkName: "pages/mingde_university/discrete_math/index" */))
const _a3338cde = () => interopDefault(import('..\\pages\\mingde_university\\first_language\\index.vue' /* webpackChunkName: "pages/mingde_university/first_language/index" */))
const _c1cf9322 = () => interopDefault(import('..\\pages\\mingde_university\\music_grammar\\index.vue' /* webpackChunkName: "pages/mingde_university/music_grammar/index" */))
const _5bdec3da = () => interopDefault(import('..\\pages\\mingde_university\\tableau\\index.vue' /* webpackChunkName: "pages/mingde_university/tableau/index" */))
const _90d8d9ac = () => interopDefault(import('..\\pages\\recipes\\index.vue' /* webpackChunkName: "pages/recipes/index" */))
const _494c1451 = () => interopDefault(import('..\\pages\\school\\index.vue' /* webpackChunkName: "pages/school/index" */))
const _1c9e88f4 = () => interopDefault(import('..\\pages\\tomorrow_predict\\index.vue' /* webpackChunkName: "pages/tomorrow_predict/index" */))
const _0acdca2e = () => interopDefault(import('..\\pages\\world_data\\index.vue' /* webpackChunkName: "pages/world_data/index" */))
const _00b6d90e = () => interopDefault(import('..\\pages\\recipes\\add.vue' /* webpackChunkName: "pages/recipes/add" */))
const _2d342430 = () => interopDefault(import('..\\pages\\recipes\\_id\\index.vue' /* webpackChunkName: "pages/recipes/_id/index" */))
const _0fdab91c = () => interopDefault(import('..\\pages\\recipes\\_id\\edit.vue' /* webpackChunkName: "pages/recipes/_id/edit" */))
const _66c106c5 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/japanese_major",
    component: _b84e7270,
    children: [{
      path: "",
      component: _2c19dcba,
      name: "japanese_major"
    }, {
      path: "emotion_classification",
      component: _5ef23eb0,
      name: "japanese_major-emotion_classification"
    }, {
      path: "japanese_classicalchinese_model",
      component: _aae495dc,
      name: "japanese_major-japanese_classicalchinese_model"
    }, {
      path: "japanese_grammer",
      component: _0fb5e085,
      name: "japanese_major-japanese_grammer"
    }, {
      path: "listenning_shadowing",
      component: _c957d008,
      name: "japanese_major-listenning_shadowing"
    }, {
      path: "japanese_grammer/check",
      component: _087f6a67,
      name: "japanese_major-japanese_grammer-check"
    }, {
      path: "japanese_grammer/complete",
      component: _0e37bf28,
      name: "japanese_major-japanese_grammer-complete"
    }, {
      path: "japanese_grammer/write",
      component: _5a779b30,
      name: "japanese_major-japanese_grammer-write"
    }]
  }, {
    path: "/life_line",
    component: _9b50f010,
    name: "life_line"
  }, {
    path: "/mingde_university",
    component: _098c0c6c,
    children: [{
      path: "",
      component: _bd68b910,
      name: "mingde_university"
    }, {
      path: "discrete_math",
      component: _51a326ce,
      name: "mingde_university-discrete_math"
    }, {
      path: "first_language",
      component: _a3338cde,
      name: "mingde_university-first_language"
    }, {
      path: "music_grammar",
      component: _c1cf9322,
      name: "mingde_university-music_grammar"
    }, {
      path: "tableau",
      component: _5bdec3da,
      name: "mingde_university-tableau"
    }]
  }, {
    path: "/recipes",
    component: _90d8d9ac,
    name: "recipes"
  }, {
    path: "/school",
    component: _494c1451,
    name: "school"
  }, {
    path: "/tomorrow_predict",
    component: _1c9e88f4,
    name: "tomorrow_predict"
  }, {
    path: "/world_data",
    component: _0acdca2e,
    name: "world_data"
  }, {
    path: "/recipes/add",
    component: _00b6d90e,
    name: "recipes-add"
  }, {
    path: "/recipes/:id",
    component: _2d342430,
    name: "recipes-id"
  }, {
    path: "/recipes/:id/edit",
    component: _0fdab91c,
    name: "recipes-id-edit"
  }, {
    path: "/",
    component: _66c106c5,
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
