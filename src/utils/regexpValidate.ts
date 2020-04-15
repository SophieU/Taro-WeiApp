import Taro from '@tarojs/taro'

export const validateTel = (str)=>{
  let reg = /^1[3456789]\d{9}$/
  return reg.test(str)
}

export const validateEmpty = (obj,validate)=>{
  for(let key in validate){
    if(!obj[key]){
      Taro.showToast({title:validate[key].message,icon:'none'})
      return false
    }
  }
  return true
}
