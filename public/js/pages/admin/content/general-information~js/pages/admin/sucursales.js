(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/admin/content/general-information~js/pages/admin/sucursales"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/form/InputSelectArray.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/form/InputSelectArray.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    /*hideDepartment: {
      default: false,
      type: Boolean
    },*/
    disableEdit: {
      "default": false,
      type: Boolean
    },
    fieldName: String,
    selectItems: Array,
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/form/InputSelectArray.vue?vue&type=template&id=38c316ba&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/form/InputSelectArray.vue?vue&type=template&id=38c316ba& ***!
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
  return _c(
    "div",
    _vm._l(_vm.array.length, function(el, i) {
      return _c(
        "div",
        { key: "tr" + i, staticClass: "row mb-2" },
        [
          _vm._l(_vm.headers, function(el, j) {
            return _c(
              "div",
              { key: "td" + j, class: j == 0 ? "col-8" : "col-8" },
              [
                _c(
                  "label",
                  {
                    staticClass: "font-weight-bold",
                    attrs: { for: el.variable }
                  },
                  [
                    _vm._v(
                      _vm._s(
                        el.label.charAt(0).toUpperCase() + el.label.slice(1)
                      )
                    )
                  ]
                ),
                _vm._v(" "),
                el.variable == "name" || el.variable == "number"
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
                  : _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.array[i][el.variable],
                            expression: "array[i][el.variable]"
                          }
                        ],
                        class: ["form-control"],
                        attrs: { id: el.variable },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.array[i],
                              el.variable,
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(_vm.selectItems, function(el2, i) {
                        return _c(
                          "option",
                          { key: i, domProps: { value: el2.code_department } },
                          [_vm._v(_vm._s(el2.department))]
                        )
                      }),
                      0
                    ),
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
              ]
            )
          }),
          _vm._v(" "),
          !_vm.disableEdit
            ? _c(
                "div",
                {
                  staticClass:
                    "mb-2 mt-2 mt-0 actions d-flex align-items-end col"
                },
                [
                  _vm.array.length - 1 == i
                    ? _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-sm btn-icon-only rounded-circle btn-inverse-primary",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.addEl(i)
                            }
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "ri-add-line text-lg current-color"
                          })
                        ]
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
                          _c("i", {
                            staticClass:
                              "ri-delete-bin-line text-lg current-color"
                          })
                        ]
                      )
                    : _vm._e()
                ]
              )
            : _vm._e()
        ],
        2
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/components/form/InputSelectArray.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/admin/components/form/InputSelectArray.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputSelectArray_vue_vue_type_template_id_38c316ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputSelectArray.vue?vue&type=template&id=38c316ba& */ "./resources/js/admin/components/form/InputSelectArray.vue?vue&type=template&id=38c316ba&");
/* harmony import */ var _InputSelectArray_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputSelectArray.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/form/InputSelectArray.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InputSelectArray_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InputSelectArray_vue_vue_type_template_id_38c316ba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InputSelectArray_vue_vue_type_template_id_38c316ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/form/InputSelectArray.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/form/InputSelectArray.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/admin/components/form/InputSelectArray.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSelectArray_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InputSelectArray.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/form/InputSelectArray.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSelectArray_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/components/form/InputSelectArray.vue?vue&type=template&id=38c316ba&":
/*!************************************************************************************************!*\
  !*** ./resources/js/admin/components/form/InputSelectArray.vue?vue&type=template&id=38c316ba& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSelectArray_vue_vue_type_template_id_38c316ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InputSelectArray.vue?vue&type=template&id=38c316ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/form/InputSelectArray.vue?vue&type=template&id=38c316ba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSelectArray_vue_vue_type_template_id_38c316ba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSelectArray_vue_vue_type_template_id_38c316ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);