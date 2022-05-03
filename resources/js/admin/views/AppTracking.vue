<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb
                :title="startBlock ? 'App Rastreo' : 'Actualizar App Rastreo'"
                active="App Rastreo"
              ></BreadCrumb>
            </div>
            <div class="col-6 col-md-5 text-right">
              <a
                href="#"
                class="btn btn-icon btn-inverse-primary"
                @click.prevent="editEl"
                v-if="startBlock"
              >
                <span class="btn-inner--icon">
                  <i class="ri-information-line current-color ri-lg" />
                </span>
                <span class="btn-inner--text">Editar Información</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <div class="card mb-4" v-if="startBlock">
        <div class="card-body" v-if="!loadingGet">
          <div class="row">
                 <div class="col-12">
              <div class="form-group">
                <label class="font-weight-bold d-block">Imagen</label>
                <img v-if="el.image" class="img-fluid" :src="imagesUrl+ '/app-tracking/' +el.image" alt="">
                <p v-else>No registrado</p>
              </div>
            </div>
              <div class="col-12 col-lg-6">
              <div class="form-group">
                <label class="font-weight-bold">Título ES</label>
                <p v-if="el.title_es" v-html="el.title_es" class="content-editor-value"></p>
                <p v-else>No registrado</p>
              </div>
              <div class="form-group">
                <label class="font-weight-bold">Título EN</label>
                <p v-if="el.title_en" v-html="el.title_en" class="content-editor-value"></p>
                <p v-else>No registrado</p>
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="form-group">
                <label class="font-weight-bold">Descripción ES</label>
                <div v-if="el.description_es" class="content-editor-value" v-html="el.description_es">{{ el.description_es }}</div>
                <p v-else>No registrado</p>
              </div>

               <div class="form-group">
                <label class="font-weight-bold">Descripción EN</label>
                <div v-if="el.description_en" class="content-editor-value" v-html="el.description_en">{{ el.description_en }}</div>
                <p v-else>No registrado</p>
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="form-group">
                <label class="font-weight-bold">Link Google Play</label>
                <p v-if="el.link_android"><a style="text-decoration: underline;" :href="el.link_android" target="_blank">{{ el.link_android }}</a></p>
                <p v-else>No registrado</p>
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="form-group">
                <label class="font-weight-bold">Link App Store</label>
                <p v-if="el.link_ios"><a style="text-decoration: underline;" :href="el.link_ios" target="_blank">{{ el.link_ios }}</a></p>
                <p v-else>No registrado</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body" v-else>
          <div class="row">
            <div class="col-12 col-lg-6" v-for="i in 4" :key="i">
              <div class="w-25">
                <Skeleton height="15px" />
              </div>
              <div class="w-75">
              <Skeleton height="50px" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-4" v-if="editBlock">
        <div class="card-body">
          <form @submit.prevent="update">
            <div class="row">
                 <div class="col-12">
                    <div class="form-group">
                      <small class="d-block mb-0 lh-1"
                        >Resolución recomendada: 1920×969px</small
                      >
                      <small class="d-block mb-0 lh-1">Formato: JPG</small>
                      <small class="d-block mb-1 lh-1"
                        >Tamaño recomendado: No mayor a 300KB</small
                      >
                      <div class="row">
                        <div
                            class="col-lg-4 mb-3 mb-lg-0"
                            v-if="el.image_registered"
                        >
                            <img
                            class="img-fluid"
                            :src="imagesUrl + '/app-tracking/' + el.image_registered"
                            alt
                            />
                        </div>
                        <div
                            class=""
                            :class="el.image_registered ? 'col-lg-8' : 'col-12'"
                        >
                            <ImageForm
                                label="Imagen"
                                variable="image"
                                :errors="errors"
                                :value.sync="el.image"
                            ></ImageForm>
                        </div>
                      </div>
                    </div>
                  </div>
                <div class="col-12 col-lg-6">
                    <div class="form-group">
                                    <Editor
                            size="sm"
                            label="Título"
                            variable="title"
                            :errors="errors"
                            :valueEn.sync="el.title_en"
                            :valueEs.sync="el.title_es"
                            :valueEnParent="el.title_en"
                            :valueEsParent="el.title_es"
                        />
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="form-group">
                        <Editor
                            size="md"
                            label="Descripción"
                            variable="description"
                            :errors="errors"
                            :valueEn.sync="el.description_en"
                            :valueEs.sync="el.description_es"
                            :valueEnParent="el.description_en"
                            :valueEsParent="el.description_es"
                        />
                    </div>
                </div>
              <div class="col-12 col-lg-6">
                <div class="form-group">
                  <label class="font-weight-bold" for="customers_link">Link Google Play</label>
                  <input type="text" class="form-control" v-model="el.link_android" id="link_android" />
                  <label
                    v-if="errors && errors.link_android"
                    class="mt-2 text-danger text-sm"
                    for="link_android"
                  >{{ errors.link_android[0] }}</label>
                </div>
              </div>

              <div class="col-12 col-lg-6">
                <div class="form-group">
                  <label class="font-weight-bold" for="customers_link">Link App Store</label>
                  <input type="text" class="form-control" v-model="el.link_ios" id="link_ios" />
                  <label
                    v-if="errors && errors.link_ios"
                    class="mt-2 text-danger text-sm"
                    for="link_ios"
                  >{{ errors.link_ios[0] }}</label>
                </div>
              </div>

              <div class="col-12 text-right">
                <Button
                  :text="'Actualizar'"
                  :classes="['btn-inverse-primary']"
                  :request-server="requestSubmit"
                ></Button>
                <button type="button" class="btn btn-secondary" @click.prevent="restore">Cancelar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Skeleton } from "vue-loading-skeleton";
import Button from "../components/Button";
import BreadCrumb from "../components/BreadCrumb";
import Editor from "../components/form/Editor";
import Input from "../components/form/Input";
import ImageForm from "../components/form/Image";
import Quill from "quill";
import PlainClipboard from "../functions/PlainClipboard";
Quill.register("modules/clipboard", PlainClipboard, true);
import { quillEditor } from "vue-quill-editor";
export default {
  props: {
    routeGet: String,
    routeUpdate: String,
    imagesUrl: String
  },
  components: {
    Button,
    BreadCrumb,
    Skeleton,
    quillEditor,
    Editor,
    Input,
    ImageForm
  },
  data() {
    return {
      editorOptions: {
        placeholder: "",
        modules: {
          toolbar: {
            container: [
              ["bold", "italic", "underline", "strike"],
              ["blockquote"],
              [{ header: 1 }, { header: 2 }],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ indent: "-1" }, { indent: "+1" }],
              //[{ size: [false] }],
              [{ header: [1, 2, 3, 4, 5, false] }],
              //[{ font: [false] }],
              [{ color: [] }, { background: [] }],
              [{ align: [] }],
              //['clean'],
              ["link"],
            ],
          },
        },
      },
      el: {
        title_es: "",
        description_es: "",
        link_ios: "",
        link_android: "",
      },
      errors: {},
      requestSubmit: false,
      startBlock: true,
      editBlock: false,
      loadingGet: false
    };
  },
  methods: {
    update() {
      this.requestSubmit = true;
      this.requestServer = true;
      const fd = new FormData();
      if (this.el.description_es) {
        fd.append("description_es", this.el.description_es);
      }
      if (this.el.title_es) {
        fd.append("title_es", this.el.title_es);
      }
      if (this.el.description_en) {
        fd.append("description_en", this.el.description_en);
      }
      if (this.el.title_en) {
        fd.append("title_en", this.el.title_en);
      }
      if (this.el.image) {
        fd.append("image", this.el.image);
      }
      if (this.el.link_ios) {
        fd.append("link_ios", this.el.link_ios);
      }
      if (this.el.link_android) {
        fd.append("link_android", this.el.link_android);
      }
      axios
        .post(this.routeUpdate, fd)
        .then((response) => {
          this.requestSubmit = false;
          this.restore();
          Swal.fire({
            title: response.data.title,
            text: response.data.message,
            type: "success",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-inverse-primary",
            },
          });
        })
        .catch((error) => {
          this.requestSubmit = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            return;
          }
          this.restore();
          Swal.fire({
            title: error.response.data.title,
            text: error.response.data.message,
            type: "error",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-inverse-primary",
            },
          });
        });
    },
    restore() {
      this.el = {
        title_es: "",
        description_es: "",
        link_ios: "",
        link_android: "",
      };
      this.errors = {};
      (this.startBlock = true), (this.editBlock = false);
      this.getEl();
    },
    editEl() {
      this.startBlock = false;
      this.editBlock = true;
    },
    getEl() {
      this.loadingGet = true;
      axios
        .get(this.routeGet)
        .then((response) => {
          this.el = response.data;
          this.el.image_registered = response.data.image;
          this.loadingGet = false;
        })
        .catch((error) => {});
    },
  },
  created() {
    this.getEl();
  },
};
</script>

