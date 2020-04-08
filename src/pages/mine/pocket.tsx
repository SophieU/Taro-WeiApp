import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View,  Button} from '@tarojs/components'
import './pocket.less'

class Mine extends  Component{
  config: Config={
    navigationBarTitleText:'我的钱包'
  }
  render(){
    return (
      <View className='page'>
        <View className='top-info'>
          <View className='info-row'>
            <View className='money-title'>我的余额: </View>
            <View className='money'>￥ 1.00</View>
            <Button className='withdraw'>提现</Button>
          </View>
          <View className='info-row'>
            <View className='money-title'>冻结金额： </View>
            <View className='freez-money'>￥ 10.00</View>
          </View>

        </View>
        <View className='history'>
          <View className='history-title'>历史记录</View>
          <View className='history-lists'>
            <View className='history-item'>
              <View className='left'>
                <View className='title'>退款返还</View>
                <View className='time'>2017-12-10 01：00：00</View>
              </View>
              <View className='right add'>+0.01元</View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
export default Mine as ComponentType
