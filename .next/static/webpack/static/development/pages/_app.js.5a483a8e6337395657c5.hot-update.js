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
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
        check: !check
      }, state);

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (check);

/***/ })

})
//# sourceMappingURL=_app.js.5a483a8e6337395657c5.hot-update.js.map