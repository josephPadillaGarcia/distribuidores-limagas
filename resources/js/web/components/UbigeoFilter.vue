<template>
  <div>
    <form @submit.prevent="submit" action="">
      <div class="select">
        <span class="flaticon flaticon-marcador-de-posicion"></span>
        <select id="department" name="department" v-model="department" class="">
          <option value="" disabled>Departamento</option>
          <option
            v-for="el in departments"
            :key="'dep' + el.code_department"
            :value="el.department"
          >
            {{ el.department }}
          </option>
        </select>
      </div>
      <div class="select">
        <span class="flaticon flaticon-marcador-de-posicion"></span>
        <select
          id="province"
          name="province"
          :disabled="department ? false : true"
          @change="getDis"
          v-model="province"
          class=""
        >
          <option value="" disabled>Provincia</option>
          <option
            v-for="el in provinces"
            :key="'dep' + el.code_province"
            :value="el.province"
          >
            {{ el.province }}
          </option>
        </select>
      </div>
      <div class="select">
        <span class="flaticon flaticon-marcador-de-posicion"></span>
        <select
          id="district"
          name="district"
          :disabled="province ? false : true"
          v-model="district"
          class=""
        >
          <option value="" disabled>Distrito</option>
          <option
            v-for="el in districts"
            :key="'dep' + el.code_district"
            :value="el.district"
          >
            {{ el.district }}
          </option>
        </select>
      </div>

      <!--div class="text-center">
        <button class="btn btn2">Buscar</button>
      </div-->

      <div
        :class="
          departmentParent || provinceParent || districtParent
            ? 'col-lg-2'
            : 'col-lg-3'
        "
      >

      
                <div class="text-center">
                    <button type="submit" class="btn btn2" @click="submit">{{ t("Buscar") }}</button>
                </div>
        <!--div class="text-center">
          <button type="submit" class="btn-dis btn2" @click="submit">
            {{ t("Buscar") }}
          </button>
        </div-->
      </div>
    </form>
  </div>
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
    routeListaDistribuidores: String,
    locale: {
      type: String,
    },
  },
  data() {
    return {
      department: this.departmentParent ? this.departmentParent : "",
      provinces: null,
      province: this.provinceParent ? this.provinceParent : "",
      district: this.districtParent ? this.districtParent : "",
      districts: null,
      requestSubmit: false,
      title: "",
      element: [],
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
          },
        })
        .then((response) => {
          this.provinces = response.data;
          if (!this.districtParent) {
            this.district = "";
          }
          if (!this.provinceParent) {
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
          },
        })
        .then((response) => {
          this.districts = response.data;
        });
    },
    submit() {
      //const fd = new FormData();
      /*var url = document.createElement('a');
      url.href = this.routeListaDistribuidores;*/

      if (this.department) {
        //fd.append("department", this.department);
        this.element.push(this.department);
      }

      if (this.province) {
        this.element.push(this.province);
      }

      if (this.district) {
        this.element.push(this.district);
      }

      document.location.href =
        this.routeListaDistribuidores +
        "?department=" +
        this.department +
        "&province=" +
        this.province +
        "&district=" +
        this.district;
    },
  },
  watch: {
    department: {
      immediate: true,
      handler: function (newValue) {
        if (newValue) {
          this.getPr();
        }
      },
    },
    province: {
      immediate: true,
      handler: function (newValue) {
        if (newValue) {
          this.getDis();
        }
      },
    },
  },
};
</script>