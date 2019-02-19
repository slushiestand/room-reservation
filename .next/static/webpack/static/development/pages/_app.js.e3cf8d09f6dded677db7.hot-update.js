webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/redux-persist/es/constants.js":
false,

/***/ "./node_modules/redux-persist/es/createMigrate.js":
false,

/***/ "./node_modules/redux-persist/es/createPersistoid.js":
false,

/***/ "./node_modules/redux-persist/es/createTransform.js":
false,

/***/ "./node_modules/redux-persist/es/getStoredState.js":
false,

/***/ "./node_modules/redux-persist/es/index.js":
false,

/***/ "./node_modules/redux-persist/es/persistCombineReducers.js":
false,

/***/ "./node_modules/redux-persist/es/persistReducer.js":
false,

/***/ "./node_modules/redux-persist/es/persistStore.js":
false,

/***/ "./node_modules/redux-persist/es/purgeStoredState.js":
false,

/***/ "./node_modules/redux-persist/es/stateReconciler/autoMergeLevel1.js":
false,

/***/ "./node_modules/redux-persist/es/stateReconciler/autoMergeLevel2.js":
false,

/***/ "./node_modules/redux-persist/lib/storage/createWebStorage.js":
false,

/***/ "./node_modules/redux-persist/lib/storage/getStorage.js":
false,

/***/ "./node_modules/redux-persist/lib/storage/index.js":
false,

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./reducers/index.js");
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middleware */ "./middleware/index.js");



function initializeStore(initialState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_1__["rootReducer"], initialState, _middleware__WEBPACK_IMPORTED_MODULE_2__["default"]);
}

/***/ })

})
//# sourceMappingURL=_app.js.e3cf8d09f6dded677db7.hot-update.js.map