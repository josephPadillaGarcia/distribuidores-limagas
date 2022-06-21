<template>
  <div>
    <div class="app">
      <div v-for="sp in allproducts" :key="sp.id">
        <label>{{ sp.name }}</label>
        <input type="checkbox" v-model="selectproducts" :value="sp" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    allproducts: Array,
  },
  data() {
    return {
      selectproducts: [],
    };
  },
  watch: {
    selectproducts: function(){
      this.$emit('arrayproducts', this.selectproducts)
    } 
  },
};
</script>
