import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View,  Image, Button} from '@tarojs/components'
import './qr-code.scss'

interface State {
  withdrawMoney:string,
  showModal:boolean
}
class Mine extends  Component{
  state:State = {
    withdrawMoney:'',
    showModal:false,
  }
  config: Config={
    navigationBarTitleText:'邀请二维码'
  }
  toggleModalStatus = ()=>{
    this.setState((prevState:State)=>{
      if(prevState.showModal){
        return {
          showModal: !prevState.showModal,
          withdrawMoney:'',
        }
      }else{
        return {
          showModal:!prevState.showModal
        }
      }
    })
  }
  handleWithdrawChange = (val)=>{
    this.setState({
      withdrawMoney:val
    })
  }
  handleWithdraw = (val)=>{
    console.log(val)
  }
  render(){
    return (
      <View className='qr-code-page'>
        <Image className='qr-code' src={require('../../assets/imgs/tmp/qrcode.png')} />
        <View className='text'>扫一扫加入速达优服</View>
        <Button className='save-btn'>保存图片</Button>
      </View>
    )
  }
}
export default Mine as ComponentType
