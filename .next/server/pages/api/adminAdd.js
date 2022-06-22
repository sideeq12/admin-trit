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
exports.id = "pages/api/adminAdd";
exports.ids = ["pages/api/adminAdd"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./pages/api/adminAdd.ts":
/*!*******************************!*\
  !*** ./pages/api/adminAdd.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ creatAdmin)\n/* harmony export */ });\n/* harmony import */ var _connection_connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection/connection */ \"(api)/./pages/api/connection/connection.ts\");\n/* harmony import */ var _connection_models_adminSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connection/models/adminSchema */ \"(api)/./pages/api/connection/models/adminSchema.ts\");\n\n\nfunction creatAdmin(req, res) {\n    let params = req.body;\n    (0,_connection_connection__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().catch((error)=>console.log(error)\n    );\n    const Addadmin = new _connection_models_adminSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        username: params.adminName,\n        email: params.adminMail,\n        password: params.adminPassword\n    });\n    Addadmin.save().then(()=>res.status(200).json({\n            Response: \"Admin added successfully\",\n            data: Addadmin\n        })\n    );\n// res.status(200).json({result : \"it workd\"})\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRtaW5BZGQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzJDO0FBQ1M7QUFJckMsU0FBU0UsVUFBVSxDQUFDQyxHQUFtQixFQUFFQyxHQUFxQixFQUFDO0lBQzFFLElBQUlDLE1BQU0sR0FBR0YsR0FBRyxDQUFDRyxJQUFJO0lBQ3JCTixrRUFBSSxFQUFFLENBQUNPLEtBQUssQ0FBQ0MsQ0FBQUEsS0FBSyxHQUFJQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO0lBQUEsQ0FBQyxDQUFDO0lBQzFDLE1BQU1HLFFBQVEsR0FBRyxJQUFJVixzRUFBSyxDQUFDO1FBQ3ZCVyxRQUFRLEVBQUdQLE1BQU0sQ0FBQ1EsU0FBUztRQUMzQkMsS0FBSyxFQUFHVCxNQUFNLENBQUNVLFNBQVM7UUFDeEJDLFFBQVEsRUFBR1gsTUFBTSxDQUFDWSxhQUFhO0tBQ2xDLENBQUM7SUFDRk4sUUFBUSxDQUFDTyxJQUFJLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDLElBQUtmLEdBQUcsQ0FBQ2dCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUNDLFFBQVEsRUFBRywwQkFBMEI7WUFBRUMsSUFBSSxFQUFHWixRQUFRO1NBQUMsQ0FBQztJQUFBLENBQUM7QUFDekcsOENBQThDO0NBQ2pEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlfdHJpdGV6Ly4vcGFnZXMvYXBpL2FkbWluQWRkLnRzPzg3OTMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgbWFpbiBmcm9tIFwiLi9jb25uZWN0aW9uL2Nvbm5lY3Rpb25cIjtcbmltcG9ydCBBZG1pbiBmcm9tIFwiLi9jb25uZWN0aW9uL21vZGVscy9hZG1pblNjaGVtYVwiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIlxuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0QWRtaW4ocmVxIDpOZXh0QXBpUmVxdWVzdCwgcmVzIDogTmV4dEFwaVJlc3BvbnNlKXtcbiAgICBsZXQgcGFyYW1zID0gcmVxLmJvZHk7XG4gICAgbWFpbigpLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gICAgY29uc3QgQWRkYWRtaW4gPSBuZXcgQWRtaW4oe1xuICAgICAgICB1c2VybmFtZSA6IHBhcmFtcy5hZG1pbk5hbWUsXG4gICAgICAgIGVtYWlsIDogcGFyYW1zLmFkbWluTWFpbCxcbiAgICAgICAgcGFzc3dvcmQgOiBwYXJhbXMuYWRtaW5QYXNzd29yZFxuICAgIH0pXG4gICAgQWRkYWRtaW4uc2F2ZSgpLnRoZW4oKCk9PiByZXMuc3RhdHVzKDIwMCkuanNvbih7UmVzcG9uc2UgOiBcIkFkbWluIGFkZGVkIHN1Y2Nlc3NmdWxseVwiLCBkYXRhIDogQWRkYWRtaW59KSlcbiAgICAvLyByZXMuc3RhdHVzKDIwMCkuanNvbih7cmVzdWx0IDogXCJpdCB3b3JrZFwifSlcbn1cblxuIl0sIm5hbWVzIjpbIm1haW4iLCJBZG1pbiIsImNyZWF0QWRtaW4iLCJyZXEiLCJyZXMiLCJwYXJhbXMiLCJib2R5IiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJBZGRhZG1pbiIsInVzZXJuYW1lIiwiYWRtaW5OYW1lIiwiZW1haWwiLCJhZG1pbk1haWwiLCJwYXNzd29yZCIsImFkbWluUGFzc3dvcmQiLCJzYXZlIiwidGhlbiIsInN0YXR1cyIsImpzb24iLCJSZXNwb25zZSIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/adminAdd.ts\n");

/***/ }),

/***/ "(api)/./pages/api/connection/connection.ts":
/*!********************************************!*\
  !*** ./pages/api/connection/connection.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst main = async ()=>{\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n    console.log(\"database connected !\");\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29ubmVjdGlvbi9jb25uZWN0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxJQUFJLEdBQUcsVUFBVTtJQUNuQixNQUFNRCx1REFBZ0IsQ0FBQ0csT0FBTyxDQUFDQyxHQUFHLENBQUNDLFdBQVcsQ0FBVztJQUN6REMsT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7Q0FDdEM7QUFDRCxpRUFBZU4sSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlfdHJpdGV6Ly4vcGFnZXMvYXBpL2Nvbm5lY3Rpb24vY29ubmVjdGlvbi50cz8wN2NkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgbWFpbiA9IGFzeW5jICgpPT57XG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSBhcyBzdHJpbmcpXG4gICAgY29uc29sZS5sb2coXCJkYXRhYmFzZSBjb25uZWN0ZWQgIVwiKVxufVxuZXhwb3J0IGRlZmF1bHQgbWFpbjsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJtYWluIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/connection/connection.ts\n");

/***/ }),

/***/ "(api)/./pages/api/connection/models/adminSchema.ts":
/*!****************************************************!*\
  !*** ./pages/api/connection/models/adminSchema.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst AdminSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    username: String,\n    email: String,\n    password: String\n});\nconst Admin = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Admins\") || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Admins\", AdminSchema);\nconsole.log(\"the admin model is\", Admin, \" and the type is \", typeof Admin);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Admin);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29ubmVjdGlvbi9tb2RlbHMvYWRtaW5TY2hlbWEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ2dDO0FBRWhDLE1BQU1DLFdBQVcsR0FBRyxJQUFJRCx3REFBZSxDQUFDO0lBQ3BDRyxRQUFRLEVBQUdDLE1BQU07SUFDakJDLEtBQUssRUFBR0QsTUFBTTtJQUNkRSxRQUFRLEVBQUdGLE1BQU07Q0FDcEIsQ0FBQztBQUVGLE1BQU1HLEtBQUssR0FBR1AscURBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSUEscURBQWMsQ0FBQyxRQUFRLEVBQUVDLFdBQVcsQ0FBQztBQUMvRVEsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLEVBQUVILEtBQUssRUFBRyxtQkFBbUIsRUFBRSxPQUFPQSxLQUFLLENBQUU7QUFDN0UsaUVBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV90cml0ZXovLi9wYWdlcy9hcGkvY29ubmVjdGlvbi9tb2RlbHMvYWRtaW5TY2hlbWEudHM/N2I5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgQWRtaW5TY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICB1c2VybmFtZSA6IFN0cmluZyxcbiAgICBlbWFpbCA6IFN0cmluZyxcbiAgICBwYXNzd29yZCA6IFN0cmluZ1xufSlcblxuY29uc3QgQWRtaW4gPSBtb25nb29zZS5tb2RlbChcIkFkbWluc1wiKSB8fCBtb25nb29zZS5tb2RlbChcIkFkbWluc1wiLCBBZG1pblNjaGVtYSk7XG5jb25zb2xlLmxvZyhcInRoZSBhZG1pbiBtb2RlbCBpc1wiLCBBZG1pbiAsIFwiIGFuZCB0aGUgdHlwZSBpcyBcIiwgdHlwZW9mKEFkbWluKSlcbmV4cG9ydCBkZWZhdWx0IEFkbWluIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiQWRtaW5TY2hlbWEiLCJTY2hlbWEiLCJ1c2VybmFtZSIsIlN0cmluZyIsImVtYWlsIiwicGFzc3dvcmQiLCJBZG1pbiIsIm1vZGVsIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/connection/models/adminSchema.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/adminAdd.ts"));
module.exports = __webpack_exports__;

})();