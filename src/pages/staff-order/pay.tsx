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
        this.getBookInfo()
      }
    })
    // 轮询
    let timer = setInterval(()=>{
      if(this.state.payRes==='Y'){
        clearInterval(timer)
      }
      this.getPayResult()
    },3000)
    let timeOutTimer = setTimeout(()=>{
      clearTimeout(timeOutTimer)
      clearInterval(timer)
    },20000)
    this.setState({
      timer,
      timeOutTimer
    })
  }
  getBookInfo= ()=>{
    console.log(this.props)
  }
  getPayInfo = (id)=>{
    let params = {
      orderIds:[id],
      payBusinessType:'W_REPAIR_ORDER',
      payCode:'WX_QR'
    }
    QrPay(params).then(res=>{
      if(res.data.code===0){
        let data = res.data.data
        this.setState({
          qrContent:data.qrContent,
          paySn:data.paySn
        })
      }else{
        Taro.showToast({
          title:res.data.msg,
          icon:'none'
        })
      }
    })
  }
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
      }
    })
  }
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
      <View className='price-lists'>
        <View className='price-divider'>费用明细</View>
        {
          this.state.detailLists.map(item=>{
            return (<View className='price-item' key={item.id}>
              <View className='item-left'>{item.planName}</View>
              <View className='item-right'><Text className='text-warm'>￥{item.serviceCost}</Text></View>
            </View>)
          })
        }
      </View>
    </View>)
  }
}
export default Quote as ComponentType
