import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {inject, observer } from '@tarojs/mobx'
import {View, Image, Text, Navigator, Input, Textarea , Swiper, SwiperItem, RichText, Radio, Button, Swiper, SwiperItem } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { getTopBanner, getOrderContent, getOrderContenNo, getTipsOther, needNightFee, submitOrder, getPrePayOrder, getWxPay} from './order-api'
import { getDefaultAdd } from '../address/service'
import {jumpTo as jumpToUtil} from "../../utils/common";
import {validateTel} from '../../utils/regexpValidate'
import './order-submit.scss'
import order from "../staff-order/order";

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
  userMobile:string,
  otherTips:string,
  serviceFeeTips:string,
  serviceTimeTips:string,
  nightFee:object
  repairOrderOfferPlanDtoList:Array<object>
  repairUserAddressObj:object
  faultReason:string
}

@inject('appStore')
@observer
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
    repairUserAddressObj:{},
    address:'',
    userMobile:'',
    faultReason:'',
    otherTips:'',
    serviceFeeTips:'',
    serviceTimeTips:'',
    nightFee:{
      serviceAmount:0,
      hopeDoorTime:'',
    },
    repairOrderOfferPlanDtoList:[], //收费项目列表
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
    this.isNeedNightFee()
  }
  componentDidShow(){
    const orderForm = this.props.appStore.orderForm
    this.setState({
      address:orderForm.address,
      userMobile:orderForm.userMobile,
      repairUserAddressId:orderForm.addressObj.id,
      repairUserAddressObj:orderForm.addressObj
    })
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
  // 获取默认地址
  getDefaultAddress = ()=>{
    getDefaultAdd().then(res=>{
      if(res.data.code===0){
        let data = res.data.data
        if(data){
          this.setState(()=>{
            return {
              repairUserAddressId: data.id,
              address:data.areaInfo + data.address,
              repairUserAddressObj:data
            }
          },()=>{
            this.props.appStore.setOrderForm({
              address:data.areaInfo + data.address,
              addressObj:data
            })
            this.getOrderContentWithAdd()
          })

        }else{
          this.getOrderContentNone()
        }

      }else{
        console.log('默认地址获取失败：' + res.data.msg)
      }
    })
  }
  // 判断是否需要夜间费
  isNeedNightFee = ()=>{
    needNightFee().then(res=>{
      if(res.data.code===0){
        let data = res.data.data;
        let feePro ;
        if(data.serviceAmount>0){
           feePro = {
            planType:'NIGHT_FEE',
            serviceCost:data.serviceAmount
          }
        }
        this.setState((prevState:State)=>{
          let repairOrderOfferPlanDtoList = prevState.repairOrderOfferPlanDtoList
          if(typeof feePro === 'object'){
            repairOrderOfferPlanDtoList.push(feePro)
          }
         return {
           nightFee:{
             serviceAmount: data.serviceAmount,
             hopeDoorTime:data.hopeDoorTime,
           },
           repairOrderOfferPlanDtoList:repairOrderOfferPlanDtoList
         }
        })
      }
    })
  }
  // 有默认地址获取内容
  getOrderContentWithAdd = ()=>{

    let params = {
      repairUserAddressId:this.state.repairUserAddressId,
      repairCategoryId:this.state.repairCategoryId,
    }
    Taro.showLoading({title:'加载服务中'})
    getOrderContent(params).then(res=>{
      Taro.hideLoading()
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
  // 提交表单
  submitForm=()=>{
    let serviceContent = this.state.serviceContent
    let params = {
      repairRegionId:this.state.serviceContent.repairRegionId,
      repairAddressId:this.state.repairUserAddressId,
      address:this.state.address,
      tllPhone:this.state.userMobile,
      username:this.state.repairUserAddressObj.userName,
      repairCategoryId:this.state.repairCategoryId,
      faultReason:this.state.faultReason,
      hopeDoorTime:this.state.nightFee.hopeDoorTime,
      repairStationId:this.state.serviceContent.repairStationId,
      repairOrderOfferPlanDtoList:this.state.repairOrderOfferPlanDtoList,
    }
    if(!params.tllPhone||!params.address||!validateTel(params.tllPhone)){
      Taro.showToast({
        title:'请完整并正确填写地址和地址',
        icon:'none'
      })
      return
    }
    // 预收上门费
    if(serviceContent.isPrepayDtd==='Y'){
      Taro.showModal({
        title: '温馨提示',
        content: `当前服务需要预付上门费${serviceContent.dtdServiceFee}元`,
        confirmText:'我同意',
        cancelText:'算了吧',
      }).then(res => {
          if(res.confirm){
            //发起预付上门费支付
            Taro.showLoading({title:'获取支付信息中'})
            getPrePayOrder(params).then(res=>{
              Taro.hideLoading()
              if(res.data.code===0){
                let params = {
                  "orderIds":[res.data.data.orderSn],
                  "payBusinessType":"W_REPAIR_DOOR_FEE",
                  "payCode":"WX_XCX"
                }
                this.startPay(params)
              }
            })
          }
        })
    }else{
      // 直接提交

      if(this.state.serviceContent.dtdServiceFee>0){
        params.repairOrderOfferPlanDtoList.push({
          planType:'WAITING_DOOR_ING_FEE',
          serviceCost:this.state.serviceContent.dtdServiceFee
        })
      }
      submitOrder(params).then(res=>{
        if(res.data.code===0){
          this.orderSuccess()
        }else{
          Taro.showToast({
            title:res.data.msg,
            icon:'none'
          })
        }
      })
    }
  }
  // 调起支付
  startPay = (params)=>{
    getWxPay(params).then(res=>{
      if(res.data.code===0){
        let data = res.data.data
        Taro.requestPayment({
          success:()=>{
            this.orderSuccess()
              console.log('接口调用成功')
          },
          fail (res) {
            console.log('接口调用失败')
            console.log('支付失败')
          },
          ...data
        })
      }
    })
  }
  // 支付成功
  orderSuccess = ()=>{
    Taro.showModal({
      title:'操作提示',
      content:'订单提交成功,您可以在【我的】-【报修订单】中查看',
      confirmText:'查看报修单',
      cancelText:'返回首页',
    }).then(resInner=>{
      if(resInner.confirm){
        Taro.redirectTo({
          url:'/pages/custom-order/lists'
        })
      }
      if(resInner.cancel){
        Taro.reLaunch({url:'/pages/index/index'})
      }
    })
  }
  // banner跳转
  jumpTo=(info,otherType?:string)=>{
    jumpToUtil(info,otherType)
  }
  // 切换tab
  toggleTab=(value)=>{
    this.setState({
      current: value
    })
  }
  // 输入手机号
  handleInputMobile=(e)=>{
    let value = e.detail.value
    this.setState({
      userMobile:value
    })
    this.props.appStore.setOrderForm({userMobile:value})
  }
  handleInputReason=(e)=>{
    let value = e.detail.value
    this.setState({
      faultReason:value
    })
  }

  render(){
    return (<View className='page order-submit-page'>
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
          <View className='info-content'>服务费 <Text className='text-warm'>{this.state.serviceContent.serviceFee}</Text> 元起</View>
        </View>
        {
          this.state.serviceContent.hasDtdServiceFee!=='Y'
            ?null
            :( <View className='info-item'>
              <Image className='info-ico' src={require('../../assets/imgs/tmp/img_cash.png')}></Image>
              <Text className='info-title'>上门费</Text>
              <View className='info-content'>服务费 <Text className='text-warm'>{this.state.serviceContent.dtdServiceFee}</Text>元起
                {this.state.serviceContent.isPrepayDtd==='Y'?<Text className='little-tips'>(需要预付)</Text>:null}
              </View>
            </View>)
        }
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
          <Input type='text' value={this.state.userMobile} onInput={this.handleInputMobile} placeholder='请输入联系方式' />
        </View>
        <View className='form-item form-item-textarea'>
          <Image className='form-ico' src={require('../../assets/imgs/tmp/img_call.png')}></Image>
          <Text className='form-label'>故障说明</Text>
          <Textarea className='form-textarea' value={this.state.faultReason} onInput={this.handleInputReason} placeholder='请输入故障说明，最多200字' maxlength={200} />
        </View>
      </View>
      <View className="other-tips">
        <AtTabs className="other-tips-tab" current={this.state.current} tabList={[{ title: '服务说明' }, { title: '服务时间' }, { title: '服务费用' }, { title: '其他' }]} onClick={this.toggleTab}>
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
      </View>


      <View className="submit-bar">
        <View className='protocal'>
          <Radio color='#216EC6' value='1' checked>已同意 <Navigator url='http://ttfwap.yishengyue.cn/arg/E-arg.htm' className='outlink'>用户协议</Navigator></Radio>
        </View>
        <View className='btn-wrap'>
          <Button onClick={this.submitForm} className='btn-form'>提交订单</Button>
        </View>
      </View>
    </View>)
  }
}
export default OrderSubmit as ComponentType
