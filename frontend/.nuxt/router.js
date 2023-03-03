import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _49ebe064 = () => interopDefault(import('..\\pages\\japanese_major.vue' /* webpackChunkName: "pages/japanese_major" */))
const _653ffb9e = () => interopDefault(import('..\\pages\\japanese_major\\index.vue' /* webpackChunkName: "pages/japanese_major/index" */))
const _6a22f194 = () => interopDefault(import('..\\pages\\japanese_major\\emotion_classification\\index.vue' /* webpackChunkName: "pages/japanese_major/emotion_classification/index" */))
const _5123faa4 = () => interopDefault(import('..\\pages\\japanese_major\\japanese_classicalchinese_model\\index.vue' /* webpackChunkName: "pages/japanese_major/japanese_classicalchinese_model/index" */))
const _a2e0e32e = () => interopDefault(import('..\\pages\\japanese_major\\japanese_grammer\\index.vue' /* webpackChunkName: "pages/japanese_major/japanese_grammer/index" */))
const _8fc79840 = () => interopDefault(import('..\\pages\\japanese_major\\listenning_shadowing\\index.vue' /* webpackChunkName: "pages/japanese_major/listenning_shadowing/index" */))
const _63651403 = () => interopDefault(import('..\\pages\\japanese_major\\japanese_grammer\\check\\index.vue' /* webpackChunkName: "pages/japanese_major/japanese_grammer/check/index" */))
const _760e7d60 = () => interopDefault(import('..\\pages\\japanese_major\\japanese_grammer\\complete\\index.vue' /* webpackChunkName: "pages/japanese_major/japanese_grammer/complete/index" */))
const _95457668 = () => interopDefault(import('..\\pages\\japanese_major\\japanese_grammer\\write\\index.vue' /* webpackChunkName: "pages/japanese_major/japanese_grammer/write/index" */))
const _200aaa94 = () => interopDefault(import('..\\pages\\life_line\\index.vue' /* webpackChunkName: "pages/life_line/index" */))
const _43eb2aae = () => interopDefault(import('..\\pages\\mingde_university.vue' /* webpackChunkName: "pages/mingde_university" */))
const _1c706a14 = () => interopDefault(import('..\\pages\\mingde_university\\index.vue' /* webpackChunkName: "pages/mingde_university/index" */))
const _1f06569c = () => interopDefault(import('..\\pages\\mingde_university\\discrete_math\\index.vue' /* webpackChunkName: "pages/mingde_university/discrete_math/index" */))
const _2a7b6fa6 = () => interopDefault(import('..\\pages\\mingde_university\\first_language\\index.vue' /* webpackChunkName: "pages/mingde_university/first_language/index" */))
const _3df1e453 = () => interopDefault(import('..\\pages\\mingde_university\\music_grammar\\index.vue' /* webpackChunkName: "pages/mingde_university/music_grammar/index" */))
const _590ca684 = () => interopDefault(import('..\\pages\\mingde_university\\tableau\\index.vue' /* webpackChunkName: "pages/mingde_university/tableau/index" */))
const _5da6acc6 = () => interopDefault(import('..\\pages\\recipes\\index.vue' /* webpackChunkName: "pages/recipes/index" */))
const _35e15735 = () => interopDefault(import('..\\pages\\school\\index.vue' /* webpackChunkName: "pages/school/index" */))
const _79cab16a = () => interopDefault(import('..\\pages\\tomorrow_predict\\index.vue' /* webpackChunkName: "pages/tomorrow_predict/index" */))
const _537efb12 = () => interopDefault(import('..\\pages\\world_data\\index.vue' /* webpackChunkName: "pages/world_data/index" */))
const _d8ad37d6 = () => interopDefault(import('..\\pages\\recipes\\add.vue' /* webpackChunkName: "pages/recipes/add" */))
const _4619de44 = () => interopDefault(import('..\\pages\\school\\add.vue' /* webpackChunkName: "pages/school/add" */))
const _6b751f06 = () => interopDefault(import('..\\pages\\life_line\\_id\\index.vue' /* webpackChunkName: "pages/life_line/_id/index" */))
const _0e5cac14 = () => interopDefault(import('..\\pages\\recipes\\_id\\index.vue' /* webpackChunkName: "pages/recipes/_id/index" */))
const _1fa62f05 = () => interopDefault(import('..\\pages\\school\\_id\\index.vue' /* webpackChunkName: "pages/school/_id/index" */))
const _4560b690 = () => interopDefault(import('..\\pages\\recipes\\_id\\edit.vue' /* webpackChunkName: "pages/recipes/_id/edit" */))
const _6a417fa7 = () => interopDefault(import('..\\pages\\school\\_id\\edit.vue' /* webpackChunkName: "pages/school/_id/edit" */))
const _2bad24ae = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _49ebe064,
    children: [{
      path: "",
      component: _653ffb9e,
      name: "japanese_major"
    }, {
      path: "emotion_classification",
      component: _6a22f194,
      name: "japanese_major-emotion_classification"
    }, {
      path: "japanese_classicalchinese_model",
      component: _5123faa4,
      name: "japanese_major-japanese_classicalchinese_model"
    }, {
      path: "japanese_grammer",
      component: _a2e0e32e,
      name: "japanese_major-japanese_grammer"
    }, {
      path: "listenning_shadowing",
      component: _8fc79840,
      name: "japanese_major-listenning_shadowing"
    }, {
      path: "japanese_grammer/check",
      component: _63651403,
      name: "japanese_major-japanese_grammer-check"
    }, {
      path: "japanese_grammer/complete",
      component: _760e7d60,
      name: "japanese_major-japanese_grammer-complete"
    }, {
      path: "japanese_grammer/write",
      component: _95457668,
      name: "japanese_major-japanese_grammer-write"
    }]
  }, {
    path: "/life_line",
    component: _200aaa94,
    name: "life_line"
  }, {
    path: "/mingde_university",
    component: _43eb2aae,
    children: [{
      path: "",
      component: _1c706a14,
      name: "mingde_university"
    }, {
      path: "discrete_math",
      component: _1f06569c,
      name: "mingde_university-discrete_math"
    }, {
      path: "first_language",
      component: _2a7b6fa6,
      name: "mingde_university-first_language"
    }, {
      path: "music_grammar",
      component: _3df1e453,
      name: "mingde_university-music_grammar"
    }, {
      path: "tableau",
      component: _590ca684,
      name: "mingde_university-tableau"
    }]
  }, {
    path: "/recipes",
    component: _5da6acc6,
    name: "recipes"
  }, {
    path: "/school",
    component: _35e15735,
    name: "school"
  }, {
    path: "/tomorrow_predict",
    component: _79cab16a,
    name: "tomorrow_predict"
  }, {
    path: "/world_data",
    component: _537efb12,
    name: "world_data"
  }, {
    path: "/recipes/add",
    component: _d8ad37d6,
    name: "recipes-add"
  }, {
    path: "/school/add",
    component: _4619de44,
    name: "school-add"
  }, {
    path: "/life_line/:id",
    component: _6b751f06,
    name: "life_line-id"
  }, {
    path: "/recipes/:id",
    component: _0e5cac14,
    name: "recipes-id"
  }, {
    path: "/school/:id",
    component: _1fa62f05,
    name: "school-id"
  }, {
    path: "/recipes/:id/edit",
    component: _4560b690,
    name: "recipes-id-edit"
  }, {
    path: "/school/:id/edit",
    component: _6a417fa7,
    name: "school-id-edit"
  }, {
    path: "/",
    component: _2bad24ae,
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
