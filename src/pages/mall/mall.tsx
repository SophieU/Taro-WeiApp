import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Button, Text, Navigator, ScrollView} from '@tarojs/components'
import {subscribeLists } from './mall-apis'
import './mall.scss'

class Mall extends  Component{
  config: Config={
    navigationBarTitleText:'预约商城',
    navigationStyle:'default'
  }
  state={
    pageNo:1,
    pageSize:10,
    hasNextPage:true,
    lists:[]
  }
  componentWillMount(){
    this.getSubscribeLists()
  }
  onPullDownRefresh(){
    this.getSubscribeLists()
  }
  onReachBottom(){
    this.getSubscribeLists()
  }
  getSubscribeLists = ()=>{
    let {pageNo,pageSize,hasNextPage} = this.state
    if(!hasNextPage){
      Taro.showToast({
        title:'没有更多了~',
        icon:'none'
      })
      return
    }
    let params = {
      pageNo:pageNo,
      pageSize:pageSize
    }
    Taro.showLoading({title:'加载中'})
    subscribeLists(params).then(res=>{
      Taro.hideLoading()
      Taro.stopPullDownRefresh()
      if(res.data.code===0){
        let data = res.data.data
        this.setState(preState=>{
          return {
            lists:preState.lists.concat(data.list),
            hasNextPage:data.hasNextPage,
            pageNo:data.hasNextPage?data.nextPage:data.pageNo
          }
        })
      }
    })
  }
  render(){
    return (
      <View className='page'>
          <View className='mall-lists'>
            {
              this.state.lists.map(item=>{
                return (<View className='mall-item' key={item.productId}>
                  <Navigator className='goods-img-nav' url={'/pages/mall/goods-detail?id='+item.productId}>
                    <Image className='goods-img' src={item.productImage}></Image>
                  </Navigator>
                  <View className='goods-title'>{item.productName}</View>
                  <View className='goods-foot'>
                    <View className='goods-price'>￥ {item.productPrice}</View>
                    <Navigator className='buy-now' url={'/pages/mall/order-now?id='+item.productId}>立即预约</Navigator>
                  </View>
                </View>)
              })
            }
          </View>
      </View>
    )
  }
}
export default Mall as ComponentType
