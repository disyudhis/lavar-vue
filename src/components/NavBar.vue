<template>
  <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src="../assets/WhatsApp_Image_2022-04-08_at_1.53.57_PM-removebg-preview.png" alt="" class="w-10 h-10" />
        <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg> -->
        <!-- <span class="ml-3 text-xl">Tailblocks</span> -->
      </a>
      <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
        <a class="mr-5 hover:text-gray-900"><router-link to="/">Home</router-link> </a>
        <a class="mr-5 hover:text-gray-900"><router-link to="/cari-seleramu">Cari Seleramu</router-link> </a>
        <a class="mr-5 hover:text-gray-900"><router-link to="/daftar-makanan">Daftar Makanan</router-link> </a>
        <router-link to="/reviewer" class="mr-5 hover:text-gray-900">Reviewer</router-link>
      </nav>
      <div class="flex justify-center">
        <router-link to="/keranjang" class="relative text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </router-link>
        <span class="bg-yellow-300 ml-2 text-white justify-center text-center items-center text-xs font-semibold mr-2 px-2.5 py-1 rounded">{{ updateKeranjang ? updateKeranjang.length : jumlah_pesanans.length }}</span>
      </div>
      <div v-if="isLogin" class="block justify-center items-center px-5 md:flex">
        <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full cursor-pointer dark:bg-gray-600" id="avatar" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start">
          <a>
            <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
            </svg>
          </a>

          <!-- Dropdown menu -->
          <!-- <div id="userDropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div>Bonnie Green</div>
              <div class="font-medium truncate">name@flowbite.com</div>
            </div>
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
              </li>
            </ul>
            <div class="py-1">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
            </div>
          </div> -->
        </div>
        <div class="px-2">
          <button class="bg-yellow-300 rounded-full shadow-md text-sm px-2 py-1 text-white hover:bg-yellow-400" @click.prevent="doLogout">Logout</button>
        </div>
      </div>

      <div v-else>
        <router-link to="/login" class="bg-yellow-300 rounded-full shadow-md text-sm px-2 py-1 text-white hover:bg-yellow-400">Login</router-link>
      </div>
    </div>
  </header>
</template>

<script>
// import { onBeforeMount } from "vue";
// import { useStore } from "vuex";
import axios from "axios";
import { getAuth } from "@firebase/auth";
export default {
  name: "NavBar",
  data() {
    return {
      jumlah_pesanans: [],
      isLogin: false,
      user: {},
    };
  },
  created() {
    const user = getAuth().currentUser;
    if (user !== null) {
      this.isLogin = true;
      this.user = user;
    }
  },
  props: ["updateKeranjang"],
  methods: {
    setJumlah(data) {
      this.jumlah_pesanans = data;
    },
    doLogout() {
      getAuth()
        .signOut()
        .then(() => {
          window.location.reload();
        })
        .catch((err) => alert(err.message));
    },
  },
  mounted() {
    axios
      .get("http://localhost:3009/keranjangs")
      .then((response) => this.setJumlah(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
