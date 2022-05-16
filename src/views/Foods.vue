<template>
  <body>
    <div>
      <NavBar></NavBar>
    </div>
    <div class="p-5 m-5 pb-20">
      <div class="items-center justify-center text-center mb-5 text-gray-900 text-3xl">
        <h1>Daftar <strong>Makanan</strong></h1>
      </div>

      <div class="mt-2 mb-2 items-center justify-center flex">
        <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li class="mr-2 px-10">
            <a href="#" class="inline-block py-2 px-4 bg-white shadow-lg border text-gray-900 border-transparent w-28 rounded-full active hover:text-white hover:bg-yellow-400 hover:border-transparent" aria-current="page">All</a>
          </li>
          <li class="mr-2 px-10">
            <a href="#" class="inline-block py-2 px-4 bg-white shadow-lg border text-gray-900 border-transparent w-28 rounded-full active hover:text-white hover:bg-yellow-400 hover:border-transparent">Breakfast</a>
          </li>
          <li class="mr-2 px-10">
            <a href="#" class="inline-block py-2 px-4 bg-white shadow-lg border text-gray-900 border-transparent w-full rounded-full active hover:text-white hover:bg-yellow-400 hover:border-transparent">Special Food</a>
          </li>
          <li class="mr-2 px-10">
            <a href="#" class="inline-block py-2 px-4 bg-white shadow-lg border text-gray-900 border-transaparent w-28 rounded-full active hover:text-white hover:bg-yellow-400 hover:border-transparent">Drinks</a>
          </li>
        </ul>
      </div>
      <form>
        <div>
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
          <div class="relative w-3/3 items-center justify-center mx-auto my-5">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              v-model="search"
              type="search"
              id="default-search"
              class="block p-4 pl-10 w-full text-sm text-gray-900 bg-white shadow-lg rounded-lg border border-transparent focus:ring-yellow-300 focus:border-yellow-300"
              placeholder="Search "
              required
              @keyup="searchFood"
            />
            <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-yellow-300 hover:bg-yellow-200 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">Search</button>
          </div>
        </div>
      </form>
      <div class="text-gray-900 text-2xl mb-2">
        <h2>
          All <strong><b>Products</b></strong>
        </h2>
      </div>
      <div class="flex mt-5 h-screen">
        <app-list>
          <div v-for="product in products" :key="product.id">
            <CardsProduct :product="product" class="mt-2"></CardsProduct>
          </div>
          <div class="bg-cover lg:block lg:w-52">
            <div class="flex items-center h-full px-20"></div>
          </div>
        </app-list>
      </div>
    </div>
    <div>
      <!-- <Footer></Footer> -->
    </div>
  </body>
</template>

<style>
body {
  background-color: #f4ece1;
}
</style>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import SideBar from "../components/SideBar.vue";
import CardsProduct from "../components/CardsProduct.vue";
import axios from "axios";
import List from "../components/List.vue";

export default {
  name: "Foods",
  components: {
    NavBar,
    Footer,
    SideBar,
    CardsProduct,
    "app-list": List,
  },
  data() {
    return {
      products: [],
      search: "",
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
    searchFood() {
      axios
        .get("http://localhost:3009/products?q=" + this.search)
        .then((response) => {
          this.setProduct(response.data);
        })
        .catch((error) => {
          console.log("Gagal : ", error);
        });
    },
  },
  mounted() {
    axios
      .get("http://localhost:3009/products")
      .then((response) => {
        this.setProduct(response.data);
      })
      .catch((error) => {
        console.log("Gagal : ", error);
      });
  },
};
</script>
