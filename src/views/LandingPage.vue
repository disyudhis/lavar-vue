<template>
  <body>
    <div>
      <NavBar></NavBar>
    </div>
    <!-- Modal -->
    <div class="home">
      <Modal @close="toggleModal" :modalActive="modalActive">
        <div class="modal-content">
          <div class="md:mt-0 md:col-span-2 mx-32 mt-32">
            <form>
              <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-3 sm:col-span-3">
                      <div class="block">
                        <p class="text-yellow-300 mb-2"><b>Let us know,</b></p>
                        <div>
                          <label for="autocomplete" class="text-xxl font-bold text-gray-900">Dari mana asalmu?</label>
                          <div class="flex items-center">
                            <div class="relative w-full">
                              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                                </svg>
                              </div>
                              <input
                                v-model="formSelera.asal"
                                id="autocomplete"
                                type="text"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300"
                                placeholder="Tentukan asalmu"
                                required
                              />
                            </div>
                            <button
                              class="p-2.5 ml-2 text-sm font-medium text-white bg-yellow-300 rounded-lg border border-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-300 dark:hover:bg-yellow-300 dark:focus:ring-yellow-400"
                            >
                              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Pedas apa tidak -->
                  <div>
                    <label for="cuisine" class="block text-xxl font-bold text-gray-700"> Suka Pedas apa Tidak ? </label>
                    <Category v-model:checked="formSelera.checkedCategories" :datalist="formSelera.categories"></Category>
                    <p class="mt-2 text-sm text-gray-500">Bisa pilih beberapa.</p>
                  </div>
                  <!-- Penutup Pedas -->

                  <!-- Lokasimu sekarang -->
                  <div>
                    <label for="autocomplete" class="text-xxl font-bold text-gray-900">Berada di kota mana kamu sekarang?</label>
                    <div class="flex items-center">
                      <div class="relative w-full">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                          </svg>
                        </div>
                        <input
                          v-model="formSelera.address"
                          id="autocomplete"
                          type="text"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300"
                          placeholder="Kota sekarang"
                          required
                        />
                      </div>
                      <button
                        class="p-2.5 ml-2 text-sm font-medium text-white bg-yellow-300 rounded-lg border border-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-300 dark:hover:bg-yellow-300 dark:focus:ring-yellow-400"
                      >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <!-- Form Bio -->
                  <!-- End Bio -->
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    @click="addSelera"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>

    <!-- Main -->
    <div class="my-32 md:mt-32">
      <main class="mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <h1 class="text-4xl tracking-tight font-extrabold text-yellow-400 sm:text-5xl md:text-6xl">
            <span class="block xl:inline">Cari</span>
            {{ " " }}
            <span class="block text-zinc-900 xl:block">Sesuai Seleramu</span>
          </h1>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Pesan makanan-mu tanpa ragu oleh ekspetasimu!</p>
          <div class="mt-5 sm:mt-8 flex justify-center items-center md:mx-auto sm:flex sm:justify-center lg:justify-start">
            <div>
              <button @click="toggleModal" class="w-40 md:w-full flex items-center mx-2 my-auto justify-center py-4 shadow-lg text-base font-medium rounded-md text-white bg-zinc-900 hover:bg-yellow-300 md:py-4 md:text-lg md:px-10">
                Cari Seleramu!
              </button>
            </div>
            <div class="sm:mt-0 sm:ml-3">
              <a
                href="#"
                class="w-40 md:w-full flex items-center mx-2 my-auto justify-center px-8 py-4 bg-white shadow-lg text-base font-medium rounded-md text-zinc-900 hover:bg-yellow-300 hover:text-white hover:border-transparent md:py-4 md:text-lg md:px-10"
              >
                Live demo
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
    <!-- Main -->

    <div class="mt-48">
      <Footer></Footer>
    </div>
  </body>
</template>

<style lang="scss" scoped>
body {
  background-image: url(../assets/landing-page.png);
  height: 100vh;
  background-size: cover;
}
.home {
  .modal-content {
    display: flex;
    flex-direction: column;
  }

  h1,
  p {
    margin-bottom: 16px;
  }

  h1 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
  }
}
</style>

<script>
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
import Modal from "../components/Modal.vue";
import { getFirestore, query, collection, getDocs, addDoc } from "@firebase/firestore";
import { ref } from "vue";
import { getAuth } from "@firebase/auth";
import Category from "../components/Category.vue";
export default {
  name: "Landing Page",
  components: {
    Footer,
    NavBar,
    Modal,
    Category,
  },
  setup() {
    const modalActive = ref(false);

    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };

    return { modalActive, toggleModal };
  },
  data() {
    return {
      selera: [],
      formSelera: {
        checkedCategories: [],
        categories: [],
        asal: "",
        address: "",
      },
    };
  },
  created() {
    this.getSelera();
    this.getCategories();
  },

  methods: {
    getSelera() {
      let q;
      const db = getFirestore(this.$firebase);
      q = query(collection(db, "cariselera"));
      getDocs(q)
        .then((document) => {
          this.selera.length = 0;
          document.forEach((document) => {
            this.selera.push({
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

    addSelera() {
      if (this.formSelera.address && this.formSelera.checkedCategories && this.formSelera.asal) {
        const db = getFirestore(this.$firebase);
        const dataSelera = {
          user: getAuth().currentUser.displayName,
          user_id: getAuth().currentUser.uid,
          asal: this.formSelera.asal,
          alamat: this.formSelera.address,
          categories: this.formSelera.checkedCategories,
        };
        addDoc(collection(db, "cariselera"), dataSelera)
          .then(() => {
            this.$router.push({ path: "/daftar-makanan" });
            this.$toast.success("Sukses mengisi data", {
              type: "success",
              position: "top-right",
              dismissible: true,
            });
            this.getSelera();
            this.formSelera.asal = "";
            this.formSelera.address = "";
            this.formSelera.checkedCategories = "";
          })
          .catch((error) => {
            alert(error.message);
          });
      } else {
        this.$toast.error("Form harus diisi", {
          type: "error",
          position: "top-right",
          dismissible: true,
        });
      }
    },

    getCategories() {
      let q;
      const db = getFirestore(this.$firebase);
      q = query(collection(db, "categories"));
      getDocs(q)
        .then((document) => {
          this.formSelera.categories.length = 0;
          document.forEach((document) => {
            this.formSelera.categories.push({
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
  },
};
</script>
