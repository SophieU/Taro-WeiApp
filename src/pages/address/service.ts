import request from "../../utils/request";
import Taro from '@tarojs/taro'

const userId = Taro.getStorageSync('userId')
// 获取地址列表
export const getAddLists = ()=>{
  return request.get(`/api/v1/repair/address/getRepairAddressByUserId?userId=${userId}`)
}
// 新增、编辑地址
export const saveAdd = (params)=>{
  return request.post(`/api/v1/repair/address/add?userId=${userId}`,params,'application/json')
}

