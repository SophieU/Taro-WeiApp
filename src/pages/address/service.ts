import request from "../../utils/request";
import Taro from '@tarojs/taro'

const userId = Taro.getStorageSync('userId')
export const getAddLists = ()=>{
  return request.get(`/api/v1/repair/address/getRepairAddressByUserId?userId=${userId}`)
}
