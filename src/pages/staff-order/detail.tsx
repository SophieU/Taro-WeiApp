import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Button,Text} from '@tarojs/components'
import { AtActionSheet, AtActionSheetItem } from 'taro-ui'
import {getWxPay} from "../order/order-api";
import {orderDetail} from './staff-apis'
import {simpleClone} from '../../utils/common'
import './order.scss'



interface State {
  id:string
  cancelReasonId:string
  orderDetail:object
  reasonModal:boolean
  baseInfo:object
  repairOrderOfferPlanVoList:Array<object>
  repairOrderAmountVos:Array<object>
  dispatchInfo:object|null
  totalAmount:number
  showAction:boolean
  repairOrderDispatchId:string
}
class Lists extends Component<{},State>{
  config:Config = {
    navigationBarTitleText:'报修详情',
    navigationStyle:'default'
  }
  constructor() {
    super();
    this.state = {
      id:'',
      cancelReasonId:'',
      orderDetail:{},
      reasonModal:false,
      baseInfo:{orderState:'ASSIGNED'},
      repairOrderOfferPlanVoList:[],
      dispatchInfo:null,
      repairOrderAmountVos:[],
      totalAmount:0,
      showAction:false,
      repairOrderDispatchId:'', //派单Id，用于重新报价时
    }
  }
  componentDidShow(){
    let id = this.$router.params.id
    this.setState({
      id:id
    },()=>{
      this.getOrderDetail()
    })
  }

  // 获取订单详情
  getOrderDetail = ()=>{
    const id = this.state.id
    orderDetail(id).then(res=>{
      if(res.data.code===0){
        let data = res.data.data
        let totalAmount = 0
        data.repairOrderAmountVos.map(item=>{
          if(item.type= "ALL_AMOUNT"){
            totalAmount=item.amount
          }
        })
        this.setState({
          orderDetail:res.data.data,
          baseInfo:data.baseInfo,
          repairOrderDispatchId:data.baseInfo.repairOrderDispatchId,
          repairOrderOfferPlanVoList:data.repairOrderOfferPlanVoList,
          dispatchInfo:data.dispatchInfo,
          repairOrderAmountVos:data.repairOrderAmountVos,
          totalAmount:totalAmount
        })
      }
    })
  }
  // 等待用户端支付
  waitPay=(type)=>{
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
        Taro.navigateTo({
          url:'/pages/staff-order/pay?type=staff&id='+this.state.id
        })
      }
    })

  }
  // 支付成功
  orderSuccess= ()=>{
    Taro.showModal({
      content:'订单支付成功，可在【我的】-【报修订单】中查看',
      confirmText:'查看订单',
      cancelText:'回到首页',
      success:(res)=>{
        if(res.confirm){
          Taro.reLaunch({
            url:'/pages/mine/mine'
          })
        }else{
          Taro.reLaunch({
            url:'/pages/index/index'
          })
        }
      }
    })
  }
  sureOrder= ()=>{
    this.setState({
      showAction:true
    })
  }
  resetPrice = ()=>{
    let queryStr=`id=${this.state.id}&dispatchId=${this.state.repairOrderDispatchId}`
    Taro.navigateTo({url:`/pages/staff-order/quote?${queryStr}`})
  }
  // 拔打电话
  call = (phone)=>{
    Taro.makePhoneCall({
      phoneNumber: phone
    })
  }
  renderFoot(){
    const {baseInfo,repairOrderAmountVos} = this.state
    let total = 0
    repairOrderAmountVos.forEach(item=>{
      if(item.type==='ALL_AMOUNT'){
        total=item.amount
      }
    })
    switch (baseInfo.orderStateName) {
      case '待上门':
      {
        return ( <View  className='page-foot'>
          <View className="btn-group">
            <Button className='orange-btn lang-btn' onClick={this.resetPrice}>生成报价</Button>
          </View>
        </View>)
      }
      break;
      case '待付款':
      {
        return ( <View  className='page-foot'>
          <View className='foot-item'>总计： ￥{total}</View>
          <View className="btn-group">
            <Button className='primary-btn' onClick={this.resetPrice}>重新报价</Button>
            <Button className='submit-btn' onClick={this.sureOrder}>确认</Button>
          </View>
        </View>)
      }
    }
  }
  render(){

    return (<View className='page detail-page'>
      <View className='info-wrap'>
        <View className='detail-block'>
          <View className='detail-title'>工单信息</View>
          <View className='detail-info'>
            <View className='info-item'>
              <View className='item-label'>报修时间</View>
              <View className='item-info'>{this.state.baseInfo.createTime}</View>
            </View>
            <View className='info-item'>
              <View className='item-label'>工单单号</View>
              <View className='item-info'>{this.state.baseInfo.orderSn}</View>
            </View>
            <View className='info-item'>
              <View className='item-label'>工单状态</View>
              <View className='text-warm'>{this.state.baseInfo.orderStateName}</View>
            </View>
            <View className='info-item'>
              <View className='item-label'>服务网点</View>
              <View className='item-info'>{this.state.baseInfo.stationName}</View>
            </View>
            <View className='info-item'>
              <View className='item-label'>网点电话</View>
              <View className='item-info'>{this.state.baseInfo.stationPhone}</View>
            </View>
          </View>
        </View>
        {
          !!this.state.dispatchInfo?(
            <View className='detail-block'>
              <View className='detail-title'>师傅信息</View>
              <View className='detail-info'>
                <View className='info-item'>
                  <View className='item-label'>师傅姓名</View>
                  <View className='item-info'>{this.state.dispatchInfo.masterName}</View>
                </View>
                <View className='info-item'>
                  <View className='item-label'>联系电话</View>
                  <View className='item-info'><Text className='link-text' onClick={()=>this.call(this.state.dispatchInfo.masterPhone)}>{this.state.dispatchInfo.masterPhone}</Text></View>
                </View>
              </View>
            </View>
          ):null
        }
        <View className='detail-block'>
          <View className='detail-title'>基础信息</View>
          <View className='detail-info'>
            <View className='info-item'>
              <View className='item-label'>维修区域</View>
              <View className='item-info'>{this.state.baseInfo.repairRegionName}</View>
            </View>
            <View className='info-item'>
              <View className='item-label'>详细地址</View>
              <View className='item-info'>{this.state.baseInfo.address}</View>
            </View>
            <View className='info-item'>
              <View className='item-label'>联系电话</View>
              <View className='item-info'>{this.state.baseInfo.userPhone}</View>
            </View>
            <View className='info-item'>
              <View className='item-label'>报修类别</View>
              <View className='item-info'>{this.state.baseInfo.repairCategoryName}</View>
            </View>
          </View>
        </View>
        <View className='detail-block price-block'>
          <View className='detail-title'>费用清单</View>
          <View className='detail-info'>
            {
              this.state.repairOrderAmountVos.map(item=>{
                return (<View key={item.id} className='info-item'>
                  <View className='price-label'>
                    <View className='item-label'>{item.name}</View>
                  </View>
                  <View className='item-info'>￥{item.amount}</View>
                </View>)
              })
            }
          </View>
        </View>
        <View className='detail-block price-block'>
          <View className='detail-title'>费用明细</View>
          <View className='detail-info'>
            {
              this.state.repairOrderOfferPlanVoList.map(item=>{
                return (<View key={item.id} className='info-item'>
                  <View className='price-label'>
                    <View className='item-label'>{item.planName}</View>
                  </View>
                  <View className='item-info'>￥{item.amount}</View>
                </View>)
              })
            }
          </View>
        </View>

      </View>
      {/*底部操作区*/}
      {this.renderFoot()}
      {/* 底部操作区 */}
      <AtActionSheet isOpened={this.state.showAction} cancelText='取消' title='请选择收款方式'>
        <AtActionSheetItem onClick={()=>this.waitPay('user')}>
          用户端支付
        </AtActionSheetItem>
        <AtActionSheetItem onClick={()=>this.waitPay('qr-code')}>
          二维码收款
        </AtActionSheetItem>
      </AtActionSheet>

    </View>)


  }
}
export default Lists as ComponentType
