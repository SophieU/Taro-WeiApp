(wx.webpackJsonp=wx.webpackJsonp||[]).push([[33],{"149":function(t,e,n){t.exports=n.p+"pages/custom-order/lists.wxml"},"229":function(t,e,n){"use strict";n.r(e);n(230);var a=n(86);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r)},"230":function(t,e,n){"use strict";n(149)},"231":function(t,e,n){},"30":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var N=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var n=[],a=!0,r=!1,o=void 0;try{for(var i,s=t[Symbol.iterator]();!(a=(i=s.next()).done)&&(n.push(i.value),!e||n.length!==e);a=!0);}catch(t){r=!0,o=t}finally{try{!a&&s.return&&s.return()}finally{if(r)throw o}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t};function defineProperties(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var r,o,E=n(0),i=function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}(E),s=n(150),u=n(7);function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}n(231);var c=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(Lists,E.Component),a(Lists,[{"key":"_constructor","value":function _constructor(){(function get(t,e,n){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,e);if(void 0===a){var r=Object.getPrototypeOf(t);return null===r?void 0:get(r,e,n)}if("value"in a)return a.value;var o=a.get;return void 0!==o?o.call(n):void 0})(Lists.prototype.__proto__||Object.getPrototypeOf(Lists.prototype),"_constructor",this).call(this),this.state={"stateMap":["STAY_RECEIPT","STAY_PAY","STAY_COMMENT","FINISH"],"current":0,"lists":{"STAY_RECEIPT":[],"STAY_PAY":[],"STAY_COMMENT":[],"FINISH":[]},"pageSize":10,"pageNo":{"STAY_RECEIPT":1,"STAY_PAY":1,"STAY_COMMENT":1,"FINISH":1},"hasNextPage":{"STAY_RECEIPT":!0,"STAY_PAY":!0,"STAY_COMMENT":!0,"FINISH":!0},"pageState":"STAY_RECEIPT"},this.$$refs=new i.default.RefsArray}},{"key":"componentWillMount","value":function componentWillMount(){this.getOrderLists()}},{"key":"onPullDownRefresh","value":function onPullDownRefresh(){var t=this;this.setState({"lists":{"STAY_RECEIPT":[],"STAY_PAY":[],"STAY_COMMENT":[],"FINISH":[]},"pageNo":{"STAY_RECEIPT":1,"STAY_PAY":1,"STAY_COMMENT":1,"FINISH":1},"hasNextPage":{"STAY_RECEIPT":!0,"STAY_PAY":!0,"STAY_COMMENT":!0,"FINISH":!0}},function(){t.getOrderLists()})}},{"key":"getOrderLists","value":function getOrderLists(){var e=this,o=this.state.pageState;if(this.state.hasNextPage[o]){i.default.showLoading({"title":"数据加载中"});var t={"pageNo":this.state.pageNo[o],"pageSize":this.state.pageSize,"repairOrderState":this.state.pageState};(0,s.getLists)(t).then(function(t){if(i.default.hideLoading(),i.default.stopPullDownRefresh(),0===t.data.code){var r=t.data.data;e.setState(function(t){var e=(0,u.simpleClone)(t.hasNextPage),n=(0,u.simpleClone)(t.pageNo),a=(0,u.simpleClone)(t.lists);return r.hasNextPage&&(n[o]=r.nextPage),e[o]=r.hasNextPage,a[o]=a[o].concat(r.list),{"lists":a,"pageNo":n,"hasNextPage":e}})}})}else i.default.showToast({"title":"没有更多了","icon":"none"})}},{"key":"onReachBottom","value":function onReachBottom(){this.getOrderLists()}},{"key":"_createData","value":function _createData(t,e,n){this.__state=t||this.state||{},this.__props=e||this.props||{};var a=this.$prefix,r=(0,E.genCompid)(a+"$compid__64"),o=N(r,2),i=o[0],s=o[1],u=(0,E.genCompid)(a+"$compid__65"),c=N(u,2),_=c[0],p=c[1],l=(0,E.genCompid)(a+"$compid__66"),f=N(l,2),d=f[0],h=f[1],g=(0,E.genCompid)(a+"$compid__67"),S=N(g,2),m=S[0],T=S[1],A=(0,E.genCompid)(a+"$compid__68"),y=N(A,2),P=y[0],v=y[1],Y=this._createListItemData(a+"fizzzzzzzz")(this.__state.lists.STAY_RECEIPT),z=this._createListItemData(a+"fjzzzzzzzz")(this.__state.lists.STAY_PAY),C=this._createListItemData(a+"gazzzzzzzz")(this.__state.lists.STAY_COMMENT),I=this._createListItemData(a+"gbzzzzzzzz")(this.__state.lists.FINISH);return E.propsManager.set({"current":this.__state.current,"tabList":[{"title":"待处理"},{"title":"待付款"},{"title":"待评价"},{"title":"已完成"}],"onClick":this.handleTab},s,i),E.propsManager.set({"current":this.__state.current,"index":0},p,_),E.propsManager.set({"current":this.__state.current,"index":1},h,d),E.propsManager.set({"current":this.__state.current,"index":2},T,m),E.propsManager.set({"current":this.__state.current,"index":3},v,P),Object.assign(this.__state,{"$compid__64":s,"$compid__65":p,"$compid__66":h,"$compid__67":T,"$compid__68":v,"anonymousState__temp":Y,"anonymousState__temp2":z,"anonymousState__temp3":C,"anonymousState__temp4":I}),this.__state}},{"key":"_createListItemData","value":function _createListItemData(i){return function(t){return{"loopArray49":0<t.length?t.map(function(t,e){t={"$original":(0,E.internal_get_original)(t)};var n=(0,E.genCompid)(i+"gczzzzzzzz"+e,!0),a=N(n,2),r=a[0],o=a[1];return E.propsManager.set({"state":t.$original.orderStateName},o,r),{"$compid__69":o,"$original":t.$original}}):[],"lists":t}}}}]),o=r=Lists,r.$$events=[],r.$$componentPath="pages/custom-order/lists",o);function Lists(){var t,e,n;!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Lists);for(var a=arguments.length,r=Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n=_possibleConstructorReturn(this,(t=Lists.__proto__||Object.getPrototypeOf(Lists)).call.apply(t,[this].concat(r)))).$usedState=["$compid__64","$compid__65","$compid__66","$compid__67","$compid__68","anonymousState__temp","anonymousState__temp2","anonymousState__temp3","anonymousState__temp4","stateMap","current","lists","pageSize","pageNo","hasNextPage","pageState"],n.config={"navigationBarTitleText":"报修记录","navigationStyle":"default"},n.handleTab=function(e){n.setState(function(t){return{"current":e,"hasNextPage":{"STAY_RECEIPT":!0,"STAY_PAY":!0,"STAY_COMMENT":!0,"FINISH":!0},"pageNo":{"STAY_RECEIPT":1,"STAY_PAY":1,"STAY_COMMENT":1,"FINISH":1},"lists":{"STAY_RECEIPT":[],"STAY_PAY":[],"STAY_COMMENT":[],"FINISH":[]},"pageState":t.stateMap[e]}},function(){n.getOrderLists()})},n.customComponents=["AtTabs","AtTabsPane","StateText"],_possibleConstructorReturn(n,e)}e.default=c,Component(n(0).default.createComponent(c,!0))},"86":function(t,e,n){"use strict";n.r(e);var a=n(30),r=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e.default=r.a}},[[229,0,1,2]]]);