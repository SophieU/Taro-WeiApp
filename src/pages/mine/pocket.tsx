import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View,  Button} from '@tarojs/components'
import {AtInput, AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"
import './pocket.scss'

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
    navigationBarTitleText:'我的钱包'
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
      <View className='page'>
        <View className='top-info'>
          <View className='info-row'>
            <View className='money-title'>我的余额: </View>
            <View className='money'>￥ 1.00</View>
            <Button onClick={this.toggleModalStatus} className='withdraw'>提现</Button>
          </View>
          <View className='info-row'>
            <View className='money-title'>冻结金额： </View>
            <View className='freez-money'>￥ 10.00</View>
          </View>
        </View>
        <View className='history'>
          <View className='history-title'>历史记录</View>
          <View className='history-lists'>
            <View className='history-item'>
              <View className='left'>
                <View className='title'>退款返还</View>
                <View className='time'>2017-12-10 01：00：00</View>
              </View>
              <View className='right add'>+0.01元</View>
            </View>
          </View>
        </View>
        {/*弹窗*/}
        <AtModal isOpened={this.state.showModal}>
          <AtModalHeader>提现</AtModalHeader>
          <AtModalContent>
            <AtInput
              name='withdrawMoney'
              title='金额'
              type='number'
              placeholder='请输入金额'
              value={this.state.withdrawMoney}
              onChange={this.handleWithdrawChange}
            />
          </AtModalContent>
          <AtModalAction>
            <Button onClick={this.toggleModalStatus}>取消</Button>
            <Button onClick={this.handleWithdraw}>确定</Button>
          </AtModalAction>
        </AtModal>
      </View>
    )
  }
}
export default Mine as ComponentType
