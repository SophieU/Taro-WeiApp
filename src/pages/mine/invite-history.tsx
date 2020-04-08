import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import { AtTimeline } from 'taro-ui'
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
    navigationBarTitleText:'邀请记录'
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
      <View className='invite-history-page'>
        <View className='page-title'>共邀新 <Text className='blue-text'>3</Text>人</View>
        <View className='history-block'>
          <View className='history-year'>2019</View>
          <AtTimeline
            className='at-timeline-custom'
            pending
            items={[
              { title: '05月21日 12：35', content: ['成功邀请手机号码 181****333的用户']},
              { title: '吃早餐', content: ['成功邀请手机号码 181****333的用户'] },
              { title: '上班', content: ['成功邀请手机号码 181****333的用户']},
              { title: '睡觉', content: ['成功邀请手机号码 181****333的用户'] }
            ]}
          >
          </AtTimeline>
        </View>
      </View>
    )
  }
}
export default Mine as ComponentType
