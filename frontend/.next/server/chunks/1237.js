"use strict";
exports.id = 1237;
exports.ids = [1237];
exports.modules = {

/***/ 1237:
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
        xmarkerOffset: -88,
        ymarkerOffset: 10,
        name: "London, United Kingdom",
        coordinates: [
            -0.1276,
            51.5072
        ]
    },
    {
        xmarkerOffset: 6,
        ymarkerOffset: 19,
        name: "Paris, France",
        coordinates: [
            2.3522,
            48.8566
        ]
    },
    {
        xmarkerOffset: 0,
        ymarkerOffset: 10,
        name: "Florence, Italy",
        coordinates: [
            11.2558,
            43.7696
        ]
    },
    {
        xmarkerOffset: 56,
        ymarkerOffset: 12,
        name: "Madrid, Spain",
        coordinates: [
            -3.7038,
            40.4168
        ]
    },
    {
        xmarkerOffset: -50,
        ymarkerOffset: 0,
        name: "Milan, Italy",
        coordinates: [
            9.1900,
            45.4642
        ]
    },
    {
        xmarkerOffset: -65,
        ymarkerOffset: 4,
        name: "Lisbon, Portugal",
        coordinates: [
            -9.1393,
            38.7223
        ]
    },
    {
        xmarkerOffset: 78,
        ymarkerOffset: -7,
        name: "Budapest, Hungary",
        coordinates: [
            19.0402,
            47.4979
        ]
    },
    {
        xmarkerOffset: -55,
        ymarkerOffset: -30,
        name: "Dublin, Ireland",
        coordinates: [
            -6.2603,
            53.3498
        ]
    },
    {
        xmarkerOffset: 94,
        ymarkerOffset: -7,
        name: "Amsterdam, Netherlands",
        coordinates: [
            4.9041,
            52.36761
        ]
    },
    {
        xmarkerOffset: -65,
        ymarkerOffset: -7,
        name: "Vienna, Austria",
        coordinates: [
            16.3738,
            48.2082
        ]
    }
];
const MapChart = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "europe",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__.ComposableMap, {
            "data-tip": "",
            projectionConfig: {
                scale: 1000,
                center: [
                    5.5,
                    40
                ]
            },
            style: {
                backgroundColor: "#FDF5DF"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__.Geographies, {
                    geography: geoUrl,
                    children: ({ geographies  })=>geographies.filter((d)=>d.properties.CONTINENT === "Europe").map((geo)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__.Geography, {
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
                            if (name === "Dublin, Ireland") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./European_Cities/Dublin");
                            }
                            ;
                            if (name === "Amsterdam, Netherlands") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./European_Cities/Amsterdam");
                            }
                            ;
                            if (name === "London, United Kingdom") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./European_Cities/London");
                            }
                            ;
                            if (name === "Paris, France") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./European_Cities/Paris");
                            }
                            ;
                            if (name === "Vienna, Austria") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./European_Cities/Vienna");
                            }
                            ;
                            if (name === "Budapest, Hungary") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./European_Cities/Budapest");
                            }
                            ;
                            if (name === "Milan, Italy") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./European_Cities/Milan");
                            }
                            ;
                            if (name === "Florence, Italy") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./European_Cities/Florence");
                            }
                            ;
                            if (name === "Madrid, Spain") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./European_Cities/Madrid");
                            }
                            ;
                            if (name === "Lisbon, Portugal") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./European_Cities/Lisbon");
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