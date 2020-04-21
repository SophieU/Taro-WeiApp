import request from "../../utils/request";
import Taro from '@tarojs/taro'

const userId = Taro.getStorageSync('userId')
// 订单列表
/*
*
* @params {string} userId
* @params {number} pageNo 页码
* @params {number}  pageSize
* @params {string}  repairOrderState   工单状态（取值STAY_RECEIPT、STAY_PAY、STAY_COMMENT、FINISH）
* */
export const getLists = (params)=>{
  return request.get(`/api/v1/repair/order/getRepairByUserIdAndState?userId=${userId}`,params)
}

// 工单详情
export const getDetail = (id)=>{
  return request.get(`/api/v1/repair/order/getRepairOrderInfoById?userId=${userId}&repairOrderId=${id}`)
}

// 取消工单
/*
* repairOrderId=工单ID&cancelReasonId=取消原因ID
* */
export const cancelOrder = (params)=>{
  return request.post(`/api/v1/repair/order/cancelRepairById?userId=${userId}`,params)
}


/**
 * 查询取消原因列表
 * 1、用户取消时，doUser=USER
 * 2、管理员取消时，doUser=SYSTEM
 * */
export const cancelReason = ()=>{
  return request.get(`/api/v1/repair/cancel/reason/getAllCancelReason?doUser=USER`)
}

/*
* 查询评价选择项
* */
export const getCommentOption = ()=>{
  return request.get(`/api/v1/repair/comment/getAllRepairComment`)
}
// 用户评价订单-提交
export const submitComment = (id,params)=>{
  return request.post(`/api/v1/repair/order/commentRepairOrder?userId=${userId}&repairOrderId=${id}`,params)
}
