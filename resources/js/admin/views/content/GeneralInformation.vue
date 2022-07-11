<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb
                :title="
                  startBlock
                    ? 'Información General'
                    : 'Actualizar Información General'
                "
                parent="Contenido"
                active="Información General"
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
            <div class="col-12 col-md-6 col-lg-4">
              <div class="form-group">
                <label class="font-weight-bold">Link de Facebook</label>
                <p v-if="el.facebook_link">
                  <a
                    style="text-decoration: underline"
                    :href="el.facebook_link"
                    target="_blank"
                    >{{ el.facebook_link }}</a
                  >
                </p>
                <p v-else>No registrado</p>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
              <div class="form-group">
                <label class="font-weight-bold">Link de Instagram</label>
                <p v-if="el.instagram_link">
                  <a
                    style="text-decoration: underline"
                    :href="el.instagram_link"
                    target="_blank"
                    >{{ el.instagram_link }}</a
                  >
                </p>
                <p v-else>No registrado</p>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
              <div class="form-group">
                <label class="font-weight-bold">Link de Youtube</label>
                <p v-if="el.youtube_link">
                  <a
                    style="text-decoration: underline"
                    :href="el.youtube_link"
                    target="_blank"
                    >{{ el.youtube_link }}</a
                  >
                </p>
                <p v-else>No registrado</p>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
              <div class="form-group">
                <label class="font-weight-bold">Link de Linkedin</label>
                <p v-if="el.linkedin_link">
                  <a
                    style="text-decoration: underline"
                    :href="el.linkedin_link"
                    target="_blank"
                    >{{ el.linkedin_link }}</a
                  >
                </p>
                <p v-else>No registrado</p>
              </div>
            </div>

          </div>
        </div>
        <div class="card-body" v-else>
          <div class="row">
            <div class="col-12 col-lg-4" v-for="i in 3" :key="i">
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

      <!-- Editor de Información General -->
      <div class="card mb-4" v-if="editBlock">
        <div class="card-body">
          <form @submit.prevent="update">
            <div class="row">
              <div class="col-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <label class="font-weight-bold" for="facebook_link"
                    >Link de Facebook</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="el.facebook_link"
                    id="facebook_link"
                  />
                  <label
                    v-if="errors && errors.facebook_link"
                    class="mt-2 text-danger text-sm"
                    for="facebook_link"
                    >{{ errors.facebook_link[0] }}</label
                  >
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <label class="font-weight-bold" for="instagram_link"
                    >Link de Instagram</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="el.instagram_link"
                    id="instagram_link"
                  />
                  <label
                    v-if="errors && errors.instagram_link"
                    class="mt-2 text-danger text-sm"
                    for="instagram_link"
                    >{{ errors.instagram_link[0] }}</label
                  >
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <label class="font-weight-bold" for="youtube_link"
                    >Link de Youtube</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="el.youtube_link"
                    id="youtube_link"
                  />
                  <label
                    v-if="errors && errors.youtube_link"
                    class="mt-2 text-danger text-sm"
                    for="youtube_link"
                    >{{ errors.youtube_link[0] }}</label
                  >
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <label class="font-weight-bold" for="linkedin_link"
                    >Link de Linkendin</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="el.linkedin_link"
                    id="linkedin_link"
                  />
                  <label
                    v-if="errors && errors.linkedin_link"
                    class="mt-2 text-danger text-sm"
                    for="linkedin_link"
                    >{{ errors.linkedin_link[0] }}</label
                  >
                </div>
              </div>

              <div class="col-12 text-right">
                <Button
                  :text="'Actualizar'"
                  :classes="['btn-inverse-primary']"
                  :request-server="requestSubmit"
                ></Button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click.prevent="restore"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <!-- *********************************************** -->
    </div>
  </div>
</template>
<script>
import { Skeleton } from "vue-loading-skeleton";
import Button from "../../components/Button";
import BreadCrumb from "../../components/BreadCrumb";
import InputSelectArray from "../../components/form/InputSelectArray";
import Quill from "quill";
import PlainClipboard from "../../functions/PlainClipboard";
Quill.register("modules/clipboard", PlainClipboard, true);
import { quillEditor } from "vue-quill-editor";
import ImageForm from "../../components/form/Image";
export default {
  props: {
    routeGet: String,
    routeUpdate: String,
    departments: Array,
    imagesUrl: String,
  },
  components: {
    Button,
    BreadCrumb,
    Skeleton,
    InputSelectArray,
    quillEditor,
    ImageForm,
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
        facebook_link: "",
        youtube_link: "",
        instagram_link: "",
        linkedin_link: "",
      },
      errors: {},
      requestSubmit: false,
      startBlock: true,
      editBlock: false,
      loadingGet: false,
    };
  },
  methods: {
    update() {
      this.requestSubmit = true;
      const fd = new FormData();

      if (this.el.facebook_link) {
        fd.append("facebook_link", this.el.facebook_link);
      }

      if (this.el.instagram_link) {
        fd.append("instagram_link", this.el.instagram_link);
      }

      if (this.el.youtube_link) {
        fd.append("youtube_link", this.el.youtube_link);
      }

      if (this.el.linkedin_link) {
        fd.append("linkedin_link", this.el.linkedin_link);
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
        facebook_link: "",
        youtube_link: "",
        instagram_link: "",
        linkedin_link: "",
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

