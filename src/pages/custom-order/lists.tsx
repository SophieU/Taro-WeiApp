import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Button, Text, Navigator} from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import './lists.scss'


interface Lists{
  date:string,
  title:string,
  status:string
}
interface State {
  current:number,
  lists:Array<object>
}
class Lists extends Component<{},State>{
  config:Config = {
    navigationBarTitleText:'报修记录',
    navigationStyle:'default'
  }
  constructor() {
    super();
    this.state = {
      current:0,
      lists:[{date:'2019/10/10 10:10', title:'换锁儿呀呀呀',status:'待服务'}]
    }
  }
  renderListItem=(lists:Array<Lists>)=>{
    return <View className='order-lists'>
      {
        lists.map((item,index)=> {
          return (<View className='order-lists-item' key={index}>
            <View className='order-date'>{item.date}</View>
            <View className='order-info'>
              <View className='info-left'>{item.title}</View>
              <View className='order-right'>{item.status}</View>
            </View>
          </View>)
        })
      }
    </View>
  }
  handleTab=(index)=>{
    this.setState({
      current:index
    })
  }
  render(){
    const tabLists = [{title:'待处理'},{title:'待付款'},{title:'待评价'},{title:'已完成'},]
    return (<View className='page'>
      <AtTabs current={this.state.current} tabList={tabLists} onClick={this.handleTab}>
        <AtTabsPane current={this.state.current} index={0}>
          {this.renderListItem(this.state.lists)}
        </AtTabsPane>
        {/*<AtTabsPane current={this.state.current} index={1}>*/}
        {/*    {this.renderListItem()}*/}
        {/*</AtTabsPane>*/}
        {/*<AtTabsPane current={this.state.current} index={2}>*/}
        {/*  {this.renderListItem()}*/}
        {/*</AtTabsPane>*/}
        {/*<AtTabsPane current={this.state.current} index={3}>*/}
        {/*  {this.renderListItem()}*/}
        {/*</AtTabsPane>*/}
      </AtTabs>
    </View>)
  }
}
export default Lists as ComponentType
