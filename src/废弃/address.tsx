import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Text, Input} from '@tarojs/components'
import '../pages/address/address.scss'

class Address extends Component {
  localRoutePlan(){
    const chooseLocation = Taro.requirePlugin('chooseLocation');
    const key = 'E4EBZ-Z7QRF-BREJT-JZGXD-2DDE6-6XB6T';  //使用在腾讯位置服务申请的key
    const referer = '天富一生约'; //调用插件的app的名称
    const location = JSON.stringify({
      latitude: 39.89631551,
      longitude: 116.323459711
    });
    const category = '生活服务,娱乐休闲';

    Taro.navigateTo({
      url: `plugin://chooseLocation/index?key=${key}&referer=${referer}&location=${location}&category=${category}`
    });
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
      <View className='address-lists' onClick={this.localRoutePlan}>
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
