import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View,  Icon, Button, Input} from '@tarojs/components'
import { AtCheckbox } from 'taro-ui'
import {getLocationAuth} from '../../utils/common'
import {validateTel} from '../../utils/regexpValidate'
import {saveAdd} from './service'
import './order-add.scss'

type State = {
  setDefault:Array<any>
  chooseLocation:object|null,
  areaInfo:string
  latitude:string
  longitude:string
  address:string
  userName:string
  userMobile:string
  isDefault:string
}
class AddEdit extends Component<{},State>{
  config: Config = {
    navigationBarTitleText: '选择地址',
    navigationStyle:'default'
  }
  constructor() {
    super();
    this.state={
      setDefault:[],
      chooseLocation:null,
      id:'',
      areaInfo:'',
      latitude:'',
      longitude:'',
      address:'',
      userName:'',
      userMobile:'',
      isDefault:'N'
    }
  }
  componentDidShow(){
    if(this.state.chooseLocation){
      const location = this.state.chooseLocation.getLocation()
      const areaInfo = location.address
      const latitude = location.latitude
      const longitude = location.longitude
      this.setState({
        areaInfo,
        latitude,
        longitude
      })
      console.log(location)
    }
  }
  goAddress=()=>{
    this.setState({
      chooseLocation: Taro.requirePlugin('chooseLocation')
    })
    const key = 'E4EBZ-Z7QRF-BREJT-JZGXD-2DDE6-6XB6T';  //使用在腾讯位置服务申请的key
    const referer = '天富一生约'; //调用插件的app的名称
    getLocationAuth(()=>{
      Taro.getLocation({
        type: 'wgs84',
        success:(res)=>{
          const latitude = res.latitude
          const longitude = res.longitude
          const location = JSON.stringify({
            latitude: latitude,
            longitude: longitude
          });
          const category = '公司企业,房产小区';
          Taro.navigateTo({
            url: `plugin://chooseLocation/index?key=${key}&referer=${referer}&location=${location}&category=${category}`
          });
        }
      })
    })

  }
  handleRadioChange(value){
    this.setState({
      setDefault: value
    })
  }
  setValue(e,key){
    const value = e.detail.value
    this.setState({[key]:value})
  }
  saveSet= ()=>{
    let params = {
      "id":"",
      "userName":"",
      "userMobile":"",
      "areaInfo":"",
      "address":"",
      "longitude":"",
      "latitude":"",
      "isDefault":""
    }
    if(this.state.setDefault.length>0){
      params.isDefault=this.state.setDefault[0]
    }
    for(let key in params){
      params[key]=this.state[key]
    }
    if(validateTel(params.userMobile)){
      Taro.showToast({
        title:'请输入正确的手机号码'
      })
      return
    }
    saveAdd(params).then(res=>{
      if(res.data.code===0){
        console.log(res)
      }
    })
  }
  render(){
    return (<View className='page form-page' style={{background: '#fff'}}>
        <View className='form-item'>
          <View className='form-label'>收货地址: </View>
          <View className='form-control picker'>
            <Input onClick={this.goAddress} className='picker-input' disabled={true} placeholder='点击选择' value={this.state.areaInfo}></Input>
            <Icon className='picker-ico' size='20' type='search' />
          </View>
        </View>
        <View className='form-item'>
          <View className='form-label'>门牌号： </View>
          <View className='form-control '>
            <Input onInput={(e)=>this.setValue(e,'address')} value={this.state.address} placeholder='详细地址，例：16号楼5层501室'></Input>
          </View>
        </View>
        <View className='form-item'>
          <View className='form-label'>联系人： </View>
          <View className='form-control '>
            <Input  onInput={(e)=>this.setValue(e,'userName')} value={this.state.userName} placeholder='请填写联系人姓名'></Input>
          </View>
        </View>
        <View className='form-item'>
          <View className='form-label'>手机号： </View>
          <View className='form-control '>
            <Input  onInput={(e)=>this.setValue(e,'userMobile')} value={this.state.userMobile} placeholder='请填写联系人手机号'></Input>
          </View>
        </View>
      <View className='form-item'>
        <View className='form-control '>
          <AtCheckbox
            selectedList={this.state.setDefault}
            options={[{label:'设为默认', value: 'Y'}]}
            onChange={this.handleRadioChange.bind(this)}
          ></AtCheckbox>
        </View>
      </View>
        <View className='btn-wrap'>
          <Button onClick={this.saveSet} className='lang-btn blue-btn save-btn'>保存</Button>
          <Button className='lang-btn'>删除</Button>
        </View>
    </View>)
  }
}
export default AddEdit as ComponentType
