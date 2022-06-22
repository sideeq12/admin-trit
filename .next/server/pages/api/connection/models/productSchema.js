"use strict";
(() => {
var exports = {};
exports.id = 105;
exports.ids = [105];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 8739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const productSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    product_name: String,
    Description: String,
    price: String,
    prevPrice: String,
    reviewPoint: String,
    reviewCount: String,
    categories: String,
    size: String,
    color: String,
    productCount: String,
    reviews: [
        {
            id: Number,
            message: String,
            sender: String
        }
    ]
});
const Product = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Products") || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Products", productSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8739));
module.exports = __webpack_exports__;

})();