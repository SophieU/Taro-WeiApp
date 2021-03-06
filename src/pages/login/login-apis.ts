import Taro from '@tarojs/taro'
import request from "../../utils/request";
// import {authNow} from "../../utils/common"
import userStore from '../../store/user'
/*
*  user login action
* */
export const loginApp = (registerCallback?:()=>void)=>{
  Taro.login({
    success (res) {
      if (res.code) {
        //发起网络请求
        request.post(`/api/v1/user/xcx/login?code=${res.code}`).then(res=>{
          let data = res.data

          // 新用户，未注册
          if(data.code===1049){
            let openId:string = data.data.openId
            Taro.setStorageSync("wxOpenId",openId)
            Taro.setStorageSync("loginStatus",'new')
            typeof registerCallback==='function'&&registerCallback()
          }else if(data.code===0){
            // 正常登录
            let dataBody = data.data
            Taro.setStorageSync("loginStatus",'success')
            Taro.setStorageSync("userId",dataBody.userId)
            Taro.setStorageSync("accessToken",dataBody.accessToken)
            Taro.setStorageSync("userType",dataBody.userType)
            Taro.setStorageSync('inviteImg',dataBody.inviteQrImgUrl)
            if(dataBody.userType==='SERVICE_USER'||dataBody.userType==='ADMIN'){
              let {masterId,repairStationId,businessState,masterRoleCode,isServiceUser,masterName,repairStationName} = dataBody
              let masterObj = {masterId,repairStationId,businessState,masterRoleCode,isServiceUser,masterName,repairStationName}
              Taro.setStorageSync("masterInfo",masterObj)
            }

            request.setAccessToken(dataBody.accessToken)
            userStore.setAPIUserInfo(dataBody)
            userStore.setUserAccount(dataBody.userAccount)

          }else{
            console.log(data)
            Taro.setStorageSync("loginStatus",'fail')
          }
        })
      } else {
        console.log('登录失败！' + res.errMsg)
      }
    }
  })

}

/*
* 新用户注册并登录
* */
export const registerPhone = (params)=>{
  let openId = Taro.getStorageSync('wxOpenId')
  let inviteUserPhone = Taro.getStorageSync('invitePhone')
  params.openId = openId
  if(inviteUserPhone){
    params.inviteUserPhone=inviteUserPhone
    params.isInvite='Y'
  }
  return request.post(`/api/v1/user/xcx/authBindPhone`,params)
}
