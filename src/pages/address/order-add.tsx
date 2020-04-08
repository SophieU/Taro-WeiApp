import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Button} from '@tarojs/components'
import './order-add.less'

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
  }
  constructor() {
    super();
    this.state={
      addressLists:[
        {address:'力宝大夏北区（东北门）', order:'15楼1507', tag:'默认'}
      ]
    }
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
              <Image className='edit-btn' src={require('../../assets/imgs/tmp/edit.png')}></Image>
            </View>)
          })}
        </View>
      </View>):(<View className='no-address'>
        <Image className='no-address-img' src={require('../../assets/imgs/tmp/img_blank_location.png')}></Image>
        <View className='no-address-text'>还未添加地址~</View>
      </View>)
      }
      <Button className='add-address'>添加地址</Button>
    </View>)
  }
}
export default OrderAdd as ComponentType
