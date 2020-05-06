(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/custom-order/detail"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/custom-order/detail.tsx?taro&type=script&parse=PAGE&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/custom-order/detail.tsx?taro&type=script&parse=PAGE& ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _orderApis = __webpack_require__(/*! ./order-apis */ "./src/pages/custom-order/order-apis.ts");

var _orderApi = __webpack_require__(/*! ../order/order-api */ "./src/pages/order/order-api.ts");

var _common = __webpack_require__(/*! ../../utils/common */ "./src/utils/common.ts");

__webpack_require__(/*! ./detail.scss */ "./src/pages/custom-order/detail.scss");

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Lists.__proto__ || Object.getPrototypeOf(Lists)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp2", "anonymousState__temp5", "loopArray68", "loopArray69", "$compid__94", "$compid__95", "$compid__96", "$compid__97", "$compid__98", "$compid__99", "anonymousState__temp", "id", "cancelReasonId", "orderDetail", "cancelReasonLists", "reasonModal", "baseInfo", "repairOrderOfferPlanVoList", "dispatchInfo", "repairOrderAmountVos", "waitPay", "payed", "commentInfo", "currentComment", "commentNowModal", "commentOptions", "commentActiveTags", "commentDetail", "commentDetailModal"], _this.config = {
      navigationBarTitleText: '报修详情',
      navigationStyle: 'default'
    }, _this.getCommentLists = function () {
      (0, _orderApis.getCommentOption)().then(function (res) {
        if (res.data.code === 0) {
          _this.setState({
            commentOptions: res.data.data
          });
        }
      });
    }, _this.getOrderDetail = function () {
      var id = _this.state.id;
      (0, _orderApis.getDetail)(id).then(function (res) {
        if (res.data.code === 0) {
          var data = res.data.data;
          var waitPay = 0;
          var payed = 0;
          data.repairOrderAmountVos.forEach(function (item) {
            if (item.type === 'STAY_PAY_AMOUNT') {
              waitPay = item.amount;
            }
            if (item.type === 'ALREADY_PAY_AMOUNT') {
              payed = item.amount;
            }
          });
          _this.setState({
            orderDetail: res.data.data,
            baseInfo: data.baseInfo,
            repairOrderOfferPlanVoList: data.repairOrderOfferPlanVoList,
            dispatchInfo: data.dispatchInfo,
            repairOrderAmountVos: data.repairOrderAmountVos,
            waitPay: waitPay,
            payed: payed,
            commentInfo: data.commentInfo,
            commentDetail: data.commentInfo.comment ? [data.commentInfo.comment.comment] : []
          });
        }
      });
    }, _this.startPay = function () {
      var params = {
        "orderIds": [_this.state.baseInfo.id],
        "payBusinessType": "W_REPAIR_ORDER",
        "payCode": "WX_XCX"
      };
      (0, _orderApi.getWxPay)(params).then(function (res) {
        if (res.data.code === 0) {
          var data = res.data.data;
          console.log('支付信息', data);
          _taroWeapp2.default.requestPayment(_extends({
            success: function success() {
              _this.orderSuccess();
            },
            fail: function fail(res) {
              console.log('接口调用失败');
              console.log('支付失败');
            }
          }, data));
        } else {
          _taroWeapp2.default.showToast({
            title: res.data.msg,
            icon: 'none'
          });
        }
      });
    }, _this.orderSuccess = function () {
      _taroWeapp2.default.showModal({
        content: '订单支付成功，可在【我的】-【报修订单】中查看',
        confirmText: '查看订单',
        cancelText: '回到首页',
        success: function success(res) {
          if (res.confirm) {
            _taroWeapp2.default.reLaunch({
              url: '/pages/mine/mine'
            });
          } else {
            _taroWeapp2.default.reLaunch({
              url: '/pages/index/index'
            });
          }
        }
      });
    }, _this.getCancelReason = function () {
      (0, _orderApis.cancelReason)().then(function (res) {
        if (res.data.code === 0) {
          var data = res.data.data;
          _this.setState({
            cancelReasonLists: data
          });
        }
      });
    }, _this.handleRadioChange = function (value) {
      _this.setState({
        cancelReasonId: value
      });
    }, _this.handleCancelModal = function () {
      _this.setState(function (prevState) {
        return {
          reasonModal: !prevState.reasonModal,
          cancelReasonId: ''
        };
      });
    }, _this.handleConfirmModal = function () {
      var params = {
        repairOrderId: _this.state.id,
        cancelReasonId: _this.state.cancelReasonId
      };
      (0, _orderApis.cancelOrder)(params).then(function (res) {
        if (res.data.code === 0) {
          _taroWeapp2.default.showToast({
            title: '订单取消成功',
            icon: 'none'
          });
          _taroWeapp2.default.navigateBack({ delta: -1 });
        } else {
          _taroWeapp2.default.showToast({
            title: '订单取消失败：' + res.data.msg,
            icon: 'none'
          });
        }
      });
    }, _this.call = function (phone) {
      _taroWeapp2.default.makePhoneCall({
        phoneNumber: phone
      });
    }, _this.clickCommentTag = function (value) {
      var commentActiveTags = JSON.parse(JSON.stringify(_this.state.commentActiveTags));
      if (commentActiveTags.indexOf(value.name) <= -1) {
        commentActiveTags.push(value.name);
      } else {
        commentActiveTags.splice(commentActiveTags.indexOf(value.name), 1);
      }
      _this.setState({
        commentActiveTags: commentActiveTags
      });
    }, _this.handleCommentTab = function (v) {
      _this.setState({
        commentActiveTags: [],
        currentComment: v
      });
    }, _this.cancelComment = function () {
      _this.setState({
        commentNowModal: false,
        commentActiveTags: []
      });
    }, _this.confirmComment = function () {
      var id = _this.state.id;
      var currentComment = _this.state.currentComment;
      var confirmCommentLists = (0, _common.simpleClone)(_this.state.commentOptions[currentComment]);
      var commentActiveTags = _this.state.commentActiveTags;
      confirmCommentLists.children = confirmCommentLists.children.filter(function (item) {
        return commentActiveTags.indexOf(item.id) > -1;
      });
      var params = confirmCommentLists;
      (0, _orderApis.submitComment)(id, params).then(function (res) {
        if (res.data.code === 0) {
          _taroWeapp2.default.showToast({
            title: '评价成功',
            icon: 'none'
          });
          setTimeout(function () {
            _taroWeapp2.default.navigateBack({ delta: -1 });
          }, 1500);
        }
      });
    }, _this.customComponents = ["AtModal", "AtModalHeader", "AtModalContent", "AtRadio", "AtModalAction", "AtTabs", "AtTabsPane", "AtTag"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Lists, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Lists.prototype.__proto__ || Object.getPrototypeOf(Lists.prototype), "_constructor", this).call(this);

      this.state = {
        id: '',
        cancelReasonId: '',
        orderDetail: {},
        cancelReasonLists: [],
        reasonModal: false,
        baseInfo: { orderState: 'ASSIGNED' },
        repairOrderOfferPlanVoList: [],
        dispatchInfo: null,
        repairOrderAmountVos: [],
        waitPay: 0,
        payed: 0,
        commentInfo: {},
        currentComment: 0,
        commentNowModal: false,
        commentOptions: [],
        commentActiveTags: [],
        commentDetail: [],
        commentDetailModal: false
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      var id = this.$router.params.id;
      this.setState({
        id: id
      }, function () {
        _this2.getOrderDetail();
        _this2.getCancelReason();
        _this2.getCommentLists();
      });
    }
  }, {
    key: "_createData",
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

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__96"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__96 = _genCompid6[0],
          $compid__96 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__97"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__97 = _genCompid8[0],
          $compid__97 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__98"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__98 = _genCompid10[0],
          $compid__98 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__99"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__99 = _genCompid12[0],
          $compid__99 = _genCompid12[1];

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

      var anonymousState__temp = this._createFootData(__prefix + "hdzzzzzzzz")();

      this.anonymousFunc0 = function () {
        return _this3.call(_this3.__state.dispatchInfo.masterPhone);
      };

      var anonymousState__temp2 = this.__state.commentOptions.map(function (item) {
        return { title: item.name };
      });

      var anonymousState__temp5 = this.__state.commentDetail.map(function (item) {
        return { title: item.name };
      });

      this.anonymousFunc1 = function () {
        return console.log('111');
      };

      this.anonymousFunc2 = function () {
        return _this3.setState({ commentDetailModal: false });
      };

      var loopArray68 = this.__state.commentOptions.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $anonymousCallee__8 = item.$original.children.map(function (child, _anonIdx5) {
          child = {
            $original: (0, _taroWeapp.internal_get_original)(child)
          };

          var commentActiveTags = _this3.__state.commentActiveTags;
          var $loopState__temp4 = commentActiveTags.indexOf(child.$original.id) > -1;

          var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + "hezzzzzzzz" + index + "-" + _anonIdx5, true),
              _genCompid14 = _slicedToArray(_genCompid13, 2),
              $prevCompid__90 = _genCompid14[0],
              $compid__90 = _genCompid14[1];

          _taroWeapp.propsManager.set({
            "className": "tag-item",
            "name": child.$original.id,
            "active": $loopState__temp4,
            "type": "primary",
            "onClick": _this3.clickCommentTag
          }, $compid__90, $prevCompid__90);
          return {
            $loopState__temp4: $loopState__temp4,
            $compid__90: $compid__90,
            $original: child.$original
          };
        });

        var _genCompid15 = (0, _taroWeapp.genCompid)(__prefix + "hfzzzzzzzz" + index, true),
            _genCompid16 = _slicedToArray(_genCompid15, 2),
            $prevCompid__91 = _genCompid16[0],
            $compid__91 = _genCompid16[1];

        _taroWeapp.propsManager.set({
          "className": "comment-pane",
          "current": _this3.__state.currentComment,
          "index": index
        }, $compid__91, $prevCompid__91);
        return {
          $anonymousCallee__8: $anonymousCallee__8,
          $compid__91: $compid__91,
          $original: item.$original
        };
      });

      var loopArray69 = this.__state.commentDetail.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $anonymousCallee__9 = item.$original.children.map(function (child, _anonIdx7) {
          child = {
            $original: (0, _taroWeapp.internal_get_original)(child)
          };

          var _genCompid17 = (0, _taroWeapp.genCompid)(__prefix + "hgzzzzzzzz" + index + "-" + _anonIdx7, true),
              _genCompid18 = _slicedToArray(_genCompid17, 2),
              $prevCompid__92 = _genCompid18[0],
              $compid__92 = _genCompid18[1];

          _taroWeapp.propsManager.set({
            "className": "tag-item",
            "name": child.$original.id,
            "active": true,
            "type": "primary"
          }, $compid__92, $prevCompid__92);
          return {
            $compid__92: $compid__92,
            $original: child.$original
          };
        });

        var _genCompid19 = (0, _taroWeapp.genCompid)(__prefix + "hhzzzzzzzz" + index, true),
            _genCompid20 = _slicedToArray(_genCompid19, 2),
            $prevCompid__93 = _genCompid20[0],
            $compid__93 = _genCompid20[1];

        _taroWeapp.propsManager.set({
          "className": "comment-pane",
          "current": _this3.__state.currentComment,
          "index": index
        }, $compid__93, $prevCompid__93);
        return {
          $anonymousCallee__9: $anonymousCallee__9,
          $compid__93: $compid__93,
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
      _taroWeapp.propsManager.set({
        "className": "comment-modal",
        "isOpened": this.__state.commentNowModal
      }, $compid__96, $prevCompid__96);
      _taroWeapp.propsManager.set({
        "animated": false,
        "current": this.__state.currentComment,
        "tabList": anonymousState__temp2,
        "onClick": this.handleCommentTab.bind(this)
      }, $compid__97, $prevCompid__97);
      _taroWeapp.propsManager.set({
        "isOpened": this.__state.commentDetailModal
      }, $compid__98, $prevCompid__98);
      _taroWeapp.propsManager.set({
        "animated": false,
        "current": 0,
        "tabList": anonymousState__temp5,
        "onClick": this.anonymousFunc1
      }, $compid__99, $prevCompid__99);
      Object.assign(this.__state, {
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp5: anonymousState__temp5,
        loopArray68: loopArray68,
        loopArray69: loopArray69,
        $compid__94: $compid__94,
        $compid__95: $compid__95,
        $compid__96: $compid__96,
        $compid__97: $compid__97,
        $compid__98: $compid__98,
        $compid__99: $compid__99,
        anonymousState__temp: anonymousState__temp
      });
      return this.__state;
    }
  }, {
    key: "_createFootData",
    value: function _createFootData(_$uid) {
      var _this4 = this;

      return function () {
        var _$anonymousState__temp, _$anonymousState__temp2;

        var _state = _this4.state,
            dispatchInfo = _state.dispatchInfo,
            waitPay = _state.waitPay,
            payed = _state.payed,
            baseInfo = _state.baseInfo,
            commentInfo = _state.commentInfo;


        if (baseInfo.orderState === 'STAY_PAY') {
          _$anonymousState__temp = __webpack_require__(/*! ../../assets/imgs/tmp/cus-ser.png */ "./src/assets/imgs/tmp/cus-ser.png");

          _this4.anonymousFunc3 = function () {
            return _this4.call(baseInfo.stationPhone);
          };

          _$anonymousState__temp2 = __webpack_require__(/*! ../../assets/imgs/tmp/staff.png */ "./src/assets/imgs/tmp/staff.png");

          _this4.anonymousFunc4 = function () {
            return _this4.call(dispatchInfo.masterPhone);
          };
        } else if (baseInfo.orderState === 'ASSIGNED') {
          _this4.anonymousFunc5 = function () {
            return _this4.call(baseInfo.stationPhone);
          };
        } else if (baseInfo.orderState === 'WAIT_DOOR') {
          _this4.anonymousFunc6 = function () {
            return _this4.call(dispatchInfo.masterPhone);
          };
        } else if (baseInfo.orderState === 'CANCEL') {
          return null;
        } else if (baseInfo.orderState === 'FINISH') {
          _this4.anonymousFunc7 = function () {
            return _this4.setState({ commentNowModal: true });
          };

          _this4.anonymousFunc8 = function () {
            return _this4.setState({ commentDetailModal: true });
          };
        }

        return {
          _$anonymousState__temp: _$anonymousState__temp,
          _$anonymousState__temp2: _$anonymousState__temp2,
          waitPay: waitPay,
          baseInfo: baseInfo,
          payed: payed,
          commentInfo: commentInfo
        };
      };
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
  }, {
    key: "anonymousFunc3",
    value: function anonymousFunc3(e) {
      ;
    }
  }, {
    key: "anonymousFunc4",
    value: function anonymousFunc4(e) {
      ;
    }
  }, {
    key: "anonymousFunc5",
    value: function anonymousFunc5(e) {
      ;
    }
  }, {
    key: "anonymousFunc6",
    value: function anonymousFunc6(e) {
      ;
    }
  }, {
    key: "anonymousFunc7",
    value: function anonymousFunc7(e) {
      ;
    }
  }, {
    key: "anonymousFunc8",
    value: function anonymousFunc8(e) {
      ;
    }
  }]);

  return Lists;
}(_taroWeapp.Component), _class.$$events = ["anonymousFunc0", "handleCancelModal", "handleConfirmModal", "cancelComment", "confirmComment", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "startPay", "handleCancelModal", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8"], _class.$$componentPath = "pages/custom-order/detail", _temp2);
exports.default = Lists;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(Lists, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=E:\\myGitHub\\Taro-WeiApp\\src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/custom-order/detail.tsx?taro&type=template&parse=PAGE&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=E:/myGitHub/Taro-WeiApp/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/custom-order/detail.tsx?taro&type=template&parse=PAGE& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/custom-order/detail.wxml";

/***/ }),

/***/ "./src/pages/custom-order/detail.scss":
/*!********************************************!*\
  !*** ./src/pages/custom-order/detail.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/custom-order/detail.tsx":
/*!*******************************************!*\
  !*** ./src/pages/custom-order/detail.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.tsx?taro&type=template&parse=PAGE& */ "./src/pages/custom-order/detail.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _detail_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.tsx?taro&type=script&parse=PAGE& */ "./src/pages/custom-order/detail.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _detail_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _detail_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/custom-order/detail.tsx?taro&type=script&parse=PAGE&":
/*!************************************************************************!*\
  !*** ./src/pages/custom-order/detail.tsx?taro&type=script&parse=PAGE& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detail_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./detail.tsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/custom-order/detail.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detail_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detail_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detail_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detail_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detail_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/custom-order/detail.tsx?taro&type=template&parse=PAGE&":
/*!**************************************************************************!*\
  !*** ./src/pages/custom-order/detail.tsx?taro&type=template&parse=PAGE& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detail_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=E:/myGitHub/Taro-WeiApp/src!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./detail.tsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=E:\\myGitHub\\Taro-WeiApp\\src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/custom-order/detail.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detail_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detail_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detail_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_E_myGitHub_Taro_WeiApp_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detail_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/custom-order/detail.tsx","runtime","vendors","common"]]]);