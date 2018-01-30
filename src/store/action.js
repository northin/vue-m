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
  }
}
export default actions
