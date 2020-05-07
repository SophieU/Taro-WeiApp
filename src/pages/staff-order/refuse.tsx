import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Radio, RadioGroup, Button,Text} from '@tarojs/components'
import {refuseRequest, refuseReason, submitRefuse} from './staff-apis'
import './refuse.scss'


class Refuse extends Component{
  config:Config = {
    navigationBarTitleText:'申述',
    navigationStyle:'default'
  }
  state={
    id:'',
    requestLists:[],
    reasonLists:[],
    requestRadioId:'',
    reasonId:'',
    orderSn:'',
    repaireType:'',
    orderState:'',
  }
  componentWillMount(){
    let {id,orderSn,orderState,repaireType} = this.$router.params
    this.setState({
      id,orderSn,orderState,repaireType
    },()=>{
      this.getRefuseRequest()
      this.getRefuseReason()
    })
  }
  getRefuseRequest=()=>{
    const id = this.state.id
    refuseRequest(id).then(res=>{
      if(res.data.code===0){
        let data = res.data.data
        this.setState({
          requestLists:data
        })
      }
    })
  }
  getRefuseReason = ()=>{
    const id = this.state.id
    refuseReason(id).then(res=>{
      if(res.data.code===0){
        let data = res.data.data
        this.setState({
          reasonLists:data
        })
      }
    })
  }
  setRadioVal=(propName,e)=>{
    let value = e.detail.value
    this.setState({
      [propName]:value
    })
  }
  submitOrder=()=>{
    let {id,requestRadioId, reasonId} = this.state
    if(!requestRadioId||!reasonId){
      Taro.showToast({title:'请选择申请请求和申请原因',icon:'none'})
      return
    }
    let params = {
      repairOrderId:id,
      statementRequestId:requestRadioId,
      statementReasonId:reasonId,
      masterId:Taro.getStorageSync('masterInfo').masterId
    }
    Taro.showLoading({title:'提交中'})
    submitRefuse(params).then(res=>{
      Taro.hideLoading()
      if(res.data.code===0){
        Taro.showToast({title:'申述提交成功',icon:'none'}).then(()=>setTimeout(()=>Taro.reLaunch({url:'/pages/mine/mine'}),1000))
      }else{
        Taro.showToast({title:'申述提交失败'+res.data.msg,icon:'none'})
      }
    })
  }
  render(){
    return (<View className='refuse-page '>
      <View className='info-wrap'>
        <View className='wrap-header'>
          <View className='info-title'>服务信息</View>
        </View>
        <View className='info-body'>
          <View className='info-row'>
            <View className="row-title">工单编号</View>
            <View className="row-content">{this.state.orderSn}</View>
          </View>
          <View className='info-row'>
            <View className="row-title">工单状态</View>
            <View className="row-content"><Text className='text-warm'>{this.state.orderState}</Text></View>
          </View>
          <View className='info-row'>
            <View className="row-title">报修类别</View>
            <View className="row-content">{this.state.repaireType}</View>
          </View>
        </View>
      </View>
      <View className='info-wrap'>
        <View className='wrap-header'>
          <View className='info-title'>申诉请求</View>
        </View>
        <View className='info-body'>
          <RadioGroup onChange={(e)=>this.setRadioVal('requestRadioId',e)}>
            {
              this.state.requestLists.map(item=>{
                return (
                  <View key={item.id} className='info-row'>
                    <Radio
                      className='radio-item'
                      value={item.id}
                      disabled={item.isValid==='N'}
                      checked={this.state.requestRadioId===item.id}
                    >{item.statementName}</Radio>
                  </View>
                )
              })
            }
          </RadioGroup>
        </View>
      </View>

      <View className='info-wrap'>
        <View className='wrap-header'>
          <View className='info-title'>申诉原因</View>
        </View>
        <View className='info-body'>
          <RadioGroup onChange={(e)=>this.setRadioVal('reasonId',e)}>
            {
              this.state.reasonLists.map(item=>{
                return ( <View className='info-row' key={item}>
                  <Radio
                    className='radio-item'
                    value={item.id}
                    checked={this.state.reasonId===item.id}
                  >{item.statementName}</Radio>
                </View>)
              })
            }
          </RadioGroup>
        </View>
      </View>

      <Button onClick={this.submitOrder} className='lang-btn orange-btn'>提交申述</Button>
    </View>)
  }
}
export default Refuse as ComponentType
