import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View,  Button, ScrollView} from '@tarojs/components'
import {AtInput, AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"
import {getWalletInfo, walletFlow, withdrawHistory, startWithdraw} from './pocket-api'
import './pocket.scss'

type Wallet = {
  money:number,
  frozenAmount:number,
  isSetPayPwd:string
}
interface State {
  withdrawMoney:string,
  showModal:boolean
  wallet:Wallet
  flowLists:Array<object>
  pageSize:number,
  pageNo:number,
  hasNextPage:boolean,
}
class Mine extends  Component{
  state:State = {
    withdrawMoney:'',
    showModal:false,
    wallet:{
      money:0,
      frozenAmount:0,
      isSetPayPwd: 'N'
    },
    pageSize:10,
    pageNo:1,
    hasNextPage:true,
    flowLists:[]
  }
  config: Config={
    navigationBarTitleText:'我的钱包',
    navigationStyle:'default'
  }
  componentWillMount(){
    this.getInfo()
    this.getFlow()
  }
  // 钱包信息
  getInfo=()=>{
    getWalletInfo().then(res=>{
      if(res.data.code===0){
        let data = res.data.data
        this.setState({
          wallet:data
        })
      }
    })
  }
  // 钱包流水
  getFlow = ()=>{
    if(!this.state.hasNextPage){
      Taro.showToast({
        title:'没有更多了~',
        icon:'none'
      })
      return
    }
    let param = {
      pageNo:this.state.pageNo,
      pageSize:this.state.pageSize
    }
    walletFlow(param).then(res=>{
      if(res.data.code===0){
        let data = res.data.data
        this.setState((prevState:State)=>{
          return {
            hasNextPage:data.hasNextPage,
            pageNo:data.hasNextPage?data.nextPage:data.pageNo,
            flowLists:prevState.flowLists.push(data.list)
          }
        })
      }
    })
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
      <ScrollView
        className='page'
        scrollY
        onScrollToLower={this.getFlow}
      >
        <View className='top-info'>
          <View className='info-row'>
            <View className='money-title'>我的余额: </View>
            <View className='money'>￥ {this.state.wallet.money}</View>
            <Button onClick={this.toggleModalStatus} className='withdraw'>提现</Button>
          </View>
          <View className='info-row'>
            <View className='money-title'>冻结金额： </View>
            <View className='freez-money'>￥ {this.state.wallet.frozenAmount}</View>
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
      </ScrollView>
    )
  }
}
export default Mine as ComponentType
