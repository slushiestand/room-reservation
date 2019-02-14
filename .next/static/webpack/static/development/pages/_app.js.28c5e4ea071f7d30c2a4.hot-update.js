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
  check2: false,
  check3: false,
  check4: false
};
var check = function check() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'CHECK_BOX2':
      console.warn("action done");
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        check2: !state.check2
      });

    case 'CHECK_BOX3':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        check3: !state.check3,
        check2: !state.check3
      });

    case 'CHECK_BOX4':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        check4: !state.check4,
        check3: !state.check4,
        check2: !state.check4
      });

    case 'UNCHECK_BOX':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        check2: !state.check2,
        check3: false,
        check4: false
      });

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (check);

/***/ })

})
//# sourceMappingURL=_app.js.28c5e4ea071f7d30c2a4.hot-update.js.map