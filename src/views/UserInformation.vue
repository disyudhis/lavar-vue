<template>
  <body>
    <div>
      <NavBar class="mb-5"></NavBar>
    </div>
    <div class="text-xl m-5">
      <h1><b>Reviewer</b> Profile</h1>
    </div>
    <div class="grid grid-cols-5 gap-3">
      <div class="" style="background-color: #ffaa76">
        <a href="/reviewer" class="text-white m-3 flex px-2"
          ><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
        </a>
        <div class="max-w-sm m-auto p-5 dark:bg-gray-800 dark:border-gray-700">
          <div class="flex justify-end px-4 pt-4">
            <button
              id="dropdownButton"
              data-dropdown-toggle="dropdown"
              class="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:border-none focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
              type="button"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
            </button>
            <!-- Dropdown menu -->
            <div id="dropdown" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
              <ul class="py-1" aria-labelledby="dropdownButton">
                <li>
                  <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- Left Bar -->
          <div v-if="isLogin" class="flex flex-col items-center pb-10">
            <img class="mb-3 w-24 h-24 rounded-full shadow-lg" :src="photo" />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ name }}</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              <!-- asal -->
            </span>
            <div class="flex mt-4 space-x-3 lg:mt-6">
              <a
                href="#"
                class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >Follow</a
              >
              <a
                href="#"
                class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                style="background: #f4ece1"
                >Message</a
              >
            </div>
          </div>
        </div>
        <div class="p-4 w-full m-auto text-left border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700" style="background: #fffdf4">
          <h5 class="mb-2 text-3l font-bold text-gray-900 dark:text-white"></h5>
          <p class="mb-5 text-base text-gray-500 sm:text-sm dark:text-gray-400">
            <!-- bio -->
          </p>
          <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4"></div>
        </div>
        <br /><br />
        <div class="p-4 w-full m-auto text-left border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700" style="background: #fffdf4">
          <h3 class="mb-2 text-2xl text-center font-bold text-gray-900 dark:text-white">Badges</h3>
          <div class="flex flex-nowrap">
            <div><img src="../assets/badges/award.png" alt="Badges 1" /></div>
            <div><img src="../assets/badges/quality.png" alt="Badges 2" /></div>
            <div><img src="../assets/badges/winner.png" alt="Badges 3" /></div>
          </div>
          <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4"></div>
        </div>
        <br />
        <img src="https://media.discordapp.net/attachments/532539525243600902/979580439368970310/WhatsApp_Image_2022-04-08_at_1.53.57_PM-removebg-preview.png?width=450&height=450" alt="" />
      </div>

      <div class="col-span-4">
        <div class="grid grid-cols-2 gap-3">
          <div class="bg-white shadow-lg rounded-lg">
            <h1 class="text-l font-bold">Reviewer Rank</h1>
            <a href="" class="text-3xl font-extrabold">#0002</a>
          </div>
          <div class="bg-white shadow-lg rounded-lg">
            <h1 class="text-l font-bold">Reviewer Point</h1>
            <a href="" class="text-3xl font-extrabold">4500</a>
          </div>
          <br />
        </div>
        <div>
          <hr style="color: black" />
          <br />
          <h1 class="text-3xl font-extrabold">Last Contribution This Month!</h1>
          <p>DISINI GRAFIK</p>
          <br /><br />
        </div>

        <!-- Reviews -->
        <div>
          <h1 class="text-3xl font-extrabold">Last Reviews!</h1>
          <br />
          <div class="bg-white rounded-lg shadow-md p-5 mx-3">
            <div class="flex items-center mb-4 space-x-4">
              <img class="w-10 h-10 rounded-full" src="../assets/seller/tehira.jfif" alt="Foto Penjual" />
              <div class="space-y-1 font-medium dark:text-white">
                <p>Nasi Goreng Teh Ira <time datetime="2022-03-23 21:59" class="block text-sm text-gray-500 dark:text-gray-400">Last Review: 2022-03-23</time></p>
              </div>
            </div>
            <div class="flex items-center mb-1">
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <h3 class="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Rasanya Enak Banget!</h3>
            </div>
            <p class="mb-2 font-light text-gray-500 dark:text-gray-400">
              Nasi Padang ini poll enak parah, buat kalian-kalian nih orang bandung cocok banget deh makan nasi padang ini, soalnya bumbu rahasia teh irma nya itu lohh uhhhh mantap, rasanya pekat gurih cocok lah buat orang bandung. Mantappp
            </p>
            <aside>
              <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
              <div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                <a
                  href="#"
                  class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >Helpful</a
                >
                <a href="#" class="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Pesan?</a>
              </div>
            </aside>
          </div>
          <div class="bg-white rounded-lg shadow-md p-5 mx-3 my-3">
            <div class="flex items-center mb-4 space-x-4">
              <img class="w-10 h-10 rounded-full" src="../../public/assets/images/seller/anom.jfif" alt="Foto Penjual" />
              <div class="space-y-1 font-medium dark:text-white">
                <p>Ayam Tulang Lunak Mang Anom <time datetime="2022-03-23 15:32" class="block text-sm text-gray-500 dark:text-gray-400">Last Review: 2022-03-23</time></p>
              </div>
            </div>
            <div class="flex items-center mb-1">
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <h3 class="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Tulang Paling Renyah!!!</h3>
            </div>
            <p class="mb-2 font-light text-gray-500 dark:text-gray-400">
              Rekomended Ayamnyaa, tulangnya lunak terus kerasa banget bumbunya cocok nih buat orang bandung yang suka makanan gurih gurih pedes, rasanya pas, rekomen deh pokoknya ga nyesel
            </p>
            <aside>
              <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">22 people found this helpful</p>
              <div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                <a
                  href="#"
                  class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >Helpful</a
                >
                <a href="#" class="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Pesan?</a>
              </div>
            </aside>
          </div>

          <div class="bg-white rounded-lg shadow-md p-5 mx-3 my-3">
            <div class="flex items-center mb-4 space-x-4">
              <img class="w-10 h-10 rounded-full" src="../assets/seller/bronson.jfif" alt="Foto Penjual" />
              <div class="space-y-1 font-medium dark:text-white">
                <p>Geprek Bronson <time datetime="2022-03-20 12:22" class="block text-sm text-gray-500 dark:text-gray-400">Last Review: 2022-03-20</time></p>
              </div>
            </div>
            <div class="flex items-center mb-1">
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <h3 class="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Sangat Sangat Rekomen banget</h3>
            </div>
            <p class="mb-2 font-light text-gray-500 dark:text-gray-400">
              Pedess huha huha emang paling pol cabainya, rekomen buat kalian yang suka makanan pedas, cabenya kerasa banget, dibarengi dengan rasa gurih dan asin yang seimbang, pokoknya pas banget untuk lidah orang indonesia!
            </p>
            <aside>
              <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">32 people found this helpful</p>
              <div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                <a
                  href="#"
                  class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >Helpful</a
                >
                <a href="#" class="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Pesan?</a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>

    <!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <script src="https://kit.fontawesome.com/4cfb9e2d7c.js" crossorigin="anonymous"></script> -->
  </body>
</template>

<script>
import { getAuth } from "@firebase/auth";
import NavBar from "../components/NavBar.vue";
export default {
  name: "UserInformation",
  components: {
    NavBar,
  },
  data() {
    return {
      name: null,
      isLogin: false,
      photo: null,
    };
  },
  created() {
    const user = getAuth().currentUser;
    if (user !== null) {
      this.isLogin = true;
      this.name = user.displayName;
      this.photo = user.photoURL;
    }
  },
};
</script>

<style></style>
