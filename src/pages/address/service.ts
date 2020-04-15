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
// 删除地址
export const deleteAdd = (id)=>{
  return request.post(`/api/v1/repair/address/del?userId=${userId}&id=${id}`)
}
// 设置默认
export const defaultSet = (id)=>{
  return request.post(`/api/v1/repair/address/setIsDefault?userId=${userId}&id=${id}`)
}
// 获取默认地址
export const getDefaultAdd = ()=>{
  return request.get(`/api/v1/repair/address/getDefaultAddress?userId=${userId}`)
}
