import request from "../../utils/request";
import Taro from '@tarojs/taro'

const userId = Taro.getStorageSync('userId')


/*
*   @description 服务师傅获取报修订单列表
*   @params pageNo=1
*   @params pageSize=10
*   @params userId=用户ID
*   @params masterId=师傅ID
*   @params repairOrderState=工单状态（PENDING_ORDER、HANDLEING、FINISH、EXCEPTION）
*   师傅端工单列表查询
*   1. 待处理【PENDING_ORDER】 查询工单状态为【待上门】*
*   2. 处理中【HANDLEING】 查询工单状态为【待付款】*
*   3. 已完成【FINISH】 查询工单状态为【已完成，已取消，已关闭】*
*   4. 申述中【EXCEPTION】 查询工单状态为【异常】
* */
export const repairOrderLists = (params)=>{
  return request.get(`/api/v1/repair/order/getRepairByMasterIdAndState`,params)
}

// 申请请求
export const refuseRequest = (id)=>{
  return request.get(`/api/v1/manage/repair/order/getAllRepairStatementRequestByType?userId=${userId}&businessId=${id}`)
}
// 申诉原因
export const refuseReason = (id)=>{
  return request.get(`/api/v1/manage/repair/order/getAllStatementReasonByType?userId=${userId}&businessId=${id}`)
}

/*
* @description 提交申述
* @params  "repairOrderId":"工单ID",
* @params "statementRequestId":"申诉请求ID",
* @params "statementReasonId":"申述原因id",
* @params "masterId":"师傅ID"
* */
export const submitRefuse = (params)=>{
  return request.post(`/api/v1/manage/repair/order/addRepairOrderStatement?userId=${userId}`,params)
}

// 查询订单详情
export const orderDetail = (repairOrderId)=>{
  return request.get(`/api/v1/repair/order/getRepairOrderInfoById?userId=${userId}&repairOrderId=${repairOrderId}&type=master`)
}

// 二维码收款
/*
*
* "orderIds":["a551164163c64f868ea744d769dac503"],
* "payBusinessType":"W_REPAIR_ORDER（工单业务类型）",
* "payCode":"WX_XCX/WX_QR"
*
* */
export const QrPay = (params)=>{
  return request.post(`/pay/wx/getPay?userId=${userId}`,params)
}
/*
* 查询支付结果 —— Y为已支付，N为未支付；
 */
export const payRes = (paySn)=>{
  return request.get(`/pay/query/payState?paySn=${paySn}`)
}
// 查询支付结果---用户端支付
export const payResCustom = (repairOrderDispatchId)=>{
  return request.get(`/pay/query/payState/byId?businessId=${repairOrderDispatchId}`)
}
// 提交报价方案
export const setPricePlan = (id,params)=>{
  return request.post(`/api/v1/repair/order/submitPlanPay?userId=${userId}&repairOrderDispatchId=${id}`,params)
}
