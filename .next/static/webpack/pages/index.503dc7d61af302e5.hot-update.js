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

/***/ "./components/stat/statstyle.ts":
/*!**************************************!*\
  !*** ./components/stat/statstyle.ts ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Circle\": function() { return /* binding */ Circle; },\n/* harmony export */   \"Sta\": function() { return /* binding */ Sta; },\n/* harmony export */   \"Statistic\": function() { return /* binding */ Statistic; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        background: \",\n        \";\\n        box-shadow: \",\n        \";\\n        padding : 20px 30px;\\n        margin : 20px;\\n        border-radius: 5px;\\n        width : fit-content;\\n        display: flex;\\n        .content{\\n            display: flex;\\n            flex-direction: column;\\n            width: fit-content;\\n            border-right: 1px solid #DADADA;\\n            padding-right: 20px;\\n            font-family: 'Tinos';\\n            label{\\n                font-size: smaller;\\n                color: #5A5A5B;\\n                margin-top: 10px;\\n                font-family: 'Open Sans'\\n            }\\n        }\\n        .circle{\\n          margin-left: 10px;\\n          .x-box{\\n            background: repeating-conic-gradient(\\n            from 0deg,\\n            \",\n        \" 0deg \",\n        \"deg,\\n            #F4F3F3 \",\n        \"deg 360deg\\n        );\\n          }\\n        }\\n\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    margin : 30px auto;\\n    display: flex;\\n    width: fit-content;\\n    flex-wrap: wrap;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n .x-box{\\n        border-radius: 50%;\\n        height: 50px;\\n        width: 50px;\\n        background-color: brown;\\n        margin-right: 20px;\\n        display: flex;\\n        justify-content: center;\\n        align-items: center;\\n        .percent{\\n          width : 80%;\\n        height: 80%;\\n        border-radius: 100%;\\n        background-color: white;\\n        font-size: small;\\n        display: flex;\\n        justify-content: center;\\n        align-items: center;\\n        }\\n    }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\n\nvar Sta = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject(), function(props) {\n    return props.back;\n}, function(props) {\n    return props.shadow;\n}, function(props) {\n    return props.delir;\n}, function(props) {\n    return props.rate;\n}, function(props) {\n    return props.rate;\n});\nvar Statistic = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject1());\nvar Circle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject2());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N0YXQvc3RhdHN0eWxlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBU2hDLElBQU1DLEdBQUcsR0FBR0QsNkRBQVUsb0JBQ1BHLFNBQUFBLEtBQUs7V0FBSUEsS0FBSyxDQUFDQyxJQUFJO0NBQUEsRUFDbkJELFNBQUFBLEtBQUs7V0FBSUEsS0FBSyxDQUFDRSxNQUFNO0NBQUEsRUF5QjdCRixTQUFBQSxLQUFLO1dBQUlBLEtBQUssQ0FBQ0csS0FBSztDQUFBLEVBQVNILFNBQUFBLEtBQUs7V0FBSUEsS0FBSyxDQUFDSSxJQUFJO0NBQUEsRUFDeENKLFNBQUFBLEtBQUs7V0FBSUEsS0FBSyxDQUFDSSxJQUFJO0NBQUEsQ0FLeEM7QUFFTSxJQUFNQyxTQUFTLEdBQUdSLDZEQUFVLG9CQUtsQztBQUVNLElBQU1TLE1BQU0sR0FBR1QsNkRBQVUsb0JBcUIvQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3N0YXQvc3RhdHN0eWxlLnRzP2ZjZmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuaW50ZXJmYWNlIG15Y29sb3J7XG4gICAgc2hhZG93IDogc3RyaW5nLFxuICAgIGJhY2sgOiBzdHJpbmcsXG4gICAgZGVsaXIgOiBzdHJpbmcsXG4gICAgcmF0ZSA6IG51bWJlclxufVxuXG5leHBvcnQgY29uc3QgU3RhID0gc3R5bGVkLmRpdjxteWNvbG9yPmBcbiAgICAgICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy5iYWNrfTtcbiAgICAgICAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiBwcm9wcy5zaGFkb3d9O1xuICAgICAgICBwYWRkaW5nIDogMjBweCAzMHB4O1xuICAgICAgICBtYXJnaW4gOiAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHdpZHRoIDogZml0LWNvbnRlbnQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC5jb250ZW50e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjREFEQURBO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnVGlub3MnO1xuICAgICAgICAgICAgbGFiZWx7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNUE1QTVCO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmNpcmNsZXtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAueC1ib3h7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctY29uaWMtZ3JhZGllbnQoXG4gICAgICAgICAgICBmcm9tIDBkZWcsXG4gICAgICAgICAgICAke3Byb3BzID0+IHByb3BzLmRlbGlyfSAwZGVnICR7cHJvcHMgPT4gcHJvcHMucmF0ZX1kZWcsXG4gICAgICAgICAgICAjRjRGM0YzICR7cHJvcHMgPT4gcHJvcHMucmF0ZX1kZWcgMzYwZGVnXG4gICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbmBcblxuZXhwb3J0IGNvbnN0IFN0YXRpc3RpYyA9IHN0eWxlZC5kaXZgXG4gICAgbWFyZ2luIDogMzBweCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbmBcblxuZXhwb3J0IGNvbnN0IENpcmNsZSA9IHN0eWxlZC5kaXZgXG4gLngtYm94e1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAucGVyY2VudHtcbiAgICAgICAgICB3aWR0aCA6IDgwJTtcbiAgICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbmAiXSwibmFtZXMiOlsic3R5bGVkIiwiU3RhIiwiZGl2IiwicHJvcHMiLCJiYWNrIiwic2hhZG93IiwiZGVsaXIiLCJyYXRlIiwiU3RhdGlzdGljIiwiQ2lyY2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/stat/statstyle.ts\n");

/***/ })

});