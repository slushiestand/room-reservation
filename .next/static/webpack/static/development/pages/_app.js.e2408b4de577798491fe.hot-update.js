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
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ "./reducers/login.js");
/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check */ "./reducers/check.js");



var appReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  login: _login__WEBPACK_IMPORTED_MODULE_1__["default"],
  check: _check__WEBPACK_IMPORTED_MODULE_2__["default"],
  check3: check3
});
var rootReducer = function rootReducer(state, action) {
  return appReducer(state, action);
};

/***/ })

})
//# sourceMappingURL=_app.js.e2408b4de577798491fe.hot-update.js.map