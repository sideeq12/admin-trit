"use strict";
(() => {
var exports = {};
exports.id = 750;
exports.ids = [750,250,397];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 1156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ creatAdmin)
/* harmony export */ });
/* harmony import */ var _connection_connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4348);
/* harmony import */ var _connection_models_adminSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9035);


function creatAdmin(req, res) {
    let params = req.body;
    (0,_connection_connection__WEBPACK_IMPORTED_MODULE_0__["default"])().catch((error)=>console.log(error)
    );
    const Addadmin = new _connection_models_adminSchema__WEBPACK_IMPORTED_MODULE_1__["default"]({
        username: params.adminName,
        email: params.adminMail,
        password: params.adminPassword
    });
    Addadmin.save().then(()=>res.status(200).json({
            Response: "Admin added successfully",
            data: Addadmin
        })
    );
// res.status(200).json({result : "it workd"})
};


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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1156));
module.exports = __webpack_exports__;

})();