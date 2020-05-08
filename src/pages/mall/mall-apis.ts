import request from "../../utils/request";
import Taro from '@tarojs/taro'
const userId = Taro.getStorageSync('userId')

/*
* @description  subscribeLists  预约商品列表
* @params {number} pageNo 页码
* @params {number} pageSize 页值
* */
export const subscribeLists = (params)=>{
  return request.get(`/api/v1/product/getCommendProductForPage?userId=${userId}`,params)
}

/*
* @description 查询预约商品详情
* @params  {string} id 商品id
* */
export const getSubscribeDetail = (id)=>{
  return request.get(`/api/v1/product/getProductInfo?userId=${userId}&productId=${id}`)
}

/*
* @description  提交预约订单
* */
export const submitOrder = (params)=>{
  return request.post(`/api/v1/order/submitOrder?userId=${userId}`,params)
}


/*
*  @description 预约订单列表(用户，师傅共用)
*  @params {object} params  body参数
*  @params {string} params.orderState  订单状态
*  @params {string} params.userId  用户ID
*  @params {string} params.serviceUserId  服务师傅ID
*  @params {string} params.repairStationId  网点ID
*  @params {string} params.searchVyingOrder  查询待抢单的预约订单
*
*  @params {object} query  querystring参数
*  @params {number} query.pageNo 页码
* */
export const customOrderLists = (query,params)=>{
  let queryStr = `pageNo=${query.pageNo}&pageSize=${query.pageSize}&userId=${userId}`
  return request.post(`/api/v1/order/getOrderForPage?${queryStr}`,params)
}

// 抢单
export const grabOrder = (params)=>{
  return request.post(`/api/v1/order/vyingOrder?userId=${userId}`,params)
}
// 报价
export const setPriceNow = (params)=>{
  return request.post(`/api/v1/order/submitOtherAmountForOrder?userId=${userId}`,params)
}

// 用户端支付结果查询
export const searchPayRes = (id)=>{
  return request.get(`/pay/query/payState/byId?businessId=${id}&type=BOOKING_ORDER`)
}
