(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/testimonials"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NoData.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NoData.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    showSvg: {
      "default": true,
      type: Boolean
    },
    customText: {
      type: String
    },
    showButton: {
      "default": false,
      type: Boolean
    },
    routeButton: String,
    elementTextButton: String,
    classes: Array,
    showTitle: {
      "default": true,
      type: Boolean
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/skeleton/form.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/skeleton/form.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Testimonials.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Testimonials.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_form_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/form/Input */ "./resources/js/components/form/Input.vue");
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
/* harmony import */ var _components_form_Editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/form/Editor */ "./resources/js/components/form/Editor.vue");
/* harmony import */ var _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/modals/Destroy */ "./resources/js/components/modals/Destroy.vue");
/* harmony import */ var _components_skeleton_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/skeleton/form */ "./resources/js/components/skeleton/form.vue");
/* harmony import */ var _components_NoData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/NoData */ "./resources/js/components/NoData.vue");
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
//
//
//
//
//
//
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
    Destroy: _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_7__["default"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_3__["default"],
    Input: _components_form_Input__WEBPACK_IMPORTED_MODULE_4__["default"],
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_2___default.a,
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__["Skeleton"],
    SkeletonForm: _components_skeleton_form__WEBPACK_IMPORTED_MODULE_8__["default"],
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_1___default.a
  }, _defineProperty(_components, "Input", _components_form_Input__WEBPACK_IMPORTED_MODULE_4__["default"]), _defineProperty(_components, "Editor", _components_form_Editor__WEBPACK_IMPORTED_MODULE_6__["default"]), _defineProperty(_components, "NoData", _components_NoData__WEBPACK_IMPORTED_MODULE_9__["default"]), _components),
  props: {
    route: String,
    routeGetAll: String,
    routeOrder: String,
    imagesUrl: String,
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
      //showLoading: false,
      elements: {},
      title: "",
      element: {
        image: "",
        active: true
      },
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
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
    submit: function submit() {
      var _this3 = this;

      this.requestSubmit = true;
      var url;
      var method;
      var fd = new FormData();

      if (this.title == "Nuevo") {
        url = this.route;
        method = "post";
      } else {
        url = this.route + "/" + this.element.id;
        method = "post";
        fd.append("_method", "put");
      }

      if (this.element.title_es) {
        fd.append("title_es", this.element.title_es);
      }
      /*if (this.element.title_en) {
        fd.append("title_en", this.element.title_en);
      }*/


      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }

      if (this.element.description_es) {
        fd.append("description_es", this.element.description_es);
      }

      if (this.element.description_en) {
        fd.append("description_en", this.element.description_en);
      }

      if (this.element.active == true) {
        fd.append("active", 1);
      } else {
        fd.append("active", 0);
      }

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
    restore: function restore() {
      this.element = {
        image: "",
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
        image: "",
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NoData.vue?vue&type=template&id=2a37d9b6&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NoData.vue?vue&type=template&id=2a37d9b6& ***!
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
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      {
        staticClass: "col-12 text-center",
        class: _vm.classes ? _vm.classes : "mt-4"
      },
      [
        _vm.showSvg
          ? _c(
              "svg",
              {
                staticClass: "mb-3",
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  id: "b5d1da7b-a9c6-4711-8d73-fa7937ec989e",
                  "data-name": "Layer 1",
                  width: "100%",
                  height: "90",
                  viewBox: "0 0 888 340"
                }
              },
              [
                _c("title", [_vm._v("server_cluster")]),
                _vm._v(" "),
                _c("rect", {
                  attrs: {
                    x: "60",
                    y: "509.90391",
                    width: "262",
                    height: "195",
                    transform: "translate(1051.40391 -87.19257) rotate(90)",
                    fill: "#2f2e41"
                  }
                }),
                _vm._v(" "),
                _c("rect", {
                  attrs: {
                    x: "313",
                    y: "0",
                    width: "262",
                    height: "104",
                    fill: "#3f3d56"
                  }
                }),
                _vm._v(" "),
                _c("rect", {
                  attrs: {
                    x: "313",
                    y: "116",
                    width: "262",
                    height: "104",
                    fill: "#3f3d56"
                  }
                }),
                _vm._v(" "),
                _c("rect", {
                  attrs: {
                    x: "313",
                    y: "232",
                    width: "262",
                    height: "104",
                    fill: "#3f3d56"
                  }
                }),
                _vm._v(" "),
                _c("rect", {
                  attrs: {
                    x: "313",
                    y: "58",
                    width: "262",
                    height: "16",
                    fill: "#0d0a08"
                  }
                }),
                _vm._v(" "),
                _c("rect", {
                  attrs: {
                    x: "313",
                    y: "174",
                    width: "262",
                    height: "16",
                    fill: "#0d0a08"
                  }
                }),
                _vm._v(" "),
                _c("rect", {
                  attrs: {
                    x: "313",
                    y: "294",
                    width: "262",
                    height: "16",
                    fill: "#0d0a08"
                  }
                }),
                _vm._v(" "),
                _c("circle", {
                  attrs: { cx: "524", cy: "20", r: "6", fill: "#0d0a08" }
                }),
                _vm._v(" "),
                _c("circle", {
                  attrs: { cx: "545", cy: "20", r: "6", fill: "#0d0a08" }
                }),
                _vm._v(" "),
                _c("circle", {
                  attrs: { cx: "566", cy: "20", r: "6", fill: "#0d0a08" }
                }),
                _vm._v(" "),
                _c("circle", {
                  attrs: { cx: "524", cy: "136", r: "6", fill: "#0d0a08" }
                }),
                _vm._v(" "),
                _c("circle", {
                  attrs: { cx: "545", cy: "136", r: "6", fill: "#0d0a08" }
                }),
                _vm._v(" "),
                _c("circle", {
                  attrs: { cx: "566", cy: "136", r: "6", fill: "#0d0a08" }
                }),
                _vm._v(" "),
                _c("circle", {
                  attrs: { cx: "524", cy: "254", r: "6", fill: "#0d0a08" }
                }),
                _vm._v(" "),
                _c("circle", {
                  attrs: { cx: "545", cy: "254", r: "6", fill: "#0d0a08" }
                }),
                _vm._v(" "),
                _c("circle", {
                  attrs: { cx: "566", cy: "254", r: "6", fill: "#0d0a08" }
                })
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.showTitle
          ? _c("h3", { staticClass: "h2 font-weight-500 mb-0" }, [
              _vm._v("No Data")
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("p", { class: _vm.showButton ? "mb-1" : "" }, [
          _vm._v(
            "\n      " +
              _vm._s(
                _vm.customText
                  ? _vm.customText
                  : "No hay datos disponibles en estos momentos"
              ) +
              "\n    "
          )
        ]),
        _vm._v(" "),
        _vm.showButton
          ? _c(
              "a",
              {
                staticClass: "btn btn-inverse-info",
                attrs: { href: _vm.routeButton }
              },
              [_vm._v("Crea " + _vm._s(_vm.elementTextButton))]
            )
          : _vm._e()
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/skeleton/form.vue?vue&type=template&id=8df953ea&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/skeleton/form.vue?vue&type=template&id=8df953ea& ***!
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Testimonials.vue?vue&type=template&id=5a07435a&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Testimonials.vue?vue&type=template&id=5a07435a& ***!
  \**********************************************************************************************************************************************************************************************************/
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
                      attrs: {
                        title: "Testimoniales",
                        parent: "",
                        active: "Testimoniales"
                      }
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
                        _vm._v("Nuevo Testimonio")
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
                  ? _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-12" }, [
                        _c("i", { staticClass: "d-block mb-4" }, [
                          _vm._v(_vm._s(_vm.messageOrder))
                        ])
                      ])
                    ])
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
                            staticClass: "col-12 col-md-6 col-lg-3 mb-4"
                          },
                          [
                            _c("div", { staticClass: "card" }, [
                              _c("div", { staticClass: "card-body" }, [
                                _c("div", { staticClass: "text-center mb-2" }, [
                                  _c("img", {
                                    staticClass:
                                      "img-fluid d-block mb-2 mx-auto",
                                    attrs: {
                                      src:
                                        _vm.imagesUrl +
                                        "/testimonials/" +
                                        el.image,
                                      alt: el.name
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("h3", { staticClass: "mb-1" }, [
                                  _vm._v(
                                    "\n                Título:\n                "
                                  ),
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-normal" },
                                    [_vm._v(_vm._s(el.title_es))]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("h3", { staticClass: "mb-1" }, [
                                  _c("span", {}, [_vm._v("Descripción:")]),
                                  _vm._v(" "),
                                  _c("div", {
                                    staticClass: "content-editor-value",
                                    domProps: {
                                      innerHTML: _vm._s(el.description_es)
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("h3", { staticClass: "mb-1" }, [
                                  _c("span", {}, [
                                    _vm._v("Mostrar en la Web:")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-normal" },
                                    [_vm._v(_vm._s(el.active ? "Sí" : "No"))]
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
              _vm._v(_vm._s(_vm.title) + " Testimonio")
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
              [_c("jam-close")],
              1
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
                    _c("div", { staticClass: "row mb-3" }, [
                      _c(
                        "div",
                        { staticClass: "col-12 text-right" },
                        [
                          _c(
                            "b-form-checkbox",
                            {
                              attrs: {
                                size: "lg",
                                name: "check-button",
                                switch: ""
                              },
                              model: {
                                value: _vm.element.active,
                                callback: function($$v) {
                                  _vm.$set(_vm.element, "active", $$v)
                                },
                                expression: "element.active"
                              }
                            },
                            [
                              _vm._v(
                                "\n            Mostrar Testimonio en la Web\n          "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row" },
                      [
                        _c("div", { staticClass: "col-12" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("Input", {
                                attrs: {
                                  label: "Titulo",
                                  variable: "title",
                                  errors: _vm.errors,
                                  valueEn: _vm.element.title_en,
                                  valueEs: _vm.element.title_es,
                                  valueEnParent: _vm.element.title_en,
                                  valueEsParent: _vm.element.title_es
                                },
                                on: {
                                  "update:valueEn": function($event) {
                                    return _vm.$set(
                                      _vm.element,
                                      "title_en",
                                      $event
                                    )
                                  },
                                  "update:value-en": function($event) {
                                    return _vm.$set(
                                      _vm.element,
                                      "title_en",
                                      $event
                                    )
                                  },
                                  "update:valueEs": function($event) {
                                    return _vm.$set(
                                      _vm.element,
                                      "title_es",
                                      $event
                                    )
                                  },
                                  "update:value-es": function($event) {
                                    return _vm.$set(
                                      _vm.element,
                                      "title_es",
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
                        [
                          _c(
                            "div",
                            { staticClass: "col-12 col-md-12 col-lg-12" },
                            [
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass: "font-weight-bold",
                                    attrs: { for: "image" }
                                  },
                                  [_vm._v("Imagen:")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "small",
                                  { staticClass: "d-block mb-0 lh-1" },
                                  [_vm._v("Resolución recomendada: 430x250px")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "small",
                                  { staticClass: "d-block mb-0 lh-1" },
                                  [_vm._v("Formato: JPG")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "small",
                                  { staticClass: "d-block mb-2 lh-1" },
                                  [
                                    _vm._v(
                                      "Tamaño recomendado: No mayor a 150KB"
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _vm.element.image
                                    ? _c(
                                        "div",
                                        { staticClass: "col text-center" },
                                        [
                                          _c("img", {
                                            staticClass: "mx-auto img-fluid",
                                            attrs: {
                                              src:
                                                _vm.imagesUrl +
                                                "/testimonials/" +
                                                _vm.element.image,
                                              alt: _vm.element.name
                                            }
                                          })
                                        ]
                                      )
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
                                          staticClass: "text-center",
                                          attrs: {
                                            id: "image",
                                            options: _vm.dropzoneOptions,
                                            duplicateCheck: true,
                                            useCustomSlot: true
                                          },
                                          on: {
                                            "vdropzone-file-added": function(
                                              $event
                                            ) {
                                              return _vm.$validateImageDropzone(
                                                $event,
                                                _vm.$refs.ref_image.dropzone,
                                                1,
                                                160000,
                                                "150kb"
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "dropzone-custom-content"
                                            },
                                            [
                                              _c(
                                                "h5",
                                                {
                                                  staticClass:
                                                    "dropzone-custom-title text-primary"
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                          Suelte los archivos aquí o haga click para\n                          cargarlos.\n                        "
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ]),
                                _vm._v(" "),
                                _vm.errors && _vm.errors.image
                                  ? _c(
                                      "label",
                                      {
                                        staticClass:
                                          "text-danger text-sm d-block mt-2",
                                        attrs: { for: "image" }
                                      },
                                      [_vm._v(_vm._s(_vm.errors.image[0]))]
                                    )
                                  : _vm._e()
                              ])
                            ]
                          )
                        ],
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
                                  valueEn: _vm.element.description_en,
                                  valueEs: _vm.element.description_es,
                                  valueEnParent: _vm.element.description_en,
                                  valueEsParent: _vm.element.description_es
                                },
                                on: {
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
                                  },
                                  "update:valueEs": function($event) {
                                    return _vm.$set(
                                      _vm.element,
                                      "description_es",
                                      $event
                                    )
                                  },
                                  "update:value-es": function($event) {
                                    return _vm.$set(
                                      _vm.element,
                                      "description_es",
                                      $event
                                    )
                                  }
                                }
                              })
                            ],
                            1
                          )
                        ])
                      ],
                      2
                    )
                  ]
                )
              ])
        ],
        2
      ),
      _vm._v(" "),
      _c("destroy", {
        attrs: {
          element: "testimonio",
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/NoData.vue":
/*!********************************************!*\
  !*** ./resources/js/components/NoData.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NoData_vue_vue_type_template_id_2a37d9b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NoData.vue?vue&type=template&id=2a37d9b6& */ "./resources/js/components/NoData.vue?vue&type=template&id=2a37d9b6&");
/* harmony import */ var _NoData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoData.vue?vue&type=script&lang=js& */ "./resources/js/components/NoData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NoData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NoData_vue_vue_type_template_id_2a37d9b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NoData_vue_vue_type_template_id_2a37d9b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/NoData.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/NoData.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/NoData.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./NoData.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NoData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/NoData.vue?vue&type=template&id=2a37d9b6&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/NoData.vue?vue&type=template&id=2a37d9b6& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoData_vue_vue_type_template_id_2a37d9b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./NoData.vue?vue&type=template&id=2a37d9b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NoData.vue?vue&type=template&id=2a37d9b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoData_vue_vue_type_template_id_2a37d9b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoData_vue_vue_type_template_id_2a37d9b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/skeleton/form.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/skeleton/form.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_8df953ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=8df953ea& */ "./resources/js/components/skeleton/form.vue?vue&type=template&id=8df953ea&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/components/skeleton/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_8df953ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_8df953ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/skeleton/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/skeleton/form.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/skeleton/form.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/skeleton/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/skeleton/form.vue?vue&type=template&id=8df953ea&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/skeleton/form.vue?vue&type=template&id=8df953ea& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_8df953ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=8df953ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/skeleton/form.vue?vue&type=template&id=8df953ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_8df953ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_8df953ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Testimonials.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/Testimonials.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Testimonials_vue_vue_type_template_id_5a07435a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Testimonials.vue?vue&type=template&id=5a07435a& */ "./resources/js/views/Testimonials.vue?vue&type=template&id=5a07435a&");
/* harmony import */ var _Testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Testimonials.vue?vue&type=script&lang=js& */ "./resources/js/views/Testimonials.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Testimonials_vue_vue_type_template_id_5a07435a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Testimonials_vue_vue_type_template_id_5a07435a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Testimonials.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Testimonials.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Testimonials.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Testimonials.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Testimonials.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Testimonials.vue?vue&type=template&id=5a07435a&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/Testimonials.vue?vue&type=template&id=5a07435a& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_template_id_5a07435a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Testimonials.vue?vue&type=template&id=5a07435a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Testimonials.vue?vue&type=template&id=5a07435a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_template_id_5a07435a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_template_id_5a07435a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);