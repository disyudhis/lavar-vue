<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav class="bg-transparent border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <div class="branding">
          <router-link to="/" class="flex items-center">
            <img src="../assets/WhatsApp_Image_2022-04-08_at_1.53.57_PM-removebg-preview.png" class="mr-3 h-20 sm:h-20" alt="Flowbite Logo" />
          </router-link>
        </div>
        <div v-if="isLogin" class="menu-item flex items-center md:order-2">
          <button
            type="button"
            @click="toggleVisibility"
            class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="dropdown"
          >
            <img class="w-8 h-8 rounded-full" :src="photo" alt="user photo" />
          </button>

          <!-- Dropdown menu profile-->
          <div v-if="isVisible" class="absolute right-48 top-16 z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown">
            <div class="py-3 px-4">
              <span class="block text-sm text-gray-900 dark:text-white">{{ user }}</span>
              <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{{ email }}</span>
            </div>
            <ul class="py-1" aria-labelledby="dropdown">
              <li>
                <router-link to="/user-information" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Reviewer Profile</router-link>
              </li>
              <li>
                <a @click.prevent="doLogout" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
              </li>
            </ul>
          </div>
          <!-- End Menu Profile  -->

          <!-- Navbar Dropdown -->
          <div class="icon">
            <button
              @click="toggleMobileNav"
              v-show="mobile"
              :class="{ 'icon-active': mobileNav }"
              class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
              </svg>
              <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="hidden justify-end items-end w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
          <ul v-show="!mobile" class="navigation flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-normal">
            <li>
              <router-link
                to="/daftar-makanan"
                class="link block py-2 pr-4 pl-3 text-black md:hover:bg-transparent md:hover:text-yellow-300 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Daftar Makanan</router-link
              >
            </li>
            <li>
              <router-link
                to="/reviewer"
                class="link block py-2 pr-4 pl-3 text-gray-700 md:hover:bg-transparent md:hover:text-yellow-300 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Reviewer</router-link
              >
            </li>
            <div v-if="isLogin" class="flex justify-center items-center mx-3">
              <router-link to="/keranjang" class="link relative text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </router-link>
              <span class="bg-yellow-300 ml-2 text-white justify-center text-center items-center text-xs font-semibold mr-2 px-2.5 py-1 rounded">{{ updateKeranjang ? updateKeranjang.length : jumlah_pesanans.length }}</span>
            </div>
            <div v-else>
              <router-link to="/login" class="bg-yellow-300 rounded-full px-5 shadow-md text-lg py-1 text-white hover:bg-yellow-400">Login</router-link>
            </div>
          </ul>
        </div>
        <transition name="mobile-nav">
          <ul v-show="mobileNav" class="dropdown-nav flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-normal">
            <li>
              <router-link
                to="/daftar-makanan"
                class="link block py-2 pr-4 pl-3 text-black md:hover:bg-transparent md:hover:text-yellow-300 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Daftar Makanan</router-link
              >
            </li>
            <li>
              <router-link
                to="/reviewer"
                class="link block py-2 pr-4 pl-3 text-gray-700 md:hover:bg-transparent md:hover:text-yellow-300 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Reviewer</router-link
              >
            </li>
            <div v-if="isLogin" class="flex justify-center items-center mx-3">
              <router-link to="/keranjang" class="link relative text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </router-link>
              <span class="bg-yellow-300 ml-2 text-white justify-center text-center items-center text-xs font-semibold mr-2 px-2.5 py-1 rounded">{{ updateKeranjang ? updateKeranjang.length : jumlah_pesanans.length }}</span>
            </div>
            <div v-else>
              <router-link to="/login" class="bg-yellow-300 rounded-full px-5 shadow-md text-lg py-1 text-white hover:bg-yellow-400">Login</router-link>
            </div>
          </ul>
        </transition>
      </div>
    </nav>
  </header>
</template>

<script>
// import axios from "axios";
import { getAuth } from "@firebase/auth";
import Dropdown from "./Dropdown.vue";
import { collection, doc, getDocs, getFirestore, onSnapshot, query } from "@firebase/firestore";
import { onMounted } from "@vue/runtime-core";

export default {
  name: "NavBar",
  components: {
    Dropdown,
  },

  data() {
    return {
      jumlah_pesanans: [],
      isLogin: false,
      user: {},
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      isVisible: false,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
    const user = getAuth().currentUser;
    if (user !== null) {
      this.isLogin = true;
      this.user = user.displayName;
      this.photo = user.photoURL;
      this.email = user.email;
    }
    this.getKeranjang();
  },

  props: ["updateKeranjang"],
  methods: {
    getKeranjang() {
      let q;
      const db = getFirestore(this.$firebase);
      q = query(collection(db, "keranjangs"));
      getDocs(q)
        .then((document) => {
          this.jumlah_pesanans.length = 0;
          document.forEach((document) => {
            this.jumlah_pesanans.push({
              id: document.id,
              data: {
                ...document.data(),
              },
            });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },

    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
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
};
</script>

<style lang="scss" scoped>
header {
  z-index: 99;
  width: 100%;
  transition: 0.5s ease all;
  color: white;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 1140px) {
      max-width: 1140px;
    }
    nav .menu-item {
      color: black;
      padding: 10px 20px;
      position: relative;
      text-align: center;
      border-bottom: 3px solid transparent;
      display: flex;
      transition: 0.4s;
    }
    nav .menu-item.active,
    nav .menu-item:hover {
      background-color: #444;
      border-bottom-color: #ff5858;
    }
    nav .menu-item a {
      color: inherit;
      text-decoration: none;
    }

    ul,
    .link {
      font-weight: 500;
      color: black;
      list-style: none;
      text-decoration: none;
    }

    .link {
      font-size: 18px;
      transition: 0.5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;

      &:hover {
        color: rgba(247, 219, 12, 0.929);
        border-color: rgba(247, 219, 12, 0.929);
      }
    }

    .branding {
      display: flex;
      align-items: center;

      img {
        width: 100px;
        transition: 0.5s ease all;
      }
    }

    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
    }

    .icon {
      display: flex;
      align-items: center;
      position: flex;
      top: 0;
      right: 24px;
      height: 100%;

      i {
        cursor: pointer;
        font-size: 24px;
        transition: 0.8s ease all;
      }
    }

    .icon-active {
      transform: rotate(180deg);
    }

    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 250px;
      height: 100%;
      background-color: white;
      top: 0;
      left: 0;
      align-items: flex-start;
      margin: auto;

      li {
        margin-left: 0;
        padding: 2px;
        .link {
          color: black;
        }
      }
    }
  }
}

.scrolled-nav {
  background-color: black;
}
</style>
