<script setup>
import { ref } from "vue";


const isDropdownVisible = ref(false);

const toggleDropdown = () => {
	isDropdownVisible.value = !isDropdownVisible.value;
};

const closeDropdown = () => {
	isDropdownVisible.value = false;
};

const isLoginModalOpen = ref(true);
const username = ref("");
const password = ref("");

const openLoginModal = () => {
	isLoginModalOpen.value = false;
	console.log(username.value);
	console.log(password.value);
};
const isShowProfleModal = ref(false)
const openProfileModal = () => {
	isShowProfleModal.value = false
}

const isNavbarWhite = ref(true);

window.addEventListener("scroll", () => {
	// Get the scroll position
	const scrollPosition = window.scrollY;

	// Change the background color based on the scroll position
	isNavbarWhite.value = scrollPosition < 50;
});


import ProfilesData from "../data/Data.json";

const Profiles = ProfilesData.Profiles;

const showDescriptions = ref(false);
const isFlipped = ref(false);

const toggleDescriptions = () => {
	showDescriptions.value = !showDescriptions.value;
};

const likedProfiles = ref([]);



// let count = ref(0);
const heartCount = ref(0);

const incrementHeartCount = (profileIndex) => {
	heartCount.value++;
	// เพิ่มโปรไฟล์ที่ถูก like เข้าไปใน likedProfiles
	likedProfiles.value.push(Profiles[profileIndex]);
	// ลบโปรไฟล์ที่ถูก like ออกจาก femaleProfiles
	Profiles.splice(profileIndex, 1);
	// Optionally, check if there are more profiles remaining
	if (Profiles.length === 0) {
		// Handle the case when there are no more profiles
		// You might want to show a message or fetch more profiles
		console.log("No more profiles");
		return;
	}
};


const dislikeProfile = () => {
	heartCount.value++;
	heartCount.value--;
	// Remove the current profile from the array
	Profiles.splice(0, 1);
	// Optionally, check if there are more profiles remaining
	if (Profiles.length === 0) {
		// Handle the case when there are no more profiles
		// You might want to show a message or fetch more profiles
		console.log("No more profiles");
		return;
	}
	// Toggle the descriptions and update the flipped state
	showDescriptions.value = false;
};

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
						<a class="justify-between" @click="isShowProfleModal = true">
							Profile
							<span class="badge">{{ username }}</span>
						</a>
					</li>
					<li><a>Settings</a></li>
					<li><a @click="isLoginModalOpen = true">Logout</a></li>
				</ul>
			</div>
			<div>
				<!-- Login Modal -->
				<div v-if="isLoginModalOpen"
					class="fixed inset-0 z-50  flex items-center justify-center bg-black bg-opacity-50">
					<div class="z-0 p-6  bg-white rounded shadow-md w-96">

						<h2 class="flex justify-center mb-4 text-3xl text-black font-bold">FINVER</h2>

						<!-- Your login form goes here -->
						<form @submit.prevent="login">
							<div class="mb-4">
								<label for="username" class="block text-sm font-semibold text-gray-600">Username:</label>
								<input type="text" id="username" v-model.trim="username"
									class="w-full p-2 bg-white border border-gray-300 rounded placeholder:italic placeholder:text-slate-400 text-black"
									placeholder="Enter Username" />
							</div>



							<button @click="openLoginModal" type="button" class="p-2 text-white bg-blue-500 rounded">
								Login
							</button>
						</form>


					</div>
				</div>
			</div>
			<!-- Profile Modal -->
			<div>
				<div v-if="isShowProfleModal"
					class="fixed inset-0 z-50  flex items-center justify-center bg-black bg-opacity-50">
					<div class="z-0 p-6  bg-white rounded shadow-md w-96">
						<div class="flex justify-end">
							<button @click="openProfileModal" type="button" class="p-2 text-black ">
								X
							</button>
						</div>
						<h2 class="flex justify-center  mb-4 text-3xl font-bold text-black">Profile</h2>
						
						<div class="w-28  mx-auto ">
						<img alt="Tailwind CSS Navbar component"
							src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" class=" rounded-full" />
						</div>
						<div class="mb-4 ">
							<label for="username" class="block text-center text-sm font-semibold text-gray-600 pt-3">Username: {{ username
							}}</label>
						</div>




					</div>
				</div>
			</div>
		</div>
	</div>


	<!-- Section Landing Page -->
	<section class="px-6 pt-8 pb-12 sm:pt-10 md:pb-16 lg:pb-0 2xl:pt-28" id="home">
		<!-- Buble Chat -->
		<div class="chat chat-start">
			<div class="chat-image avatar">
				<div class="w-10 rounded-full">
					<img alt="Tailwind CSS chat bubble"
						src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
				</div>
			</div>
			<div class="chat-bubble">Hi "{{ username }}"</div>
		</div>
		<div class="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:justify-between">
			<div class="flex flex-col justify-center p-6 text-center rounded-sm lg:flex-1 lg:max-w-xl lg:text-left">
				<h1 class="text-5xl font-bold leading-none sm:text-7xl">
					Kickstart your next Dating in minutes with <span class="text-pink-400">FINVER</span>
				</h1>
				<p class="mt-6 mb-8 text-lg sm:mb-12"> <span class="font-bold text-pink-400"> FINVER </span>is a DatingApp
					Simulator project for INT203 Clientside Web programming II Subject This is our first group project build
					by using Vuejs3 , tailwindcss and Daisy UI </p>
				<div
					class="flex items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
					<a href="#Finver" class="px-8 py-3 text-lg font-semibold bg-pink-400 rounded button">
						Get Started </a>
				</div>
			</div>
			<div
				class="flex items-center justify-center flex-shrink-0 p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
				<img src="./assets/icons/Couple.svg" alt="couplepicture"
					class="object-contain w-auto h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 aspect-square">
			</div>
		</div>

	</section>

	<section class="p-4 lg:p-8" id="features">
		<div class="container mx-auto space-y-20 lg:space-y-36">
			<div class="flex flex-col max-w-xl mx-auto overflow-hidden rounded-md lg:max-w-full lg:flex-row min-h-96">
				<div
					class="flex items-center justify-center flex-1 px-4 mb-8 lg:flex-3 h-72 lg:justify-start sm:h-80 lg:h-96 lg:mb-0">
					<!---->
					<picture alt="" class="object-contain">
						<source type="image/svg" srcset=""><img src="./assets/icons/Tinder.svg" alt="TinderReferences"
							class="w-96 h-72 lg:h-96 aspect-video">
					</picture><!---->
				</div>
				<div class="flex flex-col justify-center flex-1 px-6 lg:flex-2"><span
						class="mb-2 text-base font-semibold tracking-widest uppercase text-rose-500"> A Dating App
						Playground</span>
					<h2 class="text-3xl font-bold"> Features base on Tinder App , But just <span
							class="text-pink-400">Frontend</span></h2>
					<h3 class="mt-3 text-lg font-bold">
						The main features of my app are as follows:</h3>

					<ul class="mx-4 my-3 list-disc">

						<li>Users can select the gender they are interested in and view profiles of individuals they find
							interesting. They have the option to either like or dislike profiles.</li>
						<li>
							The system keeps track of the number of likes received by a profile
						</li>
						<li>
							Names and profile pictures of individuals who have been liked by the user are displayed.
						</li>

					</ul>
				</div>
			</div>

			<div
				class="flex flex-col max-w-xl mx-auto overflow-hidden rounded-md lg:max-w-full lg:mx-0 lg:flex-row-reverse min-h-96">
				<div
					class="flex items-center justify-center flex-1 px-4 mb-8 lg:flex-3 h-72 lg:justify-end sm:h-80 lg:h-96 lg:mb-0">
					<!---->
					<picture alt="" class="object-contain">
						<source type="image/svg" srcset=""><img src="./assets/icons/Subfeature.svg" alt="Sub Features"
							class="object-contain w-80 h-72 lg:h-96 aspect-video">
					</picture><!---->
				</div>
				<div class="flex flex-col justify-center flex-1 px-6 lg:flex-2"><span
						class="mb-2 text-base font-semibold tracking-widest uppercase text-violet-400 "> Additional Features
					</span>
					<h2 class="text-3xl font-bold">More for additional features that we want to show</h2>
					<ul class="mx-4 my-3 list-disc">
						<li>Routing System: Utilizing vue-router version 4 to navigate to different pages seamlessly within
							the app.</li>
						<li>Basic Login System: A basic login system that displays the user's username while they are
							actively using the app.</li>
						<li>Dark Mode: An optional dark mode feature that users can toggle for a different visual
							experience.</li>
					</ul>
				</div>
			</div>




		</div>


	</section>

	<section id="Finver">

		<!-- Heart modal-->
		<div class="mt-10 lg:ml-52">
			<button class="duration-300 bg-pink-500 hover:bg-pink-700 btn btn-circle btn-lg hover:scale-125"
				onclick="modal.showModal()">
				<svg class="text-pink-200" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
					<path fill="currentColor"
						d="m11 19.654l-1.156-1.042q-2.28-2.087-3.799-3.593q-1.518-1.506-2.413-2.679q-.895-1.173-1.264-2.146Q2 9.221 2 8.225q0-1.908 1.296-3.201Q4.592 3.731 6.5 3.731q1.32 0 2.475.672q1.156.672 2.025 1.96q.87-1.288 2.025-1.96q1.156-.672 2.475-.672q1.817 0 3.063 1.172q1.245 1.172 1.402 2.878q-.442-.143-.896-.202q-.454-.06-.913-.06q-2.183.02-3.794 1.52q-1.612 1.501-1.612 3.923q0 .988.362 1.976q.361.987 1.1 1.781q-.533.483-1.17 1.069q-.638.585-1.284 1.181zm6.95-4.19l-2.138-2.114l.713-.708l1.425 1.42l3.525-3.545l.713.708z" />
				</svg>
			</button>
		</div>
		<dialog id="modal" class="modal">
			<div class="modal-box">
				<h3 class="text-lg font-bold text-center">Liked {{ heartCount }}</h3>

				<div class="flex justify-center">
					<p>
						<svg class="mt-1 text-pink-500" xmlns="http://www.w3.org/2000/svg" width="3em" height="3em"
							viewBox="0 0 24 24">
							<path fill="currentColor"
								d="m12 19.654l-.758-.685q-2.448-2.236-4.05-3.829q-1.602-1.592-2.529-2.808q-.926-1.217-1.295-2.201Q3 9.146 3 8.15q0-1.908 1.296-3.204Q5.592 3.65 7.5 3.65q1.32 0 2.475.675T12 6.288Q12.87 5 14.025 4.325T16.5 3.65q1.908 0 3.204 1.296Q21 6.242 21 8.15q0 .996-.368 1.98q-.369.985-1.295 2.202q-.927 1.216-2.52 2.808q-1.592 1.593-4.06 3.83z" />
						</svg>
					</p>
				</div>

				<!-- แสดงรายชื่อและรูปโปรไฟล์ของคนที่ได้รับการไลค์ไปแล้ว -->
				<div class="chats flex-col items-center justify-center gap-5 mt-5 cursor-pointer">
					<div v-for="(profile, index) in likedProfiles" :key="index" class="chat-bubbles">
						<img v-if="profile.profilePicture && profile.profilePicture.length > 0"
							:src="profile.profilePicture[0]" :alt="profile.name" class="profile-pic">
						<div class="chat-text">{{ profile.name }}</div>
					</div>
				</div>

			</div>
			<form method="dialog" class="modal-backdrop">
				<button>close</button>
			</form>
		</dialog>

		<!-- Main Content -->
		<div class="flex items-center justify-center">
			<div class="max-w-md p-4 space-x-4 carousel carousel-center rounded-box">
				<div v-for="(profile, index) in Profiles" :key="profile.id" class="carousel-item">
					<div class="flex justify-center transition-all duration-500 ease-in-out">
						<div class="flex justify-center p-5 pt-[5em]">
							<!-- Card  -->
							<div class="shadow-xl bg-rose-100 card w-96 text-black">
								<div class="h-96 carousel carousel-vertical rounded-t-xl">
									<div v-for="(picture, pictureIndex) in profile.profilePicture" :key="pictureIndex"
										class="h-full carousel-item">
										<img :src="picture" :alt="`${profile.name} Image ${pictureIndex + 1}`"
											class="rounded-t-xl" width="385px" />
									</div>
								</div>

								<!-- Name -->
								<div class="grid grid-cols-3 card-body">
									<h2 class="col-span-2 card-title">
										{{ profile.name }} &nbsp;{{ profile.age }}
									</h2>
									<!-- Dropdown -->
									<button class="flex items-end justify-end col-span-1 dropdown dropdown-end"
										@click="toggleDescriptions">
										<svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em"
											viewBox="0 0 24 24" :class="{ 'rotate-180': isFlipped }">
											<path fill="currentColor"
												d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0" />
										</svg>
									</button>
									<!-- Desc -->
									<p class="col-span-3">
										<span class="font-bold">Bio:</span> {{ profile.bio }}
									</p>
									<!-- Hidden Desc -->
									<div class="col-span-3 max-h-[200px] overflow-y-auto transition-all duration-500 ease-in-out"
										:style="{ maxHeight: showDescriptions ? '200px' : '0' }">

										<p>
											<span class="font-bold">Dating Goal:</span>
											{{ profile.datingGoal }}
										</p>
										<p>
											<span class="font-bold">Lifestyle:</span>
											{{ profile.lifestyle }}
										</p>
										<p>
											<span class="font-bold">Location:</span>
											{{ profile.location }}
										</p>
										<p>
											<span class="font-bold">Height:</span>
											{{ profile.height }}
										</p>
										<p>
											<span class="font-bold">Language:</span>
											{{ profile.language }}
										</p>
										<p>
											<span class="font-bold">Education:</span>
											{{ profile.education }}
										</p>
										<p>
											<span class="font-bold">MBTI:</span> {{ profile.mbti }}
										</p>
										<p>
											<span class="font-bold">Hobby:</span>
											{{ profile.loveStyle }}
										</p>
										<p>
											<span class="font-bold">Interested:</span>
											{{ profile.interested }}
										</p>
									</div>
									<!-- Dislike Icon -->
									<div class="col-span-3 gap-[3em] pt-4 card-actions flex justify-center">
										<button @click="dislikeProfile"
											class="duration-300 bg-red-300 border-red-300 cursor-pointer hover:bg-red-600 hover:border-red-600 btn btn-circle btn-lg hover:scale-125">
											<svg class="mt-1 text-red-800" xmlns="http://www.w3.org/2000/svg" width="2.9em"
												height="2.9em" viewBox="0 0 24 24">
												<path fill="currentColor"
													d="M12.025 20.675q-2.696-2.702-4.443-4.546q-1.747-1.844-2.766-3.19q-1.018-1.347-1.417-2.37Q3 9.546 3 8.5q0-2.088 1.456-3.544T8 3.5q.952 0 1.848.326q.896.326 1.625.947L9.827 10.5h3.058l-.754 8.067L15.192 8.5h-3.038l1.486-4.454q.53-.273 1.12-.41q.592-.136 1.202-.136q2.088 0 3.544 1.456T20.962 8.5q0 1.065-.431 2.123T19.06 13.06q-1.04 1.378-2.756 3.2q-1.716 1.822-4.279 4.416" />
											</svg>
										</button>
										<!-- Heart Icon -->
										<button @click="incrementHeartCount(index)"
											class="duration-300 bg-green-300 border-green-300 hover:bg-green-400 hover:border-green-400 btn btn-circle btn-lg hover:scale-125">
											<svg class="mt-1 text-green-600" xmlns="http://www.w3.org/2000/svg" width="3em"
												height="3em" viewBox="0 0 24 24">
												<path fill="currentColor"
													d="m12 19.654l-.758-.685q-2.448-2.236-4.05-3.829q-1.602-1.592-2.529-2.808q-.926-1.217-1.295-2.201Q3 9.146 3 8.15q0-1.908 1.296-3.204Q5.592 3.65 7.5 3.65q1.32 0 2.475.675T12 6.288Q12.87 5 14.025 4.325T16.5 3.65q1.908 0 3.204 1.296Q21 6.242 21 8.15q0 .996-.368 1.98q-.369.985-1.295 2.202q-.927 1.216-2.52 2.808q-1.592 1.593-4.06 3.83z" />
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Main Content-->

	</section>

	<section class="p-10 lg:p-24" id="Team">
		<div
			class="relative pt-12 pb-24 text-center md:pt-24 after:absolute after:inset-x-0 after:-bottom-8 lg:after:-bottom-16 after:pointer-events-none dark:after:from-slate-900 dark:after:via-slate-900/95">
			<!-- Title -->
			<div class="max-w-2xl mx-auto mb-10 text-center lg:mb-14">
				<h2 class="text-3xl font-bold lg:text-5xl lg:leading-tight dark:text-white">Our <span
						class="text-rose-400 dark:text-rose-600">Team</span></h2>
				<p class="mt-5">Meet the dedicated team behind Finver, the dating app simulator</p>
			</div>
			<!-- End Title -->

			<!-- Grid -->
			<div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
				<!-- Col -->
				<div class="space-y-4 xl:space-y-6">
					<!-- Card -->
					<div
						class="flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-slate-900 dark:border-gray-700">
						<div class="p-4 md:p-6">
							<div class="flex justify-between">
								<div class="flex items-center mb-5 gap-x-3">
									<img class="inline-block rounded-full h-9 w-9"
										src="https://s3-alpha.figma.com/profile/6b687fac-8efb-43bc-95f0-2e7a2807ed30"
										alt="Image Description">
									<div class="grow">
										<p class="font-semibold text-gray-800 dark:text-white">Pheeraphat
											Dherachaisuphakij</p>
									</div>
								</div>
							</div>
							<div>
								<div class="flex text-xs flex-start badge badge-secondary badge-outline">Team Leader
								</div>
								<p class="pt-2 leading-7 text-gray-800 text-start dark:text-white">
									Beta Microsoft Learn Student Ambassadors , Frontend Developer Intern at Innovasive
									Co., Ltd. Student from SIT KMUTT IT#28
								</p>
							</div>
						</div>
					</div>
					<!-- End Card -->

					<!-- Card -->
					<div
						class="flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-slate-900 dark:border-gray-700">
						<div class="p-4 md:p-6">
							<div class="flex justify-between">
								<div class="flex items-center mb-5 gap-x-3">
									<img class="inline-block rounded-full h-9 w-9"
										src="https://ph-avatars.imgix.net/5011220/9cb91dbe-4699-48fe-b4f5-9c70c69181f9"
										alt="Image Description">
									<div class="grow">
										<p class="font-semibold text-gray-800 dark:text-white">Taned Thanyapanich</p>
									</div>
								</div>
							</div>
							<p class="leading-7 text-gray-800 text-start dark:text-white">
								Student from SIT KMUTT IT#28
							</p>
						</div>
					</div>
					<!-- End Card -->

					<!-- Card -->
					<div
						class="flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-slate-900 dark:border-gray-700">
						<div class="p-4 md:p-6">
							<div class="flex justify-between">
								<div class="flex items-center mb-5 gap-x-3">
									<img class="inline-block rounded-full h-9 w-9"
										src="https://s3-alpha.figma.com/profile/6b8a7cf2-08ac-4c50-b931-4c533a8a0731"
										alt="Image Description">
									<div class="grow">
										<p class="font-semibold text-gray-800 dark:text-white">Nateetarn Likitwiwatpong
										</p>
									</div>
								</div>

							</div>
							<p class="leading-7 text-gray-800 text-start dark:text-white">
								Student from SIT KMUTT IT#28
							</p>
						</div>
					</div>
					<!-- End Card -->


				</div>
				<!-- End Col -->

				<!-- Col -->
				<div class="space-y-4 xl:space-y-6">
					<!-- Card -->
					<div
						class="flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-slate-900 dark:border-gray-700">
						<div class="p-4 md:p-6">
							<div class="flex justify-between">
								<div class="flex items-center mb-5 gap-x-3">
									<img class="inline-block rounded-full h-9 w-9"
										src="https://pbs.twimg.com/profile_images/1738985748978876416/FMpE71i5_400x400.jpg"
										alt="Image Description">
									<div class="grow">
										<p class="font-semibold text-gray-800 dark:text-white">Nateetarn Likitwiwatpong
										</p>
									</div>
								</div>
							</div>
							<p class="leading-7 text-gray-800 text-start dark:text-white">
								Student from SIT KMUTT IT#28
							</p>
						</div>
					</div>
					<!-- End Card -->

					<!-- Card -->
					<div
						class="flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-slate-900 dark:border-gray-700">
						<div class="p-4 md:p-6">
							<div class="flex justify-between">
								<div class="flex items-center mb-5 gap-x-3">
									<img class="inline-block rounded-full h-9 w-9"
										src="https://s3-alpha.figma.com/profile/52084af6-a7ab-4c70-ae99-9346239293cf"
										alt="Image Description">
									<div class="grow">
										<p class="font-semibold text-gray-800 dark:text-white">Jiraplus Chanpong</p>
									</div>
								</div>

							</div>
							<p class="leading-7 text-gray-800 text-start dark:text-white">
								Student from SIT KMUTT IT#28
							</p>
						</div>
					</div>
					<!-- End Card -->


				</div>
				<!-- End Col -->
			</div>
			<!-- End Grid -->
		</div>
	</section>

	<section class="p-10 lg:p-24" id="FAQ">
		<!-- Title -->
		<div class="max-w-2xl mx-auto mb-10 text-center lg:mb-14">
			<p class="p-2 text-sm font-semibold tracking-wider text-center uppercase text-rose-400"> How it works </p>
			<h2 class="mb-12 text-4xl font-bold leading-none text-center sm:text-4xl"> Frequently Asked Questions </h2>
		</div>
		<div class="w-full join join-vertical">
			<div class="border collapse collapse-arrow join-item border-base-300">
				<input type="radio" name="my-accordion-4" checked="checked" />
				<div class="text-xl font-medium collapse-title">
					How can I Play?
				</div>
				<div class="collapse-content">
					<p>Just click get started</p>
				</div>
			</div>
			<div class="border collapse collapse-arrow join-item border-base-300">
				<input type="radio" name="my-accordion-4" />
				<div class="text-xl font-medium collapse-title">
					Is your Project a Tinder Clone
				</div>
				<div class="collapse-content">
					<p>It's Likely a tinder clone but we just build in frontend only</p>
				</div>
			</div>
			<div class="border collapse collapse-arrow join-item border-base-300">
				<input type="radio" name="my-accordion-4" />
				<div class="text-xl font-medium collapse-title">
					Who is the pillar of this group
				</div>
				<div class="collapse-content">
					<p>Pheeraphat or you can called him P</p>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.button {
	transition: transform 0.25s ease-in-out;
	cursor: pointer;
}

.button:hover {
	transform: scale(1.1);
}

.content {
	max-height: 0;
	overflow: hidden;
	transition: max-height 0.5s ease;
}

.show {
	max-height: 200px;

}

/* CSS for chat */
.chats {
	width: 100%;
}

.chat-bubbles {
	display: flex;
	align-items: center;
	width: 100%;
}

.profile-pic {
	border-radius: 50%;
	width: 3em;
}

.chat-text {
	padding: 10px;
	border-radius: 10px;
}
</style>
