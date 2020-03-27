import {ComponentType} from 'react'
import Taro, {Component,Config} from '@tarojs/taro'
import {View, ScrollView, Image, Text} from '@tarojs/components'
import './more.less'

interface State {
  serviceLists:Array<serviceListsItem>
  currentTab:number
  scrollTop:number
  scrollIntoView:string
  scrollPadding:string
  scrollNavIntoView:string
}
interface serviceListsItem {
  title:string
  lists:Array<{
    iconUrl:string,
    iconTitle:string
  }>
}

class More extends Component<{}, State>{
  constructor(){
    super()
    this.state={
      serviceLists:[
        {title:'水暖维修',lists:[
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'更换分水器'},
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'更换阀门'},
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'更换其他配件'},
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'管道维修'},
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'更换水表'},
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'水暖其他服务'},
          ]},
        {title:'家庭电路',lists:[
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'电路更换配件'},
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'线路维修'},
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'线路维修'},
          ]},
        {title:'地暖服务',lists:[
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'地暖清洗'},
          ]},
          {title:'家电服务',lists:[
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'洗衣机清洗'},
            {iconUrl:require('../../assets/imgs/icon_conditioner.png'),iconTitle:'煤气灶维修'},
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'空调维修'},
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'冰箱清洗'},
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'煤气灶清洗'},
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'燃气热水器'},
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'油烟机维修'},
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'太阳能热水器'},
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'热水器清洗'},
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'电视机维修'},
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'冰箱维修'},
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'空调清洗'},
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'洗衣机维修'},
          ]},
          {title:'管道疏通',lists:[
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'管道疏通服务'},
          ]},
          {title:'其他服务',lists:[
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'笔记本维修'},
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'网络部署'},
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'电脑维修'},
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'其他电脑'},
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'系统安装'},
          ]},
          {title:'家装服务',lists:[
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'饮水机维修'},
            {iconUrl:require('../../assets/imgs/icon_conditioner.png'),iconTitle:'墙体打孔'},
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'安装窗帘'},
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'墙内刷新'},
          ]},
         {title:'家电类',lists:[
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'饮水机维修'},
            {iconUrl:require('../../assets/imgs/icon_conditioner.png'),iconTitle:'电视维修'},
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'电暖维修'},
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'电冰箱维修'},
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'电灯维修'},
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'洗衣机维修'},
          ]},
         {title:'自定义',lists:[
            {iconUrl:require('../../assets/imgs/icon_repair_tab_d.png'),iconTitle:'饮水机维修'},
          ]},

      ],
      currentTab:0,
      scrollTop:0,
      scrollIntoView:'',
      scrollPadding:'0px',
      scrollNavIntoView:''
    }
    this.toggleTab = this.toggleTab.bind(this)

  }
  config: Config = {
    navigationBarTitleText: '更多服务',
  }
  toggleTab(index:number){
   this.setState({
     currentTab:index,
     scrollIntoView:'content'+index,
     scrollNavIntoView:'nav'+index
   })
  }
  scrollNow=(e)=>{
    let scrollTop = e.detail.scrollTop
    this.setState({
      scrollPadding:scrollTop>40?'40px':'0px'
    })
  }
  render(){
    return (
      <ScrollView className='scroll-wrapper' scrollY={true} scrollIntoView={this.state.scrollIntoView} onScroll={(e)=>this.scrollNow(e)} style={{paddingTop:this.state.scrollPadding}}>
        {
          this.state.scrollPadding==='40px'?(<ScrollView className='top-slider' scrollX={true} enableFlex={true} scrollIntoView={this.state.scrollNavIntoView}>
            {
              this.state.serviceLists.map((item,index)=>{
                return (<View id={'nav'+index} onClick={()=>this.toggleTab(index)} className={index===this.state.currentTab?'top-nav active':'top-nav'} key={index}>
                  {item.title}
                </View>)
              })
            }
            <View></View>
          </ScrollView>):null
        }
        <View className='service-lists'>
          {
            this.state.serviceLists.map((item,index)=>{
              return (<View className='icon-lists-wrap' id={'content'+index} key={index}>
                <View className='icon-lists-top'>
                  <View className='wrap-title'>{item.title}</View>
                </View>
                <View className='lists'>
                  {
                    item.lists.map((item,index2)=>{
                      return ( <View className='lists-item' key={index2}>
                        <Image className='list-img' src={item.iconUrl}/>
                        <Text className='list-text'>{item.iconTitle}</Text>
                      </View>)
                    })
                  }
                </View>
              </View>)
            })
          }

        </View>
      </ScrollView>
    )
  }
}

export default More as ComponentType
