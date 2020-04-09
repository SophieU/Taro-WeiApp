import Taro from '@tarojs/taro'
import {baseUrl,securitySign} from "../config";
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
    type OptionType = {
      url: string,
      data?: object | string,
      method?: any,
      header: object,
      // mode: string,
      success: any,
      error: any,
    }
    const option:OptionType = {
      url: baseUrl + url,
      data: data,
      method: methods,
      header: { 'content-type': contentType, 'securitySign':securitySign},
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
  get(url,data?:object){
    let option = {url, data}
    return this.baseRequest(option)
  },
  post(url,data?:object,contentType?: string){
    let params = {url,data,contentType}
    return this.baseRequest(params,'POST')
  },
  put(url, data?: object) {
    let option = { url, data }
    return this.baseOptions(option, 'PUT')
  },
  delete(url, data?: object) {
    let option = { url, data }
    return this.baseOptions(option, 'DELETE')
  }
}

