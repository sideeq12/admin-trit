"use strict";
(() => {
var exports = {};
exports.id = 397;
exports.ids = [397];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 9035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const AdminSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    username: String,
    email: String,
    password: String
});
const Admin = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Admins") || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Admins", AdminSchema);
console.log("the admin model is", Admin, " and the type is ", typeof Admin);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Admin);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9035));
module.exports = __webpack_exports__;

})();