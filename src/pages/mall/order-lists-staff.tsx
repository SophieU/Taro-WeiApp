import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Button, Text, Navigator} from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import './order-lists.less'

class OrderListsStaff extends  Component{
  config: Config={
    navigationBarTitleText:'订单列表',
    navigationStyle:'default'
  }
  constructor() {
    super();
    this.state={
      current: 0
    }
  }
  handleClick=(index)=>{
    this.setState({
      current: index
    })
  }
  render(){
    return (
      <View className='page order-lists-custom'>
        <AtTabs current={this.state.current} tabList={[
          { title: '抢单' },
          { title: '待服务' },
          { title: '已完成' },
        ]} onClick={this.handleClick}>
          <AtTabsPane current={this.state.current} index={0} >
              <View className='order-lists'>
                <View className='order-item'>
                  <View className='order-top'>
                    <View className='order-title'>某某商家</View>
                    <View className='order-status'>
                      <Text>已完成</Text>
                    </View>
                  </View>
                  <View className='item-row'>
                    <Image className='order-img' src={require('../../assets/imgs/tmp/1.png')}></Image>
                    <View className='goods-detail'>
                      <View className='goods-title'>这是一个什么商品呕吐勤勤工哎呀哎呀哎呀</View>
                      <View className='goods-time'>2020/01/02 10:00</View>
                    </View>
                    <View className='order-price'>
                      <View className='price'>￥ 90.00</View>
                    </View>
                  </View>
                </View>

                <View className='order-item'>
                  <View className='order-top'>
                    <View className='order-title'>某某商家</View>
                    <View className='order-status'>
                      <Text>已完成</Text>
                    </View>
                  </View>
                  <View className='item-row'>
                    <Image className='order-img' src={require('../../assets/imgs/tmp/1.png')}></Image>
                    <View className='goods-detail'>
                      <View className='goods-title'>这是一个什么商品呕吐勤勤工哎呀哎呀哎呀</View>
                      <View className='goods-time'>2020/01/02 10:00</View>
                    </View>
                    <View className='order-price'>
                      <View className='price'>￥ 90.00</View>
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
        </AtTabs>


      </View>
    )
  }
}
export default OrderListsStaff as ComponentType
