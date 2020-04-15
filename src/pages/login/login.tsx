import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image,Button, Navigator} from '@tarojs/components'
import {AtForm, AtInput} from 'taro-ui'
import './login.scss'

class Login extends Component{
  config: Config = {
    navigationBarTitleText: '登录',
    navigationStyle:'default'
  }
  state = {
    loginTel:'',
    validateCode:'',
    readed:false,
  }
  handleLoginTelChange=()=>{

  }
  render(){
    return (<View className='login-page'>
      <View className='login-title'>
        <View className='login-top'>登录</View>
        <View className='login-welcome'>欢迎来到速达优服</View>
      </View>
      <AtForm className='login-form'>
        <View className='form-item'>
          <AtInput
            name='loginTel'
            type='text'
            placeholder='用户手机号'
            value={this.state.loginTel}
            onChange={this.handleLoginTelChange}
          />
        </View>
        <View className="protocal-wrap">
          <View className="read-proto">
            {
              this.state.readed?
                (<Image className="radio" src={require("../../assets/imgs/tmp/login-check.png")} ></Image>)
                :
                (<Image className="radio" src={require("../../assets/imgs/tmp/login-check-none.png")}></Image>)
            }
          </View>
          <View className="login-protocal">我已阅读并同意 <Navigator className="out-link" url="">《服务协议》</Navigator></View>
        </View>
      </AtForm>
      <Button className='submitBtn'>登录</Button>
    </View>)
  }
}

export default Login as ComponentType
