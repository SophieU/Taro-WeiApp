import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Button, Input, Picker, Navigator} from '@tarojs/components'
import './order-now.less'

class GoodsDetail extends  Component{

  config: Config={
    navigationBarTitleText:'预约提交'
  }
  constructor() {
    super();
    this.state={
      installDate:'请选择',
      installTime:'请选择'
    }
  }

  onTimeChange=()=>{

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
              <Input className='add-input' disabled={true} placeholder='请选择地址' />
            </View>
          </View>
          <View className='form-item'>
            <View className='form-label'>预约安装日期：</View>
            <View className='form-control'>
              <Picker mode='date' onChange={this.onTimeChange}>
                <View className='picker'>
                 {this.state.installDate}
                </View>

              </Picker>

            </View>
          </View>
          <View className='form-item'>
            <View className='form-label'>预约安装时间：</View>
            <View className='form-control'>
              <Picker mode='time' onChange={this.onTimeChange}>
                <View className='picker'>
                  {this.state.installTime}
                </View>
              </Picker>

            </View>
          </View>

        </View>
        <Button className='blue-btn lang-btn submit-now'>确认提交</Button>
      </View>
    )
  }
}
export default GoodsDetail as ComponentType
