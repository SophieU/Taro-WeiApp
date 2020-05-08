import {ComponentType} from 'react'
import {RichText} from '@tarojs/components'

const RichCustom = function  (prop) {
  let node = prop.nodes
  if(node){
    node = node.replace(/\<img/gi,'<img style="max-width:100%;height:auto"')
  }
  return <RichText nodes={node}></RichText>
}
export default RichCustom as ComponentType
