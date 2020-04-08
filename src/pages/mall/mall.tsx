import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Button, Text, Navigator} from '@tarojs/components'
import './mall.less'

class Mall extends  Component{
  config: Config={
    navigationBarTitleText:'预约商城'
  }
  render(){
    return (
      <View className='page'>
          <View className='mall-lists'>
            <View className='mall-item'>
              <Navigator className='goods-img-nav'>
                <Image className='goods-img' src={require('../../assets/imgs/tmp/1.png')}></Image>
              </Navigator>
              <View className='goods-title'>下面商品效果如下，购物车按钮变成立即预约效果购物车按钮变成立即预约效果</View>
              <View className='goods-foot'>
                <View className='goods-price'>￥ 1899.00</View>
                <Text className='buy-now'>立即预约</Text>
              </View>
            </View>
            <View className='mall-item'>
              <Navigator className='goods-img-nav'>
                <Image className='goods-img' src={require('../../assets/imgs/tmp/1.png')}></Image>
              </Navigator>
              <View className='goods-title'>下面商品效果如下，购物车按钮变成立即预约效果购物车按钮变成立即预约效果</View>
              <View className='goods-foot'>
                <View className='goods-price'>￥ 1899.00</View>
                <Text className='buy-now'>立即预约</Text>
              </View>
            </View>

          </View>
      </View>
    )
  }
}
export default Mall as ComponentType
