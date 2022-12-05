"use strict";
exports.id = 7578;
exports.ids = [7578];
exports.modules = {

/***/ 7578:
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
        xmarkerOffset: 35,
        ymarkerOffset: 5,
        name: "Sydney",
        coordinates: [
            151.2093,
            -33.8688
        ]
    },
    {
        xmarkerOffset: -45,
        ymarkerOffset: 5,
        name: "Melbourne",
        coordinates: [
            144.9631,
            -37.8136
        ]
    },
    {
        xmarkerOffset: -40,
        ymarkerOffset: -23,
        name: "Brisbane",
        coordinates: [
            150.4260,
            -26.4705
        ]
    },
    {
        xmarkerOffset: -30,
        ymarkerOffset: -8,
        name: "Perth",
        coordinates: [
            115.8613,
            -31.9523
        ]
    },
    {
        xmarkerOffset: 0,
        ymarkerOffset: -35,
        name: "Adelaide",
        coordinates: [
            138.6007,
            -34.9285
        ]
    },
    {
        xmarkerOffset: -49,
        ymarkerOffset: -5,
        name: "Gold Coast",
        coordinates: [
            152.4000,
            -29.0167
        ]
    },
    {
        xmarkerOffset: 35,
        ymarkerOffset: 15,
        name: "Canberra",
        coordinates: [
            149.1310,
            -35.2802
        ]
    },
    {
        xmarkerOffset: 48,
        ymarkerOffset: -5,
        name: "Logan City",
        coordinates: [
            153.0619,
            -27.7750
        ]
    },
    {
        xmarkerOffset: 48,
        ymarkerOffset: 10,
        name: "Christchurch",
        coordinates: [
            172.6306,
            -43.5320
        ]
    },
    {
        xmarkerOffset: 48,
        ymarkerOffset: -5,
        name: "Auckland",
        coordinates: [
            174.7645,
            -36.8509
        ]
    }
];
const MapChart = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "australia",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__.ComposableMap, {
            "data-tip": "",
            projectionConfig: {
                scale: 600,
                center: [
                    150,
                    320
                ]
            },
            style: {
                backgroundColor: "#FDF5DF"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__.Geographies, {
                    geography: geoUrl,
                    children: ({ geographies  })=>geographies.filter((d)=>d.properties.CONTINENT === "Oceania").map((geo)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__.Geography, {
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
                            if (name === "Perth") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./Australian_Cities/Perth");
                            }
                            ;
                            if (name === "Logan City") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./Australian_Cities/LoganCity");
                            }
                            ;
                            if (name === "Gold Coast") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./Australian_Cities/GoldCoast");
                            }
                            ;
                            if (name === "Brisbane") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./Australian_Cities/Brisbane");
                            }
                            ;
                            if (name === "Sydney") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./Australian_Cities/Sydney");
                            }
                            ;
                            if (name === "Canberra") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./Australian_Cities/Canberra");
                            }
                            ;
                            if (name === "Melbourne") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./Australian_Cities/Melbourne");
                            }
                            ;
                            if (name === "Adelaide") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./Australian_Cities/Adelaide");
                            }
                            ;
                            if (name === "Auckland") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./Australian_Cities/Auckland");
                            }
                            ;
                            if (name === "Christchurch") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./Australian_Cities/Christchurch");
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