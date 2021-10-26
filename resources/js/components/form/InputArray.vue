<template>
  <div>
    <div v-for="(elemento, index) in arreglo.length" :key="index">
      <div class="row">
        <div class="col-10 col-lg-8">
          <input
            type="text"
            class="form-control mb-2 d-inline-block"
            v-model="arreglo[index]"
            @keydown.enter.prevent="agregarElemento"
          />
        </div>
        <div
          class="col-auto"
          style="
            justify-content: center;
            align-items: center;
            display: flex;
            margin-bottom: 10px;
          "
        >
          <button
            class="btn btn-sm btn-icon-only rounded-circle btn-inverse-primary"
            @click.prevent="agregarElemento(index)"
            v-if="arreglo.length - 1 == index"
          >
            <i class="ri-add-line current-color ri-lg" />
          </button>
          <button
            class="btn btn-sm btn-icon-only rounded-circle btn-inverse-danger"
            @click.prevent="eliminarElemento(index)"
            v-if="index != 0"
          >
            <i class="ri-delete-bin-line text-lg current-color" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    arregloEditar: Array,
  },
  data() {
    return {
      //arreglo: this.arregloEditar
      arregloData: [""],
    };
  },
  methods: {
    agregarElemento: function (index) {
      if (!this.arregloData[index]) {
        return;
      }
      this.arregloData.push("");
    },
    eliminarElemento: function (index) {
      this.arregloData.splice(index, 1);
    },
  },
  computed: {
    arreglo: {
      get() {
        if (this.arregloEditar) {
          return this.arregloEditar;
        } else {
          return this.arregloData;
        }
      },
      set(value) {
        this.arregloData.push("");
        this.arreglo.push("");
      },
    },
  },
  watch: {
    arreglo: function (newValue, oldValue) {
      if (!newValue[newValue.length - 1]) {
        return;
      }
      this.$emit("update:arreglo", newValue);
    },
    arregloEditar: function (newValue, oldValue) {
      this.arregloData = newValue;
    },
  },
};
</script>

