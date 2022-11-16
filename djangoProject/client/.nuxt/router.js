import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _13c17f24 = () => interopDefault(import('..\\pages\\japanese_major.vue' /* webpackChunkName: "pages/japanese_major" */))
const _ad674758 = () => interopDefault(import('..\\pages\\japanese_major\\index.vue' /* webpackChunkName: "pages/japanese_major/index" */))
const _6166104a = () => interopDefault(import('..\\pages\\japanese_major\\emotion_classification\\index.vue' /* webpackChunkName: "pages/japanese_major/emotion_classification/index" */))
const _b9f9de90 = () => interopDefault(import('..\\pages\\japanese_major\\japanese_classicalchinese_model\\index.vue' /* webpackChunkName: "pages/japanese_major/japanese_classicalchinese_model/index" */))
const _b93524c2 = () => interopDefault(import('..\\pages\\japanese_major\\japanese_grammer\\index.vue' /* webpackChunkName: "pages/japanese_major/japanese_grammer/index" */))
const _f838efd4 = () => interopDefault(import('..\\pages\\japanese_major\\listenning_shadowing\\index.vue' /* webpackChunkName: "pages/japanese_major/listenning_shadowing/index" */))
const _5485cc0d = () => interopDefault(import('..\\pages\\japanese_major\\japanese_grammer\\check\\index.vue' /* webpackChunkName: "pages/japanese_major/japanese_grammer/check/index" */))
const _13819506 = () => interopDefault(import('..\\pages\\japanese_major\\japanese_grammer\\complete\\index.vue' /* webpackChunkName: "pages/japanese_major/japanese_grammer/complete/index" */))
const _b3040654 = () => interopDefault(import('..\\pages\\japanese_major\\japanese_grammer\\write\\index.vue' /* webpackChunkName: "pages/japanese_major/japanese_grammer/write/index" */))
const _e6339fc4 = () => interopDefault(import('..\\pages\\life_line\\index.vue' /* webpackChunkName: "pages/life_line/index" */))
const _72805664 = () => interopDefault(import('..\\pages\\mingde_university.vue' /* webpackChunkName: "pages/mingde_university" */))
const _0e4a74c4 = () => interopDefault(import('..\\pages\\mingde_university\\index.vue' /* webpackChunkName: "pages/mingde_university/index" */))
const _40baae7d = () => interopDefault(import('..\\pages\\mingde_university\\classical_music_theory\\index.vue' /* webpackChunkName: "pages/mingde_university/classical_music_theory/index" */))
const _355a9830 = () => interopDefault(import('..\\pages\\mingde_university\\discrete_math\\index.vue' /* webpackChunkName: "pages/mingde_university/discrete_math/index" */))
const _deaf6092 = () => interopDefault(import('..\\pages\\mingde_university\\first_language\\index.vue' /* webpackChunkName: "pages/mingde_university/first_language/index" */))
const _191cac74 = () => interopDefault(import('..\\pages\\mingde_university\\tableau\\index.vue' /* webpackChunkName: "pages/mingde_university/tableau/index" */))
const _277c86c0 = () => interopDefault(import('..\\pages\\tomorrow_predict\\index.vue' /* webpackChunkName: "pages/tomorrow_predict/index" */))
const _1d52e714 = () => interopDefault(import('..\\pages\\waterplants\\index.vue' /* webpackChunkName: "pages/waterplants/index" */))
const _fbd7b270 = () => interopDefault(import('..\\pages\\world_data\\index.vue' /* webpackChunkName: "pages/world_data/index" */))
const _382d6fc5 = () => interopDefault(import('..\\pages\\waterplants\\add.vue' /* webpackChunkName: "pages/waterplants/add" */))
const _25151a64 = () => interopDefault(import('..\\pages\\waterplants\\_id\\index.vue' /* webpackChunkName: "pages/waterplants/_id/index" */))
const _51a82c68 = () => interopDefault(import('..\\pages\\waterplants\\_id\\edit.vue' /* webpackChunkName: "pages/waterplants/_id/edit" */))
const _9fec0b42 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _13c17f24,
    children: [{
      path: "",
      component: _ad674758,
      name: "japanese_major"
    }, {
      path: "emotion_classification",
      component: _6166104a,
      name: "japanese_major-emotion_classification"
    }, {
      path: "japanese_classicalchinese_model",
      component: _b9f9de90,
      name: "japanese_major-japanese_classicalchinese_model"
    }, {
      path: "japanese_grammer",
      component: _b93524c2,
      name: "japanese_major-japanese_grammer"
    }, {
      path: "listenning_shadowing",
      component: _f838efd4,
      name: "japanese_major-listenning_shadowing"
    }, {
      path: "japanese_grammer/check",
      component: _5485cc0d,
      name: "japanese_major-japanese_grammer-check"
    }, {
      path: "japanese_grammer/complete",
      component: _13819506,
      name: "japanese_major-japanese_grammer-complete"
    }, {
      path: "japanese_grammer/write",
      component: _b3040654,
      name: "japanese_major-japanese_grammer-write"
    }]
  }, {
    path: "/life_line",
    component: _e6339fc4,
    name: "life_line"
  }, {
    path: "/mingde_university",
    component: _72805664,
    children: [{
      path: "",
      component: _0e4a74c4,
      name: "mingde_university"
    }, {
      path: "classical_music_theory",
      component: _40baae7d,
      name: "mingde_university-classical_music_theory"
    }, {
      path: "discrete_math",
      component: _355a9830,
      name: "mingde_university-discrete_math"
    }, {
      path: "first_language",
      component: _deaf6092,
      name: "mingde_university-first_language"
    }, {
      path: "tableau",
      component: _191cac74,
      name: "mingde_university-tableau"
    }]
  }, {
    path: "/tomorrow_predict",
    component: _277c86c0,
    name: "tomorrow_predict"
  }, {
    path: "/waterplants",
    component: _1d52e714,
    name: "waterplants"
  }, {
    path: "/world_data",
    component: _fbd7b270,
    name: "world_data"
  }, {
    path: "/waterplants/add",
    component: _382d6fc5,
    name: "waterplants-add"
  }, {
    path: "/waterplants/:id",
    component: _25151a64,
    name: "waterplants-id"
  }, {
    path: "/waterplants/:id/edit",
    component: _51a82c68,
    name: "waterplants-id-edit"
  }, {
    path: "/",
    component: _9fec0b42,
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
