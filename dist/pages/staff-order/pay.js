(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/staff-order/pay"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/staff-order/pay.tsx?taro&type=script&parse=PAGE&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/staff-order/pay.tsx?taro&type=script&parse=PAGE& ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _tslib = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _staffApis = __webpack_require__(/*! ./staff-apis */ "./src/pages/staff-order/staff-apis.ts");

var _mobx = __webpack_require__(/*! @tarojs/mobx */ "./node_modules/_@tarojs_mobx@2.0.6@@tarojs/mobx/index.js");

__webpack_require__(/*! ./pay.scss */ "./src/pages/staff-order/pay.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Quote = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Quote, _BaseComponent);

  function Quote() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Quote);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Quote.__proto__ || Object.getPrototypeOf(Quote)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "staffPrice", "id", "qrContent", "payInfo", "totalAmount", "detailLists", "paySn", "payRes", "timer", "timeOutTimer", "type", "bookOrderDetail", "appStore"], _this.config = {
      navigationBarTitleText: '收款',
      navigationStyle: 'default'
    }, _this.getBookInfo = function () {
      var bookOrderDetail = _this.props.appStore.bookOrderDetail;

      _this.setState({
        bookOrderDetail: bookOrderDetail
      });
    }, _this.getPayInfo = function (id) {
      var params = {
        orderIds: [id],
        payBusinessType: _this.state.type === 'staff' ? 'W_REPAIR_ORDER' : 'BOOKING_ORDER',
        payCode: 'WX_QR'
      };
      (0, _staffApis.QrPay)(params).then(function (res) {
        if (res.data.code === 0) {
          var data = res.data.data;
          _this.setState({
            qrContent: data.qrContent,
            paySn: data.paySn
          }, function () {
            // 轮询
            var timer = setInterval(function () {
              if (_this.state.payRes === 'Y') {
                clearInterval(timer);
              }
              _this.getPayResult();
            }, 3000);
            // 3分钟未支付清除
            var timeOutTimer = setTimeout(function () {
              clearTimeout(timeOutTimer);
              clearInterval(timer);
            }, 180000);
            _this.setState({
              timer: timer,
              timeOutTimer: timeOutTimer
            });
          });
        } else {
          _taroWeapp2.default.showToast({
            title: res.data.msg,
            icon: 'none'
          });
        }
      });
    }, _this.getPayDetail = function (id) {
      (0, _staffApis.orderDetail)(id).then(function (res) {
        if (res.data.code === 0) {
          var data = res.data.data;
          var totalAmount = 0;
          data.repairOrderAmountVos.forEach(function (item) {
            if (item.type === 'ALL_AMOUNT') {
              totalAmount = item.amount;
            }
          });
          _this.setState({
            totalAmount: totalAmount,
            payInfo: data.repairOrderAmountVos,
            detailLists: data.repairOrderOfferPlanVoList
          });
        } else {
          _taroWeapp2.default.showToast({ title: res.data.msg, icon: 'none' });
        }
      });
    }, _this.getPayResult = function () {
      (0, _staffApis.payRes)(_this.state.paySn).then(function (res) {
        if (res.data.code === 0) {
          _this.setState({
            payRes: res.data.data
          });
          if (res.data.data === 'Y') {
            _taroWeapp2.default.showToast({
              title: '用户支付成功'
            }).then(function () {
              return setTimeout(function () {
                var _this$state = _this.state,
                    id = _this$state.id,
                    type = _this$state.type;

                if (type === 'staff') {
                  _taroWeapp2.default.navigateTo({ url: '/pages/staff-order/detail?id=' + id });
                } else {
                  _taroWeapp2.default.navigateTo({ url: '/pages/mall/order-lists-staff' });
                }
              }, 1000);
            });
          }
        }
      });
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Quote, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Quote.prototype.__proto__ || Object.getPrototypeOf(Quote.prototype), "_constructor", this).call(this, props);

      this.state = {
        staffPrice: 0,
        id: '',
        qrContent: '',
        payInfo: [],
        totalAmount: 0,
        detailLists: [],
        paySn: '',
        payRes: 'N',
        timer: '',
        timeOutTimer: '',
        type: '',
        bookOrderDetail: null
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.state.timeOutTimer);
      clearInterval(this.state.timer);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      var _$router$params = this.$router.params,
          id = _$router$params.id,
          type = _$router$params.type;

      this.setState({
        id: id,
        type: type
      }, function () {
        if (type === 'staff') {
          _this2.getPayInfo(id);
          _this2.getPayDetail(id);
        } else {
          _this2.getPayInfo(id);
          _this2.getBookInfo();
        }
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var anonymousState__temp = __webpack_require__(/*! ../../assets/imgs/tmp/weixin-pay.png */ "./src/assets/imgs/tmp/weixin-pay.png");

      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp
      });
      return this.__state;
    }
  }]);

  return Quote;
}(_taroWeapp.Component), _class.$$events = [], _class.$$componentPath = "pages/staff-order/pay", _temp2);
Quote = (0, _tslib.__decorate)([(0, _mobx.inject)('appStore'), _mobx.observer], Quote);
exports.default = Quote;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(Quote, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=E:\\myGitHub\\Taro-WeiApp\\src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/staff-order/pay.tsx?taro&type=template&parse=PAGE&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=E:/myGitHub/Taro-WeiApp/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/staff-order/pay.tsx?taro&type=template&parse=PAGE& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/staff-order/pay.wxml";

/***/ }),

/***/ "./src/assets/imgs/tmp/weixin-pay.png":
/*!********************************************!*\
  !*** ./src/assets/imgs/tmp/weixin-pay.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAD6klEQVRoQ+2Za+hlUxjGf88X4YP7yGX4pBAxUmQSplxjFDVlpCEjhpJohuGL0aTk8kVMjEiZyRQycomQ+UJjMmpEZvJlzLiUW0rk2qO39v+055y9z1rr/PfpGJ23dvv03+963udZl3e9a/3FXm7ay/kzFTDpEZyOwP9mBGzPBc4FTgYOqj1/Ad8C39TemyX90IX4WU0h22cDVwLzgTMLCb0FvAS8LWlnYdue+0gCbF8NxHPpqIH72r0CPCTp/VK8IgG2TwceAM4vDZTp/2AlJHt6ZQuwfWNF/uBMMqO67QBWS1qfA5AlwPa9wKocwA59Vkm6L4WXFDAh8jO810q6aZiIoQImTP4X4OV4JG1sE9EqwPZlwKupIRzD9+0V8Y2StqTwGwXYPjLyM3BSCqDD7+/WiH89g2v7CuBu4GJJP/XHaxPwKHBrh+TaoP4BItsMTBPb84B7gEVV4+WSHskV8AVw3BgF7KqID0wT24cAdwF39sX/HJgn6c/63wdGwHaUBJsT5KOuOWoEgYG7DgjivWlSmy7Lql4/pgV7maQnUwKSOV+SbN8A3A8cniEkap51bdnE9iXASuCcBNYTkm5OCXgeuCoBtETSc7aj8gwRlzf4/1hNk/Vt2cR2JIkVwLUZnRAub0oKsT1rmkIfA6clAHdIOqE29LHYQkjYJzXiA9MkHGwfANxeTZd9MsmH23ZJJ6YE/ArsnwG6SNKLNRGHxVlA0qZhbW1fXy3Q4zNi9Lv8Lmm/lICvgKMzwLdJilSXZbajgl0OXJTVoNlpt6RjUwLeA87LDLJQ0muJHo+evgOIana2FoefC1MCngIiw+RYHA3PanK0HUMdxGORHpgDluHzmKQ9NtimRXwL8HgG2IzLBZLeqfvbXlKRP7UAJ8d1saQNqRGYA3yXg1b5bJK0IH7bjqkXvb6woH2u62/AHEnx7llbLRRn1Kbc3hbshQAvWDu5pOt+GyQt7m/YJiA2lmdHiTLGNguaUvSw88AaYI9te4zkUtCtx8vUiSx20lGKthShku+9NdbUKCUgNo0vS6J17BsnsmskRXnfaDmH+qiLPgD27ZhcCu4N4DpJ3w9zTAqo0uMRQGSmM1JRO/oe6+82SX+n8LIEzIDY/giI27lxWfT2SknP5AYoFRA7dOzU47C1wBpJ20rASwXsBuIavUsL4nGBtXUU0GwBtk8B+nvnaSCuyWPo438DUUq0VbI/A3GN/hnwYfX+VFJJ2TKgsURAVKhRqYbFoeVhSa839Vp1sxC3C4cCfwRxSSGgcysREIf9pRXxuDf6T1i2gGAbPdt0OzZJJUUCJkm0LfZUwKRHZToC0xGYZQ/8C9MWOkBDBT4nAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/pages/staff-order/pay.scss":
/*!****************************************!*\
  !*** ./src/pages/staff-order/pay.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/staff-order/pay.tsx":
/*!***************************************!*\
  !*** ./src/pages/staff-order/pay.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pay_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pay.tsx?taro&type=template&parse=PAGE& */ "./src/pages/staff-order/pay.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _pay_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pay.tsx?taro&type=script&parse=PAGE& */ "./src/pages/staff-order/pay.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _pay_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _pay_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/staff-order/pay.tsx?taro&type=script&parse=PAGE&":
/*!********************************************************************!*\
  !*** ./src/pages/staff-order/pay.tsx?taro&type=script&parse=PAGE& ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_pay_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./pay.tsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/staff-order/pay.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_pay_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_pay_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_pay_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_pay_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_pay_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/staff-order/pay.tsx?taro&type=template&parse=PAGE&":
/*!**********************************************************************!*\
  !*** ./src/pages/staff-order/pay.tsx?taro&type=template&parse=PAGE& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_pay_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=E:/myGitHub/Taro-WeiApp/src!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./pay.tsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=E:\\myGitHub\\Taro-WeiApp\\src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/staff-order/pay.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_pay_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_pay_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_pay_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_pay_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/staff-order/pay.tsx","runtime","vendors","common"]]]);