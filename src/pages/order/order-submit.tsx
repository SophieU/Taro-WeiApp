import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Text, Navigator, Input, Swiper, SwiperItem, RichText, Radio, Button} from '@tarojs/components'
import './order-submit.less'
class OrderSubmit extends Component{
  config: Config = {
    navigationBarTitleText: '订单确认',
  }
  submitForm=()=>{
    Taro.showModal({
      title: '温馨提示',
      content: '空调维修师傅出工即需要先支付上门费20.00元且无法退款',
      confirmText:'我同意',
      cancelText:'算了吧',
    }).then(res => console.log(res.confirm, res.cancel))

    Taro.showToast({
      title: '当前服务地址暂不支持该服务项目',
      icon: 'none',
      duration: 2000
    }).then(res => console.log(res))
  }
  // 支付成功
  paySuccess = ()=>{
    Taro.showModal({
      content: '支付成功',
      confirmText:'查看订单',
      cancelText:'返回首页',
    }).then(res => {
      console.log(res.confirm, res.cancel)
      if(res.confirm){
        // 我的
        Taro.reLaunch({
          url: '/pages/index/index',
        })
      }else{
        // 首页
        Taro.reLaunch({
          url: '/pages/index/index',
        })
      }
    })
  }
  // 提交成功
  submitResult=(res:boolean)=>{
    if(res){
      Taro.showModal({
        title:'操作提示',
        content: '提交成功',
        confirmText:'查看报修单',
        cancelText:'返回首页',
      })
    }else{
      Taro.showModal({
        title:'操作提示',
        content: '提交失败',
        confirmText:'拔打客服',
        cancelText:'返回首页',
      })
    }
  }
  render(){
    return (<View className='page'>
      <Image className='order-banner' src='../../assets/imgs/tmp/01.png'></Image>
      <View className='service-info'>
        <View className='info-item'>
          <Image className='info-ico' src={require('../../assets/imgs/tmp/img_project.png')}></Image>
          <Text className='info-title'>服务项目</Text>
          <View className='info-content'>开换锁</View>
        </View>
        <View className='info-item'>
          <Image className='info-ico' src={require('../../assets/imgs/tmp/img_type.png')}></Image>
          <Text className='info-title'>服务类型</Text>
          <View className='info-content'>换锁</View>
        </View>
        <View className='info-item'>
          <Image className='info-ico' src={require('../../assets/imgs/tmp/img_explain.png')}></Image>
          <Text className='info-title'>服务说明</Text>
          <View className='info-content'>根据动态内容可折行显示根据动态内容可折行显示</View>
        </View>
        <View className='info-item'>
          <Image className='info-ico' src={require('../../assets/imgs/tmp/img_cash.png')}></Image>
          <Text className='info-title'>服务收费</Text>
          <View className='info-content'>服务费 180元起</View>
        </View>
        <View className='info-item'>
          <Image className='info-ico' src={require('../../assets/imgs/tmp/img_cash.png')}></Image>
          <Text className='info-title'>服务项目</Text>
          <View className='info-content'>开换锁</View>
        </View>
      </View>

      <View className='service-form'>
        <View className='form-item'>
          <Image className='form-ico' src={require('../../assets/imgs/tmp/img_location.png')}></Image>
          <Text className='form-label'>服务地址</Text>
          <Navigator className='form-nav'>1小区1栋1单元11号</Navigator>
        </View>
        <View className='form-item'>
          <Image className='form-ico' src={require('../../assets/imgs/tmp/img_call.png')}></Image>
          <Text className='form-label'>联系方式</Text>
          <Input type='text' placeholder='请输入联系方式' />
        </View>

      </View>

      <View className='service-desc'>
          <View className='desc-tab'>
            <View className='desc-tab-item active'>服务时间</View>
            <View className='desc-tab-item'>服务费用</View>
            <View className='desc-tab-item'>其他</View>
          </View>
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          indicatorDots
          >
          <SwiperItem>
            <View className='demo-text-1'>
              1111
              <RichText nodes={''}/>
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-2'>
              2222
              <RichText nodes={''}/>
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-3'>
              3333
              <RichText nodes={''}/>
            </View>
          </SwiperItem>
        </Swiper>
      </View>
      <View className="submit-bar">
        <View className='protocal'>
          <Radio color='#216EC6' value='1' checked>已同意 <Navigator className='outlink'>用户协议</Navigator></Radio>
        </View>
        <View className='btn-wrap'>
          <Button onClick={this.submitForm} className='btn-form'>提交订单</Button>
        </View>
      </View>
    </View>)
  }
}
export default OrderSubmit as ComponentType
