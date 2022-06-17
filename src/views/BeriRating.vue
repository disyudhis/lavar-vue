<template>
  <body>
    <div class="mt-32">
      <article class="bg-white rounded-lg shadow-lg p-5 m-5">
        <h1 class="text-xl my-3"><b> How's your food?</b></h1>
        <div class="flex items-center mb-4 space-x-4">
          <img class="w-10 h-10 rounded-full" :src="'../assets/images/' + pesanans.gambar" alt="" />
          <div class="space-y-1 font-medium dark:text-white">
            <p>Jese Leos <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
          </div>
        </div>

        <div class="inline-block">
          <p>User Rating</p>
        </div>
        <form v-on:submit.prevent>
          <div class="block my-5">
            <ul class="flex justify-start">
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="angry" class="w-10 mx-2 text-blue-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path
                    fill="currentColor"
                    d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm0-144c-33.6 0-65.2 14.8-86.8 40.6-8.5 10.2-7.1 25.3 3.1 33.8s25.3 7.2 33.8-3c24.8-29.7 75-29.7 99.8 0 8.1 9.7 23.2 11.9 33.8 3 10.2-8.5 11.5-23.6 3.1-33.8-21.6-25.8-53.2-40.6-86.8-40.6zm-48-72c10.3 0 19.9-6.7 23-17.1 3.8-12.7-3.4-26.1-16.1-29.9l-80-24c-12.8-3.9-26.1 3.4-29.9 16.1-3.8 12.7 3.4 26.1 16.1 29.9l28.2 8.5c-3.1 4.9-5.3 10.4-5.3 16.6 0 17.7 14.3 32 32 32s32-14.4 32-32.1zm199-54.9c-3.8-12.7-17.1-19.9-29.9-16.1l-80 24c-12.7 3.8-19.9 17.2-16.1 29.9 3.1 10.4 12.7 17.1 23 17.1 0 17.7 14.3 32 32 32s32-14.3 32-32c0-6.2-2.2-11.7-5.3-16.6l28.2-8.5c12.7-3.7 19.9-17.1 16.1-29.8z"
                  ></path>
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="frown" class="w-10 mx-2 text-blue-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path
                    fill="currentColor"
                    d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-80 128c-40.2 0-78 17.7-103.8 48.6-8.5 10.2-7.1 25.3 3.1 33.8 10.2 8.4 25.3 7.1 33.8-3.1 16.6-19.9 41-31.4 66.9-31.4s50.3 11.4 66.9 31.4c8.1 9.7 23.1 11.9 33.8 3.1 10.2-8.5 11.5-23.6 3.1-33.8C326 321.7 288.2 304 248 304z"
                  ></path>
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="meh" class="w-10 mx-2 text-blue-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path
                    fill="currentColor"
                    d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm8 144H160c-13.2 0-24 10.8-24 24s10.8 24 24 24h176c13.2 0 24-10.8 24-24s-10.8-24-24-24z"
                  ></path>
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="smile" class="w-10 mx-2 text-blue-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path
                    fill="currentColor"
                    d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"
                  ></path>
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="grin-stars" class="w-10 mx-2 text-blue-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path
                    fill="currentColor"
                    d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm105.6-151.4c-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.8-3.1-19.4 5.3-17.7 15.3 7.9 47.2 71.3 80 123.3 80s115.3-32.9 123.3-80c1.6-9.8-7.7-18.4-17.7-15.3zm-227.9-57.5c-1 6.2 5.4 11 11 7.9l31.3-16.3 31.3 16.3c5.6 3.1 12-1.7 11-7.9l-6-34.9 25.4-24.6c4.5-4.5 1.9-12.2-4.3-13.2l-34.9-5-15.5-31.6c-2.9-5.8-11-5.8-13.9 0l-15.5 31.6-34.9 5c-6.2.9-8.9 8.6-4.3 13.2l25.4 24.6-6.1 34.9zm259.7-72.7l-34.9-5-15.5-31.6c-2.9-5.8-11-5.8-13.9 0l-15.5 31.6-34.9 5c-6.2.9-8.9 8.6-4.3 13.2l25.4 24.6-6 34.9c-1 6.2 5.4 11 11 7.9l31.3-16.3 31.3 16.3c5.6 3.1 12-1.7 11-7.9l-6-34.9 25.4-24.6c4.5-4.6 1.8-12.2-4.4-13.2z"
                  ></path>
                </svg>
              </li>
            </ul>
          </div>
        </form>
        <div v-on:submit.prevent>
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
          <textarea
            v-model="komentar.pesan"
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>

        <aside>
          <div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
            <a
              @click="beriRating"
              href="#"
              class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >Save</a
            >
          </div>
        </aside>
      </article>
    </div>
    <div class="mt-32">
      <Footer></Footer>
    </div>
  </body>
</template>

<script>
import axios from "axios";
import Footer from "../components/Footer.vue";
export default {
  name: "BeriRating",
  components: {
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
    setRating() {},
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
