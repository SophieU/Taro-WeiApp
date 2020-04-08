import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Text, Input} from '@tarojs/components'
import './address.less'

class Address extends Component {
  config:Config = {
    navigationBarTitleText: '选择地址',
  }
  render(){
    return (<View>
        <View className='top-location'>
          <View className='city'><Image className='locatin-ico' src={require('../../assets/imgs/tmp/img_location.png')}></Image>成都</View>
          <View className='search-input'>
            <Input type='text' className='search-control' placeholder='搜索地址：小区/街道/大厦/学校名称' />
            <Text className='search-btn'>搜索</Text>
          </View>
        </View>
      <View className='address-lists'>
        <View className='list-item'>
          <View className="item-left">
            <View className='add-title'>力宝大夏停车场</View>
            <View className='detail-add'>成都简化北路62号</View>
          </View>
          <View className='item-right'>331m</View>
        </View>
      </View>
    </View>)
  }
}

export default Address as ComponentType
