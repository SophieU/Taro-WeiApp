import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View,  Icon, Button, Input} from '@tarojs/components'
import {inject, observer } from '@tarojs/mobx'
import { AtCheckbox } from 'taro-ui'
import {getLocationAuth} from '../../utils/common'
import {validateTel, validateEmpty} from '../../utils/regexpValidate'
import {saveAdd, defaultSet, deleteAdd} from './service'
import './order-add.scss'

type State = {
  setDefault:Array<any>
  pageType:string
  chooseLocation:object|null,
  id:string,
  areaInfo:string
  latitude:string
  longitude:string
  address:string
  userName:string
  userMobile:string
  isDefault:string
}
@inject('appStore')
@observer
class AddEdit extends Component<{},State>{
  config: Config = {
    navigationBarTitleText: '选择地址',
    navigationStyle:'default'
  }
  constructor() {
    super();
    this.state={
      pageType:'add', // 页面类型 add-新增，edit-编辑
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
  componentWillMount(){
    let id = this.$router.params.id
    if(id!=='undefined'){
      this.getEditAddInfo(id)
      this.setState({
        pageType:'edit',
        id:id,
      })
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
    }

  }
  getEditAddInfo=(id)=>{
    let addLists = Taro.getStorageSync('addressLists')
    let target = addLists.filter(item=>{
      return item.id===id
    })
    if(target.length>0){
      let res = target[0]
      this.setState({
        id:id,
        areaInfo:res.areaInfo,
        latitude:res.latitude,
        longitude:res.longitude,
        address:res.address,
        userName:res.userName,
        userMobile:res.userMobile,
        isDefault:res.isDefault,
        setDefault:[res.isDefault]
      })
    }
  }
  goAddress=()=>{
    this.setState({
      chooseLocation: Taro.requirePlugin('chooseLocation')
    })
    // Taro.authorize({scope: "scope.userLocation"})
    Taro.getSetting({
      success:res=>{
        console.log(res,'taro.getSetting')
        if(!res.authSetting['scope.userLocation']){
          Taro.showModal({
            title:'',
            content:'您还未授权访问地理信息，请先同意授权',
            success:(res)=>{
              if(res.confirm){
                Taro.getLocation({
                  type: 'wgs84',
                  success: function (res) {
                   console.log(res)
                  }
                })
              }
            }
          })
        }else{
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
      }
    })

  }
  handleRadioChange = (value)=>{
    this.setState({
      setDefault: value,
      isDefault:value.length>0?'Y':'N'
    })
    if(this.state.pageType==='edit'&&value.length>0){
      defaultSet(this.state.id)
    }
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
    let validator = {
      userName:{message:'请输入联系人名称'},
      userMobile:{message:'请输入联系电话'},
      areaInfo:{message:'请选择收货地址'},
      address:{message:'请填写详细地址'},
    }

    if(this.state.setDefault.length>0){
      params.isDefault=this.state.setDefault[0]
    }
    for(let key in params){
      params[key]=this.state[key]
    }
    if(!validateEmpty(params,validator)){
      return
    }
    if(!validateTel(params.userMobile)){
      Taro.showToast({
        title:'请输入正确的手机号码',
        icon:'none'
      })
      return
    }
    Taro.showLoading({title:'提交中'})
    saveAdd(params).then(res=>{
      Taro.hideLoading()
      if(res.data.code===0){
        Taro.showToast({title:'保存成功'})
        Taro.navigateBack()
      }else{
        Taro.showToast({title:'提交失败：'+res.data.msg})
      }
    })
  }
  deleteHandler=()=>{
    let id = this.state.id
    Taro.showModal({
      title:'温馨提示',
      content:'您确定要删除此地址吗？',
      success:(res)=>{
        if(res.confirm){
          deleteAdd(id).then(res=>{
            if(res.data.code===0){
              Taro.showToast({title:'删除成功',icon:'none'}).then(()=>setTimeout(()=>{
                Taro.navigateBack({delta:-1})
              },1000))
            }
          })
        }
      }
    })

  }
  render(){
    return (<View className='page form-page' style={{background: '#fff'}}>
        <View className='form-item'>
          <View className='form-label'>地址: </View>
          <View className='form-control picker'>
            <Input onClick={this.goAddress} className='picker-input' disabled={true} placeholder='点击选择' value={this.state.areaInfo}></Input>
            <Icon onClick={this.goAddress}  className='picker-ico' size='20' type='search' />
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
            onChange={this.handleRadioChange}
          ></AtCheckbox>
        </View>
      </View>
        <View className='btn-wrap'>
          <Button onClick={this.saveSet} className='lang-btn blue-btn save-btn'>保存</Button>
          <Button onClick={this.deleteHandler} className='lang-btn primary-btn'>删除</Button>
        </View>
    </View>)
  }
}
export default AddEdit as ComponentType
