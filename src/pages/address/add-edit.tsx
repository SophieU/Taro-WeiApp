import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View,  Icon, Button, Input} from '@tarojs/components'
import { AtCheckbox } from 'taro-ui'
import './order-add.less'

class AddEdit extends Component<{},{}>{
  config: Config = {
    navigationBarTitleText: '选择地址',
  }
  constructor() {
    super();
    this.state={
      setDefault:[]
    }
  }
  goAddress=()=>{
    Taro.navigateTo({
      url:'/pages/address/address'
    })
  }
  handleRadioChange(value){
    this.setState({
      setDefault: value
    })
  }
  render(){
    return (<View className='page form-page' style={{background: '#fff'}}>
        <View className='form-item'>
          <View className='form-label'>收货地址: </View>
          <View className='form-control picker'>
            <Input onClick={this.goAddress} className='picker-input' disabled={true} placeholder='点击选择'></Input>
            <Icon className='picker-ico' size='20' type='search' />
          </View>
        </View>
        <View className='form-item'>
          <View className='form-label'>门牌号： </View>
          <View className='form-control '>
            <Input placeholder='详细地址，例：16号楼5层501室'></Input>
          </View>
        </View>
        <View className='form-item'>
          <View className='form-label'>联系人： </View>
          <View className='form-control '>
            <Input placeholder='请填写联系人姓名'></Input>
          </View>
        </View>
        <View className='form-item'>
          <View className='form-label'>手机号： </View>
          <View className='form-control '>
            <Input placeholder='请填写联系人手机号'></Input>
          </View>
        </View>
      <View className='form-item'>
        <View className='form-control '>
          <AtCheckbox
            selectedList={this.state.setDefault}
            options={[{label:'设为默认', value: 'default',}]}
            onChange={this.handleRadioChange.bind(this)}
          ></AtCheckbox>
        </View>
      </View>
        <View className='btn-wrap'>
          <Button className='lang-btn blue-btn save-btn'>保存</Button>
          <Button className='lang-btn'>删除</Button>
        </View>
    </View>)
  }
}
export default AddEdit as ComponentType
