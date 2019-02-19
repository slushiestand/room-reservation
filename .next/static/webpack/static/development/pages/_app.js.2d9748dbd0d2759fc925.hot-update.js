webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check */ "./reducers/check.js");
/* harmony import */ var _occupancy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./occupancy */ "./reducers/occupancy.js");
/* harmony import */ var _submit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submit */ "./reducers/submit.js");




var appReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  check: _check__WEBPACK_IMPORTED_MODULE_1__["default"],
  room1: Object(_occupancy__WEBPACK_IMPORTED_MODULE_2__["default"])(1),
  room2: Object(_occupancy__WEBPACK_IMPORTED_MODULE_2__["default"])(2),
  room3: Object(_occupancy__WEBPACK_IMPORTED_MODULE_2__["default"])(3),
  room4: Object(_occupancy__WEBPACK_IMPORTED_MODULE_2__["default"])(4),
  submit: _submit__WEBPACK_IMPORTED_MODULE_3__["default"]
});
var rootReducer = function rootReducer(state, action) {
  return appReducer(state, action);
};

/***/ }),

/***/ "./reducers/submit.js":
/*!****************************!*\
  !*** ./reducers/submit.js ***!
  \****************************/
/*! exports provided: submit, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submit", function() { return submit; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

var submit = function submit() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : prevState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SUBMIT':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        check2: !state.check2
      });

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (submit);

/***/ })

})
//# sourceMappingURL=_app.js.2d9748dbd0d2759fc925.hot-update.js.map