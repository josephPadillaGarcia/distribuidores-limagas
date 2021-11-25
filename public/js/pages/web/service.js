(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/web/service"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/items/ItemService.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/web/components/items/ItemService.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ItemService",
  props: {
    data: Object,
    storageUrl: String
  },
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/views/Service.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/web/views/Service.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_owl_carousel2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-owl-carousel2 */ "./node_modules/vue-owl-carousel2/dist/vue-owl-carousel2.js");
/* harmony import */ var vue_owl_carousel2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_owl_carousel2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/Banner */ "./resources/js/web/components/Banner.vue");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/Form */ "./resources/js/web/components/Form.vue");
/* harmony import */ var _components_items_ItemService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/items/ItemService */ "./resources/js/web/components/items/ItemService.vue");


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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Service",
  components: {
    Banner: _components_Banner__WEBPACK_IMPORTED_MODULE_2__["default"],
    ItemService: _components_items_ItemService__WEBPACK_IMPORTED_MODULE_4__["default"],
    Form: _components_Form__WEBPACK_IMPORTED_MODULE_3__["default"],
    carousel: vue_owl_carousel2__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  props: {
    storageUrl: {
      type: String
    }
  },
  data: function data() {
    return {
      page: {},
      errors: {},
      // storageUrl: process.env.STORAGE_URL,
      success: false,
      loading: true
    };
  },
  // nuxtI18n: {
  //   paths: {
  //     en: "/services/:slug",
  //     es: "/servicios/:slug",
  //   },
  // },
  mounted: function mounted() {
    $(document).ready(function () {
      $(".fancybox").fancybox();
    });
  },
  methods: {
    getData: function getData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var pathArray, slug, _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                pathArray = window.location.pathname.split('/');
                slug = pathArray.at(-1);
                _context.next = 4;
                return axios.get("/api/page/services/" + slug, {
                  // params: { locale: app.i18n.locale },
                  params: {
                    locale: "es"
                  }
                });

              case 4:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                _this.page = data;
                _this.loading = false;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/items/ItemService.vue?vue&type=template&id=2688e053&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/web/components/items/ItemService.vue?vue&type=template&id=2688e053& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "item" }, [
    _c(
      "a",
      {
        attrs: {
          href: _vm.localePath({
            name: "services",
            params: { slug: _vm.data["slug_" + _vm.getLocale()] }
          })
        }
      },
      [
        _vm.data.image
          ? _c("img", {
              staticClass: "lazyload",
              attrs: {
                src: _vm.storageUrl + "/img/services/" + _vm.data.image,
                alt: "Imagen " + _vm.data["title_" + _vm.getLocale()]
              }
            })
          : _vm._e()
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "content_solucion position-relative" }, [
      _c("span", { staticClass: "position-absolute icons-solucion" }, [
        _vm.data.icon_white
          ? _c("img", {
              staticClass: "lazyload",
              attrs: {
                src: _vm.storageUrl + "/img/services/" + _vm.data.icon_white,
                alt: "Icono " + _vm.data["title_" + _vm.getLocale()]
              }
            })
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("b", { staticClass: "text-center" }, [
        _vm._v(_vm._s(_vm.data["title_" + _vm.getLocale()]))
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-center" }, [
        _vm._v(_vm._s(_vm.data["excerpt_" + _vm.getLocale()]))
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn_global btn_border text-center btn_color_text",
          attrs: {
            href: _vm.localePath({
              name: "services",
              params: { slug: _vm.data["slug_" + _vm.getLocale()] }
            })
          }
        },
        [_vm._v("\n            Conoce más\n            ")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/views/Service.vue?vue&type=template&id=db59c52a&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/web/views/Service.vue?vue&type=template&id=db59c52a& ***!
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
              title: _vm.page.data.service["title_" + _vm.getLocale()]
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
                    _c(
                      "div",
                      { staticClass: "video_nosotros position-relative" },
                      [
                        _c("img", {
                          staticClass: "lazyload",
                          attrs: {
                            "data-src":
                              _vm.storageUrl +
                              "/img/services/" +
                              _vm.page.data.service["image"],
                            alt: ""
                          }
                        }),
                        _vm._v(" "),
                        _vm.page.data.service.url_video
                          ? _c(
                              "div",
                              { staticClass: "icon_play position-absolute" },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "fancybox",
                                    attrs: {
                                      href: _vm.page.data.service.url_video,
                                      "data-fancybox": "Servicio"
                                    }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "lazyload",
                                      attrs: {
                                        src: "/storage/web/img/icon_play.png",
                                        alt: ""
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          : _vm._e()
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6 col-md-12" }, [
                    _c("div", {
                      staticClass: "content_info_video",
                      domProps: {
                        innerHTML: _vm._s(
                          _vm.page.data.service[
                            "description_" + _vm.getLocale()
                          ]
                        )
                      }
                    })
                  ])
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "section",
            { staticClass: "bottom_section", attrs: { id: "form_servicio" } },
            [
              _c("div", { staticClass: "container" }, [
                _c("div", { staticClass: "row justify-content-center" }, [
                  _c(
                    "div",
                    { staticClass: "col-lg-6" },
                    [
                      !_vm.success
                        ? _c("div", [
                            _vm.page.data.contentQuotes[
                              _vm.page.data.contentQuotes.findIndex(function(
                                x
                              ) {
                                return x.name === "Información"
                              })
                            ].content_formatted.includes("title") &&
                            _vm.page.data.contentQuotes[
                              _vm.page.data.contentQuotes.findIndex(function(
                                el
                              ) {
                                return el.name === "Información"
                              })
                            ].content.find(function(x) {
                              return x.field === "title"
                            })["value_" + _vm.getLocale()]
                              ? _c("h3", [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(
                                        _vm.page.data.contentQuotes[
                                          _vm.page.data.contentQuotes.findIndex(
                                            function(el) {
                                              return el.name === "Información"
                                            }
                                          )
                                        ].content.find(function(x) {
                                          return x.field === "title"
                                        })["value_" + _vm.getLocale()]
                                      ) +
                                      "\n                        "
                                  )
                                ])
                              : _vm._e()
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("Form", {
                        attrs: {
                          "success-prop": _vm.success,
                          quantity: _vm.page.data.quantity,
                          service: _vm.page.data.service
                        },
                        on: {
                          "update:successProp": function($event) {
                            _vm.success = $event
                          },
                          "update:success-prop": function($event) {
                            _vm.success = $event
                          }
                        }
                      })
                    ],
                    1
                  )
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _vm.page.data.appTracking
            ? _c(
                "section",
                {
                  staticClass: "bottom_section",
                  attrs: { id: "section_rastreov2" }
                },
                [
                  _c(
                    "div",
                    { staticClass: "container position-relative rastreo" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "row lazyload",
                          attrs: { "data-bg": "/storage/web/img/cinta.png" }
                        },
                        [
                          _c("div", { staticClass: "col-lg-4" }, [
                            _c("div", { staticClass: "img-rastreov2" }, [
                              _vm.page.data.appTracking.image
                                ? _c("img", {
                                    staticClass: "lazyload",
                                    attrs: {
                                      alt: "Dinet App",
                                      "data-src":
                                        _vm.storageUrl +
                                        "/img/app-tracking/" +
                                        _vm.page.data.appTracking.image
                                    }
                                  })
                                : _vm._e()
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-lg-4 grid align-center" },
                            [
                              _c(
                                "div",
                                { staticClass: "content_text_rastreo" },
                                [
                                  _vm.page.data.appTracking[
                                    "title_" + _vm.getLocale()
                                  ]
                                    ? _c("div", {
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.page.data.appTracking[
                                              "title_" + _vm.getLocale()
                                            ]
                                          )
                                        }
                                      })
                                    : _vm._e()
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-lg-4 grid align-center" },
                            [
                              _c(
                                "div",
                                { staticClass: "img_apps grid justify-center" },
                                [
                                  _vm.page.data.appTracking.link_ios
                                    ? _c(
                                        "a",
                                        {
                                          attrs: {
                                            href:
                                              _vm.page.data.appTracking
                                                .link_ios,
                                            target: "_blank"
                                          }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "lazyload",
                                            attrs: {
                                              src:
                                                "/storage/web/img/app_apple.png",
                                              alt: ""
                                            }
                                          })
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.page.data.appTracking.link_android
                                    ? _c(
                                        "a",
                                        {
                                          attrs: {
                                            href:
                                              _vm.page.data.appTracking
                                                .link_android,
                                            target: "_blank"
                                          }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "lazyload",
                                            attrs: {
                                              src:
                                                "/storage/web/img/app_google.png",
                                              alt: ""
                                            }
                                          })
                                        ]
                                      )
                                    : _vm._e()
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.page.data.services.length
            ? _c(
                "section",
                {
                  staticClass: "bottom_section",
                  attrs: { id: "seccion_slider_soluciones" }
                },
                [
                  _c("div", { staticClass: "container" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "titulo_global" }, [
                        _c("b", [_vm._v(_vm._s(_vm.$t("Servicios")))]),
                        _vm._v(" "),
                        _c("h2", {}, [
                          _vm._v(_vm._s(_vm.$t("Otras soluciones")))
                        ])
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
                                "carousel_saluciones position-relative",
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
                            _vm._l(_vm.page.data.services, function(i) {
                              return _c("ItemService", {
                                key: i.id + "s",
                                attrs: { storageUrl: _vm.storageUrl, data: i }
                              })
                            }),
                            1
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

/***/ "./resources/js/web/components/items/ItemService.vue":
/*!***********************************************************!*\
  !*** ./resources/js/web/components/items/ItemService.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemService_vue_vue_type_template_id_2688e053___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemService.vue?vue&type=template&id=2688e053& */ "./resources/js/web/components/items/ItemService.vue?vue&type=template&id=2688e053&");
/* harmony import */ var _ItemService_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemService.vue?vue&type=script&lang=js& */ "./resources/js/web/components/items/ItemService.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ItemService_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemService_vue_vue_type_template_id_2688e053___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItemService_vue_vue_type_template_id_2688e053___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/web/components/items/ItemService.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/web/components/items/ItemService.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/web/components/items/ItemService.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemService_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemService.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/items/ItemService.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemService_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/web/components/items/ItemService.vue?vue&type=template&id=2688e053&":
/*!******************************************************************************************!*\
  !*** ./resources/js/web/components/items/ItemService.vue?vue&type=template&id=2688e053& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemService_vue_vue_type_template_id_2688e053___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemService.vue?vue&type=template&id=2688e053& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/items/ItemService.vue?vue&type=template&id=2688e053&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemService_vue_vue_type_template_id_2688e053___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemService_vue_vue_type_template_id_2688e053___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/web/views/Service.vue":
/*!********************************************!*\
  !*** ./resources/js/web/views/Service.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Service_vue_vue_type_template_id_db59c52a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Service.vue?vue&type=template&id=db59c52a& */ "./resources/js/web/views/Service.vue?vue&type=template&id=db59c52a&");
/* harmony import */ var _Service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Service.vue?vue&type=script&lang=js& */ "./resources/js/web/views/Service.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Service_vue_vue_type_template_id_db59c52a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Service_vue_vue_type_template_id_db59c52a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/web/views/Service.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/web/views/Service.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/web/views/Service.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Service.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/views/Service.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/web/views/Service.vue?vue&type=template&id=db59c52a&":
/*!***************************************************************************!*\
  !*** ./resources/js/web/views/Service.vue?vue&type=template&id=db59c52a& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_template_id_db59c52a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Service.vue?vue&type=template&id=db59c52a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/views/Service.vue?vue&type=template&id=db59c52a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_template_id_db59c52a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_template_id_db59c52a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);