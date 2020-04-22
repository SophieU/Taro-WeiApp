import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Button, Text} from '@tarojs/components'
import {AtButton,AtInput, AtTabsPane } from 'taro-ui'
import './order.scss'


interface State {
  staffPrice:number
}
class Quote extends Component<{},State>{
  config:Config = {
    navigationBarTitleText:'报价清单',
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
    return (<View className='page quote-page'>
     <View className='top-price'>
       <View className='price-left'>上门服务费</View>
       <View className='price-right'>￥ 20.00</View>
     </View>
      <View className='other-price'>
        <View className='other-title'>人工服务费</View>
        <View className='other-row'>
          <AtInput
            name='value'
            title='金额'
            type='number'
            placeholder='标准五个字'
            value={this.state.staffPrice}
            onChange={this.handleStaffPriceChange.bind(this)}
          ></AtInput>
        </View>
      </View>
      <View className='other-price'>
        <View className='other-title'>材料费</View>
        <View className='other-row'>
          <AtInput
            name='value'
            title='金额'
            type='number'
            placeholder='标准五个字'
            value={this.state.staffPrice}
            onChange={this.handleStaffPriceChange.bind(this)}
          ></AtInput>
        </View>
      </View>

      <View className='page-foot'>
        <View className='price-total'>
          <Text>总计：</Text>
          <Text className='text-warm'>￥20.00</Text>
        </View>
        <Button className='btn primary-btn'>确认</Button>
      </View>
    </View>)
  }
}
export default Quote as ComponentType
