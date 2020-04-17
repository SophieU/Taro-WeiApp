import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Input, Text} from '@tarojs/components'
import {AtRadio , AtButton } from 'taro-ui'
import './staffs.less'


interface State {
  choosed:string
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
    }
  }
  handleChange=(value)=>{
    this.setState({
      choosed:value
    })
  }
  render(){
    const options = [
      { label: '单选项一', value: 'option1', desc: '1个待处理工单' },
      { label: '单选项二', value: 'option2', desc: '1个待处理工单'  },
      { label: '单选项三禁用', value: 'option3', desc: '21个待处理工单' }
    ]
    return (<View className='page'>
      <View className='top-search'>
        <View className='search-bar'>
          <Image className='search-img' src={require('../../assets/imgs/tmp/img_search.png')}></Image>
          <Input className='search-input'/>
          <Text className='search-text'>搜索</Text>
        </View>
      </View>
      <View className='content'>
        <AtRadio
          options={options}
          value={this.state.choosed}
          onClick={this.handleChange}
        />
      </View>
      <View className='foot'>
        <AtButton className='foot-btn' type='primary'>分配工单</AtButton>
      </View>
    </View>)
  }
}
export default Lists as ComponentType
