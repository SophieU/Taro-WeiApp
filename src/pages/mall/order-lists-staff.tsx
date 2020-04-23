import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Button, Text, Block} from '@tarojs/components'
import { AtTabs,AtActionSheet, AtActionSheetItem  } from 'taro-ui'
import {customOrderLists,grabOrder} from './mall-apis'
import {observer,inject} from '@tarojs/mobx'
import './order-lists.scss'

@inject('appStore')
@observer
class OrderListsStaff extends  Component{
  config: Config={
    navigationBarTitleText:'预约订单',
    navigationStyle:'default'
  }
  constructor(props) {
    super(props);
    this.state={
      current: 0,
      pageNo:1,
      pageSize:5,
      lists:[],
      showAction:false,
      id:'',
    }
  }
  componentWillMount(){
    this.getLists()
  }
  // 抢单
  getGrag=(id)=>{
    let params = {
      "orderId":id,
      "serviceUserId":Taro.getStorageSync('masterInfo').masterId
    }
    grabOrder(params).then(res=>{
      if(res.data.code===0){
        Taro.showToast({title:'抢单成功'}).then(()=>{
          this.setState({
            pageNo:1,
            current:0,
            lists:[],
            hasNextPage:true
          },()=>{
            this.getLists()
          })
        })

      }else{
        Taro.showToast({title:'抢单失败：'+res.data.msg,icon:'none'})
      }
    })
  }
  getLists=()=>{
    let {current,pageNo,pageSize} = this.state
    const masterInfo = Taro.getStorageSync('masterInfo')
    let params = {}
    switch (current) {
      case 0:
        params={
          "searchType":"VYING",
          "repairStationId":masterInfo.repairStationId,
        }
        break;
      case 1:
        params={
          "searchType":"STAY_SERVICE",
          "serviceUserId":masterInfo.masterId,
          "repairStationId":masterInfo.repairStationId,
        }
        break;
      case 2:
        params = {
          "serviceUserId":masterInfo.masterId,
          "repairStationId":masterInfo.repairStationId,
          "searchType":"FINISH",
        }
    }
    let query = {
      pageNo,
      pageSize,
      userId:Taro.getStorageSync('userId')
    }
    Taro.showLoading({title:'加载中'})
    customOrderLists(query,params).then(res=>{
      Taro.hideLoading()
      if(res.data.code===0){
        let data = res.data.data
        this.setState(prevState=>{
          return {
            hasNextPage:data.hasNextPage,
            pageNo:data.hasNextPage?data.nextPage:data.pageNo,
            lists:prevState.lists.concat(data.list)
          }
        })
      }
    })
  }
  handleClick=(index)=>{
    this.setState({
      current: index,
      pageNo:1,
      hasNextPage:true
    },()=>{
      this.getLists()
    })
  }
  // 打开收款操作
  setPay=(item)=>{
    console.log(this.props)
    this.setState({
      id:item.id,
      showAction:true,
      controlOrder:item
    })
  }
  // 等待用户端支付
  waitPay=(type)=>{
    let {setBookOrderDetail}  = this.props.appStore

    this.setState({
      showAction:false
    },()=>{
      if(type==='user'){
        Taro.showToast({
          title:'等待用户支付中',
          icon:'loading',
          duration:120000
        })
      }else if(type==='qr-code'){
        setBookOrderDetail(this.state.controlOrder)
        Taro.navigateTo({
          url:'/pages/staff-order/pay?type=book&id='+this.state.id
        })
      }
    })

  }
  // 设置报价弹窗
  setPrice= (item)=>{

  }
  render(){
    return (
      <View className='page order-lists-custom'>
        <AtTabs current={this.state.current} tabList={[
          { title: '抢单' },
          { title: '待服务' },
          { title: '已完成' },
        ]} onClick={this.handleClick}>
        </AtTabs>
        <View className='order-lists'>
          {
            this.state.lists.map(item=>{
              return (<View className='order-item' key={item.id}>
                <View className='order-top'>
                  <View className='order-title'>{item.orderSn}</View>
                </View>
                <View className='order-body'>
                  <View className='item-row'>
                    <Image className='order-img' src={item.productImage}></Image>
                    <View className='goods-detail'>
                      <View className='goods-title'>{item.productName}</View>
                      <View className='goods-time'>上门时间：{item.hopeDoorTime}</View>
                      <View className='goods-time'>下单时间：{item.addTime}</View>
                      <View className='price'>价格：<Text className='text-warm'>￥ {item.productAmount}</Text></View>
                    </View>
                  </View>
                </View>
                <View className='btn-group'>
                  {this.state.current===0?<Button onClick={()=>this.getGrag(item.id)} className='btn orange-btn'>抢单</Button>:null}
                  {
                    this.state.current===1?
                      (<Block>
                        <Button className='btn primary-btn' onClick={()=>this.setPay(item)}>收款</Button>
                        {item?<Button className='btn orange-btn' onClick={()=>this.setPrice(item)}>报价</Button>:null}
                      </Block>):null
                  }
                </View>
              </View>)
            })
          }
        </View>
        {/* 底部操作区 */}
        <AtActionSheet isOpened={this.state.showAction} cancelText='取消' title='请选择收款方式'>
          <AtActionSheetItem onClick={()=>this.waitPay('user')}>
            用户端支付
          </AtActionSheetItem>
          <AtActionSheetItem onClick={()=>this.waitPay('qr-code')}>
            二维码收款
          </AtActionSheetItem>
        </AtActionSheet>
      </View>
    )
  }
}
export default OrderListsStaff as ComponentType
