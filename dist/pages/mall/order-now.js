(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/mall/order-now"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mall/order-now.tsx?taro&type=script&parse=PAGE&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/mall/order-now.tsx?taro&type=script&parse=PAGE& ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _tslib = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.13.0@tslib/tslib.es6.js");

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _mobx = __webpack_require__(/*! @tarojs/mobx */ "./node_modules/_@tarojs_mobx@2.0.6@@tarojs/mobx/index.js");

var _mallApis = __webpack_require__(/*! ./mall-apis */ "./src/pages/mall/mall-apis.ts");

__webpack_require__(/*! ./order-now.scss */ "./src/pages/mall/order-now.scss");

var _service = __webpack_require__(/*! ../address/service */ "./src/pages/address/service.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoodsDetail = /** @class */function () {
  var _class, _temp2;

  var GoodsDetail = (_temp2 = _class = function (_BaseComponent) {
    _inherits(GoodsDetail, _BaseComponent);

    function GoodsDetail() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, GoodsDetail);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GoodsDetail.__proto__ || Object.getPrototypeOf(GoodsDetail)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["installDate", "installTime", "address", "productId", "detail", "addressObj", "today", "nowTime", "appStore"], _this.config = {
        navigationBarTitleText: '预约提交',
        navigationStyle: 'default'
      }, _this.handleInputChange = function (e, propName) {
        var value = e.detail.value;
        _this.setState(function (prevState) {
          var addressObj = prevState.addressObj;
          addressObj[propName] = value;
          return { addressObj: addressObj };
        });
      }, _this.getDetail = function (id) {
        (0, _mallApis.getSubscribeDetail)(id).then(function (res) {
          if (res.data.code === 0) {
            _this.setState({
              detail: res.data.data
            });
          }
        });
      }, _this.onDateChange = function (e) {
        var value = e.detail.value;
        _this.setState({
          installDate: value
        });
      }, _this.onTimeChange = function (e) {
        var value = e.detail.value;
        _this.setState({
          installTime: value
        });
      }, _this.getDefault = function () {
        (0, _service.getDefaultAdd)().then(function (res) {
          if (res.data.code === 0) {
            var data = res.data.data;
            if (data) {
              _this.setState(function () {
                return {
                  address: data.areaInfo + data.address,
                  addressObj: {
                    id: data.id,
                    userName: data.userName,
                    userMobile: data.userMobile
                  }
                };
              }, function () {
                _this.props.appStore.setOrderForm({
                  address: data.areaInfo + data.address,
                  addressObj: data
                });
                _this.getOrderContentWithAdd();
              });
            } else {
              _this.getOrderContentNone();
            }
          } else {
            console.log('默认地址获取失败：' + res.data.msg);
          }
        });
      }, _this.submitBook = function () {
        var _this$state = _this.state,
            installDate = _this$state.installDate,
            installTime = _this$state.installTime,
            productId = _this$state.productId;

        if (installDate.length <= 0 || installTime.length <= 0) {
          _taroWeapp2.default.showToast({
            title: '请选择上门日期和时间',
            icon: 'none'
          });
          return;
        }
        var params = {
          "repairAddressId": _this.state.addressObj.id,
          "productId": productId,
          "userPhone": _this.state.addressObj.userMobile,
          "username": _this.state.addressObj.userName,
          "hopeDoorTime": installDate + " " + installTime + ":00"
        };
        _taroWeapp2.default.showLoading({ title: '提交中' });
        (0, _mallApis.submitOrder)(params).then(function (res) {
          _taroWeapp2.default.hideLoading();
          if (res.data.code === 0) {
            var orderId = res.data.data;
            _taroWeapp2.default.showModal({
              title: '温馨提示',
              content: '您的预约订单已提交，可在【我的】-【预约订单】中查看',
              confirmText: '查看订单',
              cancelText: '回到首页'
            }).then(function (res) {
              if (res.confirm) {
                _taroWeapp2.default.redirectTo({
                  url: '/pages/mall/order-lists-custom'
                });
              } else {
                _taroWeapp2.default.reLaunch({
                  url: '/pages/index/index'
                });
              }
            });
          } else {
            _taroWeapp2.default.showToast({
              title: res.data.msg,
              icon: 'none'
            });
          }
        });
      }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(GoodsDetail, [{
      key: "_constructor",
      value: function _constructor(props) {
        _get(GoodsDetail.prototype.__proto__ || Object.getPrototypeOf(GoodsDetail.prototype), "_constructor", this).call(this, props);

        this.state = {
          installDate: '',
          installTime: '',
          address: '',
          productId: '',
          detail: {},
          addressObj: { id: '', userMobile: '', userName: '' },
          today: '',
          nowTime: ''
        };
        this.$$refs = new _taroWeapp2.default.RefsArray();
      }
    }, {
      key: "componentWillMount",
      value: function componentWillMount() {
        this.getDefault();
      }
    }, {
      key: "componentDidShow",
      value: function componentDidShow() {
        var id = this.$router.params.id;
        this.getDetail(id);
        var orderForm = this.props.appStore.orderForm;
        var currentTime = new Date();
        var today = currentTime.getFullYear() + "-" + (currentTime.getMonth() + 1) + "-" + currentTime.getDate();
        var nowTime = currentTime.getHours() + ":" + currentTime.getMinutes();
        this.setState({
          address: orderForm.address,
          addressObj: orderForm.addressObj,
          productId: id,
          today: today,
          nowTime: nowTime
        });
      }
    }, {
      key: "_createData",
      value: function _createData() {
        var _this2 = this;

        this.__state = arguments[0] || this.state || {};
        this.__props = arguments[1] || this.props || {};
        var __isRunloopRef = arguments[2];
        var __prefix = this.$prefix;
        ;

        this.anonymousFunc0 = function (e) {
          return _this2.handleInputChange(e, 'userName');
        };

        this.anonymousFunc1 = function (e) {
          return _this2.handleInputChange(e, 'userMobile');
        };

        Object.assign(this.__state, {});
        return this.__state;
      }
    }, {
      key: "anonymousFunc0",
      value: function anonymousFunc0(e) {
        ;
      }
    }, {
      key: "anonymousFunc1",
      value: function anonymousFunc1(e) {
        ;
      }
    }]);

    return GoodsDetail;
  }(_taroWeapp.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1", "onDateChange", "onTimeChange", "submitBook"], _class.$$componentPath = "pages/mall/order-now", _temp2);
  GoodsDetail = (0, _tslib.__decorate)([(0, _mobx.inject)('appStore'), _mobx.observer], GoodsDetail);
  return GoodsDetail;
}();
exports.default = GoodsDetail;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(GoodsDetail, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\tf-smallRoutine\\Taro-WeiApp\\src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mall/order-now.tsx?taro&type=template&parse=PAGE&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=D:/tf-smallRoutine/Taro-WeiApp/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/mall/order-now.tsx?taro&type=template&parse=PAGE& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/mall/order-now.wxml";

/***/ }),

/***/ "./src/pages/mall/order-now.scss":
/*!***************************************!*\
  !*** ./src/pages/mall/order-now.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/mall/order-now.tsx":
/*!**************************************!*\
  !*** ./src/pages/mall/order-now.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order_now_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-now.tsx?taro&type=template&parse=PAGE& */ "./src/pages/mall/order-now.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _order_now_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-now.tsx?taro&type=script&parse=PAGE& */ "./src/pages/mall/order-now.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _order_now_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _order_now_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/mall/order-now.tsx?taro&type=script&parse=PAGE&":
/*!*******************************************************************!*\
  !*** ./src/pages/mall/order-now.tsx?taro&type=script&parse=PAGE& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_now_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./order-now.tsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mall/order-now.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_now_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_now_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_now_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_now_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_now_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/mall/order-now.tsx?taro&type=template&parse=PAGE&":
/*!*********************************************************************!*\
  !*** ./src/pages/mall/order-now.tsx?taro&type=template&parse=PAGE& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_D_tf_smallRoutine_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_now_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=D:/tf-smallRoutine/Taro-WeiApp/src!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./order-now.tsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\tf-smallRoutine\\Taro-WeiApp\\src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mall/order-now.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_D_tf_smallRoutine_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_now_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_D_tf_smallRoutine_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_now_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_D_tf_smallRoutine_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_now_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_D_tf_smallRoutine_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_now_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/mall/order-now.tsx","runtime","vendors","common"]]]);