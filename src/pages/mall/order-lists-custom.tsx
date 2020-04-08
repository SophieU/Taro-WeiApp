import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Button, Text, Navigator} from '@tarojs/components'
import './order-lists.less'

class OrderListsCustom extends  Component{
  config: Config={
    navigationBarTitleText:'订单列表'
  }
  render(){
    return (
      <View className='page order-lists-custom'>
          <View className='order-lists'>
            <View className='order-item'>
              <View className='order-top'>
                <View className='order-title'>某某商家</View>
                <View className='order-status'>
                  <Text>已完成</Text>
                </View>
              </View>
              <View className='item-row'>
                <Image className='order-img' src={require('../../assets/imgs/tmp/1.png')}></Image>
                <View className='goods-detail'>
                  <View className='goods-title'>这是一个什么商品呕吐勤勤工哎呀哎呀哎呀</View>
                  <View className='goods-time'>2020/01/02 10:00</View>
                </View>
                <View className='order-price'>
                  <View className='price'>￥ 90.00</View>
                </View>
              </View>
            </View>

            <View className='order-item'>
              <View className='order-top'>
                <View className='order-title'>某某商家</View>
                <View className='order-status'>
                  <Text>已完成</Text>
                </View>
              </View>
              <View className='item-row'>
                <Image className='order-img' src={require('../../assets/imgs/tmp/1.png')}></Image>
                <View className='goods-detail'>
                  <View className='goods-title'>这是一个什么商品呕吐勤勤工哎呀哎呀哎呀</View>
                  <View className='goods-time'>2020/01/02 10:00</View>
                </View>
                <View className='order-price'>
                  <View className='price'>￥ 90.00</View>
                </View>
              </View>
            </View>

          </View>
      </View>
    )
  }
}
export default OrderListsCustom as ComponentType
