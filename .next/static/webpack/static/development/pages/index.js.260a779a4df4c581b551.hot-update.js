webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/checkBox.js":
/*!********************************!*\
  !*** ./components/checkBox.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Projects\\room-reservation\\room-reservation\\components\\checkBox.js";



var Input = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.withConfig({
  displayName: "checkBox__Input",
  componentId: "s13tej-0"
})(["&:checked{}"]);

handleChange = function handleChange(e) {
  props.checked;
};

var CheckBox = function CheckBox(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    id: "input",
    type: "checkbox",
    onClick: props.handleClick,
    checked: props.checked,
    onChange: function onChange(e) {
      return _this.handleChange(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckBox);

/***/ })

})
//# sourceMappingURL=index.js.260a779a4df4c581b551.hot-update.js.map