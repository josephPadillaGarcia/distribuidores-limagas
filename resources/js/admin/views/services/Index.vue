<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb
                title="Servicios"
                parent
                active="Servicios"
              ></BreadCrumb>
            </div>
            <div class="col-6 col-md-5 text-right">
              <a :href="routeCreate" class="btn btn-icon btn-inverse-primary">
                <span class="btn-inner--icon">
                  <i class="ri-add-line current-color ri-lg" />
                </span>
                <span class="btn-inner--text">Nuevo Servicio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <div class="row" v-if="loadingEls">
        <div class="col-12 col-lg-3 mb-4" v-for="i in 4" :key="i">
          <Skeleton height="300px" />
        </div>
      </div>
      <div v-else>
        <div class="row" v-if="elements.length">
          <div class="col-12 mb-3">
            <i>{{ messageOrder }}</i>
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
            v-for="el in elements"
            :key="el.id"
          >
            <div class="position-relative">
              <div
                class="img-holder bg-card card-img-top position-relative"
                :style="{
                  'background-image':
                    'url(' + imagesUrl + '/services/' + el.image + ')',
                }"
              ></div>

              <a
                :href="imagesUrl + '/services/' + el.image"
                target="_blank"
                class="btn btn-primary btn-sm position-absolute"
                style="right: 5px; top: 5px"
                >Ver imagen</a
              >
            </div>
            <div class="card">
              <div class="card-body position-relative">
                <div
                  style="
                    background-color: #f67706;
                    height: 50px;
                    width: 50px;
                    position: absolute;
                    top: -25px;
                    right: 0;
                    left: 0;
                    margin: auto;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                  v-if="el.icon_white"
                >
                  <img
                    :src="imagesUrl + '/services/' + el.icon_white"
                    height="35"
                    alt=""
                  />
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="row">
                      <div class="col-12">
                        <label class="font-weight-bold d-block">Título </label>
                        <p>{{ el.title_es }}</p>
                      </div>
                      <div class="col-12">
                        <label class="font-weight-bold d-block">Descripción Corta </label>
                        <p>{{ el.excerpt_es }}</p>
                      </div>
                      <div class="col-12">
                        <label class="font-weight-bold d-block"
                          >Mostrar en la Web
                        </label>
                        <p>{{ el.active ? "Sí" : "No" }}</p>
                      </div>
                      <!--<div class="col-12 mb-4">
                        <button
                          class="btn btn-link text-primary"
                          style="padding: 0; text-decoration: underline"
                          @click="el.seen = !el.seen"
                        >
                          {{ el.seen ? "Ocultar" : "Mostrar" }} Descripción
                        </button>
                        <template v-if="el.seen">
                          <label class="font-weight-bold d-block mt-2"
                            >Descripción
                          </label>
                          <pre
                            class="content-pre"
                            v-html="el.description_es"
                          ></pre>
                        </template>
                      </div>-->
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <a
                    :href="route + '/' + el.slug_es"
                    class="btn btn-sm btn-inverse-primary mb-1"
                    >Ver Detalle</a
                  >
                  <a
                    :href="route + '/editar/' + el.slug_es"
                    class="btn btn-sm btn-inverse-primary mb-1"
                    >Editar</a
                  >
                  <button
                    class="btn btn-sm btn-inverse-danger mb-1"
                    @click="deleteEl(el.slug_es)"
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
    <destroy
      element="servicio"
      @cancel="restoreEl"
      :open="modalDestroy"
      @submit="destroyConfirm"
      :loading-get="loadingGet"
      :loading-submit="requestSubmit"
    ></destroy>
  </div>
</template>
<style lang="scss" scoped>
.bg-card {
  height: 200px;
  background-position: center;
  background-size: cover;
}
</style>
<script>
import BreadCrumb from "../../components/BreadCrumb";
import { Skeleton } from "vue-loading-skeleton";
import Destroy from "../../components/modals/Destroy";
import draggable from "vuedraggable";
import NoData from "../../components/NoData";
export default {
  components: {
    BreadCrumb,
    Skeleton,
    Destroy,
    draggable,
    NoData,
  },
  props: {
    routeCreate: String,
    route: String,
    routeGetAll: String,
    routeOrder: String,
    messageOrder: String,
    imagesUrl: String,
    filesUrl: String,
  },
  data() {
    return {
      loadingEls: false,
      elements: [],
      element: {},
      modalDestroy: false,
      loadingGet: false,
      requestSubmit: false,
    };
  },
  methods: {
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
    deleteEl(id) {
      this.modalDestroy = true;
      this.getEl(id);
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
    restoreEl() {
      this.element = {};
      this.modalDestroy = false;
    },
    restore() {
      this.modalDestroy = false;
      this.getEls();
    },
  },
  created() {
    this.getEls();
  },
};
</script>