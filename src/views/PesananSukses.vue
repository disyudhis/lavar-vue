<template>
  <body class="justify-center items-center">
    <!-- <div><NavBar></NavBar></div> -->
    <div class="my-auto mt-36 justify-center items-center">
      <img src="../assets/undraw_reviews_lp8w.svg" alt="" width="300" class="relative mx-auto items-center justify-center text-center" />
      <div class="text-center justify-center items-center mx-auto objects-center mt-5 space-y-5">
        <h1 class="text-3xl"><strong>Pesanan Sukses!!</strong></h1>
        <h4>Pesananmu sedang diproses <br />Mohon tunggu</h4>
      </div>
      <div class="flex my-5 mx-auto justify-center">
        <router-link :to="'/rating/' + keranjangs.id" type="button" class="flex items-center justify-center bg-yellow-300 rounded-lg shadow-lg text-white p-3">Beri Rating !</router-link>
      </div>
    </div>
    <div class="inset x-0 bottom-0 mt-32">
      <Footer></Footer>
    </div>
  </body>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import UserReviews from "../components/UserReviews.vue";
import axios from "axios";

export default {
  name: "PesananSukses",
  components: {
    NavBar,
    Footer,
    UserReviews,
  },
  data() {
    return {
      keranjangs: [],
    };
  },
  methods: {
    setPesanan(data) {
      this.keranjangs = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3009/pesanans")
      .then((response) => {
        this.setPesanan(response.data);
      })
      .catch((error) => {
        console.log(error);
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
