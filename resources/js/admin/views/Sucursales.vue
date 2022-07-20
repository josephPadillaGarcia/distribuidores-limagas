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
      <!--div class="row" v-if="loadingEls">
        <div class="col-12 col-md-6 col-lg-3 mb-4" v-for="i in 8" :key="i">
          <Skeleton height="150px" />
        </div>
      </div-->
      <div class="row" v-if="showBlock">
        <div class="col-12">
          <DataTable
            :object="itemstable"
            placeholder="Distribuidor"
            :button-update="true"
            :button-read="true"
            :button-delete="true"
            @get="getElements"
            @read="showDistribuidor"
            @delete="deleteEl"
            @update="editEl"
            :entries-prop.sync="elementsPerPage"
          ></DataTable>
        </div>
      </div>

      <!--pre>{{ this.itemstable }}</pre-->

      <div v-if="detailBlock">
        <div class="card">
          <!--pre>{{ this.element }}</pre-->
          <div class="card-body">
            <div v-if="element">
              <h3 class="mb-4">
                Distribuidor:
                <br />
                <span class="font-weight-normal">{{ element.name }}</span>
              </h3>
              <h3 class="mb-4">
                Descripción:
                <br />
                <div
                  v-html="element.description"
                  class="content-editor-value"
                ></div>
              </h3>
              <h3 class="mb-4">
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
                    >{{
                      element.direction ? element.direction : "No registrado"
                    }}</pre
                  >
                </span>
              </h3>
              <h3 class="mb-4">
                Ubigeo:
                <br />
                <span class="font-weight-normal">
                  {{ element.ubigeo_rel.district }} -
                  {{ element.ubigeo_rel.province }} -
                  {{ element.ubigeo_rel.department }}
                </span>
              </h3>
              <h3 class="mb-4">
                Email:
                <br />
                <span class="font-weight-normal" v-if="element.emails">
                  <template v-for="(e, i) in element.emails">
                    <span class="d-block" :key="i + 'emi'">{{ e.name }}</span>
                  </template>
                </span>
                <span class="font-weight-normal" v-else>No registrado</span>
              </h3>

              <h3 class="mb-4">
                Teléfono:
                <br />
                <span class="font-weight-normal" v-if="element.phone_numbers">
                  <template v-for="(e, i) in element.phone_numbers">
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

              <h3 class="mb-4">
                Whatsapp:
                <br />
                <span class="font-weight-normal" v-if="element.num_what">
                  <template v-for="(e, i) in element.num_what">
                    <a
                      target="_blank"
                      style="text-decoration: underline"
                      :href="'tel:' + e.numwhat"
                      class="d-block"
                      :key="i + 'pn'"
                      >{{ e.numwhat }}</a
                    >
                  </template>
                </span>
                <span class="font-weight-normal" v-else>No registrado</span>
              </h3>

              <h3 class="mb-4">
                Facebook Link:
                <br />
                <div v-if="element.link_face">
                  <span class="font-weight-normal">{{
                    element.link_face
                  }}</span>
                </div>
                <span class="font-weight-normal" v-else>No registrado</span>
              </h3>

              <h3 class="mb-4">
                Instagram Link:
                <br />
                <div v-if="element.link_insta">
                  <span class="font-weight-normal">{{
                    element.link_insta
                  }}</span>
                </div>
                <span class="font-weight-normal" v-else>No registrado</span>
              </h3>

              <div class="content-metodos mb-4">
                <h3>Metodos de Pago:</h3>
                <br />
                <div v-if="element.payment_methods">
                  <div class="row">
                    <div
                      class="col-6 col-md-2 col-lg-2"
                      v-for="(e, i) in element.payment_methods"
                      :key="e.id"
                    >
                      <img
                        :src="imagesUrl + '/' + e.img_method"
                        :alt="e.name"
                        class="img-fluid d-block mb-2"
                      />
                      <b>{{ e.method }}</b>
                    </div>
                  </div>
                </div>
                <span v-else> No tiene metodos de pago registrados </span>
              </div>

              <div class="content-productos mb-4">
                <h3>Productos:</h3>
                <div v-if="element.products">
                  <div class="row">
                    <div
                      class="col-12 col-md-3 col-lg-2"
                      v-for="(e, i) in element.products"
                      :key="e.id"
                    >
                      <img
                        :src="imagesUrl + '/productos/' + e.image"
                        :alt="e.name"
                        class="img-fluid img-producto d-block mb-2"
                      />
                      <b>{{ e.name }}</b>
                    </div>
                  </div>
                </div>
                <span v-else> No tiene productos registrados </span>
              </div>

              <h3 class="mb-4">
                Iframe:
                <br />
                <span class="font-weight-normal" v-if="!element.iframe"
                  >No registrado</span
                >
                <div v-else v-html="element.iframe" class="parent-iframe"></div>
              </h3>

              <div class="mb-4">
                <h3>Galeria de imagenes:</h3>
                <div class="row" >
                  <div class="col-12 col-md-3 col-lg-3">
                    <div v-if="element.img_slider_1">
                      <img
                        :src="imagesUrl + '/sliders/' + element.img_slider_1"
                        class="img-fluid d-block mb-2"
                      />
                    </div>
                  </div>

                  <div class="col-12 col-md-3 col-lg-3">
                    <div v-if="element.img_slider_2">
                      <img
                        :src="imagesUrl + '/sliders/' + element.img_slider_2"
                        class="img-fluid d-block mb-2"
                      />
                    </div>
                  </div>

                  <div class="col-12 col-md-3 col-lg-3">
                    <div v-if="element.img_slider_3">
                      <img
                        :src="imagesUrl + '/sliders/' + element.img_slider_3"
                        class="img-fluid d-block mb-2"
                      />
                    </div>
                  </div>

                  <div class="col-12 col-md-3 col-lg-3">
                    <div v-if="element.img_slider_4">
                      <img
                        :src="imagesUrl + '/sliders/' + element.img_slider_4"
                        class="img-fluid d-block mb-2"
                      />
                    </div>
                  </div>

                  <div class="col-12 col-md-3 col-lg-3">
                    <div v-if="element.img_slider_5">
                      <img
                        :src="imagesUrl + '/sliders/' + element.img_slider_5"
                        class="img-fluid d-block mb-2"
                      />
                    </div>
                  </div>
                </div>
                
                
              </div>

              <div class="mt-4 text-center">
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click.prevent="restore"
                >
                  Regresar
                </button>
              </div>
            </div>
          </div>
        </div>
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
        <form @submit.prevent="submit" enctype="multipart/form-data">
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
                <b class="font-weight-bold" for>Metodos de Pago</b>
                <!-- METODOS DE PAGO -->
                <CheckBoxSelectArray
                  :allitems="payment_methods"
                  :title="title"
                  head="pago"
                  @arrayitems="elementpaymentmethod"
                  :methodsget="element.payment_methods"
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
                  :title="title"
                  head="productos"
                  :methodsget="element.products"
                />
                <!-- ///////////////////////////////////////// -->
              </div>
            </div>

            <div class="col-12 galeria">
              <template>
                <div class="col-12 col-md-12 col-lg-12">
                  <div class="form-group">
                    <label class="font-weight-bold" for="image">Galeria de Imagenes:</label>
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
                          :src="imagesUrl + '/sliders/' + element.img_slider_1"
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
                      v-if="errors && errors.img_slider_1"
                      class="text-danger text-sm d-block mt-2"
                      for="image"
                      >{{ errors.img_slider_1[0] }}</label
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
                          :src="imagesUrl + '/sliders/' + element.img_slider_2"
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
                      v-if="errors && errors.img_slider_2"
                      class="text-danger text-sm d-block mt-2"
                      for="image"
                      >{{ errors.img_slider_2[0] }}</label
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
                          :src="imagesUrl + '/sliders/' + element.img_slider_3"
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
                      v-if="errors && errors.img_slider_3"
                      class="text-danger text-sm d-block mt-2"
                      for="image"
                      >{{ errors.img_slider_3[0] }}</label
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
                          :src="imagesUrl + '/sliders/' + element.img_slider_4"
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
                      v-if="errors && errors.img_slider_4"
                      class="text-danger text-sm d-block mt-2"
                      for="image"
                      >{{ errors.img_slider_4[0] }}</label
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
                          :src="imagesUrl + '/sliders/' + element.img_slider_5"
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
                      v-if="errors && errors.img_slider_5"
                      class="text-danger text-sm d-block mt-2"
                      for="image"
                      >{{ errors.img_slider_5[0] }}</label
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

    routeItemsGetAll: String,
  },
  data() {
    return {
      errors: {},
      requestSubmit: false,
      modalCreateUpdate: false,
      modalDestroy: false,
      loadingGet: false,
      //loadingEls: false,
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

      payment_methods: [],

      itemstable: {},
      elementsPerPage: 20,
      showBlock: true,
      detailBlock: false,

      ImgUrlProps: "",
    };
  },
  methods: {
    /*handleMove() {
      if (this.q) {
        return false;
      }
      return true;
    },*/
    /*handleChange() {
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
    },*/
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
      /*this.startBlock = false,
this.detailBlock = true*/
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
      //this.getEls();
      this.showBlock = true;
      this.detailBlock = false;
      this.errors = {};
      this.getElements(1, this.elementsPerPage);
    },
    showDistribuidor(id) {
      this.getEl(id);
      this.showBlock = false;
      this.detailBlock = true;
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
        this.routeItemsGetAll +
        "?page=" +
        page +
        "&itemsPerPage=" +
        itemsPerPage;
      if (q) {
        url = url + "&q=" + q;
      }
      axios
        .get(url)
        .then((response) => {
          this.itemstable = response.data;
        })
        .catch((error) => {});
    },

    /*getEls() {
      this.loadingEls = true;
      axios
        .get(this.routeGetAll)
        .then((response) => {
          this.elements = response.data;
          this.loadingEls = false;
        })
        .catch((error) => {});
    },*/
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
      this.element.payment_methods = val;
    },

    //---------------------------

    /*addPropsComponents(){
this.ImgUrlProps = this.Image
    }*/
  },

  created() {
    //this.getEls();
    this.getProducts();
    this.getPaymentMethod();
    this.getElements(1, this.elementsPerPage);
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