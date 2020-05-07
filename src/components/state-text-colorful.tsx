import {ComponentType} from 'react'
import {Text} from '@tarojs/components'

export default function StateText(prop){
  let state = prop.state
  switch (state) {
    case '待接单':
     {return <Text style={{color:'#47C479'}}>{state}</Text>}
      break;
     case '待上门':
     {return <Text style={{color:'#3385ff'}}>{state}</Text>}
      break;
    case '待付款':
      {return <Text style={{color:'#EA7744'}}>{state}</Text>}
      break;
    case '已取消':
      {return <Text style={{color:'#999'}}>{state}</Text>}
      break;
    case '已完成':
      {return <Text style={{color:'#47C479'}}>{state}</Text>}
      break;
  }
  return <Text style={{color:'#999'}}>{state}</Text>
}
