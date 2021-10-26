<template>
  <div>
    <form @submit.prevent="submit">
      <div class="header pb-6">
        <div class="container-fluid">
          <div class="header-body">
            <div class="row align-items-center pt-0 pt-md-2 pb-4">
              <div class="col-6 col-md-7">
                <BreadCrumb
                  :title="'Distribuidor ' + element.title_es"
                  parent
                  active="Servicios"
                ></BreadCrumb>
              </div>
              <div class="col-6 col-md text-right">
                <a
                  :href="routeReturn"
                  class="btn btn-icon btn-inverse-light d-inline-flex"
                >
                  <span class="btn-inner--icon">
                    <i
                      class="ri-arrow-left-line current-color"
                      style="top: 1px"
                    />
                  </span>
                  <span class="btn-inner--text">Regresar</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid mt--6">
        <div class="row mb-3">
          <div class="col-12 text-right">
            Mostrar Servicio en la Web:
            <strong> {{ element.active ? "Sí" : "No" }}</strong>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-12 col-lg-2">
            <h2>Información de Servicio</h2>
            <p>Datos principales del Servicio</p>
          </div>
          <div class="col-12 col-lg-10">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <h3 class="mb-0 font-weight-normal">
                        <span class="d-block font-weight-bold">Título:</span>
                        {{ element.title_es }}
                      </h3>
                      <!--<h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold"
                        >Nombre del Proyecto EN:</span
                      >
                      {{ element.title_en }}
                    </h3>-->
                      <h3 class="mb-1 font-weight-normal">
                        <!--<span class="d-block font-weight-bold"
                        >URL del Servicio:</span
                      >-->
                        <a
                          target="_blank"
                          style="text-decoration: underline"
                          :href="appUrl + '/servicios/' + element.slug_es"
                          >{{ appUrl }}/servicios/{{ element.slug_es }}</a
                        >
                      </h3>
                      <!--<h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold"
                        >URL del Proyecto EN:</span
                      >
                      <a
                        target="_blank"
                        style="text-decoration: underline"
                        :href="appUrl + '/en/' + element.slug_en"
                        >{{ appUrl }}/en/{{ element.slug_en }}</a
                      >
                    </h3>-->
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <div class="row">
                        <div class="col-12">
                          <h3 class="mb-1 font-weight-normal">
                            <span class="d-block font-weight-bold"
                              >Imagen:</span
                            >
                          </h3>
                          <img
                            class="img-fluid bg-dark p-1"
                            :src="
                              imagesUrl + '/services/' + elementParent.image
                            "
                            alt
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-lg-6 mb-4 vue-dropzone-dark">
                    <label for="id_iconb" class="d-block font-weight-bold mb-0"
                      >Icono Blanco</label
                    >
                    <img
                      class="img-fluid bg-dark p-1"
                      :src="imagesUrl + '/services/' + elementParent.icon_white"
                      v-if="elementParent.icon_white"
                      alt
                    />
                    <p v-else class="mb-0">No registrado</p>
                  </div>
                  <div class="col-12 col-lg-6 mb-4">
                    <label
                      for="id_icon_color"
                      class="d-block font-weight-bold mb-0"
                      >Icono Color</label
                    >
                    <img
                      class="img-fluid"
                      :src="
                        imagesUrl + '/services/' + elementParent.icon_colour
                      "
                      v-if="elementParent.icon_colour"
                      alt
                    />
                    <p v-else class="mb-0">No registrado</p>
                  </div>

                  <div class="col-12">
                    <div class="form-group">
                      <label
                        for="id_icon_color"
                        class="d-block font-weight-bold mb-0"
                        >Video Youtube</label
                      >
                      <div
                        v-if="element.url_video"
                        class="content-editor-value"
                      >
                        <a :href="element.url_video" target="_blank">{{ element.url_video }}</a>
                      </div>
                      <div v-else>No registrado</div>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-group">
                      <label
                        for="id_icon_color"
                        class="d-block font-weight-bold mb-0"
                        >Descripción</label
                      >
                      <div
                        v-if="element.description_es"
                        v-html="element.description_es" class="content-editor-value"
                      >
                        {{ element.description_es }}
                      </div>
                      <div v-else>No registrado</div>
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
                    <label for="id_imagen" class="font-weight-bold mb-0 d-block"
                      >Imagen</label
                    >

                    <img
                      class="img-fluid"
                      :src="imagesUrl + '/services/' + element.seo_image"
                      v-if="element.seo_image"
                      alt
                    />
                    <p v-else class="mb-0">No registrado</p>
                  </div>
                  <div class="col-12">
                    <h3 class="mb-2 font-weight-normal">
                      <span class="d-block font-weight-bold">Título SEO:</span>
                      {{ element.seo_title_es }}
                    </h3>
                  </div>
                  <div class="col-12 col-lg-6">
                    <h3 class="mb-2 font-weight-normal">
                      <span class="d-block font-weight-bold"
                        >Descripción SEO:</span
                      >
                      {{ element.seo_description_es }}
                    </h3>
                  </div>
                  <div class="col-12 col-lg-6">
                    <h3 class="mb-2 font-weight-normal">
                      <span class="d-block font-weight-bold"
                        >Keywords SEO:</span
                      >
                      {{ element.seo_keywords_es }}
                    </h3>
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
export default {
  components: {
    BreadCrumb,
    Button,
  },
  props: {
    appUrl: String,
    imagesUrl: String,
    routeReturn: String,
    elementParent: Object,
  },
  data() {
    return {
      element: {
        active: true,
      },
      errors: {},
      requestServer: false,
    };
  },
  methods: {
  },
  watch: {
    elementParent: {
      immediate: true,
      handler: function (newValue) {
        //this.element = newValue;
        this.element = Object.assign({}, newValue);
      },
    },
  },
};
</script>