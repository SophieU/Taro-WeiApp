(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/mall/order-lists-custom"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mall/order-lists-custom.tsx?taro&type=script&parse=PAGE&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/mall/order-lists-custom.tsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _mallApis = __webpack_require__(/*! ./mall-apis */ "./src/pages/mall/mall-apis.ts");

var _orderApi = __webpack_require__(/*! ../order/order-api */ "./src/pages/order/order-api.ts");

__webpack_require__(/*! ./order-lists.scss */ "./src/pages/mall/order-lists.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderListsCustom = (_temp2 = _class = function (_BaseComponent) {
  _inherits(OrderListsCustom, _BaseComponent);

  function OrderListsCustom() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, OrderListsCustom);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = OrderListsCustom.__proto__ || Object.getPrototypeOf(OrderListsCustom)).call.apply(_ref, [this].concat(args))), _this2), _this2.$usedState = ["loopArray48", "pageNo", "pageSize", "hasNextPage", "lists"], _this2.config = {
      navigationBarTitleText: '订单列表',
      navigationStyle: 'default'
    }, _this2.getLists = function () {
      var _this2$state = _this2.state,
          pageNo = _this2$state.pageNo,
          pageSize = _this2$state.pageSize,
          hasNextPage = _this2$state.hasNextPage;

      var params = {
        pageNo: pageNo,
        pageSize: pageSize
      };
      var bodyParams = { userId: _taroWeapp2.default.getStorageSync('userId') };
      if (!hasNextPage) {
        _taroWeapp2.default.showToast({
          title: '没有更多了~',
          icon: 'none'
        });
        return;
      }
      _taroWeapp2.default.showLoading({ title: '加载中' });
      (0, _mallApis.customOrderLists)(params, bodyParams).then(function (res) {
        _taroWeapp2.default.hideLoading();
        _taroWeapp2.default.stopPullDownRefresh();
        if (res.data.code === 0) {
          var data = res.data.data;
          _this2.setState(function (prevState) {
            return {
              pageNo: data.hasNextPage ? data.nextPage : data.pageNo,
              hasNextPage: data.hasNextPage,
              lists: prevState.lists.concat(data.list)
            };
          });
        }
      });
    }, _this2.payNow = function (id) {
      var params = {
        orderIds: [id],
        payBusinessType: 'BOOKING_ORDER',
        payCode: 'WX_XCX'
      };
      _taroWeapp2.default.showLoading({ title: '提交中' });
      (0, _orderApi.getWxPay)(params).then(function (res) {
        _taroWeapp2.default.hideLoading();
        var _this = _this2;
        if (res.data.code === 0) {
          var data = res.data.data;
          _taroWeapp2.default.requestPayment(_extends({}, data, {
            success: function success() {
              _taroWeapp2.default.showToast({ title: '支付成功', icon: 'none' });
              _this2.setState({
                lists: [],
                pageNo: 1,
                hasNextPage: true
              }, function () {
                _this.getLists();
              });
            },
            fail: function fail(res) {
              console.log('接口调用失败');
              console.log('支付失败');
            }
          }));
        } else {
          _taroWeapp2.default.showToast({ title: res.data.msg, icon: 'none' });
        }
      });
    }, _this2.anonymousFunc0Map = {}, _this2.anonymousFunc1Map = {}, _this2.anonymousFunc2Map = {}, _this2.customComponents = [], _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(OrderListsCustom, [{
    key: '_constructor',
    value: function _constructor() {
      _get(OrderListsCustom.prototype.__proto__ || Object.getPrototypeOf(OrderListsCustom.prototype), '_constructor', this).apply(this, arguments);

      this.state = {
        pageNo: 1,
        pageSize: 5,
        hasNextPage: true,
        lists: []
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      var _this3 = this;

      this.setState({
        pageNo: 1,
        pageSize: 5,
        hasNextPage: true,
        lists: []
      }, function () {
        _this3.getLists();
      });
    }
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      this.getLists();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getLists();
    }
  }, {
    key: 'call',
    value: function call(phone) {
      _taroWeapp2.default.makePhoneCall({
        phoneNumber: phone
      });
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _this4 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var loopArray48 = this.__state.lists.map(function (item, __index0) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey = "fezzz" + __index0;

        _this4.anonymousFunc0Map[_$indexKey] = function () {
          return _taroWeapp2.default.makePhoneCall({ phoneNumber: item.$original.repairServiceUserPhone });
        };

        var _$indexKey2 = "ffzzz" + __index0;

        _this4.anonymousFunc1Map[_$indexKey2] = function () {
          return _this4.call(item.$original.repairServiceUserPhone);
        };

        var _$indexKey3 = "fgzzz" + __index0;

        _this4.anonymousFunc2Map[_$indexKey3] = function () {
          return _this4.payNow(item.$original.id);
        };

        return {
          _$indexKey: _$indexKey,
          _$indexKey2: _$indexKey2,
          _$indexKey3: _$indexKey3,
          $original: item.$original
        };
      });

      Object.assign(this.__state, {
        loopArray48: loopArray48
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }, {
    key: 'anonymousFunc1',
    value: function anonymousFunc1(_$indexKey2) {
      var _anonymousFunc1Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc1Map[_$indexKey2] && (_anonymousFunc1Map = this.anonymousFunc1Map)[_$indexKey2].apply(_anonymousFunc1Map, e);
    }
  }, {
    key: 'anonymousFunc2',
    value: function anonymousFunc2(_$indexKey3) {
      var _anonymousFunc2Map;

      ;

      for (var _len4 = arguments.length, e = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        e[_key4 - 1] = arguments[_key4];
      }

      return this.anonymousFunc2Map[_$indexKey3] && (_anonymousFunc2Map = this.anonymousFunc2Map)[_$indexKey3].apply(_anonymousFunc2Map, e);
    }
  }]);

  return OrderListsCustom;
}(_taroWeapp.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2"], _class.$$componentPath = "pages/mall/order-lists-custom", _temp2);
exports.default = OrderListsCustom;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(OrderListsCustom, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\tf-smallRoutine\\Taro-WeiApp\\src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mall/order-lists-custom.tsx?taro&type=template&parse=PAGE&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=D:/tf-smallRoutine/Taro-WeiApp/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/mall/order-lists-custom.tsx?taro&type=template&parse=PAGE& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/mall/order-lists-custom.wxml";

/***/ }),

/***/ "./src/pages/mall/order-lists-custom.tsx":
/*!***********************************************!*\
  !*** ./src/pages/mall/order-lists-custom.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order_lists_custom_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-lists-custom.tsx?taro&type=template&parse=PAGE& */ "./src/pages/mall/order-lists-custom.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _order_lists_custom_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-lists-custom.tsx?taro&type=script&parse=PAGE& */ "./src/pages/mall/order-lists-custom.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _order_lists_custom_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _order_lists_custom_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/mall/order-lists-custom.tsx?taro&type=script&parse=PAGE&":
/*!****************************************************************************!*\
  !*** ./src/pages/mall/order-lists-custom.tsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_lists_custom_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./order-lists-custom.tsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mall/order-lists-custom.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_lists_custom_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_lists_custom_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_lists_custom_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_lists_custom_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_lists_custom_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/mall/order-lists-custom.tsx?taro&type=template&parse=PAGE&":
/*!******************************************************************************!*\
  !*** ./src/pages/mall/order-lists-custom.tsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_D_tf_smallRoutine_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_lists_custom_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=D:/tf-smallRoutine/Taro-WeiApp/src!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./order-lists-custom.tsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\tf-smallRoutine\\Taro-WeiApp\\src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mall/order-lists-custom.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_D_tf_smallRoutine_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_lists_custom_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_D_tf_smallRoutine_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_lists_custom_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_D_tf_smallRoutine_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_lists_custom_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_D_tf_smallRoutine_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_lists_custom_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/mall/order-lists-custom.tsx","runtime","vendors","common"]]]);