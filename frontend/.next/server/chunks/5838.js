"use strict";
exports.id = 5838;
exports.ids = [5838];
exports.modules = {

/***/ 5838:
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
        xmarkerOffset: 55,
        ymarkerOffset: 15,
        name: "Cancun, Mexico",
        coordinates: [
            -86.8515,
            21.1619
        ],
        group: 0
    },
    {
        xmarkerOffset: 65,
        ymarkerOffset: -7,
        name: "Las Vegas, USA",
        coordinates: [
            -115.1391,
            36.1716
        ],
        group: 1
    },
    {
        xmarkerOffset: -80,
        ymarkerOffset: -10,
        name: "Los Angeles, USA",
        coordinates: [
            -118.2437,
            34.0522
        ],
        group: 2
    },
    {
        xmarkerOffset: -73,
        ymarkerOffset: 10,
        name: "Mexico City, Mexico",
        coordinates: [
            -99.1332,
            19.4326
        ],
        group: 3
    },
    {
        xmarkerOffset: 58,
        ymarkerOffset: 13,
        name: "New York, USA",
        coordinates: [
            -74.0060,
            40.7128
        ],
        group: 4
    },
    {
        xmarkerOffset: 65,
        ymarkerOffset: -7,
        name: "Orlando, USA",
        coordinates: [
            -81.3789,
            28.5384
        ],
        group: 5
    },
    {
        xmarkerOffset: 70,
        ymarkerOffset: 5,
        name: "San Diego, USA",
        coordinates: [
            -117.1611,
            32.7157
        ],
        group: 6
    },
    {
        xmarkerOffset: -70,
        ymarkerOffset: -27,
        name: "San Francisco, USA",
        coordinates: [
            -122.4194,
            37.7749
        ],
        group: 7
    },
    {
        xmarkerOffset: 35,
        ymarkerOffset: 15,
        name: "Seattle, USA",
        coordinates: [
            -122.3321,
            47.6062
        ],
        group: 8
    },
    {
        xmarkerOffset: 0,
        ymarkerOffset: -30,
        name: "Toronto, Canada",
        coordinates: [
            -79.3832,
            43.6532
        ],
        group: 9
    }
];
const MapChart = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "northamerica",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__.ComposableMap, {
            "data-tip": "",
            projectionConfig: {
                scale: 520,
                center: [
                    -90,
                    21
                ]
            },
            style: {
                backgroundColor: "#FDF5DF"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__.Geographies, {
                    geography: geoUrl,
                    children: ({ geographies  })=>geographies.filter((d)=>d.properties.CONTINENT === "North America").map((geo)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__.Geography, {
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
                markers.map(({ name , coordinates , xmarkerOffset , ymarkerOffset , group  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__.Marker, {
                        coordinates: coordinates,
                        onClick: ()=>{
                            if (name === "Cancun, Mexico") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./NorthAmerican_Cities/Cancun");
                            }
                            ;
                            if (name === "Las Vegas, USA") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./NorthAmerican_Cities/LasVegas");
                            }
                            ;
                            if (name === "Los Angeles, USA") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./NorthAmerican_Cities/LosAngeles");
                            }
                            ;
                            if (name === "Mexico City, Mexico") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./NorthAmerican_Cities/MexicoCity");
                            }
                            ;
                            if (name === "New York, USA") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./NorthAmerican_Cities/NewYork");
                            }
                            ;
                            if (name === "Orlando, USA") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./NorthAmerican_Cities/Orlando");
                            }
                            ;
                            if (name === "San Diego, USA") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./NorthAmerican_Cities/SanDiego");
                            }
                            ;
                            if (name === "San Francisco, USA") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./NorthAmerican_Cities/SanFrancisco");
                            }
                            ;
                            if (name === "Seattle, USA") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./NorthAmerican_Cities/Seattle");
                            }
                            ;
                            if (name === "Toronto, Canada") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./NorthAmerican_Cities/Toronto");
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
                                group: group,
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