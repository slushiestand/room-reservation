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
  room1: Object(_occupancy__WEBPACK_IMPORTED_MODULE_2__["default"])('1'),
  room2: Object(_occupancy__WEBPACK_IMPORTED_MODULE_2__["default"])(2),
  room3: Object(_occupancy__WEBPACK_IMPORTED_MODULE_2__["default"])(3),
  room4: Object(_occupancy__WEBPACK_IMPORTED_MODULE_2__["default"])(4)
});
var rootReducer = function rootReducer(state, action) {
  return appReducer(state, action);
};

/***/ })

})
//# sourceMappingURL=_app.js.d47240c03e3e6cf0a43f.hot-update.js.map