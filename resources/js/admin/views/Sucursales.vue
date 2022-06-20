<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb
                title="Distribuidores"
                parent
                active="Distribuidores"
              ></BreadCrumb>
            </div>
            <div class="col-6 col-md-5 text-right">
              <a
                href="#"
                class="btn btn-icon btn-inverse-primary"
                @click.prevent="newEl"
              >
                <span class="btn-inner--icon">
                  <i class="ri-add-line current-color ri-lg" />
                </span>
                <span class="btn-inner--text">Nuevo Distribuidor</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <div class="row" v-if="loadingEls">
        <div class="col-12 col-md-6 col-lg-3 mb-4" v-for="i in 8" :key="i">
          <Skeleton height="150px" />
        </div>
      </div>
      <div v-else>
        <div class="row" v-if="elements.length">
          <div class="col-12 col-md-6 mb-4">
            <div class="input-group input-group-merge">
              <div class="input-group-prepend bg-white">
                <span id="search" class="input-group-text bg-white">
                  <i class="current-color ri-search-line"></i>
                </span>
              </div>
              <input
                v-model="q"
                type="search"
                placeholder="Buscar por Nombre de Distribuidor"
                aria-label="search"
                aria-describedby="search"
                class="form-control bg-white"
              />
            </div>
          </div>
        </div>
        <div class="row" v-if="elements.length">
          <div class="col-12">
            <i class="d-block mb-4" v-if="!q">{{ messageOrder }}</i>
          </div>
        </div>
        <draggable
          class="row"
          v-if="filteredElements.length"
          v-model="elements"
          @change="handleChange"
          :move="handleMove"
        >
          <div
            class="col-12 col-md-6 col-lg-4 mb-4"
            v-for="(el, i) in filteredElements"
            :key="el.id"
          >
            <div class="card">
              <div class="card-body">
                <h3 class="mb-1">
                  Distribuidor:
                  <br />
                  <span class="font-weight-normal">{{ el.name }}</span>
                </h3>
                <h3 class="mb-1">
                  Dirección:
                  <br />
                  <span class="font-weight-normal">
                    <pre
                      class="mb-0"
                      style="
                        font-family: inherit;
                        white-space: pre-wrap;
                        font-size: inherit;
                      "
                      >{{ el.direction ? el.direction : "No registrado" }}</pre
                    >
                  </span>
                </h3>
                <h3 class="mb-1">
                  Ubigeo:
                  <br />
                  <span class="font-weight-normal">
                    {{ el.ubigeo_rel.district }} -
                    {{ el.ubigeo_rel.province }} -
                    {{ el.ubigeo_rel.department }}
                  </span>
                </h3>
                <h3 class="mb-1">
                  Email:
                  <br />
                  <span class="font-weight-normal" v-if="el.emails">
                    <template v-for="(e, i) in el.emails">
                      <span class="d-block" :key="i + 'emi'">{{ e.name }}</span>
                    </template>
                  </span>
                  <span class="font-weight-normal" v-else>No registrado</span>
                </h3>
                <h3 class="mb-1">
                  Teléfono:
                  <br />
                  <span class="font-weight-normal" v-if="el.phone_numbers">
                    <template v-for="(e, i) in el.phone_numbers">
                      <a
                        target="_blank"
                        style="text-decoration: underline"
                        :href="'tel:' + e.number"
                        class="d-block"
                        :key="i + 'pn'"
                        >{{ e.number }}</a
                      >
                    </template>
                  </span>
                  <span class="font-weight-normal" v-else>No registrado</span>
                </h3>

                <h3 class="mb-1">
                  Productos:
                  <br />
                  <span v-if="el.products">
                    <template v-for="(e, i) in el.products">
                      <p :key="i + 'pn'">{{ showproducts(e.idprod) }}</p>
                    </template>
                  </span>
                  <span v-else> No tiene productos registrados </span>
                </h3>

                <!--template>
                  {{ getproducts }}
                  </template-->

                <!--h3 class="mb-1">
                  Horario: <br />
                  <span class="font-weight-normal">
                    <pre
                      class="mb-0"
                      style="
                        font-family: inherit;
                        white-space: pre-wrap;
                        font-size: inherit;
                      "
                      >{{ el.schedule ? el.schedule : "No registrado" }}</pre
                    >
                  </span>
                </h3-->
                <h3 class="mb-1">
                  Iframe:
                  <br />
                  <span class="font-weight-normal" v-if="!el.iframe"
                    >No registrado</span
                  >
                  <div v-else v-html="el.iframe" class="parent-iframe"></div>
                </h3>
                <div class="mt-4 text-center">
                  <button
                    @click="editEl(el.id)"
                    class="btn btn-inverse-primary btn-sm"
                  >
                    Editar
                  </button>
                  <button
                    @click="deleteEl(el.id)"
                    class="btn btn-inverse-danger btn-sm"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </draggable>
        <NoData v-else />
      </div>
    </div>

    <b-modal
      v-model="modalCreateUpdate"
      @close="restoreEl"
      no-close-on-esc
      no-close-on-backdrop
      centered
      size="lg"
      footer-class="border-0 pt-0"
      body-class="pt-0"
    >
      <template slot="modal-title">
        <div class="text-primary h2">{{ title }} Distribuidor</div>
      </template>
      <template slot="modal-header-close">
        <button type="button" class="btn p-0 bg-transparent" @click="restoreEl">
          <i class="ri-close-line ri-lg"></i>
        </button>
      </template>
      <div v-if="loadingGet">
        <SkeletonForm></SkeletonForm>
      </div>
      <div v-else>
        <form @submit.prevent="submit">
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <label class="font-weight-bold" for>Distribuidor</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="element.name"
                  id="name"
                />
                <label
                  v-if="errors && errors.name"
                  class="mt-2 text-danger text-sm"
                  for="name"
                  >{{ errors.name[0] }}</label
                >
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label class="font-weight-bold" for>Dirección</label>
                <textarea
                  cols="6"
                  class="form-control"
                  v-model="element.direction"
                />
                <label
                  v-if="errors && errors.direction"
                  class="mt-2 text-danger text-sm"
                  for="direction"
                  >{{ errors.direction[0] }}</label
                >
              </div>
            </div>
            <div class="col-12">
              <Ubigeo
                :errors="errors"
                :route-department="routeDepartmentsGet"
                :route-district="routeDistrictsGet"
                :route-province="routeProvincesGet"
                :codeDepartment.sync="element.department"
                :codeProvince.sync="element.province"
                :codeDistrict.sync="element.district"
                :codeUbigeoParent="element.code_ubigeo"
              />
            </div>
            <div class="col-6">
              <InputSelectArray
                fieldName="emails"
                :errorsProp.sync="errors"
                :headers="[{ variable: 'name', label: 'Email (Opcional)' }]"
                :array.sync="element.emails"
                :array-prop="element.emails"
              />
            </div>
            <div class="col-6">
              <InputSelectArray
                fieldName="phone_numbers"
                :errorsProp.sync="errors"
                :headers="[
                  { variable: 'number', label: 'Teléfonos (Opcional)' },
                ]"
                :array.sync="element.phone_numbers"
                :array-prop="element.phone_numbers"
              />
              <small class>
                Formatos recomendados:
                <br />Fijos: (054) 444444, Móviles: 9 dígitos
              </small>
              <pre>
                {{ element.phone_numbers }}
              </pre>
            </div>
            <!--div class="col-12">
              <div class="form-group">
                <label class="font-weight-bold" for="">Horario(Opcional)</label>
                <textarea
                  cols="6"
                  class="form-control"
                  v-model="element.schedule"
                />
                <label
                  v-if="errors && errors.schedule"
                  class="mt-2 text-danger text-sm"
                  for="schedule"
                  >{{ errors.schedule[0] }}</label
                >
              </div>
            </div-->
            <div class="col-12">
              <div class="form-group">
                <label class="font-weight-bold" for
                  >Iframe Mapa(Opcional)</label
                >
                <textarea
                  cols="6"
                  class="form-control"
                  v-model="element.iframe"
                />
                <small>Ingrese un iframe de Google Maps.</small>
                <label
                  v-if="errors && errors.iframe"
                  class="mt-2 text-danger text-sm"
                  for="iframe"
                  >{{ errors.iframe[0] }}</label
                >
              </div>
            </div>

            <div class="col-12">
              <!-- INFORMACION DE PRODUCTOS -->
              <!--div v-if="products" class="prod-list">
                <div v-for="(p, i) in products" :key="p.id" class="btn-prod">
                  <input
                    type="checkbox"
                    :value="p.id"
                    v-model="addIdProducts.idprod"
                  />
                  <label>{{ p.name }}</label>
                </div>
                <span>Checked names: {{ addIdProducts.idprod }}</span>
              </div>
              <div v-else>
                <p>No hay productos registrados</p>
              </div-->

              <CheckBoxSelectArray
                :allproducts="products"
                :selectproducts.sync="element.producto"
              />

              <pre>
{{ element.producto }}
              </pre>
              <!-- ///////////////////////////////////////// -->
            </div>
          </div>
        </form>
      </div>
      <template v-slot:modal-footer="{ ok }">
        <Button
          :classes="['btn-inverse-primary']"
          :text="title == 'Nuevo' ? 'Crear' : 'Actualizar'"
          @click="submit"
          :request-server="requestSubmit"
        ></Button>
        <button type="button" class="btn btn-secondary" @click="restoreEl">
          Cancelar
        </button>
      </template>
    </b-modal>
    <destroy
      element="sucursal"
      @cancel="restoreEl"
      :open="modalDestroy"
      @submit="destroyConfirm"
      :loading-get="loadingGet"
      :loading-submit="requestSubmit"
    ></destroy>
  </div>
</template>

<style scoped>
.prod-list {
  display: flex;
  gap: 12px;
}
.btn-prod a {
  display: grid;
  padding: 12px;
  background: #eeeeee;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
}
</style>

<script>
import BreadCrumb from "../components/BreadCrumb";
import draggable from "vuedraggable";
import vue2Dropzone from "vue2-dropzone";
import Button from "../components/Button";
import Input from "../components/form/Input";
import { Skeleton } from "vue-loading-skeleton";
import Editor from "../components/form/Editor";
import Destroy from "../components/modals/Destroy";
import SkeletonForm from "../components/skeleton/form";
import NoData from "../components/NoData";
import Ubigeo from "../components/form/Ubigeo";
import InputSelectArray from "../components/form/InputSelectArray";

import CheckBoxSelectArray from "../components/form/CheckBoxSelectArray";
export default {
  components: {
    BreadCrumb,
    messageCantDelete: String,
    Destroy,
    Button,
    Input,
    vueDropzone: vue2Dropzone,
    Skeleton,
    SkeletonForm,
    draggable,
    Input,
    Editor,
    NoData,
    Ubigeo,
    InputSelectArray,
    CheckBoxSelectArray,
  },
  props: {
    route: String,
    routeGetAll: String,
    routeOrder: String,
    imagesUrl: String,
    messageOrder: String,
    routeDepartmentsGet: String,
    routeDistrictsGet: String,
    routeProvincesGet: String,

    //productos
    routeProductsGetAll: String,
    routeProductsGet: String,
    selproducts: {
      type: Object,
    },
  },
  data() {
    return {
      errors: {},
      requestSubmit: false,
      modalCreateUpdate: false,
      modalDestroy: false,
      loadingGet: false,
      loadingEls: false,
      loadingSubmit: false,
      //showLoading: false,
      elements: {},
      title: "",
      element: {
        image: "",
        active: true,
      },
      q: "",
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover",
      },

      products: [],
      addProducts: [],
      getproducts: {},
    };
  },
  methods: {
    handleMove() {
      if (this.q) {
        return false;
      }
      return true;
    },
    handleChange() {
      if (this.q) {
        return false;
      }
      axios
        .put(this.routeOrder, this.elements)
        .then((response) => {
          this.restore();
          Swal.fire({
            title: response.data.title,
            text: response.data.message,
            type: "success",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
        })
        .catch((error) => {
          Swal.fire({
            title: error.response.data.title,
            text: error.response.data.message,
            type: "error",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
        });
    },
    destroyConfirm() {
      this.requestSubmit = true;
      axios
        .delete(this.route + "/" + this.element.id)
        .then((response) => {
          this.requestSubmit = false;
          this.restore();
          Swal.fire({
            title: response.data.title,
            text: response.data.message,
            type: "success",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-inverse-primary",
            },
          });
        })
        .catch((error) => {
          Swal.fire({
            title: error.response.data.title,
            text: error.response.data.message,
            type: "error",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-inverse-primary",
            },
          });
          this.restoreEl();
        });
    },
    newEl() {
      this.title = "Nuevo";
      this.modalCreateUpdate = true;
    },
    editEl(id) {
      this.title = "Actualizar";
      this.modalCreateUpdate = true;
      this.getEl(id);
    },
    submit() {
      this.requestSubmit = true;
      let url;
      let method;
      if (this.title == "Nuevo") {
        url = this.route;
        method = "post";
      } else {
        url = this.route + "/" + this.element.id;
        method = "put";
      }

      console.log(this.element.emails);

      /*axios({
        method: method,
        url: url,
        data: this.element
      })
        .then(response => {
          this.requestSubmit = false;
          Swal.fire({
            title: response.data.title,
            text: response.data.message,
            type: "success",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-inverse-primary"
            }
          });
          this.restore();
        })
        .catch(error => {
          this.requestSubmit = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            return;
          }
          Swal.fire({
            title: error.response.data.title,
            text: error.response.data.message,
            type: "error",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-inverse-primary"
            }
          });
          this.restoreEl();
        });*/
    },
    restore() {
      (this.element = {
        image: "",
        active: true,
      }),
        (this.modalCreateUpdate = this.modalDestroy = false);
      this.getEls();
      this.errors = {};
    },
    deleteEl(id) {
      this.modalDestroy = true;
      this.getEl(id);
    },
    restoreEl() {
      (this.element = {
        image: "",
        active: true,
      }),
        (this.modalCreateUpdate = this.modalDestroy = false);
      this.errors = {};
    },
    getEls() {
      this.loadingEls = true;
      axios
        .get(this.routeGetAll)
        .then((response) => {
          this.elements = response.data;
          this.loadingEls = false;
        })
        .catch((error) => {});
    },
    getEl(id) {
      this.loadingGet = true;
      axios
        .get(this.route + "/json/get/" + id)
        .then((response) => {
          this.element = response.data;
          this.loadingGet = false;
        })
        .catch((error) => {});
    },

    // Obteniendo todos los productos de gas
    getProducts() {
      axios
        .get(this.routeProductsGetAll)
        .then((response) => {
          this.products = response.data;
        })
        .catch((err) => {});
    },
    //------------------------------

    /*addproduct(){
      this.addproducts = this.products.map(item => item.id)
    },*/

    showproducts(id) {
      axios
        .get(this.route + "/product/json/get/" + id)
        .then((response) => {
          this.getproducts = response.data;
        })
        .catch((error) => {});
      //return "Hola producto: "+id;
    },
  },

  created() {
    this.getEls();
    this.getProducts();
    //this.showproducts(id);
  },
  /*watch: {
    // whenever question changes, this function will run
    q(newValue, oldValue) {
      if (newQuestion.indexOf('?') > -1) {
        this.getAnswer()
      }
    }
  },*/
  computed: {
    filteredElements: function () {
      let filtered = this.elements;
      if (this.q) {
        filtered = this.elements.filter(
          (e) => e.name.toUpperCase().includes(this.q.toUpperCase()) == true
        );
      }
      return filtered;
    },
  },
};
</script>