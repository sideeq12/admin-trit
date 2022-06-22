"use strict";
(() => {
var exports = {};
exports.id = 353;
exports.ids = [353,250,105];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 4348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const main = async ()=>{
    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);
    console.log("database connected !");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);


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


/***/ }),

/***/ 3216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addProduct)
/* harmony export */ });
/* harmony import */ var _connection_connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4348);
/* harmony import */ var _connection_models_productSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8739);


function addProduct(req, res) {
    (0,_connection_connection__WEBPACK_IMPORTED_MODULE_0__["default"])().catch((err)=>console.log(err)
    );
    const NewProduct = new _connection_models_productSchema__WEBPACK_IMPORTED_MODULE_1__["default"]({
        product_name: "latest shex",
        categories: "Clothes Blouse",
        Description: "this is the latest product updated"
    });
    NewProduct.save().then(()=>res.status(200).json({
            status: "success",
            data: NewProduct
        })
    );
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3216));
module.exports = __webpack_exports__;

})();