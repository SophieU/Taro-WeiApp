import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {inject, observer } from '@tarojs/mobx'
import {View, Image, Button,Text} from '@tarojs/components'
import { getAddLists } from './service'
import './order-add.scss'


type addLists = {
  address:string,
  order:string,
  tag:string
}
interface AddState {
  addressLists:Array<addLists>,
  fromPage:string
}
interface AddProp {
  appStore:object
}
@inject('appStore')
@observer
class OrderAdd extends Component<AddProp,AddState>{
  config: Config = {
    navigationBarTitleText: '地址列表',
    navigationStyle: 'default'
  }
  constructor(props) {
    super(props);
    this.state={
      addressLists:[ ],
      fromPage:'',
    }
  }
  componentDidShow(){
    let from = this.$router.params.from
    this.setState({
      fromPage:from
    })
    this.getOrderLists()
  }
  goEdit=(id?:string)=>{
    Taro.navigateTo({
      url:`/pages/address/add-edit?id=${id}`
    })
  }

  getOrderLists = ()=>{
    Taro.showLoading({title:'加载地址中...'})
    getAddLists().then(res=>{
      Taro.hideLoading()
      if(res.data.code===0){
        this.setState({
          addressLists:res.data.data
        })
        Taro.setStorageSync('addressLists',res.data.data);
        Taro.hideLoading()
      }
    })
  }
  handleClickAdd=(data)=>{
    console.log('data',data)
    const { appStore } = this.props
    // 来自订单跳转
    if(this.state.fromPage==='orderSubmit'){
      appStore.setOrderForm({
        address:data.areaInfo+data.address,
        addressObj:data
      })
      Taro.navigateBack({delta:-1})
      // Taro.navigateTo({url:'/pages/order/order-submit'});
    }else if(this.state.fromPage==='bookOrder'){
      appStore.setOrderForm({
        address:data.areaInfo+data.address,
        addressObj:data
      })
      Taro.navigateBack({delta:-1})
    }
  }
  render(){
    return (<View className='page'>
      {this.state.addressLists.length>0?(<View className='add-lists-wrap'>
        <View className='add-lists'>
          {this.state.addressLists.map((item,index)=>{
            return ( <View className='add-item' key={index} >
              <View className="item-info">
                <View className='item-text' onClick={()=>this.handleClickAdd(item)}>
                  {item.areaInfo} {item.address}
                  {item.isDefault==='Y'?<Text className='item-tag'>默认</Text>:null}
                </View>

              </View>
              <Image className='edit-btn' src={require('../../assets/imgs/tmp/edit.png')} onClick={()=>this.goEdit(item.id)}></Image>
            </View>)
          })}
        </View>
      </View>):(<View className='no-address'>
        <Image className='no-address-img' src={require('../../assets/imgs/tmp/img_blank_location.png')}></Image>
        <View className='no-address-text'>还未添加地址~</View>
      </View>)
      }
      <Button onClick={()=>this.goEdit()} className='add-address'>添加地址</Button>
    </View>)
  }
}
export default OrderAdd as ComponentType
