import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Button, Block,ScrollView} from '@tarojs/components'
import {AtTabs, AtTabsPane  , AtModalHeader, AtModalContent, AtModalAction  ,AtModal,AtRadio} from 'taro-ui'
import {lists,conflictAppeal,cancelLists,cancel,cancelConf,closeAppeal} from './admin-apis'
import './admin.scss'

class Admin extends Component{
  config: Config = {
    navigationBarTitleText:'工单处理',
    navigationStyle:'default'
  }
  constructor() {
    super();
    this.state = {
      currentTab:0,
      orderLists:[],
      cancelReasonLists:[],
      pageNo:1,
      pageSize:5,
      hasNextPage:true,
      reasonModal:false,
      cancelReasonId:'',
      nowItem:{}, //正在操作的订单id
    }
  }
  componentDidShow(){
    this.reloadData()
  }
  // 重新加载
  reloadData=()=>{
    this.setState({
      pageNo:1,
      pageSize:5,
      hasNextPage:true,
      orderLists:[],
      reasonModal:false,
      nowItem:{},
    },()=>{
      this.getLists()
      this.getCancelLists()
    })
  }
  // 取消列表
  getCancelLists = ()=>{
    cancelLists().then(res=>{
      this.setState({
        cancelReasonLists:res.data.data
      })
    })
  }
  // 分配工单
  dispatchOrder= (e)=>{
    let id = e.target.dataset.id
    let controlObj=null
    this.state.orderLists.forEach(item=>{
      if(item.orderId===id){
        controlObj=item
      }
    })
    console.log(controlObj)
    Taro.navigateTo({
      url:`/pages/admin/staffs?orderId=${controlObj.orderId}&stationName=${controlObj.stationName}&type=${controlObj.type}`
    })
  }
  // 驳回申诉
  conflict = (e)=>{
    let id = e.target.dataset.id
    let controlObj=null
    this.state.orderLists.forEach(item=>{
      if(item.orderId===id){
        controlObj=item
      }
    })
    let masterInfo = Taro.getStorageSync('masterInfo')
    let params = {
      appealId:controlObj.appealId,
      userId:masterInfo.masterId,
      username:masterInfo.masterName,
      departmentName:controlObj.stationName
    }
    conflictAppeal(params).then(res=>{
      if(res.data.code===0){
        Taro.showToast({title:'驳回成功',icon:'none'}).then(()=>{
          this.setState({
            pageNo:1,
            pageSize:5,
            hasNextPage:true,
            orderLists:[]
          },()=>{
            this.getLists()
          })
        })
      }else{
        Taro.showToast({title:'驳回失败'+res.data.msg,icon:'none'})
      }
    })
  }
  // 关闭工单 -申诉
  closeOrder=(e)=>{
    let controlObj=null
    let id = e.target.dataset.id
    this.state.orderLists.forEach(item=>{
      if(item.orderId===id){
        controlObj=item
      }
    })
    let masterInfo =Taro.getStorageSync('masterInfo')
    let params = {
      "appealId":controlObj.appealId,
      "userId":masterInfo.masterId,
      "username":masterInfo.masterName,
      "departmentName":controlObj.repairStationName
    }
    closeAppeal(params).then(res=>{
      if(res.data.code===0){
        Taro.showToast({title:'操作成功',icon:'none'}).then(()=>{
          this.reloadData()
        })
      }else{
        Taro.showToast({title:'操作失败',icon:'none'})
      }
    })
  }
  // 列表
  getLists = ()=>{
    let {pageNo,pageSize,hasNextPage} = this.state
    if(!hasNextPage){
      Taro.showToast({title:'没有更多了',icon:'none'})
      return
    }
    let params = {
      pageNo,
      pageSize,
      stationId:Taro.getStorageSync('masterInfo').repairStationId
    }
    lists(params).then(res=>{
      if(res.data.code===0){
        let data = res.data.data
        this.setState(prevState=>{
          return {
            hasNextPage:data.hasNextPage,
            pageNo:data.hasNextPage?data.nextPage:data.pageNo,
            orderLists:prevState.orderLists.concat(data.list)
          }
        })
      }
    })
  }
  renderFootBtn = (orderType:string,orderId)=>{

    switch (orderType) {
      case '待上门':
      {
        /*重新派单*/
        return ( <View className='btn-wrap'>
          <Button data-id={orderId} onClick={this.handleCancelModal} className='btn primary-btn' >取消工单</Button>
        </View>)
      }
      break;
      case '待接单':
      {
        /*取消订单*/
        return (<View className='btn-wrap'>
          <Button data-id={orderId}  onClick={this.handleCancelModal} className='btn primary-btn'>取消工单</Button>
          <Button data-id={orderId}  onClick={this.dispatchOrder} className='btn orange-btn'>分配工单</Button>
        </View>)
      }
      break;
      case '异常':
      {
        // 关闭订单
        return (<View className='btn-wrap'>
          <Button data-id={orderId}   onClick={this.dispatchOrder} className='btn orange-btn'>重新派单</Button>
          <Button data-id={orderId}   onClick={this.conflict} className='btn primary-btn'>驳回申诉</Button>
          <Button data-id={orderId}   onClick={this.cancelAppeal} className='btn primary-btn'>取消工单</Button>
          <Button data-id={orderId}   onClick={this.closeOrder} className='btn primary-btn'>关闭工单</Button>
        </View>)
      }
      break;
    }
  }
// 取消订单选择交互
  handleRadioChange = (value)=>{
    this.setState({
      cancelReasonId:value
    })
  }
  // 取消订单弹窗
  handleCancelModal = (e)=>{
    let id = e.target.dataset.id
    let controlObj=null
    this.state.orderLists.forEach(item=>{
      if(item.orderId===id){
        controlObj=item
      }
    })
    this.setState((prevState)=>{
      return {
        reasonModal:!prevState.reasonModal,
        cancelReasonId:'',
        nowItem:controlObj,
      }
    })
  }
  // 取消工单-申述
  cancelAppeal= (e)=>{
    let id = e.target.dataset.id
    let controlObj=null
    this.state.orderLists.forEach(item=>{
      if(item.orderId===id){
        controlObj=item
      }
    })
    let masterInfo =Taro.getStorageSync('masterInfo')
    let params = {
      "appealId":controlObj.item,
      "userId":masterInfo.masterId,
      "username":masterInfo.masterName,
      "departmentName":controlObj.repairStationName
    }
    cancelConf(params).then(res=>{
      if(res.data.code===0){
        Taro.showToast({title:'操作成功',icon:'none'}).then(()=>{
          this.reloadData()
        })
      }else{
        Taro.showToast({title:'操作失败',icon:'none'})
      }
    })
  }
  // 取消订单操作-正常工单
  handleConfirmModal= ()=>{
    let {nowItem,cancelReasonId} = this.state
    let masterInfo = Taro.getStorageSync('masterInfo')
    let params = {
      orderId:nowItem.orderId,
      reasonId:cancelReasonId,
      userId:masterInfo.masterId,
      username:masterInfo.masterName,
      departmentName:nowItem.repairStationName,
    }
    cancel(params).then(res=>{
      if(res.data.code===0){
        Taro.showToast({
          title:'订单取消成功',
          icon:'none'
        }).then(()=>{
          this.reloadData()
        })
      }else{
        Taro.showToast({
          title:'订单取消失败：'+res.data.msg,
          icon:'none'
        })
      }
    })
  }
  render(){
    let cancelReasonArr = []
    this.state.cancelReasonLists.forEach(item=>{
      if(item.isValid==='Y'){
        let obj = {
          label:item.reasonName,
          value:item.id
        }
        cancelReasonArr.push(obj)
      }
    })
    return (<ScrollView style={{height:'100vh'}} className='page' scrollY onScrollToLower={this.getLists}>
      {/*<AtTabs current={this.state.currentTab} tabList={[{ title: '工单处理' }]}>*/}
      {/*  */}
      {/*</AtTabs>*/}
      <AtTabsPane current={this.state.currentTab} index={0} >
        <View className='order-wrap'>
          {this.state.orderLists.length<=0?( <View className='nothing'>这里空空如也~</View>):null}
          {this.state.orderLists.map(item=>{
            return <View className='order-lists' key={item.orderId}>
              <View className='order-item'>
                <View className='item-header'>
                  <View className='header-time'>{item.createTime}</View>
                  <View className='header-type'>{item.orderStateName}</View>
                </View>
                <View className='order-number'>订单编号：{item.orderSn}</View>
                <View className='order-info'>
                  <View className='info-item'>
                    <Text className='info-label'>报修类型：</Text>
                    <Text className='info-inner'>{item.repairCategoryName} </Text>
                  </View>
                  <View className='info-item'>
                    <Text className='info-label'>报修地址：</Text>
                    <Text className='info-inner'>{item.repairRegionName}</Text>
                  </View>
                  <View className='info-item'>
                    <Text className='info-label'>详细地址：</Text>
                    <Text className='info-inner'>{item.address}</Text>
                  </View>
                  <View className='info-item'>
                    <Text className='info-label'>联系人姓名：</Text>
                    <Text className='info-inner'>{item.username}</Text>
                  </View>
                  <View className='info-item'>
                    <Text className='info-label'>用户手机：</Text>
                    <Text className='info-inner'>{item.userPhone}</Text>
                  </View>
                  <View className='divider'></View>
                  {
                    item.orderStateName!=='待接单'?(<View className='info-item'>
                      <Text className='info-label'>接单师傅：</Text>
                      <Text className='info-inner'>{item.serviceUserName}</Text>
                    </View>):null
                  }
                  <View className='info-item'>
                    <Text className='info-label'>工单状态：</Text>
                    <Text className='info-inner'>{item.orderStateName}</Text>
                  </View>
                  {
                    item.type==='appeal'?( <Block><View className='info-item'>
                      <Text className='info-label'>申诉请求：</Text>
                      <Text className='info-inner'>{item.statementRequestName}</Text>
                    </View>
                      <View className='info-item'>
                        <Text className='info-label'>申诉原因：</Text>
                        <Text className='info-inner'>{item.statementReasonName}</Text>
                      </View></Block>):null
                  }
                </View>
                <View className='order-foot'>
                  {this.renderFootBtn(item.orderStateName,item.orderId)}
                </View>
              </View>
            </View>
          })}
        </View>
      </AtTabsPane>
      {/*  取消弹窗*/}
      <AtModal isOpened={this.state.reasonModal} >
        <AtModalHeader>取消原因</AtModalHeader>
        <AtModalContent>
          <AtRadio
            options={cancelReasonArr}
            value={this.state.cancelReasonId}
            onClick={this.handleRadioChange}
          />
        </AtModalContent>
        <AtModalAction>
          <Button  onClick={ this.handleCancelModal }>取消</Button>
          <Button onClick={ this.handleConfirmModal }>确定</Button>
        </AtModalAction>
      </AtModal>
    </ScrollView>)
  }
}
export default Admin as ComponentType
