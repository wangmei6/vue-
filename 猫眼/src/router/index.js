// const Vue  = () => import ('vue')
// const Router  = () => import ('vue-router')
import Vue from 'vue'
import Router from 'vue-router'
const Movie = () => import ('@/components/pages/movie/movie')
const My = () =>  import('@/components/pages/My/My')
const Cinema = () => import ('@/components/pages/Cinema/cinema')
const nowPlaying = () => import ('@/components/pages/movie/nowPlaying')
const comingSoon = () => import ('@/components/pages/movie/comingSoon')
const City = () => import ('@/components/pages/City/City')
const MoviePage = () => import ('@/components/pages/Cinema/MoviePage')
const MeiTuan = () => import ('@/components/pages/My/meituan')
const ShouJi = () => import ('@/components/pages/My/shouji')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/movie'
    },
    {
      path:'/my',
      component:My,
      name:'My',
      children:[
        {
          path:'meituan',
          component:MeiTuan
        },
        {
          path:'shouji',
          component:ShouJi
        },{
          path:'',
          redirect:'meituan'
        }
      ]
    },
    {
      path:'/cinema',
      component:Cinema,
      name:'Cinema',
    },
    {
      path:'/cinema/:id',
      component:MoviePage,
      name:MoviePage
    },
    {
      path:'/city',
      component:City
    },
    {
      path:'/movie',
      component:Movie,
      name:'movie',
      children:[
        {
          path:'nowPlaying',
          component:nowPlaying
        },
        {
          path:'comingSoon',
          component:comingSoon
        },
        {
          path:'',
          redirect:'nowPlaying'
        }
      ]
    }
  ]
})
