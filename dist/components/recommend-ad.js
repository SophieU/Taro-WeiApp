(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/recommend-ad"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/recommend-ad.tsx?taro&type=script&parse=COMPONENT&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/recommend-ad.tsx?taro&type=script&parse=COMPONENT& ***!
  \***************************************************************************************************************************************************************************************/
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

var _common = __webpack_require__(/*! ../utils/common */ "./src/utils/common.ts");

__webpack_require__(/*! ./recommend-ad.scss */ "./src/components/recommend-ad.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
* 版式位名称    format_code
一张图版式位	1
左右图版式位	2
左中右图版式位	6
四张图版式位	7
左一右二图版式位	3
左二右一图版式位	4
上二下二图版式位	5
* */
var RecommendAd = (_temp2 = _class = function (_BaseComponent) {
  _inherits(RecommendAd, _BaseComponent);

  function RecommendAd() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RecommendAd);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RecommendAd.__proto__ || Object.getPrototypeOf(RecommendAd)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["formatCode", "_$_$anonymousState__temp", "_$_$anonymousState__temp2", "_$_$anonymousState__temp3", "_$_$anonymousState__temp4", "_$_$anonymousState__temp5", "anonymousState__temp6", "source"], _this.jumpTo = function (info) {
      (0, _common.jumpTo)(info);
    }, _this.anonymousFunc1Map = {}, _this.anonymousFunc12Map = {}, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RecommendAd, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(RecommendAd.prototype.__proto__ || Object.getPrototypeOf(RecommendAd.prototype), '_constructor', this).call(this, props);
      this.defaultProps = {
        source: { formatCode: '1', detail: [] }
      };
      /* 判断跳转到哪儿 */
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: '_createCode1Data',
    value: function _createCode1Data(_$uid) {
      var _this2 = this;

      return function (data, key) {
        _this2.anonymousFunc0 = function () {
          _this2.jumpTo(data[0]);
        };

        return {
          key: key,
          data: data
        };
      };
    }
  }, {
    key: '_createCode2Data',
    value: function _createCode2Data(_$uid) {
      var _this3 = this;

      return function (data, key) {
        var loopArray36 = data.map(function (item, __index1) {
          item = {
            $original: (0, _taroWeapp.internal_get_original)(item)
          };

          var _$indexKey = "dhzzz" + __index1;

          _this3.anonymousFunc1Map[_$indexKey] = function () {
            _this3.jumpTo(item.$original);
          };

          return {
            _$indexKey: _$indexKey,
            $original: item.$original
          };
        });
        return {
          loopArray36: loopArray36,
          key: key,
          data: data
        };
      };
    }
  }, {
    key: '_createCode3Data',
    value: function _createCode3Data(_$uid) {
      var _this4 = this;

      return function (data, key) {
        _this4.anonymousFunc2 = function () {
          _this4.jumpTo(data[0]);
        };

        _this4.anonymousFunc3 = function () {
          _this4.jumpTo(data[1]);
        };

        _this4.anonymousFunc4 = function () {
          _this4.jumpTo(data[2]);
        };

        return {
          key: key,
          data: data
        };
      };
    }
  }, {
    key: '_createCode4Data',
    value: function _createCode4Data(_$uid) {
      var _this5 = this;

      return function (data, key) {
        _this5.anonymousFunc5 = function () {
          _this5.jumpTo(data[0]);
        };

        _this5.anonymousFunc6 = function () {
          _this5.jumpTo(data[1]);
        };

        _this5.anonymousFunc7 = function () {
          _this5.jumpTo(data[2]);
        };

        return {
          key: key,
          data: data
        };
      };
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !!nextProps.source;
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _$_$anonymousState__temp, _$_$anonymousState__temp2, _$_$anonymousState__temp3, _$_$anonymousState__temp4, _$_$anonymousState__temp5;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var source = this.__props.source;
      var formatCode = source ? source.formatCode : '';
      var datas = source ? source.details : [];
      var key = source ? source.id : '';
      if (formatCode === '2' || formatCode === '6') {
        _$_$anonymousState__temp = undefined;
        _$_$anonymousState__temp = this._createCode2Data(__prefix + "dizzzzzzzz")(datas, key);
      } else if (formatCode === '3') {
        _$_$anonymousState__temp2 = undefined;
        _$_$anonymousState__temp2 = this._createCode3Data(__prefix + "djzzzzzzzz")(datas, key);
      } else if (formatCode === '4') {
        _$_$anonymousState__temp3 = undefined;
        _$_$anonymousState__temp3 = this._createCode4Data(__prefix + "eazzzzzzzz")(datas, key);
      } else if (formatCode === '5') {
        _$_$anonymousState__temp4 = undefined;
        _$_$anonymousState__temp4 = this._createCode5Data(__prefix + "ebzzzzzzzz")(datas, key);
      } else if (formatCode === '7') {
        _$_$anonymousState__temp5 = undefined;
        _$_$anonymousState__temp5 = this._createCode7Data(__prefix + "eczzzzzzzz")(datas, key);
      }

      var anonymousState__temp6 = this._createCode1Data(__prefix + "edzzzzzzzz")(datas, key);

      Object.assign(this.__state, {
        formatCode: formatCode,
        _$_$anonymousState__temp: _$_$anonymousState__temp,
        _$_$anonymousState__temp2: _$_$anonymousState__temp2,
        _$_$anonymousState__temp3: _$_$anonymousState__temp3,
        _$_$anonymousState__temp4: _$_$anonymousState__temp4,
        _$_$anonymousState__temp5: _$_$anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6
      });
      return this.__state;
    }
  }, {
    key: '_createCode5Data',
    value: function _createCode5Data(_$uid) {
      var _this6 = this;

      return function (data, key) {
        _this6.anonymousFunc8 = function () {
          _this6.jumpTo(data[0]);
        };

        _this6.anonymousFunc9 = function () {
          _this6.jumpTo(data[1]);
        };

        _this6.anonymousFunc10 = function () {
          _this6.jumpTo(data[2]);
        };

        _this6.anonymousFunc11 = function () {
          _this6.jumpTo(data[3]);
        };

        return {
          key: key,
          data: data
        };
      };
    }
  }, {
    key: '_createCode7Data',
    value: function _createCode7Data(_$uid) {
      var _this7 = this;

      return function (data, key) {
        var loopArray37 = data.map(function (item, __index12) {
          item = {
            $original: (0, _taroWeapp.internal_get_original)(item)
          };

          var _$indexKey2 = "eezzz" + __index12;

          _this7.anonymousFunc12Map[_$indexKey2] = function () {
            _this7.jumpTo(item.$original);
          };

          return {
            _$indexKey2: _$indexKey2,
            $original: item.$original
          };
        });
        return {
          loopArray37: loopArray37,
          key: key,
          data: data
        };
      };
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: 'anonymousFunc1',
    value: function anonymousFunc1(_$indexKey) {
      var _anonymousFunc1Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc1Map[_$indexKey] && (_anonymousFunc1Map = this.anonymousFunc1Map)[_$indexKey].apply(_anonymousFunc1Map, e);
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
  }, {
    key: 'anonymousFunc4',
    value: function anonymousFunc4(e) {
      ;
    }
  }, {
    key: 'anonymousFunc5',
    value: function anonymousFunc5(e) {
      ;
    }
  }, {
    key: 'anonymousFunc6',
    value: function anonymousFunc6(e) {
      ;
    }
  }, {
    key: 'anonymousFunc7',
    value: function anonymousFunc7(e) {
      ;
    }
  }, {
    key: 'anonymousFunc8',
    value: function anonymousFunc8(e) {
      ;
    }
  }, {
    key: 'anonymousFunc9',
    value: function anonymousFunc9(e) {
      ;
    }
  }, {
    key: 'anonymousFunc10',
    value: function anonymousFunc10(e) {
      ;
    }
  }, {
    key: 'anonymousFunc11',
    value: function anonymousFunc11(e) {
      ;
    }
  }, {
    key: 'anonymousFunc12',
    value: function anonymousFunc12(_$indexKey2) {
      var _anonymousFunc12Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc12Map[_$indexKey2] && (_anonymousFunc12Map = this.anonymousFunc12Map)[_$indexKey2].apply(_anonymousFunc12Map, e);
    }
  }]);

  return RecommendAd;
}(_taroWeapp.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10", "anonymousFunc11", "anonymousFunc12"], _class.$$componentPath = "components/recommend-ad", _temp2);
exports.default = RecommendAd;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(RecommendAd));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\tf-smallRoutine\\Taro-WeiApp\\src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/recommend-ad.tsx?taro&type=template&parse=COMPONENT&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=D:/tf-smallRoutine/Taro-WeiApp/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/recommend-ad.tsx?taro&type=template&parse=COMPONENT& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/recommend-ad.wxml";

/***/ }),

/***/ "./src/components/recommend-ad.scss":
/*!******************************************!*\
  !*** ./src/components/recommend-ad.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/recommend-ad.tsx":
/*!*****************************************!*\
  !*** ./src/components/recommend-ad.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _recommend_ad_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recommend-ad.tsx?taro&type=template&parse=COMPONENT& */ "./src/components/recommend-ad.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _recommend_ad_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recommend-ad.tsx?taro&type=script&parse=COMPONENT& */ "./src/components/recommend-ad.tsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _recommend_ad_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _recommend_ad_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/components/recommend-ad.tsx?taro&type=script&parse=COMPONENT&":
/*!***************************************************************************!*\
  !*** ./src/components/recommend-ad.tsx?taro&type=script&parse=COMPONENT& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_recommend_ad_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./recommend-ad.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/recommend-ad.tsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_recommend_ad_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_recommend_ad_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_recommend_ad_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_recommend_ad_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_recommend_ad_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/recommend-ad.tsx?taro&type=template&parse=COMPONENT&":
/*!*****************************************************************************!*\
  !*** ./src/components/recommend-ad.tsx?taro&type=template&parse=COMPONENT& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_D_tf_smallRoutine_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_recommend_ad_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=D:/tf-smallRoutine/Taro-WeiApp/src!../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./recommend-ad.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\tf-smallRoutine\\Taro-WeiApp\\src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/recommend-ad.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_D_tf_smallRoutine_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_recommend_ad_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_D_tf_smallRoutine_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_recommend_ad_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_D_tf_smallRoutine_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_recommend_ad_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_D_tf_smallRoutine_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_recommend_ad_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/components/recommend-ad.tsx","runtime","vendors","common"]]]);