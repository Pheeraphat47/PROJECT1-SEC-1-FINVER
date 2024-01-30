<script setup>
import { ref } from "vue";
const isDark = ref(false);
</script>

<template>
  <!-- Navbar-->
  <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">FINVER</a>
    </div>
    <div className="flex-none gap-2">
      <div className="form-control">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />
      </div>
      <!-- toggle BG Change -->
      <div class="flex justify-end">
        <label class="swap swap-rotate">
          <input
            type="checkbox"
            class="theme-controller"
            v-model="isDark"
            @click="isDark = !isDark"
          />
          <!-- sun icon -->
          <svg
            class="w-10 h-10 text-orange-400 fill-current swap-off"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
            />
          </svg>
          <!-- moon icon -->
          <svg
            class="w-10 h-10 fill-current swap-on"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
            />
          </svg>
        </label>
      </div>

      <!-- Account Icon -->
      <div className="dropdown dropdown-end">
        <div
          tabIndex="{0}"
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <ul
          tabIndex="{0}"
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
  <!-- Main Content -->
  <div
    class="flex justify-center transition-all duration-500 ease-in-out"
    :class="isDark ? 'dark-mode' : ''"
  >
    <div class="flex justify-center p-5 pt-[5em]">
      <!-- Card  -->
      <div
        class="shadow-xl card w-96 bg-base-100"
        :class="isDark ? 'bg-gray-400' : 'bg-white '"
      >
        <!-- Header -->
        <div class="flex justify-center pt-[1.7em]">
          <svg
            xmlns="http://wwww3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 1200 1700"
            class="items-center justify-items-center"
          >
            <path
              fill="#333f54"
              d="M544 907q-188 0-321-133T90 454q0-188 133-321T544 0t321 133t133 321q0 187-133 320T544 907m0-677q-92 0-157.5 65.5T321 454q0 92 65.5 157.5T544 677t157.5-65.5T767 454q0-93-65.5-158.5T544 230m523 732q13 27 15 49.5t-4.5 40.5t-26.5 38.5t-42.5 37T947 1169q-115 73-315 94l73 72l267 267q30 31 30 74t-30 73l-12 13q-31 30-74 30t-74-30q-67-68-267-268l-267 268q-31 30-74 30t-73-30l-12-13q-31-30-31-73t31-74l267-267l72-72q-203-21-317-94q-39-25-61.5-41.5t-42.5-37t-26.5-38.5t-4.5-40.5T21 962q10-20 28-35t42-22t56 2t65 35q5 4 15 11t43 24.5t69 30.5t92 24t113 11q91 0 174-25.5T838 967l38-25q33-26 65-35t56-2t42 22t28 35"
            />
          </svg>
        </div>
        <figure class="px-10 mt-10">
          <img
            src="./assets/img/taned_one.webp"
            alt="Taned1"
            class="rounded-xl w-[304px] h-[305.34px]"
          />

          <img
            src="./assets/img/taned_two.webp"
            alt="Taned2"
            class="rounded-xl"
          />

          <img
            src="./assets/img/taned_three.webp"
            alt="Taned3"
            class="rounded-xl"
          />
        </figure>
        <div class="items-center text-center card-body">
          <h2 class="card-title" :class="isDark ? 'text-white' : 'text-black'">
            ParkSeoGame
          </h2>
          <p :class="isDark ? 'text-white' : 'text-black'">
            The most handsome guy in KMUTT
          </p>

          <div class="justify-end gap-5 pt-4 card-actions">
            <!-- Dislike Icon -->
            <button
              class="duration-300 bg-red-300 border-red-300 hover:bg-red-600 hover:border-red-600 btn btn-circle btn-lg hover:scale-125 cursor-pointer"
            >
              <svg
                class="text-red-700"
                xmlns="http://www.w3.org/2000/svg"
                width="2.6em"
                height="2.6em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="32"
                  d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"
                />
                <path
                  fill="currentColor"
                  d="M333.2 297.69c18.28-23.39 27.06-47.43 26.79-73.37c-.31-31.06-25.22-56.33-55.53-56.33c-20.4 0-35 10.64-44.11 20.42a5.93 5.93 0 0 1-8.7 0c-9.11-9.78-23.71-20.42-44.11-20.42L206 168a4 4 0 0 0-2.75 6.84l124 123.21a3.92 3.92 0 0 0 5.95-.36M158.84 221a4 4 0 0 0-6.82 2.72v.64c-.28 27.1 9.31 52.13 29.3 76.5c9.38 11.44 26.4 29.73 65.7 56.41a15.93 15.93 0 0 0 18 0c5.15-3.49 9.9-6.84 14.31-10a4 4 0 0 0 .46-6.07ZM336 368a15.92 15.92 0 0 1-11.31-4.69l-176-176a16 16 0 0 1 22.62-22.62l176 176A16 16 0 0 1 336 368"
                />
              </svg>
            </button>
            <!-- SuperLike Icon -->
            <button
              class="duration-300 bg-yellow-200 border-yellow-200 hover:bg-yellow-300 hover:border-yellow-300 btn btn-circle btn-lg hover:scale-125"
            >
              <svg
                class="text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                width="3em"
                height="3em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 16q1.2 0 2.138-.712T15.5 13.45h-7q.425 1.125 1.363 1.838T12 16m-2.5-4q.625 0 1.063-.437T11 10.5q0-.625-.437-1.062T9.5 9q-.625 0-1.062.438T8 10.5q0 .625.438 1.063T9.5 12m5 0q.625 0 1.063-.437T16 10.5q0-.625-.437-1.062T14.5 9q-.625 0-1.062.438T13 10.5q0 .625.438 1.063T14.5 12M7.625 6.4L12 .725L16.375 6.4l6.85 2.3l-4.325 6.125l.175 6.825L12 19.675L4.925 21.65L5.1 14.8L.8 8.7z"
                />
              </svg>
            </button>
            <!-- Heart Icon -->
            <button
              class="duration-300 bg-green-300 border-green-300 hover:bg-green-400 hover:border-green-400 btn btn-circle btn-lg hover:scale-125"
            >
              <svg
                class="text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 1200 1200"
              >
                <path
                  fill="currentColor"
                  d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0m132.789 343.503c71.295-1.114 135.772 37.646 166.337 103.724c28.273 87.356 4.612 176.225-45.251 243.199c-32.912 45.417-72.247 84.584-112.462 118.807c-36.997 34.439-119.808 102.591-141.755 104.483c-19.397-3.708-41.173-25.678-56.573-36.968c-86.534-65.781-179.667-145.742-226.899-233.207c-39.601-83.97-39.673-187.864 21.96-252.241c79.917-72.048 200.39-57.946 261.512 17.325c16.415-21.295 36.605-38.066 60.562-50.267c24.279-9.69 48.803-14.483 72.569-14.855"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dark-mode {
  background-color: #1a202c;
  /* Set the dark mode background color */
  color: #dcdcdc;
  /* Set the dark mode text color */
}
</style>
