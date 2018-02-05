import axios from 'axios'
import store from '../store'
import router from '../router'


axios.defaults.timeout = 50000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

//创建一个axios的实例
const instance = axios.create();
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

axios.interceptors.request.use = instance.interceptors.request.use;
axios.interceptors.response.use = instance.interceptors.response.use;
//request拦截器
instance.interceptors.request.use(
  config => {
    //每次请求前检测state的token
    if(store.state.login.token){
      config.headers.Authorization = `token ${store.state.login.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err);
  }
)

//response拦截器

instance.interceptors.response.use(
    response => {
        return response;
    },
    error => { //默认除了2XX之外的都是错误的，就会走这里
      console.log(error)
        if(error.response){
            switch(error.response.status){
                case 401:
                    // store.dispatch('UserLogout'); //可能是token过期，清除它
                    router.replace({ //跳转到登录页面
                        path: '/',
                        query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
                    });
            }
        }
        return Promise.reject(error.response);
    }
);

// instance.interceptors.response.use(
//   response => {
//     return response
//   },
//   error => {
//     if(error.response){
//       switch (error.response.status) {
//         case 401:
//           // store.dispatch('userLogin');
//           router.replace({
//             path:'/', //没有token 返回登录页
//             query: { redirect: router.currentRoute.fullPath }  //登录后跳转到该页面
//           })
//
//       }
//
//     }
//     return Promise.reject(error.response.data);
//   }
// )

export default {
  userLogin(data){
    return instance.post('http://localhost:3000/api/user/signIn.json',data);
  },
  userGetAll(){
    return instance.get('http://localhost:3000/api/user/getLoginUserInfo.json');
  },
  getTop10(data){
    return instance.post('http://localhost:3000/api/project/top10.json',data);
  },
  getTime(data){
    return instance.post('http://localhost:3000/api/project/time.json',data);
  },
  getJson(data){
    return instance.post('http://localhost:3000/api/project/getJson.json',data);
  }
}
