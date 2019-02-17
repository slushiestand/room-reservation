webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: check2, check3, check4, uncheck, uncheck4, adults, children */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "check2", function() { return check2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "check3", function() { return check3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "check4", function() { return check4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uncheck", function() { return uncheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uncheck4", function() { return uncheck4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adults", function() { return adults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
function check2() {
  return {
    type: "CHECK_BOX2"
  };
}
function check3() {
  return {
    type: "CHECK_BOX3"
  };
}
function check4() {
  return {
    type: "CHECK_BOX4"
  };
}
function uncheck() {
  return {
    type: "UNCHECK_BOXES34"
  };
}
function uncheck4() {
  return {
    type: "UNCHECK_BOX4"
  };
}
function adults(selectValue, room) {
  return {
    type: "NUMBER_ADULTS_".concat(room),
    selectValue: selectValue,
    room: room
  };
}
function children(selectValue, room) {
  return {
    type: "NUMBER_ADULTS_".concat(room),
    selectValue: selectValue,
    room: room
  };
}

/***/ })

})
//# sourceMappingURL=index.js.3dd85d44f29cf77f2947.hot-update.js.map