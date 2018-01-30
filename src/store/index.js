import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api/api'

import actions from './action'
import login from './modules/login'
Vue.use(Vuex)

const state = {
  topData:[]
}
// const actions = {
//   test(store){
//     api.userGetAll().then(res=>{
//       console.log(res)
//     })
//   }
// }

export default new Vuex.Store({
  state,
  actions,
  modules: {
    login
  }
})
