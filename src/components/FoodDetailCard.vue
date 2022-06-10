<template>
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
              <li class="mr-2">
                <a href="#" class="inline-block p-4 rounded-t-lg border-b-2 border-transparent active" aria-current="page">Reviews</a>
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
            <!-- <button @click="count--" class="ml-auto bg-yellow-300 w-4 text-white shadow-sm rounded-sm px-1 items-center justify-center flex">-</button>
            <span @click="count++" class="ml-2 text-gray-900">{{ count }}</span>
            <button class="ml-2 w-4 bg-yellow-300 text-white shadow-sm rounded-sm px-1 items-center justify-center flex">+</button> -->
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
            <button @click="pesanan" class="flex ml-auto text-white bg-yellow-300 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded">Pesan</button>
            <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
              </svg>
            </button>
          </div>
        </div>
        <img alt="product gambar" class="lg:w-2/5 w-full lg:h-auto h-64 object-cover object-center rounded" :src="'../assets/images/' + product.gambar" />
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "FoodDetailCard",
  props: {
    product: {
      type: Object,
      default: () => {
        return {};
      },
    },
    pesan: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  methods: {
    pesanan() {
      if (this.pesan.jumlah_pesanan) {
        this.pesan.products = this.product;
        axios
          .post("http://localhost:3009/keranjangs", this.pesan)
          .then(() => {
            this.$router.push({ path: "/keranjang" });
            this.$toast.success("Berhasil dimasukkan ke Keranjang", {
              type: "success",
              position: "top-right",
              dismissible: true,
            });
          })
          .catch((error) => {
            console.log(error);
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
