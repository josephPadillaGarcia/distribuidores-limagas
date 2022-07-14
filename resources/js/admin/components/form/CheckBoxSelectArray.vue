<template>
  <div>
    <div class="app">
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
      <div class="">
        {{ this.methodsget }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    allitems: Array,
    methodsget: {
      type: String,
      default: false
    }
  },
  data() {
    return {
      selectitems: [],
    };
  },
  watch: {
    selectitems: function () {
      this.$emit("arrayitems", this.selectitems);
    },
  },
};
</script>
