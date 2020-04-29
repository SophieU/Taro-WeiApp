import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View,  Button, ScrollView} from '@tarojs/components'
import {AtInput, AtModal, AtModalHeader, AtModalContent, AtModalAction, AtTabs, AtTabsPane } from "taro-ui"
import {getWalletInfo, walletFlow, withdrawHistory, startWithdraw, setPassword} from './pocket-api'
import './pocket.scss'

type Wallet = {
  money:number,
  frozenAmount:number,
  isSetPayPwd:string
}
type FlowItem = {
  "actionTypeName": string,
  "changeIntro": string,
  "changeType": number,
  "changeNum": number,
  "surplusNum": number,
  "createTime": string,
  "state": string
}
type WithdrawItem = {
  withdrawSn:string
  createTime:string
  amount:number
  withdrawRemark:string
  orderStateName:string
}
interface State {
  withdrawMoney:string,
  withdrawPwdForm:string,
  showModal:boolean
  wallet:Wallet
  flowLists:Array<FlowItem>
  pageSize:number,
  pageNo:number,
  hasNextPage:boolean,
  current:number
  hasNextPageWith:boolean,
  pageSizeWith:number,
  pageNoWith:number,
  withdrawLists:Array<WithdrawItem>
  withdrawPwd:string,
  showModalPwd:boolean,
}
class Mine extends  Component{
  state:State = {
    withdrawMoney:'',
    withdrawPwdForm:'',
    withdrawPwd:'',
    showModal:false,
    showModalPwd:false,
    wallet:{
      money:0,
      frozenAmount:0,
      isSetPayPwd: 'N'
    },
    pageSize:10,
    pageNo:1,
    current:0,
    hasNextPage:true,
    hasNextPageWith:true,
    pageSizeWith:10,
    pageNoWith:1,
    flowLists:[],
    withdrawLists:[]
  }
  config: Config={
    navigationBarTitleText:'我的钱包',
    navigationStyle:'default'
  }
  componentWillMount(){
    this.getInfo()
    this.getFlow()
    this.getWithDrawHistory()
  }
  // 钱包信息
  getInfo=()=>{
    Taro.showLoading({title:''})
    getWalletInfo().then(res=>{
      Taro.hideLoading()
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
            flowLists:prevState.flowLists.concat(data.list)
          }
        })
      }
    })
  }
  // 提现记录
  getWithDrawHistory = ()=>{
    if(!this.state.hasNextPageWith){
      Taro.showToast({
        title:'没有更多了~',
        icon:'none'
      })
      return
    }
    let param = {
      pageNo:this.state.pageNoWith,
      pageSize:this.state.pageSizeWith
    }
    withdrawHistory(param).then(res=>{
      if(res.data.code===0){
        let data = res.data.data
        this.setState((prevState:State)=>{
          return {
            hasNextPageWith:data.hasNextPage,
            pageNoWith:data.hasNextPage?data.nextPage:data.pageNo,
            withdrawLists:prevState.withdrawLists.concat(data.list)
          }
        })
      }
    })
  }
  // 弹窗取消操作回调
  toggleModalStatus = (type)=>{
    if(type==='pwd'){
      this.setState({
        showModalPwd:false,
        withdrawPwd:'',
      })
    }else if(type==='widthdraw'){
      this.setState({
        showModal:false,
        withdrawMoney:'',
        withdrawPwdForm:'',
      })
    }

  }
  // 滚动到底部
  scrollToBottom=()=>{
    if(this.state.current===0){
      this.getFlow()
    }else{
      this.getWithDrawHistory()
    }
  }
  handleWithdrawBtn=()=>{
    if(this.state.wallet.isSetPayPwd==='N'){
      this.setState({
        showModalPwd:true
      })
    }else{
      this.setState({
        showModal:true
      })
    }
  }
  // 提现输入
  handleWithdrawChange = (val,key)=>{
    this.setState({
      [key]:val
    })
  }
  // 提现操作
  handleWithdraw = ()=>{
    let params = {
      "amount":this.state.withdrawMoney,
      "payPwd":this.state.withdrawPwdForm
    }
    startWithdraw(params).then(res=>{
      if(res.data.code===0){
        Taro.showToast({
          title:'操作成功',
          icon:'none'
        })
        this.setState({
          hasNextPage:true,
          hasNextPageWith:true,
          pageNo:1,
          flowLists:[],
          withdrawLists:[],
          withdrawPwdForm:'',
          withdrawMoney:'',
        },()=>{
          this.toggleModalStatus('widthdraw')
          this.getInfo()
          this.getFlow()
          this.getWithDrawHistory()
        })
      }else{
        Taro.showToast({
          title:'操作失败:'+res.data.msg,
          icon:'none'
        })
      }
    })
  }
  // 切换tab
  handleTabClick=(value)=>{
    this.setState({
      current: value,
      showModalPwd:false
    })
  }
  // 提现密码设置
  handleWithdrawPwdChange=(val)=>{
    this.setState({
      withdrawPwd:val
    })
  }
  // 确定密码
  handlePwd=()=>{
    let pwd = this.state.withdrawPwd
    if(pwd.length<6){
      Taro.showToast({
        title:'密码至少6数字',
        icon:'none'
      })
      return
    }
    setPassword(pwd).then(res=>{
      if(res.data.code===0){
        Taro.showToast({
          title:'设置成功',
          icon:'none'
        })
        this.toggleModalStatus('pwd')
        this.setState({
          showModal:true
        })
      }else{
        Taro.showToast({
          title:'设置失败：'+res.data.msg,
          icon:'none'
        })
      }
    })
  }
  render(){
    return (
      <ScrollView
        className='page-scroll'
        scrollY
        onScrollToLower={this.scrollToBottom}
      >
        <View className='top-info'>
          <View className='info-row'>
            <View className='money-title'>我的余额: </View>
            <View className='money'>￥ {this.state.wallet.money}</View>
            <Button onClick={this.handleWithdrawBtn} className='withdraw'>提现</Button>
          </View>
          <View className='info-row fixed-right'>
            <View className='money-title'>冻结金额： </View>
            <View className='freez-money'>￥ {this.state.wallet.frozenAmount}</View>
          </View>
        </View>
        <View className='history'>
          <AtTabs current={this.state.current} tabList={[{ title: '流水记录' }, { title: '提现记录' },]} onClick={this.handleTabClick}>
            <AtTabsPane current={this.state.current} index={0} >
              <View className='history-lists'>
                {
                  this.state.flowLists.map((item,index)=>{
                    return ( <View className='history-item' key={index}>
                        <View className='left'>
                          <View className='title'>{item.changeIntro}</View>
                          <View className='time'>{item.createTime}</View>
                        </View>
                        <View className={item.changeType===1?'right add':'right decrement'}>{item.changeType===1?'+':'-'}{item.changeNum}元</View>
                      </View>
                    )
                  })
                }
              </View>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={1}>
              <View className='history-lists'>
                {
                  this.state.withdrawLists.map((item,index)=>{
                    return ( <View className='history-item' key={index}>
                        <View className='left'>
                          <View className='title'>单号:{item.withdrawSn}</View>
                          <View className='time'>{item.createTime}</View>
                          <View className='status'>{item.withdrawRemark}</View>
                        </View>
                        <View className='right'>
                          <View className='status'>{item.orderStateName}</View>
                          <View className='decrement'>-{item.amount}元</View>
                        </View>
                      </View>
                    )
                  })
                }
              </View>
            </AtTabsPane>
          </AtTabs>
        </View>
        {/*弹窗-设置密码*/}
        <AtModal closeOnClickOverlay={false} className='pwd-modal' isOpened={this.state.showModalPwd}>
          <AtModalHeader>温馨提醒</AtModalHeader>
          <AtModalContent>
           <View className='pwd-tips'>您还未设置密码，请先设置密码</View>
            <AtInput
              name='withdrawPwd'
              type='password'
              placeholder='请设置提现密码,最少6位'
              autoFocus
              value={this.state.withdrawPwd}
              onChange={this.handleWithdrawPwdChange}
            />
          </AtModalContent>
          <AtModalAction>
            <Button onClick={()=>{this.toggleModalStatus('pwd')}}>取消</Button>
            <Button onClick={this.handlePwd}>确定</Button>
          </AtModalAction>
        </AtModal>
        {/*弹窗-提现金额*/}
        <AtModal className='withdraw-modal' isOpened={this.state.showModal}>
          <AtModalHeader>提现</AtModalHeader>
          <AtModalContent>
            <AtInput
              name='withdrawMoney'
              title='金额'
              type='number'
              placeholder='请输入金额'
              value={this.state.withdrawMoney}
              onChange={(val)=>this.handleWithdrawChange(val,'withdrawMoney')}
            />
            <AtInput
              name='withdrawMoney'
              title='提现密码'
              type='password'
              placeholder='提现密码,忘记请打客服'
              value={this.state.withdrawPwdForm}
              onChange={(val)=>this.handleWithdrawChange(val,'withdrawPwdForm')}
            />
          </AtModalContent>
          <AtModalAction>
            <Button onClick={()=>{this.toggleModalStatus('widthdraw')}}>取消</Button>
            <Button onClick={this.handleWithdraw}>确定</Button>
          </AtModalAction>
        </AtModal>
      </ScrollView>
    )
  }
}
export default Mine as ComponentType
