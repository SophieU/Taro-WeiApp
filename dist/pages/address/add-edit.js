(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/address/add-edit"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/address/add-edit.tsx?taro&type=script&parse=PAGE&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/address/add-edit.tsx?taro&type=script&parse=PAGE& ***!
  \*********************************************************************************************************************************************************************************/
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

var _mobx = __webpack_require__(/*! @tarojs/mobx */ "./node_modules/_@tarojs_mobx@2.0.6@@tarojs/mobx/index.js");

var _common = __webpack_require__(/*! ../../utils/common */ "./src/utils/common.ts");

var _regexpValidate = __webpack_require__(/*! ../../utils/regexpValidate */ "./src/utils/regexpValidate.ts");

var _service = __webpack_require__(/*! ./service */ "./src/pages/address/service.ts");

__webpack_require__(/*! ./order-add.scss */ "./src/pages/address/order-add.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddEdit = (_temp2 = _class = function (_BaseComponent) {
  _inherits(AddEdit, _BaseComponent);

  function AddEdit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AddEdit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddEdit.__proto__ || Object.getPrototypeOf(AddEdit)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "$compid__53", "pageType", "setDefault", "chooseLocation", "id", "areaInfo", "latitude", "longitude", "address", "userName", "userMobile", "isDefault"], _this.config = {
      navigationBarTitleText: '选择地址',
      navigationStyle: 'default'
    }, _this.getEditAddInfo = function (id) {
      var addLists = _taroWeapp2.default.getStorageSync('addressLists');
      var target = addLists.filter(function (item) {
        return item.id === id;
      });
      if (target.length > 0) {
        var res = target[0];
        _this.setState({
          id: id,
          areaInfo: res.areaInfo,
          latitude: res.latitude,
          longitude: res.longitude,
          address: res.address,
          userName: res.userName,
          userMobile: res.userMobile,
          isDefault: res.isDefault,
          setDefault: [res.isDefault]
        });
      }
    }, _this.goAddress = function () {
      _this.setState({
        chooseLocation: _taroWeapp2.default.requirePlugin('chooseLocation')
      });
      // Taro.authorize({scope: "scope.userLocation"})
      _taroWeapp2.default.getSetting({
        success: function success(res) {
          if (!res.authSetting['scope.userLocation']) {
            _taroWeapp2.default.showModal({
              title: '',
              content: '您还未授权访问地理信息，请先同意授权',
              success: function success(res) {
                if (res.confirm) {
                  _taroWeapp2.default.openSetting({
                    success: function success(res) {
                      console.log(res);
                    }
                  });
                }
              }
            });
          } else {
            var key = 'E4EBZ-Z7QRF-BREJT-JZGXD-2DDE6-6XB6T'; //使用在腾讯位置服务申请的key
            var referer = '天富一生约'; //调用插件的app的名称
            (0, _common.getLocationAuth)(function () {
              _taroWeapp2.default.getLocation({
                type: 'wgs84',
                success: function success(res) {
                  var latitude = res.latitude;
                  var longitude = res.longitude;
                  var location = JSON.stringify({
                    latitude: latitude,
                    longitude: longitude
                  });
                  var category = '公司企业,房产小区';
                  _taroWeapp2.default.navigateTo({
                    url: "plugin://chooseLocation/index?key=" + key + "&referer=" + referer + "&location=" + location + "&category=" + category
                  });
                }
              });
            });
          }
        }
      });
    }, _this.handleRadioChange = function (value) {
      _this.setState({
        setDefault: value,
        isDefault: value.length > 0 ? 'Y' : 'N'
      });
      if (_this.state.pageType === 'edit' && value.length > 0) {
        (0, _service.defaultSet)(_this.state.id);
      }
    }, _this.saveSet = function () {
      var params = {
        "id": "",
        "userName": "",
        "userMobile": "",
        "areaInfo": "",
        "address": "",
        "longitude": "",
        "latitude": "",
        "isDefault": ""
      };
      var validator = {
        userName: { message: '请输入联系人名称' },
        userMobile: { message: '请输入联系电话' },
        areaInfo: { message: '请选择收货地址' },
        address: { message: '请填写详细地址' }
      };
      if (_this.state.setDefault.length > 0) {
        params.isDefault = _this.state.setDefault[0];
      }
      for (var key in params) {
        params[key] = _this.state[key];
      }
      if (!(0, _regexpValidate.validateEmpty)(params, validator)) {
        return;
      }
      if (!(0, _regexpValidate.validateTel)(params.userMobile)) {
        _taroWeapp2.default.showToast({
          title: '请输入正确的手机号码',
          icon: 'none'
        });
        return;
      }
      _taroWeapp2.default.showLoading({ title: '提交中' });
      (0, _service.saveAdd)(params).then(function (res) {
        _taroWeapp2.default.hideLoading();
        if (res.data.code === 0) {
          _taroWeapp2.default.showToast({ title: '保存成功' });
          _taroWeapp2.default.navigateBack();
          console.log(res);
        } else {
          _taroWeapp2.default.showToast({ title: '提交失败：' + res.data.msg });
        }
      });
    }, _this.deleteHandler = function () {
      var id = _this.state.id;
      _taroWeapp2.default.showModal({
        title: '温馨提示',
        content: '您确定要删除此地址吗？',
        success: function success(res) {
          if (res.confirm) {
            (0, _service.deleteAdd)(id).then(function (res) {
              if (res.data.code === 0) {
                _taroWeapp2.default.showToast({ title: '删除成功', icon: 'none' }).then(function () {
                  return setTimeout(function () {
                    _taroWeapp2.default.navigateBack({ delta: -1 });
                  }, 1000);
                });
              }
            });
          }
        }
      });
    }, _this.customComponents = ["AtCheckbox"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddEdit, [{
    key: "_constructor",
    value: function _constructor() {
      _get(AddEdit.prototype.__proto__ || Object.getPrototypeOf(AddEdit.prototype), "_constructor", this).call(this);

      this.state = {
        pageType: 'add',
        setDefault: [],
        chooseLocation: null,
        id: '',
        areaInfo: '',
        latitude: '',
        longitude: '',
        address: '',
        userName: '',
        userMobile: '',
        isDefault: 'N'
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var id = this.$router.params.id;
      if (id !== 'undefined') {
        this.getEditAddInfo(id);
        this.setState({
          pageType: 'edit',
          id: id
        });
      }
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      if (this.state.chooseLocation) {
        var location = this.state.chooseLocation.getLocation();
        var areaInfo = location.address;
        var latitude = location.latitude;
        var longitude = location.longitude;
        this.setState({
          areaInfo: areaInfo,
          latitude: latitude,
          longitude: longitude
        });
      }
    }
  }, {
    key: "setValue",
    value: function setValue(e, key) {
      var value = e.detail.value;
      this.setState(_defineProperty({}, key, value));
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__53"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__53 = _genCompid2[0],
          $compid__53 = _genCompid2[1];

      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({ background: '#fff' });

      this.anonymousFunc0 = function (e) {
        return _this2.setValue(e, 'address');
      };

      this.anonymousFunc1 = function (e) {
        return _this2.setValue(e, 'userName');
      };

      this.anonymousFunc2 = function (e) {
        return _this2.setValue(e, 'userMobile');
      };

      var anonymousState__temp2 = [{ label: '设为默认', value: 'Y' }];
      _taroWeapp.propsManager.set({
        "selectedList": this.__state.setDefault,
        "options": anonymousState__temp2,
        "onChange": this.handleRadioChange
      }, $compid__53, $prevCompid__53);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        $compid__53: $compid__53
      });
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
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(e) {
      ;
    }
  }]);

  return AddEdit;
}(_taroWeapp.Component), _class.$$events = ["goAddress", "anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "saveSet", "deleteHandler"], _class.$$componentPath = "pages/address/add-edit", _temp2);
AddEdit = (0, _tslib.__decorate)([(0, _mobx.inject)('appStore'), _mobx.observer], AddEdit);
exports.default = AddEdit;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(AddEdit, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=E:\\myGitHub\\Taro-WeiApp\\src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/address/add-edit.tsx?taro&type=template&parse=PAGE&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=E:/myGitHub/Taro-WeiApp/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/address/add-edit.tsx?taro&type=template&parse=PAGE& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/address/add-edit.wxml";

/***/ }),

/***/ "./src/pages/address/add-edit.tsx":
/*!****************************************!*\
  !*** ./src/pages/address/add-edit.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_edit_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-edit.tsx?taro&type=template&parse=PAGE& */ "./src/pages/address/add-edit.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _add_edit_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit.tsx?taro&type=script&parse=PAGE& */ "./src/pages/address/add-edit.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _add_edit_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _add_edit_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/address/add-edit.tsx?taro&type=script&parse=PAGE&":
/*!*********************************************************************!*\
  !*** ./src/pages/address/add-edit.tsx?taro&type=script&parse=PAGE& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_add_edit_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./add-edit.tsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/address/add-edit.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_add_edit_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_add_edit_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_add_edit_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_add_edit_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_add_edit_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/address/add-edit.tsx?taro&type=template&parse=PAGE&":
/*!***********************************************************************!*\
  !*** ./src/pages/address/add-edit.tsx?taro&type=template&parse=PAGE& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_add_edit_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=E:/myGitHub/Taro-WeiApp/src!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./add-edit.tsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=E:\\myGitHub\\Taro-WeiApp\\src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/address/add-edit.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_add_edit_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_add_edit_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_add_edit_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_add_edit_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/address/add-edit.tsx","runtime","vendors","common"]]]);