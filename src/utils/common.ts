import Taro from '@tarojs/taro'

/*
*  @description get the weixin auth setting & judge
* */
export const getUserInfo  = (callback:(userInfo)=>void)=>{
  Taro.getSetting({
    success: function (res) {
      if (res.authSetting['scope.userInfo']) {
        // 已经授权，可以直接调用 getUserInfo 获取头像昵称
        Taro.getUserInfo({
          success: function(res) {
            let userInfo = res.userInfo
            Taro.setStorageSync('userInfo',userInfo)
            callback(userInfo)
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

/*
*  @description  解析字符串为json格式
*  @params {string}  query  待解析字符串
*  @params {string}  separator  分隔符
* */
export const decodeQueryString = (query:string,separator:string='&'):object=>{
  if(!query) return {}
  let queryArr:Array<string> = query.split(separator)
  let resObj = {}
  queryArr.forEach(item=>{
    let itemArr = item.split('=')
    resObj[itemArr[0]] = itemArr[1]
  })
  return  resObj
}

/*
*   @description 未登录用户操作时，弹窗提醒跳转登录
* */
export const loginStatusFilter = (callback:()=>any)=>{
  let loginStatus = Taro.getStorageSync('loginStatus')
  if(loginStatus!=='success'){
    Taro.showModal({
      title: '温馨提醒',
      content:'您还未登录，是否前往登录？',
      confirmText:'前往',
    }).then(res=>{
      if(res.confirm){
        Taro.navigateTo({url:'/pages/login/toggle-login'})
      }
    })
  }
  callback()
}

/*
*   @description 将对象转化为query string格式
*   @method objToQuery
*   @params {object} source 源对象
*   @return {string}  转换后query string
* */
export const objToQuery= (source:object):string => {
  let res=''
  for(let key in source){
    res+=`${key}=${source[key]}&`
  }
  // 移除末位&号
  if(res.length>0){
    res = res.substr(0,res.length-1)
  }
  return res
}
