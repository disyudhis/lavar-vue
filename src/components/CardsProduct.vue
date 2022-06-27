<template>
  <div class="max-w-lg mx-4 my-3 bg-white rounded-lg shadow-md">
    <a href="#">
      <img class="w-full max-h-28 rounded-t-lg object-cover object-center" :src="'assets/images/' + product.data.gambar" alt="product image" />
    </a>
    <div class="px-5 py-5">
      <a href="#">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ product.data.nama }}</h5>
        <span class="text-sm font-thin text-gray-400">{{ product.data.restoran }}</span>
      </a>
      <div class="my-2">
        <span class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900" v-for="kategori in product.data.kategori" :key="kategori.id">{{ kategori.nama }}</span>
      </div>
      <div class="flex justify-between items-center mb-2">
        <span class="text-lg font-bold text-gray-900 dark:text-white"
          ><h2>Rp. {{ product.data.harga }}</h2></span
        >
      </div>
      <button
        @click="$router.push({ path: `/daftar-makanan/${product.id}` })"
        class="text-white items-center justify-between inline-flex bg-yellow-400 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Pesan
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardsProduct",
  props: ["product"],
};
</script>
