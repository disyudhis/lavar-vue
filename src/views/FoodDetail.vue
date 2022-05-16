<template>
  <body>
    <div><NavBar></NavBar></div>
    <div>
      <nav class="flex py-3 px-5 items-center justify-center text-gray-700 rounded-lg border border-transparent dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <router-link to="/cari-seleramu" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Home
            </router-link>
          </li>
          <li>
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
              </svg>
              <router-link to="/daftar-makanan" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Daftar Makanan</router-link>
            </div>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">Detail Makanan</span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
    <div><FoodDetailCard :product="product"></FoodDetailCard></div>
    <div>
      <Footer></Footer>
    </div>
  </body>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import FoodDetailCard from "../components/FoodDetailCard.vue";
import axios from "axios";
import Footer from "../components/Footer.vue";
export default {
  name: "FoodDetail",
  components: {
    NavBar,
    FoodDetailCard,
    Footer,
  },
  data() {
    return {
      product: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
  },

  mounted() {
    axios
      .get("http://localhost:3009/products/" + this.$route.params.id)
      .then((response) => {
        this.setProduct(response.data);
      })
      .catch((error) => {
        console.log("Gagal : ", error);
      });
  },
};
</script>

<style>
body {
  background: #f4ece1;
  height: 100%;
}
</style>
