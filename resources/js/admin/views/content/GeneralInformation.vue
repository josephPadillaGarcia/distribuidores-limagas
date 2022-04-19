<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb
                :title="startBlock ? 'Información General' : 'Actualizar Información General'"
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
                <label class="font-weight-bold">Dirección</label>
                <div v-if="el.direction" v-html="el.direction">{{ el.direction }}</div>
                <p v-else>No registrado</p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="form-group">
                <label class="font-weight-bold">Chatbot Número de Whatsapp</label>
                <p v-if="el.whatsapp_number">{{ el.whatsapp_number_formatted }}</p>
                <p v-else>No registrado</p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="form-group">
                <label class="font-weight-bold">Link de Acceso Clientes</label>
                <p v-if="el.customers_link"><a style="text-decoration: underline;" :href="el.customers_link" target="_blank">{{ el.customers_link }}</a></p>
                <p v-else>No registrado</p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="form-group">
                <label class="font-weight-bold">Footer Nombre Link API</label>
                <p v-if="el.name_api">{{ el.name_api }}</p>
                <p v-else>No registrado</p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="form-group">
                <label class="font-weight-bold">Footer Link API</label>
                <p v-if="el.api_link"><a style="text-decoration: underline;" :href="el.api_link" target="_blank">{{ el.api_link }}</a></p>
                <p v-else>No registrado</p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="form-group">
                <label class="font-weight-bold">Link Libro de Reclamaciones</label>
                <div v-if="el.book_link" v-html="el.book_link">{{ el.book_link }}</div>
                <p v-else>No registrado</p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="form-group">
                <label class="font-weight-bold">Número de Contacto Asesores</label>
                <div v-if="el.contact_number">{{ el.contact_number }}</div>
                <p v-else>No registrado</p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="form-group">
                <label class="font-weight-bold">Link Envio Cliente Número Tracking (Link que se usará para enviar al cliente a la Plataforma para revisar el estado de su pedido)</label>
                <div v-if="el.api_url_tracking" v-html="el.api_url_tracking">{{ el.api_url_tracking }}</div>
                <p v-else>No registrado</p>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
              <div class="form-group">
                <label class="font-weight-bold">Link de Servicios al Cliente</label>
                <div v-if="el.customer_service_link" v-html="el.customer_service_link">{{ el.customer_service_link }}</div>
                <p v-else>No registrado</p>
              </div>
            </div>
            
            <div class="col-12 col-md-6 col-lg-4">
              <div class="form-group">
                <label class="font-weight-bold">Footer Link Únete a nuestro equipo</label>
                <p v-if="el.link_work_with_us"><a style="text-decoration: underline;" :href="el.link_work_with_us" target="_blank">{{ el.link_work_with_us }}</a></p>
                <p v-else>No registrado</p>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
              <div class="form-group">
                <label class="font-weight-bold">Imagen de Servicios al Cliente</label>
                <div v-if="el.customer_service_img">
                  <img
                    :src="imagesUrl + '/' + el.customer_service_img"
                    :alt="el.name"
                    height="54"
                    class="d-block mb-2 mx-auto"
                  />
                </div>
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
                  <label class="font-weight-bold" for="direction">Dirección</label>
                  <quill-Editor
                  @keydown.enter.prevent
                  v-model="el.direction"
                  :options="editorOptions"
                  class="ql-height-10"
                  ref="ref_content"
                ></quill-Editor>
                  <label
                    v-if="errors && errors.direction"
                    class="mt-2 text-danger text-sm"
                    for="direction"
                  >{{ errors.direction[0] }}</label>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <label class="font-weight-bold" for="whatsapp_number">Chatbot Número de Whatsapp</label>
                  <input type="number" class="form-control" v-model="el.whatsapp_number" id="whatsapp_number" />
                  <small class="form-text d-block" style="opacity: 0.7;">Ingrese un número de 9 dígitos</small>
                  <label
                    v-if="errors && errors.whatsapp_number"
                    class="mt-2 text-danger text-sm"
                    for="whatsapp_number"
                  >{{ errors.whatsapp_number[0] }}</label>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <label class="font-weight-bold" for="customers_link">Link de Acceso Clientes</label>
                  <input type="text" class="form-control" v-model="el.customers_link" id="customers_link" />
                  <label
                    v-if="errors && errors.customers_link"
                    class="mt-2 text-danger text-sm"
                    for="customers_link"
                  >{{ errors.customers_link[0] }}</label>
                </div>
              </div>

                            <div class="col-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <label class="font-weight-bold" for="name_api">Footer Nombre Link API</label>
                  <input type="text" class="form-control" v-model="el.name_api" id="name_api" />
                  <label
                    v-if="errors && errors.name_api"
                    class="mt-2 text-danger text-sm"
                    for="name_api"
                  >{{ errors.name_api[0] }}</label>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <label class="font-weight-bold" for="api_link">Footer Link API</label>
                  <input type="text" class="form-control" v-model="el.api_link" id="api_link" />
                  <label
                    v-if="errors && errors.api_link"
                    class="mt-2 text-danger text-sm"
                    for="api_link"
                  >{{ errors.api_link[0] }}</label>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <label class="font-weight-bold" for="contact_number">Número de Contacto de Asesores</label>
                  <input type="number" class="form-control" v-model="el.contact_number" id="contact_number" />
                  <label
                    v-if="errors && errors.contact_number"
                    class="mt-2 text-danger text-sm"
                    for="contact_number"
                  >{{ errors.contact_number[0] }}</label>
                </div>
              </div>


              <div class="col-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <label class="font-weight-bold" for="book_link">Link Libro de Reclamaciones</label>
                  <input type="text" class="form-control" v-model="el.book_link" id="book_link" />
                  <label
                    v-if="errors && errors.book_link"
                    class="mt-2 text-danger text-sm"
                    for="book_link"
                  >{{ errors.book_link[0] }}</label>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <label class="font-weight-bold" for="book_link">Link Envio Cliente Número Tracking</label>
                  <input type="text" class="form-control" v-model="el.api_url_tracking" id="api_url_tracking" />
                  <label
                    v-if="errors && errors.api_url_tracking"
                    class="mt-2 text-danger text-sm"
                    for="api_url_tracking"
                  >{{ errors.api_url_tracking[0] }}</label>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <label class="font-weight-bold" for="book_link">Link de Servicios al Cliente</label>
                  <input type="text" class="form-control" v-model="el.customer_service_link" id="customer_service_link" />
                  <label
                    v-if="errors && errors.customer_service_link"
                    class="mt-2 text-danger text-sm"
                    for="customer_service_link"
                  >{{ errors.customer_service_link[0] }}</label>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <label class="font-weight-bold" for="link_work_with_us">Footer Link Únete a nuestro equipo</label>
                  <input type="text" class="form-control" v-model="el.link_work_with_us" id="link_work_with_us" />
                  <label
                    v-if="errors && errors.link_work_with_us"
                    class="mt-2 text-danger text-sm"
                    for="link_work_with_us"
                  >{{ errors.link_work_with_us[0] }}</label>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-4">
                    <div class="form-group">
                    <label class="font-weight-bold" for="book_link">Imagen de Servicios al Cliente</label>
                      <small class="d-block mb-0 lh-1"
                        >Resolución recomendada: 54×54px</small
                      >
                      <small class="d-block mb-0 lh-1">Formato: JPG</small>
                      <small class="d-block mb-1 lh-1"
                        >Tamaño recomendado: No mayor a 5KB</small
                      >
                      <div v-if="el.customer_service_img">
                        <img
                          :src="imagesUrl + '/' + el.customer_service_img"
                          :alt="el.name"
                          height="54"
                          class="d-block mb-2 mx-auto"
                        />
                      </div>
                      <ImageForm
                        label="Imagen"
                        variable="customer_service_img_update"
                        :value.sync="el.customer_service_img_update"
                      ></ImageForm>
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
        direction: "",
        name_api: "",
        whatsapp_number: "",
        customers_link: "",
        api_link: "",
        customer_service_link: "",
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
      const fd = new FormData();
      
      if (this.el.direction) {
        fd.append("direction", this.el.direction);
      }

      if (this.el.whatsapp_number) {
        fd.append("whatsapp_number", this.el.whatsapp_number);
      }

      if (this.el.customers_link) {
        fd.append("customers_link", this.el.customers_link);
      }

      if (this.el.name_api) {
        fd.append("name_api", this.el.name_api);
      }

      if (this.el.api_link) {
        fd.append("api_link", this.el.api_link);
      }

      if (this.el.contact_number) {
        fd.append("contact_number", this.el.contact_number);
      }

      if (this.el.book_link) {
        fd.append("book_link", this.el.book_link);
      }

      if (this.el.api_url_tracking) {
        fd.append("api_url_tracking", this.el.api_url_tracking);
      }

      if (this.el.customer_service_link) {
        fd.append("customer_service_link", this.el.customer_service_link);
      }

      if (this.el.link_work_with_us) {
        fd.append("link_work_with_us", this.el.link_work_with_us);
      }
      
      if (this.el.customer_service_img_update) {
        fd.append("customer_service_img_update", this.el.customer_service_img_update);
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
        direction: "",
        name_api: "",
        whatsapp_number: "",
        customers_link: "",
        api_link: "",
        customer_service_link: "",
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

