"use strict";
exports.id = 718;
exports.ids = [718];
exports.modules = {

/***/ 9503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* binding */ Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/admin_nav/admin.ts

const Mynav = (external_styled_components_default()).div`
    height: 100vh;
    width : 10vw;
    display: flex;
    flex-direction: column;
    gap : 2rem;
    align-items: center;
    padding-top: 20px;
    position: fixed;
    left: 0px;
    top: 0px;
    background: #FFFFFF;
/* Frame Shadow */

box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    .li{
        svg{
            /* color :#C9C9C9; */
        }
        svg:hover{
            cursor: pointer;
            color : #34ADDC;
        }
    }
    .first{
        margin-top: 50px;
    }
`;

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/admin_nav/adminNav.tsx




const Navbar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Mynav, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: "/tritezlogo.png",
                width: "70",
                height: "40"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "li first",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/admin",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "28",
                        height: "28",
                        fill: "currentColor",
                        className: "bi bi-columns-gap",
                        viewBox: "0 0 16 16",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M6 1v3H1V1h5zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12v3h-5v-3h5zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8v7H1V8h5zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6v7h-5V1h5zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z"
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "li",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/userorders",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "28",
                        height: "28",
                        fill: "currentColor",
                        className: "bi bi-list",
                        viewBox: "0 0 16 16",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            "fill-rule": "evenodd",
                            d: "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "li",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/allproducts",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "28",
                        height: "28",
                        fill: "currentColor",
                        className: "bi bi-bag",
                        viewBox: "0 0 16 16",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "li",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/reviewsmanager",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "28",
                            height: "28",
                            fill: "currentColor",
                            className: "bi bi-chat-left-text",
                            viewBox: "0 0 16 16",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
                                })
                            ]
                        })
                    }),
                    " "
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "li",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/mailresponse",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "28",
                        height: "28",
                        fill: "currentColor",
                        className: "bi bi-envelope",
                        viewBox: "0 0 16 16",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "li",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "#",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "28",
                        height: "28",
                        fill: "currentColor",
                        className: "bi bi-box-arrow-right",
                        viewBox: "0 0 16 16",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                "fill-rule": "evenodd",
                                d: "M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                "fill-rule": "evenodd",
                                d: "M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                            })
                        ]
                    })
                })
            })
        ]
    });
};


/***/ }),

/***/ 3330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* binding */ Searchbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/upsearch/upsearstyle.ts

const SearchNav = (external_styled_components_default()).div`
    width : 90vw;
    height: 10vh;
    display: flex;
    align-items: center;
    margin-left: auto;
    padding : 10px 0px;
    position: fixed;
    top: 0px;
    left: 10vw;
    background: #FFFFFF;

box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    .left{
        border : 1px solid blue;
        margin-left: 20px;
        background-color: #F9F9F9;
        border: 5px;
        padding : 5px 10px;
        input{
            background-color: #F9F9F9;
            border: none;
            margin-left: 10px;
            padding-left: 30px;
            width: 400px;
        }
        svg:hover{
            color : #34ADDC;
            cursor: pointer;
        }
    }
    .right{
        margin-left: auto;
        display: flex;
        align-items: center;
        margin-right: 60px;
        .ico{
        }
        .name{
            color : #34ADDC;
            margin-left: 20px;
            label{
                font-size: small;
                color : #5A5A5B;
            }
        }
        .userimage{
            height: 40px;
            width : 40px;
            background-image: url("/blouse.jpg");
            background-size: cover;
            background-position: top;
            margin-left: 20px;
            border-radius: 100%;
        }
    }
`;

;// CONCATENATED MODULE: ./components/upsearch/upsearch.tsx


const Searchbar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SearchNav, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "left",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16",
                            fill: "currentColor",
                            className: "bi bi-search",
                            viewBox: "0 0 16 16",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        placeholder: "Search"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "right",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "ico",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16",
                            fill: "currentColor",
                            className: "bi bi-bell",
                            viewBox: "0 0 16 16",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "name",
                        children: [
                            "Victoria Francis ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "",
                                children: " Admin"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "userimage"
                    })
                ]
            })
        ]
    });
};


/***/ })

};
;