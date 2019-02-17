webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/room.js":
/*!****************************!*\
  !*** ./components/room.js ***!
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _selectBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./selectBox */ "./components/selectBox.js");
/* harmony import */ var _checkBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkBox */ "./components/checkBox.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions */ "./actions/index.js");





var _jsxFileName = "C:\\Projects\\room-reservation\\room-reservation\\components\\room.js";






var Container = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "room__Container",
  componentId: "bs834f-0"
})(["display:flex;flex-direction:column;margin-left:20px;background-color:", ";color:", ";font-family:Arial;padding:5px;border-radius:10px;height:100px;"], function (props) {
  return props.checked == true ? '#E7E7E7' : '#DBDBE3';
}, function (props) {
  return props.checked == true ? '#292929' : '#44454A';
});
var TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "room__TitleContainer",
  componentId: "bs834f-1"
})(["display:flex;flex-direction:row;align-items:center;margin-bottom:5px;margin-top:5px;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "room__Title",
  componentId: "bs834f-2"
})(["text-align:left;font-weight:bold;font-size:15px;"]);
var RoomsContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "room__RoomsContainer",
  componentId: "bs834f-3"
})(["display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:", ";color:", ";border-radius:10px;padding:2px;"], function (props) {
  return props.checked == true ? '#FFFFFF' : '#DBDBE3';
}, function (props) {
  return props.checked == true ? '#292929' : '#44454A';
});
var AdultsSection = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "room__AdultsSection",
  componentId: "bs834f-4"
})(["background-color:", ";flex-direction:column;text-align:center;font-size:12px;padding:10px 5px 10px 10px;"], function (props) {
  return props.checked == true ? '#FFFFFF' : '#DBDBE3';
});
var ChildrenSection = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "room__ChildrenSection",
  componentId: "bs834f-5"
})(["background-color:", ";flex-direction:column;text-align:center;font-size:12px;padding:10px 10px 10px 5px;"], function (props) {
  return props.checked == true ? '#FFFFFF' : '#DBDBE3';
});
var UnorderedList = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].ul.withConfig({
  displayName: "room__UnorderedList",
  componentId: "bs834f-6"
})(["margin:0;padding:0;"]);
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].li.withConfig({
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
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this = this;

      handleChangeAdult = function handleChangeAdult(selectValue) {
        var room = _this.props.room;
        console.warn(selectValue, room);

        _this.props.adultsInRoom(selectValue, room);
      };

      handleChangeChildren = function handleChangeChildren(selectValue) {
        var room = _this.props.room;
        console.warn(selectValue, room);

        _this.props.childrenInRoom(selectValue, room);
      };
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Container, {
        checked: this.props.checked,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(TitleContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_checkBox__WEBPACK_IMPORTED_MODULE_9__["default"], {
        checked: this.props.checked,
        handleChange: this.props.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "  ", this.props.room, " ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(RoomsContainer, {
        checked: this.props.checked,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(AdultsSection, {
        checked: this.props.checked,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(UnorderedList, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ListItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "Adults"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ListItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "(18+)")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_selectBox__WEBPACK_IMPORTED_MODULE_8__["default"], {
        checked: this.props.checked,
        onChange: this.handleChangeAdult,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ChildrenSection, {
        checked: this.props.checked,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(UnorderedList, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ListItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "Children"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ListItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "(0-17)")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_selectBox__WEBPACK_IMPORTED_MODULE_8__["default"], {
        checked: this.props.checked,
        onChange: this.handleChangeChildren,
        children: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }))));
    }
  }]);

  return Room;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    adultsInRoom: function adultsInRoom(selectValue, room) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["adults"])(selectValue, room));
    },
    childrenInRoom: function childrenInRoom(selectValue, room) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["children"])(selectValue, room));
    }
  };
}; //set initial state of app by pull from reducer like suggested here: https://stackoverflow.com/questions/52479422/keep-redux-form-values-after-page-reload-without-submit-form


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(null, mapDispatchToProps)(Room));

/***/ })

})
//# sourceMappingURL=index.js.f70365c15ca8662a05d3.hot-update.js.map