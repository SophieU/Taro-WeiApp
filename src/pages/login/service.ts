import Taro from '@tarojs/taro'
import request from "../../utils/request";
// import {authNow} from "../../utils/common"
import userStore from '../../store/user'
/*
*  user login action
* */
export const loginApp = ()=>{
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
          }else if(data.code===0){
            // 正常登录
            let dataBody = data.data
            Taro.setStorageSync("loginStatus",'success')
            Taro.setStorageSync("userId",dataBody.userId)
            Taro.setStorageSync("userType",dataBody.userType)
            let apiUserInfo = {
              userPhone: dataBody.username,
              userType: dataBody.userType,
              userId: dataBody.userId
            }
            request.setAccessToken(dataBody.accessToken)
            userStore.setAPIUserInfo(apiUserInfo)
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
* new user to register and mark invite user phone
* */
export const registerPhone = (params)=>{
  let openId = Taro.getStorageSync('wxOpenId')
  let inviteUserPhone = Taro.getStorageSync('invitePhone')
  params.openId = openId
  let queryString = `openId=${openId}
   $encryptedData=${params.encryptedData}
   &iv=${params.iv}
   `
  if(inviteUserPhone){
    queryString+=`inviteUserPhone=${inviteUserPhone}&isInvite=Y`
  }
  return request.post(`/api/v1/user/xcx/authBindPhone?${queryString}`)
}
