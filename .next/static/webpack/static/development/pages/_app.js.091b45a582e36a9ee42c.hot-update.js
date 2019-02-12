webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./reducers/check.js":
/*!***************************!*\
  !*** ./reducers/check.js ***!
  \***************************/
/*! exports provided: check, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "check", function() { return check; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

var initialState = {
  check: false
};
var check = function check() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'CHECK_BOX':
      console.warn("action done");
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
        check: true,
        id: action.id,
        text: action.text
      }, state);

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (check);

/***/ })

})
//# sourceMappingURL=_app.js.091b45a582e36a9ee42c.hot-update.js.map