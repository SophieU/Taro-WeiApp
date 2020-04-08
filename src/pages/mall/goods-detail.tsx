import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Button, Swiper, SwiperItem, Navigator} from '@tarojs/components'
import './goods-detail.less'

class GoodsDetail extends  Component{
  config: Config={
    navigationBarTitleText:'预约商城'
  }
  render(){
    return (
      <View className='page'>
        <Swiper
          className='top-swiper'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay>
          <SwiperItem>
              <Image className='goods-img' src={require('../../assets/imgs/tmp/1.png')}></Image>
          </SwiperItem>
          <SwiperItem>
            <Image className='goods-img' src={require('../../assets/imgs/tmp/1.png')}></Image>
          </SwiperItem>
          <SwiperItem>
            <Image className='goods-img' src={require('../../assets/imgs/tmp/1.png')}></Image>
          </SwiperItem>
        </Swiper>

        <View className='goods-desc'>
          <View className='desc-left'>
            <View className='goods-price'>￥ 90</View>
            <View className='descript'>遗世独立哎哎呀哎呀哎呀哎呀哎呀哎呀呀遗世独立哎哎呀哎呀哎呀哎呀哎呀哎呀呀</View>
          </View>
          <View className='desc-right'>
            <View className='share'>
              <Image className='share-ico' src={require('../../assets/imgs/tmp/share.png')}></Image>
              分享</View>
          </View>
        </View>

        <View className='detail'>
          <View className='detail-title'>商品介绍</View>
          <View className='detail-content'>
            <Image className='test' src={require('../../assets/imgs/tmp/1.png')}></Image>
          </View>
        </View>
        <View className='foot'>
          <Button className='go-now'>立即预约</Button>
        </View>
      </View>
    )
  }
}
export default GoodsDetail as ComponentType
