(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/mall/order-lists-staff"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mall/order-lists-staff.tsx?taro&type=script&parse=PAGE&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/mall/order-lists-staff.tsx?taro&type=script&parse=PAGE& ***!
  \***************************************************************************************************************************************************************************************/
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

var _tslib = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _mallApis = __webpack_require__(/*! ./mall-apis */ "./src/pages/mall/mall-apis.ts");

var _mobx = __webpack_require__(/*! @tarojs/mobx */ "./node_modules/_@tarojs_mobx@2.0.6@@tarojs/mobx/index.js");

__webpack_require__(/*! ./order-lists.scss */ "./src/pages/mall/order-lists.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderListsStaff = (_temp2 = _class = function (_BaseComponent) {
  _inherits(OrderListsStaff, _BaseComponent);

  function OrderListsStaff() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OrderListsStaff);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderListsStaff.__proto__ || Object.getPrototypeOf(OrderListsStaff)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "loopArray60", "$compid__82", "$compid__83", "$compid__84", "$compid__85", "$compid__86", "$compid__87", "$compid__88", "current", "pageNo", "pageSize", "hasNextPage", "lists", "showAction", "id", "showPriceModal", "itemPrice", "currentItem", "countDownPay", "showCountDown", "appStore"], _this.config = {
      navigationBarTitleText: '预约订单',
      navigationStyle: 'default'
    }, _this.refreshPageData = function () {
      _this.setState({
        pageNo: 1,
        pageSize: 5,
        lists: [],
        hasNextPage: true,
        countDownPay: 120,
        showCountDown: false
      }, function () {
        _this.getLists();
      });
    }, _this.getGrag = function (id) {
      var params = {
        "orderId": id,
        "serviceUserId": _taroWeapp2.default.getStorageSync('masterInfo').masterId
      };
      (0, _mallApis.grabOrder)(params).then(function (res) {
        if (res.data.code === 0) {
          _taroWeapp2.default.showToast({ title: '抢单成功' }).then(function () {
            _this.setState({
              pageNo: 1,
              current: 0,
              lists: [],
              hasNextPage: true
            }, function () {
              _this.getLists();
            });
          });
        } else {
          _taroWeapp2.default.showToast({ title: '抢单失败：' + res.data.msg, icon: 'none' });
        }
      });
    }, _this.getLists = function () {
      var _this$state = _this.state,
          current = _this$state.current,
          pageNo = _this$state.pageNo,
          pageSize = _this$state.pageSize,
          hasNextPage = _this$state.hasNextPage;

      var masterInfo = _taroWeapp2.default.getStorageSync('masterInfo');
      var params = {};
      switch (current) {
        case 0:
          params = {
            "searchType": "VYING",
            "repairStationId": masterInfo.repairStationId
          };
          break;
        case 1:
          params = {
            "searchType": "STAY_SERVICE",
            "serviceUserId": masterInfo.masterId,
            "repairStationId": masterInfo.repairStationId
          };
          break;
        case 2:
          params = {
            "serviceUserId": masterInfo.masterId,
            "repairStationId": masterInfo.repairStationId,
            "searchType": "FINISH"
          };
      }
      var query = {
        pageNo: pageNo,
        pageSize: pageSize,
        userId: _taroWeapp2.default.getStorageSync('userId')
      };
      if (!hasNextPage) {
        _taroWeapp2.default.showToast({ title: '没有更多了', icon: 'none' });
        return;
      }
      _taroWeapp2.default.showNavigationBarLoading();
      _taroWeapp2.default.showLoading({ title: '加载中' });
      (0, _mallApis.customOrderLists)(query, params).then(function (res) {
        _taroWeapp2.default.hideLoading();
        _taroWeapp2.default.hideNavigationBarLoading();
        _taroWeapp2.default.stopPullDownRefresh();
        if (res.data.code === 0) {
          var data = res.data.data;
          _this.setState(function (prevState) {
            return {
              hasNextPage: data.hasNextPage,
              pageNo: data.hasNextPage ? data.nextPage : data.pageNo,
              lists: prevState.lists.concat(data.list)
            };
          });
        }
      });
    }, _this.handleClick = function (index) {
      _this.setState({
        current: index,
        pageNo: 1,
        hasNextPage: true,
        lists: []
      }, function () {
        _this.getLists();
      });
    }, _this.setPay = function (item) {
      _this.setState({
        id: item.id,
        showAction: true,
        controlOrder: item
      });
    }, _this.getPayResult = function () {
      var id = _this.state.controlOrder.id;
      (0, _mallApis.searchPayRes)(id).then(function (res) {
        if (res.data.code === 0) {
          _this.setState({
            payRes: res.data.data
          });
          if (res.data.data === 'Y') {
            _taroWeapp2.default.showToast({
              title: '收款成功'
            }).then(function () {
              return setTimeout(function () {
                var payTimer = _this.state.payTimer;

                clearInterval(payTimer);
                _this.refreshPageData();
              }, 1000);
            });
          }
        }
      });
    }, _this.waitPay = function (type) {
      _this.setState({
        showAction: false
      }, function () {
        if (type === 'user') {
          _this.setState({
            showCountDown: true,
            countDownPay: 120
          }, function () {
            var payTimer = setInterval(function () {
              var count = _this.state.countDownPay;
              // 间隔3秒轮询
              --count;
              if (count % 3 === 0) {
                _this.getPayResult();
              }
              if (count <= 0) {
                _this.setState({
                  payTimer: null,
                  showCountDown: false
                });
                clearInterval(_this.state.payTimer);
              } else {
                var setData = { countDownPay: count };
                if (!_this.state.payTimer) {
                  setData.payTimer = payTimer;
                }
                _this.setState(setData);
              }
            }, 1000);
          });
        } else if (type === 'qr-code') {
          _this.props.appStore.setBookItem(_this.state.controlOrder);
          _taroWeapp2.default.navigateTo({
            url: '/pages/staff-order/pay?type=book&id=' + _this.state.id
          });
        }
      });
    }, _this.handleItemPriceChange = function (val) {
      _this.setState({
        itemPrice: val
      });
    }, _this.togglePriceModal = function (item) {
      _this.setState(function (preState) {
        return {
          currentItem: item ? item : null,
          showPriceModal: !preState.showPriceModal,
          itemPrice: !preState.showPriceModal ? preState.itemPrice : 0
        };
      });
    }, _this.setPrice = function () {
      var params = {
        "orderId": _this.state.currentItem.id,
        "serviceUserId": _taroWeapp2.default.getStorageSync('masterInfo').masterId,
        "serviceAmount": _this.state.itemPrice //可为0
      };
      _taroWeapp2.default.showLoading({ title: '处理中' });
      (0, _mallApis.setPriceNow)(params).then(function (res) {
        _taroWeapp2.default.hideLoading();
        if (res.data.code === 0) {
          _taroWeapp2.default.showToast({ title: '设置成功' });
          _this.refreshPageData();
        } else {
          _taroWeapp2.default.showToast({ title: res.data.msg, icon: 'none' });
        }
      });
    }, _this.callPhone = function (tel) {
      _taroWeapp2.default.makePhoneCall({
        phoneNumber: tel
      });
    }, _this.anonymousFunc0Map = {}, _this.customComponents = ["AtTabs", "FootBtn", "AtActionSheet", "AtActionSheetItem", "AtModal", "AtModalHeader", "AtModalContent", "AtInput", "AtModalAction", "AtIcon"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OrderListsStaff, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(OrderListsStaff.prototype.__proto__ || Object.getPrototypeOf(OrderListsStaff.prototype), "_constructor", this).call(this, props);

      this.state = {
        current: 0,
        pageNo: 1,
        pageSize: 5,
        hasNextPage: true,
        lists: [],
        showAction: false,
        id: '',
        showPriceModal: false,
        itemPrice: 0,
        currentItem: null,
        countDownPay: 120,
        showCountDown: false
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      this.getLists();
    }
  }, {
    key: "onPullDownRefresh",
    value: function onPullDownRefresh() {
      this.refreshPageData();
    }
  }, {
    key: "onReachBottom",
    value: function onReachBottom() {
      this.getLists();
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__82"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__82 = _genCompid2[0],
          $compid__82 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__83"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__83 = _genCompid4[0],
          $compid__83 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__84"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__84 = _genCompid6[0],
          $compid__84 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__85"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__85 = _genCompid8[0],
          $compid__85 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__86"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__86 = _genCompid10[0],
          $compid__86 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__87"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__87 = _genCompid12[0],
          $compid__87 = _genCompid12[1];

      var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + "$compid__88"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__88 = _genCompid14[0],
          $compid__88 = _genCompid14[1];

      var anonymousState__temp = [{ title: '抢单' }, { title: '待服务' }, { title: '已完成' }];

      this.anonymousFunc1 = function () {
        return _this2.waitPay('user');
      };

      this.anonymousFunc2 = function () {
        return _this2.waitPay('qr-code');
      };

      var loopArray60 = this.__state.lists.length > 0 ? this.__state.lists.map(function (item, __index0) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey = "gezzz" + __index0;

        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return _this2.callPhone(item.$original.userPhone);
        };

        var _genCompid15 = (0, _taroWeapp.genCompid)(__prefix + "gfzzzzzzzz" + __index0, true),
            _genCompid16 = _slicedToArray(_genCompid15, 2),
            $prevCompid__81 = _genCompid16[0],
            $compid__81 = _genCompid16[1];

        _taroWeapp.propsManager.set({
          "current": _this2.__state.current,
          "item": item.$original,
          "setPrice": _this2.togglePriceModal,
          "setPay": _this2.setPay,
          "getGrag": _this2.getGrag
        }, $compid__81, $prevCompid__81);
        return {
          _$indexKey: _$indexKey,
          $compid__81: $compid__81,
          $original: item.$original
        };
      }) : [];
      _taroWeapp.propsManager.set({
        "className": "fix-header",
        "current": this.__state.current,
        "tabList": anonymousState__temp,
        "onClick": this.handleClick
      }, $compid__82, $prevCompid__82);
      _taroWeapp.propsManager.set({
        "isOpened": this.__state.showAction,
        "cancelText": "\u53D6\u6D88",
        "title": "\u8BF7\u9009\u62E9\u6536\u6B3E\u65B9\u5F0F"
      }, $compid__83, $prevCompid__83);
      _taroWeapp.propsManager.set({
        "onClick": this.anonymousFunc1
      }, $compid__84, $prevCompid__84);
      _taroWeapp.propsManager.set({
        "onClick": this.anonymousFunc2
      }, $compid__85, $prevCompid__85);
      _taroWeapp.propsManager.set({
        "className": "price-modal",
        "isOpened": this.__state.showPriceModal
      }, $compid__86, $prevCompid__86);
      _taroWeapp.propsManager.set({
        "className": "price-input",
        "title": "\u670D\u52A1\u8D39\uFF1A",
        "name": "itemPrice",
        "border": false,
        "type": "number",
        "placeholder": "\u8BF7\u586B\u5199\u670D\u52A1\u4EBA\u5DE5\u8D39",
        "value": this.__state.itemPrice,
        "onChange": this.handleItemPriceChange
      }, $compid__87, $prevCompid__87);
      this.__state.showCountDown && _taroWeapp.propsManager.set({
        "value": "loading-3",
        "size": "30",
        "color": "#02BB00"
      }, $compid__88, $prevCompid__88);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray60: loopArray60,
        $compid__82: $compid__82,
        $compid__83: $compid__83,
        $compid__84: $compid__84,
        $compid__85: $compid__85,
        $compid__86: $compid__86,
        $compid__87: $compid__87,
        $compid__88: $compid__88
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(e) {
      ;
    }
  }]);

  return OrderListsStaff;
}(_taroWeapp.Component), _class.$$events = ["anonymousFunc0", "togglePriceModal", "setPrice"], _class.$$componentPath = "pages/mall/order-lists-staff", _temp2);
OrderListsStaff = (0, _tslib.__decorate)([(0, _mobx.inject)('appStore'), _mobx.observer], OrderListsStaff);
exports.default = OrderListsStaff;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(OrderListsStaff, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=E:\\myGitHub\\Taro-WeiApp\\src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mall/order-lists-staff.tsx?taro&type=template&parse=PAGE&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=E:/myGitHub/Taro-WeiApp/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/mall/order-lists-staff.tsx?taro&type=template&parse=PAGE& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/mall/order-lists-staff.wxml";

/***/ }),

/***/ "./src/pages/mall/order-lists-staff.tsx":
/*!**********************************************!*\
  !*** ./src/pages/mall/order-lists-staff.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order_lists_staff_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-lists-staff.tsx?taro&type=template&parse=PAGE& */ "./src/pages/mall/order-lists-staff.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _order_lists_staff_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-lists-staff.tsx?taro&type=script&parse=PAGE& */ "./src/pages/mall/order-lists-staff.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _order_lists_staff_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _order_lists_staff_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/mall/order-lists-staff.tsx?taro&type=script&parse=PAGE&":
/*!***************************************************************************!*\
  !*** ./src/pages/mall/order-lists-staff.tsx?taro&type=script&parse=PAGE& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_lists_staff_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./order-lists-staff.tsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mall/order-lists-staff.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_lists_staff_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_lists_staff_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_lists_staff_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_lists_staff_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_lists_staff_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/mall/order-lists-staff.tsx?taro&type=template&parse=PAGE&":
/*!*****************************************************************************!*\
  !*** ./src/pages/mall/order-lists-staff.tsx?taro&type=template&parse=PAGE& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_lists_staff_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=E:/myGitHub/Taro-WeiApp/src!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./order-lists-staff.tsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=E:\\myGitHub\\Taro-WeiApp\\src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mall/order-lists-staff.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_lists_staff_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_lists_staff_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_lists_staff_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_order_lists_staff_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/mall/order-lists-staff.tsx","runtime","vendors","common"]]]);