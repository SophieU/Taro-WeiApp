import {ComponentType} from 'react'
import Taro, {Component} from '@tarojs/taro'
import { View, Image, Text, Navigator} from '@tarojs/components'
import {loginStatusFilter} from '../utils/common'
import './recommend-ad.scss'

/*
* 版式位名称    format_code
一张图版式位	1
左右图版式位	2
左中右图版式位	6
四张图版式位	7
左一右二图版式位	3
左二右一图版式位	4
上二下二图版式位	5
* */
class RecommendAd extends Component{
  defaultProps = {
    source:{formatCode:'1',detail:[]}
  }
  constructor(props) {
    super(props);
  }
  /* 判断跳转到哪儿 */
  jumpTo = (info,otherType?:string)=>{
    let needLogin = info.needLogin
    let type = info.recommendCategoryCode
    if(needLogin==='Y'){
      loginStatusFilter(()=>{
        if(type==='E_SERVICE_CATEGORY'||type==='E_SERVICE'||otherType==='E_SERVICE_CATEGORY'){
          // 跳转订单确认
          Taro.navigateTo({
            url:`/pages/order/order-submit?id=${info.target||info.id}`
          })
        }else if(type==='E_PROJECT'){
          // 跳转更多服务
          Taro.navigateTo({
            url:`/pages/index/more-service?id=${info.target}`
          })
        }else if(type==='APP_JUMP'){
          // 中转APP内页
          Taro.navigateTo({
            url:info.target
          })
        }else if(type==='H5'){
          // 打开H5
          if(!info.target) return;
          Taro.navigateTo({
            url:`/pages/index/web-view?target=${info.target}`
          })
        }
      })
    }

  }
  renderCode1(data,key){
    return (<View className='ad-wrap type-1' key={key}>
      <Image onClick={()=>{this.jumpTo(data[0])}} className='ad-img' src={data[0].targetImage}/>
    </View>)
  }
  renderCode2(data,key){
    return (<View className='ad-wrap type-2' key={key}>
      {data.map(item=>{
        return  <Image onClick={()=>{this.jumpTo(item)}} key={item.configId} className='ad-img' src={item.targetImage} />
      })}
    </View>)
  }
  renderCode3(data,key){
   return (<View className='ad-wrap' key={key}>
      <View className='left-ad'>
        <Image onClick={()=>{this.jumpTo(data[0])}} className='ad-img' src={data[0].targetImage}/>
      </View>
      <View className='right-ad'>
        <View className="right-ad-item">
          <Image onClick={()=>{this.jumpTo(data[1])}} className='ad-img' src={data[1].targetImage}/>
        </View>
        <View className="right-ad-item">
          <Image onClick={()=>{this.jumpTo(data[2])}} className='ad-img' src={data[2].targetImage}/>
        </View>
      </View>
    </View>)
  }
  renderCode4(data,key){
    return (<View className='ad-wrap' key={key}>
      <View className='right-ad'>
        <View className="right-ad-item">
          <Image onClick={()=>{this.jumpTo(data[0])}} className='ad-img' src={data[1].targetImage}/>
        </View>
        <View className="right-ad-item">
          <Image onClick={()=>{this.jumpTo(data[1])}} className='ad-img' src={data[2].targetImage}/>
        </View>
      </View>
      <View className='left-ad'>
        <Image onClick={()=>{this.jumpTo(data[2])}} className='ad-img' src={data[0].targetImage}/>
      </View>
    </View>)
  }
  renderCode5=(data,key)=>{
    return (<View className='ad-wrap' key={key}>
      <View className='right-ad'>
        <View className="right-ad-item">
          <Image onClick={()=>{this.jumpTo(data[0])}} className='ad-img' src={data[0].targetImage}/>
        </View>
        <View className="right-ad-item">
          <Image onClick={()=>{this.jumpTo(data[1])}} className='ad-img' src={data[1].targetImage}/>
        </View>
      </View>
      <View className='right-ad'>
        <View className="right-ad-item">
          <Image onClick={()=>{this.jumpTo(data[2])}} className='ad-img' src={data[2].targetImage}/>
        </View>
        <View className="right-ad-item">
          <Image onClick={()=>{this.jumpTo(data[3])}} className='ad-img' src={data[3].targetImage}/>
        </View>
      </View>
    </View>)

  }
  renderCode7=(data,key)=>{
    return (<View className='ad-wrap type-7' key={key}>
      {data.map(item=>{
        return  <Image onClick={()=>{this.jumpTo(item)}} key={item.configId} className='ad-img' src={item.targetImage} />
      })}
    </View>)
  }
  shouldComponentUpdate(nextProps){
    return !!nextProps.source
  }
  render(){
    let source =this.props.source
    let formatCode = source?source.formatCode:''
    let datas = source?source.details:[]
    let key = source?source.id:''
   if(formatCode==='2'||formatCode==='6'){
      return this.renderCode2(datas,key)
    }else if(formatCode==='3'){
      return this.renderCode3(datas,key)
    }else if(formatCode==='4'){
      return this.renderCode4(datas,key)
    }else if(formatCode==='5'){
      return this.renderCode5(datas,key)
    }else if(formatCode==='7'){
      return this.renderCode7(datas,key)
    }
    return <View>
      {this.renderCode1(datas,key)}
    </View>
  }
}
export default RecommendAd as ComponentType
