<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb title="Configuración General" parent="Configuración" active="Configuración General"></BreadCrumb>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
       <ConfigQuantityPackages :routeGet="routeGetSchedules" :routeOrder="routeOrderSchedules" route="config-quantity-package" :messageOrder="messageOrder"></ConfigQuantityPackages>
    </div>
  </div>
</template>
<script>
import BreadCrumb from "../../../components/BreadCrumb";
import ConfigQuantityPackages from "./ConfigQuantityPackages";
export default {
  components: {
    BreadCrumb,
    ConfigQuantityPackages,
  },
  props: {
    messageOrder: String,
    routeGetSchedules: String,
    routeOrderSchedules: String,
  },
  data() {
    return{
      
    }
  },
  methods: {
  },
  created() {
  },
};
</script>
