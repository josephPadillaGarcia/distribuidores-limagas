<template>
  <div>
    <div class="app">
      <div class="" v-if="title == 'Nuevo'">
        <div v-for="sp in allitems" :key="sp.id">
          <div v-if="sp.name">
            <label>{{ sp.name }}</label>
            <input type="checkbox" v-model="selectitems" :value="sp" />
          </div>
          <div v-else-if="sp.method">
            <label>{{ sp.method }}</label>
            <input type="checkbox" v-model="selectitems" :value="sp" />
          </div>
        </div>
      </div>

      <div v-if="title == 'Actualizar' && head == 'pago'">
        <div class="list-items">
          <span>Metodos de pago vigentes:</span>
          <div class="items">
            <div v-for="g in getitems" :key="g.id">
              <b>{{ g.method }}</b>
            </div>
          </div>
        </div>
        <div v-for="sp in allitems" :key="sp.name">
          <label>{{ sp.method }}</label>
          <input type="checkbox" v-model="selectitems" :value="sp" />
        </div>
      </div>

      <div v-if="title == 'Actualizar' && head == 'productos'">
        <div class="list-items">
          <span>Productos vigentes:</span>
          <div class="items">
            <div v-for="g in getitems" :key="g.id">
              <b>{{ g.name }} </b>
            </div>
          </div>
        </div>
        <div v-for="sp in allitems" :key="sp.name">
          <label>{{ sp.name }}</label>
          <input type="checkbox" v-model="selectitems" :value="sp" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    allitems: Array,
    methodsget: Array,
    title: String,
    head: String,
    ImageUrl: String,
  },
  data() {
    return {
      selectitems: [],
      getitems: [],
    };
  },
  methods: {
    addgetitems() {
      this.getitems = this.methodsget;
    },
  },
  watch: {
    selectitems: function () {
      this.$emit("arrayitems", this.selectitems);
    },
  },
  created() {
    this.addgetitems();
  },
};
</script>

<style scoped>
</style>
