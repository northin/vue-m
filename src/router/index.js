import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Moblie from '@/view/Mobile'
import Index from '@/view/Index'
import Project from '@/view/Project'
import store from '@/store/index'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/Moblie',
      name: 'Moblie',
      component: Moblie
    },{
      path: '/Hello',
      name: 'Hello',
      component: HelloWorld
    },{
      path: '/Project',
      name: 'Project',
      meta: {
            requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Project
    }
  ]
})

router.beforeEach((to, from, next) => {
  let token = store.state.login.token;
    //判断要去的路由有没有requiresAuth
  console.log(to.meta.requireAuth);
  if(to.meta.requireAuth){
    console.log(token)
    if(token){
      next();
    }else{
      next({
        path: '/',
        query: {redirect: to.path}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      });
    }
  }else{
    next();//如果无需token,那么随它去吧
  }
})
export default router
