(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/admin/admin"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/admin/admin.tsx?taro&type=script&parse=PAGE&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/admin/admin.tsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************************************************************************************************************************/
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

var _adminApis = __webpack_require__(/*! ./admin-apis */ "./src/pages/admin/admin-apis.ts");

__webpack_require__(/*! ./admin.scss */ "./src/pages/admin/admin.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Admin = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Admin, _BaseComponent);

  function Admin() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Admin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Admin.__proto__ || Object.getPrototypeOf(Admin)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray61", "$compid__94", "$compid__95", "currentTab", "orderLists", "cancelReasonLists", "pageNo", "pageSize", "hasNextPage", "reasonModal", "cancelReasonId", "showRefresh", "nowItem"], _this.config = {
      navigationBarTitleText: '工单处理',
      navigationStyle: 'default',
      enablePullDownRefresh: true
    }, _this.reloadData = function () {
      _this.setState({
        pageNo: 1,
        pageSize: 5,
        hasNextPage: true,
        orderLists: [],
        reasonModal: false,
        nowItem: {}
      }, function () {
        _this.getLists();
        _this.getCancelLists();
      });
    }, _this.getCancelLists = function () {
      (0, _adminApis.cancelLists)().then(function (res) {
        _this.setState({
          cancelReasonLists: res.data.data
        });
      });
    }, _this.dispatchOrder = function (e) {
      var id = e.target.dataset.id;
      var controlObj = null;
      _this.state.orderLists.forEach(function (item) {
        if (item.orderId === id) {
          controlObj = item;
        }
      });
      _taroWeapp2.default.navigateTo({
        url: "/pages/admin/staffs?orderId=" + controlObj.orderId + "&stationName=" + controlObj.stationName + "&type=" + controlObj.type
      });
    }, _this.conflict = function (e) {
      var id = e.target.dataset.id;
      var controlObj = null;
      _this.state.orderLists.forEach(function (item) {
        if (item.orderId === id) {
          controlObj = item;
        }
      });
      _taroWeapp2.default.showModal({
        title: '确认要驳回订单吗？',
        success: function success(res) {
          if (res.confirm) {
            var masterInfo = _taroWeapp2.default.getStorageSync('masterInfo');
            var params = {
              appealId: controlObj.appealId,
              userId: masterInfo.masterId,
              username: masterInfo.masterName,
              departmentName: controlObj.stationName
            };
            (0, _adminApis.conflictAppeal)(params).then(function (res) {
              if (res.data.code === 0) {
                _taroWeapp2.default.showToast({ title: '驳回成功', icon: 'none' }).then(function () {
                  return setTimeout(function () {
                    _this.setState({
                      pageNo: 1,
                      pageSize: 5,
                      hasNextPage: true,
                      orderLists: []
                    }, function () {
                      _this.getLists();
                    });
                  });
                });
              } else {
                _taroWeapp2.default.showToast({ title: '驳回失败' + res.data.msg, icon: 'none' });
              }
            });
          }
        }
      });
    }, _this.closeOrder = function (e) {
      var controlObj = null;
      var id = e.target.dataset.id;
      _this.state.orderLists.forEach(function (item) {
        if (item.orderId === id) {
          controlObj = item;
        }
      });
      _taroWeapp2.default.showModal({
        title: '确认要关闭工单吗？',
        success: function success(res) {
          if (res.confirm) {
            var masterInfo = _taroWeapp2.default.getStorageSync('masterInfo');
            var params = {
              "appealId": controlObj.appealId,
              "userId": masterInfo.masterId,
              "username": masterInfo.masterName,
              "departmentName": controlObj.stationName
            };
            (0, _adminApis.closeAppeal)(params).then(function (res) {
              if (res.data.code === 0) {
                _taroWeapp2.default.showToast({ title: '操作成功', icon: 'none' }).then(function () {
                  return setTimeout(function () {
                    _this.reloadData();
                  }, 1000);
                });
              } else {
                _taroWeapp2.default.showToast({ title: '操作失败', icon: 'none' });
              }
            });
          }
        }
      });
    }, _this.getLists = function () {
      _taroWeapp2.default.showLoading({ title: '加载中' });
      var _this$state = _this.state,
          pageNo = _this$state.pageNo,
          pageSize = _this$state.pageSize,
          hasNextPage = _this$state.hasNextPage;

      if (!hasNextPage) {
        _taroWeapp2.default.showToast({ title: '没有更多了', icon: 'none' });
        return;
      }
      var params = {
        pageNo: pageNo,
        pageSize: pageSize,
        stationId: _taroWeapp2.default.getStorageSync('masterInfo').repairStationId
      };
      (0, _adminApis.lists)(params).then(function (res) {
        _taroWeapp2.default.hideNavigationBarLoading();
        _taroWeapp2.default.hideLoading();
        _taroWeapp2.default.stopPullDownRefresh();
        if (res.data.code === 0) {
          var data = res.data.data;
          _this.setState(function (prevState) {
            return {
              hasNextPage: data.hasNextPage,
              pageNo: data.hasNextPage ? data.nextPage : data.pageNo,
              orderLists: prevState.orderLists.concat(data.list)
            };
          });
        }
      });
    }, _this.handleRadioChange = function (value) {
      _this.setState({
        cancelReasonId: value
      });
    }, _this.handleCancelModal = function (e) {
      var id = e.target.dataset.id;
      var controlObj = null;
      _this.state.orderLists.forEach(function (item) {
        if (item.orderId === id) {
          controlObj = item;
        }
      });
      _this.setState(function (prevState) {
        return {
          reasonModal: !prevState.reasonModal,
          cancelReasonId: '',
          nowItem: controlObj
        };
      });
    }, _this.cancelAppeal = function (e) {
      var id = e.target.dataset.id;
      var controlObj = null;
      _this.state.orderLists.forEach(function (item) {
        if (item.orderId === id) {
          controlObj = item;
        }
      });
      _taroWeapp2.default.showModal({
        title: '确定要取消工单吗？',
        success: function success(res) {
          if (res.confirm) {
            var masterInfo = _taroWeapp2.default.getStorageSync('masterInfo');
            var params = {
              "appealId": controlObj.appealId,
              "userId": masterInfo.masterId,
              "username": masterInfo.masterName,
              "departmentName": controlObj.stationName
            };
            (0, _adminApis.cancelConf)(params).then(function (res) {
              if (res.data.code === 0) {
                _taroWeapp2.default.showToast({ title: '操作成功', icon: 'none' }).then(function () {
                  setTimeout(function () {
                    _this.reloadData();
                  }, 1000);
                });
              } else {
                _taroWeapp2.default.showToast({ title: '操作失败', icon: 'none' });
              }
            });
          }
        }
      });
    }, _this.handleConfirmModal = function () {
      var _this$state2 = _this.state,
          nowItem = _this$state2.nowItem,
          cancelReasonId = _this$state2.cancelReasonId;

      var masterInfo = _taroWeapp2.default.getStorageSync('masterInfo');
      console.log('stationName----', nowItem.stationName);
      var params = {
        orderId: nowItem.orderId,
        reasonId: cancelReasonId,
        userId: masterInfo.masterId,
        username: masterInfo.masterName,
        departmentName: nowItem.stationName
      };
      (0, _adminApis.cancel)(params).then(function (res) {
        if (res.data.code === 0) {
          _taroWeapp2.default.showToast({
            title: '订单取消成功',
            icon: 'none'
          }).then(function () {
            return setTimeout(function () {
              return _this.reloadData();
            }, 1000);
          });
        } else {
          _taroWeapp2.default.showToast({
            title: '订单取消失败：' + res.data.msg,
            icon: 'none'
          });
        }
      });
    }, _this.makePhoneCall = function (tel) {
      _taroWeapp2.default.makePhoneCall({
        phoneNumber: tel,
        fail: function fail() {
          return false;
        }
      });
    }, _this.anonymousFunc0Map = {}, _this.anonymousFunc1Map = {}, _this.customComponents = ["AtModal", "AtModalHeader", "AtModalContent", "AtRadio", "AtModalAction"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Admin, [{
    key: '_constructor',
    value: function _constructor() {
      _get(Admin.prototype.__proto__ || Object.getPrototypeOf(Admin.prototype), '_constructor', this).call(this);

      this.state = {
        currentTab: 0,
        orderLists: [],
        cancelReasonLists: [],
        pageNo: 1,
        pageSize: 5,
        hasNextPage: true,
        reasonModal: false,
        cancelReasonId: '',
        showRefresh: false,
        nowItem: {}
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentDidShow',
    value: function componentDidShow() {
      this.reloadData();
    }
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      this.getLists();
    }
    // 下拉刷新

  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      var _this2 = this;

      this.setState({
        pageNo: 1,
        pageSize: 5,
        orderLists: [],
        hasNextPage: true
      }, function () {
        _taroWeapp2.default.showNavigationBarLoading();
        _this2.reloadData();
      });
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _this3 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__94"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__94 = _genCompid2[0],
          $compid__94 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__95"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__95 = _genCompid4[0],
          $compid__95 = _genCompid4[1];

      var cancelReasonArr = [];
      this.__state.cancelReasonLists.forEach(function (item) {
        if (item.isValid === 'Y') {
          var obj = {
            label: item.reasonName,
            value: item.id
          };
          cancelReasonArr.push(obj);
        }
      });

      var loopArray61 = this.__state.orderLists.map(function (item, __index0) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var $loopState__temp2 = _this3._createFootBtnData(__prefix + "ggzzzzzzzz" + ('' + __index0))(item.$original);

        var _$indexKey = "ghzzz" + __index0;

        _this3.anonymousFunc0Map[_$indexKey] = function () {
          return _this3.makePhoneCall(item.$original.userPhone);
        };

        var _$indexKey2 = "gizzz" + __index0;

        _this3.anonymousFunc1Map[_$indexKey2] = function () {
          return _this3.makePhoneCall(item.$original.serviceUserPhone);
        };

        return {
          $loopState__temp2: $loopState__temp2,
          _$indexKey: _$indexKey,
          _$indexKey2: _$indexKey2,
          $original: item.$original
        };
      });

      _taroWeapp.propsManager.set({
        "isOpened": this.__state.reasonModal
      }, $compid__94, $prevCompid__94);
      _taroWeapp.propsManager.set({
        "options": cancelReasonArr,
        "value": this.__state.cancelReasonId,
        "onClick": this.handleRadioChange
      }, $compid__95, $prevCompid__95);
      Object.assign(this.__state, {
        loopArray61: loopArray61,
        $compid__94: $compid__94,
        $compid__95: $compid__95
      });
      return this.__state;
    }
  }, {
    key: '_createFootBtnData',
    value: function _createFootBtnData(_$uid) {
      return function (orderItem) {
        var orderType = orderItem.orderStateName;
        var orderId = orderItem.orderId;

        if (orderType === '待上门') {} else if (orderType === '待接单') {} else if (orderType === '异常') {}

        return {
          orderType: orderType,
          orderId: orderId,
          orderItem: orderItem
        };
      };
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
  }]);

  return Admin;
}(_taroWeapp.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1", "handleCancelModal", "handleConfirmModal", "handleCancelModal", "dispatchOrder", "closeOrder", "conflict", "cancelAppeal"], _class.$$componentPath = "pages/admin/admin", _temp2);
exports.default = Admin;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(Admin, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=E:\\myGitHub\\Taro-WeiApp\\src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/admin/admin.tsx?taro&type=template&parse=PAGE&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=E:/myGitHub/Taro-WeiApp/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/admin/admin.tsx?taro&type=template&parse=PAGE& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/admin/admin.wxml";

/***/ }),

/***/ "./src/pages/admin/admin.scss":
/*!************************************!*\
  !*** ./src/pages/admin/admin.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/admin/admin.tsx":
/*!***********************************!*\
  !*** ./src/pages/admin/admin.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.tsx?taro&type=template&parse=PAGE& */ "./src/pages/admin/admin.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _admin_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.tsx?taro&type=script&parse=PAGE& */ "./src/pages/admin/admin.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _admin_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _admin_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/admin/admin.tsx?taro&type=script&parse=PAGE&":
/*!****************************************************************!*\
  !*** ./src/pages/admin/admin.tsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_admin_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./admin.tsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/admin/admin.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_admin_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_admin_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_admin_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_admin_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_admin_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/admin/admin.tsx?taro&type=template&parse=PAGE&":
/*!******************************************************************!*\
  !*** ./src/pages/admin/admin.tsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_admin_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=E:/myGitHub/Taro-WeiApp/src!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./admin.tsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=E:\\myGitHub\\Taro-WeiApp\\src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/admin/admin.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_admin_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_admin_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_admin_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_admin_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/admin/admin.tsx","runtime","vendors","common"]]]);