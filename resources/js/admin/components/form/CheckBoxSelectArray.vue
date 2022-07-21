<template>
  <div>
    <div class="app">
      <div v-if="title == 'Nuevo'">
        <div v-for="sp in allitems" :key="sp.id">
          <div v-if="sp.name">
            <label>{{ sp.name }}</label>
            <input type="checkbox" v-model="selectitems" :value="sp['id']"/>
          </div>
          <div v-else-if="sp.method">
            <label>{{ sp.method }}</label>
            <input type="checkbox" v-model="selectitems" :value="sp"/>
          </div>
        </div>
      </div>

      <div v-if="title == 'Actualizar'">
        <div v-for="sp in allitems" :key="sp.id">
          <div v-if="sp.name">
            <label>{{ sp.name }}</label>
            <input type="checkbox" v-model="selectitems" :value="sp" checked/>
          </div>
          <div v-else-if="sp.method">
            <label>{{ sp.method }}</label>
            <input type="checkbox" v-model="selectitems" :value="sp" checked/>
          </div>
        </div>
      </div>

      <pre>{{ selectitems }}</pre>
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
      if(this.methodsget){
        this.selectitems = this.methodsget;
      }
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
