import { observable } from 'mobx'

const appStore = observable({
  orderForm:{
    address:'',
    addressObj:{},
    userMobile:'',
  },
  setOrderForm(data){
    for(let key in data){
      this.orderForm[key] = data[key]
    }
  }
})

export default appStore
