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
          <a href="#" class="inline-block py-2 px-4 bg-white shadow-lg border text-gray-900 w-full rounded-full active hover:text-white hover:bg-yellow-400 hover:border-transparent">Reviewer Ranks</a>
        </li>
        <!-- <li class="mr-2 px-10">
          <router-link to="/user-information" href="#" class="inline-block py-2 px-4 bg-white shadow-lg border text-gray-900 w-full rounded-full active hover:text-white hover:bg-yellow-400 hover:border-transparent"
            >Reviewer Profile</router-link
          >
        </li> -->
      </ul>
    </div>
    <div>
      <form>
        <div class="mx-5">
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
          <div class="relative w-3/3 items-center justify-center mx-auto my-5">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              v-model="search"
              type="search"
              id="default-search"
              class="block p-4 pl-10 w-full text-sm text-gray-900 bg-white shadow-lg rounded-lg border border-transparent focus:ring-yellow-300 focus:border-yellow-300"
              placeholder="Search "
              required
              @keyup="searchPeople"
            />
            <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-yellow-300 hover:bg-yellow-200 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">Search</button>
          </div>
        </div>
      </form>
    </div>
    <!-- Akhir dari Tabs -->
    <h1 class="text-2xl text-right mx-5"><strong>All</strong> Reviewers</h1>
    <div class="flex justify-center mt-5 h-screen">
      <div class="bg-cover lg:block lg:w-96">
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
    searchPeople() {
      axios
        .get("http://localhost:3009/reviewers?q=" + this.search)
        .then((response) => {
          this.setReviewer(response.data);
        })
        .catch((err) => alert(err.message));
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
