<template>
  <form @submit="search" class="col-lg-12">
    <div class="row">
      <div class="col-lg-3">
        <div class="grupo-form">
          <label for="">
            {{ t("Departamento") }}
          </label>
          <select
            id="department"
            name="department"
            v-model="department"
            class="form-select"
          >
            <option value="" disabled>--Seleccionar--</option>
            <option
              v-for="el in departments"
              :key="'dep' + el.code_department"
              :value="el.department"
            >
              {{ el.department }}
            </option>
          </select>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="grupo-form">
          <label for="">
            {{ t("Provincia") }}
          </label>
          <select id="province" name="province" :disabled="department ? false : true" @change="getDis" v-model="province" class="form-select">
            <option value="" disabled>--Seleccionar--</option>
            <option v-for="el in provinces"
              :key="'dep' + el.code_province"
              :value="el.province"
            >
              {{ el.province }}
            </option>
          </select>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="grupo-form">
          <label for="">
            {{ t("Distrito") }}
          </label>
          <select id="district" name="district" :disabled="province ? false : true"  v-model="district" class="form-select">
            <option value="" disabled>--Seleccionar--</option>
             <option v-for="el in districts"
              :key="'dep' + el.code_district"
              :value="el.district"
            >
              {{ el.district }}
            </option>
          </select>
        </div>
      </div>

      <div class="col-lg" v-if="departmentParent || provinceParent || districtParent">
          <a :href="this.routeSearch" >{{ t('Limpiar Filtros') }} </a>
      </div>


      <div :class="departmentParent || provinceParent || districtParent ? 'col-lg-2' : 'col-lg-3'">
        <div class="btn-form">
          <button type="submit" class="btn-form__main">{{ t('Filtrar') }} </button>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  props: {
    departmentParent: String,
    provinceParent: String,
    districtParent: String,
    departments: Array,
    routeGetProv: String,
    routeGetDis: String,
    routeSearch: String,
    locale: {
            type: String
        },
  },
  data() {
    return {
      department: this.departmentParent ? this.departmentParent : "",
      provinces: null,
      province: this.provinceParent ? this.provinceParent : "",
      district: this.districtParent ? this.districtParent : "",
      districts: null
    };
  },
  methods: {
    t(name) {
            return this.$t(name, this.locale);
        },
    getPr() {
      axios
        .get(this.routeGetProv, {
          params: {
          department: this.department,
        }
        })
        .then((response) => {
          this.provinces = response.data;
           if(!this.districtParent){
          this.district = "";
           }
          if(!this.provinceParent){
            this.province = "";
          }
          this.districts = null;
        });
    },
    getDis() {
      axios
        .get(this.routeGetDis, {
          params: {
          department: this.department,
          province: this.province,
        }
        })
        .then((response) => {
          this.districts = response.data;
        });
    },
    search(){

    }
  },
  watch: {
    department: {
      immediate: true,
      handler: function (newValue) {
        if(newValue){
          this.getPr()
        }
      },
    },
    province: {
      immediate: true,
      handler: function (newValue) {
        if(newValue){
          this.getDis()
        }
      },
    },
  }
  
};
</script>