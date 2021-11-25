<template>
  <div class="row mb-4">
    <div class="col-12 col-lg-3">
      <h2>Cantidad estimada de paquetes mensuales</h2>
      <p>
        Registra la Cantidad estimada de paquetes mensuales que el Cliente puede
        escoger al dejar sus datos en la página de <b>Servicios</b>.
      </p>
    </div>
    <div class="col-12 col-lg-9">
      <div class="text-right">
        <a
          href="#"
          class="btn btn-icon btn-inverse-primary"
          @click.prevent="newEl"
        >
          <span class="btn-inner--icon">
            <i class="ri-add-line current-color ri-lg" />
          </span>
          <span class="btn-inner--text">Nuevo Elemento</span>
        </a>
      </div>
      <DataTableDraggable
        :object.sync="elements"
        :buttonUpdate="true"
        :buttonDelete="true"
        :buttonDetail="false"
        @drag="handleChange"
        @edit="editEl"
        @delete="deleteEl"
        :message-order="messageOrder"
      ></DataTableDraggable>
    </div>

    <b-modal
      v-model="modalCreateUpdate"
      @close="restoreEl"
      no-close-on-esc
      no-close-on-backdrop
      centered
      footer-class="border-0 pt-0"
      body-class="pt-0"
    >
      <template slot="modal-title">
        <div class="text-primary h2">{{ title }} Elemento</div>
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
                  label="Valor"
                  variable="name"
                  :errors="errors"
                  :valueEn.sync="element.name_en"
                  :valueEs.sync="element.name_es"
                  :valueEnParent="element.name_en"
                  :valueEsParent="element.name_es"
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
      element="elemento"
      @cancel="restoreEl"
      :open="modalDestroy"
      @submit="destroyConfirm"
      :loading-get="loadingGet"
      :loading-submit="requestSubmit"
    ></destroy>
  </div>
</template>
<script>
import { Skeleton } from "vue-loading-skeleton";
import NoData from "../../../components/NoData";
import DataTableDraggable from "../../../components/DataTableDraggable";
import Destroy from "../../../components/modals/Destroy";
import Button from "../../../components/Button";
import SkeletonForm from "../../../components/skeleton/form";
import Input from "../../../components/form/Input";
export default {
  components: {
    Button,
    Skeleton,
    DataTableDraggable,
    NoData,
    Destroy,
    SkeletonForm,
    Input
  },
  props: {
    messageOrder: String,
    routeGet: String,
    routeOrder: String,
    route: String,
  },
  data() {
    return {
      elements: {},
      title: "",
      element: {
        active: true,
      },
      errors: {},
      loadingGet: false,
      requestSubmit: false,
      modalCreateUpdate: false,
      modalDestroy: false,
    };
  },
  methods: {
    submit() {
      this.requestSubmit = true;
      let url;
      let method;
      if (this.title == "Nuevo") {
        url = "general/" + this.route;
        method = "post";
      } else {
        url = "general/" + this.route + "/" + this.element.id;
        method = "put";
      }
      axios({
        method: method,
        url: url,
        data: this.element,
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
      this.errors = {};
      this.elements = {};
      this.modalCreateUpdate = this.modalDestroy = false;
      this.element = {
        active: true,
      };
      this.getEls();
    },
    restoreEl() {
      this.errors = {};
      this.modalCreateUpdate = this.modalDestroy = false;
      this.element = {
        active: true,
      };
    },
    handleChange(elements) {
      axios
        .put(this.routeOrder, elements)
        .then((response) => {
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
        });
    },
    editEl(id) {
      this.title = "Actualizar";
      this.modalCreateUpdate = true;
      this.getEl(id);
    },
    destroyConfirm() {
      this.requestSubmit = true;
      axios
        .delete("general/" + this.route + "/" + this.element.id)
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
    deleteEl(id) {
      this.modalDestroy = true;
      this.getEl(id);
    },
    getEl(id) {
      this.loadingGet = true;
      axios
        .get("general/" + this.route + "/json/get/" + id)
        .then((response) => {
          this.element = response.data;
          this.loadingGet = false;
        })
        .catch((error) => {});
    },
    newEl() {
      this.title = "Nuevo";
      this.modalCreateUpdate = true;
    },
    getEls() {
      axios
        .get(this.routeGet)
        .then((response) => {
          this.elements = response.data;
        })
        .catch((error) => {});
    },
  },
  created() {
    this.getEls();
  },
};
</script>
