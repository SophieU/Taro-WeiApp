import request from "../../utils/request";
import Taro from '@tarojs/taro'

const userId = Taro.getStorageSync('userId')

// 待处理工单
/*
* userId=xxx&stationId=网点ID&pageNo=1&pageSize=10
* */
export const lists = (params)=>{
  params.userId=userId
  return request.get(`/api/v1/manage/repair/order/pageList`,params)
}
// 查询师傅
export const masterLists = (orderId)=>{
  return request.get(`/api/v1/manage/repair/order/getWorkingServiceUserList?userId=${userId}&repairOrderId=${orderId}`)
}

// 分配工单
export const dispatchOrder = (params)=>{
  return request.post(`/api/v1/manage/repair/order/dispatch?userId=${userId}`,params)
}
// 申诉工单-分配
export const dispatchAppeal = (params)=>{
  return request.post(`/api/v1/manage/repair/order/appeal/dispatch?userId=${userId}`,params)
}
// 申诉驳回
/*"appealId":"申述ID","userId":"取值masterId","username":"师傅名称取值masterName","departmentName":"网点名称取值repairStationName"*/
export const conflictAppeal = (params)=>{
  return request.post(`/api/v1/manage/repair/order/appeal/reject?userId=${userId}`,params)
}
// 取消原因列表
export const cancelLists = ()=>{
  return request.get(`/api/v1/repair/cancel/reason/getAllCancelReason?doUser=SYSTEM`)
}
// 取消工单-type=orderId
export const cancel = (params)=>{
  return request.post(`/api/v1/manage/repair/order/cancel?userId=${userId}`,params)
}
// 申诉取消- type=appeal
export const cancelConf = (params)=>{
  return request.post(`/api/v1/manage/repair/order/appeal/cancel?userId=${userId}`,params)
}
// 申诉-关闭工单
export const closeAppeal = (params)=>{
  return request.post(`/api/v1/manage/repair/order/appeal/close?userId=${userId}`,params)
}
