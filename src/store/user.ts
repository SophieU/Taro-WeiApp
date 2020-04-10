import { observable } from 'mobx'

const userStore = observable({
  wxUserInfo:{
    avatarUrl:''
  },
  apiUserInfo:{
    userPhone:'',
    userId: '',
    userType: '',
    isShowInvitePage:'N', //新用户可以显示填写邀请人电话
  },
  userAccount:{
    frozenAmount: 0,
    isSetPayPwd: "N",
    money: 0,
    score: "",
  },
  setWXUserInfo(data){
    this.wxUserInfo = data
  },
  setAPIUserInfo(data){
    this.apiUserInfo = data
  },
  setUserAccount(data){
    this.userAccount = data
  }
})

export default userStore
