(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/customer-service"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/customer-service.tsx?taro&type=script&parse=COMPONENT&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/customer-service.tsx?taro&type=script&parse=COMPONENT& ***!
  \*******************************************************************************************************************************************************************************************/
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

__webpack_require__(/*! ./customer-service.scss */ "./src/components/customer-service.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomerService = (_temp2 = _class = function (_BaseComponent) {
  _inherits(CustomerService, _BaseComponent);

  function CustomerService() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CustomerService);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CustomerService.__proto__ || Object.getPrototypeOf(CustomerService)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "hideService"], _this.toggleService = function () {
      _this.setState(function (prevState) {
        return {
          hideService: !prevState.hideService
        };
      });
    }, _this.callService = function () {
      _taroWeapp2.default.makePhoneCall({
        phoneNumber: '10086'
      });
    }, _this.onlineService = function () {
      _taroWeapp2.default.showToast({
        title: '客服暂未上线'
      });
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CustomerService, [{
    key: "_constructor",
    value: function _constructor() {
      _get(CustomerService.prototype.__proto__ || Object.getPrototypeOf(CustomerService.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        hideService: true
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var anonymousState__temp = this.__state.hideService ? __webpack_require__(/*! ../assets/imgs/tmp/cus-ser.png */ "./src/assets/imgs/tmp/cus-ser.png") : null;

      var anonymousState__temp2 = __webpack_require__(/*! ../assets/imgs/tmp/im.png */ "./src/assets/imgs/tmp/im.png");

      var anonymousState__temp3 = __webpack_require__(/*! ../assets/imgs/tmp/call.png */ "./src/assets/imgs/tmp/call.png");

      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3
      });
      return this.__state;
    }
  }]);

  return CustomerService;
}(_taroWeapp.Component), _class.$$events = ["toggleService", "onlineService", "callService"], _class.$$componentPath = "components/customer-service", _temp2);
exports.default = CustomerService;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(CustomerService));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=E:\\myGitHub\\Taro-WeiApp\\src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/customer-service.tsx?taro&type=template&parse=COMPONENT&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=E:/myGitHub/Taro-WeiApp/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/customer-service.tsx?taro&type=template&parse=COMPONENT& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/customer-service.wxml";

/***/ }),

/***/ "./src/assets/imgs/tmp/call.png":
/*!**************************************!*\
  !*** ./src/assets/imgs/tmp/call.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADgklEQVRoQ+1YS2gTURQ9N2lnWrUKfoqiLiyIoBtBQbSCBSlVtBP/uHDhdyFVKaILSyaMSfoREReiGxEUF4KCmKn4Q6GIFIRWF6IgqCC4UOvGfmwSk7kybYNanbyXmQlVyNvec8/n3veGEMJ/fug/949SgIneYGkDpQ14nEDpCnkcoOd2Vxv4bNRNqQpUbQsEaEgNmzc8u/BAUHCAVFtoMbJ8EcCqUV3uVfXO5R48eGotKMCY+esAlvyqyow3FRFzoScnLpulAziZz+ky6FyFnjji0ofrNqkA9p2fFpx6/+e1cdBjxNWIqbt246JRKkAqqu0E4ZqInwhD5ZPUWXT0xrAI61ddKkAyHjpGzKdlRDNZa9lk4/YzGawfGKkA31tDDZbF9yQEP6q6OUcC5xtEKkCyfUMNZYJvRaoEnFF085gI52ddKoAtmI5pXxiY4SRO4K7y7EA9GV0ZPw2KuKQDJGPaEwJq/0ZIwACY6pVI4qlI0O+6dIBUXAuDEXMwYKi6edJvczJ80gHSrZuWsmU9dyB9ycDWCt18LSPqJ0Y6wMg7iIceMvNaBwM9SrZ/5T/7BmzTyWhjMxGddX7IeKzo5ho/JyziKmgD/UbjTDVITwAsciQm3FfD5jqRsF/1ggKMXKOotpcJl/IZIKILSjjR5JfJvFpuRFJx7RYYIUFvu6qbLW74C+kpeAM2+beoVhsk2Fcp7yHgvKKbh/KBhmMb6yr1210irjzvzl1rKqadANAm7uarSnbZbjIMK4dlo67se3BqB4P3ADSdwX3EgStqJHFczPc7wtUGchSpuHYTjM0iUWbc5UDmYGX4zvt0NLQCZHUwqO7PPnqg6okGEd+vdU8BbKJUTPsAYK6E6AsiPAJjHwNVTngGPlXo5mwJvhGI5wA2STKmvSNggayoGMe9SjCznlru9omwvgSwRdLxxovMtF8kKFsn4iYl3HlBhPctwNh1sh+1/bg9H4t5T2Wk87KIyNcAoyFC2xjc7PTTW2RorN79NdvfUG10DYrwvgfICSZjjYeJ0QyiGpGJcfWXCNIOtSXxSqavaAFs8QFjc3V5WXaX/aklYLWEoYLM+/YVkjCGsT/GthOowWKeT4R54/q6EaQDspPP9RZ1A6JgfGrLvOFU2g6jDmQHe2Tu/HjOCQ0gCihTLwWQmVIxMaUNFHO6MtylDchMqZiY0gaKOV0Z7h9NZAVAK0zG9QAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/imgs/tmp/im.png":
/*!************************************!*\
  !*** ./src/assets/imgs/tmp/im.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAExklEQVRoQ+1ZTWwbZRB9s3Z23RSQCgSSGwh6iBCBUg6ouaSHgGjidZsqoJIIlUKFREsvIA6J1zVeu71QcaAFqRRxgKJCRYrX0PaCGgmoFCiNgiiHggRI/AgiVai0JOvYO2jtXcde27FdexNH8p7s75t9897MfD8eE1b5Q6ucP1oCVjqDZTMwr269RyCjnw08SsTrVoIog2bB0Awh9cWa4OlfS3EoKUBX5f0AwitBurxPek9S4k875wsE8EH53mQKPzYX8UI2ooBOGtf+skcLBOiq/wJAG3OvECWI+TID/66EKGa0E7AehG15/k9KivZEkQA9OvgkWDhhTxgwNq9RPp1cCeJOn3pUHgbjo8XAYlQKasfN77kMzEf8R4joBcsoLCnaq81A3ubgWJfHJUUbLRSg+v8mUIc56AENeJX46eYS4N8K0KksJ74iKYnbCgToqszNWD42pzl1sE+AcM7+LilapnpyJdQS4HK9tTLgcoArwjckA7o60E3k7U8ZmGoPxafKeeXwsJhu0/uNNHW1GeIEhU9eKWt74PGOBcM7TAbNzPz2+9cPH/12oZRt3QKSEfkQE/YCEK3VPyUq2iNFh466rRtIfwjgfmtuDoxdUkjLHZK5vT0qjxDjGAM+a+wiEZ4Xg9oFJ279AqLyDDN68oE9Aga949pn+WNzEf9OgehdB4FpSdEecpJKlsAE8bgUTBxoqACnehucwJOiktic7yyp+s8xqM9JwHk1qQXTxFq2DOhReQSM9/MFlBJqzpfKABHvEYOJNxuaARPMuou8AqB9qTXA4eFbF7z6CWb022uAPZ4HfWOnLjtJXQvLPaIHXzJwcwaT6PM2IbmDxs7MNlyADZiMybtSabq01C6UFTzQTeztFUPxY5X2SD0ij8JLF6Wx+A/lbOsuoUok3J5vCXA7wpXwWxmoFCG356vJwPcA7rOIbJcUbcJtUrXg61H/DjB9YL7DjJ98IW29tZ1nYeYigZhAPGaBNvVvYga94VPi+woELMQCjxkGn7Wj0sxdCTZ4i29/4kyBgMzR7rzHLNUXIroLKX5dCmvfLVUK1w/KG7xp2gfmX2opGatUivpCRDgsBrUXbazCzlxsqCtppP6oxREx7S532iZVeTcDR2vBq2QrpoV1FP7kn5IC7MFaeqMEzIqKdkcpx0lVnmXg9kqkqpuvojeaD8Qx+U7d4AdA6CGmtQVzoA4CP4vFHyIhSdHUfBtdlSMAFLNXQ8A8g94hcNElbSnyBLqaRnra50lfKnXBK1oD1UUia6WrgXGAo/Y7CwI6b7KartfCWzrbPN4/F/EoKCnxWC341dre8D80HO7zJT23nAewwYrEW6KiZVqTyWjgbWZ+ziIxLaavbqLw5Hy1pGqxu2EBmSxEAk+BONNkzYgQjI1gQWDGNzkSTCNSKJ45gNx46hKQLSX5YwBD5mdmThCRiTlokZ2QFG27G8RzQasX/L9oYJOH+atSOGmi3vZg3Cwz1566M5CpeVV+jYGX8lkScEhUtJddY26XbSMcXI8NdXmNlJmFuy28n1OCt3ft+ETeTtQIT8UYDcmACTuvBvYQ+HBmLYD2+pT4EXcoF6I2TEC2lALPmF0LcZnIZ3a+5YiSmz5aAtyMbjXYqz4D/wNPKm9P8wkFvAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/components/customer-service.scss":
/*!**********************************************!*\
  !*** ./src/components/customer-service.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/customer-service.tsx":
/*!*********************************************!*\
  !*** ./src/components/customer-service.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customer_service_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-service.tsx?taro&type=template&parse=COMPONENT& */ "./src/components/customer-service.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _customer_service_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-service.tsx?taro&type=script&parse=COMPONENT& */ "./src/components/customer-service.tsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _customer_service_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _customer_service_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/components/customer-service.tsx?taro&type=script&parse=COMPONENT&":
/*!*******************************************************************************!*\
  !*** ./src/components/customer-service.tsx?taro&type=script&parse=COMPONENT& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_customer_service_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./customer-service.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/customer-service.tsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_customer_service_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_customer_service_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_customer_service_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_customer_service_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_customer_service_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/customer-service.tsx?taro&type=template&parse=COMPONENT&":
/*!*********************************************************************************!*\
  !*** ./src/components/customer-service.tsx?taro&type=template&parse=COMPONENT& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_customer_service_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=E:/myGitHub/Taro-WeiApp/src!../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./customer-service.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=E:\\myGitHub\\Taro-WeiApp\\src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/customer-service.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_customer_service_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_customer_service_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_customer_service_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_customer_service_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/components/customer-service.tsx","runtime","vendors","common"]]]);