import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Text, Navigator} from '@tarojs/components'
import './mine.scss'

class Mine extends  Component{
  config: Config={
    navigationBarTitleText:'我的'
  }
  render(){
    return (
      <View className='mine page'>
        <View className='user-info'>
          <Image className='user-avatar' src={require('../../assets/imgs/tmp/cus-ser.png')}></Image>
          <View className='user-block'>
            <View className='name'>郑先生</View>
            <View className='tel'>18112341234</View>
          </View>
          <Navigator url='/pages/mine/pocket' className='my-pocket'>
            <Image className='pocket-ico' src={require('../../assets/imgs/tmp/pocket.png')}></Image>
            <Text>钱包</Text>
          </Navigator>
        </View>
        <View className='control-wrap'>
          <View className='control-lists'>
            {/*用户端*/}
            <View className='control-item'>
              <View className='control-title'>报修订单</View>
              <View className='control-desc'></View>
            </View>
            <View className='control-item'>
              <View className='control-title'>预约订单</View>
              <View className='control-desc'></View>
            </View>
            <View className='control-item'>
              <View className='control-title'>在线客服</View>
              <View className='control-desc'></View>
            </View>
            <View className='control-item'>
              <View className='control-title'>我的邀请码</View>
              <View className='control-desc'></View>
            </View>
            {/*服务师傅*/}
            <View className='control-item'>
              <View className='control-title'>报修接单管理</View>
              <View className='control-desc'></View>
            </View>
            <View className='control-item'>
              <View className='control-title'>预约接单管理</View>
              <View className='control-desc'></View>
            </View>
            {/*管理员端*/}
            <View className='control-item'>
              <View className='control-title'>派单管理</View>
              <View className='control-desc'></View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
export default Mine as ComponentType
