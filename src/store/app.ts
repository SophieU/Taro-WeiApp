import { observable } from 'mobx'

const appStore = observable({
  orderForm:{
    address:'',
    addressObj:{},
    userMobile:'',
  },
  bookOrderDetail:{},
  setOrderForm(data){
    for(let key in data){
      this.orderForm[key] = data[key]
    }
  },
  setBookItem(data){
    this.bookOrderDetail=data
  }
})

export default appStore
