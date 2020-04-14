import request from "../../utils/request";
import Taro from '@tarojs/taro'

// banner, 推荐位，icon行
export const getBannerLists = ()=>{
  return request.get(`/api/v1/eService/index/banner/list`)
}

// 服务分类列表-首页
export const getServiceLists = (params)=>{
  return request.get(`/api/v1/eService/index/categoryPageList`,params)
}
// 服务分类列表-全部（更多）
export const getServiceAll = ()=>{
  return request.get(`/api/v1/eService/index/category/all`)
}
