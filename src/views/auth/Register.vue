<template>
  <body>
    <div class="bg-transparent">
      <div class="flex justify-center h-screen">
        <div class="flex items-center w-full max-w-xl px-6 mx-auto lg:w-1/2">
          <div class="flex-1">
            <div class="text-start">
              <h2 class="text-4xl font-bold text-start text-orange-400">Register</h2>
            </div>

            <div class="mt-8">
              <form>
                <div class="grid grid-cols-1 gap-2 mt-2 sm:grid-cols-2">
                  <div>
                    <label class="text-gray-700 dark:text-gray-200" for="username">Username</label>
                    <input
                      id="username"
                      type="text"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-300 bg-opacity-50 border border-transparent rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Email Address</label>
                    <input
                      id="emailAddress"
                      type="email"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-300 bg-opacity-50 border border-transparent rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Phone Number</label>
                    <input
                      id="emailAddress"
                      type="email"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-300 bg-opacity-50 border border-transparent rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label class="text-gray-700 dark:text-gray-200" for="password">Password</label>
                    <input
                      id="password"
                      type="password"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-300 bg-opacity-50 border border-transparent rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Password Confirmation</label>
                    <input
                      id="passwordConfirmation"
                      type="password"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-300 bg-opacity-50 border border-transparent rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                </div>
                <div class="flex items-center mt-4">
                  <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-yellow-300 bg-gray-100 rounded border-gray-300 focus:ring-yellow-300 focus:ring-2" />
                  <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-400">Yes, i want to receive Lavar emails.</label>
                </div>
                <div class="flex items-center mt-4">
                  <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-yellow-300 bg-gray-100 rounded border-gray-300 focus:ring-yellow-300 focus:ring-2" />
                  <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-400">I agree with the <a href="#" class="text-yellow-300 hover:underline">terms and conditions</a>.</label>
                </div>

                <div class="flex justify-start mt-6">
                  <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-yellow-300 rounded-md hover:bg-yellow-200 focus:outline-none focus:bg-yellow-200">Sign up</button>
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

<script>
export default {
  name: "Register",
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
