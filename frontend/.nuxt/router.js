import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1e6dc725 = () => interopDefault(import('..\\pages\\japanese_major.vue' /* webpackChunkName: "pages/japanese_major" */))
const _4cb229bd = () => interopDefault(import('..\\pages\\japanese_major\\index.vue' /* webpackChunkName: "pages/japanese_major/index" */))
const _4b4472b3 = () => interopDefault(import('..\\pages\\japanese_major\\emotion_classification\\index.vue' /* webpackChunkName: "pages/japanese_major/emotion_classification/index" */))
const _4252546f = () => interopDefault(import('..\\pages\\japanese_major\\japanese_classicalchinese_model\\index.vue' /* webpackChunkName: "pages/japanese_major/japanese_classicalchinese_model/index" */))
const _3a97da70 = () => interopDefault(import('..\\pages\\japanese_major\\japanese_grammer\\index.vue' /* webpackChunkName: "pages/japanese_major/japanese_grammer/index" */))
const _f8cd1e82 = () => interopDefault(import('..\\pages\\japanese_major\\listenning_shadowing\\index.vue' /* webpackChunkName: "pages/japanese_major/listenning_shadowing/index" */))
const _b3189278 = () => interopDefault(import('..\\pages\\japanese_major\\japanese_grammer\\check\\index.vue' /* webpackChunkName: "pages/japanese_major/japanese_grammer/check/index" */))
const _49269aef = () => interopDefault(import('..\\pages\\japanese_major\\japanese_grammer\\complete\\index.vue' /* webpackChunkName: "pages/japanese_major/japanese_grammer/complete/index" */))
const _0f2830e6 = () => interopDefault(import('..\\pages\\japanese_major\\japanese_grammer\\write\\index.vue' /* webpackChunkName: "pages/japanese_major/japanese_grammer/write/index" */))
const _48a435d6 = () => interopDefault(import('..\\pages\\life_line\\index.vue' /* webpackChunkName: "pages/life_line/index" */))
const _06a17f66 = () => interopDefault(import('..\\pages\\mingde_university.vue' /* webpackChunkName: "pages/mingde_university" */))
const _8694d8d6 = () => interopDefault(import('..\\pages\\mingde_university\\index.vue' /* webpackChunkName: "pages/mingde_university/index" */))
const _24a15911 = () => interopDefault(import('..\\pages\\mingde_university\\discrete_math\\index.vue' /* webpackChunkName: "pages/mingde_university/discrete_math/index" */))
const _3b2e4fae = () => interopDefault(import('..\\pages\\mingde_university\\first_language\\index.vue' /* webpackChunkName: "pages/mingde_university/first_language/index" */))
const _721668b2 = () => interopDefault(import('..\\pages\\mingde_university\\music_grammar\\index.vue' /* webpackChunkName: "pages/mingde_university/music_grammar/index" */))
const _e616b746 = () => interopDefault(import('..\\pages\\mingde_university\\tableau\\index.vue' /* webpackChunkName: "pages/mingde_university/tableau/index" */))
const _32289387 = () => interopDefault(import('..\\pages\\recipes\\index.vue' /* webpackChunkName: "pages/recipes/index" */))
const _afd1d758 = () => interopDefault(import('..\\pages\\school\\index.vue' /* webpackChunkName: "pages/school/index" */))
const _4d69d3c9 = () => interopDefault(import('..\\pages\\tomorrow_predict\\index.vue' /* webpackChunkName: "pages/tomorrow_predict/index" */))
const _0c4310b1 = () => interopDefault(import('..\\pages\\world_data\\index.vue' /* webpackChunkName: "pages/world_data/index" */))
const _55480716 = () => interopDefault(import('..\\pages\\recipes\\add.vue' /* webpackChunkName: "pages/recipes/add" */))
const _52e74d25 = () => interopDefault(import('..\\pages\\life_line\\_id\\index.vue' /* webpackChunkName: "pages/life_line/_id/index" */))
const _b31c541a = () => interopDefault(import('..\\pages\\recipes\\_id\\index.vue' /* webpackChunkName: "pages/recipes/_id/index" */))
const _7f64cd46 = () => interopDefault(import('..\\pages\\school\\_id\\index.vue' /* webpackChunkName: "pages/school/_id/index" */))
const _3d0e42f9 = () => interopDefault(import('..\\pages\\recipes\\_id\\edit.vue' /* webpackChunkName: "pages/recipes/_id/edit" */))
const _23059546 = () => interopDefault(import('..\\pages\\school\\_id\\edit.vue' /* webpackChunkName: "pages/school/_id/edit" */))
const _e1bc8c70 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _1e6dc725,
    children: [{
      path: "",
      component: _4cb229bd,
      name: "japanese_major"
    }, {
      path: "emotion_classification",
      component: _4b4472b3,
      name: "japanese_major-emotion_classification"
    }, {
      path: "japanese_classicalchinese_model",
      component: _4252546f,
      name: "japanese_major-japanese_classicalchinese_model"
    }, {
      path: "japanese_grammer",
      component: _3a97da70,
      name: "japanese_major-japanese_grammer"
    }, {
      path: "listenning_shadowing",
      component: _f8cd1e82,
      name: "japanese_major-listenning_shadowing"
    }, {
      path: "japanese_grammer/check",
      component: _b3189278,
      name: "japanese_major-japanese_grammer-check"
    }, {
      path: "japanese_grammer/complete",
      component: _49269aef,
      name: "japanese_major-japanese_grammer-complete"
    }, {
      path: "japanese_grammer/write",
      component: _0f2830e6,
      name: "japanese_major-japanese_grammer-write"
    }]
  }, {
    path: "/life_line",
    component: _48a435d6,
    name: "life_line"
  }, {
    path: "/mingde_university",
    component: _06a17f66,
    children: [{
      path: "",
      component: _8694d8d6,
      name: "mingde_university"
    }, {
      path: "discrete_math",
      component: _24a15911,
      name: "mingde_university-discrete_math"
    }, {
      path: "first_language",
      component: _3b2e4fae,
      name: "mingde_university-first_language"
    }, {
      path: "music_grammar",
      component: _721668b2,
      name: "mingde_university-music_grammar"
    }, {
      path: "tableau",
      component: _e616b746,
      name: "mingde_university-tableau"
    }]
  }, {
    path: "/recipes",
    component: _32289387,
    name: "recipes"
  }, {
    path: "/school",
    component: _afd1d758,
    name: "school"
  }, {
    path: "/tomorrow_predict",
    component: _4d69d3c9,
    name: "tomorrow_predict"
  }, {
    path: "/world_data",
    component: _0c4310b1,
    name: "world_data"
  }, {
    path: "/recipes/add",
    component: _55480716,
    name: "recipes-add"
  }, {
    path: "/life_line/:id",
    component: _52e74d25,
    name: "life_line-id"
  }, {
    path: "/recipes/:id",
    component: _b31c541a,
    name: "recipes-id"
  }, {
    path: "/school/:id",
    component: _7f64cd46,
    name: "school-id"
  }, {
    path: "/recipes/:id/edit",
    component: _3d0e42f9,
    name: "recipes-id-edit"
  }, {
    path: "/school/:id/edit",
    component: _23059546,
    name: "school-id-edit"
  }, {
    path: "/",
    component: _e1bc8c70,
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
