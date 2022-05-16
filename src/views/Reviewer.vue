<template>
  <NavBar></NavBar>
  <div>
    <h2 class="text-3xl text-center mb-4 font-extrabold">Reviewers</h2>
    <!-- Tabs -->
    <div class="mt-2 mb-2 items-center justify-center flex">
      <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500">
        <li class="mr-2 px-10">
          <a href="#" class="inline-block py-2 px-4 bg-yellow-300 text-white shadow-lg border w-28 rounded-full active hover:bg-yellow-400 hover:border-transparent" aria-current="page">All</a>
        </li>
        <li class="mr-2 px-10">
          <a href="#" class="inline-block py-2 px-4 bg-white shadow-lg border text-gray-900 w-full rounded-full active hover:text-white hover:bg-yellow-400 hover:border-transparent">Be The Reviewer</a>
        </li>
        <li class="mr-2 px-10">
          <a href="#" class="inline-block py-2 px-4 bg-white shadow-lg border text-gray-900 w-full rounded-full active hover:text-white hover:bg-yellow-400 hover:border-transparent">Reviewer Ranks</a>
        </li>
      </ul>
    </div>
    <!-- Akhir dari Tabs -->
    <h1 class="text-2xl text-right mx-5"><strong>All</strong> Reviewers</h1>
    <div class="flex justify-center mt-5 h-screen">
      <div class="bg-cover lg:block lg:w-52">
        <div class="flex items-center h-full px-20"></div>
      </div>
      <app-list>
        <div v-for="reviewer in reviewers" :key="reviewer.id">
          <ReviewerCards :reviewer="reviewer"></ReviewerCards>
        </div>
      </app-list>
    </div>
  </div>
  <!-- <div class="mt-96">
    <Footer></Footer>
  </div> -->
</template>

<script>
import NavBar from "../components/NavBar.vue";
import List from "../components/List.vue";
import ReviewerCards from "../components/ReviewerCards.vue";
import axios from "axios";
import Footer from "../components/Footer.vue";
export default {
  name: "Reviewer",
  components: {
    NavBar,
    "app-list": List,
    ReviewerCards,
    Footer,
  },
  data() {
    return {
      reviewers: [],
    };
  },
  methods: {
    setReviewer(data) {
      this.reviewers = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3009/reviewers")
      .then((response) => {
        this.setReviewer(response.data);
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
  background-size: cover;
}
</style>
