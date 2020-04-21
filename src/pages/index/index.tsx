import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { ScrollView, View, Image, Text, Navigator, Swiper, SwiperItem, Button} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import CustomerService from '../../components/customer-service'
import RecommendAd from '../../components/recommend-ad'
import {decodeQueryString, jumpTo as jumpToUtil} from '../../utils/common'
import {loginApp} from '../login/login-apis'
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
  pageNo:number,
  pageSize:number,
  hasNextPage:boolean
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
    console.log(1111)
    /*登录小程序*/
    loginApp()
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
      pageNo:1,
      pageSize:10,
      hasNextPage:true
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
    if(!this.state.hasNextPage){
      return
    }
    let params = {
      pageNo:this.state.pageNo,
      pageSize:this.state.pageSize
    }
    getServiceLists(params).then(res=>{
      if(res.data.code===0){
        let data = res.data.data
        this.setState({
          serviceBlockLists:data.list,
          hasNextPage:data.hasNextPage,
          pageNo:data.hasNextPage?data.nextPage:data.pageNo
        })
      }
    })
  }
  /* 判断跳转到哪儿 */
  jumpTo = (info,otherType?:string)=>{
    jumpToUtil(info,otherType)
  }
  render () {
    // const { counterStore: { counter } } = this.props
    return (
      <ScrollView
        className={this.state.adBannerList.length>0?'index':'index no-banner'}
        scrollY
        onScrollToLower={this.getService}
      >
        <View className='header-index'>速达优服</View>
        <Swiper
          className='banner-wrap'
          indicatorColor='#fff'
          indicatorActiveColor='#EA7744'
          indicatorDots
        >
          {this.state.adBannerList.map((item,index)=>{
            return <SwiperItem  key={index}>
              <Image
                onClick={()=>this.jumpTo(item)}
                className='banner-img'
                style='width:100%'
                src={item.imgName}
              />
            </SwiperItem>
          })}
        </Swiper>
        {/*icon列表*/}
        <View className='service-type'>
          {this.state.serviceList.map(item=>{
            return (<View className='service-type-item' key={item.serviceId} onClick={()=>this.jumpTo(item)}>
              <Image className='item-icon' src={item.iconName}/>
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
        {
          this.state.serviceBlockLists.map((item,index)=>{
            return (<View className='function-block' key={item.id}>
              <View className="left-block">
                <Image className='left-bg' src={item.iconUrlOne}></Image>
                <Text className='bock-title'>{item.name}</Text>
                <Navigator className='bock-more' url={'/pages/index/more-service?id='+item.id}>
                  查看全部
                  <Image className='block-more-ico' src={require('../../assets/imgs/tmp/more.png')}></Image>
                </Navigator>
              </View>
              <View className="right-block">
                {
                  item.categoryList.map(child=>{
                    return ( <View className='func-item' key={child.id} onClick={()=>{this.jumpTo(child,'E_SERVICE_CATEGORY')}}>
                      <Image className='item-img' src={child.iconUrlOne}></Image>
                      <Text className='item-text'>{child.name}</Text>
                    </View>)
                  })
                }
              </View>
            </View>)
          })
        }
        {/*客服悬浮*/}
        <CustomerService></CustomerService>
         {/* 授权信息*/}

      </ScrollView>
    )
  }
}

export default Index  as ComponentType
