<template>
  <div>
    <div class="app">
      <div v-for="sp in allproducts" :key="sp.id">
        <label>{{ sp.name }}</label>
        <input type="checkbox" v-model="selectproducts" :value="sp" />
      </div>

      <!--p>User's selected roels {{ selectproducts }}</p-->
      
    </div>
  </div>
</template>

<script>
export default {
  props:{
    allproducts: {
      type: Object
    }

  },
  data(){
    return{
      /*user: [],
      roles: [
        {
          id: 1,
          name: "Client",
        },
        {
          id: 2,
          name: "Admin",
        },
        {
          id: 3,
          name: "Guest",
        },
      ],*/
      selectproducts: [],
    }
  }
};
</script>
