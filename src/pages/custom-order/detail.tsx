import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Button,Text} from '@tarojs/components'
import { AtModal,AtRadio , AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui'
import { getDetail, cancelOrder , cancelReason} from './order-apis'
import './detail.scss'


type cancelReason = {
  createTime:string
  id:string
  isValid:string
  orderStateConfig:string
  reasonName:string
}
interface State {
  id:string
  cancelReasonId:string
  orderDetail:object
  cancelReasonLists:Array<cancelReason>
  reasonModal:boolean
  baseInfo:object
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
      cancelReasonLists:[],
      reasonModal:false,
      baseInfo:{}
    }
  }
  componentWillMount(){
    let id = this.$router.params.id
    this.setState({
      id:id
    },()=>{
      this.getOrderDetail()
      this.getCancelReason()
    })
  }
  // 获取订单详情
  getOrderDetail = ()=>{
    const id = this.state.id
    getDetail(id).then(res=>{
      if(res.data.code===0){
        let data = res.data.data
        this.setState({
          orderDetail:res.data.data,
          baseInfo:data.baseInfo
        })
      }
    })
  }
  // 获取取消原因列表
  getCancelReason = ()=>{
    cancelReason().then(res=>{
      if(res.data.code===0){
        let data = res.data.data
        this.setState({
          cancelReasonLists:data
        })
      }
    })
  }
  renderFoot= (status:string)=> {
    switch(status){
      case 'waitPay':
        {
          return (  <View className='page-foot'>
                <View className='ico-wrap'>
                  <View className='ico-item'>
                    <Image className='foot-ico' src={require('../../assets/imgs/tmp/cus-ser.png')}></Image>
                    <View>联系网点</View>
                  </View>
                  <View className='ico-item'>
                    <Image className='foot-ico' src={require('../../assets/imgs/tmp/staff.png')}></Image>
                    <View>联系师傅</View>
                  </View>
                </View>
                <Button className='submit-btn'>支付订单： ￥800.00</Button>
            </View>
          )
        }
        break;
      case 'payed':
      {
        return (<View  className='page-foot'>
          <View className='foot-item'>已付款： ￥1.00</View>
          <Button onClick={this.handleCancelModal} className='submit-btn line-btn'>取消报修</Button>
          <Button className='submit-btn' onClick={()=>this.call('18108242933')}>联系网点</Button>
        </View>)
      }
      break;
      case 'waitOrder':
      {
        return (<View  className='page-foot'>
          <View className='foot-item'>已付款： ￥1.00</View>
          <Button className='submit-btn' onClick={()=>this.call('18108242933')}>联系师傅</Button>
        </View>)
      }
      break;
      case 'cancled':
      {
        return null
      }
      break;
      case 'finished':
      {
        return (<View className='page-foot'>
          <View className='foot-item'>已付款： ￥1.00</View>
          <Button className='submit-btn'>评价详情</Button>
        </View>)
      }
    }
  }
  handleRadioChange = (value)=>{
    this.setState({
      cancelReasonId:value
    })
  }
  handleCancelModal = ()=>{
    this.setState((prevState)=>{
      return {
        reasonModal:!prevState.reasonModal,
        cancelReasonId:'',
      }
    })
  }
  handleConfirmModal= ()=>{
    let params = {
      repairOrderId:this.state.id,
      cancelReasonId:this.state.cancelReasonId
    }
    cancelOrder(params).then(res=>{
      if(res.data.code===0){
        Taro.showToast({
          title:'订单取消成功',
          icon:'none'
        })
        Taro.navigateBack({delta:-1})
      }else{
        Taro.showToast({
          title:'订单取消失败：'+res.data.msg,
          icon:'none'
        })
      }
    })
  }
  // 拔打电话
  call = (phone)=>{
    Taro.makePhoneCall({
      phoneNumber: phone
    })
  }
  render(){
    let cancelReasonArr = []
      this.state.cancelReasonLists.forEach(item=>{
      if(item.isValid==='Y'){
        let obj = {
          label:item.reasonName,
          value:item.id
        }
        cancelReasonArr.push(obj)
      }
    })
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
              <View className='item-info'>{this.state.baseInfo.orderStateName}</View>
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
        <View className='detail-block'>
          <View className='detail-title'>师傅信息</View>
          <View className='detail-info'>
            <View className='info-item'>
              <View className='item-label'>师傅姓名</View>
              <View className='item-info'>张师傅</View>
            </View>
            <View className='info-item'>
              <View className='item-label'>联系电话</View>
              <View className='item-info'><Text className='link-text' onClick={()=>this.call('18108242933')}>136****1234</Text></View>
            </View>
          </View>
        </View>
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
        <View className='detail-block'>
          <View className='detail-title'>故障原因</View>
          <View className='detail-info'>
            <View className='info-item'>
              <View className='item-label'>故障</View>
              <View className='item-info'>软管老化</View>
            </View>
          </View>
        </View>
        <View className='detail-block price-block'>
          <View className='detail-title'>费用清单</View>
          <View className='detail-info'>
            <View className='info-item'>
              <View className='price-label'>
                <View className='item-label'>上门服务费</View>
              </View>
              <View className='item-info'>￥20.00</View>
            </View>
            <View className='info-item'>
              <View className='price-label'>
                <View className='label-title'>软管更换</View>
                <View className='label-tips'>￥ 20.00</View>
              </View>
              <View className='item-label'>x1</View>
              <View className='item-info'>￥20.00</View>
            </View>
            <View className='info-item'>
              <View className='price-label'>
                <View className='label-title'>软管(质保30天)</View>
                <View className='label-tips'>￥ 20.00</View>
              </View>
              <View className='item-label'>x1</View>
              <View className='item-info'>￥50.00</View>
            </View>
          </View>
        </View>
      </View>
      {/*底部操作区*/}
      {this.renderFoot('payed')}
    {/*  取消弹窗*/}
      <AtModal isOpened={this.state.reasonModal} >
        <AtModalHeader>取消原因</AtModalHeader>
        <AtModalContent>
          <AtRadio
            options={cancelReasonArr}
            value={this.state.cancelReasonId}
            onClick={this.handleRadioChange}
          />
        </AtModalContent>
        <AtModalAction>
          <Button  onClick={ this.handleCancelModal }>取消</Button>
          <Button onClick={ this.handleConfirmModal }>确定</Button>
        </AtModalAction>
      </AtModal>
    </View>)
  }
}
export default Lists as ComponentType
