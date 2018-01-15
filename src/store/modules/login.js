import api from '../../api/api'
import { Message } from 'element-ui';
import * as types from '../types.js'
const state = {
  token: window.sessionStorage.token
}

const actions = {
  login(store, loginData){
    api.userLogin(loginData).then(res => {
      console.log(res);
      if(res.data.success){
        // console.log("true")
        Message('恭喜你，登录成功!');
        // store.state.token = res.data.token;
        store.commit(types.LOGIN, res.data.token);
        window.location.href = '/#/project';
      }else{
        // console.log("false")
        Message({
          message: '登录失败！',
          type: 'warning'
        });


      }
    })
  }
}


const mutations = {
  [types.LOGIN]: (state, data) => {
    state.token = data;
    window.sessionStorage.setItem('token', data);
  }
}

export default {
  actions,
  state,
  mutations
}
