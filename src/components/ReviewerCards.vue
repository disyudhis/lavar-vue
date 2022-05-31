<template>
  <!-- <div class="container px-5 mx-auto">
    <div class="flex flex-wrap">
      <div class="md:w-5/7 my-2">
        <div class="h-full border-transparents shadow-lg max-h-screen bg-white rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" :src="'assets/images/reviewers/' + reviewer.gambar" alt="blog" />
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{{ reviewer.asal }}</h2>
            <span class="inline-flex w-28 justify-center mx-2 my-2 bg-red-500 text-white text-sm rounded-full" v-for="selera in reviewer.seleras" :key="selera.id">{{ selera.nama }}</span>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{ reviewer.nama }}</h1>
            <p class="leading-relaxed mb-3">{{ reviewer.bio }}</p>
            <div class="flex items-center flex-wrap">
              <a class="text-yellow-500 inline-flex items-center md:mb-2 lg:mb-0"
                >Lihat
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <div class="ml-auto flex">
                <Rating></Rating>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->

  <section class="text-gray-900 body-font items-center mx-4 my-3 justify-center">
    <div class="container px-2 py-3 bg-white rounded-lg shadow-lg">
      <div class="flex">
        <div class="w-full mb-6 p-4">
          <router-link :to="'/profile/' + reviewer.id" type="button" class="rounded-full shadow-lg px-4 ml-auto inline-flex bg-gray-700 text-white text-sm py-1">Lihat</router-link>
          <div class="max-h-full text-center pb-10">
            <img alt="testimonial" class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" :src="'assets/images/reviewers/' + reviewer.gambar" />
            <div class="lg:h-36">
              <p class="text-left">Bio :</p>
              <p class="bg-gray-100 rounded-md shadow-sm px-2 py-2">{{ reviewer.bio }}</p>
            </div>
            <div>
              <span class="flex flex-wrap items-center mx-auto h-1 w-10 rounded bg-yellow-300 mt-6 mb-4"></span>
              <h2 class="inline-block text-gray-900 font-medium title-font tracking-wider text-sm">
                <b class="text-lg">{{ reviewer.nama }}</b>
              </h2>
              <p class="text-gray-500">{{ reviewer.asal }}</p>
              <div class="flex items-center justify-center mt-5">
                <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
              </div>
              <h2 class="block text-sm text-left mt-2">Kategori :</h2>
              <div class="inline-block mt-2">
                <span class="w-1/2 justify-center bg-red-500 text-white text-sm font-medium mr-2 px-2.5 py-1 rounded-full" v-for="selera in reviewer.seleras" :key="selera.id">{{ selera.nama }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Rating from "./Rating.vue";
export default {
  name: "ReviewerCards",
  props: ["reviewer"],
  components: { Rating },
};
</script>
