import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Button, Text, Navigator, ScrollView} from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import {getLists} from './order-apis'
import {simpleClone} from '../../utils/common'
import './lists.scss'


type ListsType = {
  date:string,
  title:string,
  status:string
}
interface State {
  stateMap:Array<string>,
  current:number,
  lists:{
    STAY_RECEIPT:Array<ListsType>,
    STAY_PAY:Array<ListsType>,
    STAY_COMMENT:Array<ListsType>,
    FINISH:Array<ListsType>,
  }
  pageSize:number,
  pageState:string,
  hasNextPage:object
  pageNo:object
}
class Lists extends Component<{},State>{
  config:Config = {
    navigationBarTitleText:'报修记录',
    navigationStyle:'default'
  }
  constructor() {
    super();
    this.state = {
      stateMap:['STAY_RECEIPT','STAY_PAY','STAY_COMMENT','FINISH'],
      current:0,
      lists:{
        STAY_RECEIPT:[],
        STAY_PAY:[],
        STAY_COMMENT:[],
        FINISH:[],
      },
      pageSize:10,
      pageNo:{
        STAY_RECEIPT:1,
        STAY_PAY:1,
        STAY_COMMENT:1,
        FINISH:1,
      },
      hasNextPage:{
        STAY_RECEIPT:true,
        STAY_PAY:true,
        STAY_COMMENT:true,
        FINISH:true,
      },
      pageState:'STAY_RECEIPT' // 工单状态（取值STAY_RECEIPT、STAY_PAY、STAY_COMMENT、FINISH）
    }
  }
  componentWillMount(){
    this.getOrderLists()
  }
  onPullDownRefresh(){
    this.setState({
      lists:{
        STAY_RECEIPT:[],
        STAY_PAY:[],
        STAY_COMMENT:[],
        FINISH:[],
      },
      pageNo:{
        STAY_RECEIPT:1,
        STAY_PAY:1,
        STAY_COMMENT:1,
        FINISH:1,
      },
      hasNextPage:{
        STAY_RECEIPT:true,
        STAY_PAY:true,
        STAY_COMMENT:true,
        FINISH:true,
      },
      pageState:'STAY_RECEIPT'
    },()=>{
      this.getOrderLists()
    })
  }
  // 获取列表
  getOrderLists(){
    let stateType = this.state.pageState
    if(!this.state.hasNextPage[stateType]){
      Taro.showToast({
        title:'没有更多了',
        icon:'none'
      })
      return
    }
    Taro.showLoading({title:'数据加载中'})
    let params = {
      pageNo:this.state.pageNo[stateType],
      pageSize:this.state.pageSize,
      repairOrderState:this.state.pageState
    }
    getLists(params).then(res=>{
      Taro.hideLoading()
      if(res.data.code===0){
        let data = res.data.data
        this.setState(prevState=>{
          let hasNextPage = simpleClone(prevState.hasNextPage)
          let pageNo = simpleClone(prevState.pageNo)
          let lists = simpleClone(prevState.lists)
          if(data.hasNextPage){
            pageNo[stateType] = data.nextPage
          }
          hasNextPage[stateType] = data.hasNextPage
          lists[stateType] = lists[stateType].concat(data.list)
          return {
            lists:lists,
            pageNo:pageNo,
            hasNextPage:hasNextPage
          }
        })
      }
    })
  }
  // 列表渲染
  renderListItem=(lists)=>{
    return <View className='order-lists'>
      {
        lists.length>0?
        lists.map((item,index)=> {
          return (<Navigator
            className='order-lists-item'
            key={index}
            url={'/pages/custom-order/detail?id='+item.id}
          >
            <View className='order-top'>
              <View className='order-date'>{item.createTime}</View>
              <View className='order-state'>{item.orderStateName}</View>
            </View>

            <View className='order-info'>
              <View className='info-left'>{item.orderSn}</View>
              <View className='order-right'>{item.repairCategoryName}</View>
            </View>
            {
              item.masterName?(<View className='order-row'>
                <View className='info-left'>接单师傅：{item.masterName} <Text className='text-blue'>({item.masterPhone})</Text></View>
              </View>):null
            }
          </Navigator>)
        })
          :(<View className='no-data'>暂无数据~</View>)
      }
    </View>
  }
  handleTab=(index)=>{
    this.setState((prevState)=>{
      return {
        current:index,
        hasNextPage:{
          STAY_RECEIPT:true,
          STAY_PAY:true,
          STAY_COMMENT:true,
          FINISH:true,
        },
        pageNo:{
          STAY_RECEIPT:1,
          STAY_PAY:1,
          STAY_COMMENT:1,
          FINISH:1,
        },
        lists:{
          STAY_RECEIPT:[],
          STAY_PAY:[],
          STAY_COMMENT:[],
          FINISH:[],
        },
        pageState:prevState.stateMap[index]
      }
    },()=>{
      this.getOrderLists()
    })
  }
  onReachBottom(){
    this.getOrderLists()
  }
  render(){
    const tabLists = [{title:'待处理'},{title:'待付款'},{title:'待评价'},{title:'已完成'}]
    return (<View className='page' >
      <AtTabs current={this.state.current} tabList={tabLists} onClick={this.handleTab}>
        <AtTabsPane current={this.state.current} index={0}>
          {this.renderListItem(this.state.lists['STAY_RECEIPT'])}
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1}>
            {this.renderListItem(this.state.lists['STAY_PAY'])}
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={2}>
          {this.renderListItem(this.state.lists['STAY_COMMENT'])}
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={3}>
          {this.renderListItem(this.state.lists['FINISH'])}
        </AtTabsPane>
      </AtTabs>
    </View>)
  }
}
export default Lists as ComponentType
