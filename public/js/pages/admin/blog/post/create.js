(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/admin/blog/post/create"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/form/InputArray2.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/form/InputArray2.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    /*disableMessageEdit: String,*/
    disableEdit: {
      "default": false,
      type: Boolean
    },
    label: String,
    fieldName: String,
    headers: Array,
    arrayProp: Array,
    errorsProp: Object
  },
  data: function data() {
    return {
      arrayData: [{}],
      errorsData: {}
    };
  },
  methods: {
    restore: function restore() {
      this.arrayData = [{}];
    },
    addEl: function addEl(i) {
      var isEmpty = Object.values(this.arrayData[i]).every(function (x) {
        return x === null || x === "";
      });

      if (isEmpty) {
        return;
      }

      this.arrayData.push({});
    },
    deleteEl: function deleteEl(i) {
      this.arrayData.splice(i, 1);
    }
  },
  computed: {
    array: {
      get: function get() {
        return this.arrayData;
      },
      set: function set(value) {
        this.arrayData.push({});
        this.array.push({});
      }
    },
    errors: {
      get: function get() {
        return this.errorsData;
      }
    }
  },
  watch: {
    array: {
      deep: true,
      handler: function handler(newValue, oldValue) {
        if (!newValue[newValue.length - 1]) {
          return;
        }

        this.$emit("update:array", newValue);
      }
    },
    errorsProp: {
      immediate: true,
      deep: true,
      handler: function handler(newValue, oldValue) {
        this.errorsData = newValue;
      }
    },
    arrayProp: {
      immediate: true,
      deep: true,
      handler: function handler(newValue, oldValue) {
        if (newValue && newValue.length > 0) {
          this.arrayData = newValue;
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/noticia/post/Create.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/noticia/post/Create.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/lib/index.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_NoData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/NoData */ "./resources/js/admin/components/NoData.vue");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/BreadCrumb */ "./resources/js/admin/components/BreadCrumb.vue");
/* harmony import */ var _components_form_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/form/Input */ "./resources/js/admin/components/form/Input.vue");
/* harmony import */ var _components_form_Textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/form/Textarea */ "./resources/js/admin/components/form/Textarea.vue");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Button */ "./resources/js/admin/components/Button.vue");
/* harmony import */ var _components_form_Editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/form/Editor */ "./resources/js/admin/components/form/Editor.vue");
/* harmony import */ var _components_form_InputSlug__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/form/InputSlug */ "./resources/js/admin/components/form/InputSlug.vue");
/* harmony import */ var _components_form_InputArray2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/form/InputArray2 */ "./resources/js/admin/components/form/InputArray2.vue");
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-search-select */ "./node_modules/vue-search-select/dist/VueSearchSelect.common.js");
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vue_search_select__WEBPACK_IMPORTED_MODULE_10__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_0___default.a,
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_3__["default"],
    Editor: _components_form_Editor__WEBPACK_IMPORTED_MODULE_7__["default"],
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_2___default.a,
    Input: _components_form_Input__WEBPACK_IMPORTED_MODULE_4__["default"],
    Textarea: _components_form_Textarea__WEBPACK_IMPORTED_MODULE_5__["default"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_6__["default"],
    InputSlug: _components_form_InputSlug__WEBPACK_IMPORTED_MODULE_8__["default"],
    InputArray: _components_form_InputArray2__WEBPACK_IMPORTED_MODULE_9__["default"],
    ModelListSelect: vue_search_select__WEBPACK_IMPORTED_MODULE_10__["ModelListSelect"],
    NoData: _components_NoData__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    imagesUrl: String,
    routeStore: String,
    routeCreate: String,
    routeReturn: String
  },
  data: function data() {
    return {
      element: {
        published: true,
        created_at: new Date().getDate() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getFullYear()
      },
      requestServer: false,
      categories: [],
      tags: [],
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover"
      },
      errors: {}
    };
  },
  methods: {
    getCategories: function getCategories() {
      var _this = this;

      axios.get("/admin/json/select/categories").then(function (response) {
        _this.categories = response.data;
      })["catch"](function (err) {});
    },
    submit: function submit() {
      var _this2 = this;

      this.requestServer = true;
      var fd = new FormData();

      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }

      if (this.$refs.ref_thumbnail.dropzone.files[0]) {
        fd.append("thumbnail", this.$refs.ref_thumbnail.dropzone.files[0]);
      }

      if (this.element.title_en) {
        fd.append("title_en", this.element.title_en);
      }

      if (this.element.title_es) {
        fd.append("title_es", this.element.title_es);
      }

      if (this.element.seo_keywords_en) {
        fd.append("seo_keywords_en", this.element.seo_keywords_en);
      }

      if (this.element.seo_keywords_es) {
        fd.append("seo_keywords_es", this.element.seo_keywords_es);
      }

      if (this.element.slug_en) {
        fd.append("slug_en", this.element.slug_en);
      }

      if (this.element.slug_es) {
        fd.append("slug_es", this.element.slug_es);
      }

      if (this.element.created_at) {
        fd.append("created_at", this.element.created_at);
      }

      if (this.element.published) {
        fd.append("published", 1);
      } else {
        fd.append("published", 0);
      }
      /*if (this.element.tags) {
        fd.append("tags", JSON.stringify(this.element.tags));
      } else {
        fd.append("tags", JSON.stringify([{ tag_en: "", tag_es: "" }]));
      }*/


      if (this.element.category_id) {
        fd.append("category_id", this.element.category_id);
      }

      if (this.element.excerpt_en) {
        fd.append("excerpt_en", this.element.excerpt_en);
      }

      if (this.element.excerpt_es) {
        fd.append("excerpt_es", this.element.excerpt_es);
      }

      if (this.element.content_es) {
        fd.append("content_es", this.element.content_es);
      }

      if (this.element.content_en) {
        fd.append("content_en", this.element.content_en);
      }

      axios.post(this.routeStore, fd).then(function (response) {
        _this2.requestServer = false;
        document.location.href = response.data.route;
      })["catch"](function (error) {
        _this2.requestServer = false;

        if (error.response.status === 422) {
          _this2.errors = error.response.data.errors || {};
          return;
        }

        document.location.href = error.response.data.route;
      });
    }
  },
  created: function created() {
    this.getCategories();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/form/InputArray2.vue?vue&type=template&id=5ff02083&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/form/InputArray2.vue?vue&type=template&id=5ff02083& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("label", { staticClass: "font-weight-bold" }, [
            _vm._v(_vm._s(_vm.label))
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._l(_vm.array.length, function(el, i) {
        return _c(
          "div",
          { key: "tr" + i, staticClass: "row mb-2" },
          [
            _vm._l(_vm.headers, function(el, j) {
              return _c("div", { key: "td" + j, staticClass: "col-lg-5" }, [
                _c(
                  "label",
                  {
                    staticClass: "text-xs font-weight-bold",
                    attrs: { for: el.variable }
                  },
                  [
                    _vm._v(
                      _vm._s(
                        el.label.charAt(0).toUpperCase() + el.label.slice(1)
                      ) +
                        " " +
                        _vm._s(i + 1)
                    )
                  ]
                ),
                _vm._v(" "),
                el.variable == "tag_es" || el.variable == "text"
                  ? _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.array[i][el.variable],
                          expression: "array[i][el.variable]"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: el.variable },
                      domProps: { value: _vm.array[i][el.variable] },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.array[i],
                            el.variable,
                            $event.target.value
                          )
                        }
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                el.variable == "tag_en" || el.variable == "text"
                  ? _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.array[i][el.variable],
                          expression: "array[i][el.variable]"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: el.variable },
                      domProps: { value: _vm.array[i][el.variable] },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.array[i],
                            el.variable,
                            $event.target.value
                          )
                        }
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.errors &&
                _vm.errors[_vm.fieldName + "." + i + "." + el.variable]
                  ? _c(
                      "label",
                      { staticClass: "text-danger text-sm mt-2 d-block" },
                      [
                        _vm._v(
                          _vm._s(
                            _vm.errors[
                              _vm.fieldName + "." + i + "." + el.variable
                            ][0]
                          )
                        )
                      ]
                    )
                  : _vm._e()
              ])
            }),
            _vm._v(" "),
            !_vm.disableEdit
              ? _c(
                  "div",
                  {
                    staticClass:
                      "mb-2 mt-2 mt-lg-0 actions d-flex align-items-end col-lg-2"
                  },
                  [
                    _vm.array.length - 1 == i
                      ? _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-sm btn-icon-only rounded-circle btn-inverse-info",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.addEl(i)
                              }
                            }
                          },
                          [_c("jam-plus", { staticClass: "current-color" })],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    i != 0
                      ? _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-sm btn-icon-only rounded-circle btn-inverse-danger",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.deleteEl(i)
                              }
                            }
                          },
                          [
                            _c("jam-trash-alt", {
                              staticClass: "current-color"
                            })
                          ],
                          1
                        )
                      : _vm._e()
                  ]
                )
              : _vm._e()
          ],
          2
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/noticia/post/Create.vue?vue&type=template&id=924ba11c&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/noticia/post/Create.vue?vue&type=template&id=924ba11c& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
                          title: "Crear Post",
                          parent: "Blog",
                          active: "Posts"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-6 col-md text-right" },
                    [
                      _c("Button", {
                        attrs: {
                          text: "Guardar",
                          classes: ["btn-inverse-primary", "mr-2"],
                          "request-server": _vm.requestServer
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-secondary",
                          attrs: { type: "button", href: _vm.routeReturn }
                        },
                        [_vm._v("Cancelar")]
                      )
                    ],
                    1
                  )
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "container-fluid mt--6" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12 col-xl-8 mb-4 mb-xl-0" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-12" },
                      [
                        _c("InputSlug", {
                          attrs: {
                            label: "Titulo",
                            variable: "title",
                            type: "Ruta",
                            errors: _vm.errors,
                            valueEn: _vm.element.title_en,
                            valueEs: _vm.element.title_es,
                            slugEn: _vm.element.slug_en,
                            slugEs: _vm.element.slug_es,
                            valueEnParent: _vm.element.title_en,
                            valueEsParent: _vm.element.title_es,
                            slugEnParent: _vm.element.slug_en,
                            slugEsParent: _vm.element.slug_es
                          },
                          on: {
                            "update:valueEn": function($event) {
                              return _vm.$set(_vm.element, "title_en", $event)
                            },
                            "update:value-en": function($event) {
                              return _vm.$set(_vm.element, "title_en", $event)
                            },
                            "update:valueEs": function($event) {
                              return _vm.$set(_vm.element, "title_es", $event)
                            },
                            "update:value-es": function($event) {
                              return _vm.$set(_vm.element, "title_es", $event)
                            },
                            "update:slugEn": function($event) {
                              return _vm.$set(_vm.element, "slug_en", $event)
                            },
                            "update:slug-en": function($event) {
                              return _vm.$set(_vm.element, "slug_en", $event)
                            },
                            "update:slugEs": function($event) {
                              return _vm.$set(_vm.element, "slug_es", $event)
                            },
                            "update:slug-es": function($event) {
                              return _vm.$set(_vm.element, "slug_es", $event)
                            }
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "b-form-checkbox",
                            {
                              attrs: {
                                size: "lg",
                                id: "id_checkbox_published",
                                name: "check-button",
                                switch: ""
                              },
                              model: {
                                value: _vm.element.published,
                                callback: function($$v) {
                                  _vm.$set(_vm.element, "published", $$v)
                                },
                                expression: "element.published"
                              }
                            },
                            [_vm._v("Publicar")]
                          )
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
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold",
                              attrs: { for: "created_at" }
                            },
                            [_vm._v("Fecha de Publicación")]
                          ),
                          _vm._v(" "),
                          _c(
                            "date-picker",
                            {
                              attrs: {
                                "input-attr": { id: "created_at" },
                                "value-type": "format",
                                format: "DD-MM-YYYY",
                                "first-day-of-week": 1,
                                lang: "es",
                                "input-class": "form-control",
                                width: "100%"
                              },
                              model: {
                                value: _vm.element.created_at,
                                callback: function($$v) {
                                  _vm.$set(_vm.element, "created_at", $$v)
                                },
                                expression: "element.created_at"
                              }
                            },
                            [_c("jam-calendar")],
                            1
                          )
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
                          _c("Input", {
                            attrs: {
                              label: "Seo Keywords",
                              variable: "seo_keywords",
                              errors: _vm.errors,
                              valueEn: _vm.element.seo_keywords_en,
                              valueEs: _vm.element.seo_keywords_es,
                              valueEnParent: _vm.element.seo_keywords_en,
                              valueEsParent: _vm.element.seo_keywords_es
                            },
                            on: {
                              "update:valueEn": function($event) {
                                return _vm.$set(
                                  _vm.element,
                                  "seo_keywords_en",
                                  $event
                                )
                              },
                              "update:value-en": function($event) {
                                return _vm.$set(
                                  _vm.element,
                                  "seo_keywords_en",
                                  $event
                                )
                              },
                              "update:valueEs": function($event) {
                                return _vm.$set(
                                  _vm.element,
                                  "seo_keywords_es",
                                  $event
                                )
                              },
                              "update:value-es": function($event) {
                                return _vm.$set(
                                  _vm.element,
                                  "seo_keywords_es",
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
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold",
                              attrs: { for: "id_category" }
                            },
                            [_vm._v("Categoría")]
                          ),
                          _vm._v(" "),
                          _vm.categories && _vm.categories.length
                            ? _c(
                                "div",
                                [
                                  _c("model-list-select", {
                                    staticClass: "form-control shadow-none",
                                    attrs: {
                                      list: _vm.categories,
                                      id: "id_category_id",
                                      "option-value": "id",
                                      "option-text": "name_es",
                                      placeholder: "Seleccione la Categoría"
                                    },
                                    model: {
                                      value: _vm.element.category_id,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.element,
                                          "category_id",
                                          $$v
                                        )
                                      },
                                      expression: "element.category_id"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm.errors && _vm.errors.category_id
                                    ? _c(
                                        "label",
                                        {
                                          staticClass:
                                            "mt-2 text-danger text-sm",
                                          attrs: { for: "id_category_id" }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.errors.category_id[0])
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            : _c("NoData", {
                                attrs: {
                                  showSvg: false,
                                  showButton: true,
                                  elementTextButton: "una Categoría",
                                  "route-button": _vm.routeCreate,
                                  classes: ["mt-2"],
                                  "show-title": false
                                }
                              })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12" },
                      [
                        _c("Textarea", {
                          attrs: {
                            label: "Descripción corta",
                            variable: "excerpt",
                            errors: _vm.errors,
                            valueEn: _vm.element.excerpt_en,
                            valueEs: _vm.element.excerpt_es,
                            valueEnParent: _vm.element.excerpt_en,
                            valueEsParent: _vm.element.excerpt_es
                          },
                          on: {
                            "update:valueEn": function($event) {
                              return _vm.$set(_vm.element, "excerpt_en", $event)
                            },
                            "update:value-en": function($event) {
                              return _vm.$set(_vm.element, "excerpt_en", $event)
                            },
                            "update:valueEs": function($event) {
                              return _vm.$set(_vm.element, "excerpt_es", $event)
                            },
                            "update:value-es": function($event) {
                              return _vm.$set(_vm.element, "excerpt_es", $event)
                            }
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12" },
                      [
                        _c("Editor", {
                          attrs: {
                            size: "lg",
                            label: "Contenido",
                            variable: "content",
                            errors: _vm.errors,
                            valueEn: _vm.element.content_en,
                            valueEs: _vm.element.content_es,
                            valueEnParent: _vm.element.content_en,
                            valueEsParent: _vm.element.content_es,
                            url: "posts",
                            "text-image": "image"
                          },
                          on: {
                            "update:valueEn": function($event) {
                              return _vm.$set(_vm.element, "content_en", $event)
                            },
                            "update:value-en": function($event) {
                              return _vm.$set(_vm.element, "content_en", $event)
                            },
                            "update:valueEs": function($event) {
                              return _vm.$set(_vm.element, "content_es", $event)
                            },
                            "update:value-es": function($event) {
                              return _vm.$set(_vm.element, "content_es", $event)
                            }
                          }
                        })
                      ],
                      1
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-xl" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "font-weight-bold d-block",
                          attrs: { for: "thumbnail" }
                        },
                        [_vm._v("Miniatura")]
                      ),
                      _vm._v(" "),
                      _c("small", { staticClass: " d-block mb-0 lh-1" }, [
                        _vm._v("Resolución recomendada: 590x330px")
                      ]),
                      _vm._v(" "),
                      _c("small", { staticClass: " d-block mb-0 lh-1" }, [
                        _vm._v("Formato: JPG")
                      ]),
                      _vm._v(" "),
                      _c("small", { staticClass: " d-block mb-2 lh-1" }, [
                        _vm._v("Tamaño recomendado: No mayor a 150KB")
                      ]),
                      _vm._v(" "),
                      _c(
                        "vue-dropzone",
                        {
                          ref: "ref_thumbnail",
                          attrs: {
                            id: "id_thumbnail",
                            options: _vm.dropzoneOptions,
                            duplicateCheck: true,
                            useCustomSlot: true
                          },
                          on: {
                            "vdropzone-file-added": function($event) {
                              return _vm.$validateImageDropzone(
                                $event,
                                _vm.$refs.ref_thumbnail.dropzone,
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
                            { staticClass: "dropzone-custom-content" },
                            [
                              _c(
                                "h5",
                                {
                                  staticClass:
                                    "dropzone-custom-title text-primary"
                                },
                                [
                                  _vm._v(
                                    "Suelte el archivo aquí o haga click para cargarlo."
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm.errors && _vm.errors.thumbnail
                        ? _c(
                            "label",
                            {
                              staticClass: "text-danger text-sm d-block mt-2",
                              attrs: { for: "file" }
                            },
                            [_vm._v(_vm._s(_vm.errors.thumbnail[0]))]
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group mb-0" },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "font-weight-bold d-block",
                          attrs: { for: "image" }
                        },
                        [_vm._v("Imagen")]
                      ),
                      _vm._v(" "),
                      _c("small", { staticClass: "d-block mb-0 lh-1" }, [
                        _vm._v("Resolución recomendada: 900x500px")
                      ]),
                      _vm._v(" "),
                      _c("small", { staticClass: "d-block mb-0 lh-1" }, [
                        _vm._v("Formato: JPG")
                      ]),
                      _vm._v(" "),
                      _c("small", { staticClass: "d-block mb-2 lh-1" }, [
                        _vm._v("Tamaño recomendado: No mayor a 250KB")
                      ]),
                      _vm._v(" "),
                      _c(
                        "vue-dropzone",
                        {
                          ref: "ref_image",
                          attrs: {
                            id: "id_image",
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
                                260000,
                                "250kb"
                              )
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "dropzone-custom-content" },
                            [
                              _c(
                                "h5",
                                {
                                  staticClass:
                                    "dropzone-custom-title text-primary"
                                },
                                [
                                  _vm._v(
                                    "Suelte el archivo aquí o haga click para cargarlo."
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm.errors && _vm.errors.image
                        ? _c(
                            "label",
                            {
                              staticClass: "text-danger text-sm d-block mt-2",
                              attrs: { for: "file" }
                            },
                            [_vm._v(_vm._s(_vm.errors.image[0]))]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ])
              ])
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/components/form/InputArray2.vue":
/*!************************************************************!*\
  !*** ./resources/js/admin/components/form/InputArray2.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputArray2_vue_vue_type_template_id_5ff02083___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputArray2.vue?vue&type=template&id=5ff02083& */ "./resources/js/admin/components/form/InputArray2.vue?vue&type=template&id=5ff02083&");
/* harmony import */ var _InputArray2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputArray2.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/form/InputArray2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InputArray2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InputArray2_vue_vue_type_template_id_5ff02083___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InputArray2_vue_vue_type_template_id_5ff02083___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/form/InputArray2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/form/InputArray2.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/admin/components/form/InputArray2.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputArray2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InputArray2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/form/InputArray2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputArray2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/components/form/InputArray2.vue?vue&type=template&id=5ff02083&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/admin/components/form/InputArray2.vue?vue&type=template&id=5ff02083& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputArray2_vue_vue_type_template_id_5ff02083___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InputArray2.vue?vue&type=template&id=5ff02083& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/form/InputArray2.vue?vue&type=template&id=5ff02083&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputArray2_vue_vue_type_template_id_5ff02083___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputArray2_vue_vue_type_template_id_5ff02083___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/admin/views/noticia/post/Create.vue":
/*!**********************************************************!*\
  !*** ./resources/js/admin/views/noticia/post/Create.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_924ba11c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=924ba11c& */ "./resources/js/admin/views/noticia/post/Create.vue?vue&type=template&id=924ba11c&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/admin/views/noticia/post/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_924ba11c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_924ba11c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/views/noticia/post/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/views/noticia/post/Create.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/admin/views/noticia/post/Create.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/noticia/post/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/views/noticia/post/Create.vue?vue&type=template&id=924ba11c&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/admin/views/noticia/post/Create.vue?vue&type=template&id=924ba11c& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_924ba11c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=924ba11c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/noticia/post/Create.vue?vue&type=template&id=924ba11c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_924ba11c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_924ba11c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);