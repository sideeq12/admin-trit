"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/productAdd";
exports.ids = ["pages/api/productAdd"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./pages/api/connection/connection.ts":
/*!********************************************!*\
  !*** ./pages/api/connection/connection.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst main = async ()=>{\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n    console.log(\"database connected !\");\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29ubmVjdGlvbi9jb25uZWN0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxJQUFJLEdBQUcsVUFBVTtJQUNuQixNQUFNRCx1REFBZ0IsQ0FBQ0csT0FBTyxDQUFDQyxHQUFHLENBQUNDLFdBQVcsQ0FBVztJQUN6REMsT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7Q0FDdEM7QUFDRCxpRUFBZU4sSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlfdHJpdGV6Ly4vcGFnZXMvYXBpL2Nvbm5lY3Rpb24vY29ubmVjdGlvbi50cz8wN2NkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgbWFpbiA9IGFzeW5jICgpPT57XG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSBhcyBzdHJpbmcpXG4gICAgY29uc29sZS5sb2coXCJkYXRhYmFzZSBjb25uZWN0ZWQgIVwiKVxufVxuZXhwb3J0IGRlZmF1bHQgbWFpbjsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJtYWluIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/connection/connection.ts\n");

/***/ }),

/***/ "(api)/./pages/api/connection/models/productSchema.ts":
/*!******************************************************!*\
  !*** ./pages/api/connection/models/productSchema.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst productSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    product_name: String,\n    Description: String,\n    price: String,\n    prevPrice: String,\n    reviewPoint: String,\n    reviewCount: String,\n    categories: String,\n    size: String,\n    color: String,\n    productCount: String,\n    reviews: [\n        {\n            id: Number,\n            message: String,\n            sender: String\n        }\n    ]\n});\nconst Product = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Products\") || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Products\", productSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29ubmVjdGlvbi9tb2RlbHMvcHJvZHVjdFNjaGVtYS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFL0IsTUFBTUMsYUFBYSxHQUFHLElBQUlELHdEQUFlLENBQUM7SUFDdENHLFlBQVksRUFBR0MsTUFBTTtJQUNyQkMsV0FBVyxFQUFHRCxNQUFNO0lBQ3BCRSxLQUFLLEVBQUdGLE1BQU07SUFDZEcsU0FBUyxFQUFHSCxNQUFNO0lBQ2xCSSxXQUFXLEVBQUdKLE1BQU07SUFDcEJLLFdBQVcsRUFBR0wsTUFBTTtJQUNwQk0sVUFBVSxFQUFHTixNQUFNO0lBQ25CTyxJQUFJLEVBQUdQLE1BQU07SUFDYlEsS0FBSyxFQUFHUixNQUFNO0lBQ2RTLFlBQVksRUFBR1QsTUFBTTtJQUNyQlUsT0FBTyxFQUFHO1FBQ047WUFDSUMsRUFBRSxFQUFHQyxNQUFNO1lBQ1hDLE9BQU8sRUFBR2IsTUFBTTtZQUNoQmMsTUFBTSxFQUFHZCxNQUFNO1NBQ2xCO0tBQ0o7Q0FDSixDQUFDO0FBRUYsTUFBTWUsT0FBTyxHQUFHbkIscURBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSUEscURBQWMsQ0FBQyxVQUFVLEVBQUVDLGFBQWEsQ0FBQztBQUV2RixpRUFBZWtCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215X3RyaXRlei8uL3BhZ2VzL2FwaS9jb25uZWN0aW9uL21vZGVscy9wcm9kdWN0U2NoZW1hLnRzP2JiZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiXG5cbmNvbnN0IHByb2R1Y3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICBwcm9kdWN0X25hbWUgOiBTdHJpbmcsXG4gICAgRGVzY3JpcHRpb24gOiBTdHJpbmcsXG4gICAgcHJpY2UgOiBTdHJpbmcsXG4gICAgcHJldlByaWNlIDogU3RyaW5nLCBcbiAgICByZXZpZXdQb2ludCA6IFN0cmluZyxcbiAgICByZXZpZXdDb3VudCA6IFN0cmluZyxcbiAgICBjYXRlZ29yaWVzIDogU3RyaW5nLFxuICAgIHNpemUgOiBTdHJpbmcsXG4gICAgY29sb3IgOiBTdHJpbmcsXG4gICAgcHJvZHVjdENvdW50IDogU3RyaW5nLFxuICAgIHJldmlld3MgOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkIDogTnVtYmVyLFxuICAgICAgICAgICAgbWVzc2FnZSA6IFN0cmluZyxcbiAgICAgICAgICAgIHNlbmRlciA6IFN0cmluZ1xuICAgICAgICB9XG4gICAgXVxufSlcblxuY29uc3QgUHJvZHVjdCA9IG1vbmdvb3NlLm1vZGVsKFwiUHJvZHVjdHNcIikgfHwgbW9uZ29vc2UubW9kZWwoXCJQcm9kdWN0c1wiLCBwcm9kdWN0U2NoZW1hKVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0OyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInByb2R1Y3RTY2hlbWEiLCJTY2hlbWEiLCJwcm9kdWN0X25hbWUiLCJTdHJpbmciLCJEZXNjcmlwdGlvbiIsInByaWNlIiwicHJldlByaWNlIiwicmV2aWV3UG9pbnQiLCJyZXZpZXdDb3VudCIsImNhdGVnb3JpZXMiLCJzaXplIiwiY29sb3IiLCJwcm9kdWN0Q291bnQiLCJyZXZpZXdzIiwiaWQiLCJOdW1iZXIiLCJtZXNzYWdlIiwic2VuZGVyIiwiUHJvZHVjdCIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/connection/models/productSchema.ts\n");

/***/ }),

/***/ "(api)/./pages/api/productAdd.ts":
/*!*********************************!*\
  !*** ./pages/api/productAdd.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addProduct)\n/* harmony export */ });\n/* harmony import */ var _connection_connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection/connection */ \"(api)/./pages/api/connection/connection.ts\");\n/* harmony import */ var _connection_models_productSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connection/models/productSchema */ \"(api)/./pages/api/connection/models/productSchema.ts\");\n\n\nfunction addProduct(req, res) {\n    (0,_connection_connection__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().catch((err)=>console.log(err)\n    );\n    const NewProduct = new _connection_models_productSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        product_name: \"latest shex\",\n        categories: \"Clothes Blouse\",\n        Description: \"this is the latest product updated\"\n    });\n    NewProduct.save().then(()=>res.status(200).json({\n            status: \"success\",\n            data: NewProduct\n        })\n    );\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdEFkZC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDMkM7QUFDYTtBQUV6QyxTQUFTRSxVQUFVLENBQUNDLEdBQW9CLEVBQUVDLEdBQXFCLEVBQUU7SUFDNUVKLGtFQUFJLEVBQUUsQ0FBQ0ssS0FBSyxDQUFDQyxDQUFBQSxHQUFHLEdBQUlDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUM7SUFBQSxDQUFDO0lBQ3JDLE1BQU1HLFVBQVUsR0FBRyxJQUFJUix3RUFBTyxDQUFDO1FBQzNCUyxZQUFZLEVBQUcsYUFBYTtRQUM1QkMsVUFBVSxFQUFHLGdCQUFnQjtRQUM3QkMsV0FBVyxFQUFHLG9DQUFvQztLQUNyRCxDQUFDO0lBQ0ZILFVBQVUsQ0FBQ0ksSUFBSSxFQUFFLENBQUNDLElBQUksQ0FBQyxJQUFLVixHQUFHLENBQUNXLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVELE1BQU0sRUFBRyxTQUFTO1lBQUVFLElBQUksRUFBR1IsVUFBVTtTQUFDLENBQUM7SUFBQSxDQUFDO0NBQzlGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlfdHJpdGV6Ly4vcGFnZXMvYXBpL3Byb2R1Y3RBZGQudHM/OTIyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBtYWluIGZyb20gXCIuL2Nvbm5lY3Rpb24vY29ubmVjdGlvblwiO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4vY29ubmVjdGlvbi9tb2RlbHMvcHJvZHVjdFNjaGVtYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRQcm9kdWN0KHJlcSA6IE5leHRBcGlSZXF1ZXN0LCByZXMgOiBOZXh0QXBpUmVzcG9uc2UgKXtcbiAgICBtYWluKCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXG4gICAgY29uc3QgTmV3UHJvZHVjdCA9IG5ldyBQcm9kdWN0KHtcbiAgICAgICAgcHJvZHVjdF9uYW1lIDogXCJsYXRlc3Qgc2hleFwiLFxuICAgICAgICBjYXRlZ29yaWVzIDogXCJDbG90aGVzIEJsb3VzZVwiLFxuICAgICAgICBEZXNjcmlwdGlvbiA6IFwidGhpcyBpcyB0aGUgbGF0ZXN0IHByb2R1Y3QgdXBkYXRlZFwiXG4gICAgfSlcbiAgICBOZXdQcm9kdWN0LnNhdmUoKS50aGVuKCgpPT4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdGF0dXMgOiBcInN1Y2Nlc3NcIiwgZGF0YSA6IE5ld1Byb2R1Y3R9KSlcbn0iXSwibmFtZXMiOlsibWFpbiIsIlByb2R1Y3QiLCJhZGRQcm9kdWN0IiwicmVxIiwicmVzIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiTmV3UHJvZHVjdCIsInByb2R1Y3RfbmFtZSIsImNhdGVnb3JpZXMiLCJEZXNjcmlwdGlvbiIsInNhdmUiLCJ0aGVuIiwic3RhdHVzIiwianNvbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/productAdd.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/productAdd.ts"));
module.exports = __webpack_exports__;

})();