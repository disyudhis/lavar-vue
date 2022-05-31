<template>
  <div class="rounded-md shadow inline-flex items-center justify-center px-2 py-1 mx-1 border border-transparent bg-red-300 md:m-2">
    <div class="flex items-center mr-4">
      <input
        type="checkbox"
        value=""
        class="w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        :id="category.id"
      />
      <label :for="category.id" class="ml-2 text-sm font-medium text-gray-900">{{ category.nama }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["category"],
};
</script>

<style></style>
