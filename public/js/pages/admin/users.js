(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{CfqW:function(t,e,s){"use strict";s.r(e);var a=s("0YuL"),r=s("dFkX"),o=s("QY1N"),i=s("ksP6"),l=s.n(i),n=s("Q0Qn"),c=s("FdRJ"),d={props:{routeGetAll:String,route:String},components:{DataTable:o.a,Button:r.a,BreadCrumb:n.a,Skeleton:a.a,vueDropzone:l.a,Destroy:c.a},data:function(){return{users:{},showBlock:!0,createBlock:!1,editBlock:!1,detailBlock:!1,dropzoneOptions:{url:"/",maxFiles:1,acceptedFiles:"image/png,image/jpeg,image/jpg,image/svg+xml",autoProcessQueue:!1,thumbnailWidth:150,addRemoveLinks:!0,dictRemoveFile:"Remover"},user:{rel_role:{},role_id:"",password:"",name:"",email:"",status:!1,available:!1},elementsPerPage:10,errors:{},requestLoading:!1,requestServer:!1,modalDestroy:!1}},methods:{restoreEl:function(){this.showBlock=!0,this.createBlock=this.editBlock=this.detailBlock=this.requestServer=this.modalDestroy=!1,this.errors={},this.user={rel_role:{},role_id:"",password:"",name:"",email:""}},restorePage:function(){this.showBlock=!0,this.getUsers(1,this.elementsPerPage),this.createBlock=this.editBlock=this.detailBlock=this.requestServer=this.modalDestroy=!1,this.errors={},this.user={rel_role:{},role_id:"",password:"",name:"",email:""}},getUser:function(t){var e=this;this.requestLoading=!0,axios.get(this.route+"/json/get/"+t).then((function(t){e.user=t.data,e.requestLoading=!1})).catch((function(t){}))},getUsers:function(t,e){var s=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=this.routeGetAll+"?page="+t+"&itemsPerPage="+e;a&&(r=r+"&q="+a),axios.get(r).then((function(t){s.users=t.data})).catch((function(t){}))},showUser:function(t){this.getUser(t),this.showBlock=!1,this.detailBlock=!0},editUser:function(t){this.getUser(t),this.showBlock=!1,this.editBlock=!0},deleteUser:function(t){this.modalDestroy=!0,this.getUser(t)},destroyConfirm:function(){var t=this;this.requestServer=!0,axios.delete("usuarios/"+this.user.id).then((function(e){t.restorePage(),Swal.fire({title:e.data.title,text:e.data.message,type:"success",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}})})).catch((function(e){t.restoreEl()}))},updateUser:function(){var t=this;this.requestServer=!0;var e=new FormData;e.append("name",this.user.name),e.append("username",this.user.username),e.append("email",this.user.email),this.user.password&&e.append("password",this.user.password),this.user.available&&e.append("available",1),e.append("id",this.user.id),this.$refs.ref_image.dropzone.files[0]&&e.append("avatar",this.$refs.ref_image.dropzone.files[0]),e.append("_method","put"),axios.post("usuarios/"+this.user.id,e).then((function(e){t.requestServer=!1,t.restorePage(),Swal.fire({title:e.data.title,text:e.data.message,type:"success",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}})})).catch((function(e){if(422===e.response.status)return t.requestServer=!1,void(t.errors=e.response.data.errors||{});Swal.fire({title:e.response.data.title,text:e.response.data.message,type:"error",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}}),t.restorePage()}))},createUser:function(){var t=this;this.requestServer=!0;var e=new FormData;e.append("name",this.user.name),e.append("email",this.user.email),e.append("password",this.user.password),this.$refs.ref_image.dropzone.files[0]&&e.append("avatar",this.$refs.ref_image.dropzone.files[0]),axios.post("usuarios",e).then((function(e){t.requestServer=!1,t.restorePage(),Swal.fire({title:e.data.title,text:e.data.message,type:"success",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}})})).catch((function(e){t.requestServer=!1,422!==e.response.status?(Swal.fire({title:e.response.data.title,text:e.response.data.message,type:"error",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}}),t.restorePage()):t.errors=e.response.data.errors||{}}))}},created:function(){this.getUsers(1,this.elementsPerPage)}},u=s("KHd+"),m=Object(u.a)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"header pb-6"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"header-body"},[s("div",{staticClass:"row align-items-center pt-0 pt-md-2 pb-4"},[s("div",{staticClass:"col-12 col-lg-7"},[s("BreadCrumb",{attrs:{title:t.createBlock?"Crear Usuario":t.detailBlock?"Ver Usuario":t.editBlock?"Actualizar Usuario":"Usuarios",parent:"Configuración",active:"Usuarios"}})],1),t._v(" "),s("div",{staticClass:"col-12 col-lg text-right"},[t.showBlock?s("a",{staticClass:"btn btn-icon btn-inverse-primary",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),function(){t.showBlock=!1,t.createBlock=!0}.apply(null,arguments)}}},[s("span",{staticClass:"btn-inner--icon"},[s("jam-user-circle",{staticClass:"current-color"})],1),t._v(" "),s("span",{staticClass:"btn-inner--text"},[t._v("Nuevo Usuario")])]):t._e(),t._v(" "),t.detailBlock?s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.restoreEl.apply(null,arguments)}}},[s("jam-arrow-left",{staticClass:"mr-2 current-color"}),t._v("Regresar\n            ")],1):t._e()])])])])]),t._v(" "),s("div",{staticClass:"container-fluid mt--6"},[s("DataTable",{directives:[{name:"show",rawName:"v-show",value:t.showBlock,expression:"showBlock"}],attrs:{object:t.users,placeholder:"Nombre, Usuario","button-update":!0,"button-read":!0,"button-delete":!0,"button-disable":!1,"entries-prop":t.elementsPerPage},on:{get:t.getUsers,read:t.showUser,delete:t.deleteUser,update:t.editUser,"update:entriesProp":function(e){t.elementsPerPage=e},"update:entries-prop":function(e){t.elementsPerPage=e}}}),t._v(" "),t.editBlock&&t.requestLoading||t.detailBlock&&t.requestLoading?s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 text-center mb-4"},[s("Skeleton",{attrs:{circle:"",height:"120px",width:"120px"}})],1),t._v(" "),s("div",{staticClass:"col-6 mb-4"},[s("Skeleton")],1),t._v(" "),s("div",{staticClass:"col-6 mb-4"},[s("Skeleton")],1),t._v(" "),s("div",{staticClass:"col-6 mb-4"},[s("Skeleton")],1),t._v(" "),s("div",{staticClass:"col-6"},[s("Skeleton")],1)])])]):t._e(),t._v(" "),t.editBlock&&!t.requestLoading?s("div",{staticClass:"card mb-4"},[s("div",{staticClass:"card-body"},[s("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.updateUser.apply(null,arguments)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group text-center"},[s("label",{staticClass:"font-weight-bold",attrs:{for:"id_imagen"}},[t._v("Avatar")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg"}),t._v(" "),t.user.avatar?s("div",{staticClass:"col-12 col-lg-3 mb-3 mb-lg-0"},[s("img",{staticClass:"rounded-circle object-fit--cover d-block mx-auto mb-3",attrs:{alt:"Colaborador",height:"120",width:"120",src:"/files/img/users/"+t.user.avatar}})]):t._e(),t._v(" "),s("div",{staticClass:"col-12 col-lg-3"},[s("vue-dropzone",{ref:"ref_image",staticClass:"text-center",attrs:{id:"id_imagen",options:t.dropzoneOptions,duplicateCheck:!0,useCustomSlot:!0},on:{"vdropzone-file-added":function(e){return t.$validateImageDropzone(e,t.$refs.ref_image.dropzone,1,1e5,"100kb")}}},[s("div",{staticClass:"dropzone-custom-content"},[s("h3",{staticClass:"dropzone-custom-title text-primary"},[t._v("Suelte el archivo aquí o haga click para cargarlo.")])])])],1),t._v(" "),s("div",{staticClass:"col-lg"})])])]),t._v(" "),s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold",attrs:{for:"name"}},[t._v("Nombre:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"Nombre"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}}),t._v(" "),t.errors&&t.errors.name?s("label",{staticClass:"mt-2 mb-0 text-danger",attrs:{for:"name"}},[t._v(t._s(t.errors.name[0]))]):t._e()])]),t._v(" "),s("div",{staticClass:"col-12 col-md-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold",attrs:{for:"email"}},[t._v("Email:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"text",id:"email",placeholder:"Email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),t._v(" "),t.errors&&t.errors.email?s("label",{staticClass:"mt-2 mb-0 text-danger",attrs:{for:"email"}},[t._v(t._s(t.errors.email[0]))]):t._e()])]),t._v(" "),s("div",{staticClass:"col-12 col-md-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold",attrs:{for:"password"}},[t._v("Contraseña:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Contraseña"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),t._v(" "),s("small",{attrs:{id:"password"}},[t._v("La contraseña debe tener mínimo 8 caracteres.")]),t._v(" "),t.errors&&t.errors.password?s("label",{staticClass:"mt-2 mb-0 text-danger",attrs:{for:"password"}},[t._v(t._s(t.errors.password[0]))]):t._e()])]),t._v(" "),s("div",{staticClass:"col-12 text-right"},[s("Button",{attrs:{text:"Actualizar",classes:["btn-inverse-primary","mr-2"],"request-server":t.requestServer,"º":""}}),t._v(" "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.restorePage.apply(null,arguments)}}},[t._v("Cancelar")])],1)])])])]):t._e(),t._v(" "),t.createBlock?s("div",{staticClass:"card mb-4"},[s("div",{staticClass:"card-body"},[s("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.createUser.apply(null,arguments)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold",attrs:{for:"id_imagen"}},[t._v("Avatar:")]),t._v(" "),s("vue-dropzone",{ref:"ref_image",attrs:{id:"id_imagen",options:t.dropzoneOptions,duplicateCheck:!0,useCustomSlot:!0},on:{"vdropzone-file-added":function(e){return t.$validateImageDropzone(e,t.$refs.ref_image.dropzone,1,1e5,"100kb")}}},[s("div",{staticClass:"dropzone-custom-content"},[s("h3",{staticClass:"dropzone-custom-title text-primary"},[t._v("Suelte el archivo aquí o haga click para cargarlo.")])])])],1)]),t._v(" "),s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold",attrs:{for:"name"}},[t._v("Nombre:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"Nombre"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}}),t._v(" "),t.errors&&t.errors.name?s("label",{staticClass:"mt-2 mb-0 text-danger",attrs:{for:"name"}},[t._v(t._s(t.errors.name[0]))]):t._e()])]),t._v(" "),s("div",{staticClass:"col-12 col-md-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold",attrs:{for:"password"}},[t._v("Contraseña:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Contraseña"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),t._v(" "),s("small",{attrs:{id:"password"}},[t._v("La contraseña debe tener mínimo 8 caracteres.")]),t._v(" "),t.errors&&t.errors.password?s("label",{staticClass:"mt-2 mb-0 text-danger",attrs:{for:"password"}},[t._v(t._s(t.errors.password[0]))]):t._e()])]),t._v(" "),s("div",{staticClass:"col-12 col-md-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold",attrs:{for:"email"}},[t._v("Email:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"text",id:"email",placeholder:"Email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),t._v(" "),t.errors&&t.errors.email?s("label",{staticClass:"mt-2 mb-0 text-danger",attrs:{for:"email"}},[t._v(t._s(t.errors.email[0]))]):t._e()])]),t._v(" "),s("div",{staticClass:"col-12 text-right mt-2"},[s("Button",{attrs:{text:"Guardar",classes:["btn-inverse-primary","mr-2"],"request-server":t.requestServer}}),t._v(" "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.restorePage.apply(null,arguments)}}},[t._v("Cancelar")])],1)])])])]):t._e(),t._v(" "),t.detailBlock&&!t.requestLoading?s("div",{staticClass:"card mb-4"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group text-center"},[s("div",{staticClass:"rounded-circle mx-auto d-flex avatar avatar-lg text-center mb-2 bg-default",staticStyle:{height:"120px",width:"120px"}},[t.user.avatar?s("img",{staticClass:"shadow rounded-circle object-fit--cover",attrs:{src:"/files/img/users/"+t.user.avatar,alt:"Perfil"}}):s("span",{staticStyle:{"font-size":"54px"}},[t._v(t._s(t.user.avatar_initials))])])])]),t._v(" "),s("div",{staticClass:"col-12 col-md-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold",attrs:{for:"name"}},[t._v("Nombre:")]),t._v(" "),s("p",[t._v(t._s(this.user.name))])])]),t._v(" "),s("div",{staticClass:"col-12 col-md-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold",attrs:{for:"email"}},[t._v("Email:")]),t._v(" "),s("p",[t._v(t._s(this.user.email))])])]),t._v(" "),s("div",{staticClass:"col-12 col-md-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold",attrs:{for:"id_fecha_nacimiento"}},[t._v("Registrado el:")]),t._v(" "),this.user.created_at?s("p",[t._v(t._s(this.user.created_at_format))]):s("p",[t._v("No registrado")])])])])])]):t._e()],1),t._v(" "),s("destroy",{attrs:{element:"usuario",open:t.modalDestroy,"loading-get":t.requestLoading,"loading-submit":t.requestServer},on:{cancel:t.restoreEl,submit:t.destroyConfirm}})],1)}),[],!1,null,null,null);e.default=m.exports}}]);