import request from "../../utils/request";
import Taro from '@tarojs/taro'
const userId = Taro.getStorageSync('userId')

// 订单确认顶部banner
export const getTopBanner = ()=>{
  return request.get(`/api/v1/ad/getAdConfigList?adTypeCode=REPAIR_ORDER_TOP`)
}

// 获取服务内容-有默认地址
export const getOrderContent = (param)=>{
  let params = {
    userId:userId,
    ...param
  }
  return request.get(`/api/v1/tf/repair/category/getCategoryCostModel`, params)
}

// 获取服务内容-无默认地址
export const getOrderContenNo = (id)=>{
  return request.get(`/api/v1/tf/repair/category/info?repairCategoryId=${id}`)
}

// 获取服务时间，费用，其他等说明
export const getTipsOther = ()=>{
  return request.get(`/api/v1/kindly/reminder/getKindlyReminderInfo`)
}
