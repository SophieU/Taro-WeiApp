import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Button} from '@tarojs/components'
import { AtModal,AtRadio , AtModalHeader, AtModalContent, AtModalAction  } from 'taro-ui'
import './detail.scss'


interface Lists{
  date:string,
  title:string,
  status:string
}
interface State {
  current:number,
  lists:Array<object>
  orderStatus:string,
  cancelReson:string,
  reasonModal:boolean
}
class Lists extends Component<{},State>{
  config:Config = {
    navigationBarTitleText:'报修详情',
    navigationStyle:'default'
  }
  constructor() {
    super();
    this.state = {
      current:0,
      orderStatus: 'payed', // payed-已付款，waitPay-待付款，waitOrder-待接单，cancled-已取消，finihsed-已完成
      lists:[{date:'2019/10/10 10:10', title:'换锁儿呀呀呀',status:'待服务'}],
      cancelReson:'option1',
      reasonModal:false,
    }
  }
  handleTab=(index)=>{
    this.setState({
      current:index
    })
  }
  renderFoot= (status:string)=> {
    switch(status){
      case 'waitPay':
        {
          return (  <View className='page-foot'>
                <View className='ico-wrap'>
                  <View className='ico-item'>
                    <Image className='foot-ico' src={require('../../assets/imgs/tmp/cus-ser.png')}></Image>
                    <View>联系网点</View>
                  </View>
                  <View className='ico-item'>
                    <Image className='foot-ico' src={require('../../assets/imgs/tmp/staff.png')}></Image>
                    <View>联系师傅</View>
                  </View>
                </View>
                <Button className='submit-btn'>支付订单： ￥800.00</Button>
            </View>
          )
        }
        break;
      case 'payed':
      {
        return (<View  className='page-foot'>
          <View className='foot-item'>已付款： ￥1.00</View>
          <Button onClick={this.handleCancel} className='submit-btn line-btn'>取消报修</Button>
          <Button className='submit-btn'>联系网点</Button>
        </View>)
      }
      break;
      case 'waitOrder':
      {
        return (<View  className='page-foot'>
          <View className='foot-item'>已付款： ￥1.00</View>
          <Button className='submit-btn'>联系师傅</Button>
        </View>)
      }
      break;
      case 'cancled':
      {
        return null
      }
      break;
      case 'finished':
      {
        return (<View className='page-foot'>
          <View className='foot-item'>已付款： ￥1.00</View>
          <Button className='submit-btn'>评价详情</Button>
        </View>)
      }
    }
  }
  handleRadioChange = (value)=>{
    this.setState({
      cancelReson:value
    })
  }
  handleCancel = ()=>{
    this.setState({
      reasonModal:!this.state.reasonModal
    })
  }
  handleCancelModal = ()=>{
    this.setState({
      reasonModal:false,
      cancelReson:'',
    })
  }
  handleConfirmModal= ()=>{

  }
  render(){
    return (<View className='page detail-page'>
      <View className='info-wrap'>
        <View className='detail-block'>
          <View className='detail-title'>工单信息</View>
          <View className='detail-info'>
            <View className='info-item'>
              <View className='item-label'>报修时间</View>
              <View className='item-info'>2018/08/02 20：00</View>
            </View>
            <View className='info-item'>
              <View className='item-label'>工单单号</View>
              <View className='item-info'>6789897945845645</View>
            </View>
            <View className='info-item'>
              <View className='item-label'>工单状态</View>
              <View className='item-info'>已完成</View>
            </View>
            <View className='info-item'>
              <View className='item-label'>服务网点</View>
              <View className='item-info'>24小区服务网点</View>
            </View>
            <View className='info-item'>
              <View className='item-label'>联系电话</View>
              <View className='item-info'>876865654</View>
            </View>
          </View>
        </View>
        <View className='detail-block'>
          <View className='detail-title'>师傅信息</View>
          <View className='detail-info'>
            <View className='info-item'>
              <View className='item-label'>师傅姓名</View>
              <View className='item-info'>张师傅</View>
            </View>
            <View className='info-item'>
              <View className='item-label'>联系电话</View>
              <View className='item-info'>136****6666</View>
            </View>
          </View>
        </View>
        <View className='detail-block'>
          <View className='detail-title'>基础信息</View>
          <View className='detail-info'>
            <View className='info-item'>
              <View className='item-label'>维修区域</View>
              <View className='item-info'>24小区</View>
            </View>
            <View className='info-item'>
              <View className='item-label'>详细地址</View>
              <View className='item-info'>3-3-2</View>
            </View>
            <View className='info-item'>
              <View className='item-label'>联系电话</View>
              <View className='item-info'>13627381624</View>
            </View>
            <View className='info-item'>
              <View className='item-label'>报修类别</View>
              <View className='item-info'>用气服务（上门费10.00元）</View>
            </View>
          </View>
        </View>
        <View className='detail-block'>
          <View className='detail-title'>故障原因</View>
          <View className='detail-info'>
            <View className='info-item'>
              <View className='item-label'>故障</View>
              <View className='item-info'>软管老化</View>
            </View>
          </View>
        </View>
        <View className='detail-block price-block'>
          <View className='detail-title'>费用清单</View>
          <View className='detail-info'>
            <View className='info-item'>
              <View className='price-label'>
                <View className='item-label'>上门服务费</View>
              </View>
              <View className='item-info'>￥20.00</View>
            </View>
            <View className='info-item'>
              <View className='price-label'>
                <View className='label-title'>软管更换</View>
                <View className='label-tips'>￥ 20.00</View>
              </View>
              <View className='item-label'>x1</View>
              <View className='item-info'>￥20.00</View>
            </View>
            <View className='info-item'>
              <View className='price-label'>
                <View className='label-title'>软管(质保30天)</View>
                <View className='label-tips'>￥ 20.00</View>
              </View>
              <View className='item-label'>x1</View>
              <View className='item-info'>￥50.00</View>
            </View>
          </View>
        </View>
      </View>
      {/*底部操作区*/}
      {this.renderFoot('payed')}
    {/*  取消弹窗*/}
      <AtModal isOpened={this.state.reasonModal} >
        <AtModalHeader>取消原因</AtModalHeader>
        <AtModalContent>
          <AtRadio
            options={[
              { label: '无人接单', value: 'option1' },
              { label: '问题已解决', value: 'option2' },
              { label: '找其他途径解决', value: 'option3' },
              { label: '服务态度不好', value: 'option3' }
            ]}
            value={this.state.cancelReson}
            onClick={this.handleRadioChange.bind(this)}
          />
        </AtModalContent>
        <AtModalAction>
          <Button  onClick={ this.handleCancelModal }>取消</Button>
          <Button onClick={ this.handleConfirmModal }>确定</Button>
        </AtModalAction>
      </AtModal>
    </View>)
  }
}
export default Lists as ComponentType
