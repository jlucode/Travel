"use strict";
exports.id = 885;
exports.ids = [885];
exports.modules = {

/***/ 885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4190);
/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__);




const geoUrl = "world-110m.json";
const markers = [
    {
        xmarkerOffset: 60,
        ymarkerOffset: -6,
        name: "Cairo, Egypt",
        coordinates: [
            31.2357,
            30.0444
        ]
    },
    {
        xmarkerOffset: 0,
        ymarkerOffset: -35,
        name: "Johannesburg, South Africa",
        coordinates: [
            28.0473,
            -26.2041
        ]
    },
    {
        xmarkerOffset: -40,
        ymarkerOffset: 25,
        name: "Lagos, Nigeria",
        coordinates: [
            3.3792,
            6.5244
        ]
    },
    {
        xmarkerOffset: 70,
        ymarkerOffset: 8,
        name: "Nairobi, Kenya",
        coordinates: [
            36.8219,
            -1.2921
        ]
    },
    {
        xmarkerOffset: 0,
        ymarkerOffset: 15,
        name: "Marrakech, Morocco",
        coordinates: [
            -7.9811,
            27.6295
        ]
    },
    {
        xmarkerOffset: 0,
        ymarkerOffset: 17,
        name: "Cape Town, South Africa",
        coordinates: [
            18.4241,
            -33.9249
        ]
    },
    {
        xmarkerOffset: 75,
        ymarkerOffset: -20,
        name: "Tunis, North Africa",
        coordinates: [
            9.5375,
            33.8869
        ]
    },
    {
        xmarkerOffset: 92,
        ymarkerOffset: -20,
        name: "Addis Ababa, Ethiopia",
        coordinates: [
            38.7578,
            8.9806
        ]
    },
    {
        xmarkerOffset: 0,
        ymarkerOffset: -28,
        name: "Algiers, Algeria",
        coordinates: [
            3.0588,
            36.7538
        ]
    },
    {
        xmarkerOffset: -80,
        ymarkerOffset: -20,
        name: "Casablanca, Morocco",
        coordinates: [
            -7.5898,
            33.5731
        ]
    }
];
const MapChart = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "africa",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__.ComposableMap, {
            "data-tip": "",
            projectionConfig: {
                scale: 225,
                center: [
                    20,
                    -19
                ]
            },
            style: {
                backgroundColor: "#FDF5DF"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__.Geographies, {
                    geography: geoUrl,
                    children: ({ geographies  })=>geographies.filter((d)=>d.properties.CONTINENT === "Africa").map((geo)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__.Geography, {
                                geography: geo,
                                fill: "#AF8C72",
                                fillOpacity: 0.9,
                                stroke: "#FDF5DF",
                                strokeOpacity: 0.6,
                                style: {
                                    default: {
                                        outline: "none"
                                    },
                                    hover: {
                                        outline: "none"
                                    },
                                    pressed: {
                                        outline: "none"
                                    }
                                }
                            }, geo.rsmKey))
                }),
                markers.map(({ name , coordinates , xmarkerOffset , ymarkerOffset  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__.Marker, {
                        coordinates: coordinates,
                        onClick: ()=>{
                            if (name === "Algiers, Algeria") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./African_Cities/Algiers");
                            }
                            ;
                            if (name === "Casablanca, Morocco") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./African_Cities/Casablanca");
                            }
                            ;
                            if (name === "Tunis, North Africa") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./African_Cities/Tunis");
                            }
                            ;
                            if (name === "Cairo, Egypt") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./African_Cities/Cairo");
                            }
                            ;
                            if (name === "Marrakech, Morocco") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./African_Cities/Marrakech");
                            }
                            ;
                            if (name === "Addis Ababa, Ethiopia") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./African_Cities/AddisAbaba");
                            }
                            ;
                            if (name === "Lagos, Nigeria") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./African_Cities/Lagos");
                            }
                            ;
                            if (name === "Nairobi, Kenya") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./African_Cities/Nairobi");
                            }
                            ;
                            if (name === "Johannesburg, South Africa") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./African_Cities/Johannesburg");
                            }
                            ;
                            if (name === "Cape Town, South Africa") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./African_Cities/CapeTown");
                            }
                            ;
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                fill: "#FDF5DF",
                                stroke: "black",
                                strokeWidth: "4",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                transform: "translate(-12, -24)",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                        cx: "12",
                                        cy: "10",
                                        r: "3"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("text", {
                                textAnchor: "middle",
                                x: xmarkerOffset,
                                y: ymarkerOffset,
                                style: {
                                    fontFamily: "Cochin",
                                    fill: "Black"
                                },
                                children: name
                            })
                        ]
                    }, name))
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(MapChart));


/***/ })

};
;