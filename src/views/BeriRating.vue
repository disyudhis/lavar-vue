<template>
  <body>
    <h4 class="m-5 text-2xl"><b> How's your food?</b></h4>
    <div v-for="keranjang in keranjangs" :key="keranjang.id">
      <article class="bg-white rounded-lg shadow-lg p-5 mx-10 my-5">
        <div class="flex items-center mb-4 space-x-4">
          <img class="w-10 h-10 rounded-full" :src="'../assets/images/' + keranjang.products.gambar" alt="" />
          <div class="space-y-1 font-medium dark:text-white">
            <p>
              {{ keranjang.products.nama }}<time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400">{{ keranjang.products.restoran }}</time>
            </p>
          </div>
        </div>

        <div class="inline-block">
          <p>User Rating</p>
        </div>
        <form v-on:submit.prevent>
          <!-- Star Rating -->
          <div class="block my-5">
            <Rating
              v-model="ratingForm.bintang"
              :star="this.star"
              :disabled="disabled"
              :maxstars="this.maxstars"
              :starsize="this.starsize"
              :hasresults="this.hasresults"
              :hasdescription="this.hasdescription"
              :ratingdescription="this.ratingdescription"
            />
          </div>
        </form>
        <div v-on:submit.prevent>
          <!-- Komentar Form -->
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
          <textarea
            v-model="ratingForm.komentar"
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-300 focus:border-yellow-300"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
      </article>
    </div>
    <aside class="flex justify-end mx-5">
      <div class="flex items-center mx-5">
        <a @click="beriRating" href="#" class="text-xxl w-full text-white bg-yellow-300 hover:bg-yellow-400 font-medium rounded-lg px-2 py-1.5">Save</a>
      </div>
    </aside>
    <div class="mt-32">
      <Footer></Footer>
    </div>
  </body>
</template>

<script>
import Rating from "../components/Rating.vue";
import axios from "axios";
import Footer from "../components/Footer.vue";
export default {
  name: "BeriRating",
  components: {
    Rating,
    Footer,
  },
  props: {
    star: {
      type: Number,
      default: 0,
    },
    ratingDescription: {
      type: Array,
      default() {
        return [
          {
            text: "Poor",
            class: "star-poor",
          },
          {
            text: "Below Average",
            class: "star-belowAverage",
          },
          {
            text: "Average",
            class: "star-average",
          },
          {
            text: "Good",
            class: "star-good",
          },
          {
            text: "Excellent",
            class: "star-excellent",
          },
        ];
      },
    },
    hasResults: {
      type: Boolean,
      default: true,
    },
    hasDescription: {
      type: Boolean,
      default: true,
    },
    starsize: {
      type: String,
      default: "2x",
    },
    maxstars: {
      type: Number,
      default: 5,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      ratingForm: {
        bintang: "",
        komentar: "",
      },
      ratings: [],
      keranjangs: [],
    };
  },
  methods: {
    setKeranjang(data) {
      this.keranjangs = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3009/keranjangs")
      .then((response) => {
        this.setKeranjang(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss">
body {
  background-color: #f4ece1;
  height: 100%;
  background-size: cover;
  background-position: center;
}
</style>
