<template>
  <body>
    <div>
      <NavBar :updateKeranjang="keranjangs"></NavBar>
    </div>
    <!-- BreadCrumb -->
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
              <span class="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">Keranjang</span>
            </div>
          </li>
        </ol>
      </nav>
    </div>

    <!-- Keranjang -->
    <div class="flex overflow-x-auto items-center justify-center rounded-lg mx-auto">
      <table class="w-5/6 shadow-md rounded-lg text-sm text-center text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-200">
          <tr>
            <th scope="col" class="px-6 py-3">#</th>
            <th scope="col" class="px-6 py-3">Foto</th>
            <th scope="col" class="px-6 py-3">Nama Makanan</th>
            <th scope="col" class="px-6 py-3">Quantity</th>
            <th scope="col" class="px-6 py-3">Keterangan</th>
            <th scope="col" class="px-6 py-3">Harga</th>
            <th scope="col" class="px-6 py-3">Total Harga</th>
            <th scope="col" class="px-6 py-3">Hapus</th>
          </tr>
        </thead>
        <tbody class="rounded-lg shadow-sm">
          <tr v-for="(keranjang, index) in keranjangs" :key="keranjang.id" class="bg-white border-b rounded-lg hover:bg-gray-50">
            <th class="px-6 py-4">{{ index + 1 }}</th>
            <td class="px-6 py-4 font-medium text-gray-900 w-1/4"><img :src="'../assets/images/' + keranjang.products.gambar" class="rounded-lg shadow-md" /></td>
            <td class="px-6 py-4">
              <strong>{{ keranjang.products.nama }}</strong>
            </td>
            <td class="px-6 py-4">{{ keranjang.jumlah_pesanan }}</td>
            <td class="px-6 py-4">{{ keranjang.keterangan ? keranjang.keterangan : "-" }}</td>
            <td class="px-6 py-4 text-md">Rp.{{ keranjang.products.harga }}</td>
            <td class="px-6 py-4 text-md">
              <b>Rp.{{ keranjang.products.harga * keranjang.jumlah_pesanan }}</b>
            </td>
            <td class="px-6 py-4 pl-14 text-center items-center justify-center">
              <svg @click="hapusKeranjang(keranjang.id)" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </td>
          </tr>
          <tr class="bg-gray-50 rounded-lg">
            <td class="col-span-6"></td>
            <td class="col-span-6"></td>
            <td class="col-span-6"></td>
            <td class="col-span-6"></td>
            <td class="col-span-6"></td>
            <td class="col-span-6"></td>
            <td class="w-40 px-6 py-4"><strong>Total Harga :</strong></td>
            <td class="col-span-6 w-40 items-center justify-center">
              <strong>Rp. {{ totalHarga }}</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Form Checkout -->
    <div class="w-5/6 items-center justify-center mx-auto mt-5 mb-2">
      <form class="bg-white rounded-lg shadow-lg p-5" v-on:submit.prevent>
        <h2 class="text-3xl mb-2">Check<strong>out</strong></h2>

        <div class="grid xl:grid-cols-2 xl:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              v-model="pesan.nama"
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
            />
            <label
              for="floating_first_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Name</label
            >
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              v-model="pesan.alamat"
              type="text"
              name="floating_alamat"
              id="floating_alamat"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
            />
            <label
              for="floating_alamat"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Alamat</label
            >
          </div>
        </div>
        <div class="grid xl:grid-cols-2 xl:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              v-model="pesan.noTelp"
              type="tel"
              name="floating_phone"
              id="floating_phone"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
            />
            <label
              for="floating_phone"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Phone number</label
            >
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <label for="underline_select" class="sr-only">Underline select</label>
            <select
              v-model="pesan.pembayaran"
              id="underline_select"
              class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected>Metode Pembayaran</option>
              <option value="cash">Cash</option>
              <option value="cashless">Cashless</option>
            </select>
          </div>
          <button @click="checkout" type="submit" class="text-white bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 px-5 py-2.5 text-center">Checkout</button>
        </div>
      </form>
    </div>

    <div>
      <Footer></Footer>
    </div>
  </body>
</template>

<script>
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";

import axios from "axios";

export default {
  name: "Keranjang",
  components: { Footer, NavBar },
  data() {
    return {
      keranjangs: [],
      pesan: {
        id: 1,
      },
    };
  },
  methods: {
    setKeranjangs(data) {
      this.keranjangs = data;
    },
    hapusKeranjang(id) {
      axios
        .delete("http://localhost:3009/keranjangs/" + id)
        .then(() => {
          this.$toast.error("Sukses Hapus Keranjang", {
            type: "error",
            position: "top-right",
            dismissible: true,
          });
          // Update data keranjang
          axios
            .get("http://localhost:3009/keranjangs")
            .then((response) => this.setKeranjangs(response.data))
            .catch((error) => console.log(error));
        })
        .catch((error) => {
          console.log(error);
        });
    },
    checkout() {
      if (this.pesan.nama && this.pesan.alamat && this.pesan.noTelp && this.pesan.pembayaran) {
        this.pesan.keranjangs = this.keranjangs;
        axios
          .post("http://localhost:3009/pesanans", this.pesan)
          .then(() => {
            // Hapus Keranjang
            this.keranjangs.map(function (item) {
              return axios.delete("http://localhost:3009/keranjangs/" + item.id).catch((error) => console.log(error));
            });
            this.$router.push({ path: "/pesanan-sukses" });
            this.$toast.success("Sukses dipesan", {
              type: "success",
              position: "top-right",
              dismissible: true,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.$toast.error("Form harus diisi", {
          type: "error",
          position: "top-right",
          dismissible: true,
        });
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3009/keranjangs")
      .then((response) => {
        this.setKeranjangs(response.data);
      })
      .catch((error) => {
        console.log("Gagal : ", error);
      });
  },
  computed: {
    totalHarga() {
      return this.keranjangs.reduce(function (items, data) {
        return items + data.products.harga * data.jumlah_pesanan;
      }, 0);
    },
  },
};
</script>

<style>
body {
  background: #f4ece1;
  height: 100%;
  /* background-size: cover; */
}
</style>
