webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/styledBox.js":
/*!*********************************!*\
  !*** ./components/styledBox.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "C:\\Projects\\room-reservation\\room-reservation\\components\\styledBox.js";


var HiddenCheckbox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input.attrs({
  type: 'checkbox'
}).withConfig({
  displayName: "styledBox__HiddenCheckbox",
  componentId: "im2psu-0"
})(["border:0;clip:rect(0 0 0 0);clippath:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px;"]);
var StyledCheckbox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledBox__StyledCheckbox",
  componentId: "im2psu-1"
})(["display:inline-block;width:16px;height:16px;background:", " border-radius:3px;transition:all 150ms;", ":focus + &{box-shadow:0 0 0 3px pink;}", "{visibility:", "}"], function (props) {
  return props.checked ? 'salmon' : 'papayawhip';
}, HiddenCheckbox, Icon, function (props) {
  return props.checked ? 'visible' : 'hidden';
});
var CheckboxContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledBox__CheckboxContainer",
  componentId: "im2psu-2"
})([""]);
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].svg.withConfig({
  displayName: "styledBox__Icon",
  componentId: "im2psu-3"
})(["fill:none;stroke:white;stroke-width:2px;"]);

var StyledBox = function StyledBox(_ref) {
  var className = _ref.className,
      checked = _ref.checked,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["className", "checked"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CheckboxContainer, {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HiddenCheckbox, {
    checked: props.checked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledCheckbox, {
    checked: props.checked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon, {
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("polyline", {
    points: "20 6 9 17 4 12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (StyledBox);

/***/ })

})
//# sourceMappingURL=index.js.86d4a1da2e2ef47629ad.hot-update.js.map