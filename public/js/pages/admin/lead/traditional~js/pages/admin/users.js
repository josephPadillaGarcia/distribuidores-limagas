(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{159:function(t,e,r){var s=r(166);"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};r(161)(s,i);s.locals&&(t.exports=s.locals)},162:function(t,e,r){"use strict";var s={props:{text:String,classes:Array,requestServer:Boolean},methods:{click:function(){this.$emit("click")}}},i=(r(165),r(158)),a=Object(i.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"btn",class:t.classes,attrs:{disabled:1==t.requestServer},on:{click:t.click}},[t.requestServer?r("span",[t._v("\n        Cargando \n        "),r("svg",{staticClass:"ml-1 loading-svg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 40 40"}},[r("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[r("g",{attrs:{transform:"translate(1 1)","stroke-width":"3"}},[r("circle",{attrs:{"stroke-opacity":"1",cx:"0",cy:"0",r:"0"}}),t._v(" "),r("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18",transform:"rotate(83.9974 18 18)"}},[r("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"}})],1)])])])]):r("span",[t._v(t._s(t.text))])])}),[],!1,null,"0099f3fd",null);e.a=a.exports},163:function(t,e,r){var s=r(171);"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};r(161)(s,i);s.locals&&(t.exports=s.locals)},165:function(t,e,r){"use strict";r(159)},166:function(t,e,r){(t.exports=r(160)(!1)).push([t.i,"\n.loading-svg[data-v-0099f3fd]{\r\n    fill: currentColor;\r\n    stroke: currentColor;\n}\r\n",""])},168:function(t,e,r){"use strict";var s={props:{showBreadCrumb:{default:!0,type:Boolean},title:String,parent:String,active:String}},i=(r(170),r(158)),a=Object(i.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.showBreadCrumb?r("nav",{staticClass:"d-lg-inline-block",attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb p-0 m-0 breadcrumb-links bg-transparent"},[t._m(0),t._v(" "),t.parent?r("li",{staticClass:"breadcrumb-item"},[r("a",[t._v(t._s(t.parent))])]):t._e(),t._v(" "),t.active?r("li",{staticClass:"breadcrumb-item text-primary",attrs:{"aria-current":"page"}},[t._v(t._s(t.active))]):t._e()])]):t._e(),t._v(" "),r("h1",{staticClass:"h1 font-weight-bold mb-0"},[t._v(t._s(t.title))])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"breadcrumb-item"},[e("a",{attrs:{href:"/dashboard"}},[e("i",{staticClass:"ri-line-chart-fill"})])])}],!1,null,"630e7ebf",null);e.a=a.exports},170:function(t,e,r){"use strict";r(163)},171:function(t,e,r){(t.exports=r(160)(!1)).push([t.i,'\n.breadcrumb-dark .breadcrumb-item + .breadcrumb-item[data-v-630e7ebf]::before {\r\n  color: #adb5bd;\n}\n.breadcrumb-item + .breadcrumb-item[data-v-630e7ebf]::before {\r\n  display: inline-block;\r\n  padding-right: 0.5rem;\r\n  content: "-";\r\n  color: #8898aa;\n}\n.bg-transparent[data-v-630e7ebf] {\r\n  background: transparent;\n}\r\n',""])},174:function(t,e,r){"use strict";var s=r(167),i=r(162),a={props:{open:Boolean,loadingGet:Boolean,element:String,loadingSubmit:Boolean},components:{Button:i.a,Skeleton:s.a},data:function(){return{requestSubmit:!1,requestGet:!1,inputDestroy:"",buttonDestroy:!0}},methods:{submit:function(){this.$emit("submit")},cancelCustom:function(){this.$emit("cancel")},restore:function(){this.requestSubmit=!1,this.requestGet=!1,this.inputDestroy="",this.buttonDestroy=!0}},watch:{open:function(t){0==t&&this.restore()},inputDestroy:function(t){t===t.toUpperCase()&&"ELIMINAR"===t?this.buttonDestroy=!1:this.buttonDestroy=!0}}},n=r(158),o=Object(n.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-modal",{attrs:{"no-close-on-esc":"","no-close-on-backdrop":"",centered:"","footer-class":"border-0 pt-0","body-class":"pt-0"},on:{close:t.cancelCustom},scopedSlots:t._u([{key:"modal-footer",fn:function(e){e.ok;return[r("Button",{directives:[{name:"show",rawName:"v-show",value:!t.loadingGet,expression:"!loadingGet"}],attrs:{classes:["btn-danger"],text:"Eliminar","request-server":t.loadingSubmit,disabled:t.buttonDestroy},on:{click:t.submit}}),t._v(" "),r("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.cancelCustom}},[t._v("Cancelar")])]}}]),model:{value:t.open,callback:function(e){t.open=e},expression:"open"}},[r("template",{slot:"modal-title"},[r("div",{staticClass:"text-primary h2"},[t._v("Eliminar "+t._s(t.element.charAt(0).toUpperCase()+t.element.slice(1)))])]),t._v(" "),r("template",{slot:"modal-header-close"},[r("button",{staticClass:"btn p-0 bg-transparent",attrs:{type:"button"},on:{click:t.cancelCustom}},[r("i",{staticClass:"ri-close-line ri-lg"})])]),t._v(" "),t.loadingGet?r("div",[r("Skeleton"),t._v(" "),r("div",{staticClass:"w-25 mb-1"},[r("Skeleton")],1),t._v(" "),r("div",{staticClass:"w-75"},[r("Skeleton")],1)],1):r("div",[r("p",[t._v("Esta apunto de eliminar un "+t._s(t.element)+", una vez que realice esta acción no se puede deshacer")]),t._v(" "),r("p",{staticClass:"mb-2"},[t._v("\n      Escribe\n      "),r("b",[t._v("ELIMINAR")]),t._v(" para confirmar\n    ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.inputDestroy,expression:"inputDestroy"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.inputDestroy},on:{input:function(e){e.target.composing||(t.inputDestroy=e.target.value)}}})])],2)}),[],!1,null,null,null);e.a=o.exports},178:function(t,e,r){"use strict";var s={props:{showSvg:{default:!0,type:Boolean},customText:{type:String},showButton:{default:!1,type:Boolean},routeButton:String,elementTextButton:String,classes:Array,showTitle:{default:!0,type:Boolean}}},i=r(158),a=Object(i.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 text-center",class:t.classes?t.classes:"mt-4"},[t.showSvg?r("svg",{staticClass:"mb-3",attrs:{xmlns:"http://www.w3.org/2000/svg",id:"b5d1da7b-a9c6-4711-8d73-fa7937ec989e","data-name":"Layer 1",width:"100%",height:"90",viewBox:"0 0 888 340"}},[r("title",[t._v("server_cluster")]),t._v(" "),r("rect",{attrs:{x:"60",y:"509.90391",width:"262",height:"195",transform:"translate(1051.40391 -87.19257) rotate(90)",fill:"#2f2e41"}}),t._v(" "),r("rect",{attrs:{x:"313",y:"0",width:"262",height:"104",fill:"#3f3d56"}}),t._v(" "),r("rect",{attrs:{x:"313",y:"116",width:"262",height:"104",fill:"#3f3d56"}}),t._v(" "),r("rect",{attrs:{x:"313",y:"232",width:"262",height:"104",fill:"#3f3d56"}}),t._v(" "),r("rect",{attrs:{x:"313",y:"58",width:"262",height:"16",fill:"#0d0a08"}}),t._v(" "),r("rect",{attrs:{x:"313",y:"174",width:"262",height:"16",fill:"#0d0a08"}}),t._v(" "),r("rect",{attrs:{x:"313",y:"294",width:"262",height:"16",fill:"#0d0a08"}}),t._v(" "),r("circle",{attrs:{cx:"524",cy:"20",r:"6",fill:"#0d0a08"}}),t._v(" "),r("circle",{attrs:{cx:"545",cy:"20",r:"6",fill:"#0d0a08"}}),t._v(" "),r("circle",{attrs:{cx:"566",cy:"20",r:"6",fill:"#0d0a08"}}),t._v(" "),r("circle",{attrs:{cx:"524",cy:"136",r:"6",fill:"#0d0a08"}}),t._v(" "),r("circle",{attrs:{cx:"545",cy:"136",r:"6",fill:"#0d0a08"}}),t._v(" "),r("circle",{attrs:{cx:"566",cy:"136",r:"6",fill:"#0d0a08"}}),t._v(" "),r("circle",{attrs:{cx:"524",cy:"254",r:"6",fill:"#0d0a08"}}),t._v(" "),r("circle",{attrs:{cx:"545",cy:"254",r:"6",fill:"#0d0a08"}}),t._v(" "),r("circle",{attrs:{cx:"566",cy:"254",r:"6",fill:"#0d0a08"}})]):t._e(),t._v(" "),t.showTitle?r("h3",{staticClass:"h2 font-weight-500 mb-0"},[t._v("No Data")]):t._e(),t._v(" "),r("p",{class:t.showButton?"mb-1":""},[t._v("\n      "+t._s(t.customText?t.customText:"No hay datos disponibles en estos momentos")+"\n    ")]),t._v(" "),t.showButton?r("a",{staticClass:"btn btn-inverse-info",attrs:{href:t.routeButton}},[t._v("Crea "+t._s(t.elementTextButton))]):t._e()])])}),[],!1,null,null,null);e.a=a.exports},282:function(t,e,r){"use strict";var s={props:{iconClasses:Array,iconoEstilos:Object,texto:String,styles:Object,iconWidth:{type:Number,required:!0},iconHeight:{type:Number,required:!0}}},i=r(158),a=Object(i.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"component-loader text-sm w-100",style:t.styles},[r("div",{staticClass:"d-flex align-items-center justify-content-center h-100"},[t.texto?r("span",[t._v(t._s(t.texto))]):t._e(),t._v(" "),r("svg",{class:t.iconClasses,style:t.iconoEstilos,attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.iconWidth,height:t.iconHeight,viewBox:"0 0 40 40",stroke:"#525f7f"}},[r("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[r("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[r("circle",{attrs:{"stroke-opacity":"1",cx:"0",cy:"0",r:"0"}}),t._v(" "),r("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18",transform:"rotate(83.9974 18 18)"}},[r("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"}})],1)])])])])])}),[],!1,null,null,null).exports,n=r(167),o=r(238),l=(r(237),r(178)),c={props:{qProp:{type:String,required:!1},entriesProp:{type:Number,required:!1},loadingProp:{type:Boolean,required:!1},searchProp:{type:String,required:!1},object:{type:Object,required:!0},placeholder:{type:String,required:!0},buttonRead:{type:Boolean,required:!0},buttonUpdate:{type:Boolean,required:!0},buttonDisable:{type:Boolean,required:!1,default:!1},buttonDelete:{type:Boolean,required:!0},messageCantDelete:String,orderDepartments:{type:Boolean,default:!1},slugColumn:{default:"id",type:String}},data:function(){return{entries:20,pageActive:1,search:"",loading:!0,order:{by:"Código SAP",type:"asc"}}},components:{Loader:a,Skeleton:n.a,simplebar:o.a,NoData:l.a},methods:{handleOrder:function(t){t==this.order.by?"asc"==this.order.type?this.order.type="desc":this.order.type="asc":(this.order.by=t,this.order.type),this.search?this.$emit("order",this.order,this.search):this.$emit("order",this.order),this.loading=!0},clickDisable:function(t){this.$emit("disable",t)},clickDelete:function(t){this.$emit("delete",t)},clickRead:function(t){this.$emit("read",t)},clickUpdate:function(t){this.$emit("update",t)},clickNextPage:function(){this.orderDepartments?this.search?this.$emit("get",this.currentPage+1,this.entries,this.search,this.order.by,this.order.type):this.$emit("get",this.currentPage+1,this.entries,null,this.order.by,this.order.type):this.search?this.$emit("get",this.currentPage+1,this.entries,this.search):this.$emit("get",this.currentPage+1,this.entries),this.loading=!0},clickPrevPage:function(){this.orderDepartments?this.search?this.$emit("get",this.currentPage-1,this.entries,this.search,this.order.by,this.order.type):this.$emit("get",this.currentPage-1,this.entries,null,this.order.by,this.order.type):this.search?this.$emit("get",this.currentPage-1,this.entries,this.search):this.$emit("get",this.currentPage-1,this.entries),this.loading=!0},clickPage:function(t){this.orderDepartments?this.search?this.$emit("get",t,this.entries,this.search,this.order.by,this.order.type):this.$emit("get",t,this.entries,null,this.order.by,this.order.type):this.search?this.$emit("get",t,this.entries,this.search):this.$emit("get",t,this.entries),this.loading=!0},changePagination:function(){this.orderDepartments?this.search?this.$emit("get",1,this.entries,this.search,this.order.by,this.order.type):this.$emit("get",1,this.entries,null,this.order.by,this.order.type):this.search?this.$emit("get",1,this.entries,this.search):this.$emit("get",1,this.entries),this.loading=!0}},watch:{elementsPerPage:function(t,e){t&&(this.entries=t)},search:function(t,e){this.orderDepartments?this.$emit("get",1,this.entries,t,this.order.by,this.order.type):this.$emit("get",1,this.entries,t),this.$emit("update:searchProp",String(t)),this.loading=!0},object:function(t,e){this.loading=!0,t&&(this.loading=!1)},loadingProp:function(t,e){this.loading=t},loading:function(t,e){this.$emit("update:loadingProp",Boolean(t))},entriesProp:function(t,e){this.entries=t},entries:function(t,e){this.$emit("update:entriesProp",Number(t))},searchProp:function(t,e){this.search=t},currentPage:function(t,e){t&&(this.pageActive=t)},qProp:function(t,e){this.q=t}},computed:{headers:function(){if(this.object.headers)return this.object.headers.filter((function(t,e){return e>0}))},elements:function(){if(this.object.data){var t=[],e=this.object.data;for(var r in e){var s=e[r];for(var i in t[r]=[],s)"id"!=i&&"slug"!=i&&"action"!=i&&"can_delete"!=i&&t[r].push(s[i])}return t}},to:function(){return this.object.to},from:function(){return this.object.from},total:function(){return this.object.total},lastPage:function(){return this.object.last_page},currentPage:function(){return this.object.current_page}}},u=Object(i.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 mb-4"},[t._t("filters"),t._v(" "),r("div",{staticClass:"row d-flex align-items-center"},[r("div",{staticClass:"col-12 col-md-6 mb-3 mb-md-0"},[r("label",{staticClass:"mb-0",attrs:{for:"show"}},[r("small",[t._v("Mostrar")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.entries,expression:"entries"}],staticClass:"mx-2 form-control bg-white form-control-sm w-auto d-inline-block",attrs:{id:"show"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.entries=e.target.multiple?r:r[0]},function(e){return t.changePagination()}]}},[r("option",{attrs:{value:"20"}},[t._v("20")]),t._v(" "),r("option",{attrs:{value:"50"}},[t._v("50")]),t._v(" "),r("option",{attrs:{value:"100"}},[t._v("100")])]),t._v(" "),r("small",[t._v("entradas")])])]),t._v(" "),r("div",{staticClass:"col-12 col-md-6"},[r("div",{staticClass:"input-group input-group-merge"},[t._m(0),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control bg-white",attrs:{type:"search",placeholder:"Buscar por "+t.placeholder,"aria-label":"search","aria-describedby":"search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])])])],2),t._v(" "),r("div",{staticClass:"col-12"},[r("div",{staticClass:"card"},[t.loading?r("div",[r("table",{staticClass:"table align-items-center"},[r("thead",{staticClass:"thead-light"},[r("tr",t._l(5,(function(t){return r("th",{key:t,staticClass:"border-0"},[r("Skeleton")],1)})),0)]),t._v(" "),r("tbody",t._l(5,(function(e){return r("tr",{key:e},t._l(5,(function(t){return r("td",{key:t},[r("Skeleton")],1)})),0)})),0)])]):t._e(),t._v(" "),t.loading?t._e():r("div",{staticClass:"table-responsive"},[r("simplebar",{attrs:{"data-simplebar-auto-hide":"false"}},[r("table",{staticClass:"table align-items-center"},[r("thead",{staticClass:"thead-light"},[r("tr",[r("th",{staticClass:"border-0",attrs:{width:"3%"}},[t._v("#")]),t._v(" "),t._l(t.headers,(function(e,s){return r("th",{key:s,staticClass:"border-0"},[t._v("\n                  "+t._s(e)+"\n                  ")])})),t._v(" "),t._t("header_action"),t._v(" "),r("th",{staticClass:"border-0"},[t._v("Acciones")])],2)]),t._v(" "),t.object.data&&t.object.data.length>0?r("tbody",t._l(t.object.data,(function(e,s){return r("tr",{key:e.id},[r("td",[t._v(t._s(t.object.from+s))]),t._v(" "),t._l(t.elements[s],(function(e,s){return r("td",{key:s,domProps:{innerHTML:t._s(e)}})})),t._v(" "),t._t("td_action_"+e.id),t._v(" "),r("td",{staticClass:"table-actions"},[1==t.buttonRead?r("a",{staticClass:"btn btn-sm btn-icon-only rounded-circle btn-inverse-primary",attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),t.clickRead(e[t.slugColumn])}}},[r("i",{staticClass:"current-color ri-eye-line text-lg"})]):t._e(),t._v(" "),1==t.buttonUpdate?r("a",{staticClass:"btn btn-sm btn-icon-only rounded-circle btn-inverse-primary",attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),t.clickUpdate(e[t.slugColumn])}}},[r("i",{staticClass:"current-color ri-pencil-line text-lg"})]):t._e(),t._v(" "),1==t.buttonDisable?r("a",{staticClass:"btn btn-sm btn-icon-only rounded-circle btn-inverse-primary",attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),t.clickDisable(e[t.slugColumn])}}},[r("i",{staticClass:"current-color ri--line text-lg"})]):t._e(),t._v(" "),1==t.buttonDelete?[void 0!==e.can_delete?[e.can_delete?r("a",{staticClass:"btn btn-sm btn-icon-only rounded-circle btn-inverse-danger",attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),t.clickDelete(e[t.slugColumn])}}},[r("i",{staticClass:"ri-delete-bin-line text-lg current-color"})]):r("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-sm btn-icon-only rounded-circle btn-secondary",attrs:{title:t.messageCantDelete}},[r("i",{staticClass:"text-lg ri-information-line current-color"})])]:[r("a",{staticClass:"btn btn-sm btn-icon-only rounded-circle btn-inverse-danger",attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),t.clickDelete(e[t.slugColumn])}}},[r("i",{staticClass:"ri-delete-bin-line text-lg current-color"})])]]:t._e()],2)],2)})),0):r("tbody",[r("tr",[r("td",{attrs:{colspan:t.object.headers&&t.object.headers.length+1}},[r("NoData",{attrs:{"show-title":!1}})],1)])])])])],1)]),t._v(" "),t.loading?t._e():r("div",{staticClass:"row mt-4"},[r("div",{staticClass:"col-6 pt-2"},[t.to&&t.from?r("small",{},[t._v("Mostrando "+t._s(t.from)+" de "+t._s(t.to)+" de "+t._s(t.total)+" entradas")]):r("small",[t.to?r("span",[t._v(t._s(t.total)+" entradas")]):t._e()])]),t._v(" "),r("div",{staticClass:"col-6"},[r("ul",{staticClass:"pagination justify-content-end mb-0"},[r("li",{staticClass:"page-item"},[t.currentPage>1?r("a",{staticClass:"page-link rounded-circle",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.clickPrevPage()}}},[r("i",{staticClass:"ri-arrow-left-line current-color  text-lg",staticStyle:{"line-height":"1"}})]):t._e()]),t._v(" "),t.elements&&t.elements.length?r("li",{staticClass:"page-item mx-2",class:[t.pageActive==t.currentPage?"active disabled":""]},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.pageActive,expression:"pageActive"}],staticClass:"form-control bg-white px-2 py-0",staticStyle:{height:"36px"},attrs:{id:""},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.pageActive=e.target.multiple?r:r[0]},function(e){return t.clickPage(t.pageActive)}]}},t._l(t.lastPage,(function(e){return r("option",{key:e,domProps:{value:e}},[t._v(t._s(e++))])})),0)]):t._e(),t._v(" "),r("li",{staticClass:"page-item"},[t.currentPage<t.lastPage?r("a",{staticClass:"page-link rounded-circle",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.clickNextPage()}}},[r("i",{staticClass:"ri-arrow-right-line current-color text-lg",staticStyle:{"line-height":"1"}})]):t._e()])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend bg-white"},[e("span",{staticClass:"input-group-text bg-white",attrs:{id:"search"}},[e("i",{staticClass:"current-color ri-search-line"})])])}],!1,null,null,null);e.a=u.exports}}]);