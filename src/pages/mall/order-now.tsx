import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Button, Input, Picker, Navigator} from '@tarojs/components'
import {inject, observer} from '@tarojs/mobx'
import './order-now.scss'

@inject('appStore')
@observer
class GoodsDetail extends  Component{

  config: Config={
    navigationBarTitleText:'预约提交',
    navigationStyle:'default'
  }
  constructor(props) {
    super(props);
    this.state={
      installDate:'',
      installTime:'请选择',
      address:'',
    }
  }
  componentDidShow(){
    const orderForm = this.props.appStore.orderForm
    this.setState({
      address:orderForm.address,
      userMobile:orderForm.userMobile,
      repairUserAddressId:orderForm.addressObj.id,
      repairUserAddressObj:orderForm.addressObj
    })
  }
  onDateChange=(e)=>{
    let value = e.detail.value
    this.setState({
      installDate:value
    })
  }
  onTimeChange=(e)=>{
    let value = e.detail.value
    this.setState({
      installTime:value
    })
  }
  submitBook=()=>{
    Taro.showModal({
      title:'温馨提示',
      content:'您的预约订单已提交，可在【我的】-【预约订单】中查看',
      confirmText:'查看订单',
      cancelText:'回到首页'
    }).then(res=>{
      if(res.confirm){
        Taro.redirectTo({
          url:'/pages/mall/order-lists-custom'
        })
      }else{
        Taro.reLaunch({
          url:'/pages/index/index'
        })
      }
    })
  }
  render(){
    return (
      <View className='page'>
        <View className='form-wrap'>
          <View className='goods-info'>
            <Image className='goods-img' src={require('../../assets/imgs/tmp/1.png')}></Image>
            <View className='goods-desc'>
              <View className='goods-title'>桔柑地栽植柑劳而无功茜</View>
              <View className='goods-price'>￥ 90.00</View>
            </View>
          </View>
          <View className='form-item'>
            <View className='form-label'>预约地址：</View>
            <View className='form-control pick-add'>
              <Navigator className='add-input' url='/pages/address/order-add?from=bookOrder' >{this.state.address?this.state.address:'请选择地址'}</Navigator>
              {/*<Input className='add-input' disabled={true} placeholder='请选择地址' onClick={this.chooseAddress}/>*/}
            </View>
          </View>
          <View className='form-item'>
            <View className='form-label'>预约安装日期：</View>
            <View className='form-control'>
              <Picker mode='date' onChange={this.onDateChange}>
                <View className='picker'>
                 {this.state.installDate?this.state.installDate:'请选择'}
                </View>
              </Picker>

            </View>
          </View>
          <View className='form-item'>
            <View className='form-label'>预约安装时间：</View>
            <View className='form-control'>
              <Picker mode='time' onChange={this.onTimeChange}>
                <View className='picker'>
                  {this.state.installTime?this.state.installTime:'请选择'}
                </View>
              </Picker>

            </View>
          </View>

        </View>
        <Button onClick={this.submitBook} className='orange-btn lang-btn submit-now'>确认提交</Button>
      </View>
    )
  }
}
export default GoodsDetail as ComponentType
