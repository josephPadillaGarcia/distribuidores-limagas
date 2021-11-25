(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/components/customers"],{

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



/***/ })

}]);