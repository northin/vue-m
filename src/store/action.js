import api from '../api/api'
import * as types from './types.js'

const actions = {
  test(store){
    api.userGetAll().then(res=>{
      console.log(res)
    })
  },
  getTop10(store,data){
    return api.getTop10(data).then(res=>{
      const topData = []
      let keyList = []
      keyList = Object.keys(res.data)
      for (var item in keyList) {
        if (keyList.hasOwnProperty(item)) {
          topData.push(res.data[keyList[item]]);
        }
      }
      return topData
    })
  },
  getTime(store,data){
    return api.getTime(data).then(res=>{

      return res.data.data
    })
  },
  getJson(store,data){
    return api.getJson(data).then(res=>{
      // console.log(res.data)
      if(res.data.data == undefined){
        return res
      }else{
        return res.data.data
      }

    })
  }
}
export default actions
