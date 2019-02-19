webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home.js":
/*!****************************!*\
  !*** ./components/home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _room1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./room1 */ "./components/room1.js");
/* harmony import */ var _room__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./room */ "./components/room.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../actions */ "./actions/index.js");







var _jsxFileName = "C:\\Projects\\room-reservation\\room-reservation\\components\\home.js";






var PageContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].form.withConfig({
  displayName: "home__PageContainer",
  componentId: "sc-9487q3-0"
})(["display:flex;flex-direction:column;"]);
var RoomContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "home__RoomContainer",
  componentId: "sc-9487q3-1"
})(["display:flex;flex-direction:row;"]);
var Submit = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].button.withConfig({
  displayName: "home__Submit",
  componentId: "sc-9487q3-2"
})(["background-color:#C0C0C0;height:30px;width:60px;margin-left:25px;margin-top:25px;"]);

var Home =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "handleClickBox2", function () {
      //check if Room 3 or Room 4 is checked, if they are, a click on Room 2 should uncheck Rooms 3 and 4, if not
      //a click should check Room 2
      if (_this.props.theState.check3 === true || _this.props.theState.check4 === true) {
        _this.props.uncheckBoxes();
      } else _this.props.checkBox2();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "handleClickBox3", function () {
      //check if Room 4 is checked, if yes, a click on Room 3 should uncheck Room 4, if not
      //a click should check Room 3
      if (_this.props.theState.check4 == true) {
        _this.props.uncheckBox4();
      } else _this.props.checkBox3();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "handleSubmit", function (e) {
      _this.props.submitForm(_this.props.theState);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "render",
    value: function render() {
      var theState = this.props.theState;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(PageContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(RoomContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_room1__WEBPACK_IMPORTED_MODULE_10__["default"], {
        room: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_room__WEBPACK_IMPORTED_MODULE_11__["default"], {
        room: 2,
        handleClick: this.handleClickBox2,
        checked: theState.check2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_room__WEBPACK_IMPORTED_MODULE_11__["default"], {
        room: 3,
        handleClick: this.handleClickBox3,
        checked: theState.check3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_room__WEBPACK_IMPORTED_MODULE_11__["default"], {
        room: 4,
        handleClick: this.props.checkBox4,
        checked: theState.check4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Submit, {
        onClick: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, " Submit ")));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    theState: state.check
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    uncheckBoxes: function uncheckBoxes() {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["uncheck"])());
    },
    uncheckBox4: function uncheckBox4() {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["uncheck4"])());
    },
    checkBox2: function checkBox2() {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["check2"])());
    },
    checkBox3: function checkBox3() {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["check3"])());
    },
    checkBox4: function checkBox4() {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["check4"])());
    },
    submitForm: function submitForm(theState) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["submit"])(theState));
    }
  };
}; //set initial state of app by pull from reducer like suggested here: https://stackoverflow.com/questions/52479422/keep-redux-form-values-after-page-reload-without-submit-form


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(Home));

/***/ })

})
//# sourceMappingURL=index.js.f97ce33c469827b7cc80.hot-update.js.map