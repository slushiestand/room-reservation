webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: check2, check3, check4, uncheck, uncheck4, adults, children, submit */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submit", function() { return submit; });
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
    selectValue: selectValue
  };
}
function children(selectValue, room) {
  return {
    type: "NUMBER_CHILDREN_".concat(room),
    selectValue: selectValue
  };
}
function submit(theState) {
  return {
    type: "SUBMIT",
    theState: theState
  };
}

/***/ })

})
//# sourceMappingURL=index.js.6cc61806ef8f4a8bf56a.hot-update.js.map