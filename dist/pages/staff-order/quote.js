(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/staff-order/quote"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/staff-order/quote.tsx?taro&type=script&parse=PAGE&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/staff-order/quote.tsx?taro&type=script&parse=PAGE& ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _staffApis = __webpack_require__(/*! ./staff-apis */ "./src/pages/staff-order/staff-apis.ts");

__webpack_require__(/*! ./order.scss */ "./src/pages/staff-order/order.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Quote.__proto__ || Object.getPrototypeOf(Quote)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["staffPrice", "id", "type", "doorFee", "nightFee", "servicePrice", "materialsPrice", "totalAmount", "repairOrderOfferPlanVoList", "dispatchId"], _this.config = {
      navigationBarTitleText: '报价清单',
      navigationStyle: 'default'
    }, _this.getFee = function () {
      (0, _staffApis.orderDetail)(_this.state.id).then(function (res) {
        if (res.data.code === 0) {
          var totalAmount = 0;
          var data = res.data.data.repairOrderOfferPlanVoList.filter(function (item) {
            if (item.planType === 'MATERIAL_PROJECT' || item.planType === 'SERVICE_PROJECT') {
              return false;
            } else {
              totalAmount += item.amount;
              return true;
            }
          });
          _this.setState({
            repairOrderOfferPlanVoList: data,
            totalAmount: totalAmount
          });
        }
      });
    }, _this.submitPlan = function () {
      if (!_this.state.servicePrice && !_this.state.materialsPrice) {
        _taroWeapp2.default.showToast({
          title: '请至少填写服务费或材料费中一项',
          icon: 'none'
        });
        return;
      }
      _taroWeapp2.default.showLoading({ title: '提交中' });
      var params = [{
        "planType": "SERVICE_PROJECT",
        "serviceCost": _this.state.servicePrice
      }, {
        "planType": "MATERIAL_PROJECT",
        "serviceCost": _this.state.materialsPrice
      }];
      (0, _staffApis.setPricePlan)(_this.state.dispatchId, params).then(function (res) {
        if (res.data.code === 0) {
          _taroWeapp2.default.showToast({
            title: '报价方案提交成功'
          }).then(function () {
            _taroWeapp2.default.navigateBack();
          });
        } else {
          _taroWeapp2.default.showToast({ title: res.data.msg, icon: 'none' });
        }
      });
    }, _this.handlePriceChange = function (e, prop) {
      var value = e.detail.value;
      _this.setState(_defineProperty({}, prop, parseFloat(value)));
    }, _this.filterInput = function (e) {
      var value = e.detail.value;
      // 最多两位输入
      if (value.toString().split('.')[1] && value.toString().split('.')[1].length >= 2) {
        return parseFloat(value).toFixed(2);
      }
      if (value.indexOf('.') > -1 && value.split('.').length > 2) {
        return '';
      }
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Quote, [{
    key: '_constructor',
    value: function _constructor() {
      _get(Quote.prototype.__proto__ || Object.getPrototypeOf(Quote.prototype), '_constructor', this).call(this);

      this.state = {
        staffPrice: 0,
        id: '',
        type: '',
        doorFee: '',
        nightFee: '',
        servicePrice: '',
        materialsPrice: '',
        totalAmount: 0,
        repairOrderOfferPlanVoList: [],
        dispatchId: ''
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var _$router$params = this.$router.params,
          id = _$router$params.id,
          type = _$router$params.type,
          dispatchId = _$router$params.dispatchId;

      console.log(dispatchId);
      this.setState({
        id: id,
        type: type,
        dispatchId: dispatchId
      }, function () {
        _this2.getFee();
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

      this.anonymousFunc0 = function (val) {
        return _this3.handlePriceChange(val, 'servicePrice');
      };

      this.anonymousFunc1 = function (val) {
        return _this3.handlePriceChange(val, 'materialsPrice');
      };

      Object.assign(this.__state, {});
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
  }]);

  return Quote;
}(_taroWeapp.Component), _class.$$events = ["filterInput", "anonymousFunc0", "anonymousFunc1", "submitPlan"], _class.$$componentPath = "pages/staff-order/quote", _temp2);
exports.default = Quote;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(Quote, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=E:\\myGitHub\\Taro-WeiApp\\src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/staff-order/quote.tsx?taro&type=template&parse=PAGE&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=E:/myGitHub/Taro-WeiApp/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/staff-order/quote.tsx?taro&type=template&parse=PAGE& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/staff-order/quote.wxml";

/***/ }),

/***/ "./src/pages/staff-order/quote.tsx":
/*!*****************************************!*\
  !*** ./src/pages/staff-order/quote.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quote_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quote.tsx?taro&type=template&parse=PAGE& */ "./src/pages/staff-order/quote.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _quote_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quote.tsx?taro&type=script&parse=PAGE& */ "./src/pages/staff-order/quote.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _quote_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _quote_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/staff-order/quote.tsx?taro&type=script&parse=PAGE&":
/*!**********************************************************************!*\
  !*** ./src/pages/staff-order/quote.tsx?taro&type=script&parse=PAGE& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_quote_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./quote.tsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/staff-order/quote.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_quote_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_quote_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_quote_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_quote_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_quote_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/staff-order/quote.tsx?taro&type=template&parse=PAGE&":
/*!************************************************************************!*\
  !*** ./src/pages/staff-order/quote.tsx?taro&type=template&parse=PAGE& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_quote_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=E:/myGitHub/Taro-WeiApp/src!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./quote.tsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=E:\\myGitHub\\Taro-WeiApp\\src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/staff-order/quote.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_quote_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_quote_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_quote_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_quote_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/staff-order/quote.tsx","runtime","vendors","common"]]]);