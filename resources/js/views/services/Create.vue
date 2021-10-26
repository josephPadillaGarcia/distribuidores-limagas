<template>
  <div>
    <form @submit.prevent="submit">
      <div class="header pb-6">
        <div class="container-fluid">
          <div class="header-body">
            <div class="row align-items-center pt-0 pt-md-2 pb-4">
              <div class="col-6 col-md-7">
                <BreadCrumb
                  title="Crear Servicio"
                  parent
                  active="Servicios"
                ></BreadCrumb>
              </div>
              <div class="col-6 col-md text-right">
                <span
                  v-if="
                    Object.keys(errors).length === 0 &&
                    errors.constructor === Object
                  "
                ></span>
                <span v-else class="d-block text-danger mb-2"
                  >Algunos campos estan incorrectos</span
                >
                <Button
                  :text="'Guardar'"
                  :classes="['btn-inverse-primary', 'mr-2']"
                  :request-server="requestServer"
                ></Button>
                <a type="button" class="btn btn-secondary" :href="routeReturn"
                  >Cancelar</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid mt--6">
        <div class="row mb-3">
          <div class="col-12 text-right">
            <b-form-checkbox
              size="lg"
              v-model="element.active"
              name="check-button"
              switch
            >
              Mostrar Servicio en la Web
            </b-form-checkbox>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-12 col-lg-2">
            <h2>Información de Servicio</h2>
            <p>Indica los datos principales del Servicio</p>
          </div>
          <div class="col-12 col-lg-10">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <InputSlug
                        :urlEs="appUrl + '/servicios/'"
                        :urlEn="appUrl + '/en/'"
                        label="Título"
                        variable="title"
                        type="Ruta"
                        :errors="errors"
                        :valueEn.sync="element.title_es"
                        :valueEs.sync="element.title_es"
                        :slugEn.sync="element.slug_en"
                        :slugEs.sync="element.slug_es"
                        :valueEnParent="element.title_es"
                        :valueEsParent="element.title_es"
                        :slugEnParent="element.slug_en"
                        :slugEsParent="element.slug_es"
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <small class="d-block mb-0 lh-1"
                        >Resolución recomendada: 1920×969px</small
                      >
                      <small class="d-block mb-0 lh-1">Formato: JPG</small>
                      <small class="d-block mb-1 lh-1"
                        >Tamaño recomendado: No mayor a 300KB</small
                      >
                      <ImageForm
                        label="Imagen"
                        variable="image"
                        :errors="errors"
                        :value.sync="element.image"
                      ></ImageForm>
                    </div>
                  </div>

                  
                  <div class="col-12 col-lg-6  mb-4 vue-dropzone-dark">
                    <label for="id_iconb" class="font-weight-bold mb-0"
                      >Icono Blanco (Opcional)</label
                    >
                    <small class="d-block mb-0 lh-1"
                      >Resolución recomendada: 1200x900px</small
                    >
                    <small class="d-block mb-2 lh-1"
                      >Tamaño recomendado: Menor a 100kb</small
                    >
                    <vue-dropzone
                      ref="ref_icon_white"
                      @vdropzone-file-added="
                        $validateImageDropzone(
                          $event,
                          $refs.ref_icon_white.dropzone,
                          1,
                          100000,
                          '100kb'
                        )
                      "
                      id="id_iconb"
                      :options="dropzoneOptions"
                      :duplicateCheck="true"
                      :useCustomSlot="true"
                    >
                      <div class="dropzone-custom-content">
                        <h5 class="dropzone-custom-title text-primary">
                          Suelte el archivo aquí o haga click para cargarlo.
                        </h5>
                      </div>
                    </vue-dropzone>
                  </div>
                  <div class="col-12 col-lg-6 mb-4">
                    <label for="id_icon_color" class="font-weight-bold mb-0"
                      >Icono Color (Opcional)</label
                    >
                    <small class="d-block mb-0 lh-1"
                      >Resolución recomendada: 1200x900px</small
                    >
                    <small class="d-block mb-2 lh-1"
                      >Tamaño recomendado: Menor a 100kb</small
                    >
                    <vue-dropzone
                      ref="ref_icon_color"
                      @vdropzone-file-added="
                        $validateImageDropzone(
                          $event,
                          $refs.ref_icon_color.dropzone,
                          1,
                          100000,
                          '100kb'
                        )
                      "
                      id="id_icon_color"
                      :options="dropzoneOptions"
                      :duplicateCheck="true"
                      :useCustomSlot="true"
                    >
                      <div class="dropzone-custom-content">
                        <h5 class="dropzone-custom-title text-primary">
                          Suelte el archivo aquí o haga click para cargarlo.
                        </h5>
                      </div>
                    </vue-dropzone>
                  </div>
                   <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="url_video"
                        >Video Youtube (Opcional)</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="element.url_video"
                        id="url_video"
                      />
                      <small
                        id="url_video"
                        class="form-text"
                        style="opacity: 0.7"
                        >El formato de la URL debe ser
                        "https://www.youtube.com/watch?v=qY74zs3Jdbw".</small
                      >
                      <label
                        v-if="errors && errors.url_video"
                        class="mt-2 text-danger text-sm"
                        for="url_video"
                        >{{ errors.url_video[0] }}</label
                      >
                    </div>
                   </div>

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
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-lg-2">
            <h2>SEO</h2>
            <p>Indica los datos del SEO</p>
          </div>
          <div class="col-12 col-lg-10">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 mb-4">
                    <label for="id_imagen" class="font-weight-bold mb-0"
                      >Imagen  (Opcional)</label
                    >
                    <small class="d-block mb-0 lh-1"
                      >Resolución recomendada: 1200x900px</small
                    >
                    <small class="d-block mb-2 lh-1"
                      >Tamaño recomendado: Menor a 100kb</small
                    >
                    <vue-dropzone
                      ref="ref_image_seo"
                      @vdropzone-file-added="
                        $validateImageDropzone(
                          $event,
                          $refs.ref_image_seo.dropzone,
                          1,
                          100000,
                          '100kb'
                        )
                      "
                      id="id_imagen"
                      :options="dropzoneOptions"
                      :duplicateCheck="true"
                      :useCustomSlot="true"
                    >
                      <div class="dropzone-custom-content">
                        <h5 class="dropzone-custom-title text-primary">
                          Suelte el archivo aquí o haga click para cargarlo.
                        </h5>
                      </div>
                    </vue-dropzone>
                  </div>
                  <div class="col-12">
                    <Input
                      label="Título SEO (Opcional)"
                      variable="seo_title"
                      :errors="errors"
                      :valueEn.sync="element.seo_title_en"
                      :valueEs.sync="element.seo_title_es"
                      :valueEnParent="element.seo_title_en"
                      :valueEsParent="element.seo_title_es"
                    />
                  </div>
                  <div class="col-12 col-lg-6">
                    <Textarea
                      label="Descripción SEO (Opcional)"
                      variable="seo_description"
                      :errors="errors"
                      :valueEn.sync="element.seo_description_en"
                      :valueEs.sync="element.seo_description_es"
                      :valueEnParent="element.seo_description_en"
                      :valueEsParent="element.seo_description_es"
                    />
                  </div>
                  <div class="col-12 col-lg-6">
                    <Textarea
                      label="Keywords SEO (Opcional)"
                      variable="seo_keywords"
                      :errors="errors"
                      :valueEn.sync="element.seo_keywords_en"
                      :valueEs.sync="element.seo_keywords_es"
                      :valueEnParent="element.seo_keywords_en"
                      :valueEsParent="element.seo_keywords_es"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<style>
.vue-dropzone-dark .dz-image {
  padding: 0.5rem;
  background: black;
}
</style>
<script>
import Button from "../../components/Button";
import BreadCrumb from "../../components/BreadCrumb";
import vue2Dropzone from "vue2-dropzone";
import ImageForm from "../../components/form/Image";
import Input from "../../components/form/Input";
import Editor from "../../components/form/Editor";
import InputSlug from "../../components/form/InputSlug";
import Textarea from "../../components/form/Textarea";
export default {
  components: {
    BreadCrumb,
    Button,
    vueDropzone: vue2Dropzone,
    Input,
    ImageForm,
    Editor,
    InputSlug,
    Textarea,
  },
  props: {
    appUrl: String,
    routeStore: String,
    routeReturn: String,
  },
  data() {
    return {
      element: {
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
      errors: {},
      requestServer: false,
    };
  },
  methods: {
    submit() {
      this.requestServer = true;
      const fd = new FormData();
      if (this.element.description_es) {
        fd.append("description_es", this.element.description_es);
      }
      if (this.element.title_es) {
        fd.append("title_es", this.element.title_es);
      }
      if (this.element.image) {
        fd.append("image", this.element.image);
      }
      if (this.element.active == true) {
        fd.append("active", 1);
      } else {
        fd.append("active", 0);
      }
      if (this.element.slug_es) {
        fd.append("slug_es", this.element.slug_es);
      }
      if (this.element.seo_keywords_es) {
        fd.append("seo_keywords_es", this.element.seo_keywords_es);
      }
      if (this.element.seo_keywords_en) {
        fd.append("seo_keywords_en", this.element.seo_keywords_en);
      }
      if (this.element.seo_description_es) {
        fd.append("seo_description_es", this.element.seo_description_es);
      }
      if (this.element.seo_description_en) {
        fd.append("seo_description_en", this.element.seo_description_en);
      }
      if (this.element.seo_title_en) {
        fd.append("seo_title_en", this.element.seo_title_en);
      }
      if (this.element.seo_title_es) {
        fd.append("seo_title_es", this.element.seo_title_es);
      }
      if (this.$refs.ref_image_seo.dropzone.files[0]) {
        fd.append("seo_image", this.$refs.ref_image_seo.dropzone.files[0]);
      }

      if (this.$refs.ref_icon_white.dropzone.files[0]) {
        fd.append("icon_white", this.$refs.ref_icon_white.dropzone.files[0]);
      }

      if (this.$refs.ref_icon_color.dropzone.files[0]) {
        fd.append("icon_color", this.$refs.ref_icon_color.dropzone.files[0]);
      }

      if (this.element.url_video) {
        fd.append("url_video", this.element.url_video);
      }
      axios
        .post(this.routeStore, fd)
        .then((response) => {
          this.requestServer = false;
          document.location.href = response.data.route;
        })
        .catch((error) => {
          this.requestServer = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            return;
          }
          document.location.href = error.response.data.route;
        });
    },
  },
};
</script>