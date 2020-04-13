import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Text, Navigator, Swiper, SwiperItem} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import CustomerService from '../../components/customer-service'
import RecommendAd from '../../components/recommend-ad'
import {decodeQueryString, getUserInfo} from '../../utils/common'
import {loginApp} from '../login/service'
import { getBannerLists, getServiceLists } from './servics'
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
  hideService: boolean,
  configApiVoList:Array<object>,
  serviceList:Array<object>,
  adBannerList:Array<object>,
  serviceBlockLists:Array<object>,
}
interface Index {
  props: PageStateProps;
}

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
    /*界面信息数据*/
    this.getBanner()
    this.getService()
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
      hideService:true,
      configApiVoList:[],
      serviceList:[],
      adBannerList:[],
      serviceBlockLists:[],
    }
  }
  toggleService=()=>{
    this.setState({
      hideService:!this.state.hideService
    })
  }
  /* 获取banner信息 */
  getBanner= ()=>{
    getBannerLists().then(res=>{
      if(res.data.code===0){
        let data = res.data.data
          this.setState({
            adBannerList:data.adBannerList,
            configApiVoList:data.configApiVoList,
            serviceList:data.serviceList
          })
      }
    })
  }
  /* 获取服务栏目 */
  getService = ()=>{
    let params = {
      pageNo:1,
      pageSize:10
    }
    getServiceLists(params).then(res=>{
      if(res.data.code===0){
        let data = res.data.data
        this.setState({
          serviceBlockLists:data
        })
        console.log(data)
      }
    })
  }
  /* 判断跳转到哪儿 */
  jumpTo = (info)=>{
    console.log(info)
  }
  render () {
    // const { counterStore: { counter } } = this.props
    return (
      <View className={this.state.adBannerList.length>0?'index':'index no-banner'}>
        {this.state.adBannerList.length<=0?
          <View className='header-index'>首页</View>
          :
          <Swiper
            className='banner-wrap'
            indicatorColor='#fff'
            indicatorActiveColor='#EA7744'
            indicatorDots
          >
            {this.state.adBannerList.map((item,index)=>{
              return <SwiperItem onClick={()=>this.jumpTo(item)}  key={index}>
                <Image
                  className='banner-img'
                  style='width:100%'
                  src={item.imgName}
                />
              </SwiperItem>
            })}
          </Swiper>

        }

        {/*icon列表*/}
        <View className='service-type'>
          {this.state.serviceList.map(item=>{
            return (<View className='service-type-item' key={item.serviceId}>
              <Image className='item-icon' src={item.iconUrl}/>
              <Text className='item-text'>{item.title}</Text>
            </View>)
          })}
        </View>
        {/* 广告区 */}
        {
          this.state.configApiVoList.map(item=>{
            return (<RecommendAd key={item.id} source={item}></RecommendAd>)
          })
        }
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
