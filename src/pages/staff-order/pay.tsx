import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Button, Text} from '@tarojs/components'
import {QrPay, orderDetail, payRes} from './staff-apis'
import {observer,inject} from '@tarojs/mobx'
import './pay.scss'


interface State {
  staffPrice:number
  id:string
  qrContent:string
  totalAmount:number
  payInfo:Array<object>
  detailLists:Array<object>
  paySn:string
  payRes:string
  timer:string,
  timeOutTimer:string,
  type:string,
}
@inject('appStore')
@observer
class Quote extends Component<{},State>{
  config:Config = {
    navigationBarTitleText:'收款',
    navigationStyle:'default'
  }
  constructor(props) {
    super(props);
    this.state = {
      staffPrice:0,
      id:'',
      qrContent:'',
      payInfo:[],
      totalAmount:0,
      detailLists:[],
      paySn:'',
      payRes:'N',
      timer:'',
      timeOutTimer:'',
      type:'', // book-预约支付，staff-报修支付
      bookOrderDetail:null
    }
  }
  componentWillUnmount(){
    clearTimeout(this.state.timeOutTimer)
    clearInterval(this.state.timer)
  }
  componentWillMount(){
    let {id, type} = this.$router.params
    this.setState({
      id,
      type
    },()=>{
      if(type==='staff'){
        this.getPayInfo(id)
        this.getPayDetail(id)
      }else{
        this.getPayInfo(id)
        this.getBookInfo()
      }
    })

  }
  // 预约订单-费用明细
  getBookInfo= ()=>{
    let {bookOrderDetail} = this.props.appStore
    this.setState({
      bookOrderDetail
    })
  }
  // 获取支付二维码
  getPayInfo = (id)=>{
    let params = {
      orderIds:[id],
      payBusinessType:this.state.type==='staff'?'W_REPAIR_ORDER':'BOOKING_ORDER',
      payCode:'WX_QR'
    }
    QrPay(params).then(res=>{
      if(res.data.code===0){
        let data = res.data.data
        this.setState({
          qrContent:data.qrContent,
          paySn:data.paySn
        },()=>{
          // 轮询
          let timer = setInterval(()=>{
            if(this.state.payRes==='Y'){
              clearInterval(timer)
            }
            this.getPayResult()
          },3000)
          // 3分钟未支付清除
          let timeOutTimer = setTimeout(()=>{
            clearTimeout(timeOutTimer)
            clearInterval(timer)
          },180000)
          this.setState({
            timer,
            timeOutTimer
          })
        })

      }else{
        Taro.showToast({
          title:res.data.msg,
          icon:'none'
        })
      }
    })
  }
  // 获取订单详情-费用明细（报修订单）
  getPayDetail = (id)=>{
    orderDetail(id).then(res=>{
      if(res.data.code===0){
        let data = res.data.data
        let totalAmount = 0
        data.repairOrderAmountVos.forEach(item=>{
          if(item.type==='ALL_AMOUNT'){
            totalAmount=item.amount
          }
        })
        this.setState({
          totalAmount:totalAmount,
          payInfo:data.repairOrderAmountVos,
          detailLists:data.repairOrderOfferPlanVoList
        })
      }else{
        Taro.showToast({title:res.data.msg,icon:'none'})
      }
    })
  }
  // 获取支付结果
  getPayResult = ()=>{
    payRes(this.state.paySn).then(res=>{
      if(res.data.code===0){
        this.setState({
          payRes:res.data.data
        })
        if(res.data.data==='Y'){
          Taro.showToast({
            title:'用户支付成功'
          }).then(()=>setTimeout(()=>{
            let { id, type} = this.state
            if(type==='staff'){
              Taro.navigateTo({url:'/pages/staff-order/detail?id='+id})
            }else{
              Taro.navigateTo({url:'/pages/mall/order-lists-staff'})
            }
          },1000))
        }
      }
    })
  }

  render(){
    return (<View className='pay-page'>
     <View className='top-bg'>
       <View className='pay-title'>
         <Image className='weixin-pay' src={require('../../assets/imgs/tmp/weixin-pay.png')}></Image>
         <View> 微信支付</View>
       </View>
       <Image className='qr-code' src={'data:image/png;base64,'+this.state.qrContent}></Image>
     </View>
      {this.state.type==='staff'?( <View className='price-lists'>
        <View className='price-divider'>费用明细</View>
        {
          this.state.detailLists.map(item=>{
            return (<View className='price-item' key={item.id}>
              <View className='item-left'>{item.planName}</View>
              <View className='item-right'><Text className='text-warm'>￥{item.serviceCost}</Text></View>
            </View>)
          })
        }
      </View>):null}
      {
        this.state.type==='book'?(<View className='price-lists'>
          {this.state.bookOrderDetail.productAmount>0?(<View className='price-item' >
            <View className='item-left'>商品金额：</View>
            <View className='item-right'><Text className='text-warm'>￥{this.state.bookOrderDetail.productAmount}</Text></View>
          </View>):null}
          {this.state.bookOrderDetail.serviceAmount>0?(<View className='price-item' >
            <View className='item-left'>服务费：</View>
            <View className='item-right'><Text className='text-warm'>￥{this.state.bookOrderDetail.serviceAmount}</Text></View>
          </View>):null}
        </View>):null
      }
    </View>)
  }
}
export default Quote as ComponentType
