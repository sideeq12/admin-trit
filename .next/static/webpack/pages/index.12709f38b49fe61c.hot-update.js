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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Info\": function() { return /* binding */ Info; },\n/* harmony export */   \"Order_Summary\": function() { return /* binding */ Order_Summary; },\n/* harmony export */   \"Order_id\": function() { return /* binding */ Order_id; },\n/* harmony export */   \"The_order\": function() { return /* binding */ The_order; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        width : 80vw;\\n        border : 1px solid blue;\\n        display: flex;\\n        margin : 20px auto;\\n        padding : 10px;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        width : 30%;\\n        padding-top: 20px;\\n        font-family: 'Open Sans';\\n       .first{\\n           background: #FFFFFF;\\n            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\\n            border-radius: 5px;\\n            padding : 15px 10px;\\n           .price{\\n               margin-top: 20px;\\n               font-size: 14px;\\n               padding-top: 20px;\\n           border-top : 1px solid #E3E3E3;\\n           color : #343434;\\n           display: flex;\\n           flex-direction: column;\\n           gap : 1rem;\\n        .priceline{\\n            display: flex;\\n            justify-content: space-between;\\n        }\\n        .tot{\\n            margin-top: 10px;\\n            width: var();\\n            font-size: 16px;\\n            padding : 20px 0px;\\n            font-weight: bold;\\n            background: #F9F9F9;\\nborder-radius: 5px;\\n        }\\n       }\\n       }\\n       .second{\\n\\n        background: #FFFFFF;\\n            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\\n            border-radius: 5px;\\n            padding : 15px 10px;\\n            margin-top: 30px;\\n            .cont{\\n                font-size: small;\\n                margin-top: 15px;\\n                border-top: 1px solid #E3E3E3;\\n                padding-top: 20px;\\n                .line{\\n                    margin-top: 10px;\\n                    label {\\n                        font-weight: bold;\\n                        margin-right: 10px;\\n                    }\\n                }\\n            }\\n       }\\n\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width : 50%;\\n    margin-right : 20px;\\n      .data{\\n\\nbackground: #FFFFFF;\\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\\n    border-radius: 5px;\\n    padding : 15px 10px;\\n    margin-top: 30px;\\n    .cont{\\n        font-size: 14px;\\n        /* margin-top: 15px; */\\n        /* border-top: 1px solid #E3E3E3; */\\n        padding-top: 10px;\\n        .line{\\n            margin-top: 10px;\\n            padding : 10px 0px;\\n            display: flex;\\n            justify-content: space-between;\\n            border-top:  1px solid #E3E3E3;\\n            color : #343434\\n            label {\\n                margin-right: 10px;\\n            }\\n            span{\\n                color : #34ADDC;\\n            }\\n        }\\n    }\\n}\\n.productinfo{\\n    background: #FFFFFF;\\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\\n    border-radius: 5px;\\n    .info{  \\n        padding : 10px 0px;\\n        display: flex;\\n        .pro{\\n        min-width: 30%;\\n        padding-left: 10px;\\n    }\\n    .qty, .color, .size{\\n        min-width: 15%;\\n    }\\n    }\\n    \\n}\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        width: 100%;\\n        background-color:\",\n        \";\\n        color : \",\n        \";\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\n\nvar The_order = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject());\nvar Order_Summary = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject1());\nvar Order_id = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject2());\nvar Info = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject3(), function(props) {\n    return props.bgcolor ? \"#D3EDF8\" : \"#FFF\";\n}, function(props) {\n    return props.bgcolor ? \"#09668A\" : \"#5A5A5B\";\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL29yZGVyZWRfaW5mby9vcmRlcmVkLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUdoQyxJQUFNQyxTQUFTLEdBQUdELDZEQUFVLG1CQU1sQztBQUVNLElBQU1HLGFBQWEsR0FBR0gsNkRBQVUsb0JBdUR0QztBQUlNLElBQU1JLFFBQVEsR0FBR0osNkRBQVUsb0JBZ0RqQztBQUVNLElBQU1LLElBQUksR0FBR0wsNkRBQVUscUJBRUhNLFNBQUFBLEtBQUs7V0FBSUEsS0FBSyxDQUFDQyxPQUFPLEdBQUcsU0FBUyxHQUFHLE1BQU07Q0FBQSxFQUNwREQsU0FBQUEsS0FBSztXQUFJQSxLQUFLLENBQUNDLE9BQU8sR0FBRyxTQUFTLEdBQUcsU0FBUztDQUFBLENBQy9EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvb3JkZXJlZF9pbmZvL29yZGVyZWQudHM/ODhhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5cbmV4cG9ydCBjb25zdCBUaGVfb3JkZXIgPSBzdHlsZWQuZGl2YFxuICAgICAgICB3aWR0aCA6IDgwdnc7XG4gICAgICAgIGJvcmRlciA6IDFweCBzb2xpZCBibHVlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4gOiAyMHB4IGF1dG87XG4gICAgICAgIHBhZGRpbmcgOiAxMHB4O1xuYFxuXG5leHBvcnQgY29uc3QgT3JkZXJfU3VtbWFyeSA9IHN0eWxlZC5kaXZgXG4gICAgICAgIHdpZHRoIDogMzAlO1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgICAgIC5maXJzdHtcbiAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIHBhZGRpbmcgOiAxNXB4IDEwcHg7XG4gICAgICAgICAgIC5wcmljZXtcbiAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgYm9yZGVyLXRvcCA6IDFweCBzb2xpZCAjRTNFM0UzO1xuICAgICAgICAgICBjb2xvciA6ICMzNDM0MzQ7XG4gICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgIGdhcCA6IDFyZW07XG4gICAgICAgIC5wcmljZWxpbmV7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG4gICAgICAgIC50b3R7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgd2lkdGg6IHZhcigpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgcGFkZGluZyA6IDIwcHggMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjlGOUY5O1xuYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG4gICAgICAgfVxuICAgICAgIH1cbiAgICAgICAuc2Vjb25ke1xuXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nIDogMTVweCAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgIC5jb250e1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0UzRTNFMztcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICAubGluZXtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgfVxuXG5gXG5pbnRlcmZhY2UgYmd7XG4gICAgYmdjb2xvciA6IGJvb2xlYW5cbn1cbmV4cG9ydCBjb25zdCBPcmRlcl9pZCA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGggOiA1MCU7XG4gICAgbWFyZ2luLXJpZ2h0IDogMjBweDtcbiAgICAgIC5kYXRhe1xuXG5iYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZyA6IDE1cHggMTBweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIC5jb250e1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIC8qIG1hcmdpbi10b3A6IDE1cHg7ICovXG4gICAgICAgIC8qIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTNFM0UzOyAqL1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgLmxpbmV7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZyA6IDEwcHggMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGJvcmRlci10b3A6ICAxcHggc29saWQgI0UzRTNFMztcbiAgICAgICAgICAgIGNvbG9yIDogIzM0MzQzNFxuICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgY29sb3IgOiAjMzRBRERDO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLnByb2R1Y3RpbmZve1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAuaW5mb3sgIFxuICAgICAgICBwYWRkaW5nIDogMTBweCAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC5wcm97XG4gICAgICAgIG1pbi13aWR0aDogMzAlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgfVxuICAgIC5xdHksIC5jb2xvciwgLnNpemV7XG4gICAgICAgIG1pbi13aWR0aDogMTUlO1xuICAgIH1cbiAgICB9XG4gICAgXG59XG5gXG5cbmV4cG9ydCBjb25zdCBJbmZvID0gc3R5bGVkLmRpdjxiZz5gXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiR7cHJvcHMgPT4gcHJvcHMuYmdjb2xvciA/IFwiI0QzRURGOFwiIDogXCIjRkZGXCJ9O1xuICAgICAgICBjb2xvciA6ICR7cHJvcHMgPT4gcHJvcHMuYmdjb2xvciA/IFwiIzA5NjY4QVwiIDogXCIjNUE1QTVCXCJ9O1xuYCJdLCJuYW1lcyI6WyJzdHlsZWQiLCJUaGVfb3JkZXIiLCJkaXYiLCJPcmRlcl9TdW1tYXJ5IiwiT3JkZXJfaWQiLCJJbmZvIiwicHJvcHMiLCJiZ2NvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ordered_info/ordered.ts\n");

/***/ })

});