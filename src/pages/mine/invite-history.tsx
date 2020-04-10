import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, ScrollView, Block} from '@tarojs/components'
import { AtTimeline } from 'taro-ui'
import {inviteHistory } from './services'
import './qr-code.scss'

interface State {
  lists:Array<object>
  hasNextPage: boolean
  pageNo: number
  totalCount: number
}
class Mine extends  Component{
  state:State = {
    lists:[],
    hasNextPage:true,
    pageNo:1,
    totalCount:0
  }
  config: Config={
    navigationBarTitleText:'邀请记录'
  }
  componentWillMount(){
    this.getLists()
  }
  getLists= ()=>{
    if(!this.state.hasNextPage){
      Taro.showToast({title: '已经到底啦~',icon:'none'})
      return
    }
    let param = {pageNo:this.state.pageNo,pageSize:10}
    Taro.showLoading({title:'加载中'})
    inviteHistory(param).then(res=>{
      Taro.hideLoading()
      if(res.data.code===0){
        let data = res.data.data
        this.setState((prevState:State)=>{
          return {
            hasNextPage:data.hasNextPage,
            lists:prevState.lists.concat(data.list),
            pageNo: data.hasNextPage?data.nextPage:data.pageNo,
            totalCount: data.totalCount
          }
        })
      }
    })
  }
  formatTimeLineData(data){
    let res = data.map(item=>{
      return {
        title: item.date,
        content:[`成功邀请手机号码${item.phone}的用户`]
      }
    })
    return res
  }
  renderListsBlock(blockInfo){
    return (<Block >
      <View className='history-year'>{blockInfo.year}</View>
      <AtTimeline
        className='at-timeline-custom'
        pending
        items={this.formatTimeLineData(blockInfo.list)}
      >
      </AtTimeline>
    </Block>)
  }
  render(){
    return (
      <ScrollView
        className='invite-history-page'
        scrollY
        scrollWithAnimation
        onScrollToLower={this.getLists}
      >
        <View className='page-title'>共邀新 <Text className='blue-text'>{this.state.totalCount}</Text>人</View>
        <View className='history-block'>
          {
            this.state.lists.map((item, index)=>{
              return (<View key={index}>{this.renderListsBlock(item)}</View>)
            })
          }
        </View>
      </ScrollView>
    )
  }
}
export default Mine as ComponentType
