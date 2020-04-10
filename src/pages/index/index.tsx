import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Text, Navigator} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import CustomerService from '../../components/customer-service'
import {decodeQueryString, getUserInfo} from '../../utils/common'
import {loginApp} from '../login/service'
import './index.scss'

type PageStateProps = {
  counterStore: {
    counter: number,
    increment: Function,
    decrement: Function,
    incrementAsync: Function
  },
  userStore: {
    wxUserInfo: object,
    setWXUserInfo: Function
  }
}
type PageState = {
  hideService: boolean
}
interface Index {
  props: PageStateProps;
}

const iconArr = [
  {
  imgSrc:require('../../assets/imgs/icon_appliance.png'),
  iconText:'家电维修'
},{
  imgSrc:require('../../assets/imgs/icon_house.png'),
  iconText:'家庭维修'
},{
  imgSrc:require('../../assets/imgs/icon_lock.png'),
  iconText:'开换锁'
},{
  imgSrc:require('../../assets/imgs/icon_setup.png'),
  iconText:'上门安装'
},{
  imgSrc:require('../../assets/imgs/icon_clean.png'),
  iconText:'清洁服务'
},]
@inject('userStore')
@observer
class Index extends Component<{}, PageState> {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页',
    navigationStyle:'custom'
  }
  // 对应小程序 onLoad
  componentWillMount () {

    /*
    *   判断用户进入小程序场景，如是邀请进入，则存入邀请人电话
    * */
    let sceneFrom = Taro.getLaunchOptionsSync().scene
    let pageParams: any= this.$router.params
    if(sceneFrom===1011) {
      // 扫描二维码进入
      let sence = decodeURIComponent(pageParams.scene)
      type ParseSence = {
        ivphone?: string
      }
      let parseSence: ParseSence = decodeQueryString(sence, ';')
      if (parseSence.ivphone) {
        Taro.setStorageSync('invitePhone', parseSence.ivphone)
      }
    }
    /*登录小程序*/
    if(!Taro.getStorageSync('loginStatus')){
      loginApp()
    }
    /* 获取用户信息 */
    getUserInfo((userInfo)=>{
      const { userStore } = this.props
      userStore.setWXUserInfo(userInfo)
    })
  }
  componentWillReact () {
    console.log('componentWillReact')
  }
  componentDidMount () { }
  componentWillUnmount () {}
  componentDidShow () { }
  componentDidHide () { }
  constructor(props) {
    super(props);
    this.state={
      hideService:true
    }
  }
  toggleService=()=>{
    this.setState({
      hideService:!this.state.hideService
    })
  }
  render () {
    // const { counterStore: { counter } } = this.props
    return (
      <View className='index'>
        <View className='banner-wrap'>
          <Image
            className='banner-img'
            style='width:100%'
            src='../../assets/imgs/tmp/4.png'
          />
        </View>
        {/*icon列表*/}
        <View className='service-type'>
          {iconArr.map(item=>{
            return (<View className='service-type-item' key={item.iconText}>
              <Image className='item-icon' src={item.imgSrc}/>
              <Text className='item-text'>{item.iconText}</Text>
            </View>)
          })}
        </View>
        {/*  广告区*/}
        <View className='ad-wrap'>
          <View className='left-ad'>
            <Image className='ad-img' src='../../assets/imgs/tmp/1.png'/>
          </View>
          <View className='right-ad'>
            <View className="right-ad-item">
              <Image className='ad-img' src='../../assets/imgs/tmp/2.png'/>
            </View>
            <View className="right-ad-item">
              <Image className='ad-img' src='../../assets/imgs/tmp/3.png'/>
            </View>
          </View>
        </View>
        {/*报修分类*/}
        <View className='function-block'>
          <View className="left-block">
            <Image className='left-bg' src='../../assets/imgs/tmp/5.png'></Image>
            <Text className='bock-title'>大家电维修</Text>
            <Navigator className='bock-more' url='/pages/index/more-service'>
              查看全部
              <Image className='block-more-ico' src={require('../../assets/imgs/tmp/more.png')}></Image>
            </Navigator>
          </View>
          <View className="right-block">
            <View className='func-item'>
              <Image className='item-img' src={require('../../assets/imgs/icon_repair_tab_n.png')}></Image>
              <Text className='item-text'>洗衣机维修</Text>
            </View>
           <View className='func-item'>
              <Image className='item-img' src={require('../../assets/imgs/icon_repair_tab_n.png')}></Image>
              <Text className='item-text'>洗衣机维修</Text>
            </View>
           <View className='func-item'>
              <Image className='item-img' src={require('../../assets/imgs/icon_repair_tab_n.png')}></Image>
              <Text className='item-text'>洗衣机维修</Text>
            </View>
           <View className='func-item'>
              <Image className='item-img' src={require('../../assets/imgs/icon_repair_tab_n.png')}></Image>
              <Text className='item-text'>洗衣机维修</Text>
            </View>
          </View>
        </View>
        <View className='function-block'>
          <View className="left-block">
            <Image className='left-bg' src={require('../../assets/imgs/tmp/6.png')}></Image>
            <Text className='bock-title'>厨卫维修</Text>
            <Navigator className='bock-more' url='pages/index/more-service'>
              查看全部
              <Image className='block-more-ico' src={require('../../assets/imgs/tmp/more.png')}></Image>
            </Navigator>
          </View>
          <View className="right-block">
            <View className='func-item'>
              <Image className='item-img' src={require('../../assets/imgs/icon_repair_tab_n.png')}></Image>
              <Text className='item-text'>洗衣机维修</Text>
            </View>
            <View className='func-item'>
              <Image className='item-img' src={require('../../assets/imgs/icon_repair_tab_n.png')}></Image>
              <Text className='item-text'>洗衣机维修</Text>
            </View>
            <View className='func-item'>
              <Image className='item-img' src={require('../../assets/imgs/icon_repair_tab_n.png')}></Image>
              <Text className='item-text'>洗衣机维修</Text>
            </View>
            <View className='func-item'>
              <Image className='item-img' src={require('../../assets/imgs/icon_repair_tab_n.png')}></Image>
              <Text className='item-text'>洗衣机维修</Text>
            </View>
          </View>
        </View>
        <View className='function-block'>
          <View className="left-block">
            <Image className='left-bg' src='../../assets/imgs/tmp/7.png'></Image>
            <Text className='bock-title'>房屋维修</Text>
            <Navigator className='bock-more' url='pages/index/more-service'>
              查看全部
              <Image className='block-more-ico' src={require('../../assets/imgs/tmp/more.png')}></Image>
            </Navigator>
          </View>
          <View className="right-block">
            <View className='func-item'>
              <Image className='item-img' src={require('../../assets/imgs/icon_repair_tab_n.png')}></Image>
              <Text className='item-text'>洗衣机维修</Text>
            </View>
            <View className='func-item'>
              <Image className='item-img' src={require('../../assets/imgs/icon_repair_tab_n.png')}></Image>
              <Text className='item-text'>洗衣机维修</Text>
            </View>
            <View className='func-item'>
              <Image className='item-img' src={require('../../assets/imgs/icon_repair_tab_n.png')}></Image>
              <Text className='item-text'>洗衣机维修</Text>
            </View>
            <View className='func-item'>
              <Image className='item-img' src={require('../../assets/imgs/icon_repair_tab_n.png')}></Image>
              <Text className='item-text'>洗衣机维修</Text>
            </View>
          </View>
        </View>
        {/*客服悬浮*/}
        <CustomerService></CustomerService>
      </View>
    )
  }
}

export default Index  as ComponentType
