import {ComponentType} from 'react'
import Taro, {Component,Config} from '@tarojs/taro'
import {WebView} from '@tarojs/components'
type Prop = {
  target:string,
  title:string
}
class NewPage extends Component<Prop,{}>{
  defaultProps={
    title:''
  }
  config: Config ={
    navigationBarTitleText: this.props.title,
  }
  render(){
    let target = this.$router.params.target
    return <WebView
      src={target}
      style={{width:'100vw',height:'100vh'}}
    />
  }
}

export default NewPage as ComponentType
