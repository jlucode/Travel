"use strict";
exports.id = 3329;
exports.ids = [3329];
exports.modules = {

/***/ 3329:
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
        xmarkerOffset: 72,
        ymarkerOffset: -7,
        name: "Bogota, Colombia",
        coordinates: [
            -72.0721,
            3.7110
        ]
    },
    {
        xmarkerOffset: -69,
        ymarkerOffset: 0,
        name: "Sao Paulo, Brazil",
        coordinates: [
            -46.6396,
            -23.5558
        ]
    },
    {
        xmarkerOffset: -46,
        ymarkerOffset: -7,
        name: "Lima, Peru",
        coordinates: [
            -77.0428,
            -12.0464
        ]
    },
    {
        xmarkerOffset: -76,
        ymarkerOffset: -12,
        name: "Medellin, Colombia",
        coordinates: [
            -75.5658,
            6.2476
        ]
    },
    {
        xmarkerOffset: 93,
        ymarkerOffset: 15,
        name: "Buenos Aires, Argentina",
        coordinates: [
            -58.3816,
            -34.6037
        ]
    },
    {
        xmarkerOffset: 88,
        ymarkerOffset: -12,
        name: "Rio de Janeiro, Brazil",
        coordinates: [
            -43.1729,
            -22.9068
        ]
    },
    {
        xmarkerOffset: 80,
        ymarkerOffset: -25,
        name: "Cartagena, Colombia",
        coordinates: [
            -75.4832,
            10.3932
        ]
    },
    {
        xmarkerOffset: -60,
        ymarkerOffset: -3,
        name: "Santiago, Chile",
        coordinates: [
            -70.6693,
            -33.4489
        ]
    },
    {
        xmarkerOffset: -55,
        ymarkerOffset: 3,
        name: "Cali, Colombia",
        coordinates: [
            -76.5320,
            2.4516
        ]
    },
    {
        xmarkerOffset: -40,
        ymarkerOffset: 10,
        name: "Cusco, Peru",
        coordinates: [
            -71.9675,
            -13.5320
        ]
    }
];
const MapChart = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "southamerica",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__.ComposableMap, {
            "data-tip": "",
            projectionConfig: {
                scale: 310,
                center: [
                    -66,
                    -29
                ]
            },
            style: {
                backgroundColor: "#FDF5DF"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__.Geographies, {
                    geography: geoUrl,
                    children: ({ geographies  })=>geographies.filter((d)=>d.properties.CONTINENT === "South America").map((geo)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__.Geography, {
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
                            if (name === "Cartagena, Colombia") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./SouthAmerican_Cities/Cartagena");
                            }
                            ;
                            if (name === "Bogota, Colombia") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./SouthAmerican_Cities/Bogota");
                            }
                            ;
                            if (name === "Medellin, Colombia") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./SouthAmerican_Cities/Medellin");
                            }
                            ;
                            if (name === "Cali, Colombia") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./SouthAmerican_Cities/Cali");
                            }
                            ;
                            if (name === "Lima, Peru") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./SouthAmerican_Cities/Lima");
                            }
                            ;
                            if (name === "Cusco, Peru") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./SouthAmerican_Cities/Cusco");
                            }
                            ;
                            if (name === "Rio de Janeiro, Brazil") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./SouthAmerican_Cities/RioDeJaneiro");
                            }
                            ;
                            if (name === "Sao Paulo, Brazil") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./SouthAmerican_Cities/SaoPaulo");
                            }
                            ;
                            if (name === "Santiago, Chile") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./SouthAmerican_Cities/Santiago");
                            }
                            ;
                            if (name === "Buenos Aires, Argentina") {
                                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("./SouthAmerican_Cities/BuenosAires");
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