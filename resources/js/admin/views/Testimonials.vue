<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb
                title="Testimoniales"
                parent
                active="Testimoniales"
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
                <span class="btn-inner--text">Nuevo Testimonio</span>
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
          <div class="col-12">
            <i class="d-block mb-4">{{ messageOrder }}</i>
          </div>
        </div>
        <draggable
          class="row"
          v-if="elements.length"
          v-model="elements"
          @change="handleChange"
        >
          <div
            class="col-12 col-md-6 col-lg-3 mb-4"
            v-for="(el, i) in elements"
            :key="el.id"
          >
            <div class="card">
              <div class="card-body">
                <div class="text-center mb-2">
                  <img
                    :src="imagesUrl + '/testimonials/' + el.image"
                    :alt="el.name"
                    class="img-fluid d-block mb-2 mx-auto"
                  />
                </div>
                <h3 class="mb-1">
                  Título:
                  <span class="font-weight-normal">{{ el.title_es }}</span>
                </h3>
                <!--<h3 class="mb-1">
                  <span class="font-weight-normal">Título EN:</span>
                  {{ el.title_en }}
                </h3>-->
                <h3 class="mb-1">
                  <span class="">Descripción:</span>
                  <div v-html="el.description_es" class="content-editor-value"></div>
                </h3>
                <!--<h3 class="mb-1">
                  <span class="font-weight-normal">Descripción EN:</span>
                  <div v-html="el.description_en"></div>
                </h3>-->
                <h3 class="mb-1">
                  <span class="">Mostrar en la Web:</span>
                  <span class="font-weight-normal">{{ el.active ? 'Sí' : 'No' }}</span>
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
        <div class="text-primary h2">{{ title }} Testimonio</div>
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
          <div class="row mb-3">
          <div class="col-12 text-right">
            <b-form-checkbox
              size="lg"
              v-model="element.active"
              name="check-button"
              switch
            >
              Mostrar Testimonio en la Web
            </b-form-checkbox>
          </div>
        </div>
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <Input
                  label="Titulo"
                  variable="title"
                  :errors="errors"
                  :valueEn.sync="element.title_en"
                  :valueEs.sync="element.title_es"
                  :valueEnParent="element.title_en"
                  :valueEsParent="element.title_es"
                />
              </div>
            </div>
            <template>
              <div class="col-12 col-md-12 col-lg-12">
                <div class="form-group">
                  <label class="font-weight-bold" for="image">Imagen:</label>
                  <small class="d-block mb-0 lh-1"
                    >Resolución recomendada: 430x250px</small
                  >
                  <small class="d-block mb-0 lh-1">Formato: JPG</small>
                  <small class="d-block mb-2 lh-1"
                    >Tamaño recomendado: No mayor a 150KB</small
                  >
                  <div class="row">
                    <div class="col text-center" v-if="element.image">
                      <img
                        :src="imagesUrl + '/testimonials/' + element.image"
                        :alt="element.name"
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
                            160000,
                            '150kb'
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
            <div class="col-12">
              <div class="form-group">
                <Editor
                  size="md"
                  label="Descripción"
                  variable="description"
                  :errors="errors"
                  :valueEn.sync="element.description_en"
                  :valueEs.sync="element.description_es"
                  :valueEnParent="element.description_en"
                  :valueEsParent="element.description_es"
                />
              </div>
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
      element="testimonio"
      @cancel="restoreEl"
      :open="modalDestroy"
      @submit="destroyConfirm"
      :loading-get="loadingGet"
      :loading-submit="requestSubmit"
    ></destroy>
  </div>
</template>
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
  },
  props: {
    route: String,
    routeGetAll: String,
    routeOrder: String,
    imagesUrl: String,
    messageOrder: String,
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
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover",
      },
    };
  },
  methods: {
    handleChange() {
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
      if (this.element.title_es) {
        fd.append("title_es", this.element.title_es);
      }
      /*if (this.element.title_en) {
        fd.append("title_en", this.element.title_en);
      }*/

      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }

      if (this.element.description_es) {
        fd.append("description_es", this.element.description_es);
      }
      if (this.element.description_en) {
        fd.append("description_en", this.element.description_en);
      }
      if (this.element.active == true) {
        fd.append("active", 1);
      } else {
        fd.append("active", 0);
      }
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
  },
  created() {
    this.getEls();
  },
};
</script>