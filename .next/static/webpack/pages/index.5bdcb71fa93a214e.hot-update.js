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

/***/ "./components/overall_rate/overall.ts":
/*!********************************************!*\
  !*** ./components/overall_rate/overall.ts ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Overall\": function() { return /* binding */ Overall; },\n/* harmony export */   \"User_rate\": function() { return /* binding */ User_rate; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n   \\n    background: #FFFFFF;\\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\\n    border-radius: 5px;\\n    padding : 20px;\\n    display: flex;\\n    flex-direction: row;\\n    flex-wrap: wrap;\\n    font-family: 'Open Sans';\\n    justify-content: center;\\n    align-items: center;\\n    display: flex;\\n    gap : 1rem;\\n    margin : 10px auto;\\n    border : 1px solid red;\\n    width: 80vw;\\n    \\n    span{\\n        font-weight: bold;\\n        font-family: 'Open Sans';\\n    }\\n\\n    .count{\\n        display: flex;\\n        justify-content: center;\\n        align-items:flex-end;\\n        label{\\n                color :  #5A5A5B;\\n                font-size: small;\\n            }\\n        .point{\\n        margin-right: 20px;\\n            strong{\\n                font-size: 45px;\\n                letter-spacing: 2px;\\n            }\\n        }\\n        .star{\\n            display: flex;\\n            flex-direction: column;\\n            label{\\n                margin-top: 10px;\\n            }\\n        }\\n    }\\n\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        width: 60%;\\n        display: flex;\\n    div{\\n        display: flex;\\n        align-items: center;\\n        margin-top: 10px;\\n        justify-content: space-between;\\n        border : 1px solid blue;\\n        progress{\\n            background: #C9C9C9;\\n            color : #09668A;\\n            border-radius : 5px;\\n            height:6px;\\n        }\\n        label{\\n            font-size: small;\\n            font-weight: bold;\\n        }\\n        label.star{\\n            color: #E2B93B;\\n        }\\n        label.coun{\\n            color: #09668A;\\n        }\\n    }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\n\nvar Overall = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject());\nvar User_rate = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject1());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL292ZXJhbGxfcmF0ZS9vdmVyYWxsLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBSWhDLElBQU1DLE9BQU8sR0FBR0QsNkRBQVUsbUJBK0NoQztBQUNNLElBQU1HLFNBQVMsR0FBR0gsNkRBQVUsb0JBMEJsQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL292ZXJhbGxfcmF0ZS9vdmVyYWxsLnRzPzdkODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuXG5cbmV4cG9ydCBjb25zdCBPdmVyYWxsID0gc3R5bGVkLmRpdmBcbiAgIFxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nIDogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwIDogMXJlbTtcbiAgICBtYXJnaW4gOiAxMHB4IGF1dG87XG4gICAgYm9yZGVyIDogMXB4IHNvbGlkIHJlZDtcbiAgICB3aWR0aDogODB2dztcbiAgICBcbiAgICBzcGFue1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIH1cblxuICAgIC5jb3VudHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOmZsZXgtZW5kO1xuICAgICAgICBsYWJlbHtcbiAgICAgICAgICAgICAgICBjb2xvciA6ICAjNUE1QTVCO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIC5wb2ludHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgc3Ryb25ne1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zdGFye1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBsYWJlbHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5gXG5leHBvcnQgY29uc3QgVXNlcl9yYXRlID0gc3R5bGVkLmRpdmBcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICBkaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYm9yZGVyIDogMXB4IHNvbGlkIGJsdWU7XG4gICAgICAgIHByb2dyZXNze1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0M5QzlDOTtcbiAgICAgICAgICAgIGNvbG9yIDogIzA5NjY4QTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXMgOiA1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6NnB4O1xuICAgICAgICB9XG4gICAgICAgIGxhYmVse1xuICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIGxhYmVsLnN0YXJ7XG4gICAgICAgICAgICBjb2xvcjogI0UyQjkzQjtcbiAgICAgICAgfVxuICAgICAgICBsYWJlbC5jb3Vue1xuICAgICAgICAgICAgY29sb3I6ICMwOTY2OEE7XG4gICAgICAgIH1cbiAgICB9XG5gIl0sIm5hbWVzIjpbInN0eWxlZCIsIk92ZXJhbGwiLCJkaXYiLCJVc2VyX3JhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/overall_rate/overall.ts\n");

/***/ })

});