import { observable } from 'mobx'

const appStore = observable({
  orderForm:{
    address:'',
    userMobile:'',
  },
  setOrderForm(data){
    this.orderForm = data
  }
})

export default appStore
