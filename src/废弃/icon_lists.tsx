import { ComponentType } from 'react'
// import Taro from '@tarojs/taro'
import { View, Text, Image, Navigator} from '@tarojs/components'
import './icon_lists.less'

interface Props {
  data:DataProp,
  nomore:boolean,
  idTag:string
}
interface DataProp {
  title:string,
  lists:Array<{
    iconUrl:string,
    iconTitle:string
  }>,
}
function IconLists(props:Props){
  let data = props.data
  let noMore = props.nomore
  let id = props.idTag?props.idTag:''
  return  <View className='icon-lists-wrap' id={id}>
    <View className='icon-lists-top'>
      <View className='wrap-title'>{data.title}</View>
      {
        noMore?null:(<Navigator url='/pages/index/more-service' className='wrap-more'>
          更多
          <Image className='more-ico' src={require('../../assets/imgs/btn_nexr_n.png')}></Image>
        </Navigator>)
      }

    </View>
    <View className='lists'>
      {
        data.lists.map((item,index)=>{
          return ( <View className='lists-item' key={index}>
            <Image className='list-img' src={item.iconUrl}/>
            <Text className='list-text'>{item.iconTitle}</Text>
          </View>)
        })
      }
    </View>
  </View>


}

export default IconLists as ComponentType
