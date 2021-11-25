(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/components/web-footer"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/layout/Footer.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/web/components/layout/Footer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WebFooter",
  computed: {
    footer: function footer() {
      return this.$store.getters.getFooter;
    },
    footerLoaded: function footerLoaded() {
      return this.$store.getters.getFooterLoaded;
    }
  },
  methods: {
    sendWhatsApp: function sendWhatsApp(number) {
      var link = "https://wa.me/+51".concat(number, "?text=").concat(encodeURIComponent("Hola quisiera información del servicio"));
      window.open(link, "_blank");
    }
  },
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/layout/Footer.vue?vue&type=template&id=2d8d35e0&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/web/components/layout/Footer.vue?vue&type=template&id=2d8d35e0& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.footerLoaded
    ? _c(
        "footer",
        {
          staticClass: "grid align-center lazyload",
          attrs: { "data-bg": "/storage/web/img/footer.png" }
        },
        [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-3 col-md-12" }, [
                _c("div", { staticClass: "logo_blanco" }, [
                  _c("img", {
                    staticClass: "lazyload",
                    attrs: { src: "/storage/web/img/dinet_blanco.png", alt: "" }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-12" }, [
                _c("div", { staticClass: "info_footer" }, [
                  _vm.footer.information && _vm.footer.information.direction
                    ? _c("div", {
                        domProps: {
                          innerHTML: _vm._s(_vm.footer.information.direction)
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "p",
                    [
                      _c("b", [_vm._v("Chatbot Whatssapp:")]),
                      _vm._v(" "),
                      _vm.footer.information &&
                      _vm.footer.information.whatsapp_number
                        ? [
                            _c(
                              "a",
                              {
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.sendWhatsApp(
                                      _vm.footer.information.whatsapp_number
                                    )
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "+51\n                                " +
                                    _vm._s(
                                      _vm.footer.information
                                        .whatsapp_number_formatted
                                    )
                                )
                              ]
                            )
                          ]
                        : _vm._e()
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "redes" }, [
                    _vm.footer.social_networks.length
                      ? _c(
                          "ul",
                          { staticClass: "grid align-center" },
                          _vm._l(_vm.footer.social_networks, function(el) {
                            return _c("li", { key: "sn" + el.id }, [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    href: el.url,
                                    target: "_blank",
                                    rel: "noopener"
                                  }
                                },
                                [
                                  el.master_social_networks.icon
                                    ? _c("i", {
                                        class:
                                          "flaticon-" +
                                          el.master_social_networks.icon
                                      })
                                    : _vm._e()
                                ]
                              )
                            ])
                          }),
                          0
                        )
                      : _vm._e()
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-6 col-6" }, [
                _c("div", { staticClass: "menu_footer" }, [
                  _c("ul", [
                    _c("li", [
                      _c(
                        "a",
                        {
                          attrs: { href: _vm.localePath({ name: "about-us" }) }
                        },
                        [
                          _c("img", {
                            staticClass: "lazyload",
                            attrs: {
                              src: "/storage/web/img/icon_list.png",
                              alt: "Sobre Dinet"
                            }
                          }),
                          _vm._v("Sobre Dinet")
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "a",
                        {
                          attrs: { href: _vm.localePath({ name: "services" }) }
                        },
                        [
                          _c("img", {
                            staticClass: "lazyload",
                            attrs: {
                              src: "/storage/web/img/icon_list.png",
                              alt: "Servicios"
                            }
                          }),
                          _vm._v("Servicios")
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: _vm.localePath({ name: "quotations" })
                          }
                        },
                        [
                          _c("img", {
                            staticClass: "lazyload",
                            attrs: {
                              src: "/storage/web/img/icon_list.png",
                              alt: "Cotizaciones"
                            }
                          }),
                          _vm._v("Cotizaciones")
                        ]
                      )
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-6 col-6" }, [
                _c("div", { staticClass: "opciones_footer" }, [
                  _c("ul", [
                    _c("li", [
                      _vm.footer.information && _vm.footer.information.book_link
                        ? _c(
                            "a",
                            {
                              attrs: { href: _vm.footer.information.book_link }
                            },
                            [
                              _c("img", {
                                staticClass: "lazyload",
                                attrs: {
                                  src: "/storage/web/img/icon_libro.png",
                                  alt: "Libro de reclamaciones"
                                }
                              }),
                              _vm._v(" "),
                              _vm._v(
                                "\n                                Libro de reclamaciones\n                            "
                              )
                            ]
                          )
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _vm.footer.information && _vm.footer.information.api_link
                        ? _c(
                            "a",
                            {
                              attrs: { href: _vm.footer.information.api_link }
                            },
                            [
                              _vm._m(0),
                              _vm.footer.information.name_api
                                ? [
                                    _vm._v(
                                      _vm._s(_vm.footer.information.name_api)
                                    )
                                  ]
                                : _vm._e()
                            ],
                            2
                          )
                        : _vm._e()
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "pie" }, [
              _c("div", { staticClass: "row justify-content-between" }, [
                _c("div", { staticClass: "col-lg-3 col-md-5 col-sm-12" }, [
                  _c("div", { staticClass: "copyright" }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(new Date().getFullYear()) +
                        " Dinet © All rights\n                        reserved.\n                    "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-3 col-md-5 col-sm-12" }, [
                  _c("div", { staticClass: "developer" }, [
                    _vm._v(
                      "\n                        Desarrollado por\n                        "
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        attrs: {
                          href: "https://playgroup.pe",
                          target: "_blank"
                        }
                      },
                      [
                        _c("div", { staticClass: "img-dev" }, [
                          _c("img", {
                            staticClass: "lazyload",
                            attrs: { src: "/storage/web/img/logo-play.svg" }
                          }),
                          _c("img", {
                            staticClass: "lazyload litt",
                            attrs: { src: "/storage/web/img/lid.png" }
                          })
                        ]),
                        _vm._v(
                          "\n                            PLAY Group\n                        "
                        )
                      ]
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _vm.footer.information && _vm.footer.information.whatsapp_number
            ? _c("div", { staticClass: "chat-bot" }, [
                _c("ul", [
                  _c("li", { staticClass: "bot" }, [
                    _c(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://wa.me/+51" +
                            _vm.footer.information.whatsapp_number +
                            "?text=" +
                            encodeURIComponent(
                              "Hola quisiera información del servicio"
                            ),
                          target: "_blank"
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "lazyload",
                          attrs: {
                            "data-src": "/storage/web/img/bot.png",
                            alt: ""
                          }
                        })
                      ]
                    )
                  ])
                ])
              ])
            : _vm._e()
        ]
      )
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "flaticon-settings" })])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/web/components/layout/Footer.vue":
/*!*******************************************************!*\
  !*** ./resources/js/web/components/layout/Footer.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_vue_vue_type_template_id_2d8d35e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=2d8d35e0& */ "./resources/js/web/components/layout/Footer.vue?vue&type=template&id=2d8d35e0&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/js/web/components/layout/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Footer_vue_vue_type_template_id_2d8d35e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Footer_vue_vue_type_template_id_2d8d35e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/web/components/layout/Footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/web/components/layout/Footer.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/web/components/layout/Footer.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/layout/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/web/components/layout/Footer.vue?vue&type=template&id=2d8d35e0&":
/*!**************************************************************************************!*\
  !*** ./resources/js/web/components/layout/Footer.vue?vue&type=template&id=2d8d35e0& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_2d8d35e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=template&id=2d8d35e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/layout/Footer.vue?vue&type=template&id=2d8d35e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_2d8d35e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_2d8d35e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);