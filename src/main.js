import 'normalize.css'
import './styles/reset.less'
import Vue from 'vue'
import './element-ui' // @PC.element-ui
import './vant' // @H5.vant
import './styles/global.less'
import router from './router'
import store from './store'
import './injects'
import App from './App.vue'

import {Grid, GridItem, Row, Col, Swipe, SwipeItem, Lazyload, Overlay, Button, Tabbar, TabbarItem  } from 'vant' 
Vue.use(Grid).use(GridItem)
Vue.use(Row).use(Col)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Overlay)
Vue.use(Button)
Vue.use(Tabbar).use(TabbarItem)

/* 条件编译 (必须是运行时可用的环境变量，并且变量值不能为 undefined，否则模块必定会打包) */
if (process.env.VUE_APP_MOCK === 'true') {
  require('./api/mock')
}
if (process.env.VUE_APP_ENV === 'dev' || process.env.VUE_APP_ENV === 'stage') {
  require('./vconsole') // @H5
}

Vue.config.devtools =
  process.env.VUE_APP_ENV === 'dev' || process.env.VUE_APP_ENV === 'stage'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
