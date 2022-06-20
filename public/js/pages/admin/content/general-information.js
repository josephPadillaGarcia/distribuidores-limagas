(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/admin/content/general-information"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/form/Image.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/form/Image.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    label: String,
    folder: String,
    variable: String,
    errors: Object,
    valueParent: null,
    imagesUrl: String
  },
  components: {
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      value: "",
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg",
        autoProcessQueue: false,
        thumbnailWidth: 400,
        addRemoveLinks: true
      },
      random: Math.ceil(Math.random() * 10)
    };
  },
  methods: {
    toggle: function toggle(lang) {
      this.active = lang;
    },
    handleAddedFiles: function handleAddedFiles(e) {
      var _this = this;

      setTimeout(function () {
        //console.log(this.$refs.ref_image.dropzone.files[0]);
        _this.$emit("update:value", _this.$refs.ref_image.dropzone.files[0]);
      }, 500);
    }
  },
  watch: {
    valueParent: {
      immediate: true,
      handler: function handler(newValue) {
        if (newValue instanceof File) {} else {
          this.value = newValue;
        }
      }
    }
  },
  computed: {
    countErrors: function countErrors() {
      if (Object.keys(this.errors).length) {
        var total = 0;

        for (var el in this.errors) {
          if (el == this.variable) {
            total++;
          }
        }

        return total;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/content/GeneralInformation.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/content/GeneralInformation.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Button */ "./resources/js/admin/components/Button.vue");
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/BreadCrumb */ "./resources/js/admin/components/BreadCrumb.vue");
/* harmony import */ var _components_form_InputSelectArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/form/InputSelectArray */ "./resources/js/admin/components/form/InputSelectArray.vue");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! quill */ "./node_modules/quill/dist/quill.js");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _functions_PlainClipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../functions/PlainClipboard */ "./resources/js/admin/functions/PlainClipboard.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_form_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/form/Image */ "./resources/js/admin/components/form/Image.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






quill__WEBPACK_IMPORTED_MODULE_4___default.a.register("modules/clipboard", _functions_PlainClipboard__WEBPACK_IMPORTED_MODULE_5__["default"], true);


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    routeGet: String,
    routeUpdate: String,
    departments: Array,
    imagesUrl: String
  },
  components: {
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_1__["default"],
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_2__["default"],
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__["Skeleton"],
    InputSelectArray: _components_form_InputSelectArray__WEBPACK_IMPORTED_MODULE_3__["default"],
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_6__["quillEditor"],
    ImageForm: _components_form_Image__WEBPACK_IMPORTED_MODULE_7__["default"]
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
        direction: "",
        name_api: "",
        whatsapp_number: "",
        customers_link: "",
        api_link: "",
        customer_service_link: ""
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
      var fd = new FormData();

      if (this.el.direction) {
        fd.append("direction", this.el.direction);
      }

      if (this.el.whatsapp_number) {
        fd.append("whatsapp_number", this.el.whatsapp_number);
      }

      if (this.el.customers_link) {
        fd.append("customers_link", this.el.customers_link);
      }

      if (this.el.name_api) {
        fd.append("name_api", this.el.name_api);
      }

      if (this.el.api_link) {
        fd.append("api_link", this.el.api_link);
      }

      if (this.el.contact_number) {
        fd.append("contact_number", this.el.contact_number);
      }

      if (this.el.book_link) {
        fd.append("book_link", this.el.book_link);
      }

      if (this.el.api_url_tracking) {
        fd.append("api_url_tracking", this.el.api_url_tracking);
      }

      if (this.el.customer_service_link) {
        fd.append("customer_service_link", this.el.customer_service_link);
      }

      if (this.el.link_work_with_us) {
        fd.append("link_work_with_us", this.el.link_work_with_us);
      }

      if (this.el.customer_service_img_update) {
        fd.append("customer_service_img_update", this.el.customer_service_img_update);
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
        direction: "",
        name_api: "",
        whatsapp_number: "",
        customers_link: "",
        api_link: "",
        customer_service_link: ""
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
        _this2.loadingGet = false;
      })["catch"](function (error) {});
    }
  },
  created: function created() {
    this.getEl();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/form/Image.vue?vue&type=template&id=1afa967b&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/form/Image.vue?vue&type=template&id=1afa967b& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    { staticClass: "form-group" },
    [
      _c("div", {}, [
        _c(
          "label",
          {
            staticClass: "font-weight-bold",
            attrs: { for: _vm.label + _vm.random }
          },
          [_vm._v(_vm._s(_vm.label) + ":")]
        )
      ]),
      _vm._v(" "),
      _c("div", [
        _c("div", { staticClass: "row" }, [
          _vm.valueParent
            ? _c("div", { staticClass: "col" }, [
                _c("img", {
                  staticClass: "d-block img-fluid mx-auto",
                  staticStyle: { "max-width": "50%" },
                  attrs: {
                    src: _vm.imagesUrl + "/" + _vm.folder + "/" + _vm.value,
                    alt: ""
                  }
                })
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col" },
            [
              _c(
                "vue-dropzone",
                {
                  ref: "ref_image",
                  attrs: {
                    id: _vm.label + _vm.random,
                    options: _vm.dropzoneOptions,
                    duplicateCheck: true,
                    useCustomSlot: true
                  },
                  on: {
                    "vdropzone-file-added": function($event) {
                      return _vm.$validateImageDropzone(
                        $event,
                        _vm.$refs.ref_image.dropzone,
                        1,
                        310000,
                        "300kb"
                      )
                    },
                    "vdropzone-files-added": function($event) {
                      return _vm.handleAddedFiles($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "dropzone-custom-content" }, [
                    _c(
                      "h5",
                      { staticClass: "dropzone-custom-title text-primary" },
                      [
                        _vm._v(
                          "Suelte el archivo aquí o haga click para cargarlo."
                        )
                      ]
                    )
                  ])
                ]
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _vm._l(_vm.errors, function(el, i) {
        return _c("div", { key: i }, [
          i == _vm.variable
            ? _c("label", { staticClass: "text-danger text-sm d-block mt-2" }, [
                _vm._v(_vm._s(el[0]))
              ])
            : _vm._e()
        ])
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/content/GeneralInformation.vue?vue&type=template&id=4380aa19&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/content/GeneralInformation.vue?vue&type=template&id=4380aa19& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
                        ? "Información General"
                        : "Actualizar Información General",
                      parent: "Contenido",
                      active: "Información General"
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
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Dirección")
                        ]),
                        _vm._v(" "),
                        _vm.el.direction
                          ? _c(
                              "div",
                              {
                                domProps: {
                                  innerHTML: _vm._s(_vm.el.direction)
                                }
                              },
                              [_vm._v(_vm._s(_vm.el.direction))]
                            )
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Chatbot Número de Whatsapp")
                        ]),
                        _vm._v(" "),
                        _vm.el.whatsapp_number
                          ? _c("p", [
                              _vm._v(_vm._s(_vm.el.whatsapp_number_formatted))
                            ])
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Link de Acceso Clientes")
                        ]),
                        _vm._v(" "),
                        _vm.el.customers_link
                          ? _c("p", [
                              _c(
                                "a",
                                {
                                  staticStyle: {
                                    "text-decoration": "underline"
                                  },
                                  attrs: {
                                    href: _vm.el.customers_link,
                                    target: "_blank"
                                  }
                                },
                                [_vm._v(_vm._s(_vm.el.customers_link))]
                              )
                            ])
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Footer Nombre Link API")
                        ]),
                        _vm._v(" "),
                        _vm.el.name_api
                          ? _c("p", [_vm._v(_vm._s(_vm.el.name_api))])
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Footer Link API")
                        ]),
                        _vm._v(" "),
                        _vm.el.api_link
                          ? _c("p", [
                              _c(
                                "a",
                                {
                                  staticStyle: {
                                    "text-decoration": "underline"
                                  },
                                  attrs: {
                                    href: _vm.el.api_link,
                                    target: "_blank"
                                  }
                                },
                                [_vm._v(_vm._s(_vm.el.api_link))]
                              )
                            ])
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Link Libro de Reclamaciones")
                        ]),
                        _vm._v(" "),
                        _vm.el.book_link
                          ? _c(
                              "div",
                              {
                                domProps: {
                                  innerHTML: _vm._s(_vm.el.book_link)
                                }
                              },
                              [_vm._v(_vm._s(_vm.el.book_link))]
                            )
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Número de Contacto Asesores")
                        ]),
                        _vm._v(" "),
                        _vm.el.contact_number
                          ? _c("div", [_vm._v(_vm._s(_vm.el.contact_number))])
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v(
                            "Link Envio Cliente Número Tracking (Link que se usará para enviar al cliente a la Plataforma para revisar el estado de su pedido)"
                          )
                        ]),
                        _vm._v(" "),
                        _vm.el.api_url_tracking
                          ? _c(
                              "div",
                              {
                                domProps: {
                                  innerHTML: _vm._s(_vm.el.api_url_tracking)
                                }
                              },
                              [_vm._v(_vm._s(_vm.el.api_url_tracking))]
                            )
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Link de Servicios al Cliente")
                        ]),
                        _vm._v(" "),
                        _vm.el.customer_service_link
                          ? _c(
                              "div",
                              {
                                domProps: {
                                  innerHTML: _vm._s(
                                    _vm.el.customer_service_link
                                  )
                                }
                              },
                              [_vm._v(_vm._s(_vm.el.customer_service_link))]
                            )
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Footer Link Únete a nuestro equipo")
                        ]),
                        _vm._v(" "),
                        _vm.el.link_work_with_us
                          ? _c("p", [
                              _c(
                                "a",
                                {
                                  staticStyle: {
                                    "text-decoration": "underline"
                                  },
                                  attrs: {
                                    href: _vm.el.link_work_with_us,
                                    target: "_blank"
                                  }
                                },
                                [_vm._v(_vm._s(_vm.el.link_work_with_us))]
                              )
                            ])
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Imagen de Servicios al Cliente")
                        ]),
                        _vm._v(" "),
                        _vm.el.customer_service_img
                          ? _c("div", [
                              _c("img", {
                                staticClass: "d-block mb-2 mx-auto",
                                attrs: {
                                  src:
                                    _vm.imagesUrl +
                                    "/" +
                                    _vm.el.customer_service_img,
                                  alt: _vm.el.name,
                                  height: "54"
                                }
                              })
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
                    _vm._l(3, function(i) {
                      return _c(
                        "div",
                        { key: i, staticClass: "col-12 col-lg-4" },
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
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold",
                              attrs: { for: "direction" }
                            },
                            [_vm._v("Dirección")]
                          ),
                          _vm._v(" "),
                          _c("quill-Editor", {
                            ref: "ref_content",
                            staticClass: "ql-height-10",
                            attrs: { options: _vm.editorOptions },
                            on: {
                              keydown: function($event) {
                                if (
                                  !$event.type.indexOf("key") &&
                                  _vm._k(
                                    $event.keyCode,
                                    "enter",
                                    13,
                                    $event.key,
                                    "Enter"
                                  )
                                ) {
                                  return null
                                }
                                $event.preventDefault()
                              }
                            },
                            model: {
                              value: _vm.el.direction,
                              callback: function($$v) {
                                _vm.$set(_vm.el, "direction", $$v)
                              },
                              expression: "el.direction"
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors && _vm.errors.direction
                            ? _c(
                                "label",
                                {
                                  staticClass: "mt-2 text-danger text-sm",
                                  attrs: { for: "direction" }
                                },
                                [_vm._v(_vm._s(_vm.errors.direction[0]))]
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "whatsapp_number" }
                          },
                          [_vm._v("Chatbot Número de Whatsapp")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.el.whatsapp_number,
                              expression: "el.whatsapp_number"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "number", id: "whatsapp_number" },
                          domProps: { value: _vm.el.whatsapp_number },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.el,
                                "whatsapp_number",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "small",
                          {
                            staticClass: "form-text d-block",
                            staticStyle: { opacity: "0.7" }
                          },
                          [_vm._v("Ingrese un número de 9 dígitos")]
                        ),
                        _vm._v(" "),
                        _vm.errors && _vm.errors.whatsapp_number
                          ? _c(
                              "label",
                              {
                                staticClass: "mt-2 text-danger text-sm",
                                attrs: { for: "whatsapp_number" }
                              },
                              [_vm._v(_vm._s(_vm.errors.whatsapp_number[0]))]
                            )
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "customers_link" }
                          },
                          [_vm._v("Link de Acceso Clientes")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.el.customers_link,
                              expression: "el.customers_link"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "customers_link" },
                          domProps: { value: _vm.el.customers_link },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.el,
                                "customers_link",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors && _vm.errors.customers_link
                          ? _c(
                              "label",
                              {
                                staticClass: "mt-2 text-danger text-sm",
                                attrs: { for: "customers_link" }
                              },
                              [_vm._v(_vm._s(_vm.errors.customers_link[0]))]
                            )
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "name_api" }
                          },
                          [_vm._v("Footer Nombre Link API")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.el.name_api,
                              expression: "el.name_api"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "name_api" },
                          domProps: { value: _vm.el.name_api },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.el, "name_api", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors && _vm.errors.name_api
                          ? _c(
                              "label",
                              {
                                staticClass: "mt-2 text-danger text-sm",
                                attrs: { for: "name_api" }
                              },
                              [_vm._v(_vm._s(_vm.errors.name_api[0]))]
                            )
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "api_link" }
                          },
                          [_vm._v("Footer Link API")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.el.api_link,
                              expression: "el.api_link"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "api_link" },
                          domProps: { value: _vm.el.api_link },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.el, "api_link", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors && _vm.errors.api_link
                          ? _c(
                              "label",
                              {
                                staticClass: "mt-2 text-danger text-sm",
                                attrs: { for: "api_link" }
                              },
                              [_vm._v(_vm._s(_vm.errors.api_link[0]))]
                            )
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "contact_number" }
                          },
                          [_vm._v("Número de Contacto de Asesores")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.el.contact_number,
                              expression: "el.contact_number"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "number", id: "contact_number" },
                          domProps: { value: _vm.el.contact_number },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.el,
                                "contact_number",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors && _vm.errors.contact_number
                          ? _c(
                              "label",
                              {
                                staticClass: "mt-2 text-danger text-sm",
                                attrs: { for: "contact_number" }
                              },
                              [_vm._v(_vm._s(_vm.errors.contact_number[0]))]
                            )
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "book_link" }
                          },
                          [_vm._v("Link Libro de Reclamaciones")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.el.book_link,
                              expression: "el.book_link"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "book_link" },
                          domProps: { value: _vm.el.book_link },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.el, "book_link", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors && _vm.errors.book_link
                          ? _c(
                              "label",
                              {
                                staticClass: "mt-2 text-danger text-sm",
                                attrs: { for: "book_link" }
                              },
                              [_vm._v(_vm._s(_vm.errors.book_link[0]))]
                            )
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "book_link" }
                          },
                          [_vm._v("Link Envio Cliente Número Tracking")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.el.api_url_tracking,
                              expression: "el.api_url_tracking"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "api_url_tracking" },
                          domProps: { value: _vm.el.api_url_tracking },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.el,
                                "api_url_tracking",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors && _vm.errors.api_url_tracking
                          ? _c(
                              "label",
                              {
                                staticClass: "mt-2 text-danger text-sm",
                                attrs: { for: "api_url_tracking" }
                              },
                              [_vm._v(_vm._s(_vm.errors.api_url_tracking[0]))]
                            )
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "book_link" }
                          },
                          [_vm._v("Link de Servicios al Cliente")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.el.customer_service_link,
                              expression: "el.customer_service_link"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "customer_service_link" },
                          domProps: { value: _vm.el.customer_service_link },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.el,
                                "customer_service_link",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors && _vm.errors.customer_service_link
                          ? _c(
                              "label",
                              {
                                staticClass: "mt-2 text-danger text-sm",
                                attrs: { for: "customer_service_link" }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.errors.customer_service_link[0])
                                )
                              ]
                            )
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "link_work_with_us" }
                          },
                          [_vm._v("Footer Link Únete a nuestro equipo")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.el.link_work_with_us,
                              expression: "el.link_work_with_us"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "link_work_with_us" },
                          domProps: { value: _vm.el.link_work_with_us },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.el,
                                "link_work_with_us",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors && _vm.errors.link_work_with_us
                          ? _c(
                              "label",
                              {
                                staticClass: "mt-2 text-danger text-sm",
                                attrs: { for: "link_work_with_us" }
                              },
                              [_vm._v(_vm._s(_vm.errors.link_work_with_us[0]))]
                            )
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold",
                              attrs: { for: "book_link" }
                            },
                            [_vm._v("Imagen de Servicios al Cliente")]
                          ),
                          _vm._v(" "),
                          _c("small", { staticClass: "d-block mb-0 lh-1" }, [
                            _vm._v("Resolución recomendada: 54×54px")
                          ]),
                          _vm._v(" "),
                          _c("small", { staticClass: "d-block mb-0 lh-1" }, [
                            _vm._v("Formato: JPG")
                          ]),
                          _vm._v(" "),
                          _c("small", { staticClass: "d-block mb-1 lh-1" }, [
                            _vm._v("Tamaño recomendado: No mayor a 5KB")
                          ]),
                          _vm._v(" "),
                          _vm.el.customer_service_img
                            ? _c("div", [
                                _c("img", {
                                  staticClass: "d-block mb-2 mx-auto",
                                  attrs: {
                                    src:
                                      _vm.imagesUrl +
                                      "/" +
                                      _vm.el.customer_service_img,
                                    alt: _vm.el.name,
                                    height: "54"
                                  }
                                })
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("ImageForm", {
                            attrs: {
                              label: "Imagen",
                              variable: "customer_service_img_update",
                              value: _vm.el.customer_service_img_update
                            },
                            on: {
                              "update:value": function($event) {
                                return _vm.$set(
                                  _vm.el,
                                  "customer_service_img_update",
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

/***/ "./resources/js/admin/components/form/Image.vue":
/*!******************************************************!*\
  !*** ./resources/js/admin/components/form/Image.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Image_vue_vue_type_template_id_1afa967b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image.vue?vue&type=template&id=1afa967b& */ "./resources/js/admin/components/form/Image.vue?vue&type=template&id=1afa967b&");
/* harmony import */ var _Image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Image.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/form/Image.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Image_vue_vue_type_template_id_1afa967b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Image_vue_vue_type_template_id_1afa967b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/form/Image.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/form/Image.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/admin/components/form/Image.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Image.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/form/Image.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/components/form/Image.vue?vue&type=template&id=1afa967b&":
/*!*************************************************************************************!*\
  !*** ./resources/js/admin/components/form/Image.vue?vue&type=template&id=1afa967b& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_template_id_1afa967b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Image.vue?vue&type=template&id=1afa967b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/form/Image.vue?vue&type=template&id=1afa967b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_template_id_1afa967b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_template_id_1afa967b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/admin/functions/PlainClipboard.js":
/*!********************************************************!*\
  !*** ./resources/js/admin/functions/PlainClipboard.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill */ "./node_modules/quill/dist/quill.js");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var Clipboard = quill__WEBPACK_IMPORTED_MODULE_0___default.a["import"]('modules/clipboard');
var Delta = quill__WEBPACK_IMPORTED_MODULE_0___default.a["import"]('delta');

var PlainClipboard = /*#__PURE__*/function (_Clipboard) {
  _inherits(PlainClipboard, _Clipboard);

  var _super = _createSuper(PlainClipboard);

  function PlainClipboard() {
    _classCallCheck(this, PlainClipboard);

    return _super.apply(this, arguments);
  }

  _createClass(PlainClipboard, [{
    key: "onPaste",
    value: function onPaste(e) {
      e.preventDefault();
      var range = this.quill.getSelection();
      var text = e.clipboardData.getData('text/plain');
      var delta = new Delta().retain(range.index)["delete"](range.length).insert(text);
      var index = text.length + range.index;
      var length = 0;
      this.quill.updateContents(delta, 'silent');
      this.quill.setSelection(index, length, 'silent');
      this.quill.scrollIntoView();
      var length2 = this.quill.getSelection().index;
      this.quill.insertText(length2, ' ', '', true);
    }
  }]);

  return PlainClipboard;
}(Clipboard);

/* harmony default export */ __webpack_exports__["default"] = (PlainClipboard);

/***/ }),

/***/ "./resources/js/admin/views/content/GeneralInformation.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/admin/views/content/GeneralInformation.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GeneralInformation_vue_vue_type_template_id_4380aa19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeneralInformation.vue?vue&type=template&id=4380aa19& */ "./resources/js/admin/views/content/GeneralInformation.vue?vue&type=template&id=4380aa19&");
/* harmony import */ var _GeneralInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GeneralInformation.vue?vue&type=script&lang=js& */ "./resources/js/admin/views/content/GeneralInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GeneralInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GeneralInformation_vue_vue_type_template_id_4380aa19___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GeneralInformation_vue_vue_type_template_id_4380aa19___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/views/content/GeneralInformation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/views/content/GeneralInformation.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/admin/views/content/GeneralInformation.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneralInformation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/content/GeneralInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/views/content/GeneralInformation.vue?vue&type=template&id=4380aa19&":
/*!************************************************************************************************!*\
  !*** ./resources/js/admin/views/content/GeneralInformation.vue?vue&type=template&id=4380aa19& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralInformation_vue_vue_type_template_id_4380aa19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneralInformation.vue?vue&type=template&id=4380aa19& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/content/GeneralInformation.vue?vue&type=template&id=4380aa19&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralInformation_vue_vue_type_template_id_4380aa19___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralInformation_vue_vue_type_template_id_4380aa19___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);