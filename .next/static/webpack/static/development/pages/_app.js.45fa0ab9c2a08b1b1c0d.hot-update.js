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



var appReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  check: _check__WEBPACK_IMPORTED_MODULE_1__["default"],
  occupancy: _occupancy__WEBPACK_IMPORTED_MODULE_2__["default"]
});
var rootReducer = function rootReducer(state, action) {
  return appReducer(state, action);
};

/***/ }),

/***/ "./reducers/occupancy.js":
/*!*******************************!*\
  !*** ./reducers/occupancy.js ***!
  \*******************************/
/*! exports provided: occupancy, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "occupancy", function() { return occupancy; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

var initialState = {
  adults: 0
};
var occupancy = function occupancy() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'NUMBER_ADULTS':
      console.warn("action done");
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        adults: data
      });

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (occupancy);

/***/ })

})
//# sourceMappingURL=_app.js.45fa0ab9c2a08b1b1c0d.hot-update.js.map