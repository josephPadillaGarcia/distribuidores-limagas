(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/admin/content/general-content"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/content/GeneralContent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/content/GeneralContent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Button */ "./resources/js/admin/components/Button.vue");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-upload-component */ "./node_modules/vue-upload-component/dist/vue-upload-component.js");
/* harmony import */ var vue_upload_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_upload_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/BreadCrumb */ "./resources/js/admin/components/BreadCrumb.vue");
/* harmony import */ var _components_skeleton_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/skeleton/form */ "./resources/js/admin/components/skeleton/form.vue");
/* harmony import */ var _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/modals/Destroy */ "./resources/js/admin/components/modals/Destroy.vue");
/* harmony import */ var _components_form_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/form/Input */ "./resources/js/admin/components/form/Input.vue");
/* harmony import */ var _components_form_Editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/form/Editor */ "./resources/js/admin/components/form/Editor.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








 // import Loader from "../../components/Loader";

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    routeUpdateSection: String,
    routeGetAll: String,
    route: String,
    imagesUrl: String,
    videosUrl: String // routeOrder: String,
    // messageOrder: String,

  },
  components: {
    Input: _components_form_Input__WEBPACK_IMPORTED_MODULE_7__["default"],
    FileUpload: vue_upload_component__WEBPACK_IMPORTED_MODULE_3___default.a,
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__["quillEditor"],
    Editor: _components_form_Editor__WEBPACK_IMPORTED_MODULE_8__["default"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_1__["default"],
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default.a,
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_4__["default"],
    SkeletonForm: _components_skeleton_form__WEBPACK_IMPORTED_MODULE_5__["default"],
    Destroy: _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      loading: true,
      requestServer: false,
      errors: {},
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 400,
        addRemoveLinks: true,
        dictRemoveFile: "Remover Imagen"
      },
      dropzoneVideoOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "video/mp4",
        autoProcessQueue: false,
        //thumbnailWidth: 400,
        addRemoveLinks: true,
        dictRemoveFile: "Remover Video"
      },
      quillEditorOptions: {
        placeholder: "",
        modules: {
          toolbar: {
            handlers: {
              image: function image(value) {
                document.getElementById("id_content_images").click();
              }
            },
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
            }], [{
              size: [false]
            }], [{
              header: [1, 2, 3, 4, 5, false]
            }], [{
              font: [false]
            }], [{
              color: []
            }, {
              background: []
            }], [{
              align: []
            }], //['clean'],
            ["link", "image", "video"]]
          }
        }
      },
      startBlock: true,
      elementBlock: false,
      pages: {
        sections: []
      },
      page: {},
      section: {
        id: "",
        name: "",
        image: "",
        title: "",
        description: ""
      },
      fields: {},
      image: [],
      image_responsive: [],
      video: []
    };
  },
  methods: {
    updateSection: function updateSection() {
      var _this = this;

      this.requestServer = true;
      var fd = new FormData();
      fd.append("section_id", this.section.id);
      fd.append("content", JSON.stringify(this.fields));

      if (this.$refs.ref_image && this.$refs.ref_image.length > 0 && this.$refs.ref_image[0].dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image[0].dropzone.files[0]);
      }

      if (this.$refs.ref_image_responsive && this.$refs.ref_image_responsive.length > 0 && this.$refs.ref_image_responsive[0].dropzone.files[0]) {
        fd.append("image_responsive", this.$refs.ref_image_responsive[0].dropzone.files[0]);
      }

      if (this.$refs.ref_background && this.$refs.ref_background.length > 0 && this.$refs.ref_background[0].dropzone.files[0]) {
        fd.append("background", this.$refs.ref_background[0].dropzone.files[0]);
      }

      if (this.$refs.ref_video && this.$refs.ref_video.length > 0 && this.$refs.ref_video[0].dropzone.files[0]) {
        fd.append("video", this.$refs.ref_video[0].dropzone.files[0]);
      }

      if (this.$refs.ref_icon_1 && this.$refs.ref_icon_1.length > 0 && this.$refs.ref_icon_1[0].dropzone.files[0]) {
        fd.append("icon_1", this.$refs.ref_icon_1[0].dropzone.files[0]);
      }

      if (this.$refs.ref_icon_2 && this.$refs.ref_icon_2.length > 0 && this.$refs.ref_icon_2[0].dropzone.files[0]) {
        fd.append("icon_2", this.$refs.ref_icon_2[0].dropzone.files[0]);
      }

      if (this.$refs.ref_icon_3 && this.$refs.ref_icon_3.length > 0 && this.$refs.ref_icon_3[0].dropzone.files[0]) {
        fd.append("icon_3", this.$refs.ref_icon_3[0].dropzone.files[0]);
      }

      fd.append("_method", "put");
      axios.post(this.routeUpdateSection, fd).then(function (response) {
        _this.requestServer = false;

        _this.restorePage();

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
        _this.requestServer = false;

        if (error.response.status === 422) {
          _this.errores = error.response.data.errors || {};
          return;
        }

        _this.restorePage();

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
    restorePage: function restorePage() {
      if (this.elementBlock) {
        this.elementBlock = false;
        this.startBlock = true;
        this.section = {
          id: "",
          name: "",
          title: "",
          description: "",
          images: []
        };
        this.fields = {};
      }
    },
    getSection: function getSection(id, name, idPage) {
      var _this2 = this;

      this.page = this.pages.find(function (x) {
        return x.id === idPage;
      });
      axios.get(this.route + "/json/get/section/" + id).then(function (response) {
        _this2.fields = response.data;
        _this2.section.id = id;
        _this2.section.name = name;
        _this2.startBlock = false;
        _this2.elementBlock = true;
      })["catch"](function (error) {});
    },
    getPage: function getPage(id) {
      var _this3 = this;

      axios.get(this.route + "/json/get/" + id).then(function (response) {
        _this3.page = response.data;
      })["catch"](function (error) {});
    },
    getPages: function getPages() {
      var _this4 = this;

      axios.get(this.routeGetAll).then(function (response) {
        _this4.pages = response.data;
        _this4.loading = false;
      })["catch"](function (error) {});
    }
  },
  created: function created() {
    this.getPages();
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/content/GeneralContent.vue?vue&type=template&id=7fb26d66&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/content/GeneralContent.vue?vue&type=template&id=7fb26d66& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
                        ? "Contenido General"
                        : "Actualizar Contenido General",
                      parent: "Contenido",
                      active: "Contenido General"
                    }
                  })
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
        _c("div", { staticClass: "col-12 mb-4" }, [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.startBlock,
                  expression: "startBlock"
                }
              ],
              staticClass: "row"
            },
            [
              _vm.loading
                ? _c("div", { staticClass: "col-12" }, [_c("SkeletonForm")], 1)
                : _c("div", { staticClass: "col-12" }, [
                    _c(
                      "div",
                      { staticClass: "row" },
                      _vm._l(_vm.pages, function(item) {
                        return _c(
                          "div",
                          { key: item.id, staticClass: "col-12" },
                          [
                            _c(
                              "h3",
                              {
                                staticClass: "font-weight-bold mb-4 text-dark"
                              },
                              [
                                _vm._v(
                                  "\n                  " +
                                    _vm._s(item.name) +
                                    " (" +
                                    _vm._s(item.sections_count) +
                                    "\n                  secciones)\n                "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "row" },
                              _vm._l(item.sections, function(section) {
                                return _c(
                                  "div",
                                  {
                                    key: section.id,
                                    staticClass: "col-12 col-lg-6 col-xl-3"
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "card shadow mb-4" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "card-body" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "row align-items-center"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "col" },
                                                  [
                                                    _c(
                                                      "small",
                                                      {
                                                        staticClass:
                                                          "text-dark mb-0"
                                                      },
                                                      [_vm._v("Sección")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "h4",
                                                      {
                                                        staticClass:
                                                          "font-weight-bold mb-0 text-uppercase text-dark"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                              " +
                                                            _vm._s(
                                                              section.name
                                                            ) +
                                                            "\n                            "
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  { staticClass: "col-auto" },
                                                  [
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-sm btn-inverse-primary",
                                                        attrs: {
                                                          type: "button"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            $event.preventDefault()
                                                            return _vm.getSection(
                                                              section.id,
                                                              section.name,
                                                              item.id
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                              Editar\n                            "
                                                        )
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
                                  ]
                                )
                              }),
                              0
                            )
                          ]
                        )
                      }),
                      0
                    )
                  ])
            ]
          ),
          _vm._v(" "),
          _vm.elementBlock
            ? _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12" }, [
                  _c("div", { staticClass: "card shadow" }, [
                    _c("div", { staticClass: "card-header border-0" }, [
                      _c(
                        "h2",
                        { staticClass: "mb-0 text-uppercase text-primary" },
                        [
                          _vm._v(
                            "\n                  Página " +
                              _vm._s(_vm.page.name) +
                              " - Sección:\n                  " +
                              _vm._s(_vm.section.name) +
                              "\n                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _c(
                        "form",
                        {
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.updateSection.apply(null, arguments)
                            }
                          }
                        },
                        [
                          _c("file-upload", {
                            ref: "ref_content_images",
                            staticClass: "d-none",
                            attrs: {
                              extensions: "jpg,jpeg,png",
                              accept: "image/png, image/jpeg, image/jpg",
                              drop: false,
                              multiple: true,
                              "input-id": "id_content_images"
                            },
                            on: {
                              "input-filter": function($event) {
                                return _vm.$uploadImageUploadComponent(
                                  $event,
                                  _vm.$refs.ref_content[0],
                                  250000,
                                  "500kb",
                                  "pages"
                                )
                              }
                            },
                            model: {
                              value: _vm.section.images,
                              callback: function($$v) {
                                _vm.$set(_vm.section, "images", $$v)
                              },
                              expression: "section.images"
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.fields, function(field, index) {
                            return _c("div", { key: field.id }, [
                              _c("div", { staticClass: "col-12 p-0" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  field.type != "input" &&
                                  field.type != "editor_large" &&
                                  field.type != "editor_small"
                                    ? _c(
                                        "label",
                                        { staticClass: "font-weight-bold" },
                                        [_vm._v(_vm._s(field.name))]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  field.type == "input"
                                    ? _c(
                                        "div",
                                        [
                                          _c("Input", {
                                            attrs: {
                                              errors: _vm.errors,
                                              label: field.name,
                                              variable: "value",
                                              valueEn:
                                                _vm.fields[index].value_en,
                                              valueEs:
                                                _vm.fields[index].value_es,
                                              valueEnParent:
                                                _vm.fields[index].value_en,
                                              valueEsParent:
                                                _vm.fields[index].value_es
                                            },
                                            on: {
                                              "update:valueEn": function(
                                                $event
                                              ) {
                                                return _vm.$set(
                                                  _vm.fields[index],
                                                  "value_en",
                                                  $event
                                                )
                                              },
                                              "update:value-en": function(
                                                $event
                                              ) {
                                                return _vm.$set(
                                                  _vm.fields[index],
                                                  "value_en",
                                                  $event
                                                )
                                              },
                                              "update:valueEs": function(
                                                $event
                                              ) {
                                                return _vm.$set(
                                                  _vm.fields[index],
                                                  "value_es",
                                                  $event
                                                )
                                              },
                                              "update:value-es": function(
                                                $event
                                              ) {
                                                return _vm.$set(
                                                  _vm.fields[index],
                                                  "value_es",
                                                  $event
                                                )
                                              }
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  field.type == "editor_small"
                                    ? _c(
                                        "div",
                                        [
                                          _c("Editor", {
                                            attrs: {
                                              size: "md",
                                              label: field.name,
                                              variable: "description",
                                              errors: _vm.errors,
                                              valueEn:
                                                _vm.fields[index].value_en,
                                              valueEs:
                                                _vm.fields[index].value_es,
                                              valueEnParent:
                                                _vm.fields[index].value_en,
                                              valueEsParent:
                                                _vm.fields[index].value_es
                                            },
                                            on: {
                                              "update:valueEn": function(
                                                $event
                                              ) {
                                                return _vm.$set(
                                                  _vm.fields[index],
                                                  "value_en",
                                                  $event
                                                )
                                              },
                                              "update:value-en": function(
                                                $event
                                              ) {
                                                return _vm.$set(
                                                  _vm.fields[index],
                                                  "value_en",
                                                  $event
                                                )
                                              },
                                              "update:valueEs": function(
                                                $event
                                              ) {
                                                return _vm.$set(
                                                  _vm.fields[index],
                                                  "value_es",
                                                  $event
                                                )
                                              },
                                              "update:value-es": function(
                                                $event
                                              ) {
                                                return _vm.$set(
                                                  _vm.fields[index],
                                                  "value_es",
                                                  $event
                                                )
                                              }
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  field.type == "editor_large"
                                    ? _c(
                                        "div",
                                        [
                                          _c("Editor", {
                                            attrs: {
                                              size: "lg",
                                              label: field.name,
                                              variable: "description",
                                              errors: _vm.errors,
                                              valueEn:
                                                _vm.fields[index].value_en,
                                              valueEs:
                                                _vm.fields[index].value_es,
                                              valueEnParent:
                                                _vm.fields[index].value_en,
                                              valueEsParent:
                                                _vm.fields[index].value_es
                                            },
                                            on: {
                                              "update:valueEn": function(
                                                $event
                                              ) {
                                                return _vm.$set(
                                                  _vm.fields[index],
                                                  "value_en",
                                                  $event
                                                )
                                              },
                                              "update:value-en": function(
                                                $event
                                              ) {
                                                return _vm.$set(
                                                  _vm.fields[index],
                                                  "value_en",
                                                  $event
                                                )
                                              },
                                              "update:valueEs": function(
                                                $event
                                              ) {
                                                return _vm.$set(
                                                  _vm.fields[index],
                                                  "value_es",
                                                  $event
                                                )
                                              },
                                              "update:value-es": function(
                                                $event
                                              ) {
                                                return _vm.$set(
                                                  _vm.fields[index],
                                                  "value_es",
                                                  $event
                                                )
                                              }
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  field.type == "image"
                                    ? _c("div", [
                                        _c("div", { staticClass: "row" }, [
                                          field.value
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass: "col-12 col-lg-4"
                                                },
                                                [
                                                  _c("img", {
                                                    staticClass:
                                                      "img-fluid d-block mb-3",
                                                    attrs: {
                                                      src:
                                                        _vm.imagesUrl +
                                                        "/content/" +
                                                        field.value,
                                                      alt: field.name
                                                    }
                                                  })
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "col-12",
                                              class: {
                                                "col-lg-8": field.value
                                              }
                                            },
                                            [
                                              field.name == "Fondo"
                                                ? _c("div", [
                                                    _c(
                                                      "small",
                                                      {
                                                        staticClass:
                                                          "d-block mb-0 lh-1"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Resolución recomendada: 1440x250px"
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "small",
                                                      {
                                                        staticClass:
                                                          "d-block mb-0 lh-1"
                                                      },
                                                      [_vm._v("Formato: JPG")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "small",
                                                      {
                                                        staticClass:
                                                          "d-block mb-2 lh-1"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Tamaño recomendado: No mayor a 300KB"
                                                        )
                                                      ]
                                                    )
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c(
                                                "vue-dropzone",
                                                {
                                                  ref: "ref_" + field.variable,
                                                  refInFor: true,
                                                  attrs: {
                                                    id: "id_" + field.variable,
                                                    options:
                                                      _vm.dropzoneOptions,
                                                    duplicateCheck: true,
                                                    useCustomSlot: true
                                                  },
                                                  on: {
                                                    "vdropzone-file-added": function(
                                                      $event
                                                    ) {
                                                      return _vm.$validateImageDropzone(
                                                        $event,
                                                        _vm.$refs[
                                                          "ref_" +
                                                            field.variable
                                                        ][0].dropzone,
                                                        1,
                                                        310000,
                                                        "300kb"
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
                                                            "\n                                    Suelte el archivo aquí o haga click para\n                                    cargarlo.\n                                  "
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
                                        ])
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  field.type == "video"
                                    ? _c("div", [
                                        _c("div", { staticClass: "row" }, [
                                          field.value
                                            ? _c(
                                                "div",
                                                { staticClass: "col-12 mb-3" },
                                                [
                                                  _c(
                                                    "a",
                                                    {
                                                      staticClass:
                                                        "btn btn-primary",
                                                      attrs: {
                                                        target: "_blank",
                                                        href:
                                                          _vm.videosUrl +
                                                          "/pages/" +
                                                          field.value
                                                      }
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fas fa-play mr-1"
                                                      }),
                                                      _vm._v(
                                                        "\n                                Ver Video\n                              "
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-12" },
                                            [
                                              _c(
                                                "vue-dropzone",
                                                {
                                                  ref: "ref_video",
                                                  refInFor: true,
                                                  attrs: {
                                                    id: "id_" + field.variable,
                                                    options:
                                                      _vm.dropzoneVideoOptions,
                                                    duplicateCheck: true,
                                                    useCustomSlot: true
                                                  },
                                                  on: {
                                                    "vdropzone-file-added": function(
                                                      $event
                                                    ) {
                                                      return _vm.$validateVideoDropzone(
                                                        $event,
                                                        _vm.$refs.ref_video[0]
                                                          .dropzone,
                                                        1,
                                                        8388608,
                                                        "8mb"
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
                                                            "\n                                    Suelte el archivo aquí o haga click para\n                                    cargarlo.\n                                  "
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
                                        ])
                                      ])
                                    : _vm._e()
                                ])
                              ])
                            ])
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-12 p-0 text-right" },
                            [
                              _c("Button", {
                                attrs: {
                                  text: "Actualizar",
                                  classes: ["btn-inverse-primary", "mr-2"],
                                  "request-server": _vm.requestServer
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
                                      return _vm.restorePage.apply(
                                        null,
                                        arguments
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                      Cancelar\n                    "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        2
                      )
                    ])
                  ])
                ])
              ])
            : _vm._e()
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
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

/***/ "./resources/js/admin/views/content/GeneralContent.vue":
/*!*************************************************************!*\
  !*** ./resources/js/admin/views/content/GeneralContent.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GeneralContent_vue_vue_type_template_id_7fb26d66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeneralContent.vue?vue&type=template&id=7fb26d66& */ "./resources/js/admin/views/content/GeneralContent.vue?vue&type=template&id=7fb26d66&");
/* harmony import */ var _GeneralContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GeneralContent.vue?vue&type=script&lang=js& */ "./resources/js/admin/views/content/GeneralContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GeneralContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GeneralContent_vue_vue_type_template_id_7fb26d66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GeneralContent_vue_vue_type_template_id_7fb26d66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/views/content/GeneralContent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/views/content/GeneralContent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/admin/views/content/GeneralContent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneralContent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/content/GeneralContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/views/content/GeneralContent.vue?vue&type=template&id=7fb26d66&":
/*!********************************************************************************************!*\
  !*** ./resources/js/admin/views/content/GeneralContent.vue?vue&type=template&id=7fb26d66& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralContent_vue_vue_type_template_id_7fb26d66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneralContent.vue?vue&type=template&id=7fb26d66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/content/GeneralContent.vue?vue&type=template&id=7fb26d66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralContent_vue_vue_type_template_id_7fb26d66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralContent_vue_vue_type_template_id_7fb26d66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);