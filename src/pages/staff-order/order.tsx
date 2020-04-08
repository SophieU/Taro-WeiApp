import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Button, Text} from '@tarojs/components'
import {AtButton,AtTabs, AtTabsPane } from 'taro-ui'
import './order.less'


interface State {
  current:number
}
class Lists extends Component<{},State>{
  config:Config = {
    navigationBarTitleText:'报修订单'
  }
  constructor() {
    super();
    this.state = {
      current:0,
    }
  }
  handleClick=(value)=>{
    this.setState({
      current:value
    })
  }
  render(){
    const tabList = [{ title: '待处理' }, { title: '处理中' }, { title: '已完成' }, { title: '申述中' }]
    return (<View className='page'>
      <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick}>
        <AtTabsPane current={this.state.current} index={0} >
          <View className='order-lists'>
            <View className='order-item'>
              <View className='order-row'>
                <View className='row-title'>工单编号</View>
                <View className='row-info'>59854545454857857857</View>
              </View>
              <View className='order-row'>
                <View className='row-title'>工单状态</View>
                <View className='row-info'><Text className='text-warm'>待上门</Text></View>
              </View>
               <View className='order-row'>
                <View className='row-title'>维修地点</View>
                <View className='row-info'>力宝大厦，N-15-7</View>
              </View>
              <View className='order-row'>
                <View className='row-title'>报修类别</View>
                <View className='row-info'>用气服务</View>
              </View>
              <View className='item-foot'>
                <View className='order-date'>2018/09/10 12：11</View>
                <View className='order-btns'>
                  <Button className='btn default-btn'>申述</Button>
                  <Button className='btn primary-btn'>开始处理</Button>
                  {/*待上门*/}
                  {false?(<Button className='btn primary-btn'>生成报价</Button>):null}
                  {/*待支付*/}
                  {false?(<Button className='btn primary-btn'>继续支付</Button>):null}
                </View>
              </View>
            </View>
          </View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={2}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={3}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
        </AtTabsPane>
      </AtTabs>
    </View>)
  }
}
export default Lists as ComponentType
