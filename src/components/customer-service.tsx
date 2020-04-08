import {ComponentType } from 'react'
import Taro, {Component} from '@tarojs/taro'
import {View, Image, Block, Text, Icon} from '@tarojs/components'
import './customer-service.scss'

class CustomerService extends Component{
  state={
    hideService:true,
  }
  toggleService=()=>{
    this.setState((prevState:any)=>{
      return {
        hideService:!prevState.hideService
      }
    })
  }
  callService= ()=>{

  }
  render(){
    return (<View className={this.state.hideService?'customer-service':'customer-service expand'}>
      {
        this.state.hideService?
          ( <Block>
            <Image onClick={this.toggleService} className='cus-ser' src={require('../assets/imgs/tmp/cus-ser.png')}></Image>
            <Text>客服</Text>
          </Block>)
          :(<Block>
            <View className='expand-service'>
              <View className='expand-button'>
                <View><Image className='custom-ico'  src={require('../assets/imgs/tmp/im.png')}></Image>在线咨询</View>
                <Text>（8:30-20:00）</Text>
              </View>
              <View className='expand-button'>
                <View onClick={this.callService}><Image className='custom-ico' src={require('../assets/imgs/tmp/call.png')}></Image>热线电话</View>
                <Text>（8:30-20:00）</Text>
              </View>
              <Icon onClick={this.toggleService} size='18' type='clear' color='#EA7744'/>
            </View>
          </Block>)
      }
    </View>)
  }
}

export default CustomerService as ComponentType
