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

        <div class="row">
            <div class="col-12">
              <DataTable
                :object="elements"
                placeholder="Name, Dirección"
                :button-update="false"
                :button-read="true"
                :button-delete="true"
                @get="getElements"
                @delete="deleteEl"
                :entries-prop.sync="elementsPerPage"
                :messageCantDelete="messageCantDelete"
              ></DataTable>
            </div>
        </div>

        <draggable
          class="row"
          v-if="elements"
          v-model="elements"
          @change="handleChange"
          :move="handleMove"
        >
          <div
            class="col-12 col-md-6 col-lg-4 mb-4"
            v-for="(el, i) in elements"
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
                  Descripción:
                  <br />
                  <div
                    v-html="el.description"
                    class="content-editor-value"
                  ></div>
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
                    <!--pre class="d-block">{{ typeof el.emails }}</pre>
                    <pre class="d-block">{{ typeof el.emails }}</pre-->
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
                    <!--pre class="d-block">{{ typeof el.phone_numbers }}</pre-->
                  </span>
                  <span class="font-weight-normal" v-else>No registrado</span>
                </h3>

                <h3 class="mb-1">
                  Whatsapp:
                  <br />
                  <span class="font-weight-normal" v-if="el.num_what">
                    <template v-for="(e, i) in el.num_what">
                      <a
                        target="_blank"
                        style="text-decoration: underline"
                        :href="'tel:' + e.numwhat"
                        class="d-block"
                        :key="i + 'pn'"
                        >{{ e.numwhat }}</a
                      >
                    </template>
                    <!--pre class="d-block">{{ typeof el.num_what }}</pre-->
                  </span>
                  <span class="font-weight-normal" v-else>No registrado</span>
                </h3>

                <h3 class="mb-1">
                  Facebook Link:
                  <br />
                  <span class="font-weight-normal">{{ el.link_face }}</span>
                </h3>

                <h3 class="mb-1">
                  Instagram Link:
                  <br />
                  <span class="font-weight-normal">{{ el.link_insta }}</span>
                </h3>

                <h3 class="mb-1">
                  Metodos de Pago:
                  <br />
                  <span v-if="el.payment_methods">
                    <div
                      class=""
                      v-for="(e, i) in el.payment_methods"
                      :key="e.id"
                    >
                      <img
                        :src="imagesUrl + '/' + e.img_method"
                        :alt="e.name"
                        class="img-fluid d-block mb-2"
                      />
                      <p>{{ e.method }}</p>
                      <p>{{ e.img_method }}</p>
                    </div>
                    <!--pre class="d-block">{{ typeof el.payment_methods }}</pre-->
                  </span>
                  <span v-else> No tiene metodos de pago registrados </span>
                </h3>

                <h3 class="mb-1">
                  Productos:
                  <br />
                  <span v-if="el.products">
                    <div class="" v-for="(e, i) in el.products" :key="e.id">
                      <img
                        :src="imagesUrl + '/productos/' + e.image"
                        :alt="e.name"
                        class="img-fluid d-block mb-2"
                      />
                      <p>{{ e.name }}</p>
                    </div>
                    <!--pre class="d-block">{{ typeof el.products }}</pre-->
                  </span>
                  <span v-else> No tiene productos registrados </span>
                </h3>

                <h3 class="mb-1">
                  Iframe:
                  <br />
                  <span class="font-weight-normal" v-if="!el.iframe"
                    >No registrado</span
                  >
                  <div v-else v-html="el.iframe" class="parent-iframe"></div>
                </h3>

                <h3 class="mb-1">
                  Galeria de imagenes:
                  <br />
                  <span v-if="el.img_slider_1">
                    <img
                      :src="imagesUrl + '/sliders/' + el.img_slider_1"
                      class="img-fluid d-block mb-2"
                    />
                  </span>
                  <span v-else> No tiene imagen registrada </span>
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
                <EditorSimple
                  size="md"
                  label="Descripción"
                  variable="information"
                  :errors="errors"
                  :valueEs.sync="element.description"
                  :valueEsParent="element.description"
                />
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
            </div>

            <div class="col-6">
              <InputSelectArray
                fieldName="num_what"
                :errorsProp.sync="errors"
                :headers="[
                  { variable: 'numwhat', label: 'Whatsapp (Opcional)' },
                ]"
                :array.sync="element.num_what"
                :array-prop="element.num_what"
              />
            </div>

            <div class="col-6">
              <div class="form-group">
                <label class="font-weight-bold" for>Facebook</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="element.link_face"
                  id="link_face"
                />
              </div>
            </div>

            <div class="col-6">
              <div class="form-group">
                <label class="font-weight-bold" for>Instagram</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="element.link_insta"
                  id="link_insta"
                />
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
              <div class="form-group">
                <label class="font-weight-bold" for>Metodos de Pago</label>
                <!-- INFORMACION DE PRODUCTOS -->
                <CheckBoxSelectArray
                  :allitems="payment_methods"
                  @arrayitems="elementpaymentmethod"
                />
                <!-- ///////////////////////////////////////// -->
              </div>
            </div>

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
              <div class="form-group">
                <label class="font-weight-bold" for>Productos</label>
                <!-- INFORMACION DE PRODUCTOS -->
                <CheckBoxSelectArray
                  :allitems="products"
                  @arrayitems="elementproducts"
                />
                <!-- ///////////////////////////////////////// -->
              </div>
            </div>

            <div class="col-12 galeria">
              <template>
                <div class="col-12 col-md-12 col-lg-12">
                  <div class="form-group">
                    <label class="font-weight-bold" for="image">Imagen:</label>
                    <small class="d-block mb-0 lh-1"
                      >Resolución recomendada: 430x250px</small
                    >
                    <small class="d-block mb-0 lh-1">Formato: JPG</small>
                    <small class="d-block mb-2 lh-1"
                      >Tamaño recomendado: No mayor a 600KB</small
                    >
                    <div class="row">
                      <div class="col text-center" v-if="element.img_slider_1">
                        <img
                          :src="imagesUrl + '/' + element.img_slider_1"
                          alt="imagen distribuidor"
                          class="mx-auto img-fluid"
                        />
                      </div>
                      <div class="col">
                        <vue-dropzone
                          ref="ref_image"
                          class="text-center"
                          @vdropzone-file-added="
                            $validateImageDropzone(
                              $event,
                              $refs.ref_image.dropzone,
                              1,
                              600000,
                              '600kb'
                            )
                          "
                          id="image"
                          :options="dropzoneOptions"
                          :duplicateCheck="true"
                          :useCustomSlot="true"
                        >
                          <div class="dropzone-custom-content">
                            <h5 class="dropzone-custom-title text-primary">
                              Suelte los archivos aquí o haga click para
                              cargarlos.
                            </h5>
                          </div>
                        </vue-dropzone>
                      </div>
                    </div>

                    <label
                      v-if="errors && errors.image"
                      class="text-danger text-sm d-block mt-2"
                      for="image"
                      >{{ errors.image[0] }}</label
                    >
                  </div>
                </div>
              </template>


              <template>
                <div class="col-12 col-md-12 col-lg-12">
                  <div class="form-group">
                    <div class="row">
                      <div class="col text-center" v-if="element.img_slider_2">
                        <img
                          :src="imagesUrl + '/' + element.img_slider_2"
                          alt="imagen distribuidor 2"
                          class="mx-auto img-fluid"
                        />
                      </div>
                      <div class="col">
                        <vue-dropzone
                          ref="ref_image_2"
                          class="text-center"
                          @vdropzone-file-added="
                            $validateImageDropzone(
                              $event,
                              $refs.ref_image_2.dropzone,
                              1,
                              600000,
                              '600kb'
                            )
                          "
                          id="image_2"
                          :options="dropzoneOptions"
                          :duplicateCheck="true"
                          :useCustomSlot="true"
                        >
                          <div class="dropzone-custom-content">
                            <h5 class="dropzone-custom-title text-primary">
                              Suelte los archivos aquí o haga click para
                              cargarlos.
                            </h5>
                          </div>
                        </vue-dropzone>
                      </div>
                    </div>

                    <label
                      v-if="errors && errors.image"
                      class="text-danger text-sm d-block mt-2"
                      for="image"
                      >{{ errors.image[0] }}</label
                    >
                  </div>
                </div>
              </template>


              <template>
                <div class="col-12 col-md-12 col-lg-12">
                  <div class="form-group">
                    <div class="row">
                      <div class="col text-center" v-if="element.img_slider_3">
                        <img
                          :src="imagesUrl + '/' + element.img_slider_3"
                          alt="imagen distribuidor 3"
                          class="mx-auto img-fluid"
                        />
                      </div>
                      <div class="col">
                        <vue-dropzone
                          ref="ref_image_3"
                          class="text-center"
                          @vdropzone-file-added="
                            $validateImageDropzone(
                              $event,
                              $refs.ref_image_3.dropzone,
                              1,
                              600000,
                              '600kb'
                            )
                          "
                          id="image_3"
                          :options="dropzoneOptions"
                          :duplicateCheck="true"
                          :useCustomSlot="true"
                        >
                          <div class="dropzone-custom-content">
                            <h5 class="dropzone-custom-title text-primary">
                              Suelte los archivos aquí o haga click para
                              cargarlos.
                            </h5>
                          </div>
                        </vue-dropzone>
                      </div>
                    </div>

                    <label
                      v-if="errors && errors.image"
                      class="text-danger text-sm d-block mt-2"
                      for="image"
                      >{{ errors.image[0] }}</label
                    >
                  </div>
                </div>
              </template>


              <template>
                <div class="col-12 col-md-12 col-lg-12">
                  <div class="form-group">
                    <div class="row">
                      <div class="col text-center" v-if="element.img_slider_4">
                        <img
                          :src="imagesUrl + '/' + element.img_slider_4"
                          alt="imagen distribuidor 4"
                          class="mx-auto img-fluid"
                        />
                      </div>
                      <div class="col">
                        <vue-dropzone
                          ref="ref_image_4"
                          class="text-center"
                          @vdropzone-file-added="
                            $validateImageDropzone(
                              $event,
                              $refs.ref_image_4.dropzone,
                              1,
                              600000,
                              '600kb'
                            )
                          "
                          id="image_4"
                          :options="dropzoneOptions"
                          :duplicateCheck="true"
                          :useCustomSlot="true"
                        >
                          <div class="dropzone-custom-content">
                            <h5 class="dropzone-custom-title text-primary">
                              Suelte los archivos aquí o haga click para
                              cargarlos.
                            </h5>
                          </div>
                        </vue-dropzone>
                      </div>
                    </div>

                    <label
                      v-if="errors && errors.image"
                      class="text-danger text-sm d-block mt-2"
                      for="image"
                      >{{ errors.image[0] }}</label
                    >
                  </div>
                </div>
              </template>

              <template>
                <div class="col-12 col-md-12 col-lg-12">
                  <div class="form-group">
                    <div class="row">
                      <div class="col text-center" v-if="element.img_slider_5">
                        <img
                          :src="imagesUrl + '/' + element.img_slider_5"
                          alt="imagen distribuidor 4"
                          class="mx-auto img-fluid"
                        />
                      </div>
                      <div class="col">
                        <vue-dropzone
                          ref="ref_image_5"
                          class="text-center"
                          @vdropzone-file-added="
                            $validateImageDropzone(
                              $event,
                              $refs.ref_image_5.dropzone,
                              1,
                              600000,
                              '600kb'
                            )
                          "
                          id="image_5"
                          :options="dropzoneOptions"
                          :duplicateCheck="true"
                          :useCustomSlot="true"
                        >
                          <div class="dropzone-custom-content">
                            <h5 class="dropzone-custom-title text-primary">
                              Suelte los archivos aquí o haga click para
                              cargarlos.
                            </h5>
                          </div>
                        </vue-dropzone>
                      </div>
                    </div>

                    <label
                      v-if="errors && errors.image"
                      class="text-danger text-sm d-block mt-2"
                      for="image"
                      >{{ errors.image[0] }}</label
                    >
                  </div>
                </div>
              </template>
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
import DataTable from "../components/DataTable";

import EditorSimple from "../components/form/EditorSimple";
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
    DataTable,

    EditorSimple,
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

    //payment method
    routePaymentMethodGetAll: String,
    selpaymentmethod: {
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
        thumbnailWidth: 600,
        addRemoveLinks: true,
        dictRemoveFile: "Remover",
      },

      products: [],
      //sproducts: [],

      payment_methods: [],
      
      elementsPerPage: 20,
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
      const fd = new FormData();
      if (this.title == "Nuevo") {
        url = this.route;
        method = "post";
      } else {
        url = this.route + "/" + this.element.id;
        method = "post";
        fd.append("_method", "put");
      }

      if (this.element.name) {
        fd.append("name", this.element.name);
      }

      if (this.element.department) {
        fd.append("department", this.element.department);
      }

      if (this.element.description) {
        fd.append("description", this.element.description);
      }

      if (this.element.direction) {
        fd.append("direction", this.element.direction);
      }

      if (this.element.district) {
        fd.append("district", this.element.district);
      }

      if (this.element.emails) {
        fd.append("emails", JSON.stringify(this.element.emails));
      }

      /*if (this.element.emails) {
        fd.append("emails", this.element.emails);
      }*/

      if (this.element.iframe) {
        fd.append("iframe", this.element.iframe);
      }

      if (this.element.image) {
        fd.append("image", this.element.image);
      }

      if (this.element.link_face) {
        fd.append("link_face", this.element.link_face);
      }

      if (this.element.link_insta) {
        fd.append("link_insta", this.element.link_insta);
      }

      if (this.element.num_what) {
        fd.append("num_what", JSON.stringify(this.element.num_what));
      }

      /*if (this.element.num_what) {
        fd.append("num_what", this.element.num_what);
      }*/

      if (this.element.payment_methods) {
        fd.append(
          "payment_methods",
          JSON.stringify(this.element.payment_methods)
        );
      }

      /*if (this.element.payment_methods) {
        fd.append("payment_methods", this.element.payment_methods);
      }*/

      if (this.element.phone_numbers) {
        fd.append("phone_numbers", JSON.stringify(this.element.phone_numbers));
      }

      /*if (this.element.phone_numbers) {
        fd.append("phone_numbers", this.element.phone_numbers);
      }*/

      if (this.element.products) {
        fd.append("products", JSON.stringify(this.element.products));
      }

      /*if (this.element.products) {
        fd.append("products", this.element.products);
      }*/

      if (this.element.province) {
        fd.append("province", this.element.province);
      }

      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("img_slider_1", this.$refs.ref_image.dropzone.files[0]);
      }

      if (this.$refs.ref_image_2.dropzone.files[0]) {
        fd.append("img_slider_2", this.$refs.ref_image_2.dropzone.files[0]);
      }

      if (this.$refs.ref_image_3.dropzone.files[0]) {
        fd.append("img_slider_3", this.$refs.ref_image_3.dropzone.files[0]);
      }

      if (this.$refs.ref_image_4.dropzone.files[0]) {
        fd.append("img_slider_4", this.$refs.ref_image_4.dropzone.files[0]);
      }

      if (this.$refs.ref_image_5.dropzone.files[0]) {
        fd.append("img_slider_5", this.$refs.ref_image_5.dropzone.files[0]);
      }

      /*if (this.$refs.ref_image.dropzone.files[0]) {
        this.element.img_slider_1 = this.$refs.ref_image.dropzone.files[0];
      }*/

      for (var entrie of fd.entries()) {
        console.log(entrie[0] + ": " + entrie[1]);
      }

      //console.log(fd.entries());
      /*console.log(this.element.horario);
      console.log(this.element.zona);
      data: this.element,*/

      axios({
        method: method,
        url: url,
        data: fd,
      })
        .then((response) => {
          this.requestSubmit = false;
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
          this.restore();
        })
        .catch((error) => {
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
              confirmButton: "btn btn-inverse-primary",
            },
          });
          this.restoreEl();
        });
    },
    restore() {
      (this.element = {
        image: "",
        active: true,
      }),
        (this.modalCreateUpdate = this.modalDestroy = false);
      this.getEls();
      this.errors = {};
      this.getElements(1, this.elementsPerPage);
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
    
    getElements(page, itemsPerPage, q = null) {
      let url =
        this.routeGetAll + "?page=" + page + "&itemsPerPage=" + itemsPerPage;
      if (q) {
        url = url + "&q=" + q;
      }
      axios
        .get(url)
        .then((response) => {
          this.elements = response.data;
        })
        .catch((error) => {});
    },

    getEls() {
      this.loadingEls = true;
      axios
        .get(this.routeGetAll)
        .then((response) => {
          this.elements = response.data;
          //this.newemails
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

    /*showproducts(id) {
      axios
        .get(this.route + "/product/json/get/" + id)
        .then((response) => {
          this.getproducts = response.data;
        })
        .catch((error) => {});
    },*/

    elementproducts(val) {
      //this.sproducts = val;
      this.element.products = val;
    },
    //------------------------------

    // OBTENEMOS LOS METODOS DE PAGO
    getPaymentMethod() {
      axios
        .get(this.routePaymentMethodGetAll)
        .then((response) => {
          this.payment_methods = response.data;
        })
        .catch((err) => {});
    },

    elementpaymentmethod(val) {
      //this.sproducts = val;
      this.element.payment_methods = val;
    },

    //---------------------------
  },

  created() {
    this.getEls();
    this.getProducts();
    this.getPaymentMethod();
    this.getElements(1, this.elementsPerPage);
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
    /*filteredElements: function () {
      let filtered = this.elements;
      if (this.q) {
        filtered = this.elements.filter(
          (e) => e.name.toUpperCase().includes(this.q.toUpperCase()) == true
        );
      }
      return filtered;
    },*/
  },
};
</script>