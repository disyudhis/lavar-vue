<template>
  <div class="rounded-md shadow inline-flex items-center justify-center px-2 py-1 mx-1 border border-transparent bg-red-300 md:m-2" v-for="category in categories" :key="category.id">
    <div class="flex items-center mr-4">
      <input
        :id="category.id"
        :value="category"
        v-model="checkedCategories"
        type="checkbox"
        class="w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label :for="category.id" class="ml-2 text-sm font-normal text-gray-900 dark:text-gray-300">{{ category.data.nama }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: {
    checked: Array,
    datalist: Array,
  },
  emits: ["update:checked"],
  data() {
    return {
      all: [],
      checkedCategories: [],
    };
  },
  computed: {
    categories() {
      this.all = this.datalist;
      return this.all;
    },
  },
  watch: {
    checkedCategories: {
      handler(newVal) {
        this.$emit("update:checked", newVal);
      },
      deep: true,
    },
  },
};
</script>

<style></style>
