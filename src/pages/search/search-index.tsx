import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import {View} from '@tarojs/components'

class Search extends Component {
  config: Config = {
    navigationBarTitleText: '搜索',
  }
  render(){
    return (<View>test</View>)
  }
}

export default Search as ComponentType

