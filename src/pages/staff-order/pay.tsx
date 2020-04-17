import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Button, Text} from '@tarojs/components'
import {AtButton,AtInput, AtTabsPane } from 'taro-ui'
import './pay.less'


interface State {
  staffPrice:number
}
class Quote extends Component<{},State>{
  config:Config = {
    navigationBarTitleText:'收款',
    navigationStyle:'default'
  }
  constructor() {
    super();
    this.state = {
      staffPrice:0,
    }
  }
  handleStaffPriceChange=(value)=>{
    this.setState({
      staffPrice:value
    })
  }
  render(){
    return (<View className='page pay-page'>
     <View className='top-bg'>
       <View className='pay-title'>
         <Image className='weixin-pay' src={require('../../assets/imgs/tmp/weixin-pay.png')}></Image>
         <View> 微信支付</View>
       </View>
       <View className='price'>￥<Text className='strong'>20.00</Text></View>
       <Image className='qr-code' src={require('../../assets/imgs/tmp/qrcode.png')}></Image>
     </View>
      <View className='price-lists'>
        <View className='price-item'>
          <View className='item-left'>上门费用</View>
          <View className='item-right'><Text className='text-warm'>￥20.00</Text></View>
        </View>
        <View className='price-item'>
          <View className='item-left'>
            <View className='other-title'>软管更换</View>
            <View className='text-grey other-tips'>￥10.00</View>
          </View>
          <View className='item-center text-grey'>X1</View>
          <View className='item-right'>
            <View className='item-price text-warm'>￥20.00</View>
            <View className='item-tips'>服务无保障</View>
          </View>
        </View>

      </View>
    </View>)
  }
}
export default Quote as ComponentType
