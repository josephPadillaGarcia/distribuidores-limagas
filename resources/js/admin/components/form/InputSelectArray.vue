<template>
  <div>
    <div class="row mb-2" v-for="(el, i) in array.length" :key="'tr'+i">
      
      <div v-for="(el, j) in headers" :class="j == 0 ? 'col-8' : 'col-8'" :key="'td'+j">
        <label
          class="font-weight-bold"
          :for="el.variable"
        >{{ el.label.charAt(0).toUpperCase() + el.label.slice(1) }}</label>
        <input
          type="text"
          v-if="el.variable == 'name' || el.variable == 'number' || el.variable == 'numwhat'"
          class="form-control"
          :id="el.variable"
          v-model="array[i][el.variable]"
        />
        <!--<select :class="['form-control', hideDepartment ? 'd-none' : '']"  :id="el.variable" v-else v-model="array[i][el.variable]">-->
        <select :class="['form-control']" :id="el.variable" v-else v-model="array[i][el.variable]">
          <option
            :value="el2.code_department"
            v-for="(el2,i) in selectItems"
            :key="i"
          >{{ el2.department }}</option>
        </select>
        <label
          class="text-danger text-sm mt-2 d-block"
          v-if="errors && errors[fieldName+'.'+i+'.'+el.variable]"
        >{{ errors[fieldName+'.'+i+'.'+el.variable][0] }}</label>
      </div>


      <div class="mb-2 mt-2 mt-0 actions d-flex align-items-end col" v-if="!disableEdit">
        <button
          class="btn btn-sm btn-icon-only rounded-circle btn-inverse-primary"
          @click.prevent="addEl(i)"
          v-if="(array.length - 1) == i"
        >
          <i class="ri-add-line text-lg current-color" />
        </button>
        <button
          class="btn btn-sm btn-icon-only rounded-circle btn-inverse-danger"
          @click.prevent="deleteEl(i)"
          v-if="i != 0"
        >
          <i class="ri-delete-bin-line text-lg current-color" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    /*hideDepartment: {
      default: false,
      type: Boolean
    },*/
    disableEdit: {
      default: false,
      type: Boolean
    },
    fieldName: String,
    selectItems: Array,
    headers: Array,
    arrayProp: Array,
    errorsProp: Object
  },
  data() {
    return {
      arrayData: [{}],
      errorsData: {}
    };
  },
  methods: {
    restore() {
      this.arrayData = [{}];
    },
    addEl: function(i) {
      const isEmpty = Object.values(this.arrayData[i]).every(
        x => x === null || x === ""
      );
      if (isEmpty) {
        return;
      }
      this.arrayData.push({});
    },
    deleteEl: function(i) {
      this.arrayData.splice(i, 1);
    }
  },
  computed: {
    array: {
      get() {
        return this.arrayData;
      },
      set(value) {
        this.arrayData.push({});
        this.array.push({});
      }
    },
    errors: {
      get() {
        return this.errorsData;
      }
    }
  },
  watch: {
    array: {
      deep: true,
      handler(newValue, oldValue) {
        if (!newValue[newValue.length - 1]) {
          return;
        }
        this.$emit("update:array", newValue);
      }
    },
    errorsProp: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        this.errorsData = newValue;
      }
    },
    arrayProp: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        if (newValue && newValue.length > 0) {
          this.arrayData = newValue;
        }
      }
    }
  }
};
</script>
