(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/components/form-quote"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/Form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/web/components/Form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var vue_recaptcha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-recaptcha */ "./node_modules/vue-recaptcha/dist/vue-recaptcha.es.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    quantity: Array,
    services: Array,
    service: Object,
    locale: String,
    showServices: {
      "default": false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      request: false,
      success: false,
      form: {
        name: "",
        quantity_packages: "",
        service_id: "",
        accepted: true,
        acceptedtc: true
      },
      errors: {},
      sitekey: process.env.MIX_SITE_KEY,
      messageCaptcha: "",
      captchaPass: false,
      errorCaptcha: ""
    };
  },
  methods: {
    t: function t(name) {
      return this.$t(name, this.locale);
    },
    submit: function submit() {
      var _this = this;

      if (!this.captchaPass) {
        this.errorCaptcha = "Debes completar el captcha.";
        return false;
      }

      this.request = true;
      this.form.isPage = this.showServices;

      if (!this.showServices) {
        this.form.service_id = this.service.id;
      }

      axios.post("/api/post/lead", this.form).then(function (response) {
        _this.request = false;
        _this.success = true;
      })["catch"](function (error) {
        _this.request = false;

        if (error.response.status === 422) {
          _this.errors = error.response.data.errors || {};
          return;
        }
      });
    },
    onVerify: function onVerify(response) {
      var _this2 = this;

      var data = {};
      data.g_recaptcha_response = response;
      console.log(data);
      axios.post("/api/post/captchaverify", data).then(function () {
        _this2.messageCaptcha = "";
        _this2.captchaPass = true;
      })["catch"](function (error) {
        _this2.messageCaptcha = "Por favor, completa el captcha.";

        _this2.$refs.recaptcha.reset();
      });
    }
  },
  watch: {
    success: function success(newValue, oldValue) {
      this.$emit("update:successProp", Boolean(newValue));
    }
  },
  components: {
    VueRecaptcha: vue_recaptcha__WEBPACK_IMPORTED_MODULE_0__["VueRecaptcha"]
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/FormQuote.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/web/components/FormQuote.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ "./resources/js/web/components/Form.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "FormQuote",
  components: {
    Form: _Form__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    quantity: {
      type: Array
    },
    services: {
      type: Array
    },
    service: {
      type: Object
    },
    showServices: {
      "default": false,
      type: Boolean
    },
    withDescription: {
      "default": true,
      type: Boolean
    },
    locale: {
      type: String
    }
  },
  data: function data() {
    return {
      success: false
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/Form.vue?vue&type=template&id=abef0d18&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/web/components/Form.vue?vue&type=template&id=abef0d18& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c("transition", { attrs: { name: "slide-fade" } }, [
    _vm.success
      ? _c("div", { key: "true", staticClass: "form__text-success-2" }, [
          _c("h3", [_c("b", [_vm._v("¡" + _vm._s(_vm.t("Excelente")) + "!")])]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n            " +
                _vm._s(
                  _vm.t(
                    "Hemos registrado tus datos con éxito. Pronto nos pondremos contacto contigo."
                  )
                ) +
                ".\n        "
            )
          ]),
          _vm._v(" "),
          _c("b", [
            _vm._v(
              "¡" + _vm._s(_vm.t("Gracias por solicitar información")) + "!"
            )
          ])
        ])
      : _c(
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
              _c("div", { staticClass: "col-lg-6" }, [
                _c("div", { staticClass: "grupo-form" }, [
                  _c("label", { attrs: { for: "name" } }, [
                    _vm._v(_vm._s(_vm.t("Nombre y Apellidos")) + "*")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.name,
                        expression: "form.name"
                      }
                    ],
                    attrs: { type: "text", id: "name" },
                    domProps: { value: _vm.form.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors && _vm.errors.name
                    ? _c(
                        "span",
                        {
                          staticClass: "error error-red",
                          attrs: { for: "name" }
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.t(_vm.errors.name[0])) +
                              "\n                    "
                          )
                        ]
                      )
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6" }, [
                _c("div", { staticClass: "grupo-form" }, [
                  _c("label", { attrs: { for: "email" } }, [
                    _vm._v(_vm._s(_vm.t("Correo electrónico")) + "*")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.email,
                        expression: "form.email"
                      }
                    ],
                    attrs: { type: "text", id: "email" },
                    domProps: { value: _vm.form.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "email", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors && _vm.errors.email
                    ? _c(
                        "span",
                        {
                          staticClass: "error error-red",
                          attrs: { for: "email" }
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.t(_vm.errors.email[0])) +
                              "\n                    "
                          )
                        ]
                      )
                    : _vm._e()
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-6" }, [
                _c("div", { staticClass: "grupo-form" }, [
                  _c("label", { attrs: { for: "celular" } }, [
                    _vm._v(_vm._s(_vm.t("Celular")) + "*")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.mobile,
                        expression: "form.mobile"
                      }
                    ],
                    attrs: { type: "number", id: "celular" },
                    domProps: { value: _vm.form.mobile },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "mobile", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors && _vm.errors.mobile
                    ? _c(
                        "span",
                        {
                          staticClass: "error error-red",
                          attrs: { for: "mobile" }
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.t(_vm.errors.mobile[0])) +
                              "\n                    "
                          )
                        ]
                      )
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6" }, [
                _c("div", { staticClass: "grupo-form" }, [
                  _c("label", { attrs: { for: "business" } }, [
                    _vm._v(_vm._s(_vm.t("Empresa")) + "*")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.business,
                        expression: "form.business"
                      }
                    ],
                    attrs: { type: "text", id: "business" },
                    domProps: { value: _vm.form.business },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "business", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors && _vm.errors.business
                    ? _c(
                        "span",
                        {
                          staticClass: "error error-red",
                          attrs: { for: "business" }
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.t(_vm.errors.business[0])) +
                              "\n                    "
                          )
                        ]
                      )
                    : _vm._e()
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-12" }, [
                _c("div", { staticClass: "grupo-form" }, [
                  _c("label", { attrs: { for: "quantity_packages" } }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(
                          _vm.t("Cantidad estimada de paquetes mensuales")
                        ) +
                        ":\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.quantity_packages,
                          expression: "form.quantity_packages"
                        }
                      ],
                      staticClass: "form-select",
                      attrs: { id: "quantity_packages" },
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
                            _vm.form,
                            "quantity_packages",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "", selected: "" } }, [
                        _vm._v(_vm._s(_vm.t("Selecciona")))
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.quantity, function(el) {
                        return _c(
                          "option",
                          { key: el.id, domProps: { value: el.name_es } },
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(
                                  el["name_" + _vm.locale]
                                    ? el["name_" + _vm.locale]
                                    : el["name_es"]
                                ) +
                                "\n                        "
                            )
                          ]
                        )
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _vm.errors && _vm.errors.quantity_packages
                    ? _c(
                        "span",
                        {
                          staticClass: "error error-red",
                          attrs: { for: "quantity_packages" }
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.t(_vm.errors.quantity_packages[0])) +
                              "\n                    "
                          )
                        ]
                      )
                    : _vm._e()
                ])
              ])
            ]),
            _vm._v(" "),
            _vm.showServices
              ? _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-lg-12" }, [
                    _c("div", { staticClass: "grupo-form" }, [
                      _c("label", { attrs: { for: "service" } }, [
                        _vm._v(_vm._s(_vm.t("Tipo de Servicio")) + ":")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.service_id,
                              expression: "form.service_id"
                            }
                          ],
                          staticClass: "form-select",
                          attrs: { id: "service" },
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
                                _vm.form,
                                "service_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "", selected: "" } }, [
                            _vm._v(_vm._s(_vm.t("Selecciona")))
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.services, function(el) {
                            return _c(
                              "option",
                              { key: el.id, domProps: { value: el.id } },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(el["title_" + _vm.locale]) +
                                    "\n                        "
                                )
                              ]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.errors && _vm.errors.service_id
                        ? _c(
                            "span",
                            {
                              staticClass: "error error-red",
                              attrs: { for: "service_id" }
                            },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.t(_vm.errors.service_id[0])) +
                                  "\n                    "
                              )
                            ]
                          )
                        : _vm._e()
                    ])
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-12" }, [
                _c("div", { staticClass: "grupo-form" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.accepted,
                        expression: "form.accepted"
                      }
                    ],
                    staticClass: "form-check-input",
                    attrs: { type: "checkbox", id: "accepted", checked: "" },
                    domProps: {
                      checked: Array.isArray(_vm.form.accepted)
                        ? _vm._i(_vm.form.accepted, null) > -1
                        : _vm.form.accepted
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.form.accepted,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(_vm.form, "accepted", $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                _vm.form,
                                "accepted",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(_vm.form, "accepted", $$c)
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "form-check-label",
                      attrs: { for: "accepted" }
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.t("Acepto las")) +
                          "\n                        "
                      ),
                      _c(
                        "a",
                        {
                          attrs: {
                            href:
                              "/" +
                              _vm.localePath("politicas-privacidad", _vm.locale)
                          }
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.t("políticas de privacidad web")) +
                              "\n                        "
                          )
                        ]
                      )
                    ]
                  ),
                  _vm.errors && _vm.errors.accepted
                    ? _c(
                        "span",
                        {
                          staticClass: "error error-red",
                          attrs: { for: "accepted" }
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.t(_vm.errors.accepted[0])) +
                              "\n                    "
                          )
                        ]
                      )
                    : _vm._e()
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-12" }, [
                _c("div", { staticClass: "grupo-form" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.acceptedtc,
                        expression: "form.acceptedtc"
                      }
                    ],
                    staticClass: "form-check-input",
                    attrs: { type: "checkbox", id: "acceptedtc", checked: "" },
                    domProps: {
                      checked: Array.isArray(_vm.form.acceptedtc)
                        ? _vm._i(_vm.form.acceptedtc, null) > -1
                        : _vm.form.acceptedtc
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.form.acceptedtc,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(
                                _vm.form,
                                "acceptedtc",
                                $$a.concat([$$v])
                              )
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                _vm.form,
                                "acceptedtc",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(_vm.form, "acceptedtc", $$c)
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "form-check-label",
                      attrs: { for: "acceptedtc" }
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.t("Aceptar los")) +
                          "\n                        "
                      ),
                      _c("a", { attrs: { href: "#!" } }, [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.t("Términos y Condiciones")) +
                            "\n                        "
                        )
                      ])
                    ]
                  ),
                  _vm.errors && _vm.errors.acceptedtc
                    ? _c(
                        "span",
                        {
                          staticClass: "error error-red",
                          attrs: { for: "acceptedtc" }
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.t(_vm.errors.acceptedtc[0])) +
                              "\n                    "
                          )
                        ]
                      )
                    : _vm._e()
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("vue-recaptcha", {
                  ref: "recaptcha",
                  attrs: { sitekey: _vm.sitekey, loadRecaptchaScript: true },
                  on: { verify: _vm.onVerify }
                }),
                _vm._v(" "),
                _vm.errorCaptcha
                  ? _c("div", { staticClass: "message-error" }, [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.errorCaptcha) +
                          "\n            "
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.messageCaptcha
                  ? _c("div", { staticClass: "message-error" }, [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.messageCaptcha) +
                          "\n            "
                      )
                    ])
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-12" }, [
                _c(
                  "button",
                  {
                    class: _vm.request ? "btn--opacity" : "",
                    attrs: { type: "submit", disabled: _vm.request }
                  },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(
                          _vm.request
                            ? _vm.t("Cargando") + "..."
                            : _vm.t("Enviar")
                        ) +
                        "\n                "
                    )
                  ]
                )
              ])
            ])
          ]
        )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/FormQuote.vue?vue&type=template&id=5aa09598&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/web/components/FormQuote.vue?vue&type=template&id=5aa09598& ***!
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
  return _c(
    "div",
    { staticClass: "col-lg-6" },
    [
      !_vm.success
        ? _c("div", [
            _vm.title
              ? _c("h3", [
                  _vm._v("\n            " + _vm._s(_vm.title) + "\n        ")
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.description && _vm.withDescription
              ? _c("div", { domProps: { innerHTML: _vm._s(_vm.description) } })
              : _vm._e()
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("Form", {
        attrs: {
          "success-prop": _vm.success,
          quantity: _vm.quantity,
          showServices: _vm.showServices,
          services: _vm.services,
          service: _vm.service,
          locale: _vm.locale
        },
        on: {
          "update:successProp": function($event) {
            _vm.success = $event
          },
          "update:success-prop": function($event) {
            _vm.success = $event
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/web/components/Form.vue":
/*!**********************************************!*\
  !*** ./resources/js/web/components/Form.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_abef0d18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=abef0d18& */ "./resources/js/web/components/Form.vue?vue&type=template&id=abef0d18&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/web/components/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_abef0d18___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_abef0d18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/web/components/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/web/components/Form.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/web/components/Form.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/web/components/Form.vue?vue&type=template&id=abef0d18&":
/*!*****************************************************************************!*\
  !*** ./resources/js/web/components/Form.vue?vue&type=template&id=abef0d18& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_abef0d18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=abef0d18& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/Form.vue?vue&type=template&id=abef0d18&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_abef0d18___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_abef0d18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/web/components/FormQuote.vue":
/*!***************************************************!*\
  !*** ./resources/js/web/components/FormQuote.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormQuote_vue_vue_type_template_id_5aa09598___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormQuote.vue?vue&type=template&id=5aa09598& */ "./resources/js/web/components/FormQuote.vue?vue&type=template&id=5aa09598&");
/* harmony import */ var _FormQuote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormQuote.vue?vue&type=script&lang=js& */ "./resources/js/web/components/FormQuote.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormQuote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormQuote_vue_vue_type_template_id_5aa09598___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormQuote_vue_vue_type_template_id_5aa09598___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/web/components/FormQuote.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/web/components/FormQuote.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/web/components/FormQuote.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormQuote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormQuote.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/FormQuote.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormQuote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/web/components/FormQuote.vue?vue&type=template&id=5aa09598&":
/*!**********************************************************************************!*\
  !*** ./resources/js/web/components/FormQuote.vue?vue&type=template&id=5aa09598& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormQuote_vue_vue_type_template_id_5aa09598___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormQuote.vue?vue&type=template&id=5aa09598& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/web/components/FormQuote.vue?vue&type=template&id=5aa09598&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormQuote_vue_vue_type_template_id_5aa09598___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormQuote_vue_vue_type_template_id_5aa09598___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);