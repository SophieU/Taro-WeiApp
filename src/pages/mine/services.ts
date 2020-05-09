import request from "../../utils/request";
import Taro from '@tarojs/taro'

let userId = Taro.getStorageSync('userId')
// 获取用户基本信息 -- 暂未用到（首页登录成功后即返回相同信息）
export const getUserBaseInfo = ()=>{
  return request.get(`/api/v1/user/info?userId=${userId}`)
}
// 获取邀请二维码
export const createQRCode = ()=>{
  return request.post(`/api/v1/user/makeInviteQr?userId=${userId}`)
}
// 我的邀请记录
export const inviteHistory = (params)=>{
  return request.get(`/api/v1/invite/user/history?userId=${userId}`,params)
}
// 设置邀请人电话
export const setInvitePhone = (params)=>{
  if(!userId){
    userId = Taro.getStorageSync('userId')
  }
  return request.post(`/api/v1/invite/user/setInviteUser?userId=${userId}&inviteUserMobile=${params.phone}`)
}
