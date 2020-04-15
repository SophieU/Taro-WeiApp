import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Text, Navigator, Input, Swiper, SwiperItem, RichText, Radio, Button, Swiper, SwiperItem } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { getTopBanner, getOrderContent, getOrderContenNo, getTipsOther } from './order-api'
import { getDefaultAdd } from '../address/service'
import {jumpTo as jumpToUtil} from "../../utils/common";
import './order-submit.scss'

type Service = {
  "id": string,
  "name": string,
  "parentId": string,
  "parentName": string,
  "serviceFee": number,
  "dtdServiceFee": number,
  "hasDtdServiceFee": string,
  "isPrepayDtd": string,
  "description":string,
  "serviceDescription": string,
  "repairRegionId": string,
  "repairStationId": string
}
interface State {
  bannerLists:Array<object>
  current:number
  repairCategoryId:string
  repairUserAddressId:string
  serviceContent:Service
  address:string
  otherTips:string,
  serviceFeeTips:string,
  serviceTimeTips:string,
}


class OrderSubmit extends Component<{},State>{
  config: Config = {
    navigationBarTitleText: '订单确认',
    navigationStyle:'default'
  }
  state={
    bannerLists:[],
    current:0,
    repairCategoryId:'',
    repairUserAddressId:'',
    address:'',
    otherTips:'',
    serviceFeeTips:'',
    serviceTimeTips:'',
    serviceContent:{
      "id": "",
      "name": "",
      "parentId": "",
      "parentName": "",
      "serviceFee": 0,
      "dtdServiceFee": 0,
      "hasDtdServiceFee": "N",
      "isPrepayDtd": "N",
      "description":"服务说明",
      "serviceDescription": "服务说明",
      "repairRegionId": "",
      "repairStationId": ""
    }
  }
  componentWillMount(){
    let id = this.$router.params.id
    this.setState({
      repairCategoryId:id
    })
    this.topBanner()
    this.getDefaultAddress()
    this.getTips()
  }
  topBanner= ()=>{
    getTopBanner().then(res=>{
      if(res.data.code===0){
        let data = res.data.data
        if(data){
          this.setState({
            bannerLists:data
          })
        }
      }
    })
  }
  getDefaultAddress = ()=>{
    getDefaultAdd().then(res=>{
      if(res.data.code===0){
        let data = res.data.data
        if(data&&data.id){
          let data = res.data.data
          this.setState({
            repairUserAddressId: data.id,
            address:data.areaInfo + data.address
          })
          this.getOrderContentWithAdd()
        }else{
          this.getOrderContentNone()
        }

      }else{
        console.log('默认地址获取失败：' + res.data.msg)
      }
    })
  }
  // 有默认地址获取内容
  getOrderContentWithAdd = ()=>{
    let params = {
      repairUserAddressId:this.state.repairUserAddressId,
      repairCategoryId:this.state.repairCategoryId,
    }
    getOrderContent(params).then(res=>{
      if(res.data.code===0){
        this.setState({
          serviceContent:res.data.data
        })
      }
    })
  }
  // 无默认地址获取内容
  getOrderContentNone = ()=>{
    getOrderContenNo(this.state.repairCategoryId).then(res=>{
      if(res.data.code===0){
        this.setState({
          serviceContent:res.data.data
        })
      }
    })
  }
  // 获取服务时间，费用，其他等说明
  getTips=()=>{
    getTipsOther().then(res=>{
      if(res.data.code===0){
        let data = res.data.data
        this.setState({
          otherTips:data.other,
          serviceFeeTips:data.serviceFee,
          serviceTimeTips:data.serviceTime
        })
      }
    })
  }
  submitForm=()=>{
    Taro.showModal({
      title: '温馨提示',
      content: '空调维修师傅出工即需要先支付上门费20.00元且无法退款',
      confirmText:'我同意',
      cancelText:'算了吧',
    }).then(res => console.log(res.confirm, res.cancel))

    Taro.showToast({
      title: '当前服务地址暂不支持该服务项目',
      icon: 'none',
      duration: 2000
    }).then(res => console.log(res))
  }
  // 支付成功
  paySuccess = ()=>{
    Taro.showModal({
      content: '支付成功',
      confirmText:'查看订单',
      cancelText:'返回首页',
    }).then(res => {
      console.log(res.confirm, res.cancel)
      if(res.confirm){
        // 我的
        Taro.reLaunch({
          url: '/pages/index/index',
        })
      }else{
        // 首页
        Taro.reLaunch({
          url: '/pages/index/index',
        })
      }
    })
  }
  // 提交成功
  submitResult=(res:boolean)=>{
    if(res){
      Taro.showModal({
        title:'操作提示',
        content: '提交成功',
        confirmText:'查看报修单',
        cancelText:'返回首页',
      })
    }else{
      Taro.showModal({
        title:'操作提示',
        content: '提交失败',
        confirmText:'拔打客服',
        cancelText:'返回首页',
      })
    }
  }
  // banner跳转
  jumpTo=(info,otherType?:string)=>{
    jumpToUtil(info,otherType)
  }
  toggleTab=(value)=>{
    this.setState({
      current: value
    })
  }
  render(){

    return (<View className='page'>
      {
        this.state.bannerLists.length>0?
          (<Swiper
            className='order-banner'
            circular
            autoplay>
            {
              this.state.bannerLists.map(item=>{
                return ( <SwiperItem key={item.id}>
                  <Image onClick={()=>this.jumpTo(item)} className='order-banner' src={item.imgName}></Image>
                </SwiperItem>)
              })
            }
          </Swiper>)
          :null
      }
      <View className='service-info'>
        <View className='info-item'>
          <Image className='info-ico' src={require('../../assets/imgs/tmp/img_project.png')}></Image>
          <Text className='info-title'>服务类型</Text>
          <View className='info-content'>{this.state.serviceContent.parentName}</View>
        </View>
        <View className='info-item'>
          <Image className='info-ico' src={require('../../assets/imgs/tmp/img_type.png')}></Image>
          <Text className='info-title'>服务项目</Text>
          <View className='info-content'>{this.state.serviceContent.name}</View>
        </View>
        <View className='info-item'>
          <Image className='info-ico' src={require('../../assets/imgs/tmp/img_explain.png')}></Image>
          <Text className='info-title'>服务说明</Text>
          <View className='info-content'>{this.state.serviceContent.description}</View>
        </View>
        <View className='info-item'>
          <Image className='info-ico' src={require('../../assets/imgs/tmp/img_cash.png')}></Image>
          <Text className='info-title'>服务收费</Text>
          <View className='info-content'>服务费{this.state.serviceContent.serviceFee}元起</View>
        </View>
        <View className='info-item'>
          <Image className='info-ico' src={require('../../assets/imgs/tmp/img_cash.png')}></Image>
          <Text className='info-title'>上门费</Text>
          <View className='info-content'>服务费 {this.state.serviceContent.dtdServiceFee}元起</View>
        </View>
      </View>

      <View className='service-form'>
        <View className='form-item'>
          <Image className='form-ico' src={require('../../assets/imgs/tmp/img_location.png')}></Image>
          <Text className='form-label'>服务地址</Text>
          <Navigator className='form-nav info-content' url='/pages/address/order-add?from=orderSubmit' >{this.state.address?this.state.address:'请选择地址'}</Navigator>
        </View>
        <View className='form-item'>
          <Image className='form-ico' src={require('../../assets/imgs/tmp/img_call.png')}></Image>
          <Text className='form-label'>联系方式</Text>
          <Input type='text' placeholder='请输入联系方式' />
        </View>

      </View>
      <AtTabs current={this.state.current} tabList={[{ title: '服务说明' }, { title: '服务时间' }, { title: '服务费用' }, { title: '其他' }]} onClick={this.toggleTab}>
        <AtTabsPane current={this.state.current} index={0} >
          <View className='tips-inner'>
            <RichText nodes={this.state.serviceContent.serviceDescription}/>
          </View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1}>
          <View className='tips-inner'>
            <RichText nodes={this.state.serviceTimeTips}/>
          </View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={2}>
          <View className='tips-inner'>
            <RichText nodes={this.state.serviceFeeTips}/>
          </View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={3}>
          <View className='tips-inner'>
            <RichText nodes={this.state.otherTips}/>
          </View>
        </AtTabsPane>
      </AtTabs>

      <View className="submit-bar">
        <View className='protocal'>
          <Radio color='#216EC6' value='1' checked>已同意 <Navigator className='outlink'>用户协议</Navigator></Radio>
        </View>
        <View className='btn-wrap'>
          <Button onClick={this.submitForm} className='btn-form'>提交订单</Button>
        </View>
      </View>
    </View>)
  }
}
export default OrderSubmit as ComponentType
