webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/room.js":
/*!****************************!*\
  !*** ./components/room.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Room; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _selectBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectBox */ "./components/selectBox.js");
/* harmony import */ var _checkBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkBox */ "./components/checkBox.js");
/* harmony import */ var _styledBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styledBox */ "./components/styledBox.js");





var _jsxFileName = "C:\\Projects\\room-reservation\\room-reservation\\components\\room.js";





var Container = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "room__Container",
  componentId: "bs834f-0"
})(["display:flex;flex-direction:column;margin-left:20px;background-color:", ";color:", ";font-family:Arial;padding:5px;border-radius:10px;height:100px;"], function (props) {
  return props.checked == true ? '#E7E7E7' : '#DBDBE3';
}, function (props) {
  return props.checked == true ? '#292929' : '#44454A';
});
var TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "room__TitleContainer",
  componentId: "bs834f-1"
})(["display:flex;flex-direction:row;align-items:center;margin-bottom:5px;margin-top:5px;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "room__Title",
  componentId: "bs834f-2"
})(["text-align:left;font-weight:bold;font-size:15px;"]);
var RoomsContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "room__RoomsContainer",
  componentId: "bs834f-3"
})(["display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:", ";color:", ";border-radius:10px;padding:2px;"], function (props) {
  return props.checked == true ? '#FFFFFF' : '#DBDBE3';
}, function (props) {
  return props.checked == true ? '#292929' : '#44454A';
});
var AdultsSection = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "room__AdultsSection",
  componentId: "bs834f-4"
})(["background-color:", ";flex-direction:column;text-align:center;font-size:12px;padding:10px 5px 10px 10px;"], function (props) {
  return props.checked == true ? '#FFFFFF' : '#DBDBE3';
});
var ChildrenSection = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "room__ChildrenSection",
  componentId: "bs834f-5"
})(["background-color:", ";flex-direction:column;text-align:center;font-size:12px;padding:10px 10px 10px 5px;"], function (props) {
  return props.checked == true ? '#FFFFFF' : '#DBDBE3';
});
var UnorderedList = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].ul.withConfig({
  displayName: "room__UnorderedList",
  componentId: "bs834f-6"
})(["margin:0;padding:0;"]);
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].li.withConfig({
  displayName: "room__ListItem",
  componentId: "bs834f-7"
})(["list-style-type:none;"]);

var Room =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Room, _Component);

  function Room() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Room);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Room).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Room, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Container, {
        checked: this.props.checked,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(TitleContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_checkBox__WEBPACK_IMPORTED_MODULE_8__["default"], {
        checked: this.props.checked,
        handleChange: this.props.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "  ", this.props.room, " ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(RoomsContainer, {
        checked: this.props.checked,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(AdultsSection, {
        checked: this.props.checked,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(UnorderedList, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ListItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Adults"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ListItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "(18+)")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_selectBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
        checked: this.props.checked,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ChildrenSection, {
        checked: this.props.checked,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(UnorderedList, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ListItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Children"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ListItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "(0-17)")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_selectBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
        checked: this.props.checked,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }))));
    }
  }]);

  return Room;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.adcf3bd3d9354995982d.hot-update.js.map