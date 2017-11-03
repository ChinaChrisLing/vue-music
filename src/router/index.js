import Vue from 'vue'
import VueRouter from 'vue-router'
// import Recommend from '../components/recommend/recommend'
import Rank from '../components/rank/rank'
import Singer from '../components/singer/singer'
import Search from '../components/search/search'

const Recommend = (resolve) => {
  import('../components/recommend/recommend').then((module) => {
    resolve(module)
  })
}
Vue.use(VueRouter)

export default new VueRouter(
  {
    routes: [{
      path: '/',
      redirect: '/recommend'
    }, {
      path: '/recommend',
      component: Recommend
    }, {
      path: '/singer',
      component: Singer
    }, {
      path: '/rank',
      component: Rank
    }, {
      path: '/search',
      component: Search
    }]
  }
)