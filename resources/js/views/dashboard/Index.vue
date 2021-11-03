<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-12">
              <BreadCrumb title="Dashboard" active="Dashboard"></BreadCrumb>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-12 mb-4 mb-lg-0">
          <div class="row mb-4">
            <div class="col-12">
              <h2>Resumen de Leads</h2>
            </div>
            <div class="col-12">
              <FilterDateRange
                :activeParent="filterDate.active"
                :active.sync="filterDate.active"
                :range.sync="filterDate.range"
                removeParent="all"
                @get="getStatisticsByDate()"
              />
            </div>
          </div>
          <!-- <b-tabs
            class="tab--dashboard"
            pills
            nav-wrapper-class="mb-4"
            lazy
            nav-class=""
            content-class=""
          >
            <b-tab
              title="Servicios"
              active
              title-link-class="border-0 pt-0 bg-transparent shadow-none"
              title-item-class="my-0"
            > -->
              <div class="card">
                <div class="card-body">
                  <skeleton height="300px" v-if="loadingByDate"></skeleton>
                  <div class="pt-4" v-else>
                    <ve-line
                      :data="charts.leadsQuotations"
                      :settings="chartSettings"
                      :colors="colors"
                      :loading="loadingByDate"
                    ></ve-line>
                  </div>
                </div>
              </div>
            <!-- </b-tab>
          </b-tabs> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "v-charts/lib/style.css";
import VeLine from "v-charts/lib/line.common";
import VeBar from "v-charts/lib/bar.common";
import BreadCrumb from "../../components/BreadCrumb";
import Loader from "../../components/Loader";
import { Skeleton } from "vue-loading-skeleton";
import simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";
import FilterDateRange from "../../components/filters/DateRange";
import NoData from "../../components/NoData";
/*import ChartBar from "../components/charts/Bar.js";
import ChartLine from "../components/charts/Line.js";*/
export default {
  props: {
    imagesUrl: String,
  },
  components: {
    //Footer,
    NoData,
    BreadCrumb,
    Loader,
    FilterDateRange,
    Skeleton,
    VeLine,
    simplebar,
    VeBar,
    /*ChartBar,
    ChartLine*/
  },
  data() {
    return {
      statistics: {},
      loading: false,
      loadingByDate: false,
      charts: {},
      filterDate: {
        active: { text: "Hoy", value: "today" },
        range: null,
      },
      colors: ["#1762e6", "#44CCF2", "#0728FA", "#060726", "#254B85"],
      /*chartSettings: {
        yAxisType: ["normal"],
        //area: true,
      },*/
      /*chartExtend: {
        series: {
          //smooth: true,
          type: "bar",
        },
      },*/

      chartSettings: {
        //yAxisType: ["normal"],
        area: true,
      },
      chartExtendBar: {
        series: {
          //smooth: true,
          type: "bar",
        },
      },
    };
  },
  methods: {
    getStatisticsByDate() {
      this.loadingByDate = true;
      axios
        .get("json/dashboard-by-date", {
          params: {
            date: this.filterDate.active.value,
            ...(this.filterDate.range ? { range: this.filterDate.range } : {}),
          },
        })
        .then((response) => {
          this.charts = response.data;
          this.loadingByDate = false;
        })
        .catch((error) => {});
    },
    getStatistics() {
      this.loading = true;
      axios
        .get("json/dashboard")
        .then((response) => {
          this.statistics = response.data;
          this.loading = false;
        })
        .catch((error) => {});
    },
  },
  created() {
    // this.getStatistics();
    this.getStatisticsByDate();
  },
};
</script>
<style lang="scss">
.tab--dashboard {
  .nav-pills {
    border-bottom: 1px solid #e9ecef;
  }
  .nav-link.active {
    border-bottom: 2px solid #1762e6 !important;
  }
}
</style>