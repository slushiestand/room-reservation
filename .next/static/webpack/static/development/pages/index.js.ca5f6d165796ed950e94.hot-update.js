webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/selectBox.js":
/*!*********************************!*\
  !*** ./components/selectBox.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Projects\\room-reservation\\room-reservation\\components\\selectBox.js";



var SelectBox = function SelectBox(props) {
  var handleChange = function handleChange(e) {
    var selectValue = e.target.value;

    if (props.children === true) {
      return props.onChangeChildren(selectValue);
    } else return props.onChangeAdults(selectValue);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    onChange: _this.handleChange,
    disabled: props.checked == false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "1"), props.children === true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "2") : null);
};

/* harmony default export */ __webpack_exports__["default"] = (SelectBox);

/***/ })

})
//# sourceMappingURL=index.js.ca5f6d165796ed950e94.hot-update.js.map