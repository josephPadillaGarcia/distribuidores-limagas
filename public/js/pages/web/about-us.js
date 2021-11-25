(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/web/about-us"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/Banner.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/web/components/Banner.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Banner",
  props: {
    classes: String,
    title: String,
    banner: String,
    storageUrl: String
  },
  data: function data() {
    return {// storageUrl: process.env.STORAGE_URL
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/Customers.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/web/components/Customers.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_owl_carousel2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-owl-carousel2 */ "./node_modules/vue-owl-carousel2/dist/vue-owl-carousel2.js");
/* harmony import */ var vue_owl_carousel2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_owl_carousel2__WEBPACK_IMPORTED_MODULE_0__);
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
  props: {
    customers: Array,
    content: Array,
    storageUrl: String
  },
  components: {
    carousel: vue_owl_carousel2__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {// storageUrl: process.env.STORAGE_URL
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/views/AboutUs.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/web/views/AboutUs.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/Banner */ "./resources/js/web/components/Banner.vue");
/* harmony import */ var _components_Customers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/Customers */ "./resources/js/web/components/Customers.vue");
/* harmony import */ var vue_owl_carousel2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-owl-carousel2 */ "./node_modules/vue-owl-carousel2/dist/vue-owl-carousel2.js");
/* harmony import */ var vue_owl_carousel2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_owl_carousel2__WEBPACK_IMPORTED_MODULE_3__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: "AboutUs",
  props: {
    storageUrl: {
      type: String
    }
  },
  components: {
    Banner: _components_Banner__WEBPACK_IMPORTED_MODULE_1__["default"],
    Customers: _components_Customers__WEBPACK_IMPORTED_MODULE_2__["default"],
    carousel: vue_owl_carousel2__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  data: function data() {
    return {
      page: {
        data: {
          page: {}
        }
      },
      // storageUrl: process.env.STORAGE_URL,
      loading: true
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get("/api/page/about", {
                  // params: { locale: app.i18n.locale },
                  params: {
                    locale: "es"
                  }
                });

              case 2:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                _this.page = data;
                _this.loading = false;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  mounted: function mounted() {
    $(document).ready(function () {
      $(".fancybox").fancybox();
    });
  },
  created: function created() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/Banner.vue?vue&type=template&id=4fcfd1dc&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/web/components/Banner.vue?vue&type=template&id=4fcfd1dc& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c(
    "section",
    {
      staticClass:
        "lazyload position-relative bottom_section section_bannerNosotros",
      class: _vm.classes,
      attrs: {
        "data-bg": _vm.banner
          ? _vm.storageUrl + "/img/content/" + _vm.banner
          : "",
        id: "seccion_banner_global"
      }
    },
    [
      _c("div", { staticClass: "mb-4 rounded " }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row justify-content-center" }, [
            _c("div", { staticClass: "col-md-5 px-0" }, [
              _c("div", { staticClass: "content_banner" }, [
                _c("h1", { staticClass: "titulo text-center titulo_banner" }, [
                  _vm._v(
                    "\n                            " +
                      _vm._s(_vm.title) +
                      "\n                        "
                  )
                ])
              ])
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/Customers.vue?vue&type=template&id=0d810f55&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/web/components/Customers.vue?vue&type=template&id=0d810f55& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("section", { attrs: { id: "section_clientes" } }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "titulo_global" }, [
          _vm.content[
            _vm.content.findIndex(function(x) {
              return x.name === "Nuestros Clientes"
            })
          ].content_formatted.includes("title") &&
          _vm.content[
            _vm.content.findIndex(function(el) {
              return el.name === "Nuestros Clientes"
            })
          ].content.find(function(x) {
            return x.field === "title"
          })["value_" + _vm.getLocale()]
            ? _c("h2", {}, [
                _vm._v(
                  "\n                    " +
                    _vm._s(
                      _vm.content[
                        _vm.content.findIndex(function(el) {
                          return el.name === "Nuestros Clientes"
                        })
                      ].content.find(function(x) {
                        return x.field === "title"
                      })["value_" + _vm.getLocale()]
                    ) +
                    "\n                "
                )
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-lg-12" },
          [
            _c(
              "carousel",
              {
                staticClass: "carousel_clientes position-relative",
                attrs: {
                  loop: true,
                  margin: 10,
                  nav: true,
                  autoplay: true,
                  autoplayTimeout: 3000,
                  responsive: {
                    0: { items: 2 },
                    600: { items: 3 },
                    1000: { items: 6 }
                  },
                  responsiveBaseElement: "body"
                }
              },
              [
                _c("template", { slot: "prev" }, [
                  _c("span", { staticClass: "prev" }, [_vm._v("‹")])
                ]),
                _vm._v(" "),
                _vm._l(_vm.customers, function(i) {
                  return _c("div", { key: "cus" + i.id, staticClass: "item" }, [
                    _c("img", {
                      staticClass: "lazyload",
                      attrs: {
                        src: _vm.storageUrl + "/img/customers/" + i.image,
                        alt: i.name
                      }
                    })
                  ])
                }),
                _vm._v(" "),
                _c("template", { slot: "next" }, [
                  _c("span", { staticClass: "next" }, [_vm._v("›")])
                ])
              ],
              2
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/views/AboutUs.vue?vue&type=template&id=4779bac1&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/web/views/AboutUs.vue?vue&type=template&id=4779bac1& ***!
  \*********************************************************************************************************************************************************************************************************/
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
  return !_vm.loading
    ? _c(
        "main",
        [
          _c("Banner", {
            attrs: {
              storageUrl: _vm.storageUrl,
              banner: _vm.page.data.content[
                _vm.page.data.content.findIndex(function(x) {
                  return x.name === "Banner"
                })
              ].content_formatted.includes("image")
                ? _vm.page.data.content[
                    _vm.page.data.content.findIndex(function(x) {
                      return x.name === "Banner"
                    })
                  ].content.find(function(x) {
                    return x.field === "image"
                  }).value
                : "",
              title:
                _vm.page.data.content[
                  _vm.page.data.content.findIndex(function(x) {
                    return x.name === "Banner"
                  })
                ].content_formatted.includes("title") &&
                _vm.page.data.content[
                  _vm.page.data.content.findIndex(function(el) {
                    return el.name === "Banner"
                  })
                ].content.find(function(x) {
                  return x.field === "title"
                })["value_" + _vm.getLocale()]
                  ? _vm.page.data.content[
                      _vm.page.data.content.findIndex(function(el) {
                        return el.name === "Banner"
                      })
                    ].content.find(function(x) {
                      return x.field === "title"
                    })["value_" + _vm.getLocale()]
                  : ""
            }
          }),
          _vm._v(" "),
          _c(
            "section",
            {
              staticClass: "bottom_section",
              attrs: { id: "section_video_nosotros" }
            },
            [
              _c("div", { staticClass: "container" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-lg-6 col-md-12" }, [
                    _c("div", { staticClass: "content_info_video" }, [
                      _vm.page.data.content[
                        _vm.page.data.content.findIndex(function(x) {
                          return (
                            x.name ===
                            "Somos el operador logístico del Grupo Sandoval"
                          )
                        })
                      ].content_formatted.includes("title") &&
                      _vm.page.data.content[
                        _vm.page.data.content.findIndex(function(el) {
                          return (
                            el.name ===
                            "Somos el operador logístico del Grupo Sandoval"
                          )
                        })
                      ].content.find(function(x) {
                        return x.field === "title"
                      })["value_" + _vm.getLocale()]
                        ? _c("div", {
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.page.data.content[
                                  _vm.page.data.content.findIndex(function(el) {
                                    return (
                                      el.name ===
                                      "Somos el operador logístico del Grupo Sandoval"
                                    )
                                  })
                                ].content.find(function(x) {
                                  return x.field === "title"
                                })["value_" + _vm.getLocale()]
                              )
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.page.data.content[
                        _vm.page.data.content.findIndex(function(x) {
                          return (
                            x.name ===
                            "Somos el operador logístico del Grupo Sandoval"
                          )
                        })
                      ].content_formatted.includes("description") &&
                      _vm.page.data.content[
                        _vm.page.data.content.findIndex(function(el) {
                          return (
                            el.name ===
                            "Somos el operador logístico del Grupo Sandoval"
                          )
                        })
                      ].content.find(function(x) {
                        return x.field === "description"
                      })["value_" + _vm.getLocale()]
                        ? _c("div", {
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.page.data.content[
                                  _vm.page.data.content.findIndex(function(el) {
                                    return (
                                      el.name ===
                                      "Somos el operador logístico del Grupo Sandoval"
                                    )
                                  })
                                ].content.find(function(x) {
                                  return x.field === "description"
                                })["value_" + _vm.getLocale()]
                              )
                            }
                          })
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6 col-md-12" }, [
                    _c(
                      "div",
                      { staticClass: "video_nosotros position-relative" },
                      [
                        _vm.page.data.content[
                          _vm.page.data.content.findIndex(function(x) {
                            return (
                              x.name ===
                              "Somos el operador logístico del Grupo Sandoval"
                            )
                          })
                        ].content_formatted.includes("image")
                          ? _c("img", {
                              staticClass: "lazyload",
                              attrs: {
                                "data-src":
                                  _vm.storageUrl +
                                  "/img/content/" +
                                  _vm.page.data.content[
                                    _vm.page.data.content.findIndex(function(
                                      x
                                    ) {
                                      return (
                                        x.name ===
                                        "Somos el operador logístico del Grupo Sandoval"
                                      )
                                    })
                                  ].content.find(function(x) {
                                    return x.field === "image"
                                  }).value,
                                alt: ""
                              }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.page.data.content[
                          _vm.page.data.content.findIndex(function(x) {
                            return (
                              x.name ===
                              "Somos el operador logístico del Grupo Sandoval"
                            )
                          })
                        ].content.find(function(x) {
                          return x.field === "url_video"
                        }) &&
                        _vm.page.data.content[
                          _vm.page.data.content.findIndex(function(x) {
                            return (
                              x.name ===
                              "Somos el operador logístico del Grupo Sandoval"
                            )
                          })
                        ].content.find(function(x) {
                          return x.field === "url_video"
                        }).value_es
                          ? _c(
                              "div",
                              { staticClass: "icon_play position-absolute" },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "fancybox",
                                    attrs: {
                                      "data-caption": "video",
                                      "data-fancybox": "Sobre Dinet",
                                      href: _vm.page.data.content[
                                        _vm.page.data.content.findIndex(
                                          function(x) {
                                            return (
                                              x.name ===
                                              "Somos el operador logístico del Grupo Sandoval"
                                            )
                                          }
                                        )
                                      ].content.find(function(x) {
                                        return x.field === "url_video"
                                      }).value_es
                                    }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "lazyload",
                                      attrs: {
                                        src: "/storage/web/img/icon_play.png",
                                        alt: "Icon Play"
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          : _vm._e()
                      ]
                    )
                  ])
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _vm.page.data.customers.length
            ? _c("Customers", {
                staticClass: "bottom_section",
                attrs: {
                  customers: _vm.page.data.customers,
                  content: _vm.page.data.content,
                  storageUrl: _vm.storageUrl
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "section",
            { staticClass: "bottom_section", attrs: { id: "mensaje" } },
            [
              _c("div", { staticClass: "container" }, [
                _c("div", { staticClass: "row justify-content-center" }, [
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c("div", { staticClass: "content_mensaje" }, [
                      _vm.page.data.content[
                        _vm.page.data.content.findIndex(function(x) {
                          return x.name === "Nuestros Clientes"
                        })
                      ].content_formatted.includes("description") &&
                      _vm.page.data.content[
                        _vm.page.data.content.findIndex(function(el) {
                          return el.name === "Nuestros Clientes"
                        })
                      ].content.find(function(x) {
                        return x.field === "description"
                      })["value_" + _vm.getLocale()]
                        ? _c("div", {
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.page.data.content[
                                  _vm.page.data.content.findIndex(function(el) {
                                    return el.name === "Nuestros Clientes"
                                  })
                                ].content.find(function(x) {
                                  return x.field === "description"
                                })["value_" + _vm.getLocale()]
                              )
                            }
                          })
                        : _vm._e()
                    ])
                  ])
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _vm.page.data.testimonials.length
            ? _c(
                "section",
                {
                  staticClass: "bottom_section section_slider_testimonios",
                  attrs: { id: "seccion_slider_soluciones" }
                },
                [
                  _c("div", { staticClass: "container" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "titulo_global" }, [
                        _vm.page.data.content[
                          _vm.page.data.content.findIndex(function(x) {
                            return x.name === "Testimonios"
                          })
                        ].content_formatted.includes("title") &&
                        _vm.page.data.content[
                          _vm.page.data.content.findIndex(function(el) {
                            return el.name === "Testimonios"
                          })
                        ].content.find(function(x) {
                          return x.field === "title"
                        })["value_" + _vm.getLocale()]
                          ? _c("h2", {}, [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(
                                    _vm.page.data.content[
                                      _vm.page.data.content.findIndex(function(
                                        el
                                      ) {
                                        return el.name === "Testimonios"
                                      })
                                    ].content.find(function(x) {
                                      return x.field === "title"
                                    })["value_" + _vm.getLocale()]
                                  ) +
                                  "\n                    "
                              )
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-lg-12" },
                        [
                          _c(
                            "carousel",
                            {
                              staticClass:
                                "carousel_saluciones carosusel_testimonios position-relative",
                              attrs: {
                                autoplay: true,
                                loop: true,
                                margin: 10,
                                nav: true,
                                autoplayTimeout: 3000,
                                responsive: {
                                  0: { items: 1 },
                                  600: { items: 2 },
                                  1000: { items: 3 }
                                },
                                responsiveBaseElement: "body"
                              }
                            },
                            _vm._l(_vm.page.data.testimonials, function(i) {
                              return _c(
                                "div",
                                { key: i.id + "te", staticClass: "item" },
                                [
                                  _c("img", {
                                    staticClass: "lazyload",
                                    attrs: {
                                      "data-src":
                                        _vm.storageUrl +
                                        "/img/testimonials/" +
                                        i.image,
                                      alt: i["title_" + _vm.getLocale()]
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "content_solucion position-relative"
                                    },
                                    [
                                      _c("b", { staticClass: "text-center" }, [
                                        _vm._v(
                                          _vm._s(i["title_" + _vm.getLocale()])
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("div", {
                                        staticClass: "text-center",
                                        domProps: {
                                          innerHTML: _vm._s(
                                            i["description_" + _vm.getLocale()]
                                          )
                                        }
                                      })
                                    ]
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ]
              )
            : _vm._e()
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/web/components/Banner.vue":
/*!************************************************!*\
  !*** ./resources/js/web/components/Banner.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Banner_vue_vue_type_template_id_4fcfd1dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Banner.vue?vue&type=template&id=4fcfd1dc& */ "./resources/js/web/components/Banner.vue?vue&type=template&id=4fcfd1dc&");
/* harmony import */ var _Banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Banner.vue?vue&type=script&lang=js& */ "./resources/js/web/components/Banner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Banner_vue_vue_type_template_id_4fcfd1dc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Banner_vue_vue_type_template_id_4fcfd1dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/web/components/Banner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/web/components/Banner.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/web/components/Banner.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Banner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/Banner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/web/components/Banner.vue?vue&type=template&id=4fcfd1dc&":
/*!*******************************************************************************!*\
  !*** ./resources/js/web/components/Banner.vue?vue&type=template&id=4fcfd1dc& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_template_id_4fcfd1dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Banner.vue?vue&type=template&id=4fcfd1dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/Banner.vue?vue&type=template&id=4fcfd1dc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_template_id_4fcfd1dc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_template_id_4fcfd1dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/web/components/Customers.vue":
/*!***************************************************!*\
  !*** ./resources/js/web/components/Customers.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Customers_vue_vue_type_template_id_0d810f55___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Customers.vue?vue&type=template&id=0d810f55& */ "./resources/js/web/components/Customers.vue?vue&type=template&id=0d810f55&");
/* harmony import */ var _Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Customers.vue?vue&type=script&lang=js& */ "./resources/js/web/components/Customers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Customers_vue_vue_type_template_id_0d810f55___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Customers_vue_vue_type_template_id_0d810f55___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/web/components/Customers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/web/components/Customers.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/web/components/Customers.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Customers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/Customers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/web/components/Customers.vue?vue&type=template&id=0d810f55&":
/*!**********************************************************************************!*\
  !*** ./resources/js/web/components/Customers.vue?vue&type=template&id=0d810f55& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_template_id_0d810f55___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Customers.vue?vue&type=template&id=0d810f55& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/Customers.vue?vue&type=template&id=0d810f55&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_template_id_0d810f55___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_template_id_0d810f55___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/web/views/AboutUs.vue":
/*!********************************************!*\
  !*** ./resources/js/web/views/AboutUs.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AboutUs_vue_vue_type_template_id_4779bac1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutUs.vue?vue&type=template&id=4779bac1& */ "./resources/js/web/views/AboutUs.vue?vue&type=template&id=4779bac1&");
/* harmony import */ var _AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutUs.vue?vue&type=script&lang=js& */ "./resources/js/web/views/AboutUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AboutUs_vue_vue_type_template_id_4779bac1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AboutUs_vue_vue_type_template_id_4779bac1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/web/views/AboutUs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/web/views/AboutUs.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/web/views/AboutUs.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutUs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/views/AboutUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/web/views/AboutUs.vue?vue&type=template&id=4779bac1&":
/*!***************************************************************************!*\
  !*** ./resources/js/web/views/AboutUs.vue?vue&type=template&id=4779bac1& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_template_id_4779bac1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutUs.vue?vue&type=template&id=4779bac1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/views/AboutUs.vue?vue&type=template&id=4779bac1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_template_id_4779bac1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_template_id_4779bac1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);