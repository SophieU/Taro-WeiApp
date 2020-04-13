import request from "../../utils/request";
import Taro from '@tarojs/taro'

export const getBannerLists = ()=>{
  return request.get(`/api/v1/eService/index/banner/list`)
}

export const getServiceLists = (params)=>{
  return request.get(`/api/v1/eService/index/categoryPageList`,params)
}
