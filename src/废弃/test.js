/* 防抖*/
/*
* 防抖和节流都是防止函数被多次调用，区别在于，假设一个用户一直触发这个函数，且每次触发时间间隔小于wait
* 防抖的情况下只会调用一次，节流会每隔一定时间（wait）调用函数
* */
function debounce(func,wait=50,immediate=true){
  let timer,context,args
  const later = ()=>setTimeout(()=>{
    timer = null
    if(!immediate){
      func.apply(context,args)
      context = args= null
    }
  },wait)

  return function(...params){
    if(!timer){
      timer = later()
      if(immediate){
        func.apply(this,params)
      }else{
        context = this
        args = params
      }
    }else{
      clearTimeout(timer)
      timer = later()
    }
  }

}
