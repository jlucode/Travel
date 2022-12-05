"use strict";
exports.id = 2195;
exports.ids = [2195];
exports.modules = {

/***/ 2195:
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
        xmarkerOffset: -75,
        ymarkerOffset: -7,
        name: "Bangkok, Thailand",
        coordinates: [
            100.5018,
            13.7563
        ]
    },
    {
        xmarkerOffset: 80,
        ymarkerOffset: -21,
        name: "Manila, Phillippines",
        coordinates: [
            120.9842,
            14.5995
        ]
    },
    {
        xmarkerOffset: 85,
        ymarkerOffset: -7,
        name: "Singapore, Singapore",
        coordinates: [
            103.8198,
            1.3521
        ]
    },
    {
        xmarkerOffset: -5,
        ymarkerOffset: -30,
        name: "Dubai, UAE",
        coordinates: [
            55.2708,
            25.2048
        ]
    },
    {
        xmarkerOffset: 57,
        ymarkerOffset: -23,
        name: "Tokyo, Japan",
        coordinates: [
            139.6503,
            35.6762
        ]
    },
    {
        xmarkerOffset: 0,
        ymarkerOffset: 26,
        name: "Bali, Indonesia",
        coordinates: [
            115.1889,
            -8.4095
        ]
    },
    {
        xmarkerOffset: 62,
        ymarkerOffset: -30,
        name: "Hong Kong, China",
        coordinates: [
            114.1694,
            22.3193
        ]
    },
    {
        xmarkerOffset: -93,
        ymarkerOffset: -10,
        name: "Kuala Lumpur, Malaysia",
        coordinates: [
            101.6869,
            3.1390
        ]
    },
    {
        xmarkerOffset: -75,
        ymarkerOffset: -25,
        name: "Seoul, South Korea",
        coordinates: [
            126.9780,
            37.5665
        ]
    },
    {
        xmarkerOffset: 58,
        ymarkerOffset: -28,
        name: "New Delhi, India",
        coordinates: [
            77.2090,
            28.6139
        ]
    }
];
const MapChart = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "asia",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__.ComposableMap, {
            "data-tip": "",
            projectionConfig: {
                scale: 310,
                center: [
                    90,
                    1
                ]
            },
            style: {
                backgroundColor: "#FDF5DF"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__.Geographies, {
                    geography: geoUrl,
                    children: ({ geographies  })=>geographies.filter((d)=>d.properties.CONTINENT === "Asia").map((geo)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__.Geography, {
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
                            if (name === "New Delhi, India") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./Asian_Cities/NewDelhi");
                            }
                            ;
                            if (name === "Dubai, UAE") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./Asian_Cities/Dubai");
                            }
                            ;
                            if (name === "Seoul, South Korea") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./Asian_Cities/Seoul");
                            }
                            ;
                            if (name === "Hong Kong, China") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./Asian_Cities/HongKong");
                            }
                            ;
                            if (name === "Bangkok, Thailand") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./Asian_Cities/Bangkok");
                            }
                            ;
                            if (name === "Kuala Lumpur, Malaysia") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./Asian_Cities/KualaLumpur");
                            }
                            ;
                            if (name === "Tokyo, Japan") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./Asian_Cities/Tokyo");
                            }
                            ;
                            if (name === "Manila, Phillippines") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./Asian_Cities/Manila");
                            }
                            ;
                            if (name === "Singapore, Singapore") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./Asian_Cities/Singapore");
                            }
                            ;
                            if (name === "Bali, Indonesia") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./Asian_Cities/Bali");
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