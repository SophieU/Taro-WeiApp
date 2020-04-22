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
  }
  componentWillMount(){
    let id = this.$router.params.id
    this.setState({
      id
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
    let params = {
      repairOrderId:id,
      statementRequestId:requestRadioId,
      statementReasonId:reasonId,
      masterId:Taro.getStorageSync('userId')
    }

    submitRefuse(params).then(res=>{
      if(res.data.code===0){
        Taro.showToast({title:'申述提交成功',icon:'none'}).then(()=>{
          Taro.reLaunch({url:'/pages/mine/mine'})
        })

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
          <View className='info-right'>2019-10-10 11：11</View>
        </View>
        <View className='info-body'>
          <View className='info-row'>
            <View className="row-title">工单编号</View>
            <View className="row-content">1234567894645645789</View>
          </View>
          <View className='info-row'>
            <View className="row-title">工单状态</View>
            <View className="row-content"><Text className='text-warm'>已上门</Text></View>
          </View>
          <View className='info-row'>
            <View className="row-title">报修类别</View>
            <View className="row-content">用气服务</View>
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
