"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/mailresponse",{

/***/ "./components/email_message/emailstyle.ts":
/*!************************************************!*\
  !*** ./components/email_message/emailstyle.ts ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Email\": function() { return /* binding */ Email; },\n/* harmony export */   \"Email_layout\": function() { return /* binding */ Email_layout; },\n/* harmony export */   \"MainEmail\": function() { return /* binding */ MainEmail; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width : 80vw;\\n    margin-left: 20px;\\n    justify-content: space-between;\\n    display: flex;\\n    .email_list{\\n        width : 35%;\\n    }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n       height: 120px;\\n            border-bottom: 1px solid #E3E3E3;\\n            padding : 15px 15px 20px;\\n            display: flex;\\n            justify-content: space-around;\\n            background-color: \",\n        \";\\n            &:hover{\\n                cursor: pointer;\\n            }\\n            .image{\\n                height: 51px;\\n                width : 51px;\\n                background-image: url(\\\"/lucas.jpg\\\");\\n                background-size: cover;\\n                background-position: center;\\n                border-radius: 100%;\\n            }\\n            .details{\\n                width : 70%;\\n                .name{\\n                    display: flex;\\n                    justify-content: space-between;\\n                    font-family: 'Open Sans';\\n                    font-weight: bold;\\n                    color: \",\n        \";;\\n                    label{\\n                        font-size: 12px;\\n                        color: \",\n        \";\\n                    }\\n                }\\n                .message{\\n                    margin-top: 10px;\\n                    font-size: 12px;\\n                    color: \",\n        \";\\n                    font-family: 'Open Sans';\\n                }\\n\\n            }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        '\\n    padding : 20px;\\n    width: 60%;\\n    /* border : 1px solid red; */\\n    height: fit-content;\\n    padding-top: 30px;\\n    .sender{\\n        display: flex;\\n        /* border: 1px solid red; */\\n        .image{\\n            height: 83px;\\n            width : 83px;\\n            border-radius: 100%;\\n            margin-right: 10px;\\n            background-color: black;\\n            background-image: url(\"/naija.jpg\");\\n            background-size: cover;\\n            background-position: center;\\n            align-items: center;\\n        }\\n        .userdetails{\\n            font-family: \"Open sans\";\\n            display: flex;\\n            flex-direction: column;\\n            margin-left: 10px;\\n            label{\\n                color: #34ADDC;\\n                font-size: small;\\n            }\\n        }\\n        .cion{\\n            margin-left: 150px;\\n            display: flex;\\n            gap: 1rem;\\n        }\\n    }\\n    .messagecontent{\\n        font-family: \\'Open Sans\\';\\n        h5{\\n            font-size: 22px;\\n            font-weight: bolder;\\n        }\\n        p{\\n            font-size: small;\\n            color: #5A5A5B;\\n            letter-spacing: 0.5px;\\n            word-spacing: 2px;\\n        }\\n    }\\n\\n    a{\\n        /* background: ; */\\nbox-shadow: 0px 9.88235px 26.3529px rgba(52, 173, 220, 0.25);\\nborder-radius: 5px;\\n\\n\\n    }\\n'\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\n\nvar Email_layout = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject());\nvar Email = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject1(), function(props) {\n    return props.active ? \"#34ADDC\" : \"#FFF\";\n}, function(props) {\n    return props.active ? \"#FFF\" : \"black\";\n}, function(props) {\n    return props.active ? \"#FFF\" : \"#979797\";\n}, function(props) {\n    return props.active ? \"#FFF\" : \"#979797\";\n});\nvar MainEmail = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject2());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2VtYWlsX21lc3NhZ2UvZW1haWxzdHlsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBS2hDLElBQU1DLFlBQVksR0FBR0QsNkRBQVUsbUJBUXJDO0FBQ00sSUFBTUcsS0FBSyxHQUFHSCw2REFBVSxxQkFNQ0ksU0FBQUEsS0FBSztXQUFJQSxLQUFLLENBQUNDLE1BQU0sR0FBRyxTQUFTLEdBQUcsTUFBTTtDQUFBLEVBbUI3Q0QsU0FBQUEsS0FBSztXQUFJQSxLQUFLLENBQUNDLE1BQU0sR0FBRyxNQUFNLEdBQUcsT0FBTztDQUFBLEVBR3BDRCxTQUFBQSxLQUFLO1dBQUlBLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLE1BQU0sR0FBRyxTQUFTO0NBQUEsRUFNOUNELFNBQUFBLEtBQUs7V0FBSUEsS0FBSyxDQUFDQyxNQUFNLEdBQUcsTUFBTSxHQUFHLFNBQVM7Q0FBQSxDQUt0RTtBQUNNLElBQU1DLFNBQVMsR0FBR04sNkRBQVUsb0JBeURsQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2VtYWlsX21lc3NhZ2UvZW1haWxzdHlsZS50cz9iNGM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmludGVyZmFjZSBjaGVja3tcbiAgICBhY3RpdmUgOiBib29sZWFuXG59XG5leHBvcnQgY29uc3QgRW1haWxfbGF5b3V0ID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aCA6IDgwdnc7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLmVtYWlsX2xpc3R7XG4gICAgICAgIHdpZHRoIDogMzUlO1xuICAgIH1cbmBcbmV4cG9ydCBjb25zdCBFbWFpbCA9IHN0eWxlZC5kaXY8Y2hlY2s+YFxuICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UzRTNFMztcbiAgICAgICAgICAgIHBhZGRpbmcgOiAxNXB4IDE1cHggMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYWN0aXZlID8gXCIjMzRBRERDXCIgOiBcIiNGRkZcIn07XG4gICAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbWFnZXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUxcHg7XG4gICAgICAgICAgICAgICAgd2lkdGggOiA1MXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9sdWNhcy5qcGdcIik7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kZXRhaWxze1xuICAgICAgICAgICAgICAgIHdpZHRoIDogNzAlO1xuICAgICAgICAgICAgICAgIC5uYW1le1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmFjdGl2ZSA/IFwiI0ZGRlwiIDogXCJibGFja1wifTs7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVse1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYWN0aXZlID8gXCIjRkZGXCIgOiBcIiM5Nzk3OTdcIn07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1lc3NhZ2V7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYWN0aXZlID8gXCIjRkZGXCIgOiBcIiM5Nzk3OTdcIn07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbmBcbmV4cG9ydCBjb25zdCBNYWluRW1haWwgPSBzdHlsZWQuZGl2YFxuICAgIHBhZGRpbmcgOiAyMHB4O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgLyogYm9yZGVyIDogMXB4IHNvbGlkIHJlZDsgKi9cbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIC5zZW5kZXJ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbiAgICAgICAgLmltYWdle1xuICAgICAgICAgICAgaGVpZ2h0OiA4M3B4O1xuICAgICAgICAgICAgd2lkdGggOiA4M3B4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL25haWphLmpwZ1wiKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC51c2VyZGV0YWlsc3tcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gc2Fuc1wiO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgIGxhYmVse1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzRBRERDO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmNpb257XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTUwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZ2FwOiAxcmVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5tZXNzYWdlY29udGVudHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgICAgICBoNXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgIH1cbiAgICAgICAgcHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAgICAgICBjb2xvcjogIzVBNUE1QjtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgICAgICAgIHdvcmQtc3BhY2luZzogMnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXtcbiAgICAgICAgLyogYmFja2dyb3VuZDogOyAqL1xuYm94LXNoYWRvdzogMHB4IDkuODgyMzVweCAyNi4zNTI5cHggcmdiYSg1MiwgMTczLCAyMjAsIDAuMjUpO1xuYm9yZGVyLXJhZGl1czogNXB4O1xuXG5cbiAgICB9XG5gIl0sIm5hbWVzIjpbInN0eWxlZCIsIkVtYWlsX2xheW91dCIsImRpdiIsIkVtYWlsIiwicHJvcHMiLCJhY3RpdmUiLCJNYWluRW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/email_message/emailstyle.ts\n");

/***/ })

});