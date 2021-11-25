<template>
  <div class="form-group">
    <!--<div class="d-flex">
      <div
        class="d-inline-block ml-auto text-danger mt-1"
        v-if="countErrors"
      >{{ countErrors }} {{ countErrors > 1 ? 'Errores' : 'Error'}}</div>
    </div>-->
    <div class="">
        <label class="font-weight-bold" :for="label+random">{{ label }}:</label>
    </div>
    <div>
      <div class="row">
        <div class="col" v-if="valueParent">
          <img style="max-width: 50%;" :src="imagesUrl + '/'+folder+'/'+ value" alt="" class="d-block img-fluid mx-auto">
        </div>
        <div class="col">
          <vue-dropzone
            class
            ref="ref_image"
            :id="label+random"
            :options="dropzoneOptions"
            :duplicateCheck="true"
            :useCustomSlot="true"
            @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_image.dropzone,1,310000,'300kb')"
            @vdropzone-files-added="handleAddedFiles($event)"
          >
            <div class="dropzone-custom-content">
              <h5
                class="dropzone-custom-title text-primary"
              >Suelte el archivo aquí o haga click para cargarlo.</h5>
            </div>
          </vue-dropzone>
        </div>
      </div>
    </div>
    <div v-for="(el,i) in errors" :key="i">
      <label class="text-danger text-sm d-block mt-2" v-if="i == variable">{{ el[0] }}</label>
    </div>
  </div>
</template>
<script>
import vue2Dropzone from "vue2-dropzone";
export default {
  props: {
    label: String,
    folder: String,
    variable: String,
    errors: Object,
    valueParent: null,
    imagesUrl: String
  },
  components: {
    vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      value: "",
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg",
        autoProcessQueue: false,
        thumbnailWidth: 400,
        addRemoveLinks: true,
      },
      random: Math.ceil(Math.random() * 10),
    };
  },
  methods: {
    toggle(lang) {
      this.active = lang;
    },
    handleAddedFiles(e){
      setTimeout(() => {
        //console.log(this.$refs.ref_image.dropzone.files[0]);
        this.$emit("update:value", this.$refs.ref_image.dropzone.files[0]);
      }, 500);
    }
  },
  watch: {
    valueParent: {
      immediate: true,
      handler: function (newValue) {
        if(newValue instanceof File){
        }
        else{
          this.value = newValue;
        }
      }
    }
  },
  computed: {
    countErrors: function () {
      if (Object.keys(this.errors).length) {
        let total = 0;
        for (const el in this.errors) {
          if (el == this.variable) {
            total++;
          }
        }
        return total;
      }
    },
  },
};
</script>
