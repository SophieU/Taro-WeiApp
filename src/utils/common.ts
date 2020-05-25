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
          },
          fail(err){
            console.log(err)
            // Taro.showModal({
            //
            // })
          }
        })
      }
    }
  })
}

/*
* @description 地理位置授权
* */
export const getLocationAuth = (cb:Function)=>{
  Taro.getSetting({
    success(res) {
      if (!res.authSetting['scope.userLocation']) {
        Taro.authorize({
          scope: 'scope.userLocation',
          success () {
            cb()
          }
        })
      }else{
        cb()
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

/*
*   @description 全局跳转处理，根据不同service-code对应跳转
* */
export const jumpTo = (info,otherType?:string)=>{
  let needLogin = info.needLogin
  let type = info.serviceCategoryCode || info.recommendCategoryCode
  let userId = Taro.getStorageSync('userId')
  if(needLogin==='Y'&&!userId){
    Taro.showModal({
      title:'温馨提醒',
      content:'请先登录再操作',
    }).then(res =>{
      if(res.confirm){
        Taro.navigateTo({
          url:'/pages/login/toggle-login'
        })
      }
    })
    return
  }
  /**
   * serviceCategoryCode类型有以下几种情况
   * 1、E_SERVICE_CATEGORY  报修项目分类【到更多服务】
   * 2、E_PROJECT 报修项目【到订单确认页面】
   * 3、H5 打开某个H5页面 【打开某个H5页面】
   * 4、APP_JUMP 跳转到小程序某个页面 【跳转到某个小程序页面】
   */
  if(type==='E_PROJECT'||otherType==='E_PROJECT'){
    // 跳转订单确认#报修项目#
    Taro.navigateTo({
      url:`/pages/order/order-submit?id=${info.target||info.id}`
    })
  }else if(type==='E_SERVICE_CATEGORY'){
    // 跳转更多服务#报修项目分类#
    Taro.navigateTo({
      url:`/pages/index/more-service?id=${info.target}`
    })
  }else if(type==='APP_JUMP'){
    // 中转APP内页
    Taro.navigateTo({
      url:info.target
    })
  }else if(type==='H5'){
    // 打开H5
    if(!info.target) return;
    Taro.navigateTo({
      url:`/pages/index/web-view?target=${info.target}`
    })
  }
}
// 设置UserInfo
// 简易深克隆
export const simpleClone = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}


