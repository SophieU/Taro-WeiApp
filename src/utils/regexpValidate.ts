export const validateTel = (str)=>{
  let reg = /^1[3456789]\d{9}$/
  return reg.test(str)
}
