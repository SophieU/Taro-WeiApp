import request from "../../utils/request";
import Taro from '@tarojs/taro'
const userId = Taro.getStorageSync('userId')

/* 钱包相关-start */
// 钱包基本信息
export const getWalletInfo = ()=>{
  return request.get(`/api/v1/user/account/wallet/info?userId=${userId}`)
}
// 钱包流水
export const walletFlow = (params)=>{
  return request.get(`/api/v1/user/account/wallet/log?userId=${userId}`,params)
}
// 提现记录
export const withdrawHistory = (params)=>{
  return request.get(`/api/v1/user/withdraw/findUserWithdrawListPage?userId=${userId}`,params)
}
// 发起提现申请
export const startWithdraw = (params) =>{
  return request.post(`/api/v1/user/withdraw/buildWithdrawOrder?userId=${userId}`,params)
}
// 设置支付密码
export const setPassword = (payPwd)=>{
  return request.post(`/api/v1/user/account/setPayPwd?userId=${userId}&payPwd=${payPwd}`)
}
/* 钱包相关-end */
