<script setup>
import { ref } from "vue";

const isDropdownVisible = ref(false);

const toggleDropdown = () => {
	isDropdownVisible.value = !isDropdownVisible.value;
};

const closeDropdown = () => {
	isDropdownVisible.value = false;
};

const isLoginModalOpen = ref(false);
const username = ref("");
const password = ref("");

const openLoginModal = () => {
	isLoginModalOpen.value = false;
	console.log(username.value);
	console.log(password.value);
};

const closeLoginModal = () => {
	isLoginModalOpen.value = false;
	// Optionally, you may want to clear the form fields here
	username.value = "";
	password.value = "";
	console.log(username.value);
	console.log(password.value);
};


const isNavbarWhite = ref(true);

window.addEventListener("scroll", () => {
    // Get the scroll position
    const scrollPosition = window.scrollY;

    // Change the background color based on the scroll position
    isNavbarWhite.value = scrollPosition < 50;
});
</script>

<template>
	<!-- Navbar-->
	<div class="sticky top-0 z-50 pt-3 navbar" :class="{ 'bg-pink-100': isNavbarWhite, 'bg-pink-300': !isNavbarWhite }">
		<div class="flex-1">
			<a class="text-3xl text-pink-900 btn btn-ghost">FINVER</a>
		</div>
		<div class="flex-none gap-5">
			<div>
				<ul class="flex gap-10 text-xl font-semibold text-pink-900">
					<li class="cursor-pointer "><a href="#home">Home</a></li>
					<li class="cursor-pointer"><a href="#features">Feature</a></li>
					<li class="cursor-pointer"><a href="#Team">OurTeam</a></li>
					<li class="cursor-pointer"><a href="#FAQ">FAQ</a></li>
				</ul>
			</div>
			<!-- toggle BG Change -->
			<div class="flex justify-end">
				<label class="swap swap-rotate">
					<input type="checkbox" class="theme-controller" value="dracula" />
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
			<div>
				<div @click="toggleDropdown" tabIndex="0" role="button" class="btn btn-ghost btn-circle avatar">
					<div class="w-10 rounded-full">
						<img alt="Tailwind CSS Navbar component"
							src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
					</div>
				</div>
				<ul v-show="isDropdownVisible" @click.away="closeDropdown" tabIndex="0"
					class="absolute mt-3 right-0 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
					<li>
						<a class="justify-between">
							Profile
							<span class="badge">New</span>
						</a>
					</li>
					<li><a>Settings</a></li>
					<li><a @click="isLoginModalOpen = true">Login</a></li>
				</ul>
			</div>
			<div>
				<!-- Login Modal -->
				<div v-if="isLoginModalOpen"
					class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
					<div class="z-0 p-6 bg-white rounded shadow-md w-96">
						<h2 class="flex justify-center mb-4 text-3xl font-bold">FINVER</h2>

						<!-- Your login form goes here -->
						<form @submit.prevent="login">
							<div class="mb-4">
								<label for="username" class="block text-sm font-semibold text-gray-600">Username:</label>
								<input type="text" id="username" v-model.trim="username"
									class="w-full p-2 bg-white border border-gray-300 rounded placeholder:italic placeholder:text-slate-400"
									placeholder="Enter Username" />
							</div>

							<div class="mb-4">
								<label for="password" class="block text-sm font-semibold text-gray-600">Password:</label>
								<input type="password" id="password" v-model.trim="password"
									class="w-full p-2 bg-white border border-gray-300 rounded placeholder:italic placeholder:text-slate-400"
									placeholder="Enter Password" />
							</div>

							<button @click="openLoginModal" type="button" class="p-2 text-white bg-blue-500 rounded">
								Login
							</button>
						</form>

						<button @click="closeLoginModal" class="mt-4 text-gray-600">
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

html {
  scroll-behavior: smooth;
}
</style>
