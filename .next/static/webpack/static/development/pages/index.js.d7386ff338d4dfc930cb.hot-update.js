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
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "./actions/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Projects\\room-reservation\\room-reservation\\components\\home.js";







var PageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "home__PageContainer",
  componentId: "sc-9487q3-0"
})(["display:flex;flex-direction:row;"]);

var Home = function Home(_ref) {
  var dispatch = _ref.dispatch,
      theState = _ref.theState;
  console.log(theState.check);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_room1__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_room__WEBPACK_IMPORTED_MODULE_4__["default"], {
    room: 'Room 2',
    name: 'box2',
    handleClick: function handleClick() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["check2"])("box2"));
    },
    checked: _this.theState.check.check2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_room__WEBPACK_IMPORTED_MODULE_4__["default"], {
    room: 'Room 3',
    name: 'box3',
    handleClick: function handleClick() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["check3"])("box3"));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_room__WEBPACK_IMPORTED_MODULE_4__["default"], {
    room: 'Room 4',
    name: 'box4',
    handleClick: function handleClick() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["check4"])("box4"));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    theState: state
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Home));

/***/ })

})
//# sourceMappingURL=index.js.d7386ff338d4dfc930cb.hot-update.js.map