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

/***/ "./components/ordered_info/ordered.ts":
/*!********************************************!*\
  !*** ./components/ordered_info/ordered.ts ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Info\": function() { return /* binding */ Info; },\n/* harmony export */   \"Order_Summary\": function() { return /* binding */ Order_Summary; },\n/* harmony export */   \"Order_id\": function() { return /* binding */ Order_id; },\n/* harmony export */   \"The_order\": function() { return /* binding */ The_order; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        width : 80vw;\\n        border : 1px solid blue;\\n        display: flex;\\n        margin : 20px auto;\\n        padding : 10px;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        width : 30%;\\n        padding-top: 20px;\\n        font-family: 'Open Sans';\\n       .first{\\n           background: #FFFFFF;\\n            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\\n            border-radius: 5px;\\n            padding : 15px 10px;\\n           .price{\\n               margin-top: 20px;\\n               font-size: 14px;\\n               padding-top: 20px;\\n           border-top : 1px solid #E3E3E3;\\n           color : #343434;\\n           display: flex;\\n           flex-direction: column;\\n           gap : 1rem;\\n        .priceline{\\n            display: flex;\\n            justify-content: space-between;\\n        }\\n        .tot{\\n            margin-top: 10px;\\n            width: var();\\n            font-size: 16px;\\n            padding : 20px 0px;\\n            font-weight: bold;\\n            background: #F9F9F9;\\nborder-radius: 5px;\\n        }\\n       }\\n       }\\n       .second{\\n\\n        background: #FFFFFF;\\n            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\\n            border-radius: 5px;\\n            padding : 15px 10px;\\n            margin-top: 30px;\\n            .cont{\\n                font-size: small;\\n                margin-top: 15px;\\n                border-top: 1px solid #E3E3E3;\\n                padding-top: 20px;\\n                .line{\\n                    margin-top: 10px;\\n                    label {\\n                        font-weight: bold;\\n                        margin-right: 10px;\\n                    }\\n                }\\n            }\\n       }\\n\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width : 50%;\\n    margin-right : 20px;\\n      .data{\\n\\nbackground: #FFFFFF;\\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\\n    border-radius: 5px;\\n    padding : 15px 10px;\\n    margin-top: 30px;\\n    .cont{\\n        font-size: 14px;\\n        /* margin-top: 15px; */\\n        /* border-top: 1px solid #E3E3E3; */\\n        padding-top: 10px;\\n        .line{\\n            margin-top: 10px;\\n            padding : 10px 0px;\\n            display: flex;\\n            justify-content: space-between;\\n            border-top:  1px solid #E3E3E3;\\n            color : #343434\\n            label {\\n                margin-right: 10px;\\n            }\\n            span{\\n                color : #34ADDC;\\n            }\\n        }\\n    }\\n}\\n.productinfo{\\n    background: #FFFFFF;\\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\\n    border-radius: 5px;\\n    .info{  \\n        padding : 15px 0px;\\n        display: flex;\\n        .pro{\\n        min-width: 30%;\\n        padding-left: 10px;\\n    }\\n    .qty, .color, .size{\\n        min-width: 15%;\\n    }\\n    }\\n    \\n}\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        width: 100%;\\n        background-color:\",\n        \";\\n        color : \",\n        \";\\n        border-radius: \",\n        \";\\n        border-bottom: \",\n        \";\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\n\nvar The_order = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject());\nvar Order_Summary = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject1());\nvar Order_id = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject2());\nvar Info = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject3(), function(props) {\n    return props.bgcolor ? \"#D3EDF8\" : \"#FFF\";\n}, function(props) {\n    return props.bgcolor ? \"#09668A\" : \"#5A5A5B\";\n}, function(props) {\n    return props.bgcolor ? \"5px 5px 0px 0px\" : \"none\";\n}, function(props) {\n    return props.bgcolor ? \"none\" : \"1px solid #E3E3E3;\";\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL29yZGVyZWRfaW5mby9vcmRlcmVkLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBR2hDLElBQU1DLFNBQVMsR0FBR0QsNkRBQVUsbUJBTWxDO0FBRU0sSUFBTUcsYUFBYSxHQUFHSCw2REFBVSxvQkF1RHRDO0FBSU0sSUFBTUksUUFBUSxHQUFHSiw2REFBVSxvQkFnRGpDO0FBRU0sSUFBTUssSUFBSSxHQUFHTCw2REFBVSxxQkFFSE0sU0FBQUEsS0FBSztXQUFJQSxLQUFLLENBQUNDLE9BQU8sR0FBRyxTQUFTLEdBQUcsTUFBTTtDQUFBLEVBQ3BERCxTQUFBQSxLQUFLO1dBQUlBLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLFNBQVMsR0FBRyxTQUFTO0NBQUEsRUFDdkNELFNBQUFBLEtBQUs7V0FBSUEsS0FBSyxDQUFDQyxPQUFPLEdBQUcsaUJBQWlCLEdBQUcsTUFBTTtDQUFBLEVBQ25ERCxTQUFBQSxLQUFLO1dBQUlBLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU0sR0FBRyxvQkFBb0I7Q0FBQSxDQUM5RSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL29yZGVyZWRfaW5mby9vcmRlcmVkLnRzPzg4YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuXG5leHBvcnQgY29uc3QgVGhlX29yZGVyID0gc3R5bGVkLmRpdmBcbiAgICAgICAgd2lkdGggOiA4MHZ3O1xuICAgICAgICBib3JkZXIgOiAxcHggc29saWQgYmx1ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luIDogMjBweCBhdXRvO1xuICAgICAgICBwYWRkaW5nIDogMTBweDtcbmBcblxuZXhwb3J0IGNvbnN0IE9yZGVyX1N1bW1hcnkgPSBzdHlsZWQuZGl2YFxuICAgICAgICB3aWR0aCA6IDMwJTtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICAgICAuZmlyc3R7XG4gICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nIDogMTVweCAxMHB4O1xuICAgICAgICAgICAucHJpY2V7XG4gICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgIGJvcmRlci10b3AgOiAxcHggc29saWQgI0UzRTNFMztcbiAgICAgICAgICAgY29sb3IgOiAjMzQzNDM0O1xuICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICBnYXAgOiAxcmVtO1xuICAgICAgICAucHJpY2VsaW5le1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuICAgICAgICAudG90e1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIHdpZHRoOiB2YXIoKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIHBhZGRpbmcgOiAyMHB4IDBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0Y5RjlGOTtcbmJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgfVxuICAgICAgIH1cbiAgICAgICB9XG4gICAgICAgLnNlY29uZHtcblxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgcGFkZGluZyA6IDE1cHggMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgICAuY29udHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFM0UzRTM7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgLmxpbmV7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgIH1cblxuYFxuaW50ZXJmYWNlIGJne1xuICAgIGJnY29sb3IgOiBib29sZWFuXG59XG5leHBvcnQgY29uc3QgT3JkZXJfaWQgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoIDogNTAlO1xuICAgIG1hcmdpbi1yaWdodCA6IDIwcHg7XG4gICAgICAuZGF0YXtcblxuYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmcgOiAxNXB4IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAuY29udHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAvKiBtYXJnaW4tdG9wOiAxNXB4OyAqL1xuICAgICAgICAvKiBib3JkZXItdG9wOiAxcHggc29saWQgI0UzRTNFMzsgKi9cbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIC5saW5le1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmcgOiAxMHB4IDBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBib3JkZXItdG9wOiAgMXB4IHNvbGlkICNFM0UzRTM7XG4gICAgICAgICAgICBjb2xvciA6ICMzNDM0MzRcbiAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIGNvbG9yIDogIzM0QUREQztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5wcm9kdWN0aW5mb3tcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLmluZm97ICBcbiAgICAgICAgcGFkZGluZyA6IDE1cHggMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAucHJve1xuICAgICAgICBtaW4td2lkdGg6IDMwJTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgICAucXR5LCAuY29sb3IsIC5zaXple1xuICAgICAgICBtaW4td2lkdGg6IDE1JTtcbiAgICB9XG4gICAgfVxuICAgIFxufVxuYFxuXG5leHBvcnQgY29uc3QgSW5mbyA9IHN0eWxlZC5kaXY8Ymc+YFxuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjoke3Byb3BzID0+IHByb3BzLmJnY29sb3IgPyBcIiNEM0VERjhcIiA6IFwiI0ZGRlwifTtcbiAgICAgICAgY29sb3IgOiAke3Byb3BzID0+IHByb3BzLmJnY29sb3IgPyBcIiMwOTY2OEFcIiA6IFwiIzVBNUE1QlwifTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy5iZ2NvbG9yID8gXCI1cHggNXB4IDBweCAwcHhcIiA6IFwibm9uZVwifTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogJHtwcm9wcyA9PiBwcm9wcy5iZ2NvbG9yID8gXCJub25lXCIgOiBcIjFweCBzb2xpZCAjRTNFM0UzO1wifTtcbmAiXSwibmFtZXMiOlsic3R5bGVkIiwiVGhlX29yZGVyIiwiZGl2IiwiT3JkZXJfU3VtbWFyeSIsIk9yZGVyX2lkIiwiSW5mbyIsInByb3BzIiwiYmdjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ordered_info/ordered.ts\n");

/***/ })

});