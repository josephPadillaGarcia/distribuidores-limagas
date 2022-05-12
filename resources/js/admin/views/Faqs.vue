<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb
                title="Faqs"
                parent
                active="Faqs"
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
                <span class="btn-inner--text">Nuevo Faq</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- //////////////////////////////////////// -->
    <div class="container-fluid mt--6">
      <div class="row" v-if="loadingEls">
        <div class="col-12 col-md-6 col-lg-3 mb-4" v-for="i in 8" :key="i">
          <Skeleton height="150px" />
        </div>
      </div>
      <div v-else>
        <div class="row" v-if="elements.length">
          <div class="col-12">
            <i class="d-block mb-4">Arrastre los elementos en el orden que desee mostrarlos</i>
          </div>
        </div>
        <draggable
          class="row"
          v-if="elements.length"
          v-model="elements"
          @change="handleChange"
        >
          <div
            class="col-12 col-md-6 col-lg-4 mb-4"
            v-for="(el, i) in elements"
            :key="el.id"
          >

            <!-- CARD -->
            <div class="card">
              <div class="card-body">

                <!--h3 class="mb-1">
                  Id:
                  <span class="font-weight-normal">{{ el.id }}</span>
                </h3-->

                <h3 class="mb-1">
                  Pregunta ES:
                  <span class="font-weight-normal">{{ el.question }}</span>
                </h3>
                <h3 class="mb-1">
                  Pregunta EN:
                  <span class="font-weight-normal">{{ el.question_en ? el.question_en : 'No registrado' }}</span>
                </h3>

                <!--<h3 class="mb-1">
                  <span class="">Descripción:</span>
                  <div v-html="el.description" class="content-editor-value"></div>
                </h3>-->

                <div v-show="el.seen" class="mb-4">
                          <h3 class="d-block"
                            >Respuesta ES:</h3
                          >
                          <div
                            class="content-body"
                            v-if="el.description"
                            v-html="el.description"
                          ></div>

                          <h3 class="d-block"
                            >Respuesta EN:</h3
                          >
                          <div
                            class="content-body"
                            v-if="el.description_en"
                            v-html="el.description_en"
                          ></div><div v-else>No registrado</div>
                        </div>
                        <div>
                          <button
                            class="btn btn-link text-primary"
                            style="padding: 0; text-decoration: underline"
                            @click="el.seen = !el.seen"
                          >
                            {{ el.seen ? "Ocultar" : "Mostrar" }} Respuesta
                          </button>
                        </div>

                <!--h3 class="mb-1">
                  <span class="">Mostrar en la Web:</span>
                  <span class="font-weight-normal">{{ el.active ? 'Sí' : 'No' }}</span>
                </h3-->

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
            <!-- ///////////////// -->

          </div>
        </draggable>
        <NoData v-else />
      </div>
    </div>

    <!-- ////////////////////////// -->
    <!-- MODAL -->
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
        <div class="text-primary h2">{{ title }} Faq</div>
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
          <!--div class="row mb-3">
            <div class="col-12 text-right">
              <b-form-checkbox
                size="lg"
                v-model="element.active"
                name="check-button"
                switch
              >
                Mostrar Faq en la Web
              </b-form-checkbox>
            </div>
          </div-->
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <Input
                  label="Pregunta"
                  variable="question"
                  :errors="errors"
                  :valueEs.sync="element.question"
                  :valueEsParent="element.question"
                  :valueEn.sync="element.question_en"
                  :valueEnParent="element.question_en"
                />
              </div>
            </div>

            <div class="col-12">
              <div class="form-group">
                <Editor
                  size="md"
                  label="Descripción"
                  variable="description"
                  :errors="errors"
                  :valueEs.sync="element.description"
                  :valueEsParent="element.description"
                  :valueEn.sync="element.description_en"
                  :valueEnParent="element.description_en"
                  :url="'faqs/faqs'"
                  :text-image="'image'"
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
      element="faq"
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
import { quillEditor } from "vue-quill-editor";
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
    quillEditor,
  },
  props: {
    route: String,
    routeGetAll: String,
    routeOrder: String,
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
      elements: {},
      title: "",
      element: {
        active: true,
      },
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
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

    /*================================*/
    /* Envio de datos */
    submit() {
      this.requestSubmit = true;
      let url;
      let method;
      const like = 0;
      const dislike = 0;
      const fd = new FormData();

      if (this.title == "Nuevo") {
        url = this.route;
        method = "post";
      } else {
        url = this.route + "/" + this.element.id;
        method = "post";
        fd.append("_method", "put");
      }
      if (this.element.question) {
        fd.append("question", this.element.question);
      }

      if (this.element.description) {
        fd.append("description", this.element.description);
      }

      if (this.element.question) {
        fd.append("question_es", this.element.question);
      }

      if (this.element.description) {
        fd.append("description_es", this.element.description);
      }

      if (this.element.question_en) {
        fd.append("question_en", this.element.question_en);
      }

      if (this.element.description_en) {
        fd.append("description_en", this.element.description_en);
      }

      fd.append("like", like);
      fd.append("dislike", dislike);
      
      console.log(url);
      console.log(fd.get('description'));
      /*console.log(this.element.question);
      console.log(this.element.description);      
      console.log(like);
      console.log(dislike);      
      console.log(fd);*/
      /*if (this.element.active == true) {
        fd.append("active", 1);
      } else {
        fd.append("active", 0);
      }*/

      /*axios({
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
        });*/
    },
    /* ==================================================== */

    
    restore() {
      (this.element = {
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