(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/admin/faqs"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/skeleton/form.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/skeleton/form.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__["Skeleton"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Faqs.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/Faqs.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/BreadCrumb */ "./resources/js/admin/components/BreadCrumb.vue");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Button */ "./resources/js/admin/components/Button.vue");
/* harmony import */ var _components_form_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/form/Input */ "./resources/js/admin/components/form/Input.vue");
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_form_Editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/form/Editor */ "./resources/js/admin/components/form/Editor.vue");
/* harmony import */ var _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/modals/Destroy */ "./resources/js/admin/components/modals/Destroy.vue");
/* harmony import */ var _components_skeleton_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/skeleton/form */ "./resources/js/admin/components/skeleton/form.vue");
/* harmony import */ var _components_NoData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/NoData */ "./resources/js/admin/components/NoData.vue");
var _components;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: (_components = {
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_0__["default"],
    messageCantDelete: String,
    Destroy: _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_8__["default"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_3__["default"],
    Input: _components_form_Input__WEBPACK_IMPORTED_MODULE_4__["default"],
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_2___default.a,
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__["Skeleton"],
    SkeletonForm: _components_skeleton_form__WEBPACK_IMPORTED_MODULE_9__["default"],
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_1___default.a
  }, _defineProperty(_components, "Input", _components_form_Input__WEBPACK_IMPORTED_MODULE_4__["default"]), _defineProperty(_components, "Editor", _components_form_Editor__WEBPACK_IMPORTED_MODULE_7__["default"]), _defineProperty(_components, "NoData", _components_NoData__WEBPACK_IMPORTED_MODULE_10__["default"]), _defineProperty(_components, "quillEditor", vue_quill_editor__WEBPACK_IMPORTED_MODULE_6__["quillEditor"]), _components),
  props: {
    route: String,
    routeGetAll: String,
    routeOrder: String,
    messageOrder: String
  },
  data: function data() {
    return {
      errors: {},
      requestSubmit: false,
      modalCreateUpdate: false,
      modalDestroy: false,
      loadingGet: false,
      loadingEls: false,
      loadingSubmit: false,
      elements: {},
      title: "",
      element: {
        active: true
      },
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover"
      }
    };
  },
  methods: {
    handleChange: function handleChange() {
      var _this = this;

      axios.put(this.routeOrder, this.elements).then(function (response) {
        _this.restore();

        Swal.fire({
          title: response.data.title,
          text: response.data.message,
          type: "success",
          confirmButtonText: "OK",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-primary"
          }
        });
      })["catch"](function (error) {
        Swal.fire({
          title: error.response.data.title,
          text: error.response.data.message,
          type: "error",
          confirmButtonText: "OK",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-primary"
          }
        });
      });
    },
    destroyConfirm: function destroyConfirm() {
      var _this2 = this;

      this.requestSubmit = true;
      axios["delete"](this.route + "/" + this.element.id).then(function (response) {
        _this2.requestSubmit = false;

        _this2.restore();

        Swal.fire({
          title: response.data.title,
          text: response.data.message,
          type: "success",
          confirmButtonText: "OK",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-inverse-primary"
          }
        });
      })["catch"](function (error) {
        Swal.fire({
          title: error.response.data.title,
          text: error.response.data.message,
          type: "error",
          confirmButtonText: "OK",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-inverse-primary"
          }
        });

        _this2.restoreEl();
      });
    },
    newEl: function newEl() {
      this.title = "Nuevo";
      this.modalCreateUpdate = true;
    },
    editEl: function editEl(id) {
      this.title = "Actualizar";
      this.modalCreateUpdate = true;
      this.getEl(id);
    },

    /*================================*/

    /* Envio de datos */
    submit: function submit() {
      var _this3 = this;

      this.requestSubmit = true;
      var url;
      var method;
      var like = 0;
      var dislike = 0;
      var fd = new FormData();

      if (this.title == "Nuevo") {
        url = this.route;
        method = "post";
      } else {
        url = this.route + "/" + this.element.id;
        method = "post";
        fd.append("_method", "put");
      }

      if (this.element.question) {
        fd.append("question", this.element.question);
      }

      if (this.element.description) {
        fd.append("description", this.element.description);
      }

      if (this.element.question) {
        fd.append("question_es", this.element.question);
      }

      if (this.element.description) {
        fd.append("description_es", this.element.description);
      }

      if (this.element.question_en) {
        fd.append("question_en", this.element.question_en);
      }

      if (this.element.description_en) {
        fd.append("description_en", this.element.description_en);
      }

      fd.append("like", like);
      fd.append("dislike", dislike);
      console.log(url);
      console.log(fd.get('description'));
      /*console.log(this.element.question);
      console.log(this.element.description);      
      console.log(like);
      console.log(dislike);      
      console.log(fd);*/

      /*if (this.element.active == true) {
        fd.append("active", 1);
      } else {
        fd.append("active", 0);
      }*/

      axios({
        method: method,
        url: url,
        data: fd
      }).then(function (response) {
        _this3.requestSubmit = false;
        Swal.fire({
          title: response.data.title,
          text: response.data.message,
          type: "success",
          confirmButtonText: "OK",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-inverse-primary"
          }
        });

        _this3.restore();
      })["catch"](function (error) {
        _this3.requestSubmit = false;

        if (error.response.status === 422) {
          _this3.errors = error.response.data.errors || {};
          return;
        }

        Swal.fire({
          title: error.response.data.title,
          text: error.response.data.message,
          type: "error",
          confirmButtonText: "OK",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-inverse-primary"
          }
        });

        _this3.restoreEl();
      });
    },

    /* ==================================================== */
    restore: function restore() {
      this.element = {
        active: true
      }, this.modalCreateUpdate = this.modalDestroy = false;
      this.getEls();
      this.errors = {};
    },
    deleteEl: function deleteEl(id) {
      this.modalDestroy = true;
      this.getEl(id);
    },
    restoreEl: function restoreEl() {
      this.element = {
        active: true
      }, this.modalCreateUpdate = this.modalDestroy = false;
      this.errors = {};
    },
    getEls: function getEls() {
      var _this4 = this;

      this.loadingEls = true;
      axios.get(this.routeGetAll).then(function (response) {
        _this4.elements = response.data;
        _this4.loadingEls = false;
      })["catch"](function (error) {});
    },
    getEl: function getEl(id) {
      var _this5 = this;

      this.loadingGet = true;
      axios.get(this.route + "/json/get/" + id).then(function (response) {
        _this5.element = response.data;
        _this5.loadingGet = false;
      })["catch"](function (error) {});
    }
  },
  created: function created() {
    this.getEls();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/skeleton/form.vue?vue&type=template&id=3b85184b&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/skeleton/form.vue?vue&type=template&id=3b85184b& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "w-25 mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "w-25 mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "w-25 mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "w-25 mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "text-right" }, [
      _c("div", { staticClass: "w-25 ml-auto" }, [_c("Skeleton")], 1)
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Faqs.vue?vue&type=template&id=0f9f137c&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/Faqs.vue?vue&type=template&id=0f9f137c& ***!
  \********************************************************************************************************************************************************************************************************/
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
    "div",
    [
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
                      attrs: { title: "Faqs", parent: "", active: "Faqs" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 col-md-5 text-right" }, [
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-icon btn-inverse-primary",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.newEl.apply(null, arguments)
                        }
                      }
                    },
                    [
                      _vm._m(0),
                      _vm._v(" "),
                      _c("span", { staticClass: "btn-inner--text" }, [
                        _vm._v("Nuevo Faq")
                      ])
                    ]
                  )
                ])
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid mt--6" }, [
        _vm.loadingEls
          ? _c(
              "div",
              { staticClass: "row" },
              _vm._l(8, function(i) {
                return _c(
                  "div",
                  { key: i, staticClass: "col-12 col-md-6 col-lg-3 mb-4" },
                  [_c("Skeleton", { attrs: { height: "150px" } })],
                  1
                )
              }),
              0
            )
          : _c(
              "div",
              [
                _vm.elements.length
                  ? _c("div", { staticClass: "row" }, [_vm._m(1)])
                  : _vm._e(),
                _vm._v(" "),
                _vm.elements.length
                  ? _c(
                      "draggable",
                      {
                        staticClass: "row",
                        on: { change: _vm.handleChange },
                        model: {
                          value: _vm.elements,
                          callback: function($$v) {
                            _vm.elements = $$v
                          },
                          expression: "elements"
                        }
                      },
                      _vm._l(_vm.elements, function(el, i) {
                        return _c(
                          "div",
                          {
                            key: el.id,
                            staticClass: "col-12 col-md-6 col-lg-4 mb-4"
                          },
                          [
                            _c("div", { staticClass: "card" }, [
                              _c("div", { staticClass: "card-body" }, [
                                _c("h3", { staticClass: "mb-1" }, [
                                  _vm._v(
                                    "\n                Pregunta ES:\n                "
                                  ),
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-normal" },
                                    [_vm._v(_vm._s(el.question))]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("h3", { staticClass: "mb-1" }, [
                                  _vm._v(
                                    "\n                Pregunta EN:\n                "
                                  ),
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-normal" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          el.question_en
                                            ? el.question_en
                                            : "No registrado"
                                        )
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: el.seen,
                                        expression: "el.seen"
                                      }
                                    ],
                                    staticClass: "mb-4"
                                  },
                                  [
                                    _c("h3", { staticClass: "d-block" }, [
                                      _vm._v("Respuesta ES:")
                                    ]),
                                    _vm._v(" "),
                                    el.description
                                      ? _c("div", {
                                          staticClass: "content-body",
                                          domProps: {
                                            innerHTML: _vm._s(el.description)
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("h3", { staticClass: "d-block" }, [
                                      _vm._v("Respuesta EN:")
                                    ]),
                                    _vm._v(" "),
                                    el.description_en
                                      ? _c("div", {
                                          staticClass: "content-body",
                                          domProps: {
                                            innerHTML: _vm._s(el.description_en)
                                          }
                                        })
                                      : _c("div", [_vm._v("No registrado")])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-link text-primary",
                                      staticStyle: {
                                        padding: "0",
                                        "text-decoration": "underline"
                                      },
                                      on: {
                                        click: function($event) {
                                          el.seen = !el.seen
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                          " +
                                          _vm._s(
                                            el.seen ? "Ocultar" : "Mostrar"
                                          ) +
                                          " Respuesta\n                        "
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "mt-4 text-center" }, [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-inverse-primary btn-sm",
                                      on: {
                                        click: function($event) {
                                          return _vm.editEl(el.id)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  Editar\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-inverse-danger btn-sm",
                                      on: {
                                        click: function($event) {
                                          return _vm.deleteEl(el.id)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  Eliminar\n                "
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ])
                          ]
                        )
                      }),
                      0
                    )
                  : _c("NoData")
              ],
              1
            )
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            "no-close-on-esc": "",
            "no-close-on-backdrop": "",
            centered: "",
            size: "lg",
            "footer-class": "border-0 pt-0",
            "body-class": "pt-0"
          },
          on: { close: _vm.restoreEl },
          scopedSlots: _vm._u([
            {
              key: "modal-footer",
              fn: function(ref) {
                var ok = ref.ok
                return [
                  _c("Button", {
                    attrs: {
                      classes: ["btn-inverse-primary"],
                      text: _vm.title == "Nuevo" ? "Crear" : "Actualizar",
                      "request-server": _vm.requestSubmit
                    },
                    on: { click: _vm.submit }
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      attrs: { type: "button" },
                      on: { click: _vm.restoreEl }
                    },
                    [_vm._v("\n        Cancelar\n      ")]
                  )
                ]
              }
            }
          ]),
          model: {
            value: _vm.modalCreateUpdate,
            callback: function($$v) {
              _vm.modalCreateUpdate = $$v
            },
            expression: "modalCreateUpdate"
          }
        },
        [
          _c("template", { slot: "modal-title" }, [
            _c("div", { staticClass: "text-primary h2" }, [
              _vm._v(_vm._s(_vm.title) + " Faq")
            ])
          ]),
          _vm._v(" "),
          _c("template", { slot: "modal-header-close" }, [
            _c(
              "button",
              {
                staticClass: "btn p-0 bg-transparent",
                attrs: { type: "button" },
                on: { click: _vm.restoreEl }
              },
              [_c("i", { staticClass: "ri-close-line ri-lg" })]
            )
          ]),
          _vm._v(" "),
          _vm.loadingGet
            ? _c("div", [_c("SkeletonForm")], 1)
            : _c("div", [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.submit.apply(null, arguments)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-12" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("Input", {
                              attrs: {
                                label: "Pregunta",
                                variable: "question",
                                errors: _vm.errors,
                                valueEs: _vm.element.question,
                                valueEsParent: _vm.element.question,
                                valueEn: _vm.element.question_en,
                                valueEnParent: _vm.element.question_en
                              },
                              on: {
                                "update:valueEs": function($event) {
                                  return _vm.$set(
                                    _vm.element,
                                    "question",
                                    $event
                                  )
                                },
                                "update:value-es": function($event) {
                                  return _vm.$set(
                                    _vm.element,
                                    "question",
                                    $event
                                  )
                                },
                                "update:valueEn": function($event) {
                                  return _vm.$set(
                                    _vm.element,
                                    "question_en",
                                    $event
                                  )
                                },
                                "update:value-en": function($event) {
                                  return _vm.$set(
                                    _vm.element,
                                    "question_en",
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
                      _c("div", { staticClass: "col-12" }, [
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
                                valueEs: _vm.element.description,
                                valueEsParent: _vm.element.description,
                                valueEn: _vm.element.description_en,
                                valueEnParent: _vm.element.description_en,
                                url: "faqs/faqs",
                                "text-image": "image"
                              },
                              on: {
                                "update:valueEs": function($event) {
                                  return _vm.$set(
                                    _vm.element,
                                    "description",
                                    $event
                                  )
                                },
                                "update:value-es": function($event) {
                                  return _vm.$set(
                                    _vm.element,
                                    "description",
                                    $event
                                  )
                                },
                                "update:valueEn": function($event) {
                                  return _vm.$set(
                                    _vm.element,
                                    "description_en",
                                    $event
                                  )
                                },
                                "update:value-en": function($event) {
                                  return _vm.$set(
                                    _vm.element,
                                    "description_en",
                                    $event
                                  )
                                }
                              }
                            })
                          ],
                          1
                        )
                      ])
                    ])
                  ]
                )
              ])
        ],
        2
      ),
      _vm._v(" "),
      _c("destroy", {
        attrs: {
          element: "faq",
          open: _vm.modalDestroy,
          "loading-get": _vm.loadingGet,
          "loading-submit": _vm.requestSubmit
        },
        on: { cancel: _vm.restoreEl, submit: _vm.destroyConfirm }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "btn-inner--icon" }, [
      _c("i", { staticClass: "ri-add-line current-color ri-lg" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("i", { staticClass: "d-block mb-4" }, [
        _vm._v("Arrastre los elementos en el orden que desee mostrarlos")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/components/skeleton/form.vue":
/*!*********************************************************!*\
  !*** ./resources/js/admin/components/skeleton/form.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_3b85184b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=3b85184b& */ "./resources/js/admin/components/skeleton/form.vue?vue&type=template&id=3b85184b&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/skeleton/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_3b85184b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_3b85184b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/skeleton/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/skeleton/form.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/admin/components/skeleton/form.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/skeleton/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/components/skeleton/form.vue?vue&type=template&id=3b85184b&":
/*!****************************************************************************************!*\
  !*** ./resources/js/admin/components/skeleton/form.vue?vue&type=template&id=3b85184b& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_3b85184b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=3b85184b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/skeleton/form.vue?vue&type=template&id=3b85184b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_3b85184b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_3b85184b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/admin/views/Faqs.vue":
/*!*******************************************!*\
  !*** ./resources/js/admin/views/Faqs.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Faqs_vue_vue_type_template_id_0f9f137c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Faqs.vue?vue&type=template&id=0f9f137c& */ "./resources/js/admin/views/Faqs.vue?vue&type=template&id=0f9f137c&");
/* harmony import */ var _Faqs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Faqs.vue?vue&type=script&lang=js& */ "./resources/js/admin/views/Faqs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Faqs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Faqs_vue_vue_type_template_id_0f9f137c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Faqs_vue_vue_type_template_id_0f9f137c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/views/Faqs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/views/Faqs.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/admin/views/Faqs.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Faqs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Faqs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Faqs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Faqs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/views/Faqs.vue?vue&type=template&id=0f9f137c&":
/*!**************************************************************************!*\
  !*** ./resources/js/admin/views/Faqs.vue?vue&type=template&id=0f9f137c& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faqs_vue_vue_type_template_id_0f9f137c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Faqs.vue?vue&type=template&id=0f9f137c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Faqs.vue?vue&type=template&id=0f9f137c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faqs_vue_vue_type_template_id_0f9f137c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faqs_vue_vue_type_template_id_0f9f137c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);