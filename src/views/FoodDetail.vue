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
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-5 mx-auto">
        <div class="lg:w-5/6 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 bg-white rounded-lg shadow-lg p-5 mr-2">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">{{ product.restoran }}</h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">{{ product.nama }}</h1>

            <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
              <ul class="flex flex-wrap -mb-px">
                <li class="mr-2">
                  <a href="#" class="inline-block p-4 rounded-t-lg border-b-2 text-yellow-300 border-yellow-300 hover:text-gray-600 hover:border-gray-300">Description</a>
                </li>
              </ul>
            </div>

            <p class="leading-relaxed mb-4">
              {{ product.deskripsi }}
            </p>

            <div v-on:submit.prevent class="flex border-t mb-2 border-gray-200 py-2">
              <span class="text-gray-500">Quantity</span>
              <span class="ml-auto text-gray-900 text-right justify-end items-end">
                <input
                  v-model="pesan.jumlah_pesanan"
                  type="number"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleNumber0"
                />
              </span>
            </div>
            <div v-on:submit.prevent class="flex border-t border-b mb-6 border-gray-200 py-2">
              <span class="text-gray-500">Keterangan</span>
              <span class="ml-auto text-gray-900">
                <textarea
                  v-model="pesan.keterangan"
                  id="message"
                  rows="2"
                  class="block p-2.5 w-72 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-300 focus:border-yellow-300"
                  placeholder="Pake sambel apa tidak?.."
                ></textarea>
              </span>
            </div>
            <div class="flex">
              <span class="title-font font-medium text-2xl text-gray-900"
                ><h2>Rp. {{ product.harga }}</h2></span
              >
              <button @click="addPesanan" class="flex ml-auto text-white bg-yellow-300 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded">Pesan</button>
              <!-- <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button> -->
            </div>
          </div>
          <img alt="product gambar" class="lg:w-2/5 w-full lg:h-auto h-64 object-cover object-center rounded" :src="'../assets/images/' + product.gambar" />
        </div>
      </div>
    </section>

    <div>
      <Footer></Footer>
    </div>
  </body>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import FoodDetailCard from "../components/FoodDetailCard.vue";
import Footer from "../components/Footer.vue";
import { getFirestore, doc, getDoc, query, collection, getDocs, addDoc } from "@firebase/firestore";
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
      pesan: {
        jumlah_pesanan: "",
        keterangan: "",
      },
      pesanan: [],
    };
  },

  created() {
    this.getProduct();
    this.getKeranjangs();
  },

  methods: {
    getProduct() {
      const productId = this.$route.params.id;
      const db = getFirestore(this.$firebase);
      const documentRef = doc(db, "products", productId);
      getDoc(documentRef)
        .then((document) => {
          this.product = {
            ...document.data(),
            id: document.id,
          };
        })
        .catch((error) => {
          alert(error.message);
        });
    },

    getKeranjangs() {
      let q;
      const db = getFirestore(this.$firebase);
      q = query(collection(db, "keranjangs"));
      getDocs(q)
        .then((document) => {
          this.pesanan.length = 0;
          document.forEach((document) => {
            this.pesanan.push({
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

    addPesanan() {
      if (this.pesan.jumlah_pesanan) {
        const db = getFirestore(this.$firebase);
        const dataPesanan = {
          products: this.product,
          jumlah_pesanan: this.pesan.jumlah_pesanan,
          keterangan: this.pesan.keterangan,
        };
        addDoc(collection(db, "keranjangs"), dataPesanan)
          .then(() => {
            this.$router.push({ path: "/keranjang" });
            this.$toast.success("Berhasil dimasukkan ke keranjang", {
              type: "success",
              position: "top-right",
              dismissible: true,
            });
            this.getKeranjangs();
            this.pesan.jumlah_pesanan = "";
            this.pesan.keterangan = "";
          })
          .catch((error) => {
            alert(error.message);
          });
      } else {
        this.$toast.error("Jumlah pesanan harus diisi", {
          type: "error",
          position: "top-right",
          dismissible: true,
        });
      }
    },
  },
};
</script>

<style>
body {
  background: #f4ece1;
  height: 100%;
}
</style>
