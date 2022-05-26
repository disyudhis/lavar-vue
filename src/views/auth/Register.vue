<template>
  <body>
    <div class="bg-transparent">
      <div class="flex justify-center h-screen">
        <div class="flex items-center w-full max-w-xl px-6 mx-auto lg:w-1/3">
          <div class="flex-1">
            <div class="text-center">
              <h2 class="text-4xl font-extrabold text-start text-orange-400">Register</h2>
            </div>

            <div class="mt-8">
              <form class="register" @submit.prevent="doRegister">
                <div class="grid grid-cols-1 gap-2 mt-2 items-center justify-center">
                  <div>
                    <label class="text-gray-700 dark:text-gray-200" for="username">Username</label>
                    <input
                      id="username"
                      type="text"
                      required
                      v-model="register_form.name"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-300 bg-opacity-50 border border-transparent rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Email Address</label>
                    <input
                      id="emailAddress"
                      type="email"
                      required
                      v-model="register_form.email"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-300 bg-opacity-50 border border-transparent rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label class="text-gray-700 dark:text-gray-200" for="password">Password</label>
                    <input
                      id="password"
                      type="password"
                      required
                      v-model="register_form.password"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-300 bg-opacity-50 border border-transparent rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <!-- <div>
                    <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Password Confirmation</label>
                    <input
                      id="passwordConfirmation"
                      type="password"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-300 bg-opacity-50 border border-transparent rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div> -->
                </div>
                <!-- <div class="flex items-center mt-4">
                  <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-yellow-300 bg-gray-100 rounded border-gray-300 focus:ring-yellow-300 focus:ring-2" />
                  <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-400">Yes, i want to receive Lavar emails.</label>
                </div>
                <div class="flex items-center mt-4">
                  <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-yellow-300 bg-gray-100 rounded border-gray-300 focus:ring-yellow-300 focus:ring-2" />
                  <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-400">I agree with the <a href="#" class="text-yellow-300 hover:underline">terms and conditions</a>.</label>
                </div> -->
                <a
                  href="#"
                  class="flex items-center justify-center mt-4 bg-transparent shadow-md border-black text-gray-900 transition-colors duration-200 transform border rounded-lg border-transparent dark:border-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
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

                <div class="flex justify-start mt-6">
                  <button type="submit" value="Register" class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-yellow-300 rounded-md hover:bg-yellow-200 focus:outline-none focus:bg-yellow-200">Sign up</button>
                </div>
              </form>

              <p class="mt-6 text-sm text-center text-gray-400">
                Already have an account ? <a href="#" class="text-yellow-300 focus:outline-none focus:underline hover:underline"><router-link to="/login">Login</router-link></a
                >.
              </p>
            </div>
          </div>
        </div>
        <div class="hidden bg-cover lg:block lg:w-2/3">
          <div class="flex items-center h-full px-20">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<!-- <script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const router = useRouter();

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully registered!");
      router.push("/login");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
</script> -->

<script>
// import { ref } from "vue";
// import { useStore } from "vuex";

import { createUserWithEmailAndPassword, getAuth, updateProfile } from "@firebase/auth";

export default {
  name: "Register",
  // setup() {
  //   const register_form = ref({});
  //   const store = useStore();

  //   const register = () => {
  //     store.dispatch("register", register_form.value);
  //   };
  data() {
    return {
      register_form: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    doRegister() {
      createUserWithEmailAndPassword(getAuth(), this.register_form.name, this.register_form.email, this.register_form.password)
        .then(() => {
          updateProfile(getAuth().currentUser, {
            displayName: this.register_form.name,
          })
            .then(() => {
              this.$router.push({
                path: "/",
              });
            })
            .catch((err) => alert(err.message));
        })
        .catch((err) => alert(err.message));
    },
  },
};
</script>

<style>
body {
  background-image: url(../../assets/register-page.png);
  height: 100%;
  background-position: center;
  background-size: cover;
}
</style>
