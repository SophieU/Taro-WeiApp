import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Button, Text, Block} from '@tarojs/components'
import {customOrderLists} from './mall-apis'
import {getWxPay} from '../order/order-api'
import './order-lists.scss'

class OrderListsCustom extends  Component{
  config: Config={
    navigationBarTitleText:'订单列表',
    navigationStyle:'default'
  }
  state={
    pageNo:1,
    pageSize:5,
    hasNextPage:true,
    lists:[]
  }
  onPullDownRefresh(){
    this.setState({
      pageNo:1,
      pageSize:5,
      hasNextPage:true,
      lists:[]
    },()=>{
      this.getLists()
    })
  }
  onReachBottom(){
    this.getLists()
  }
  componentWillMount(){
    this.getLists()
  }
  getLists = ()=>{
    let {pageNo,pageSize,hasNextPage} = this.state
    let params = {
      pageNo,
      pageSize
    }
    let bodyParams = {userId:Taro.getStorageSync('userId')}
    if(!hasNextPage){
      Taro.showToast({
        title:'没有更多了~',
        icon:'none'
      })
      return
    }
    Taro.showLoading({title:'加载中'})
    customOrderLists(params,bodyParams).then(res=>{
      Taro.hideLoading()
      Taro.stopPullDownRefresh()
      if(res.data.code===0){
        let data = res.data.data
        this.setState(prevState=>{
          return {
            pageNo:data.hasNextPage?data.nextPage:data.pageNo,
            hasNextPage:data.hasNextPage,
            lists:prevState.lists.concat(data.list)
          }
        })
      }
    })
  }
  payNow = (id)=>{
    let params = {
      orderIds:[id],
      payBusinessType:'BOOKING_ORDER',
      payCode:'WX_XCX'
    }
    getWxPay(params).then(res=>{
      const _this = this
      if(res.data.code===0){
        let data = res.data.data
        Taro.requestPayment({
          ...data,
          success:()=>{
            Taro.showToast({title:'支付成功',icon:'none'})
            this.setState({
              lists:[],
              pageNo:1,
              hasNextPage:true,
            },()=>{
              _this.getLists()
            })
          },
          fail (res) {
            console.log('接口调用失败')
            console.log('支付失败')
          },
        })
      }else{
        Taro.showToast({title:res.data.msg})
      }
    })
  }
  call(phone){
    Taro.makePhoneCall({
      phoneNumber:phone
    })
  }
  render(){
    return (
      <View className='page custom-lists'>
          <View className='order-lists'>
            {
              this.state.lists.map(item=>{
                return ( <View className='order-item' key={item.orderSn}>
                  <View className='order-top'>
                    <View className='order-title'>订单{item.orderSn}</View>
                    <View className='order-status'>
                      <Text className='text-green'>{item.orderStateName}</Text>
                    </View>
                  </View>
                  <View className="order-body">
                    <Image className='order-img' src={item.productImage}></Image>
                    <View className="order-info">
                      <View className="item-row-flex">
                        <View className='goods-title'>{item.productName}</View>
                        <View className='goods-price'>￥{item.orderAmount}</View>
                      </View>
                      <View className='item-row'>
                        <View className="goods-tips">服务师傅：{item.repairServiceUserName} <Text onClick={()=>Taro.makePhoneCall({phoneNumber:item.repairServiceUserPhone})} className='text-blue'>({item.repairServiceUserPhone})</Text></View>
                        <View className="goods-tips">上门时间：{item.hopeDoorTime}</View>
                        <View className="goods-tips">服务地址：{item.repairAddress}</View>
                      </View>
                    </View>
                  </View>
                  <View className="other-info">
                    {item.payTime?<View className="info-row">支付时间：{item.payTime}</View>:null}
                    {
                      item.username?(<Block>
                        <View className="info-row">用户电话：{item.userPhone}</View>
                        <View className="info-row">用户姓名：{item.username}</View>
                      </Block>):null
                    }

                  </View>
                  {
                    item.orderStateName==='待付款'?(
                      <View className='control-foot'>
                        <Button onClick={()=>this.call(item.repairServiceUserPhone)} className='pay-btn primary-btn'>联系师傅</Button>
                        <Button onClick={()=>this.payNow(item.id)} className='pay-btn orange-btn'>现在付款</Button>
                      </View>
                    ):null
                  }

                </View>)
              })
            }
          </View>
      </View>
    )
  }
}
export default OrderListsCustom as ComponentType
