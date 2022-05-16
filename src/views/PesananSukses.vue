<template>
  <body>
    <div><NavBar></NavBar></div>
    <div class="mt-8 mb-2">
      <img src="../assets/undraw_reviews_lp8w.svg" alt="" width="300" class="relative mx-auto items-center justify-center text-center" />
      <div class="text-center justify-center items-center mx-auto objects-center mt-5 space-y-5">
        <h1 class="text-3xl"><strong>Pesanan Sukses!!</strong></h1>
        <h4>Pesananmu sedang diproses <br />Mohon tunggu</h4>
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

export default {
  name: "PesananSukses",
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
body {
  background: #f4ece1;
  height: 100%;
  background-size: cover;
}
</style>
