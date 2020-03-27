import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Text, Input, Navigator} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import IconLists from './icon_lists'
import './index.less'

type PageStateProps = {
  counterStore: {
    counter: number,
    increment: Function,
    decrement: Function,
    incrementAsync: Function
  }
}

interface Index {
  props: PageStateProps;
}

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
const iconArr = [{
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
class Index extends Component {

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
    }
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
        {/*搜索*/}
        <View className='search-bar'>
          <Image className='search-ico' src={require('../../assets/imgs/img_search.png')}></Image>
          <Input className='search-input' type='text' placeholder='将会获取焦点' />
          <Text className='search-text'>搜索</Text>
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
            <Text className='ad-tag'>热卖</Text>
          </View>
          <View className='right-ad'>
            <View className="right-ad-item">
              <Image className='ad-img' src='../../assets/imgs/tmp/2.png'/>
              <Text className='ad-tag'>特价</Text>
            </View>
            <View className="right-ad-item">
              <Image className='ad-img' src='../../assets/imgs/tmp/3.png'/>
              <Text className='ad-tag'>热卖</Text>
            </View>
          </View>
        </View>
        {/*  icon列表区*/}
       {iconLists.map((item,index)=>{
         return <IconLists data={item} key={index}/>
       })}
      </View>
    )

  }
}

export default Index  as ComponentType
