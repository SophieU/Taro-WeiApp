import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View,  Image, Button, Navigator} from '@tarojs/components'
import { createQRCode } from './services'
import './qr-code.scss'

interface State {
  qrCodeUrl:string
}
class Mine extends  Component{
  config: Config={
    navigationBarTitleText:'邀请二维码',
    navigationStyle:'default'
  }
  state:State = {
    qrCodeUrl:''
  }
  componentWillMount(){
    createQRCode().then(res=>{
      let data= res.data
      if(data.code===0){
        this.setState({
          qrCodeUrl:data.data.inviteQrImgUrl
        })
      }
    })
  }
  saveImageLocal(filePath){
    Taro.saveImageToPhotosAlbum({
      filePath:filePath,
      success(res) {
        Taro.showToast({title:'二维码保存成功'})
        console.log(res)
      },
      fail(err){
        console.log(err)
      }
    })
  }
  saveCodeImg = ()=>{
    let url = this.state.qrCodeUrl
    let _this = this
    Taro.downloadFile({
      url: url,
      success(res){
        let filePath = res.tempFilePath

        Taro.getSetting({
          success: function(res){
            // 已授权访问相册
            if(res.authSetting['scope.writePhotosAlbum']){
              _this.saveImageLocal(filePath)
            }else{
              Taro.authorize({
                scope: 'scope.writePhotosAlbum',
                success () {
                  _this.saveImageLocal(filePath)
                }
              })

            }
          }
        })
      }
    })

  }
  render(){
    return (
      <View className='qr-code-page'>
        <Image className='qr-code' src={this.state.qrCodeUrl} />
        <View className='text'>扫一扫加入速达优服</View>
        <Navigator url='/pages/mine/invite-history' className='invite-link'>我的邀请记录</Navigator>
        <Button onClick={this.saveCodeImg} className='save-btn'>保存图片</Button>
      </View>
    )
  }
}
export default Mine as ComponentType
