(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/components/item-service"],{

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



/***/ })

}]);