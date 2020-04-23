import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, ScrollView, Button, Text, Block,Navigator} from '@tarojs/components'
import {AtButton,AtTabs, AtTabsPane } from 'taro-ui'
import {repairOrderLists} from './staff-apis'
import './order.scss'


interface State {
  current:number
  pageNo:number
  pageSize:number
  hasNextPage:boolean
  repairOrderState:string
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
      current:0,
      pageNo:1,
      pageSize:5,
      hasNextPage:true,
      repairOrderState:'PENDING_ORDER',
      lists:[],
      orderStateOptions:['PENDING_ORDER','HANDLEING','FINISH','EXCEPTION'],
    }
  }
  componentWillMount(){
    this.getLists()
  }
  getLists= ()=>{
    let {pageNo,pageSize,hasNextPage} = this.state
    if(!hasNextPage){
      Taro.showToast({
        title:'没有更多了',
        icon:'none'
      })
      return
    }
    let params = {
      pageNo,
      pageSize,
      hasNextPage,
      userId:Taro.getStorageSync('userId'),
      masterId:Taro.getStorageSync('masterInfo').masterId,
      repairOrderState:this.state.repairOrderState
    }
    Taro.showLoading({title:'加载中'})
    repairOrderLists(params).then(res=>{
      Taro.hideLoading()
      if(res.data.code===0){
        let data = res.data.data
        this.setState(prevState=>{
          return {
            hasNextPage:data.hasNextPage,
            pageNo:data.hasNextPage?data.nextPage:data.pageNo,
            lists:prevState.lists.concat(data.list)
          }
        })
      }
    })
  }
  handleClick=(value)=>{
    this.setState(prevState=>{
      return {
        current:value,
        lists:[],
        pageNo:1,
        pageSize:5,
        hasNextPage:true,
        repairOrderState:prevState.orderStateOptions[value]
      }
    },()=>{
      this.getLists()
    })
  }
  render(){
    const tabList = [{ title: '待处理' }, { title: '处理中' }, { title: '已完成' }, { title: '申述中' }]
    return (<ScrollView
      className='page'
      scrollY
      onScrollToLower={this.getLists}
    >
      <AtTabs className='tabs-header' current={this.state.current} tabList={tabList} onClick={this.handleClick}></AtTabs>
      <View className='order-lists'>
        {
          this.state.lists.map(item=>{
            return ( <View key={item.id} className='order-item'>
              <Navigator url={'/pages/staff-order/detail?id='+item.id}>
                <View className='order-row'>
                  <View className='row-title'>工单编号</View>
                  <View className='row-info'>{item.orderSn}</View>
                </View>
                <View className='order-row'>
                  <View className='row-title'>工单状态</View>
                  <View className='row-info'><Text className='text-warm'>{item.orderStateName}</Text></View>
                </View>
                <View className='order-row'>
                  <View className='row-title'>维修地点</View>
                  <View className='row-info'>{item.address||'无'}</View>
                </View>
                <View className='order-row'>
                  <View className='row-title'>报修内容</View>
                  <View className='row-info'>{item.repairCategoryName}</View>
                </View>
              </Navigator>
            </View>)
          })
        }

      </View>
    </ScrollView>)
  }
}
export default Lists as ComponentType
