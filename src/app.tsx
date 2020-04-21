import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'

import counterStore from './store/counter'
import userStore from './store/user'
import appStore from './store/app'
import './styles/custom-taro.scss'
import './styles/base.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore,
  userStore,
  appStore
}

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index', //首页
      'pages/index/more-service', // 服务分类-更多
      'pages/index/web-view',  // 单独打开H5
      'pages/login/toggle-login', // 登录（默认）
      'pages/order/order-submit', // 订单确认
      'pages/address/order-add',  // 地址管理
      'pages/address/add-edit',   // 编辑地址
      'pages/mine/mine',  // 我的
      'pages/mine/pocket',  // 钱包
      'pages/mine/qr-code', // 邀请码
      'pages/mine/invite-history',  // 邀请历史
      'pages/mall/mall',  // 预约商城-首页
      'pages/mall/goods-detail',  // 预约商城-详情
      'pages/mall/order-now', // 预约商城-下单
      'pages/mall/order-lists-custom', // 预约商城-订单列表
      'pages/mall/order-lists-staff', // 预约商城-师傅预约列表
      'pages/custom-order/lists', // 我的-报修订单
      'pages/custom-order/detail',  // 报修订单-详情
      'pages/admin/admin',  // 我的-管理员
      'pages/admin/staffs',  // 我的-报修订单-师傅端
      'pages/staff-order/order',
      'pages/staff-order/quote',
      'pages/staff-order/order-deal',
      'pages/staff-order/pay',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '速达优服',
      navigationBarTextStyle: 'black',
      navigationStyle:'custom'
    },
    tabBar: {
      borderStyle: 'white',
      selectedColor: '#F9834E',
      color: '#DADADA',
      list:[
        {pagePath: 'pages/index/index', text:'首页', iconPath:'assets/imgs/tmp/index.png', selectedIconPath: 'assets/imgs/tmp/index-active.png'},
        {pagePath: 'pages/mine/mine', text:'我的', iconPath:'assets/imgs/tmp/mine.png', selectedIconPath: 'assets/imgs/tmp/mine-active.png'}
      ]
    },
    plugins: {
      "chooseLocation": {
        "version": "1.0.2",
        "provider": "wx76a9a06e5b4e693e"
      }
    },
    permission: {
      "scope.userLocation": {
        "desc": "你的位置信息将用于小程序定位"
      }
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
