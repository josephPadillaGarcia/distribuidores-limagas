(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/web/privacy-policies"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/Banner.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/web/components/Banner.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Banner",
  props: {
    classes: String,
    title: String,
    banner: String,
    storageUrl: String
  },
  data: function data() {
    return {// storageUrl: process.env.STORAGE_URL
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/views/PrivacyPolicies.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/web/views/PrivacyPolicies.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/Banner */ "./resources/js/web/components/Banner.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "PrivacyPolicies",
  components: {
    Banner: _components_Banner__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    storageUrl: {
      type: String
    }
  },
  // nuxtI18n: {
  //   paths: {
  //     en: "/privacy-policies",
  //     es: "/politicas-privacidad",
  //   },
  // },
  // head() {
  //   return {
  //     htmlAttrs: {
  //       lang: this.getLocale() == 'en' ? this.getLocale()+'_US' : this.getLocale()+'_PE'
  //     },
  //     title: this.page.data.page["title_"+this.getLocale()] ? this.page.data.page["title_"+this.getLocale()] : "",
  //     meta: [
  //       {
  //         hid: "description",
  //         name: "description",
  //         content: this.page.data.page['seo_description_'+this.getLocale()]
  //           ? this.page.data.page['seo_description_'+this.getLocale()]
  //           : ""
  //       },
  //       {
  //         itemprop: "name",
  //         content: this.page.data.page['title_'+this.getLocale()] ? this.page.data.page['title_'+this.getLocale()] : ""
  //       },
  //       {
  //         itemprop: "description",
  //         content: this.page.data.page['seo_description_'+this.getLocale()]
  //           ? this.page.data.page['seo_description_'+this.getLocale()]
  //           : ""
  //       },
  //       {
  //         itemprop: "image",
  //         content: this.page.data.page['seo_image']
  //           ? process.env.STORAGE_URL +
  //             "/img/pages/" +
  //             this.page.data.page['seo_image']
  //           : ""
  //       },
  //       {
  //         name: "keywords",
  //         content: this.page.data.page['seo_keywords_'+this.getLocale()]
  //           ? this.page.data.page['seo_keywords_'+this.getLocale()]
  //           : ""
  //       },
  //       { name: "og:url", content: process.env.BASE_URL+this.$route.path  },
  //       { name: "og:type", content: "website" },
  //       {
  //         name: "og:title",
  //         content: this.page.data.page['title_'+this.getLocale()] ? this.page.data.page['title_'+this.getLocale()] : ""
  //       },
  //       {
  //         name: "og:description",
  //         content: this.page.data.page['seo_description_'+this.getLocale()]
  //           ? this.page.data.page['seo_description_'+this.getLocale()]
  //           : ""
  //       },
  //       {
  //         name: "og:image",
  //         content: this.page.data.page['seo_image']
  //           ? process.env.STORAGE_URL +
  //             "/img/pages/" +
  //             this.page.data.page['seo_image']
  //           : ""
  //       },
  //       { name: "twitter:card", content: "summary_large_image" },
  //       {
  //         name: "twitter:title",
  //         content: this.page.data.page['title_'+this.getLocale()] ? this.page.data.page['title_'+this.getLocale()] : ""
  //       },
  //       {
  //         name: "twitter:description",
  //         content: this.page.data.page['seo_description_'+this.getLocale()]
  //           ? this.page.data.page['seo_description_'+this.getLocale()]
  //           : ""
  //       },
  //       {
  //         name: "twitter:image",
  //         content: this.page.data.page['seo_image']
  //           ? process.env.STORAGE_URL +
  //             "/img/pages/" +
  //             this.page.data.page['seo_image']
  //           : ""
  //       }
  //     ]
  //   };
  // },
  data: function data() {
    return {
      page: {},
      loading: true
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get("/api/page/privacy-policies", {
                  // params: { locale: app.i18n.locale },
                  params: {
                    locale: "es"
                  }
                });

              case 2:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                _this.page = data;
                _this.loading = false;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  created: function created() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/Banner.vue?vue&type=template&id=4fcfd1dc&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/web/components/Banner.vue?vue&type=template&id=4fcfd1dc& ***!
  \*************************************************************************************************************************************************************************************************************/
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
      staticClass:
        "lazyload position-relative bottom_section section_bannerNosotros",
      class: _vm.classes,
      attrs: {
        "data-bg": _vm.banner
          ? _vm.storageUrl + "/img/content/" + _vm.banner
          : "",
        id: "seccion_banner_global"
      }
    },
    [
      _c("div", { staticClass: "mb-4 rounded " }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row justify-content-center" }, [
            _c("div", { staticClass: "col-md-5 px-0" }, [
              _c("div", { staticClass: "content_banner" }, [
                _c("h1", { staticClass: "titulo text-center titulo_banner" }, [
                  _vm._v(
                    "\n                            " +
                      _vm._s(_vm.title) +
                      "\n                        "
                  )
                ])
              ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/views/PrivacyPolicies.vue?vue&type=template&id=176d702e&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/web/views/PrivacyPolicies.vue?vue&type=template&id=176d702e& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return !_vm.loading
    ? _c(
        "main",
        { staticClass: "main_page" },
        [
          _c("Banner", {
            attrs: {
              storageUrl: _vm.storageUrl,
              banner: _vm.page.data.content[
                _vm.page.data.content.findIndex(function(x) {
                  return x.name === "Banner"
                })
              ].content_formatted.includes("image")
                ? _vm.page.data.content[
                    _vm.page.data.content.findIndex(function(x) {
                      return x.name === "Banner"
                    })
                  ].content.find(function(x) {
                    return x.field === "image"
                  }).value
                : "",
              title:
                _vm.page.data.content[
                  _vm.page.data.content.findIndex(function(x) {
                    return x.name === "Banner"
                  })
                ].content_formatted.includes("title") &&
                _vm.page.data.content[
                  _vm.page.data.content.findIndex(function(el) {
                    return el.name === "Banner"
                  })
                ].content.find(function(x) {
                  return x.field === "title"
                })["value_" + _vm.getLocale()]
                  ? _vm.page.data.content[
                      _vm.page.data.content.findIndex(function(el) {
                        return el.name === "Banner"
                      })
                    ].content.find(function(x) {
                      return x.field === "title"
                    })["value_" + _vm.getLocale()]
                  : ""
            }
          }),
          _vm._v(" "),
          _c(
            "section",
            {
              staticClass: "bottom_section",
              attrs: { id: "section-politica" }
            },
            [
              _c("div", { staticClass: "container" }, [
                _c("div", { staticClass: "row" }, [
                  _vm.page.data.content[
                    _vm.page.data.content.findIndex(function(x) {
                      return x.name === "Información"
                    })
                  ].content_formatted.includes("description") &&
                  _vm.page.data.content[
                    _vm.page.data.content.findIndex(function(el) {
                      return el.name === "Información"
                    })
                  ].content.find(function(x) {
                    return x.field === "description"
                  })["value_" + _vm.getLocale()]
                    ? _c("div", {
                        staticClass: "content-politica",
                        domProps: {
                          innerHTML: _vm._s(
                            _vm.page.data.content[
                              _vm.page.data.content.findIndex(function(el) {
                                return el.name === "Información"
                              })
                            ].content.find(function(x) {
                              return x.field === "description"
                            })["value_" + _vm.getLocale()]
                          )
                        }
                      })
                    : _vm._e()
                ])
              ])
            ]
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/web/components/Banner.vue":
/*!************************************************!*\
  !*** ./resources/js/web/components/Banner.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Banner_vue_vue_type_template_id_4fcfd1dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Banner.vue?vue&type=template&id=4fcfd1dc& */ "./resources/js/web/components/Banner.vue?vue&type=template&id=4fcfd1dc&");
/* harmony import */ var _Banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Banner.vue?vue&type=script&lang=js& */ "./resources/js/web/components/Banner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Banner_vue_vue_type_template_id_4fcfd1dc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Banner_vue_vue_type_template_id_4fcfd1dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/web/components/Banner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/web/components/Banner.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/web/components/Banner.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Banner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/Banner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/web/components/Banner.vue?vue&type=template&id=4fcfd1dc&":
/*!*******************************************************************************!*\
  !*** ./resources/js/web/components/Banner.vue?vue&type=template&id=4fcfd1dc& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_template_id_4fcfd1dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Banner.vue?vue&type=template&id=4fcfd1dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/Banner.vue?vue&type=template&id=4fcfd1dc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_template_id_4fcfd1dc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_template_id_4fcfd1dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/web/views/PrivacyPolicies.vue":
/*!****************************************************!*\
  !*** ./resources/js/web/views/PrivacyPolicies.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PrivacyPolicies_vue_vue_type_template_id_176d702e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrivacyPolicies.vue?vue&type=template&id=176d702e& */ "./resources/js/web/views/PrivacyPolicies.vue?vue&type=template&id=176d702e&");
/* harmony import */ var _PrivacyPolicies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrivacyPolicies.vue?vue&type=script&lang=js& */ "./resources/js/web/views/PrivacyPolicies.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PrivacyPolicies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PrivacyPolicies_vue_vue_type_template_id_176d702e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PrivacyPolicies_vue_vue_type_template_id_176d702e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/web/views/PrivacyPolicies.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/web/views/PrivacyPolicies.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/web/views/PrivacyPolicies.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrivacyPolicies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PrivacyPolicies.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/views/PrivacyPolicies.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrivacyPolicies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/web/views/PrivacyPolicies.vue?vue&type=template&id=176d702e&":
/*!***********************************************************************************!*\
  !*** ./resources/js/web/views/PrivacyPolicies.vue?vue&type=template&id=176d702e& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrivacyPolicies_vue_vue_type_template_id_176d702e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PrivacyPolicies.vue?vue&type=template&id=176d702e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/views/PrivacyPolicies.vue?vue&type=template&id=176d702e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrivacyPolicies_vue_vue_type_template_id_176d702e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrivacyPolicies_vue_vue_type_template_id_176d702e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);