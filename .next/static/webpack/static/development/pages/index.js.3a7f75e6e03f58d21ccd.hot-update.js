webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home.js":
/*!****************************!*\
  !*** ./components/home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _room1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./room1 */ "./components/room1.js");
/* harmony import */ var _room__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./room */ "./components/room.js");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/index */ "./actions/index.js");
/* harmony import */ var _actions_check__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/check */ "./actions/check.js");
var _jsxFileName = "C:\\Projects\\room-reservation\\room-reservation\\components\\home.js";







var PageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "home__PageContainer",
  componentId: "sc-9487q3-0"
})(["display:flex;flex-direction:row;"]);
var ReduxTest = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "home__ReduxTest",
  componentId: "sc-9487q3-1"
})([""]);

var Home = function Home(_ref) {
  var dispatch = _ref.dispatch,
      theState = _ref.theState;
  console.log(theState);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_room1__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_room__WEBPACK_IMPORTED_MODULE_4__["default"], {
    room: 'Room 2',
    name: 'box2',
    handleClick: function handleClick() {
      return dispatch(Object(_actions_check__WEBPACK_IMPORTED_MODULE_6__["check"])("box1"));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_room__WEBPACK_IMPORTED_MODULE_4__["default"], {
    room: 'Room 3',
    name: 'box3',
    handleClick: function handleClick() {
      return dispatch(Object(_actions_check__WEBPACK_IMPORTED_MODULE_6__["check"])());
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_room__WEBPACK_IMPORTED_MODULE_4__["default"], {
    room: 'Room 4',
    name: 'box4',
    onClick: function onClick() {
      return dispatch(Object(_actions_check__WEBPACK_IMPORTED_MODULE_6__["check"])());
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReduxTest, {
    onClick: function onClick() {
      return dispatch(Object(_actions_index__WEBPACK_IMPORTED_MODULE_5__["sampleAction"])("test"));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Redux Test"));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    theState: state
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Home));

/***/ })

})
//# sourceMappingURL=index.js.3a7f75e6e03f58d21ccd.hot-update.js.map