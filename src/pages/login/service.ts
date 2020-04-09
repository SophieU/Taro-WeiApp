import Taro from '@tarojs/taro'
import request from "../../utils/request";
import {authNow} from "../../utils/common"
/*
*  user login action
* */
export const loginApp = ()=>{
  Taro.login({
    success (res) {
      if (res.code) {
        //发起网络请求
        console.log(res.code)
        request.post(`/api/v1/user/xcx/login?code=${res.code}`).then(res=>{
          let data = res.data
          if(data.code===1049){
            // not register,need to register
            let openId:string = data.data.openId
            registerPhone(openId)
          }else if(data.code===200){
            // normal login
            registerPhone()
          }else{
            console.log(data)
          }
        })
      } else {
        console.log('登录失败！' + res.errMsg)
      }
    }
  })

}

export const registerPhone = (openId:string)=>{
  // get user phone and register
  request.post(`/api/v1/user/xcx/authBindPhone?openId=${openId}&encryptedData=xxxx&iv=xxx&inviteUserPhone=邀请人手机号码（允许为空）&isInvite=Y（允许为空）`)
}
