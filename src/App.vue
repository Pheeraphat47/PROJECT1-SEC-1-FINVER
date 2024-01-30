<script setup>
import { ref } from "vue";

const isDark = ref(false);

let count = ref(0);
</script>

<template>
  <!-- Navbar-->
  <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">FINVER</a>
    </div>
    <div className="flex-none gap-2">
      <div className="form-control">
        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
      </div>
      <!-- toggle BG Change -->
      <div class="flex justify-end">
        <label class="swap swap-rotate">
          <input type="checkbox" class="theme-controller" v-model="isDark" @click="isDark = !isDark" />
          <!-- sun icon -->
          <svg class="w-10 h-10 text-orange-400 fill-current swap-off" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          <!-- moon icon -->
          <svg class="w-10 h-10 fill-current swap-on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>

      <!-- Account Icon -->
      <div className="dropdown dropdown-end">
        <div tabIndex="{0}" role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <ul tabIndex="{0}" className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
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
  <!-- Heart modal-->
  <div class="mt-5 ml-6">
    <button class="duration-300 bg-pink-500 hover:bg-pink-700 btn btn-circle btn-lg hover:scale-125"
      onclick="mymodal.showModal()">
      <svg class="text-pink-200" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="currentColor"
          d="m11 19.654l-1.156-1.042q-2.28-2.087-3.799-3.593q-1.518-1.506-2.413-2.679q-.895-1.173-1.264-2.146Q2 9.221 2 8.225q0-1.908 1.296-3.201Q4.592 3.731 6.5 3.731q1.32 0 2.475.672q1.156.672 2.025 1.96q.87-1.288 2.025-1.96q1.156-.672 2.475-.672q1.817 0 3.063 1.172q1.245 1.172 1.402 2.878q-.442-.143-.896-.202q-.454-.06-.913-.06q-2.183.02-3.794 1.52q-1.612 1.501-1.612 3.923q0 .988.362 1.976q.361.987 1.1 1.781q-.533.483-1.17 1.069q-.638.585-1.284 1.181zm6.95-4.19l-2.138-2.114l.713-.708l1.425 1.42l3.525-3.545l.713.708z" />
      </svg>
    </button>
  </div>
  <dialog id="mymodal" class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg text-center">Liked</h3>
      <div class="flex justify-center">
        <p>
          <svg class="text-pink-500 mt-1" xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="m12 19.654l-.758-.685q-2.448-2.236-4.05-3.829q-1.602-1.592-2.529-2.808q-.926-1.217-1.295-2.201Q3 9.146 3 8.15q0-1.908 1.296-3.204Q5.592 3.65 7.5 3.65q1.32 0 2.475.675T12 6.288Q12.87 5 14.025 4.325T16.5 3.65q1.908 0 3.204 1.296Q21 6.242 21 8.15q0 .996-.368 1.98q-.369.985-1.295 2.202q-.927 1.216-2.52 2.808q-1.592 1.593-4.06 3.83z" />
          </svg>
        </p>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
  <!-- Main Content -->
  <div class="flex justify-center transition-all duration-500 ease-in-out" :class="isDark ? 'dark-mode' : ''">
    <div class="flex justify-center p-5 pt-[5em]">
      <!-- Card  -->
      <div class="shadow-xl card w-96 bg-base-100" :class="isDark ? 'bg-gray-400' : 'bg-white '">
        <div class="h-96 carousel carousel-vertical rounded-box">
          <div class="carousel-item h-full">
            <img src="./assets/img/taned_one.webp" alt="Taned1" class="rounded-xl" width="385px" />
          </div>
          <div class="carousel-item h-full">
            <img src="./assets/img/taned_two.webp" alt="Taned2" class="rounded-xl" width="385px" />
          </div>
          <div class="carousel-item h-full">
            <img src="./assets/img/taned_three.webp" alt="Taned3" class="rounded-xl" width="385px" />
          </div>
        </div>
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
              class="duration-300 bg-red-300 border-red-300 hover:bg-red-600 hover:border-red-600 btn btn-circle btn-lg hover:scale-125 cursor-pointer">
              <svg class="text-red-800 mt-1" xmlns="http://www.w3.org/2000/svg" width="2.9em" height="2.9em"
                viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M12.025 20.675q-2.696-2.702-4.443-4.546q-1.747-1.844-2.766-3.19q-1.018-1.347-1.417-2.37Q3 9.546 3 8.5q0-2.088 1.456-3.544T8 3.5q.952 0 1.848.326q.896.326 1.625.947L9.827 10.5h3.058l-.754 8.067L15.192 8.5h-3.038l1.486-4.454q.53-.273 1.12-.41q.592-.136 1.202-.136q2.088 0 3.544 1.456T20.962 8.5q0 1.065-.431 2.123T19.06 13.06q-1.04 1.378-2.756 3.2q-1.716 1.822-4.279 4.416" />
              </svg>
            </button>
            <!-- SuperLike Icon -->
            <button
              class="duration-300 bg-yellow-200 border-yellow-200 hover:bg-yellow-300 hover:border-yellow-300 btn btn-circle btn-lg hover:scale-125">
              <svg class="text-yellow-400" xmlns="http://www.w3.org/2000/svg" width="3em" height="3em"
                viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M12 16q1.2 0 2.138-.712T15.5 13.45h-7q.425 1.125 1.363 1.838T12 16m-2.5-4q.625 0 1.063-.437T11 10.5q0-.625-.437-1.062T9.5 9q-.625 0-1.062.438T8 10.5q0 .625.438 1.063T9.5 12m5 0q.625 0 1.063-.437T16 10.5q0-.625-.437-1.062T14.5 9q-.625 0-1.062.438T13 10.5q0 .625.438 1.063T14.5 12M7.625 6.4L12 .725L16.375 6.4l6.85 2.3l-4.325 6.125l.175 6.825L12 19.675L4.925 21.65L5.1 14.8L.8 8.7z" />
              </svg>
            </button>
            <!-- Heart Icon -->
            <button
              class="duration-300 bg-green-300 border-green-300 hover:bg-green-400 hover:border-green-400 btn btn-circle btn-lg hover:scale-125">
              <svg class="text-green-600 mt-1" xmlns="http://www.w3.org/2000/svg" width="3em" height="3em"
                viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="m12 19.654l-.758-.685q-2.448-2.236-4.05-3.829q-1.602-1.592-2.529-2.808q-.926-1.217-1.295-2.201Q3 9.146 3 8.15q0-1.908 1.296-3.204Q5.592 3.65 7.5 3.65q1.32 0 2.475.675T12 6.288Q12.87 5 14.025 4.325T16.5 3.65q1.908 0 3.204 1.296Q21 6.242 21 8.15q0 .996-.368 1.98q-.369.985-1.295 2.202q-.927 1.216-2.52 2.808q-1.592 1.593-4.06 3.83z" />
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
