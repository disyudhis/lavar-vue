<template>
  <body>
    <div>
      <NavBar></NavBar>
    </div>
    <div class="p-5 m-5 pb-20">
      <div class="items-center justify-center text-center mb-5 text-gray-900 text-3xl">
        <h1>Daftar <strong>Makanan</strong></h1>
      </div>

      <!-- <form @click.prevent>
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
              id="search"
              class="block p-4 pl-10 w-full text-sm text-gray-900 bg-white shadow-lg rounded-lg border border-transparent focus:ring-yellow-300 focus:border-yellow-300"
              placeholder="Search "
              required
            />
            <button @click="searchFood" class="text-white absolute right-2.5 bottom-2.5 bg-yellow-300 hover:bg-yellow-200 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">Search</button>
          </div>
        </div>
      </form> -->
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
        </app-list>
      </div>
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
import CardsProduct from "../components/CardsProduct.vue";
import List from "../components/List.vue";
import { getFirestore, query, getDocs, collection, orderBy, startAt, endAt } from "@firebase/firestore";

export default {
  name: "Foods",
  components: {
    NavBar,
    CardsProduct,
    "app-list": List,
  },
  data() {
    return {
      products: [],
      search: "",
    };
  },
  created() {
    this.getProducts();
  },

  methods: {
    getProducts() {
      let q;
      const db = getFirestore(this.$firebase);
      q = query(collection(db, "products"));
      getDocs(q)
        .then((document) => {
          this.products.length = 0;
          document.forEach((document) => {
            this.products.push({
              id: document.id,
              data: {
                ...document.data(),
              },
            });
          });
        })
        .catch((error) => {
          alert(error.message);
        });
    },

    // searchFood() {
    //   let q;
    //   const db = getFirestore(this.$firebase);
    //   const ref = collection(db, "products");
    //   q = query(ref, orderBy("nama"), startAt(this.search), endAt(this.search));
    //   getDocs(q).then((document) => {
    //     this.products.length = 0;
    //     document.forEach((document) => {
    //       console.log(document.data);
    // this.products.push({
    //   id: document.id,
    //   data: {
    //     ...document.data(),
    //   },
    // });
    // });
    // })

    // }
  },
};
</script>
