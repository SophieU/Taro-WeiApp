import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Text, Navigator, Button, OpenData,Block } from '@tarojs/components'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction, AtInput } from "taro-ui"
import { observer, inject } from '@tarojs/mobx'
import { setInvitePhone, getUserBaseInfo } from './services'
import {validateTel} from '../../utils/regexpValidate'
// import { getUserBaseInfo } from './services'
import './mine.scss'


type PageStateProps = {
  userStore: {
    wxUserInfo: object,
    apiUserInfo: object,
    setWXUserInfo: Function
  }
}
interface Mine {
  props: PageStateProps;
}
type State = {
  userInfo: object,
  apiUserInfo: object,
  inviteUserPhone:string,
  showInvitePhoneModal:boolean
}
@inject('userStore')
@observer
class Mine extends  Component<{}, State>{
  config: Config={
    navigationBarTitleText:'我的',
    navigationStyle:'default'
  }
  state = {
    userInfo: {},
    apiUserInfo: {},
    inviteUserPhone:'',
    showInvitePhoneModal:false
  }
  componentWillMount(){
    const { userStore } = this.props
    this.setState({
      userInfo: userStore.wxUserInfo,
      apiUserInfo: userStore.apiUserInfo
    })
  }
  // 真没必要，but...
  onPullDownRefresh(){
    const { userStore } = this.props
    this.setState({
      userInfo: userStore.wxUserInfo,
      apiUserInfo: userStore.apiUserInfo
    },()=>{
      this.getBaseInfo()
    })
  }
  getBaseInfo = ()=>{
    getUserBaseInfo().then(res=>{
      if(res.data.code===0){
        Taro.stopPullDownRefresh()
        this.props.userStore.setAPIUserInfo(res.data.data)
      }
    })
  }
  toggleInvitePhoneModal= ()=>{
    this.setState((prevState:State)=>{
      let showStatus = !prevState.showInvitePhoneModal
     return {
       showInvitePhoneModal: showStatus,
       inviteUserPhone: ''
     }

    })
  }
  setInviteUser= ()=>{
    if(!validateTel(this.state.inviteUserPhone)){
      Taro.showToast({title:'填写的手机号格式不正确',icon:'none'})
      return
    }
    setInvitePhone({phone:this.state.inviteUserPhone}).then(res=>{
      if(res.data.code===0){
        Taro.showModal({title:'提交成功',content:`邀请人电话：${this.state.inviteUserPhone}`})
      }else{
        Taro.showToast({title: res.data.msg,icon:'none', duration:2000})
      }
      // 关闭弹窗
      this.toggleInvitePhoneModal()
    })
  }
  handleInviteUserPhoneChange = (val) => {
    this.setState({
      inviteUserPhone:val
    })
  }
  handleNavigate(url){
    let userId = Taro.getStorageSync('userId')
    if(!userId){
      Taro.showModal({
        title:'温馨提示',
        content:'您还未登录，请先登录',
        confirmText:'去登录'
      }).then(res=>{
        if(res.confirm){
         Taro.redirectTo({
           url:'/pages/login/toggle-login'
         })
        }
      })
    }else{
      Taro.navigateTo({url})
    }
  }
  render(){
    const userType = Taro.getStorageSync('userType')
    return (
      <View className='mine page'>
        <View className='user-info'>
          <OpenData className='user-avatar' type="userAvatarUrl"></OpenData>
          {/*<Image className='user-avatar' src={this.state.userInfo.avatarUrl}></Image>*/}
          <View className='user-block'>
            {/*<View className='name'>{this.state.userInfo.nickName}</View>*/}
            <OpenData className='name' type="userNickName"></OpenData>
            <View className='tel'>{this.state.apiUserInfo.username}</View>
          </View>
          <Navigator url='/pages/mine/pocket' className='my-pocket'>
            <Image className='pocket-ico' src={require('../../assets/imgs/tmp/pocket.png')}></Image>
            <Text>钱包</Text>
          </Navigator>
        </View>
        <View className='control-wrap'>
          <View className='control-lists'>
            {/*公共菜单*/}
            <Block>
              <View onClick={()=>{this.handleNavigate('/pages/custom-order/lists')}} className='control-item'>
                <View className='control-title'>报修订单</View>
                <View className='control-desc'></View>
              </View>
              <View onClick={()=>{this.handleNavigate('/pages/mall/order-lists-custom')}}  className='control-item'>
                <View className='control-title'>预约订单</View>
                <View className='control-desc'></View>
              </View>
              <View onClick={()=>{this.handleNavigate('/pages/address/order-add')}}  className='control-item'>
                <View className='control-title'>我的地址</View>
                <View className='control-desc'></View>
              </View>
              <View className='control-item'>
                <View className='control-title'>在线客服</View>
                <View className='control-desc'></View>
              </View>
              <View onClick={()=>{this.handleNavigate('/pages/mine/qr-code')}} className='control-item last-item'>
                <View className='control-title'>我的邀请码</View>
                <View className='control-desc'></View>
              </View>
              {
                this.state.apiUserInfo.isShowInvitePage==='Y'? (<View onClick={this.toggleInvitePhoneModal} className='control-item last-item'>
                  <View className='control-title'>设置邀请人</View>
                  <View className='control-desc'></View>
                </View>):null
              }

            </Block>

            {/*服务师傅*/}
            {this.state.apiUserInfo.isServiceUser==='Y'?(
              <Block>
                <View className='control-divider'>接单管理</View>
                <View className='control-item'>
                  <View onClick={()=>{this.handleNavigate('/pages/staff-order/order')}} className='control-title'>报修接单管理</View>
                  <View className='control-desc'></View>
                </View>
                <View onClick={()=>{this.handleNavigate('/pages/mall/order-lists-staff')}} className='control-item last-item'>
                  <View className='control-title'>预约接单管理</View>
                  <View className='control-desc'></View>
                </View>
              </Block>
            ):null}

            {/*管理员端   */}
            {
              userType==='ADMIN'&&this.state.apiUserInfo.isServiceUser==='Y'?(
                <Block>
                  <View className='control-divider'>派单管理</View>
                  <View onClick={()=>{this.handleNavigate('/pages/admin/admin')}} className='control-item'>
                    <View className='control-title'>处理工单</View>
                    <View className='control-desc'></View>
                  </View>
                </Block>
              ):null
            }
          </View>
        </View>
      {/*  邀请人电话弹窗  */}
        <AtModal className='invite-modal' isOpened={this.state.showInvitePhoneModal}>
          <AtModalHeader>设置邀请人</AtModalHeader>
          <AtModalContent>
            <AtInput
              className='invite-input'
              name='inviteUserPhone'
              border={false}
              type='phone'
              placeholder='请填写手机号码'
              value={this.state.inviteUserPhone}
              onChange={this.handleInviteUserPhoneChange}
            />
            <View className='tips'>新用户注册成功7天内，可填写邀请人信息</View>
          </AtModalContent>
          <AtModalAction>
            <Button onClick={this.toggleInvitePhoneModal}>取消</Button>
            <Button onClick={this.setInviteUser}>确定</Button>
          </AtModalAction>
        </AtModal>
      </View>
    )
  }
}
export default Mine as ComponentType
