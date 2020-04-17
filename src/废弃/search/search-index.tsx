import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import {View} from '@tarojs/components'

class Search extends Component {
  config: Config = {
     : '搜索',
    navigationStyle:'default'
  }
  render(){
    return (<View>test</View>)
  }
}

export default Search as ComponentType

