import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Button, Input, Picker, Navigator,Input} from '@tarojs/components'
import {inject, observer} from '@tarojs/mobx'
import {getSubscribeDetail, submitOrder} from './mall-apis'
import './order-now.scss'


type addressObjType = {
  id:string
  userMobile:string
  userName:string
}
interface State {
  installDate:string
  installTime:string
  productId:string
  address:string
  detail:object
  addressObj:addressObjType
  today:string,
  nowTime:string
}
@inject('appStore')
@observer
class GoodsDetail extends  Component<{},State>{

  config: Config={
    navigationBarTitleText:'预约提交',
    navigationStyle:'default'
  }
  constructor(props) {
    super(props);
    this.state={
      installDate:'',
      installTime:'',
      address:'',
      productId:'',
      detail:{},
      addressObj:{id:'',userMobile:'',userName:''},
      today:'',
      nowTime:''
    }
  }
  componentWillShow(){

  }
  componentDidShow(){
    let id = this.$router.params.id
    this.getDetail(id)
    const orderForm = this.props.appStore.orderForm
    let currentTime = new Date()
    let today = `${currentTime.getFullYear()}-${currentTime.getMonth()+1}-${currentTime.getDate()}`
    let nowTime = `${currentTime.getHours()}:${currentTime.getMinutes()}`
    console.log(orderForm.addressObj)
    this.setState({
      address:orderForm.address,
      addressObj:orderForm.addressObj,
      productId:id,
      today:today,
      nowTime:nowTime
    })
  }
  handleInputChange= (e,propName)=>{
    let value = e.detail.value
    this.setState(prevState=>{
      let addressObj = prevState.addressObj
      addressObj[propName] = value
      return {addressObj}
    })
  }
  // 获取商品详情
  getDetail=(id)=>{
    getSubscribeDetail(id).then(res=>{
      if(res.data.code===0){
        this.setState({
          detail:res.data.data
        })
      }
    })
  }
  onDateChange=(e)=>{
    let value = e.detail.value
    this.setState({
      installDate:value
    })
  }
  onTimeChange=(e)=>{
    let value = e.detail.value
    this.setState({
      installTime:value
    })
  }
  submitBook=()=>{
    let {installDate,installTime, productId} = this.state
    if(installDate.length<=0||installTime.length<=0){
      Taro.showToast({
        title:'请选择上门日期和时间',
        icon:'none'
      })
      return
    }
    let params = {
      "repairAddressId":this.state.addressObj.id,
      "productId":productId,
      "userPhone":this.state.addressObj.userMobile,
      "username":this.state.addressObj.userName,
      "hopeDoorTime":`${installDate} ${installTime}:00`
    }
    Taro.showLoading({title:'提交中'})
    submitOrder(params).then(res=>{
      Taro.hideLoading()
      if(res.data.code===0){
        let orderId = res.data.data
        Taro.showModal({
          title:'温馨提示',
          content:'您的预约订单已提交，可在【我的】-【预约订单】中查看',
          confirmText:'查看订单',
          cancelText:'回到首页'
        }).then(res=>{
          if(res.confirm){
            Taro.redirectTo({
              url:'/pages/mall/order-lists-custom'
            })
          }else{
            Taro.reLaunch({
              url:'/pages/index/index'
            })
          }
        })
      }else{
        Taro.showToast({
          title:res.data.msg,
          icon:'none'
        })
      }
    })

  }
  render(){


    return (
      <View className='page'>
        <View className='form-wrap'>
          <View className='goods-info'>
            <Image className='goods-img' src={this.state.detail.productImage}></Image>
            <View className='goods-desc'>
              <View className='goods-title'>{this.state.detail.productJingle}</View>
              <View className='goods-price'>￥ {this.state.detail.productPrice}</View>
            </View>
          </View>
          <View className='form-item'>
            <View className='form-label'>预约地址：</View>
            <View className='form-control pick-add'>
              <Navigator className='add-input' url='/pages/address/order-add?from=bookOrder' >{this.state.address?this.state.address:'请选择地址'}</Navigator>
            </View>
          </View>
          <View className='form-item'>
            <View className='form-label'>联系人：</View>
            <View className='form-control '>
              <Input className='input-control' type='text' placeholder='请输入联系人' value={this.state.addressObj.userName} onChange={(e)=>this.handleInputChange(e,'userName')}/>
            </View>
          </View>
          <View className='form-item'>
            <View className='form-label'>联系电话：</View>
            <View className='form-control '>
              <Input className='input-control' type='text' placeholder='请输入联系电话' value={this.state.addressObj.userMobile} onChange={(e)=>this.handleInputChange(e,'userMobile')}/>
            </View>
          </View>

          <View className='form-item'>
            <View className='form-label'>预约安装日期：</View>
            <View className='form-control'>
              <Picker mode='date' onChange={this.onDateChange} start={this.state.today}>
                <View className='picker'>
                 {this.state.installDate?this.state.installDate:'请选择'}
                </View>
              </Picker>

            </View>
          </View>
          <View className='form-item'>
            <View className='form-label'>预约安装时间：</View>
            <View className='form-control'>
              <Picker mode='time' onChange={this.onTimeChange} start={this.state.nowTime}>
                <View className='picker'>
                  {this.state.installTime?this.state.installTime:'请选择'}
                </View>
              </Picker>
            </View>
          </View>

        </View>
        <Button onClick={this.submitBook} className='orange-btn lang-btn submit-now'>确认提交</Button>
      </View>
    )
  }
}
export default GoodsDetail as ComponentType
