import {ComponentType} from 'react'
import Taro, {Component,Config} from '@tarojs/taro'
import {View, ScrollView, Image, Text} from '@tarojs/components'
import {getServiceAll} from './servics'
import './more.scss'

interface State {
  serviceLists:Array<serviceListsItem>
  currentTab:string
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
  componentWillMount(){
    this.getAll()
    let id = this.$router.params.id;
    this.setState({
      scrollNavIntoView:'nav'+id,
      scrollIntoView:'content' + id,
    })
  }
  constructor(){
    super()
    this.state={
      serviceLists:[ ],
      currentTab:0,
      scrollTop:0,
      scrollIntoView:'',
      scrollPadding:'0px',
      scrollNavIntoView:''
    }
    this.toggleTab = this.toggleTab.bind(this)

  }
  config: Config = {
    navigationBarTitleText: '服务分类',
    navigationStyle:'default'
  }
  getAll = ()=>{
    getServiceAll().then(res=>{
      if(res.data.code===0){
        this.setState({
          serviceLists:res.data.data
        })
      }
    })
  }
  toggleTab(id:string){
   this.setState({
     currentTab:id,
     scrollIntoView:'content'+id,
     scrollNavIntoView:'nav' + id
   })
  }
  scrollNow=(e)=>{
    let scrollTop = e.detail.scrollTop
    this.setState({
      scrollPadding:scrollTop>40?'40px':'0px'
    })
  }
  jumpToControl=(info)=>{
    Taro.navigateTo({
      url:`/pages/order/order-submit?id=${info.id}`
    })
  }
  render(){
    return (
      <ScrollView
        className='scroll-wrapper'
        scrollY={true}
        scrollIntoView={this.state.scrollIntoView}
        onScroll={(e)=>this.scrollNow(e)}
        style={{paddingTop:this.state.scrollPadding}}
      >
        {
          this.state.scrollPadding==='40px'?(<ScrollView className='top-slider' scrollX={true} enableFlex={true} scrollIntoView={this.state.scrollIntoNavView}>
            {
              this.state.serviceLists.map((item,index)=>{
                return (<View id={'nav'+item.id} onClick={()=>this.toggleTab(item.id)} className={item.id===this.state.currentTab?'top-nav active':'top-nav'} key={item.id}>
                  {item.name}
                </View>)
              })
            }
            <View></View>
          </ScrollView>):null
        }
        <View className='service-lists'>
          {
            this.state.serviceLists.map((item,index)=>{
              return (<View className='icon-lists-wrap' id={'content'+item.id} key={item.id}>
                <View className='icon-lists-top'>
                  <View className='wrap-title'>{item.name}</View>
                </View>
                <View className='lists'>
                  {
                    item.categoryList.map((child)=>{
                      return ( <View className='lists-item' key={child.id} onClick={()=>this.jumpToControl(child)}>
                        <Image className='list-img' src={child.iconUrlOne}/>
                        <Text className='list-text'>{child.name}</Text>
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
