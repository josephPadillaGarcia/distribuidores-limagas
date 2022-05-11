(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/admin/app-tracking"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/Button.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/Button.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    text: String,
    classes: Array,
    requestServer: Boolean
  },
  methods: {
    click: function click() {
      this.$emit('click');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/AppTracking.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/AppTracking.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Button */ "./resources/js/admin/components/Button.vue");
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BreadCrumb */ "./resources/js/admin/components/BreadCrumb.vue");
/* harmony import */ var _components_form_Editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/form/Editor */ "./resources/js/admin/components/form/Editor.vue");
/* harmony import */ var _components_form_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/form/Input */ "./resources/js/admin/components/form/Input.vue");
/* harmony import */ var _components_form_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/form/Image */ "./resources/js/admin/components/form/Image.vue");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! quill */ "./node_modules/quill/dist/quill.js");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _functions_PlainClipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../functions/PlainClipboard */ "./resources/js/admin/functions/PlainClipboard.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_8__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








quill__WEBPACK_IMPORTED_MODULE_6___default.a.register("modules/clipboard", _functions_PlainClipboard__WEBPACK_IMPORTED_MODULE_7__["default"], true);

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    routeGet: String,
    routeUpdate: String,
    imagesUrl: String
  },
  components: {
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_1__["default"],
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_2__["default"],
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__["Skeleton"],
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_8__["quillEditor"],
    Editor: _components_form_Editor__WEBPACK_IMPORTED_MODULE_3__["default"],
    Input: _components_form_Input__WEBPACK_IMPORTED_MODULE_4__["default"],
    ImageForm: _components_form_Image__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      editorOptions: {
        placeholder: "",
        modules: {
          toolbar: {
            container: [["bold", "italic", "underline", "strike"], ["blockquote"], [{
              header: 1
            }, {
              header: 2
            }], [{
              list: "ordered"
            }, {
              list: "bullet"
            }], [{
              indent: "-1"
            }, {
              indent: "+1"
            }], //[{ size: [false] }],
            [{
              header: [1, 2, 3, 4, 5, false]
            }], //[{ font: [false] }],
            [{
              color: []
            }, {
              background: []
            }], [{
              align: []
            }], //['clean'],
            ["link"]]
          }
        }
      },
      el: {
        title_es: "",
        description_es: "",
        link_ios: "",
        link_android: ""
      },
      errors: {},
      requestSubmit: false,
      startBlock: true,
      editBlock: false,
      loadingGet: false
    };
  },
  methods: {
    update: function update() {
      var _this = this;

      this.requestSubmit = true;
      this.requestServer = true;
      var fd = new FormData();

      if (this.el.description_es) {
        fd.append("description_es", this.el.description_es);
      }

      if (this.el.title_es) {
        fd.append("title_es", this.el.title_es);
      }

      if (this.el.description_en) {
        fd.append("description_en", this.el.description_en);
      }

      if (this.el.title_en) {
        fd.append("title_en", this.el.title_en);
      }

      if (this.el.image) {
        fd.append("image", this.el.image);
      }

      if (this.el.link_ios) {
        fd.append("link_ios", this.el.link_ios);
      }

      if (this.el.link_android) {
        fd.append("link_android", this.el.link_android);
      }

      axios.post(this.routeUpdate, fd).then(function (response) {
        _this.requestSubmit = false;

        _this.restore();

        Swal.fire({
          title: response.data.title,
          text: response.data.message,
          type: "success",
          confirmButtonText: "Ok",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-inverse-primary"
          }
        });
      })["catch"](function (error) {
        _this.requestSubmit = false;

        if (error.response.status === 422) {
          _this.errors = error.response.data.errors || {};
          return;
        }

        _this.restore();

        Swal.fire({
          title: error.response.data.title,
          text: error.response.data.message,
          type: "error",
          confirmButtonText: "Ok",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-inverse-primary"
          }
        });
      });
    },
    restore: function restore() {
      this.el = {
        title_es: "",
        description_es: "",
        link_ios: "",
        link_android: ""
      };
      this.errors = {};
      this.startBlock = true, this.editBlock = false;
      this.getEl();
    },
    editEl: function editEl() {
      this.startBlock = false;
      this.editBlock = true;
    },
    getEl: function getEl() {
      var _this2 = this;

      this.loadingGet = true;
      axios.get(this.routeGet).then(function (response) {
        _this2.el = response.data;
        _this2.el.image_registered = response.data.image;
        _this2.loadingGet = false;
      })["catch"](function (error) {});
    }
  },
  created: function created() {
    this.getEl();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/Button.vue?vue&type=style&index=0&id=9f519bc6&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/Button.vue?vue&type=style&index=0&id=9f519bc6&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.loading-svg[data-v-9f519bc6]{\r\n    fill: currentColor;\r\n    stroke: currentColor;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/Button.vue?vue&type=style&index=0&id=9f519bc6&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/Button.vue?vue&type=style&index=0&id=9f519bc6&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Button.vue?vue&type=style&index=0&id=9f519bc6&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/Button.vue?vue&type=style&index=0&id=9f519bc6&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/Button.vue?vue&type=template&id=9f519bc6&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/Button.vue?vue&type=template&id=9f519bc6&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    "button",
    {
      staticClass: "btn",
      class: _vm.classes,
      attrs: { disabled: _vm.requestServer == true },
      on: { click: _vm.click }
    },
    [
      _vm.requestServer
        ? _c("span", [
            _vm._v("\n        Cargando \n        "),
            _c(
              "svg",
              {
                staticClass: "ml-1 loading-svg",
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "20",
                  height: "20",
                  viewBox: "0 0 40 40"
                }
              },
              [
                _c("g", { attrs: { fill: "none", "fill-rule": "evenodd" } }, [
                  _c(
                    "g",
                    {
                      attrs: {
                        transform: "translate(1 1)",
                        "stroke-width": "3"
                      }
                    },
                    [
                      _c("circle", {
                        attrs: {
                          "stroke-opacity": "1",
                          cx: "0",
                          cy: "0",
                          r: "0"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "path",
                        {
                          attrs: {
                            d: "M36 18c0-9.94-8.06-18-18-18",
                            transform: "rotate(83.9974 18 18)"
                          }
                        },
                        [
                          _c("animateTransform", {
                            attrs: {
                              attributeName: "transform",
                              type: "rotate",
                              from: "0 18 18",
                              to: "360 18 18",
                              dur: "1s",
                              repeatCount: "indefinite"
                            }
                          })
                        ],
                        1
                      )
                    ]
                  )
                ])
              ]
            )
          ])
        : _c("span", [_vm._v(_vm._s(_vm.text))])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/AppTracking.vue?vue&type=template&id=e4a6152e&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/AppTracking.vue?vue&type=template&id=e4a6152e& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "header pb-6" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "header-body" }, [
          _c(
            "div",
            { staticClass: "row align-items-center pt-0 pt-md-2 pb-4" },
            [
              _c(
                "div",
                { staticClass: "col-6 col-md-7" },
                [
                  _c("BreadCrumb", {
                    attrs: {
                      title: _vm.startBlock
                        ? "App Rastreo"
                        : "Actualizar App Rastreo",
                      active: "App Rastreo"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-6 col-md-5 text-right" }, [
                _vm.startBlock
                  ? _c(
                      "a",
                      {
                        staticClass: "btn btn-icon btn-inverse-primary",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.editEl.apply(null, arguments)
                          }
                        }
                      },
                      [
                        _vm._m(0),
                        _vm._v(" "),
                        _c("span", { staticClass: "btn-inner--text" }, [
                          _vm._v("Editar Información")
                        ])
                      ]
                    )
                  : _vm._e()
              ])
            ]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container-fluid mt--6" }, [
      _vm.startBlock
        ? _c("div", { staticClass: "card mb-4" }, [
            !_vm.loadingGet
              ? _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          { staticClass: "font-weight-bold d-block" },
                          [_vm._v("Imagen")]
                        ),
                        _vm._v(" "),
                        _vm.el.image
                          ? _c("img", {
                              staticClass: "img-fluid",
                              attrs: {
                                src:
                                  _vm.imagesUrl +
                                  "/app-tracking/" +
                                  _vm.el.image,
                                alt: ""
                              }
                            })
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Título ES")
                        ]),
                        _vm._v(" "),
                        _vm.el.title_es
                          ? _c("p", {
                              staticClass: "content-editor-value",
                              domProps: { innerHTML: _vm._s(_vm.el.title_es) }
                            })
                          : _c("p", [_vm._v("No registrado")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Título EN")
                        ]),
                        _vm._v(" "),
                        _vm.el.title_en
                          ? _c("p", {
                              staticClass: "content-editor-value",
                              domProps: { innerHTML: _vm._s(_vm.el.title_en) }
                            })
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Descripción ES")
                        ]),
                        _vm._v(" "),
                        _vm.el.description_es
                          ? _c(
                              "div",
                              {
                                staticClass: "content-editor-value",
                                domProps: {
                                  innerHTML: _vm._s(_vm.el.description_es)
                                }
                              },
                              [_vm._v(_vm._s(_vm.el.description_es))]
                            )
                          : _c("p", [_vm._v("No registrado")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Descripción EN")
                        ]),
                        _vm._v(" "),
                        _vm.el.description_en
                          ? _c(
                              "div",
                              {
                                staticClass: "content-editor-value",
                                domProps: {
                                  innerHTML: _vm._s(_vm.el.description_en)
                                }
                              },
                              [_vm._v(_vm._s(_vm.el.description_en))]
                            )
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Link Google Play")
                        ]),
                        _vm._v(" "),
                        _vm.el.link_android
                          ? _c("p", [
                              _c(
                                "a",
                                {
                                  staticStyle: {
                                    "text-decoration": "underline"
                                  },
                                  attrs: {
                                    href: _vm.el.link_android,
                                    target: "_blank"
                                  }
                                },
                                [_vm._v(_vm._s(_vm.el.link_android))]
                              )
                            ])
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Link App Store")
                        ]),
                        _vm._v(" "),
                        _vm.el.link_ios
                          ? _c("p", [
                              _c(
                                "a",
                                {
                                  staticStyle: {
                                    "text-decoration": "underline"
                                  },
                                  attrs: {
                                    href: _vm.el.link_ios,
                                    target: "_blank"
                                  }
                                },
                                [_vm._v(_vm._s(_vm.el.link_ios))]
                              )
                            ])
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ])
                  ])
                ])
              : _c("div", { staticClass: "card-body" }, [
                  _c(
                    "div",
                    { staticClass: "row" },
                    _vm._l(4, function(i) {
                      return _c(
                        "div",
                        { key: i, staticClass: "col-12 col-lg-6" },
                        [
                          _c(
                            "div",
                            { staticClass: "w-25" },
                            [_c("Skeleton", { attrs: { height: "15px" } })],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "w-75" },
                            [_c("Skeleton", { attrs: { height: "50px" } })],
                            1
                          )
                        ]
                      )
                    }),
                    0
                  )
                ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.editBlock
        ? _c("div", { staticClass: "card mb-4" }, [
            _c("div", { staticClass: "card-body" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.update.apply(null, arguments)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("small", { staticClass: "d-block mb-0 lh-1" }, [
                          _vm._v("Resolución recomendada: 1920×969px")
                        ]),
                        _vm._v(" "),
                        _c("small", { staticClass: "d-block mb-0 lh-1" }, [
                          _vm._v("Formato: JPG")
                        ]),
                        _vm._v(" "),
                        _c("small", { staticClass: "d-block mb-1 lh-1" }, [
                          _vm._v("Tamaño recomendado: No mayor a 300KB")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _vm.el.image_registered
                            ? _c(
                                "div",
                                { staticClass: "col-lg-4 mb-3 mb-lg-0" },
                                [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src:
                                        _vm.imagesUrl +
                                        "/app-tracking/" +
                                        _vm.el.image_registered,
                                      alt: ""
                                    }
                                  })
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              class: _vm.el.image_registered
                                ? "col-lg-8"
                                : "col-12"
                            },
                            [
                              _c("ImageForm", {
                                attrs: {
                                  label: "Imagen",
                                  variable: "image",
                                  errors: _vm.errors,
                                  value: _vm.el.image
                                },
                                on: {
                                  "update:value": function($event) {
                                    return _vm.$set(_vm.el, "image", $event)
                                  }
                                }
                              })
                            ],
                            1
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("Editor", {
                            attrs: {
                              size: "sm",
                              label: "Título",
                              variable: "title",
                              errors: _vm.errors,
                              valueEn: _vm.el.title_en,
                              valueEs: _vm.el.title_es,
                              valueEnParent: _vm.el.title_en,
                              valueEsParent: _vm.el.title_es
                            },
                            on: {
                              "update:valueEn": function($event) {
                                return _vm.$set(_vm.el, "title_en", $event)
                              },
                              "update:value-en": function($event) {
                                return _vm.$set(_vm.el, "title_en", $event)
                              },
                              "update:valueEs": function($event) {
                                return _vm.$set(_vm.el, "title_es", $event)
                              },
                              "update:value-es": function($event) {
                                return _vm.$set(_vm.el, "title_es", $event)
                              }
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("Editor", {
                            attrs: {
                              size: "md",
                              label: "Descripción",
                              variable: "description",
                              errors: _vm.errors,
                              valueEn: _vm.el.description_en,
                              valueEs: _vm.el.description_es,
                              valueEnParent: _vm.el.description_en,
                              valueEsParent: _vm.el.description_es
                            },
                            on: {
                              "update:valueEn": function($event) {
                                return _vm.$set(
                                  _vm.el,
                                  "description_en",
                                  $event
                                )
                              },
                              "update:value-en": function($event) {
                                return _vm.$set(
                                  _vm.el,
                                  "description_en",
                                  $event
                                )
                              },
                              "update:valueEs": function($event) {
                                return _vm.$set(
                                  _vm.el,
                                  "description_es",
                                  $event
                                )
                              },
                              "update:value-es": function($event) {
                                return _vm.$set(
                                  _vm.el,
                                  "description_es",
                                  $event
                                )
                              }
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "customers_link" }
                          },
                          [_vm._v("Link Google Play")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.el.link_android,
                              expression: "el.link_android"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "link_android" },
                          domProps: { value: _vm.el.link_android },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.el,
                                "link_android",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors && _vm.errors.link_android
                          ? _c(
                              "label",
                              {
                                staticClass: "mt-2 text-danger text-sm",
                                attrs: { for: "link_android" }
                              },
                              [_vm._v(_vm._s(_vm.errors.link_android[0]))]
                            )
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "customers_link" }
                          },
                          [_vm._v("Link App Store")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.el.link_ios,
                              expression: "el.link_ios"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "link_ios" },
                          domProps: { value: _vm.el.link_ios },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.el, "link_ios", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors && _vm.errors.link_ios
                          ? _c(
                              "label",
                              {
                                staticClass: "mt-2 text-danger text-sm",
                                attrs: { for: "link_ios" }
                              },
                              [_vm._v(_vm._s(_vm.errors.link_ios[0]))]
                            )
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 text-right" },
                      [
                        _c("Button", {
                          attrs: {
                            text: "Actualizar",
                            classes: ["btn-inverse-primary"],
                            "request-server": _vm.requestSubmit
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-secondary",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.restore.apply(null, arguments)
                              }
                            }
                          },
                          [_vm._v("Cancelar")]
                        )
                      ],
                      1
                    )
                  ])
                ]
              )
            ])
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "btn-inner--icon" }, [
      _c("i", { staticClass: "ri-information-line current-color ri-lg" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/components/Button.vue":
/*!**************************************************!*\
  !*** ./resources/js/admin/components/Button.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button_vue_vue_type_template_id_9f519bc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.vue?vue&type=template&id=9f519bc6&scoped=true& */ "./resources/js/admin/components/Button.vue?vue&type=template&id=9f519bc6&scoped=true&");
/* harmony import */ var _Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/Button.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Button_vue_vue_type_style_index_0_id_9f519bc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button.vue?vue&type=style&index=0&id=9f519bc6&scoped=true&lang=css& */ "./resources/js/admin/components/Button.vue?vue&type=style&index=0&id=9f519bc6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Button_vue_vue_type_template_id_9f519bc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Button_vue_vue_type_template_id_9f519bc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9f519bc6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/Button.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/Button.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/admin/components/Button.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Button.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/Button.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/components/Button.vue?vue&type=style&index=0&id=9f519bc6&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/admin/components/Button.vue?vue&type=style&index=0&id=9f519bc6&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_9f519bc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Button.vue?vue&type=style&index=0&id=9f519bc6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/Button.vue?vue&type=style&index=0&id=9f519bc6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_9f519bc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_9f519bc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_9f519bc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_9f519bc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/admin/components/Button.vue?vue&type=template&id=9f519bc6&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/admin/components/Button.vue?vue&type=template&id=9f519bc6&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_9f519bc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Button.vue?vue&type=template&id=9f519bc6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/Button.vue?vue&type=template&id=9f519bc6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_9f519bc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_9f519bc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/admin/views/AppTracking.vue":
/*!**************************************************!*\
  !*** ./resources/js/admin/views/AppTracking.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppTracking_vue_vue_type_template_id_e4a6152e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppTracking.vue?vue&type=template&id=e4a6152e& */ "./resources/js/admin/views/AppTracking.vue?vue&type=template&id=e4a6152e&");
/* harmony import */ var _AppTracking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppTracking.vue?vue&type=script&lang=js& */ "./resources/js/admin/views/AppTracking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppTracking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppTracking_vue_vue_type_template_id_e4a6152e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppTracking_vue_vue_type_template_id_e4a6152e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/views/AppTracking.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/views/AppTracking.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/admin/views/AppTracking.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTracking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppTracking.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/AppTracking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTracking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/views/AppTracking.vue?vue&type=template&id=e4a6152e&":
/*!*********************************************************************************!*\
  !*** ./resources/js/admin/views/AppTracking.vue?vue&type=template&id=e4a6152e& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTracking_vue_vue_type_template_id_e4a6152e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppTracking.vue?vue&type=template&id=e4a6152e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/AppTracking.vue?vue&type=template&id=e4a6152e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTracking_vue_vue_type_template_id_e4a6152e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTracking_vue_vue_type_template_id_e4a6152e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);