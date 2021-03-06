import Vue from 'vue'
import VueRouter from 'vue-router'
// import Recommend from '../components/recommend/recommend'
// import Rank from '../components/rank/rank'
import Search from '../components/search/search'

const Recommend = (resolve) => {
  import('../components/recommend/recommend').then((module) => {
    resolve(module)
  })
}

const Disc = (resolve) => {
  import('../components/disc/disc').then((module) => {
    resolve(module)
  })
}

const Singer = (resolve) => {
  import('../components/singer/singer').then((module) => {
    resolve(module)
  })
}

const SingerDetail = (resolve) => {
  import('../components/singer-detail/singer-detail').then((module) => {
    resolve(module)
  })
}

const Rank = (resolve) => {
  import('../components/rank/rank').then((module) => {
    resolve(module)
  })
}

const RankDetail = (resolve) => {
  import('../components/rank-detail/rank-detail').then((module) => {
    resolve(module)
  })
}

const User = (resolve) => {
  import('../components/user/user').then((module) => {
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
      component: Recommend,
      children: [{
        path: ':id',
        component: Disc
      }]
    }, {
      path: '/singer',
      component: Singer,
      children: [{
        path: ':id',
        component: SingerDetail
      }]
    }, {
      path: '/rank',
      component: Rank,
      children: [{
        path: ':id',
        component: RankDetail
      }]
    }, {
      path: '/search',
      component: Search,
      children: [{
        path: ':id',
        component: SingerDetail
      }]
    }, {
      path: '/user',
      component: User
    }]
  }
)
