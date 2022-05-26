<template>
  <body>
    <div class="mx-auto">
      <div class="flex justify-center h-screen">
        <div class="bg-cover lg:block lg:w-2/3">
          <div class="flex items-center h-full px-20"></div>
        </div>
        <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div class="flex-1">
            <div class="text-center">
              <h2 class="text-4xl font-extrabold text-center text-orange-500 items-center justify-center">Login</h2>

              <p class="mt-3 text-black dark:text-gray-300">Sign in to access your account</p>
            </div>

            <div class="mt-4">
              <form class="login" @submit.prevent="login">
                <div>
                  <label for="email" class="block mb-2 text-sm sr-only text-gray-600 dark:text-gray-200">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    v-model="login_form.email"
                    class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gray-500 bg-gray-300 bg-opacity-50 border border-transparent rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div class="mt-2">
                  <div class="flex justify-between mb-2">
                    <label for="password" class="text-sm text-gray-600 sr-only dark:text-gray-200">Password</label>
                  </div>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    v-model="login_form.password"
                    class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gray-500 bg-gray-300 bg-opacity-50 border border-transparent rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <a href="#" class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                </div>
                <a
                  href=""
                  class="flex items-center justify-center mt-4 bg-gray-300 bg-opacity-50 text-gray-900 transition-colors duration-200 transform border rounded-lg border-transparent dark:border-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <div class="px-4 py-2">
                    <svg class="w-6 h-6" viewBox="0 0 40 40">
                      <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                        fill="#FF3D00"
                      />
                      <path
                        d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#1976D2"
                      />
                    </svg>
                  </div>

                  <span class="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
                </a>

                <div class="mt-6">
                  <button
                    type="submit"
                    value="Login"
                    class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-yellow-300 rounded-md hover:bg-yellow-200 focus:outline-none focus:bg-yellow-200 focus:ring focus:ring-yellow-300 focus:ring-opacity-50"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p class="mt-6 text-sm text-center text-gray-400">
                Don&#x27;t have an account yet? <a href="#" class="text-yellow-300 focus:outline-none focus:underline hover:underline"><router-link to="/register">Sign up</router-link></a
                >.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const login_form = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch("login", login_form.value);
    };

    return {
      login,
      login_form,
    };
  },
};
</script>

<style>
body {
  background-image: url(../../assets/login-page.png);
  background-size: cover;
  background-position: center;
  height: 100vh;
}
</style>
