import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Input, Text} from '@tarojs/components'
import {AtRadio , AtButton } from 'taro-ui'
import {masterLists,dispatchOrder, dispatchAppeal} from './admin-apis'
import './staffs.scss'


interface State {
  choosed:string
  orderId:string
  type:string
  stationName:string
  lists:Array<object>
}
class Lists extends Component<{},State>{
  config:Config = {
    navigationBarTitleText:'报修订单',
    navigationStyle:'default'
  }
  constructor() {
    super();
    this.state = {
      choosed:'',
      orderId:'',
      lists:[],
      type:'',
      stationName:'',
    }
  }
  componentWillMount(){
    let {orderId, type, stationName} = this.$router.params

    this.setState({
      orderId, type, stationName
    },()=>{
      this.getLists(orderId)
    })
  }
  getLists = (orderId)=>{
    masterLists(orderId).then(res=>{
      if(res.data.code===0){
        let data = res.data.data.map(item=>{
          item.label = item.name
          item.value = item.masterId
          item.desc = item.processingNum+'个待处理工单'
          return item
        })
        this.setState({lists:data})
      }
    })
  }
  dispatchOrderNow=()=>{
    let masterInfo = Taro.getStorageSync('masterInfo')
    let {orderId,choosed,stationName,type} = this.state
    let params = {
      serviceUserId:choosed,
      departmentName:stationName,
      "userId":masterInfo.masterId,
      "username":masterInfo.masterName,
    }
    let funcName = dispatchOrder
    if(type==='order'){
      params.orderId=orderId
      funcName=dispatchOrder
    }else if(type==='appeal'){
      params.appealId=orderId
      funcName=dispatchAppeal
    }
    funcName(params).then(res=>{
      if(res.data.code===0){
        Taro.showToast({title:'分配成功'}).then(()=>{
          setTimeout(()=>{
            Taro.navigateBack({delta:-1})
          },1500)
        })
      }else{
        Taro.showToast({title:'分配失败'+res.data.msg,icon:'none'})
      }
    })
  }
  handleChange=(value)=>{
    this.setState({
      choosed:value
    })
  }
  render(){
    return (<View className='page'>
      {/*<View className='top-search'>*/}
      {/*  <View className='search-bar'>*/}
      {/*    <Image className='search-img' src={require('../../assets/imgs/tmp/img_search.png')}></Image>*/}
      {/*    <Input className='search-input'/>*/}
      {/*    <Text className='search-text'>搜索</Text>*/}
      {/*  </View>*/}
      {/*</View>*/}
      <View className='content'>
        {this.state.lists.length>0? <AtRadio
            options={this.state.lists}
            value={this.state.choosed}
            onClick={this.handleChange}
        />:<View className='no-tips'>暂无可派单师傅</View>
          }
      </View>
      <View className='foot'>
        <AtButton onClick={this.dispatchOrderNow} className='foot-btn' type='primary'>分配工单</AtButton>
      </View>
    </View>)
  }
}
export default Lists as ComponentType
