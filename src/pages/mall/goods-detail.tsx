import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Swiper, SwiperItem,Text ,Navigator,Button} from '@tarojs/components'
import {getSubscribeDetail} from './mall-apis'
import RichCustom from '../../components/rich-text'
import './goods-detail.scss'

class GoodsDetail extends  Component{
  config: Config={
    navigationBarTitleText:'预约服务详情',
    navigationStyle:'default'
  }
  state={
    id:'',
    detail:{}
  }
  componentWillMount(){
    let id = this.$router.params.id
    this.setState({
      id:id
    })
    this.getDetail(id)
  }
  getDetail = (id)=>{
    getSubscribeDetail(id).then(res=>{
      if(res.data.code===0){
        let data = res.data.data
        this.setState({
          detail:data
        })
      }
    })
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
          {
            this.state.detail.productListImageList.map((item,index)=>{
              return <SwiperItem key={index} >
                <Image className='goods-img' src={item}></Image>
              </SwiperItem>
            })
          }


        </Swiper>

        <View className='goods-desc'>
          <View className='desc-left'>
            <View className='goods-price'>
              ￥ {this.state.detail.productPrice}
              <Text className='price-tips'>市场价：{this.state.detail.productMarketPrice}</Text>
            </View>
            <View className='descript'>{this.state.detail.productJingle}</View>
          </View>

          <Button className='share' open-type='share'>
            <Image className='share-ico' src={require('../../assets/imgs/tmp/share.png')}></Image>
            <Text>分享</Text>
          </Button>
        </View>

        <View className='detail'>
          <View className='detail-title'>商品介绍</View>
          <View className='detail-content'>
            <RichCustom nodes={this.state.detail.productBody}></RichCustom>
          </View>
        </View>
        <View className='foot'>
          <Navigator className='go-now' url={'/pages/mall/order-now?id='+this.state.detail.productId}>立即预约</Navigator>
        </View>
      </View>
    )
  }
}
export default GoodsDetail as ComponentType
