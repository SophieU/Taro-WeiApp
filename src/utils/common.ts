import Taro from '@tarojs/taro'

/*
*  get the weixin auth setting & judge
* */
export const authNow = ()=>{
  Taro.getSetting({
    success: function (res) {
      if (res.authSetting['scope.userInfo']) {
        // 已经授权，可以直接调用 getUserInfo 获取头像昵称
        Taro.getUserInfo({
          success: function(res) {
            console.log(res.userInfo)
          }
        })
      }else{
        Taro.authorize({
          scope: 'scope.userInfo',
          success () {
            Taro.getUserInfo({
              success: function(res) {
                console.log(res.userInfo)
              }
            })
          }
        })
      }
    }
  })
}
