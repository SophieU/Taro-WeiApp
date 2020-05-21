(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/custom-order/lists"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/custom-order/lists.tsx?taro&type=script&parse=PAGE&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/custom-order/lists.tsx?taro&type=script&parse=PAGE& ***!
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

var _orderApis = __webpack_require__(/*! ./order-apis */ "./src/pages/custom-order/order-apis.ts");

var _common = __webpack_require__(/*! ../../utils/common */ "./src/utils/common.ts");

__webpack_require__(/*! ./lists.scss */ "./src/pages/custom-order/lists.scss");

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Lists.__proto__ || Object.getPrototypeOf(Lists)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__64", "$compid__65", "$compid__66", "$compid__67", "$compid__68", "anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "stateMap", "current", "lists", "pageSize", "pageNo", "hasNextPage", "pageState"], _this.config = {
      navigationBarTitleText: '报修记录',
      navigationStyle: 'default'
    }, _this.handleTab = function (index) {
      _this.setState(function (prevState) {
        return {
          current: index,
          hasNextPage: {
            STAY_RECEIPT: true,
            STAY_PAY: true,
            STAY_COMMENT: true,
            FINISH: true
          },
          pageNo: {
            STAY_RECEIPT: 1,
            STAY_PAY: 1,
            STAY_COMMENT: 1,
            FINISH: 1
          },
          lists: {
            STAY_RECEIPT: [],
            STAY_PAY: [],
            STAY_COMMENT: [],
            FINISH: []
          },
          pageState: prevState.stateMap[index]
        };
      }, function () {
        _this.getOrderLists();
      });
    }, _this.customComponents = ["AtTabs", "AtTabsPane", "StateText"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Lists, [{
    key: '_constructor',
    value: function _constructor() {
      _get(Lists.prototype.__proto__ || Object.getPrototypeOf(Lists.prototype), '_constructor', this).call(this);

      this.state = {
        stateMap: ['STAY_RECEIPT', 'STAY_PAY', 'STAY_COMMENT', 'FINISH'],
        current: 0,
        lists: {
          STAY_RECEIPT: [],
          STAY_PAY: [],
          STAY_COMMENT: [],
          FINISH: []
        },
        pageSize: 10,
        pageNo: {
          STAY_RECEIPT: 1,
          STAY_PAY: 1,
          STAY_COMMENT: 1,
          FINISH: 1
        },
        hasNextPage: {
          STAY_RECEIPT: true,
          STAY_PAY: true,
          STAY_COMMENT: true,
          FINISH: true
        },
        pageState: 'STAY_RECEIPT' // 工单状态（取值STAY_RECEIPT、STAY_PAY、STAY_COMMENT、FINISH）
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getOrderLists();
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      var _this2 = this;

      this.setState({
        lists: {
          STAY_RECEIPT: [],
          STAY_PAY: [],
          STAY_COMMENT: [],
          FINISH: []
        },
        pageNo: {
          STAY_RECEIPT: 1,
          STAY_PAY: 1,
          STAY_COMMENT: 1,
          FINISH: 1
        },
        hasNextPage: {
          STAY_RECEIPT: true,
          STAY_PAY: true,
          STAY_COMMENT: true,
          FINISH: true
        }
      }, function () {
        _this2.getOrderLists();
      });
    }
    // 获取列表

  }, {
    key: 'getOrderLists',
    value: function getOrderLists() {
      var _this3 = this;

      var stateType = this.state.pageState;
      if (!this.state.hasNextPage[stateType]) {
        _taroWeapp2.default.showToast({
          title: '没有更多了',
          icon: 'none'
        });
        return;
      }
      _taroWeapp2.default.showLoading({ title: '数据加载中' });
      var params = {
        pageNo: this.state.pageNo[stateType],
        pageSize: this.state.pageSize,
        repairOrderState: this.state.pageState
      };
      (0, _orderApis.getLists)(params).then(function (res) {
        _taroWeapp2.default.hideLoading();
        _taroWeapp2.default.stopPullDownRefresh();
        if (res.data.code === 0) {
          var data = res.data.data;
          _this3.setState(function (prevState) {
            var hasNextPage = (0, _common.simpleClone)(prevState.hasNextPage);
            var pageNo = (0, _common.simpleClone)(prevState.pageNo);
            var lists = (0, _common.simpleClone)(prevState.lists);
            if (data.hasNextPage) {
              pageNo[stateType] = data.nextPage;
            }
            hasNextPage[stateType] = data.hasNextPage;
            lists[stateType] = lists[stateType].concat(data.list);
            return {
              lists: lists,
              pageNo: pageNo,
              hasNextPage: hasNextPage
            };
          });
        }
      });
    }
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      this.getOrderLists();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__64"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__64 = _genCompid2[0],
          $compid__64 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__65"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__65 = _genCompid4[0],
          $compid__65 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__66"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__66 = _genCompid6[0],
          $compid__66 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__67"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__67 = _genCompid8[0],
          $compid__67 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__68"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__68 = _genCompid10[0],
          $compid__68 = _genCompid10[1];

      var tabLists = [{ title: '待处理' }, { title: '待付款' }, { title: '待评价' }, { title: '已完成' }];

      var anonymousState__temp = this._createListItemData(__prefix + "fhzzzzzzzz")(this.__state.lists['STAY_RECEIPT']);

      var anonymousState__temp2 = this._createListItemData(__prefix + "fizzzzzzzz")(this.__state.lists['STAY_PAY']);

      var anonymousState__temp3 = this._createListItemData(__prefix + "fjzzzzzzzz")(this.__state.lists['STAY_COMMENT']);

      var anonymousState__temp4 = this._createListItemData(__prefix + "gazzzzzzzz")(this.__state.lists['FINISH']);

      _taroWeapp.propsManager.set({
        "current": this.__state.current,
        "tabList": tabLists,
        "onClick": this.handleTab
      }, $compid__64, $prevCompid__64);
      _taroWeapp.propsManager.set({
        "current": this.__state.current,
        "index": 0
      }, $compid__65, $prevCompid__65);
      _taroWeapp.propsManager.set({
        "current": this.__state.current,
        "index": 1
      }, $compid__66, $prevCompid__66);
      _taroWeapp.propsManager.set({
        "current": this.__state.current,
        "index": 2
      }, $compid__67, $prevCompid__67);
      _taroWeapp.propsManager.set({
        "current": this.__state.current,
        "index": 3
      }, $compid__68, $prevCompid__68);
      Object.assign(this.__state, {
        $compid__64: $compid__64,
        $compid__65: $compid__65,
        $compid__66: $compid__66,
        $compid__67: $compid__67,
        $compid__68: $compid__68,
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4
      });
      return this.__state;
    }
  }, {
    key: '_createListItemData',
    value: function _createListItemData(_$uid) {
      return function (lists) {
        var loopArray49 = lists.length > 0 ? lists.map(function (item, index) {
          item = {
            $original: (0, _taroWeapp.internal_get_original)(item)
          };

          var _genCompid11 = (0, _taroWeapp.genCompid)(_$uid + 'gbzzzzzzzz' + index, true),
              _genCompid12 = _slicedToArray(_genCompid11, 2),
              $prevCompid__69 = _genCompid12[0],
              $compid__69 = _genCompid12[1];

          _taroWeapp.propsManager.set({
            "state": item.$original.orderStateName
          }, $compid__69, $prevCompid__69);
          return {
            $compid__69: $compid__69,
            $original: item.$original
          };
        }) : [];
        return {
          loopArray49: loopArray49,
          lists: lists
        };
      };
    }
  }]);

  return Lists;
}(_taroWeapp.Component), _class.$$events = [], _class.$$componentPath = "pages/custom-order/lists", _temp2);
exports.default = Lists;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(Lists, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\tf-smallRoutine\\Taro-WeiApp\\src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/custom-order/lists.tsx?taro&type=template&parse=PAGE&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=D:/tf-smallRoutine/Taro-WeiApp/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/custom-order/lists.tsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/custom-order/lists.wxml";

/***/ }),

/***/ "./src/pages/custom-order/lists.scss":
/*!*******************************************!*\
  !*** ./src/pages/custom-order/lists.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/custom-order/lists.tsx":
/*!******************************************!*\
  !*** ./src/pages/custom-order/lists.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lists_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lists.tsx?taro&type=template&parse=PAGE& */ "./src/pages/custom-order/lists.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _lists_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lists.tsx?taro&type=script&parse=PAGE& */ "./src/pages/custom-order/lists.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _lists_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _lists_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/custom-order/lists.tsx?taro&type=script&parse=PAGE&":
/*!***********************************************************************!*\
  !*** ./src/pages/custom-order/lists.tsx?taro&type=script&parse=PAGE& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_lists_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./lists.tsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/custom-order/lists.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_lists_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_lists_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_lists_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_lists_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_lists_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/custom-order/lists.tsx?taro&type=template&parse=PAGE&":
/*!*************************************************************************!*\
  !*** ./src/pages/custom-order/lists.tsx?taro&type=template&parse=PAGE& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_D_tf_smallRoutine_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_lists_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=D:/tf-smallRoutine/Taro-WeiApp/src!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./lists.tsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\tf-smallRoutine\\Taro-WeiApp\\src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/custom-order/lists.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_D_tf_smallRoutine_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_lists_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_D_tf_smallRoutine_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_lists_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_D_tf_smallRoutine_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_lists_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_D_tf_smallRoutine_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_lists_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/custom-order/lists.tsx","runtime","vendors","common"]]]);