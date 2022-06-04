<template>
  <body>
    <div class="mt-32">
      <UserReviews :pesanans="pesanans"></UserReviews>
    </div>
    <div class="mt-32">
      <Footer></Footer>
    </div>
  </body>
</template>

<script>
import axios from "axios";
import UserReviews from "../components/UserReviews.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "BeriRating",
  components: {
    UserReviews,
    Footer,
  },
  data() {
    return {
      pesanans: [],
      komentar: {},
    };
  },
  methods: {
    setPesanan(data) {
      this.pesanans = data;
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
  background-image: url(../assets/landing-page.png);
  height: 100%;
  background-size: cover;
  background-position: center;
}
</style>
