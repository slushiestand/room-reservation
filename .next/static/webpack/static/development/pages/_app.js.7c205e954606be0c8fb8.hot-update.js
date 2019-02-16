webpackHotUpdate("static\\development\\pages\\_app.js",{

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
  adults: 0,
  children: 0
};
var occupancy = function occupancy() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var selectValue = arguments.length > 2 ? arguments[2] : undefined;

  switch (action.type) {
    case 'NUMBER_ADULTS':
      console.warn("action done");
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        adults: selectValue
      });

    case 'NUMBER_CHILDREN':
      console.warn("action done");
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        children: selectValue
      });

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (occupancy);

/***/ })

})
//# sourceMappingURL=_app.js.7c205e954606be0c8fb8.hot-update.js.map