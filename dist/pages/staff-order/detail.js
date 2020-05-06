(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/staff-order/detail"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/staff-order/detail.tsx?taro&type=script&parse=PAGE&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/staff-order/detail.tsx?taro&type=script&parse=PAGE& ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _staffApis = __webpack_require__(/*! ./staff-apis */ "./src/pages/staff-order/staff-apis.ts");

__webpack_require__(/*! ./order.scss */ "./src/pages/staff-order/order.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lists = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Lists, _BaseComponent);

  function Lists() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Lists);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Lists.__proto__ || Object.getPrototypeOf(Lists)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp2", "$compid__86", "$compid__87", "$compid__88", "$compid__89", "stateText", "anonymousState__temp", "id", "cancelReasonId", "orderDetail", "reasonModal", "baseInfo", "repairOrderOfferPlanVoList", "dispatchInfo", "repairOrderAmountVos", "totalAmount", "showAction", "repairOrderDispatchId", "timer", "countDown", "waitPayToast", "commentInfo"], _this.config = {
      navigationBarTitleText: '报修详情',
      navigationStyle: 'default'
    }, _this.getPayResult = function () {
      (0, _staffApis.payResCustom)(_this.state.repairOrderDispatchId).then(function (res) {
        if (res.data.code === 0) {
          _this.setState({
            payRes: res.data.data
          });
          if (res.data.data === 'Y') {
            _taroWeapp2.default.showToast({
              title: '收款成功'
            }).then(function () {
              return setTimeout(function () {
                var timer = _this.state.timer;

                clearInterval(timer);
                _this.loadPage();
              }, 1000);
            });
          }
        }
      });
    }, _this.appealOrder = function () {
      var _this$state = _this.state,
          id = _this$state.id,
          baseInfo = _this$state.baseInfo;

      var query = "id=" + id + "&orderSn=" + baseInfo.orderSn + "&orderState=" + baseInfo.orderStateName + "&repaireType=" + baseInfo.repairCategoryName;
      _taroWeapp2.default.navigateTo({ url: '/pages/staff-order/refuse?' + query });
    }, _this.getOrderDetail = function () {
      var id = _this.state.id;
      (0, _staffApis.orderDetail)(id).then(function (res) {
        if (res.data.code === 0) {
          var data = res.data.data;
          var totalAmount = 0;
          data.repairOrderAmountVos.map(function (item) {
            if (item.type = "ALL_AMOUNT") {
              totalAmount = item.amount;
            }
          });
          _this.setState({
            orderDetail: res.data.data,
            baseInfo: data.baseInfo,
            repairOrderDispatchId: data.baseInfo.repairOrderDispatchId,
            repairOrderOfferPlanVoList: data.repairOrderOfferPlanVoList,
            dispatchInfo: data.dispatchInfo,
            repairOrderAmountVos: data.repairOrderAmountVos,
            totalAmount: totalAmount,
            commentInfo: data.commentInfo
          });
        }
      });
    }, _this.waitPay = function (type) {
      _this.setState({
        showAction: false
      }, function () {
        if (type === 'user') {
          var timer = setInterval(function () {
            if (!_this.state.timer) {
              _this.setState({
                timer: timer,
                waitPayToast: true
              });
            }
            if (_this.state.countDown <= 0) {
              clearInterval(_this.state.timer);
              _taroWeapp2.default.hideLoading();
              _this.setState({
                countDown: 120,
                waitPayToast: false,
                timer: null
              });
            } else {
              _this.setState(function (prevState) {
                countDown: prevState.countDown--;
              });
            }
            // 间隔3秒轮询
            if (_this.state.countDown % 3 === 0) {
              _this.getPayResult();
            }
          }, 1000);
        } else if (type === 'qr-code') {
          _taroWeapp2.default.navigateTo({
            url: '/pages/staff-order/pay?type=staff&id=' + _this.state.id
          });
        }
      });
    }, _this.sureOrder = function () {
      _this.setState({
        showAction: true
      });
    }, _this.resetPrice = function () {
      var queryStr = "id=" + _this.state.id + "&dispatchId=" + _this.state.repairOrderDispatchId;
      _taroWeapp2.default.navigateTo({ url: "/pages/staff-order/quote?" + queryStr });
    }, _this.call = function (phone) {
      _taroWeapp2.default.makePhoneCall({
        phoneNumber: phone
      });
    }, _this.customComponents = ["AtActionSheet", "AtActionSheetItem", "AtToast"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Lists, [{
    key: '_constructor',
    value: function _constructor() {
      _get(Lists.prototype.__proto__ || Object.getPrototypeOf(Lists.prototype), '_constructor', this).call(this);

      this.state = {
        id: '',
        cancelReasonId: '',
        orderDetail: {},
        reasonModal: false,
        baseInfo: { orderState: 'ASSIGNED' },
        repairOrderOfferPlanVoList: [],
        dispatchInfo: null,
        repairOrderAmountVos: [],
        totalAmount: 0,
        showAction: false,
        repairOrderDispatchId: '',
        timer: null,
        countDown: 120,
        waitPayToast: false,
        commentInfo: null
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentDidShow',
    value: function componentDidShow() {
      this.loadPage();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.state.timer);
    }
  }, {
    key: 'loadPage',
    value: function loadPage() {
      var _this2 = this;

      var id = this.$router.params.id;
      this.setState({
        id: id,
        counteDown: 120,
        waitPayToast: false,
        timer: null
      }, function () {
        _this2.getOrderDetail();
      });
    }
  }, {
    key: '_createFootData',
    value: function _createFootData(_$uid) {
      var _this3 = this;

      return function () {
        var _state = _this3.state,
            baseInfo = _state.baseInfo,
            repairOrderAmountVos = _state.repairOrderAmountVos;

        var total = 0;
        repairOrderAmountVos.forEach(function (item) {
          if (item.type === 'ALL_AMOUNT') {
            total = item.amount;
          }
        });

        if (baseInfo.orderStateName === '待上门') {} else if (baseInfo.orderStateName === '待付款') {} else if (baseInfo.orderStateName === '异常') {}

        return {
          baseInfo: baseInfo,
          total: total
        };
      };
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__86"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__86 = _genCompid2[0],
          $compid__86 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__87"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__87 = _genCompid4[0],
          $compid__87 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__88"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__88 = _genCompid6[0],
          $compid__88 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__89"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__89 = _genCompid8[0],
          $compid__89 = _genCompid8[1];

      var stateText = this.__state.baseInfo.orderStateName;

      var anonymousState__temp = this._createFootData(__prefix + "hczzzzzzzz")();

      this.anonymousFunc0 = function () {
        return _this4.call(_this4.__state.dispatchInfo.masterPhone);
      };

      this.anonymousFunc1 = function () {
        return _this4.call(_this4.__state.baseInfo.userPhone);
      };

      this.anonymousFunc2 = function () {
        return _this4.waitPay('user');
      };

      this.anonymousFunc3 = function () {
        return _this4.waitPay('qr-code');
      };

      var anonymousState__temp2 = '\u7B49\u5F85\u652F\u4ED8\u4E2D,\u5269\u4F59' + this.__state.countDown + "S";
      _taroWeapp.propsManager.set({
        "isOpened": this.__state.showAction,
        "cancelText": '\u53D6\u6D88',
        "title": '\u8BF7\u9009\u62E9\u6536\u6B3E\u65B9\u5F0F'
      }, $compid__86, $prevCompid__86);
      _taroWeapp.propsManager.set({
        "onClick": this.anonymousFunc2
      }, $compid__87, $prevCompid__87);
      _taroWeapp.propsManager.set({
        "onClick": this.anonymousFunc3
      }, $compid__88, $prevCompid__88);
      _taroWeapp.propsManager.set({
        "status": "loading",
        "duration": 0,
        "isOpened": this.__state.waitPayToast,
        "text": anonymousState__temp2,
        "icon": "loading-3"
      }, $compid__89, $prevCompid__89);
      Object.assign(this.__state, {
        anonymousState__temp2: anonymousState__temp2,
        $compid__86: $compid__86,
        $compid__87: $compid__87,
        $compid__88: $compid__88,
        $compid__89: $compid__89,
        stateText: stateText,
        anonymousState__temp: anonymousState__temp
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: 'anonymousFunc1',
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: 'anonymousFunc2',
    value: function anonymousFunc2(e) {
      ;
    }
  }, {
    key: 'anonymousFunc3',
    value: function anonymousFunc3(e) {
      ;
    }
  }]);

  return Lists;
}(_taroWeapp.Component), _class.$$events = ["appealOrder", "resetPrice", "sureOrder", "anonymousFunc0", "anonymousFunc1"], _class.$$componentPath = "pages/staff-order/detail", _temp2);
exports.default = Lists;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(Lists, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=E:\\myGitHub\\Taro-WeiApp\\src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/staff-order/detail.tsx?taro&type=template&parse=PAGE&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=E:/myGitHub/Taro-WeiApp/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/staff-order/detail.tsx?taro&type=template&parse=PAGE& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/staff-order/detail.wxml";

/***/ }),

/***/ "./src/pages/staff-order/detail.tsx":
/*!******************************************!*\
  !*** ./src/pages/staff-order/detail.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.tsx?taro&type=template&parse=PAGE& */ "./src/pages/staff-order/detail.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _detail_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.tsx?taro&type=script&parse=PAGE& */ "./src/pages/staff-order/detail.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _detail_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _detail_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/staff-order/detail.tsx?taro&type=script&parse=PAGE&":
/*!***********************************************************************!*\
  !*** ./src/pages/staff-order/detail.tsx?taro&type=script&parse=PAGE& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detail_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./detail.tsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/staff-order/detail.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detail_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detail_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detail_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detail_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detail_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/staff-order/detail.tsx?taro&type=template&parse=PAGE&":
/*!*************************************************************************!*\
  !*** ./src/pages/staff-order/detail.tsx?taro&type=template&parse=PAGE& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detail_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=E:/myGitHub/Taro-WeiApp/src!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./detail.tsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=E:\\myGitHub\\Taro-WeiApp\\src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/staff-order/detail.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detail_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detail_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detail_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detail_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/staff-order/detail.tsx","runtime","vendors","common"]]]);