"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/email_message/emailstyle.ts":
/*!************************************************!*\
  !*** ./components/email_message/emailstyle.ts ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Email\": function() { return /* binding */ Email; },\n/* harmony export */   \"Email_layout\": function() { return /* binding */ Email_layout; },\n/* harmony export */   \"MainEmail\": function() { return /* binding */ MainEmail; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width : 90vw;\\n    margin : 20px auto;\\n    border : 1px solid blue;\\n    justify-content: space-between;\\n    display: flex;\\n    .email_list{\\n        width : 35%;\\n    }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n       height: 120px;\\n            border-bottom: 1px solid #E3E3E3;\\n            padding : 15px 15px 20px;\\n            display: flex;\\n            justify-content: space-around;\\n            background-color: \",\n        \";\\n            &:hover{\\n                cursor: pointer;\\n            }\\n            .image{\\n                height: 51px;\\n                width : 51px;\\n                background-image: url(\\\"/lucas.jpg\\\");\\n                background-size: cover;\\n                background-position: center;\\n                border-radius: 100%;\\n            }\\n            .details{\\n                width : 70%;\\n                .name{\\n                    display: flex;\\n                    justify-content: space-between;\\n                    font-family: 'Open Sans';\\n                    font-weight: bold;\\n                    color: \",\n        \";;\\n                    label{\\n                        font-size: 12px;\\n                        color: \",\n        \";\\n                    }\\n                }\\n                .message{\\n                    margin-top: 10px;\\n                    font-size: 12px;\\n                    color: \",\n        \";\\n                    font-family: 'Open Sans';\\n                }\\n\\n            }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        '\\n    padding : 20px;\\n    width: 60%;\\n    /* border : 1px solid red; */\\n    height: fit-content;\\n    padding-top: 30px;\\n    .sender{\\n        display: flex;\\n        /* border: 1px solid red; */\\n        .image{\\n            height: 83px;\\n            width : 83px;\\n            border-radius: 100%;\\n            margin-right: 10px;\\n            background-color: black;\\n            background-image: url(\"/naija.jpg\");\\n            background-size: cover;\\n            background-position: center;\\n            align-items: center;\\n        }\\n        .userdetails{\\n            font-family: \"Open sans\";\\n            display: flex;\\n            flex-direction: column;\\n            margin-left: 10px;\\n            label{\\n                color: #34ADDC;\\n                font-size: small;\\n            }\\n        }\\n        .cion{\\n            margin-left: 150px;\\n            display: flex;\\n            gap: 1rem;\\n        }\\n    }\\n    .messagecontent{\\n        font-family: \\'Open Sans\\';\\n        h5{\\n            font-size: 20px;\\n            font-weight: bolder;\\n        }\\n    }\\n'\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\n\nvar Email_layout = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject());\nvar Email = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject1(), function(props) {\n    return props.active ? \"#34ADDC\" : \"#FFF\";\n}, function(props) {\n    return props.active ? \"#FFF\" : \"black\";\n}, function(props) {\n    return props.active ? \"#FFF\" : \"#979797\";\n}, function(props) {\n    return props.active ? \"#FFF\" : \"#979797\";\n});\nvar MainEmail = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject2());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2VtYWlsX21lc3NhZ2UvZW1haWxzdHlsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBS2hDLElBQU1DLFlBQVksR0FBR0QsNkRBQVUsbUJBU3JDO0FBQ00sSUFBTUcsS0FBSyxHQUFHSCw2REFBVSxxQkFNQ0ksU0FBQUEsS0FBSztXQUFJQSxLQUFLLENBQUNDLE1BQU0sR0FBRyxTQUFTLEdBQUcsTUFBTTtDQUFBLEVBbUI3Q0QsU0FBQUEsS0FBSztXQUFJQSxLQUFLLENBQUNDLE1BQU0sR0FBRyxNQUFNLEdBQUcsT0FBTztDQUFBLEVBR3BDRCxTQUFBQSxLQUFLO1dBQUlBLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLE1BQU0sR0FBRyxTQUFTO0NBQUEsRUFNOUNELFNBQUFBLEtBQUs7V0FBSUEsS0FBSyxDQUFDQyxNQUFNLEdBQUcsTUFBTSxHQUFHLFNBQVM7Q0FBQSxDQUt0RTtBQUNNLElBQU1DLFNBQVMsR0FBR04sNkRBQVUsb0JBMkNsQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2VtYWlsX21lc3NhZ2UvZW1haWxzdHlsZS50cz9iNGM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmludGVyZmFjZSBjaGVja3tcbiAgICBhY3RpdmUgOiBib29sZWFuXG59XG5leHBvcnQgY29uc3QgRW1haWxfbGF5b3V0ID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aCA6IDkwdnc7XG4gICAgbWFyZ2luIDogMjBweCBhdXRvO1xuICAgIGJvcmRlciA6IDFweCBzb2xpZCBibHVlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC5lbWFpbF9saXN0e1xuICAgICAgICB3aWR0aCA6IDM1JTtcbiAgICB9XG5gXG5leHBvcnQgY29uc3QgRW1haWwgPSBzdHlsZWQuZGl2PGNoZWNrPmBcbiAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFM0UzRTM7XG4gICAgICAgICAgICBwYWRkaW5nIDogMTVweCAxNXB4IDIwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLmFjdGl2ZSA/IFwiIzM0QUREQ1wiIDogXCIjRkZGXCJ9O1xuICAgICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW1hZ2V7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoIDogNTFweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvbHVjYXMuanBnXCIpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGV0YWlsc3tcbiAgICAgICAgICAgICAgICB3aWR0aCA6IDcwJTtcbiAgICAgICAgICAgICAgICAubmFtZXtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5hY3RpdmUgPyBcIiNGRkZcIiA6IFwiYmxhY2tcIn07O1xuICAgICAgICAgICAgICAgICAgICBsYWJlbHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmFjdGl2ZSA/IFwiI0ZGRlwiIDogXCIjOTc5Nzk3XCJ9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tZXNzYWdle1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmFjdGl2ZSA/IFwiI0ZGRlwiIDogXCIjOTc5Nzk3XCJ9O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5gXG5leHBvcnQgY29uc3QgTWFpbkVtYWlsID0gc3R5bGVkLmRpdmBcbiAgICBwYWRkaW5nIDogMjBweDtcbiAgICB3aWR0aDogNjAlO1xuICAgIC8qIGJvcmRlciA6IDFweCBzb2xpZCByZWQ7ICovXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAuc2VuZGVye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG4gICAgICAgIC5pbWFnZXtcbiAgICAgICAgICAgIGhlaWdodDogODNweDtcbiAgICAgICAgICAgIHdpZHRoIDogODNweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9uYWlqYS5qcGdcIik7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAudXNlcmRldGFpbHN7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIHNhbnNcIjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBsYWJlbHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzM0QUREQztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5jaW9ue1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGdhcDogMXJlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubWVzc2FnZWNvbnRlbnR7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICAgICAgaDV7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICB9XG4gICAgfVxuYCJdLCJuYW1lcyI6WyJzdHlsZWQiLCJFbWFpbF9sYXlvdXQiLCJkaXYiLCJFbWFpbCIsInByb3BzIiwiYWN0aXZlIiwiTWFpbkVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/email_message/emailstyle.ts\n");

/***/ })

});