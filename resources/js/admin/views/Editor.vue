<template>
  <div>
    <!-- HEADER EDITOR DE CODIGO -->
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb title="Editor" parent active="Editor"></BreadCrumb>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ======================================================== -->

    <div class="container-fluid mt--6">
      
      
      
        <draggable class="row" 
          v-if="elements.length" 
          v-model="elements"         
        >

          <div class="col-12 col-md-6 col-lg-6 mb-6" 
          v-for="(el,i) in elements"
          :key="el.id"
          >
            <div class="form-group">
              <div class="mt-2">
                <label for="Agregar Scripts" class="font-weight-bold"
                  >Agregar Scripts:</label
                >
              </div>
              <!--textarea cols="40" class="form-control"></textarea-->
              <div class="content-editor">
                {{ el.codescript }}
              </div>
            </div>
            <a
              href="#"
              class="btn btn-icon btn-inverse-primary"
              @click.prevent="newElScript"
            >
              <span class="btn-inner--icon">
                <i class="ri-add-line current-color ri-lg" />
              </span>
              <span class="btn-inner--text">Editar Scripts</span>
            </a>
          </div>

        </draggable>


        <draggable class="row">
          <div class="col-12 col-md-6 col-lg-6 mb-6">
          <form action="">
            <div class="form-group">
              <div class="mt-2">
                <label for="Agregar Estilos" class="font-weight-bold"
                  >Agregar Estilos:</label
                >
              </div>
              <!--textarea cols="40" class="form-control"></textarea-->
              <div class="content-editor" id="editorstyle">
                {{ elements }}
              </div>
            </div>
            <a
            href="#"
            class="btn btn-icon btn-inverse-primary"
            @click.prevent="getEls"
          >
            <span class="btn-inner--icon">
              <i class="ri-add-line current-color ri-lg" />
            </span>
            <span class="btn-inner--text">Editar Styles</span>
          </a>
          </form>
        </div>
        </draggable>
      


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
        <div class="text-primary h2">Editar {{ titlemodal }}</div>
      </template>

      <template slot="modal-header-close">
        <button type="button" class="btn p-0 bg-transparent" @click="restoreEl">
          <i class="ri-close-line ri-lg"></i>
        </button>
      </template>
      <div>
        <form @submit.prevent="submit">
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <div class="mt-2">
                  <label for="" class="font-weight-bold"
                    >Agregar {{ titlemodal }}:</label
                  >
                </div>
                <textarea
                  cols="6"
                  class="form-control"
                  v-model="element.codescript"
                />
              </div>
            </div>
          </div>
        </form>
      </div>

      <template v-slot:modal-footer="{ ok }">
        <Button
          :classes="['btn-inverse-primary']"
          :text="titlebtn == 'Nuevo' ? 'Crear' : 'Actualizar'"
          @click="submit"
          :request-server="requestSubmit"
        ></Button>
        <button type="button" class="btn btn-secondary" @click="restoreEl">
          Cancelar
        </button>
      </template>
    </b-modal>
  <!-- ////////////////////////// -->

  </div>
</template>

<style scoped>

.content-editor{
  background-color: #fbfaf7;
  width: 100%;
  height: 250px;
  overflow-x: auto;
  border: 1px solid #e7e7e7;
  padding: 30px;
}

.textarea-code{
  height: 200px;
}

</style>

<script>
import BreadCrumb from "../components/BreadCrumb";
import draggable from "vuedraggable";
/*import vue2Dropzone from "vue2-dropzone";*/
import Button from "../components/Button";
import Textcode from "../components/form/Textareacode";
/*import { Skeleton } from "vue-loading-skeleton";
import { quillEditor } from "vue-quill-editor";
import Editor from "../components/form/Editor";
/*import Destroy from "../components/modals/Destroy";
import SkeletonForm from "../components/skeleton/form";
import NoData from "../components/NoData";*/
export default {
  components: {
    BreadCrumb,
    /*messageCantDelete: String,
    Destroy,*/
    Button,
    Textcode,
    /*Input,
    vueDropzone: vue2Dropzone,
    Skeleton,
    SkeletonForm,*/
    draggable,
    //Input,
    //Editor,
    /*NoData,
    quillEditor,*/
  },
  props: {
    route: String,
    routeGetAll: String,
    /*routeOrder: String,
    messageOrder: String,*/
  },
  data() {
    return {
      modalCreateUpdate: false,
      modalDestroy: false,
      titlebtn: "",
      titlemodal:"",
      requestSubmit: false,
      value: "",
      errors: {},
     /* modalCreateUpdate: false,
      modalDestroy: false,*/
      loadingGet: false,
      loadingEls: false,
      /*loadingSubmit: false,*/
      elements: {},
      //title: "",
      element: {
        active: true,
      },
      /*dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover",
      },*/
    };
  },
  methods: {
    /*handleChange() {
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

    /*destroyConfirm() {
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
    },*/

    newElScript() {      
        this.titlebtn="Nuevo",
        this.titlemodal="Script",
        this.modalCreateUpdate = true;      
    },

    newElStyle() {
      this.titlebtn="Nuevo",
      this.titlemodal="Style",
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
      const fd = new FormData();

      if(this.titlebtn == "Nuevo"){
        url = this.route;
        method = "post";
      }

      if (this.element.codescript) {
        fd.append("codescript", this.element.codescript);
      }

      /*console.log(url);
      console.log(this.titlebtn);
      console.log(this.element.codescript);*/

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