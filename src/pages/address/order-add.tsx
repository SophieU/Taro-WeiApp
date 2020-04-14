import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Button} from '@tarojs/components'
import { getAddLists } from './service'
import './order-add.scss'

type addLists = {
  address:string,
  order:string,
  tag:string
}
interface AddState {
  addressLists:Array<addLists>
}
class OrderAdd extends Component<{},AddState>{
  config: Config = {
    navigationBarTitleText: '选择地址',
    navigationStyle: 'default'
  }
  constructor() {
    super();
    this.state={
      addressLists:[ ]
    }
  }
  componentWillMount(){
    this.getOrderLists()
  }
  goEdit=()=>{
    Taro.navigateTo({
      url:'/pages/address/add-edit'
    })
  }
  getOrderLists = ()=>{
    getAddLists().then(res=>{
      console.log(res.data)
      if(res.data.code===0){
        this.setState({
          addressLists:res.data.data
        })
      }
    })
  }
  render(){
    return (<View className='page'>
      {this.state.addressLists.length>0?(<View className='add-lists-wrap'>
        <View className='add-lists'>
          {this.state.addressLists.map((item,index)=>{
            return ( <View className='add-item' key={index}>
              <View className="item-info">
                <View className='item-text'>{item.address} {item.order}</View>
                {item.tag?<View className='item-tag'>{item.tag}</View>:null}
              </View>
              <Image className='edit-btn' src={require('../../assets/imgs/tmp/edit.png')} onClick={this.goEdit}></Image>
            </View>)
          })}
        </View>
      </View>):(<View className='no-address'>
        <Image className='no-address-img' src={require('../../assets/imgs/tmp/img_blank_location.png')}></Image>
        <View className='no-address-text'>还未添加地址~</View>
      </View>)
      }
      <Button onClick={this.goEdit} className='add-address'>添加地址</Button>
    </View>)
  }
}
export default OrderAdd as ComponentType
