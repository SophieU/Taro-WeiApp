import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Button, Block} from '@tarojs/components'
import {AtTabs, AtTabsPane ,AtButton , AtTag  } from 'taro-ui'
import './admin.less'

class Admin extends Component{
  config: Config = {
    navigationBarTitleText:'工单管理'
  }
  constructor() {
    super();
    this.state = {
      currentTab:0,
      orderLists:[{}]
    }
  }
  renderFootBtn = (orderType:string)=>{
    switch (orderType) {
      case 'conflic':
      {
        /*重新派单*/
        return ( <Block>
          <AtButton className='foot-btn'>重新派单</AtButton>
          <AtButton onClick={this.handleReject} className='foot-btn' type='primary'>驳回申诉</AtButton>
        </Block>)
      }
      break;
      case 'cancel':
      {
        /*取消订单*/
        return (<Block>
          <AtButton className='foot-btn'>取消订单</AtButton>
          <AtButton className='foot-btn'>驳回申诉</AtButton>
        </Block>)
      }
      break;
      case 'close':
      {
        // 关闭订单
        return (<Block>
          <AtButton className='foot-btn'>关闭订单</AtButton>
          <AtButton className='foot-btn'>驳回申诉</AtButton>
        </Block>)
      }
      break;
      case 'nomal':
      {
        // 普通报修单
        return (<Block>
          <AtButton className='foot-btn'>取消工单</AtButton>
          <AtButton className='foot-btn'>驳回申诉</AtButton>
        </Block>)
      }
      break;
    }
  }
  handleReject = ()=>{
    Taro.showModal({
      title: '提示',
      content: '你确认对该工单进行驳回申诉操作吗？',
    })
      .then(res => console.log(res.confirm, res.cancel))
  }
  handleRePublish = ()=>{
    Taro.showModal({
      title: '提示',
      content: '你确认对该工单进行重新派单操作吗？',
    })
      .then(res => console.log(res.confirm, res.cancel))
  }

  render(){
    return (<View className='page'>
      <AtTabs current={this.state.currentTab} tabList={[{ title: '工单处理' }]}>
        <AtTabsPane current={this.state.currentTab} index={0} >
          <View className='order-wrap'>
            {this.state.orderLists.length<=0?( <View className='nothing'>这里空空如也~</View>):null}
            <View className='order-lists'>
              <View className='order-item'>
                <View className='item-header'>
                  <View className='header-time'>2019-09-07</View>
                  <View className='header-type'>申诉</View>
                </View>
                <View className='order-number'>订单编号：BB16564645645465465456</View>
                <View className='order-info'>
                  <View className='info-item'>
                    <Text className='info-label'>报修类型：</Text>
                    <Text className='info-inner'>能源服务-燃气服务 <Text className='tips'>（同意上门费）</Text></Text>
                  </View>
                  <View className='info-item'>
                    <Text className='info-label'>报修地址：</Text>
                    <Text className='info-inner'>33小区</Text>
                  </View>
                  <View className='info-item'>
                    <Text className='info-label'>详细地址：</Text>
                    <Text className='info-inner'>33小区 15-131</Text>
                  </View>
                  <View className='info-item'>
                    <Text className='info-label'>联系人姓名：</Text>
                    <Text className='info-inner'>哈哈</Text>
                  </View>
                  <View className='info-item'>
                    <Text className='info-label'>用户手机：</Text>
                    <Text className='info-inner'>152***6821</Text>
                  </View>
                  <View className='divider'></View>
                  <View className='info-item'>
                    <Text className='info-label'>接单师傅：</Text>
                    <Text className='info-inner'>郑为</Text>
                  </View>
                  <View className='info-item'>
                    <Text className='info-label'>工单状态：</Text>
                    <Text className='info-inner'>异常</Text>
                  </View>
                  <View className='info-item'>
                    <Text className='info-label'>申诉请求：</Text>
                    <Text className='info-inner'>重新派单</Text>
                  </View>
                  <View className='info-item'>
                    <Text className='info-label'>申诉原因：</Text>
                    <Text className='info-inner'>能力之外</Text>
                  </View>
                </View>
                <View className='order-foot'>
                  {this.renderFootBtn('conflic')}
                </View>
              </View>
            </View>
          </View>
        </AtTabsPane>
      </AtTabs>
    </View>)
  }
}
export default Admin as ComponentType
