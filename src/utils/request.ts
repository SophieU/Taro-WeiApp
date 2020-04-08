import Taro from '@tarojs/taro'
import {baseUrl} from "../config";
import {HTTP_STATUS} from './status'

const token=''
export const logError = (name,action,info?:any)=>{
  if(!info){
    info='empty'
  }
  try{
    let deviceInfo = Taro.getSystemInfoSync()
    var device = JSON.stringify(deviceInfo)
    let time = new Date()
    console.error(time.toLocaleDateString(),name,action,info,device)
  }catch (e) {
    console.error('not support getSystemInfoSync api', e.message)
  }

  if(typeof info==='object'){
    info = JSON.stringify(info)
  }
}
export default {
  baseRequest(params,methods='GET'){
    let { url, data } = params
    let contentType = 'application/x-www-form-urlencoded'
    contentType = params.contentType || contentType
    const option = {
      url: baseUrl + url,
      data: data,
      method: methods,
      header: { 'content-type': contentType, 'token':token},
      success(res){
        if(res.statusCode === HTTP_STATUS.NOT_FOUND){
          return logError('api','请求资源不存在')
        }else if(res.statusCode===HTTP_STATUS.BAD_GATEWAY){
          return logError('api','服务端出现了问题')
        }else if(res.statusCode === HTTP_STATUS.FORBIDDEN){
          return logError('api','没有权限访问')
        }else if(res.statusCode === HTTP_STATUS.SUCCESS){
          return res.data
        }
      },
      error(e){
        logError('api','请求接口出现问题',e)
      }
    }
    return Taro.request(option)
  },
  get(url,data=''){
    let option = {url, data}
    return this.baseRequest(option)
  },
  post(url,data,contentType){
    let params = {url,data,contentType}
    return this.baseRequest(params,'POST')
  }
}

