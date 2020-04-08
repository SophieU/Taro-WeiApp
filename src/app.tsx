import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'

import counterStore from './store/counter'
import './styles/custom-taro.scss'
import './styles/base.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore
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
      'pages/index/index',
      'pages/index/more-service',
      'pages/login/login',
      'pages/login/toggle-login',
      'pages/order/order-submit',
      'pages/address/order-add',
      'pages/address/add-edit',
      'pages/address/address',
      'pages/mine/mine',
      'pages/mine/pocket',
      'pages/mine/qr-code',
      'pages/mine/invite-history',
      'pages/mall/mall',
      'pages/mall/goods-detail',
      'pages/mall/order-now',
      'pages/mall/order-lists-custom',
      'pages/mall/order-lists-staff',
      'pages/custom-order/lists',
      'pages/custom-order/detail',
      'pages/admin/admin',
      'pages/admin/staffs',
      'pages/staff-order/order',
      'pages/staff-order/quote',
      'pages/staff-order/order-deal',
      'pages/staff-order/pay',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '速达优服',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      borderStyle: 'white',
      selectedColor: '#F9834E',
      color: '#DADADA',
      list:[
        {pagePath: 'pages/index/index', text:'首页', iconPath:'assets/imgs/tmp/index.png', selectedIconPath: 'assets/imgs/tmp/index-active.png'},
        {pagePath: 'pages/mine/mine', text:'我的', iconPath:'assets/imgs/tmp/mine.png', selectedIconPath: 'assets/imgs/tmp/mine-active.png'}
      ]
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
