(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/components/app-tracking"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/AppTracking.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/web/components/AppTracking.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AppTracking",
  props: {
    data: Object,
    storageUrl: String
  },
  data: function data() {
    return {// storageUrl: process.env.STORAGE_URL
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/AppTracking.vue?vue&type=template&id=79813b78&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/web/components/AppTracking.vue?vue&type=template&id=79813b78& ***!
  \******************************************************************************************************************************************************************************************************************/
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
      staticClass: "lazyload",
      attrs: { id: "section_rastreo", "data-bg": "/storage/web/img/cinta.png" }
    },
    [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-6 img_cinta" }, [
            _vm.data.image
              ? _c("img", {
                  staticClass: "lazyload",
                  attrs: {
                    src: _vm.storageUrl + "/img/app-tracking/" + _vm.data.image,
                    alt: "Dinet App"
                  }
                })
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-6 info_rastreo" }, [
            _c("div", { staticClass: "content_text_rastreo" }, [
              _vm.data["title_" + _vm.getLocale()]
                ? _c("div", {
                    domProps: {
                      innerHTML: _vm._s(_vm.data["title_" + _vm.getLocale()])
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.data["description_" + _vm.getLocale()]
                ? _c("div", {
                    domProps: {
                      innerHTML: _vm._s(
                        _vm.data["description_" + _vm.getLocale()]
                      )
                    }
                  })
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "img_apps" }, [
              _vm.data.link_ios
                ? _c(
                    "a",
                    { attrs: { href: _vm.data.link_ios, target: "_blank" } },
                    [
                      _c("img", {
                        staticClass: "lazyload",
                        attrs: {
                          src: "/storage/web/img/app_apple.png",
                          alt: ""
                        }
                      })
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.data.link_android
                ? _c(
                    "a",
                    {
                      attrs: { href: _vm.data.link_android, target: "_blank" }
                    },
                    [
                      _c("img", {
                        staticClass: "lazyload",
                        attrs: {
                          src: "/storage/web/img/app_google.png",
                          alt: ""
                        }
                      })
                    ]
                  )
                : _vm._e()
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

/***/ "./resources/js/web/components/AppTracking.vue":
/*!*****************************************************!*\
  !*** ./resources/js/web/components/AppTracking.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppTracking_vue_vue_type_template_id_79813b78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppTracking.vue?vue&type=template&id=79813b78& */ "./resources/js/web/components/AppTracking.vue?vue&type=template&id=79813b78&");
/* harmony import */ var _AppTracking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppTracking.vue?vue&type=script&lang=js& */ "./resources/js/web/components/AppTracking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppTracking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppTracking_vue_vue_type_template_id_79813b78___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppTracking_vue_vue_type_template_id_79813b78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/web/components/AppTracking.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/web/components/AppTracking.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/web/components/AppTracking.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTracking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppTracking.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/AppTracking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTracking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/web/components/AppTracking.vue?vue&type=template&id=79813b78&":
/*!************************************************************************************!*\
  !*** ./resources/js/web/components/AppTracking.vue?vue&type=template&id=79813b78& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTracking_vue_vue_type_template_id_79813b78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppTracking.vue?vue&type=template&id=79813b78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/AppTracking.vue?vue&type=template&id=79813b78&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTracking_vue_vue_type_template_id_79813b78___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTracking_vue_vue_type_template_id_79813b78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);