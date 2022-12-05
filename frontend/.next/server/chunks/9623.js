"use strict";
exports.id = 9623;
exports.ids = [9623];
exports.modules = {

/***/ 9623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4190);
/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_simple_maps__WEBPACK_IMPORTED_MODULE_2__);



const geoUrl = "world-110m.json";
const MapChart = ({ setTooltipContent  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_simple_maps__WEBPACK_IMPORTED_MODULE_2__.ComposableMap, {
        "data-tip": "",
        projectionConfig: {
            scale: 180,
            center: [
                20,
                -16
            ]
        },
        style: {
            backgroundColor: "#FDF5DF"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_simple_maps__WEBPACK_IMPORTED_MODULE_2__.Geographies, {
            geography: geoUrl,
            children: ({ geographies  })=>geographies.filter((d)=>d.properties.CONTINENT !== "Antarctica").map((geo)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_simple_maps__WEBPACK_IMPORTED_MODULE_2__.Geography, {
                        geography: geo,
                        onMouseEnter: ()=>{
                            const { CONTINENT  } = geo.properties;
                            setTooltipContent(`${CONTINENT}`);
                        },
                        onMouseLeave: ()=>{
                            setTooltipContent("");
                        },
                        fill: "#AF8C72",
                        stroke: "#FDF5DF",
                        fillOpacity: 0.9,
                        strokeOpacity: 0.5,
                        onClick: ()=>{
                            let continent = geo.properties.CONTINENT;
                            if (continent === "Asia") {
                                document.querySelector("#asia").scrollIntoView({
                                    behavior: "smooth"
                                });
                            } else if (continent === "Europe") {
                                document.querySelector("#europe").scrollIntoView({
                                    behavior: "smooth"
                                });
                            } else if (continent === "Oceania") {
                                document.querySelector("#australia").scrollIntoView({
                                    behavior: "smooth"
                                });
                            } else if (continent === "Africa") {
                                document.querySelector("#africa").scrollIntoView({
                                    behavior: "smooth"
                                });
                            } else if (continent === "Oceania") {
                                document.querySelector("#australia").scrollIntoView({
                                    behavior: "smooth"
                                });
                            } else if (continent === "South America") {
                                document.querySelector("#southamerica").scrollIntoView({
                                    behavior: "smooth"
                                });
                            } else if (continent === "North America") {
                                document.querySelector("#northamerica").scrollIntoView({
                                    behavior: "smooth"
                                });
                            }
                        },
                        style: {
                            default: {
                                outline: "none"
                            },
                            hover: {
                                fill: "#90CDC3",
                                stroke: "#FDF5DF",
                                strokeWidth: 0.76,
                                outline: "black"
                            },
                            pressed: {
                                fill: "#FDF5DF",
                                stroke: "#64418a",
                                strokeWidth: 0.76,
                                outline: "black"
                            }
                        }
                    }, geo.rsmKey))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(MapChart));


/***/ })

};
;