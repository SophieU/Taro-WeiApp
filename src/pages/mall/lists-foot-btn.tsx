import {ComponentType} from 'react'
import {View,Button, Block} from '@tarojs/components'
import './lists-foot-btn.scss'
function FootBtn(props){
  let {current,item,setPrice,setPay} = props
  if(current===0){
    return  <View className='btn-group'>
      <Button onClick={()=>this.getGrag(item.id)} className='btn orange-btn'>抢单</Button>
    </View>
  }else if (current===1){
    let orderState = item.orderState
    // 无状态，只显示报价
    if(orderState===''){
      return  <View className='btn-group'>
        <Button className='btn orange-btn' onClick={()=>setPrice(item)}>报价</Button>
      </View>
    }
    return <View  className='btn-group'>
      <Button className='btn primary-btn' onClick={()=>setPay(item)}>收款</Button>
      <Button className='btn orange-btn' onClick={()=>setPrice(item)}>{orderState==='STAY_PAY'?'重新报价':'报价'}</Button>
    </View>
  }else if(current===2){
    return null
  }
}

export default FootBtn as ComponentType
