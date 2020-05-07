import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Button,Text} from '@tarojs/components'
import { AtActionSheet, AtActionSheetItem ,AtToast} from 'taro-ui'
import {orderDetail, payResCustom} from './staff-apis'

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
  countDown:number
  timer:string|object
}
class Lists extends Component{
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
      timer:null, // 轮询定时器
      countDown:120,
      waitPayToast:false,
      commentInfo:null,
    }
  }
  componentDidShow(){
    this.loadPage()
  }
  componentWillUnmount(){
    clearInterval(this.state.timer)
  }
  loadPage(){
    let id = this.$router.params.id
    this.setState({
      id:id,
      counteDown:120,
      waitPayToast:false,
      timer:null,
    },()=>{
      this.getOrderDetail()
    })
  }
  // 轮询获取支付结果
  getPayResult = ()=>{
    payResCustom(this.state.repairOrderDispatchId).then(res=>{
      if(res.data.code===0){
        this.setState({
          payRes:res.data.data
        })
        if(res.data.data==='Y'){
          Taro.showToast({
            title:'收款成功'
          }).then(()=>setTimeout(()=>{
            let { timer} = this.state
            clearInterval(timer)
            this.loadPage()
          },1000))
        }
      }
    })
  }
  // 订单申述
  appealOrder= ()=>{
    let {id,baseInfo} = this.state
    let query = `id=${id}&orderSn=${baseInfo.orderSn}&orderState=${baseInfo.orderStateName}&repaireType=${baseInfo.repairCategoryName}`
    Taro.navigateTo({url:'/pages/staff-order/refuse?'+query)
  }
  // 获取订单详情
  getOrderDetail = ()=>{
    const id = this.state.id
    Taro.showLoading({title:'信息加载中',icon:'none'})
    orderDetail(id).then(res=>{
      Taro.hideLoading()
      if(res.data.code===0){
        let data = res.data.data
        let totalAmount = 0
        if(data.repairOrderAmountVos){
          data.repairOrderAmountVos.map(item=>{
            if(item.type= "ALL_AMOUNT"){
              totalAmount=item.amount
            }
          })
        }

        this.setState({
          orderDetail:res.data.data,
          baseInfo:data.baseInfo,
          repairOrderDispatchId:data.baseInfo.repairOrderDispatchId,
          repairOrderOfferPlanVoList:data.repairOrderOfferPlanVoList,
          dispatchInfo:data.dispatchInfo,
          repairOrderAmountVos:data.repairOrderAmountVos,
          totalAmount:totalAmount,
          commentInfo:data.commentInfo
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
        let timer = setInterval(()=>{
          if(!this.state.timer){
            this.setState({
              timer,
              waitPayToast:true
            })
          }
          if(this.state.countDown<=0){
            clearInterval(this.state.timer)
            Taro.hideLoading()
            this.setState({
              countDown:120,
              waitPayToast:false,
              timer:null
            })
          }else{
            this.setState(prevState=>{
              countDown:prevState.countDown--
            })
          }
          // 间隔3秒轮询
          if(this.state.countDown%3===0){
            this.getPayResult()
          }
        },1000)
      }else if(type==='qr-code'){
        Taro.navigateTo({
          url:'/pages/staff-order/pay?type=staff&id='+this.state.id
        })
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
            <Button className='primary-btn btn' onClick={this.appealOrder}>申述</Button>
            <Button className='orange-btn btn' onClick={this.resetPrice}>生成报价</Button>
          </View>
        </View>)
      }
      break;
      case '待付款':
      {
        return ( <View  className='page-foot'>
          <View className='foot-item'>￥{total}</View>
          <View className="btn-group">
            <Button className='primary-btn btn' onClick={this.appealOrder}>申述</Button>
            <Button className='primary-btn btn' onClick={this.resetPrice}>重新报价</Button>
            <Button className='submit-btn btn' onClick={this.sureOrder}>收款</Button>
          </View>
        </View>)
      }
        break;
    case '异常':
      {
        return ( <View  className='page-foot'>
          <View className='foot-item'>￥{total}</View>
          <View className="btn-group">
            <Button className='primary-btn btn' onClick={this.resetPrice}>重新报价</Button>
            <Button className='submit-btn btn' onClick={this.sureOrder}>收款</Button>
          </View>
        </View>)
      }
        break;

    }
  }

  render(){
    const stateText = this.state.baseInfo.orderStateName
    return (<View className='page detail-page'>
      <View className='info-wrap'>
        <View className='detail-block'>
          <View className='detail-title'>工单信息</View>
          <View className='detail-info'>
            <View className='info-item'>
              <View className='item-label'>报修信息</View>
              <View className='item-info'>{this.state.baseInfo.repairCategoryName}</View>
            </View>
            <View className='info-item'>
              <View className='item-label'>工单编号</View>
              <View className='item-info'>{this.state.baseInfo.orderSn}</View>
            </View>
            <View className='info-item'>
              <View className='item-label'>工单状态</View>
              {stateText==='待接单'||stateText==='已完成'?<View className='text-green'>{stateText}</View>:null}
              {stateText==='待上门'||stateText==='待付款'?<View className='text-warm'>{stateText}</View>:null}
              {stateText==='已取消'||stateText==='已接单'?<View className='text-blue'>{stateText}</View>:null}
              {stateText==='已关闭'||stateText==='异常'?<View className='text-grey'>{stateText}</View>:null}
            </View>
            <View className='info-item'>
              <View className='item-label'>下单时间</View>
              <View className='item-info'>{this.state.baseInfo.createTime}</View>
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
          <View className='detail-title'>用户信息</View>
          <View className='detail-info'>
            <View className='info-item'>
              <View className='item-label'>联系人</View>
              <View className='item-info'>{this.state.baseInfo.username}</View>
            </View>
            <View className='info-item'>
              <View className='item-label'>联系电话</View>
              <View className='item-info link-text' onClick={()=>this.call(this.state.baseInfo.userPhone)}>{this.state.baseInfo.userPhone}</View>
            </View>
            <View className='info-item'>
              <View className='item-label'>详细地址</View>
              <View className='item-info'>{this.state.baseInfo.address}</View>
            </View>

          </View>
        </View>
        {
          this.state.repairOrderAmountVos.length>0?(<View className='detail-block price-block'>
            <View className='detail-title'>费用清单</View>
            <View className='detail-info'>
              {
                this.state.repairOrderAmountVos.map(item=>{
                  return (<View key={item.id} className='info-item'>
                    <View className='item-label'>{item.name}</View>
                    <View className='item-info text-warm'>￥{item.amount}</View>
                  </View>)
                })
              }
            </View>
          </View>):null
        }

        {
          this.state.repairOrderOfferPlanVoList.length>0?( <View className='detail-block price-block'>
            <View className='detail-title'>费用明细</View>
            <View className='detail-info'>
              {this.state.repairOrderOfferPlanVoList.map(item=>{
                return (<View key={item.id} className='info-item'>
                  <View className='item-label'>{item.planName}</View>
                  <View className='item-info '>
                    <Text className='text-warm'>￥{item.amount}</Text>
                    {item.isPay==='Y'?<Text className='text-grey'>（已支付）</Text>:null}
                  </View>
                </View>)
              })}
            </View>
          </View>):null
        }

        {
          this.state.baseInfo.statementReasonName?(
            <View className='detail-block'>
              <View className='detail-title'>申述信息</View>
              <View className='detail-info'>
                <View className='info-item'>
                  <View className='item-label'>申述原因</View>
                  <View className='item-info'>{this.state.baseInfo.statementReasonName}</View>
                </View>
                <View className='info-item'>
                  <View className='item-label'>申述请求</View>
                  <View className='item-info'>{this.state.baseInfo.statementRequestName}</View>
                </View>
              </View>
            </View>
          ):null
        }
        {
          this.state.commentInfo.comment?(
            <View className='detail-block'>
              <View className='detail-title'>用户评价</View>
              <View className='detail-info'>
                <View className='info-item'>
                  <View className='item-label'>评价结果</View>
                  <View className='item-info'>{this.state.commentInfo.comment.comment.name}</View>
                </View>
                <View className='info-item'>
                  <View className='item-label'>评价详情</View>
                  <View className='item-info'>
                    {this.state.commentInfo.comment.comment.children.map(item=>{
                      return <Text key={item.id}>{item.name}、</Text>
                    })}
                  </View>
                </View>
              </View>
            </View>
          ):null
        }
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
    {/*等待支付提示*/}
      <AtToast status='loading' duration={0} isOpened={this.state.waitPayToast} text={`等待支付中,剩余${this.state.countDown}S`} icon="loading-3"></AtToast>
    </View>)


  }
}
export default Lists as ComponentType
