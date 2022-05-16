<template>
  <body>
    <div class="items-center justify-center">
      <NavBar></NavBar>
    </div>

    <!-- <div>
        <SideBar></SideBar>
      </div> -->

    <div class="justify-center items-center mx-auto p-5">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1 pl-7">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Cari <strong><b>Seleramu!</b></strong>
            </h3>
            <p class="mt-1 text-sm text-gray-600">Bantu kami untuk mempermudah memilih yang terbaik untuk anda</p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div class="grid grid-cols-3 gap-6">
                  <div class="col-span-3 sm:col-span-3">
                    <div class="block">
                      <p class="text-yellow-300 mb-2"><b>Let us know,</b></p>
                      <form>
                        <label for="location-search" class="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dari mana asalmu?</label>
                        <div class="flex">
                          <button
                            id="dropdown-button-2"
                            data-dropdown-toggle="dropdown-search-city"
                            class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                            type="button"
                          >
                            IDN
                            <svg class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                          </button>
                          <div
                            id="dropdown-search-city"
                            class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                            data-popper-reference-hidden=""
                            data-popper-escaped=""
                            data-popper-placement="top"
                            style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(897px, 5637px, 0px)"
                          >
                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button-2">
                              <li>
                                <button type="button" class="inline-flex py-2 px-4 w-full text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                  <div class="inline-flex items-center">
                                    <svg class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512">
                                      <g fill-rule="evenodd">
                                        <g stroke-width="1pt">
                                          <path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" />
                                          <path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" />
                                        </g>
                                        <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" />
                                        <path
                                          fill="#fff"
                                          d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                                          transform="scale(3.9385)"
                                        />
                                      </g>
                                    </svg>
                                    United States
                                  </div>
                                </button>
                              </li>
                              <li>
                                <button type="button" class="inline-flex py-2 px-4 w-full text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                  <div class="inline-flex items-center">
                                    <svg class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512">
                                      <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                                      <path d="M0 0h512v170.7H0z" />
                                      <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                                    </svg>
                                    Germany
                                  </div>
                                </button>
                              </li>
                              <li>
                                <button type="button" class="inline-flex py-2 px-4 w-full text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                  <div class="inline-flex items-center">
                                    <svg class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it" viewBox="0 0 512 512">
                                      <g fill-rule="evenodd" stroke-width="1pt">
                                        <path fill="#fff" d="M0 0h512v512H0z" />
                                        <path fill="#009246" d="M0 0h170.7v512H0z" />
                                        <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                                      </g>
                                    </svg>
                                    Italy
                                  </div>
                                </button>
                              </li>
                              <li>
                                <button type="button" class="inline-flex py-2 px-4 w-full text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                  <div class="inline-flex items-center">
                                    <svg class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="flag-icon-css-cn" viewBox="0 0 512 512">
                                      <defs><path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z" /></defs>
                                      <path fill="#de2910" d="M0 0h512v512H0z" />
                                      <use width="30" height="20" transform="matrix(76.8 0 0 76.8 128 128)" xlink:href="#a" />
                                      <use width="30" height="20" transform="rotate(-121 142.6 -47) scale(25.5827)" xlink:href="#a" />
                                      <use width="30" height="20" transform="rotate(-98.1 198 -82) scale(25.6)" xlink:href="#a" />
                                      <use width="30" height="20" transform="rotate(-74 272.4 -114) scale(25.6137)" xlink:href="#a" />
                                      <use width="30" height="20" transform="matrix(16 -19.968 19.968 16 256 230.4)" xlink:href="#a" />
                                    </svg>
                                    China
                                  </div>
                                </button>
                              </li>
                            </ul>
                          </div>
                          <div class="relative w-full">
                            <input
                              type="search"
                              id="location-search"
                              class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-yellow-500"
                              placeholder="Search for city or address"
                              required
                            />
                            <button
                              type="submit"
                              class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-yellow-300 rounded-r-lg border border-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-100 dark:bg-yellow-300 dark:hover:bg-yellow-300 dark:focus:ring-yellow-500"
                            >
                              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <!-- Pedas apa tidak -->
                <div>
                  <label for="cuisine" class="block text-xxl font-bold text-gray-700"> Suka Pedas apa Tidak ? </label>

                  <div class="rounded-md shadow inline-flex items-center justify-center px-2 py-1 mx-1 border border-transparent bg-red-300 md:m-2">
                    <div class="flex items-center mr-4">
                      <input
                        unchecked
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="red-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pedas</label>
                    </div>
                  </div>
                  <div class="rounded-md shadow inline-flex items-center justify-center px-2 py-1 mx-1 border border-transparent bg-green-300 md:m-2">
                    <div class="flex items-center mr-4">
                      <input
                        unchecked
                        id="green-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="green-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tidak Pedas</label>
                    </div>
                  </div>
                  <div class="rounded-md shadow inline-flex items-center justify-center px-2 py-1 mx-1 border border-transparent bg-purple-300 md:m-2">
                    <div class="flex items-center mr-4">
                      <input
                        unchecked
                        id="purple-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-purple-600 bg-gray-100 rounded border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="purple-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sedang</label>
                    </div>
                  </div>
                  <div class="rounded-md shadow inline-flex items-center justify-center px-2 py-1 mx-1 border border-transparent bg-yellow-100 md:m-2">
                    <div class="flex items-center mr-4">
                      <input
                        unchecked
                        id="yellow-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-yellow-300 bg-gray-100 rounded border-gray-300 focus:ring-yellow-300 dark:focus:ring-yellow-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="yellow-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Manis</label>
                    </div>
                  </div>
                  <div class="rounded-md shadow inline-flex items-center justify-center px-2 py-1 mx-1 border border-transparent bg-cyan-100 md:m-2">
                    <div class="flex items-center mr-4">
                      <input
                        unchecked
                        id="cyan-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-cyan-300 bg-gray-100 rounded border-gray-300 focus:ring-cyan-500 dark:focus:ring-cyan-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="cyan-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Asin</label>
                    </div>
                  </div>

                  <p class="mt-2 text-sm text-gray-500">Bisa pilih beberapa.</p>
                </div>
                <!-- Penutup Pedas -->

                <!-- Lokasimu sekarang -->
                <div>
                  <label for="simple-search" class="text-sm text-gray-900 mb-2">Dimana lokasi-mu sekarang?</label>
                  <form class="flex items-center">
                    <div class="relative w-full">
                      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="simple-search"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-300 dark:focus:border-yellow-300"
                        placeholder="Jl. Riau, Bandung"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      class="p-2.5 ml-2 text-sm font-medium text-white bg-yellow-300 rounded-lg border border-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-300 dark:hover:bg-yellow-300 dark:focus:ring-yellow-400"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                    </button>
                  </form>
                  <Maps class="mt-2"></Maps>
                </div>
                <!-- Akhir Lokasimu -->
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
        <button type="submit" class="inline-flex justify-center text-right col-start-3 w-24 py-2 px-4 ml-auto border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-300">
          <router-link to="/daftar-makanan">Next</router-link>
        </button>
      </div>
    </div>

    <div>
      <Footer></Footer>
    </div>
  </body>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import Footer from "../components/Footer.vue";

import NavBar from "../components/NavBar.vue";
import Maps from "../components/Maps.vue";
export default {
  name: "Cari Seleramu",
  components: {
    SideBar,
    Footer,

    NavBar,
    Maps,
  },
};
</script>

<style>
body {
  background-color: #f4ece1;
  height: 100%;
}
</style>
