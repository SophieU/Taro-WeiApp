import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Text, Navigator, Block, Icon} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import './index.less'

type PageStateProps = {
  counterStore: {
    counter: number,
    increment: Function,
    decrement: Function,
    incrementAsync: Function
  }
}
type PageState = {
  hideService: boolean
}
interface Index {
  props: PageStateProps;
}
/*
const iconLists=[
  {
    title:'家电维修',
    moreUrl:'http://www.baidu.com',
    lists:[
      {
        iconUrl:require('../../assets/imgs/icon_conditioner.png'),
        iconTitle:'空调',
        navUrl:'http://www.baidu.com'
      }, {
        iconUrl:require('../../assets/imgs/icon_washer.png'),
        iconTitle:'洗衣机',
        navUrl:'http://www.baidu.com'
      }, {
        iconUrl:require('../../assets/imgs/icon_tv.png'),
        iconTitle:'电视',
        navUrl:'http://www.baidu.com'
      }, {
        iconUrl:require('../../assets/imgs/icon_fridge.png'),
        iconTitle:'冰箱',
        navUrl:'http://www.baidu.com'
      },
    ]
  },{
    title:'上门维修',
    moreUrl:'http://www.baidu.com',
    lists:[
      {
        iconUrl:require('../../assets/imgs/icon_conditioner.png'),
        iconTitle:'空调',
        navUrl:'http://www.baidu.com'
      }, {
        iconUrl:require('../../assets/imgs/icon_washer.png'),
        iconTitle:'洗衣机',
        navUrl:'http://www.baidu.com'
      }, {
        iconUrl:require('../../assets/imgs/icon_tv.png'),
        iconTitle:'电视',
        navUrl:'http://www.baidu.com'
      }, {
        iconUrl:require('../../assets/imgs/icon_fridge.png'),
        iconTitle:'冰箱',
        navUrl:'http://www.baidu.com'
      },
    ]
  },{
    title:'开锁',
    moreUrl:'http://www.baidu.com',
    lists:[
      {
        iconUrl:require('../../assets/imgs/icon_conditioner.png'),
        iconTitle:'空调',
        navUrl:'http://www.baidu.com'
      }, {
        iconUrl:require('../../assets/imgs/icon_washer.png'),
        iconTitle:'洗衣机',
        navUrl:'http://www.baidu.com'
      }, {
        iconUrl:require('../../assets/imgs/icon_tv.png'),
        iconTitle:'电视',
        navUrl:'http://www.baidu.com'
      }, {
        iconUrl:require('../../assets/imgs/icon_fridge.png'),
        iconTitle:'冰箱',
        navUrl:'http://www.baidu.com'
      },
    ]
  },
]

 */
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
@inject('counterStore')
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
  componentWillMount () { }
  componentWillReact () {
    console.log('componentWillReact')
  }
  componentDidMount () { }
  componentWillUnmount () { }
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
        <View className={this.state.hideService?'customer-service':'customer-service expand'}>
          {
            this.state.hideService?
              ( <Block>
                <Image onClick={this.toggleService} className='cus-ser' src={require('../../assets/imgs/tmp/cus-ser.png')}></Image>
                <Text>客服</Text>
              </Block>)
              :(<Block>
                <View className='expand-service'>
                  <View className='expand-button'>
                    <View><Image className='custom-ico'  src={require('../../assets/imgs/tmp/im.png')}></Image>在线咨询</View>
                    <Text>（8:30-20:00）</Text>
                  </View>
                  <View className='expand-button'>
                    <View><Image className='custom-ico' src={require('../../assets/imgs/tmp/call.png')}></Image>热线电话</View>
                    <Text>（8:30-20:00）</Text>
                  </View>
                  <Icon onClick={this.toggleService} size='18' type='clear' color='#EA7744'/>
                </View>
              </Block>)
          }
        </View>
      </View>
    )
  }
}

export default Index  as ComponentType
