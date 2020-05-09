import {ComponentType} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Button,Text} from '@tarojs/components'
import { AtModal,AtRadio , AtModalHeader, AtModalContent, AtModalAction ,AtTag,AtTabs, AtTabsPane  } from 'taro-ui'
import { getDetail, cancelOrder , cancelReason, getCommentOption, submitComment} from './order-apis'
import {getWxPay} from "../order/order-api";
import {simpleClone} from '../../utils/common'
import StateText from '../../components/state-text-colorful'
import './detail.scss'


type cancelReason = {
  createTime:string
  id:string
  isValid:string
  orderStateConfig:string
  reasonName:string
}
interface State {
  id:string
  cancelReasonId:string
  orderDetail:object
  cancelReasonLists:Array<cancelReason>
  reasonModal:boolean
  baseInfo:object
  repairOrderOfferPlanVoList:Array<object>
  repairOrderAmountVos:Array<object>
  dispatchInfo:object|null
  waitPay:number,
  payed:number,
  commentInfo:object
  commentNowModal:boolean
  commentOptions:Array<object>
  commentActiveTags:Array<string>
  currentComment:number
  commentDetail:Array<object>
  commentDetailModal:boolean
}
class Lists extends Component<{},State>{
  config:Config = {
    navigationBarTitleText:'报修详情',
    navigationStyle:'default'
  }
  constructor() {
    super();
    this.state = {
      id:'',
      cancelReasonId:'',
      orderDetail:{},
      cancelReasonLists:[],
      reasonModal:false,
      baseInfo:{orderState:'ASSIGNED'},
      repairOrderOfferPlanVoList:[],
      dispatchInfo:null,
      repairOrderAmountVos:[],
      waitPay:0,
      payed:0,
      commentInfo:{},
      currentComment:0,
      commentNowModal:false,
      commentOptions:[],
      commentActiveTags:[],
      commentDetail:[],
      commentDetailModal:false
    }
  }
  componentWillMount(){
    let id = this.$router.params.id
    this.setState({
      id:id
    },()=>{
      this.getOrderDetail()
      this.getCancelReason()
      this.getCommentLists()
    })
  }

  // 获取评价选项列表
  getCommentLists = ()=>{
    getCommentOption().then(res=>{
      if(res.data.code===0){
        this.setState({
          commentOptions:res.data.data
        })
      }
    })
  }
  // 获取订单详情
  getOrderDetail = ()=>{
    const id = this.state.id
    Taro.showLoading({title:'加载中'})
    getDetail(id).then(res=>{
      Taro.hideLoading()
      if(res.data.code===0){
        let data = res.data.data
        let waitPay = 0
        let payed = 0
        data.repairOrderAmountVos.forEach(item=>{
          if(item.type==='STAY_PAY_AMOUNT'){
            waitPay=item.amount
          }
          if(item.type==='ALREADY_PAY_AMOUNT'){
            payed=item.amount
          }
        })

        this.setState({
          orderDetail:res.data.data,
          baseInfo:data.baseInfo,
          repairOrderOfferPlanVoList:data.repairOrderOfferPlanVoList,
          dispatchInfo:data.dispatchInfo,
          repairOrderAmountVos:data.repairOrderAmountVos,
          waitPay:waitPay,
          payed:payed,
          commentInfo:data.commentInfo,
          commentDetail:data.commentInfo.comment?[data.commentInfo.comment.comment]:[]
        })
      }
    })
  }
  // 调起支付
  startPay=()=>{
    let params = {
      "orderIds":[this.state.baseInfo.id],
      "payBusinessType":"W_REPAIR_ORDER",
      "payCode":"WX_XCX"
    }
    getWxPay(params).then(res=>{
      if(res.data.code===0){
        let data = res.data.data
        console.log('支付信息',data)
        Taro.requestPayment({
          success:()=>{
            this.orderSuccess()
          },
          fail (res) {
            console.log('接口调用失败')
            console.log('支付失败')
          },
          ...data
        })
      }else{
        Taro.showToast({
          title:res.data.msg,
          icon:'none'
        })
      }
    })
  }
  // 支付成功
  orderSuccess= ()=>{
    Taro.showModal({
      content:'订单支付成功，可在【我的】-【报修订单】中查看',
      confirmText:'查看订单',
      cancelText:'回到首页',
      success:(res)=>{
        if(res.confirm){
          Taro.reLaunch({
            url:'/pages/mine/mine'
          })
        }else{
          Taro.reLaunch({
            url:'/pages/index/index'
          })
        }
      }
    })
  }
  // 底部渲染
  renderFoot= ()=> {
    let {dispatchInfo ,waitPay, payed, baseInfo,commentInfo} = this.state

    switch(baseInfo.orderState){
      case 'STAY_PAY':
        {
          return (  <View className='page-foot'>
                <View className='ico-wrap'>
                  <View className='ico-item'  onClick={()=>this.call(baseInfo.stationPhone)}>
                    <Image className='foot-ico' src={require('../../assets/imgs/tmp/cus-ser.png')}></Image>
                    <View>联系网点</View>
                  </View>
                  <View className='ico-item' onClick={()=>this.call(dispatchInfo.masterPhone)}>
                    <Image className='foot-ico' src={require('../../assets/imgs/tmp/staff.png')}></Image>
                    <View >联系师傅</View>
                  </View>
                </View>
                <Button onClick={this.startPay} className='submit-btn'>支付订单： ￥{waitPay}</Button>
            </View>
          )
        }
        break;
      case 'VYING':  // 待抢单
      {
        return (<View  className='page-foot'>
          <View className='foot-item'>已付款： ￥{payed}</View>
          <Button onClick={this.handleCancelModal} className='submit-btn line-btn'>取消报修</Button>
        </View>)
      }
        break;
      case 'ASSIGNED':  // 待接单
      {
        return (<View  className='page-foot'>
          <View className='foot-item'>已付款： ￥{payed}</View>
          <Button onClick={this.handleCancelModal} className='submit-btn line-btn'>取消报修</Button>
          <Button className='submit-btn' onClick={()=>this.call(baseInfo.stationPhone)}>联系网点</Button>
        </View>)
      }
      break;
      case 'WAIT_DOOR':  // 待上门
      {
        return (<View  className='page-foot'>
          <View className='foot-item'>已付款： ￥{payed}</View>
          <Button onClick={this.handleCancelModal} className='submit-btn line-btn'>取消报修</Button>
          <Button className='submit-btn' onClick={()=>this.call(dispatchInfo.masterPhone)}>联系师傅</Button>
        </View>)
      }
      break;
      case 'CANCEL': // 已取消
      {
        return null
      }
      break;
      case 'FINISH':  // 已结束
      {

          return (<View className='page-foot'>
            <View className='foot-item'>已付款： ￥{payed}</View>
            {commentInfo.hasComment==='N'?<Button onClick={()=>this.setState({commentNowModal:true})} className='submit-btn'>评价订单</Button>:<Button onClick={()=>this.setState({commentDetailModal:true})} className='submit-btn'>评价详情</Button>}
          </View>)

      }
      break;
    }
  }
  // 获取取消原因列表
  getCancelReason = ()=>{
    cancelReason().then(res=>{
      if(res.data.code===0){
        let data = res.data.data
        this.setState({
          cancelReasonLists:data
        })
      }
    })
  }
  // 取消订单选择交互
  handleRadioChange = (value)=>{
    this.setState({
      cancelReasonId:value
    })
  }
  // 取消订单弹窗
  handleCancelModal = ()=>{
    this.setState((prevState)=>{
      return {
        reasonModal:!prevState.reasonModal,
        cancelReasonId:'',
      }
    })
  }
  // 取消订单操作
  handleConfirmModal= ()=>{
    let params = {
      repairOrderId:this.state.id,
      cancelReasonId:this.state.cancelReasonId
    }
    Taro.showLoading({title:'系统处理中'})
    cancelOrder(params).then(res=>{
      Taro.hideLoading()
      if(res.data.code===0){
        Taro.showToast({
          title:'订单取消成功',
          icon:'none'
        }).then(res=>{
          this.handleCancelModal()
          this.getOrderDetail()
        })

        // Taro.navigateBack({delta:-1})
      }else{
        Taro.showToast({
          title:'订单取消失败：'+res.data.msg,
          icon:'none'
        })
      }
    })
  }
  // 拔打电话
  call = (phone)=>{
    Taro.makePhoneCall({
      phoneNumber: phone
    })
  }
  // 评价
  clickCommentTag=(value)=>{
    let commentActiveTags = JSON.parse(JSON.stringify(this.state.commentActiveTags))
    if(commentActiveTags.indexOf(value.name)<=-1){
      commentActiveTags.push(value.name)
    }else{
      commentActiveTags.splice(commentActiveTags.indexOf(value.name),1)
    }
    this.setState({
      commentActiveTags:commentActiveTags
    })
  }
  // 切换评价满意-不满意
  handleCommentTab=(v)=>{
    this.setState({
      commentActiveTags:[],
      currentComment:v
    })
  }
  // 取消评价
  cancelComment=()=>{
    this.setState({
      commentNowModal:false,
      commentActiveTags:[],
    })
  }
  // 提交评价
  confirmComment=()=>{
    const id = this.state.id
    let currentComment = this.state.currentComment
    let confirmCommentLists = simpleClone(this.state.commentOptions[currentComment])
    let commentActiveTags = this.state.commentActiveTags
    confirmCommentLists.children = confirmCommentLists.children.filter(item=>{
      return commentActiveTags.indexOf(item.id)>-1
    })
    let params = confirmCommentLists
    Taro.showLoading({title:'提交中'})
    submitComment(id,params).then(res=>{
      Taro.hideLoading()
      if(res.data.code===0){
        Taro.showToast({
          title:'评价成功',
          icon:'none'
        })
        this.setState({
          commentNowModal:false,
          currentComment:0,
          commentActiveTags:[],
        },()=>{
          this.getOrderDetail()
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
    return (<View className='page detail-page'>
      <View className='info-wrap'>
        <View className='detail-block'>
          <View className='detail-title'>工单信息</View>
          <View className='detail-info'>
            <View className='info-item'>
              <View className='item-label'>报修信息</View>
              <View className='item-info'>{this.state.baseInfo.repairCategoryName}</View>
            </View>

            <View className='info-item'>
              <View className='item-label'>工单编号</View>
              <View className='item-info'>{this.state.baseInfo.orderSn}</View>
            </View>
            <View className='info-item'>
              <View className='item-label'>工单状态</View>
              <View className='item-info'>
                <StateText state={this.state.baseInfo.orderStateName}></StateText>
              </View>
            </View>
            <View className='info-item'>
              <View className='item-label'>下单时间</View>
              <View className='item-info'>{this.state.baseInfo.createTime}</View>
            </View>
            {/*<View className='info-item'>*/}
            {/*  <View className='item-label'>服务网点</View>*/}
            {/*  <View className='item-info'>{this.state.baseInfo.stationName}</View>*/}
            {/*</View>*/}
            {/*<View className='info-item'>*/}
            {/*  <View className='item-label'>网点电话</View>*/}
            {/*  <View className='item-info'>{this.state.baseInfo.stationPhone}</View>*/}
            {/*</View>*/}
          </View>
        </View>
        {
          !!this.state.dispatchInfo?(
            <View className='detail-block'>
              <View className='detail-title'>师傅信息</View>
              <View className='detail-info'>
                <View className='info-item'>
                  <View className='item-label'>师傅姓名</View>
                  <View className='item-info'>{this.state.dispatchInfo.masterName}</View>
                </View>
                <View className='info-item'>
                  <View className='item-label'>联系电话</View>
                  <View className='item-info'><Text className='link-text' onClick={()=>this.call(this.state.dispatchInfo.masterPhone)}>{this.state.dispatchInfo.masterPhone}</Text></View>
                </View>
              </View>
            </View>
          ):null
        }
        <View className='detail-block'>
          <View className='detail-title'>用户信息</View>
          <View className='detail-info'>
            <View className='info-item'>
              <View className='item-label'>联系人</View>
              <View className='item-info'>{this.state.baseInfo.username}</View>
            </View>
            <View className='info-item'>
              <View className='item-label'>联系电话</View>
              <View className='item-info'>{this.state.baseInfo.userPhone}</View>
            </View>
            <View className='info-item'>
              <View className='item-label'>报修地址</View>
              <View className='item-info'>{this.state.baseInfo.address}</View>
            </View>
            {/*<View className='info-item'>*/}
            {/*  <View className='item-label'>维修区域</View>*/}
            {/*  <View className='item-info'>{this.state.baseInfo.repairRegionName}</View>*/}
            {/*</View>*/}
          </View>
        </View>
        {this.state.repairOrderAmountVos.length>0?(<View className='detail-block price-block'>
          <View className='detail-title'>费用清单</View>
          <View className='detail-info'>
            {
              this.state.repairOrderAmountVos.map(item=>{
                return (<View key={item.id} className='info-item'>
                  <View className='price-label'>
                    <View className='item-label'>{item.name}</View>
                  </View>
                  <View className='item-info'><Text className='text-warm'>￥{item.amount}</Text></View>
                </View>)
              })
            }
          </View>
        </View>):null}
        {
          this.state.repairOrderOfferPlanVoList.length>0?(<View className='detail-block price-block'>
              <View className='detail-title'>费用明细</View>
              <View className='detail-info'>
                {
                  this.state.repairOrderOfferPlanVoList.map(item=>{
                    return (<View key={item.id} className='info-item'>
                      <View className='price-label'>
                        <View className='item-label'>{item.planName}</View>
                      </View>
                      <View className='item-info'><Text className='text-warm'>￥{item.amount}</Text></View>
                    </View>)
                  })
                }
              </View>
          </View>):null
        }
        {
          this.state.baseInfo.statementReasonName?(
            <View className='detail-block'>
              <View className='detail-title'>申述信息</View>
              <View className='detail-info'>
                <View className='info-item'>
                  <View className='item-label'>申述原因</View>
                  <View className='item-info'>{this.state.baseInfo.statementReasonName}</View>
                </View>
                <View className='info-item'>
                  <View className='item-label'>申述请求</View>
                  <View className='item-info'>{this.state.baseInfo.statementRequestName}</View>
                </View>
              </View>
            </View>
          ):null
        }
        {
          this.state.commentInfo.comment?(
            <View className='detail-block'>
              <View className='detail-title'>评价信息</View>
              <View className='detail-info'>
                <View className='info-item'>
                  <View className='item-label'>评价结果</View>
                  <View className='item-info'>{this.state.commentInfo.comment.comment.name}</View>
                </View>
                <View className='info-item'>
                  <View className='item-label'>评价详情</View>
                  <View className='item-info'>
                    {this.state.commentInfo.comment.comment.children.map(item=>{
                      return <Text key={item.id}>{item.name}、</Text>
                    })}
                  </View>
                </View>
              </View>
            </View>
          ):null
        }

      </View>
      {/*底部操作区*/}
      {this.renderFoot()}
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
      {/*  评价弹窗*/}
      <AtModal className='comment-modal' isOpened={this.state.commentNowModal} >
        <AtModalHeader>评价订单</AtModalHeader>
        <AtModalContent>
          <AtTabs
            animated={false}
            current={this.state.currentComment}
            tabList={this.state.commentOptions.map(item=>({title:item.name}))}
            onClick={this.handleCommentTab.bind(this)}>
            {
              this.state.commentOptions.map((item,index)=>{
                return <AtTabsPane className='comment-pane' current={this.state.currentComment} index={index} key={index}>
                  <View className='comment-tag'>
                    {
                      item.children.map(child=>{
                        const commentActiveTags = this.state.commentActiveTags
                        return <AtTag
                          className='tag-item'
                          name={child.id}
                          active={commentActiveTags.indexOf(child.id)>-1}
                          type='primary'
                          onClick={this.clickCommentTag}
                          key={child.id}>
                          {child.name}
                        </AtTag>
                      })
                    }

                  </View>
                </AtTabsPane>
              })
            }
          </AtTabs>
        </AtModalContent>
        <AtModalAction>
          <Button  onClick={ this.cancelComment }>取消</Button>
          <Button onClick={ this.confirmComment }>确定</Button>
        </AtModalAction>
      </AtModal>
      {/*  评价详情*/}
      <AtModal isOpened={this.state.commentDetailModal} >
        <AtModalHeader>评价详情</AtModalHeader>
        <AtModalContent>
          <AtTabs
            animated={false}
            current={0}
            tabList={this.state.commentDetail.map(item=>({title:item.name}))}
            onClick={()=>console.log('111')}
            >
            {
              this.state.commentDetail.map((item,index)=>{
                return <AtTabsPane className='comment-pane' current={this.state.currentComment} index={index} key={index}>
                  <View className='comment-tag'>
                    {
                      item.children.map(child=>{
                        return <AtTag
                          className='tag-item'
                          name={child.id}
                          active
                          type='primary'
                          key={child.id}>
                          {child.name}
                        </AtTag>
                      })
                    }

                  </View>
                </AtTabsPane>
              })
            }
          </AtTabs>
        </AtModalContent>
        <AtModalAction>
          <Button onClick={()=>this.setState({commentDetailModal:false})}>关闭</Button>
        </AtModalAction>
      </AtModal>

    </View>)

  }
}
export default Lists as ComponentType
