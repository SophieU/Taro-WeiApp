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

// 查询是否需要夜间费
export const needNightFee =()=>{
  return request.post(`/api/v1/repair/order/check/needPayNightFee?userId=${userId}`)
}
// 提交工单-订单确认
export const submitOrder = (params)=>{
  return request.post(`/api/v1/repair/order/submitRepair?userId=${userId}`,params,'application/json')
}
// 生成预付费订单
export const getPrePayOrder = (params)=>{
  return request.post(`/api/v1/repair/order/prepay/dtd/info?userId=${userId}`,params,'application/json')
}
// 根据工单id查询工单详情
export const findOrderInfo = (repairOrderId)=>{
  return request.get(`/api/v1/tf/repair/order/getRepairOrderInfoById?userId=${userId}&repairOrderId=${repairOrderId}`)
}

// 获取支付信息（预付上门费）【支付--小程序支付和扫码支付通用】
export const getWxPay = (params)=>{
  return request.post(`/pay/wx/getPay?userId=${userId}`,params,'application/json')
}
